/** @format */

import { NextRequest, NextResponse } from "next/server";
import * as line from "@line/bot-sdk";
import { getCaseStatus, updateCaseStatus } from "../../../../lib/google-sheets";
import { sendTicketEmail } from "../../../../lib/email";

// 📍 SETTINGS & SECURITY
const LINE_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN || "";
const ADMIN_ID = process.env.LINE_USER_ID || "";

const client = new line.messagingApi.MessagingApiClient({
  channelAccessToken: LINE_TOKEN,
});

/**
 * UNLINK-GLOBAL: LINE OPERATIONAL WEBHOOK (ADMIN-CONTROL MODE)
 * ตัดการพึ่งพา SlipOK และเปลี่ยนเป็นการอนุมัติโดยเจ้าหน้าที่ + ส่งตั๋วอัตโนมัติ
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const events: line.webhook.Event[] = body.events || [];

    const results = await Promise.all(
      events.map(async (event) => {
        try {
          if (event.type === "follow") return handleFollowEvent(event);
          if (event.type === "message") {
            if (event.message.type === "text") return handleTextEvent(event);
            if (event.message.type === "image") return handleImageEvent(event);
          }
          if (event.type === "postback") return handlePostbackEvent(event);
        } catch (e) {
          console.error("Operational Error:", e);
        }
        return null;
      }),
    );

    return NextResponse.json({ status: "success", results });
  } catch (err) {
    console.error("Main Webhook Failure:", err);
    return NextResponse.json({ status: "error" }, { status: 500 });
  }
}

/**
 * 🛡️ ADMIN POSTBACK HANDLER
 * ประมวลผลเมื่อ Admin กดปุ่ม "อนุมัติ" ใน LINE
 */
async function handlePostbackEvent(event: line.webhook.PostbackEvent) {
  const userId = event.source?.userId;
  if (userId !== ADMIN_ID) return null; // เฉพาะ Admin เท่านั้นที่มีสิทธิ์

  const data = new URLSearchParams(event.postback.data);
  const action = data.get("action");
  const caseId = data.get("caseId");
  const customerEmail = data.get("email") || "customer@example.com";

  if (action === "approve" && caseId) {
    try {
      // 1. อัปเดต Google Sheets
      await updateCaseStatus(caseId, {
        mainStatus: "Verified Success",
        currentPhase: "Document Delivered",
        progress: 100,
        step1: "Payment Confirmed",
      });

      // 2. ดึงข้อมูลเพื่อส่งอีเมล
      const caseData = await getCaseStatus(caseId);
      if (!("error" in caseData)) {
        // 3. ยิงอีเมลตั๋ว/เอกสารอัตโนมัติ
        await sendTicketEmail(customerEmail, {
          customerName: caseData.customerName,
          caseId: caseData.caseId,
          amount: 299,
          serviceTitle: "Official Itinerary Alignment",
        });
      }

      return client.replyMessage({
        replyToken: event.replyToken || "",
        messages: [
          {
            type: "text",
            text: `✅ [SYSTEM-SUCCESS]\nเคส ${caseId} ได้รับการอนุมัติแล้ว\n- อัปเดต Google Sheets สำเร็จ\n- ส่งอีเมลตั๋วหาลูกค้าเรียบร้อยแล้ว`,
          },
        ],
      });
    } catch (error) {
      console.error("Postback Error:", error);
      return client.replyMessage({
        replyToken: event.replyToken || "",
        messages: [
          { type: "text", text: "❌ เกิดข้อผิดพลาดในการประมวลผลคำสั่ง" },
        ],
      });
    }
  }
  return null;
}

async function handleFollowEvent(event: line.webhook.FollowEvent) {
  if (!event.replyToken) return null;
  return client.replyMessage({
    replyToken: event.replyToken,
    messages: [getMainMenuFlex()],
  });
}

async function handleTextEvent(event: line.webhook.MessageEvent) {
  if (event.message.type !== "text" || !event.replyToken) return null;

  const input = event.message.text.trim();
  const replyToken = event.replyToken;
  const userId = event.source?.userId || "unknown";
  const normalizedInput = input.toUpperCase().replace(/\s+/g, "");

  // 1. ระบบตรวจจับหมายเลขเคส (Smart DB Lookup)
  const caseIdMatch =
    normalizedInput.match(/(UL|CASE)-(\d{4,6})/) ||
    normalizedInput.match(/^(\d{4,6})$/);
  if (caseIdMatch) {
    const rawId = caseIdMatch[0];
    const caseId =
      rawId.startsWith("UL") || rawId.startsWith("CASE")
        ? rawId
        : `UL-${rawId}`;

    const caseData = await getCaseStatus(caseId);

    if ("caseId" in caseData) {
      return client.replyMessage({
        replyToken,
        messages: [getOperationalStatusFlex(caseData)],
      });
    } else {
      return client.replyMessage({
        replyToken,
        messages: [
          {
            type: "text",
            text: `🔍 [UNLINK-SYSTEM] ตรวจหาเคส ${caseId}...\n\nขออภัยครับ ไม่พบหมายเลขเคสนี้ในระบบการทำความสะอาดข้อมูล\n\nรบกวนตรวจสอบหมายเลขอีกครั้ง หรือพิมพ์ '5' เพื่อสอบถามเจ้าหน้าที่ครับ`,
          },
        ],
      });
    }
  }

  // 2. ระบบติดต่อที่ปรึกษาเร่งด่วน
  if (
    ["5", "ด่วน", "แอดมิน", "ADMIN", "HELP", "คุยกับคน"].some((k) =>
      normalizedInput.includes(k),
    )
  ) {
    await client.pushMessage({
      to: ADMIN_ID,
      messages: [
        {
          type: "text",
          text: `🚨 [URGENT INTERVENTION]\nRequest from: ${userId}\nMessage: ${input}\nAction: Needs Human Specialist`,
        },
      ],
    });
    return client.replyMessage({
      replyToken,
      messages: [
        {
          type: "text",
          text: "🔒 [UNLINK-SECURITY] รับทราบความประสงค์ครับ\nขณะนี้กำลังส่งข้อมูลให้ผู้เชี่ยวชาญเฉพาะทาง (Specialist) ตรวจสอบเคสของคุณโดยด่วน\n\nเจ้าหน้าหน้าที่ตรวจสอบจะตอบกลับคุณในช่องทางนี้เร็วที่สุดครับ",
        },
      ],
    });
  }

  // 3. Strategic Routing (Standardized 2026 Protocol)
  switch (normalizedInput) {
    case "1":
      return client.replyMessage({ replyToken, messages: [getDocMenuFlex()] });
    case "2":
      return client.replyMessage({
        replyToken,
        messages: [getFinancialMenuFlex()],
      });
    case "3":
      return client.replyMessage({
        replyToken,
        messages: [getOverseasMenuFlex()],
      });
    case "4":
      return client.replyMessage({
        replyToken,
        messages: [getReputationMenuFlex()],
      });
    case "0":
    case "MENU":
    case "เมนู":
      return client.replyMessage({ replyToken, messages: [getMainMenuFlex()] });
    default:
      return client.replyMessage({ replyToken, messages: [getMainMenuFlex()] });
  }
}

/**
 * 🖼️ IMAGE HANDLER (THE CORE OF MANUAL APPROVAL)
 */
async function handleImageEvent(event: line.webhook.Event) {
  if (
    event.type !== "message" ||
    event.message.type !== "image" ||
    !event.replyToken
  )
    return null;

  const replyToken = event.replyToken;
  const messageId = event.message.id;
  const userId = event.source?.userId || "unknown";

  try {
    // 1. แจ้งเตือนลูกค้า
    await client.replyMessage({
      replyToken,
      messages: [
        {
          type: "text",
          text: "🔒 [UNLINK-SYSTEM]\nได้รับสลิปของคุณเรียบร้อยแล้วครับ\nขณะนี้กำลังส่งให้เจ้าหน้าที่ตรวจสอบยอดเงิน (Manual Verification)\n\nเมื่อตรวจสอบสำเร็จ ระบบจะส่งตั๋วให้คุณทางอีเมลทันทีครับ",
        },
      ],
    });

    // 2. ส่งข้อมูลให้ Admin (คุณอลงกรณ์) เพื่ออนุมัติ
    // 💡 ในที่นี้เราจะสุ่ม Case ID ตัวอย่าง (ในระบบจริงควรให้ลูกค้าพิมพ์ Case ID ก่อนส่งรูป หรือใช้ระบบเศษสตางค์)
    const mockCaseId = "UL-1001";

    await client.pushMessage({
      to: ADMIN_ID,
      messages: [
        {
          type: "text",
          text: `🚨 [NEW-SLIP-RECEIVED]\nลูกค้าส่งสลิปเข้ามาใหม่ครับ\n\nUser: ${userId}\nโปรดตรวจสอบยอดเงินในแอปธนาคารก่อนอนุมัติ`,
        },
        {
          type: "image",
          originalContentUrl: `https://api-data.line.me/v2/bot/message/${messageId}/content`,
          previewImageUrl: `https://api-data.line.me/v2/bot/message/${messageId}/content`,
        },
        {
          type: "flex",
          altText: "Approval Action Required",
          contents: {
            type: "bubble",
            body: {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "text",
                  text: "ADMIN VERIFICATION",
                  weight: "bold",
                  color: "#D4AF37",
                  size: "sm",
                },
                {
                  type: "text",
                  text: `ยืนยันยอดเงินสำหรับเคส ${mockCaseId}?`,
                  size: "xs",
                  color: "#aaaaaa",
                  margin: "sm",
                },
                {
                  type: "button",
                  action: {
                    type: "postback",
                    label: "✅ อนุมัติและส่งอีเมลตั๋ว",
                    data: `action=approve&caseId=${mockCaseId}&email=customer@example.com`,
                    displayText: `กำลังอนุมัติเคส ${mockCaseId}...`,
                  },
                  style: "primary",
                  color: "#D4AF37",
                  margin: "md",
                },
              ],
            },
          },
        },
      ],
    });

    return null;
  } catch (error) {
    console.error("Image Processing Error:", error);
    return null;
  }
}

/**
 * [Design System] FLEX MESSAGE GENERATORS
 */

function getMainMenuFlex(): line.messagingApi.FlexMessage {
  return {
    type: "flex",
    altText: "UNLINK-GLOBAL | Executive Menu",
    contents: {
      type: "bubble",
      styles: {
        header: { backgroundColor: "#000000" },
        body: { backgroundColor: "#000000" },
        footer: { backgroundColor: "#000000" },
      },
      header: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: "UNLINK-GLOBAL",
            weight: "bold",
            color: "#D4AF37",
            size: "sm",
          },
          {
            type: "text",
            text: "REPUTATION & FINANCIAL STRATEGY",
            color: "#cccccc",
            size: "xxs",
          },
        ],
      },
      hero: {
        type: "image",
        url: "https://www.unlink-th.com/og/og-main.webp",
        size: "full",
        aspectRatio: "20:13",
        aspectMode: "cover",
      },
      body: {
        type: "box",
        layout: "vertical",
        spacing: "md",
        contents: [
          {
            type: "text",
            text: "Welcome to the Vault Protocol",
            weight: "bold",
            color: "#ffffff",
            size: "md",
          },
          {
            type: "text",
            text: "เลือกบริการที่ท่านต้องการปรึกษาภายใต้ความลับสูงสุด",
            color: "#dddddd",
            size: "xs",
            wrap: true,
          },
          {
            type: "box",
            layout: "vertical",
            spacing: "sm",
            margin: "lg",
            contents: [
              {
                type: "button",
                action: {
                  type: "message",
                  label: "📝 Documentation",
                  text: "1",
                },
                height: "sm",
                style: "secondary",
                color: "#333333",
              },
              {
                type: "button",
                action: {
                  type: "message",
                  label: "🏦 Financial",
                  text: "2",
                },
                height: "sm",
                style: "secondary",
                color: "#333333",
              },
              {
                type: "button",
                action: {
                  type: "message",
                  label: "✈️ Immigration",
                  text: "3",
                },
                height: "sm",
                style: "secondary",
                color: "#333333",
              },
              {
                type: "button",
                action: {
                  type: "message",
                  label: "🛡️ Reputation Shield",
                  text: "4",
                },
                height: "sm",
                style: "secondary",
                color: "#333333",
              },
            ],
          },
        ],
      },
      footer: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "button",
            action: {
              type: "message",
              label: "TALK TO SPECIALIST (URGENT)",
              text: "5",
            },
            height: "sm",
            style: "primary",
            color: "#D4AF37",
          },
        ],
      },
    },
  };
}

function getOperationalStatusFlex(data: any): line.messagingApi.FlexMessage {
  const progress = data.progress || 0;
  return {
    type: "flex",
    altText: `Status Update: ${data.caseId}`,
    contents: {
      type: "bubble",
      styles: { body: { backgroundColor: "#000000" } },
      body: {
        type: "box",
        layout: "vertical",
        spacing: "xl",
        contents: [
          {
            type: "box",
            layout: "horizontal",
            contents: [
              {
                type: "box",
                layout: "vertical",
                flex: 1,
                contents: [
                  {
                    type: "text",
                    text: "CASE PROTOCOL",
                    color: "#D4AF37",
                    size: "xxs",
                    weight: "bold",
                  },
                  {
                    type: "text",
                    text: data.caseId,
                    color: "#ffffff",
                    size: "xl",
                    weight: "bold",
                  },
                ],
              },
              {
                type: "box",
                layout: "vertical",
                contents: [
                  {
                    type: "text",
                    text: "SYSTEM ACTIVE",
                    color: "#00ff00",
                    size: "xxs",
                    align: "end",
                    weight: "bold",
                  },
                  {
                    type: "text",
                    text: "●",
                    color: "#00ff00",
                    size: "xxs",
                    align: "end",
                    weight: "bold",
                  },
                ],
              },
            ],
          },
          {
            type: "box",
            layout: "vertical",
            spacing: "sm",
            contents: [
              {
                type: "box",
                layout: "horizontal",
                contents: [
                  {
                    type: "text",
                    text: "Phase:",
                    color: "#cccccc",
                    size: "xs",
                  },
                  {
                    type: "text",
                    text: data.currentPhase.toUpperCase(),
                    color: "#ffffff",
                    size: "xs",
                    align: "end",
                    weight: "bold",
                  },
                ],
              },
              {
                type: "box",
                layout: "vertical",
                height: "4px",
                backgroundColor: "#333333",
                margin: "sm",
                contents: [
                  {
                    type: "box",
                    layout: "vertical",
                    width: `${progress}%`,
                    height: "4px",
                    backgroundColor: "#D4AF37",
                    contents: [],
                  },
                ],
              },
            ],
          },
          {
            type: "box",
            layout: "vertical",
            spacing: "xs",
            contents: [
              {
                type: "text",
                text: `✓ ${data.step1 || "Step 1"}`,
                color: data.step1?.includes("สำเร็จ") ? "#D4AF37" : "#aaaaaa",
                size: "xs",
              },
            ],
          },
          { type: "separator", color: "#333333" },
          {
            type: "button",
            action: { type: "message", label: "CONTACT SPECIALIST", text: "5" },
            height: "sm",
            style: "link",
            color: "#D4AF37",
          },
        ],
      },
    },
  };
}

function getReputationMenuFlex(): line.messagingApi.FlexMessage {
  return getSubMenuFlex("REPUTATION SHIELD", "การจัดการชื่อเสียงดิจิทัล", [
    { label: "ลบประวัติ / ข้อมูลส่วนตัว", text: "42" },
    { label: "ล้างแบล็คลิสต์ออนไลน์", text: "41" },
    { label: "กู้วิกฤตธุรกิจ (SME)", text: "43" },
  ]);
}

function getFinancialMenuFlex(): line.messagingApi.FlexMessage {
  return getSubMenuFlex("FINANCIAL ENGINEERING", "วิศวกรรมการเงินและเครดิต", [
    { label: "ฟื้นฟูเครดิตบูโร", text: "21" },
    { label: "ปั้นสเตทเม้นท์พรีเมียม", text: "22" },
  ]);
}

function getOverseasMenuFlex(): line.messagingApi.FlexMessage {
  return getSubMenuFlex(
    "IMMIGRATION & MOBILITY",
    "ยุทธศาสตร์วีซ่าและการเดินทาง",
    [
      { label: "แผนการเดินทาง (Verified)", text: "31" },
      { label: "วีซ่าไลฟ์สไตล์ (Move)", text: "32" },
    ],
  );
}

function getDocMenuFlex(): line.messagingApi.FlexMessage {
  return getSubMenuFlex("DOCUMENTATION STRATEGY", "การจัดเตรียมเอกสารชั้นสูง", [
    { label: "วางแผนเอกสารรายได้", text: "11" },
  ]);
}

function getSubMenuFlex(
  id: string,
  title: string,
  buttons: any[],
): line.messagingApi.FlexMessage {
  const flexButtons: any[] = buttons.map((b) => ({
    type: "button",
    action: { type: "message", label: b.label, text: b.text },
    height: "sm",
    style: "secondary",
    color: "#333333",
  }));

  return {
    type: "flex",
    altText: title,
    contents: {
      type: "bubble",
      styles: {
        header: { backgroundColor: "#000000" },
        body: { backgroundColor: "#000000" },
      },
      header: {
        type: "box",
        layout: "vertical",
        contents: [
          {
            type: "text",
            text: id,
            weight: "bold",
            color: "#D4AF37",
            size: "xxs",
          },
          {
            type: "text",
            text: title,
            color: "#ffffff",
            size: "sm",
            weight: "bold",
          },
        ],
      },
      body: {
        type: "box",
        layout: "vertical",
        spacing: "sm",
        contents: [
          ...flexButtons,
          {
            type: "button",
            action: { type: "message", label: "BACK TO MENU", text: "0" },
            height: "sm",
            style: "link",
            color: "#bbbbbb",
          },
        ],
      },
    },
  };
}
