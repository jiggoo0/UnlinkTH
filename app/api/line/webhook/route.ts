/** @format */

import { NextRequest, NextResponse } from "next/server";
import * as line from "@line/bot-sdk";

// 📍 SETTINGS & SECURITY
const LINE_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN || "";
const ADMIN_ID = process.env.LINE_USER_ID || "";

// 🌐 GOOGLE SHEETS API URL (ดึงจาก Vercel Environment Variables)
const GSHEET_API_URL = process.env.GSHEET_API_URL || "";

const client = new line.messagingApi.MessagingApiClient({
  channelAccessToken: LINE_TOKEN,
});

/**
 * UNLINK-GLOBAL: LINE OPERATIONAL WEBHOOK WITH DB INTEGRATION
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const events: line.webhook.Event[] = body.events || [];

    const results = await Promise.all(
      events.map(async (event) => {
        try {
          if (event.type === "follow") return handleFollowEvent(event);
          if (event.type === "message" && event.message.type === "text")
            return handleTextEvent(event);
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

async function handleFollowEvent(event: line.webhook.FollowEvent) {
  return client.replyMessage({
    replyToken: event.replyToken,
    messages: [getMainMenuFlex()],
  });
}

/**
 * ดึงข้อมูลเคสจาก Google Sheets
 */
async function getCaseFromDb(caseId: string) {
  try {
    if (GSHEET_API_URL.includes("YOUR_DEPLOYMENT_ID")) return null;
    const res = await fetch(`${GSHEET_API_URL}?caseId=${caseId}`);
    const data = await res.json();
    return data.error ? null : data;
  } catch (e) {
    console.error("DB Fetch Error:", e);
    return null;
  }
}

async function handleTextEvent(event: line.webhook.MessageEvent) {
  if (event.message.type !== "text") return null;

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

    const caseData = await getCaseFromDb(caseId);

    if (caseData) {
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
            text: `🔍 [UNLINK-SYSTEM] ตรวจหาเคส ${caseId}...\n\nขออภัยครับ ไม่พบหมายเลขเคสนี้ในระบบการทำความสะอาดข้อมูล หรือ API ยังไม่พร้อมใช้งาน\n\nรบกวนตรวจสอบหมายเลขอีกครั้ง หรือพิมพ์ '5' เพื่อสอบถามเจ้าหน้าที่ครับ`,
          },
        ],
      });
    }
  }

  // 2. ระบบขอความช่วยเหลือด่วน
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

  // 3. Strategic Routing
  switch (normalizedInput) {
    case "1":
      return client.replyMessage({
        replyToken,
        messages: [getReputationMenuFlex()],
      });
    case "11":
      return client.replyMessage({
        replyToken,
        messages: [
          getServiceDetailFlex(
            "REPUTATION_CLEANUP",
            "ลบประจาน & ข่าวเสีย",
            "ส่ง 'ลิงก์ที่ต้องการให้ลบ' เพื่อวิเคราะห์โครงสร้างข้อมูลเบื้องต้นได้ทันที",
          ),
        ],
      });
    case "12":
      return client.replyMessage({
        replyToken,
        messages: [
          getServiceDetailFlex(
            "BLACKLIST_REMOVAL",
            "ล้างชื่อแบล็คลิสต์",
            "ส่ง 'ชื่อ-นามสกุล' ที่ติดปัญหา เพื่อตรวจสอบฐานข้อมูลแบล็คลิสต์ออนไลน์",
          ),
        ],
      });

    case "2":
      return client.replyMessage({
        replyToken,
        messages: [getFinancialMenuFlex()],
      });
    case "21":
      return client.replyMessage({
        replyToken,
        messages: [
          getServiceDetailFlex(
            "CREDIT_ENGINEERING",
            "ฟื้นฟูเครดิตบูโร",
            "รบกวนแจ้ง 'ยอดหนี้รวม' และ 'สถานะปัจจุบัน' เพื่อประเมินความเป็นไปได้ในการเข้าแทรกแซง",
          ),
        ],
      });
    case "22":
      return client.replyMessage({
        replyToken,
        messages: [
          getServiceDetailFlex(
            "STATEMENT_CRAFTING",
            "ปั้นสเตทเม้นท์พรีเมียม",
            "ระบุ 'อาชีพปัจจุบัน' และ 'เป้าหมายที่ต้องการ' (เช่น ยอดกู้บ้าน) เพื่อวางแผนทางการเงิน",
          ),
        ],
      });

    case "3":
      return client.replyMessage({
        replyToken,
        messages: [getOverseasMenuFlex()],
      });
    case "31":
      return client.replyMessage({
        replyToken,
        messages: [
          getServiceDetailFlex(
            "GLOBAL_MORTGAGE",
            "เอกสารกู้บ้านสายบิน",
            "ระบุ 'ประเทศที่ทำงาน' และ 'เป้าหมายราคาบ้าน' เพื่อเริ่มขั้นตอนการจัดเตรียมเอกสารชั้นสูง",
          ),
        ],
      });
    case "34":
      return client.replyMessage({
        replyToken,
        messages: [
          getServiceDetailFlex(
            "PRE_RETURN_CLEANUP",
            "เคลียร์ประวัติก่อนกลับไทย",
            "แจ้งข้อมูลที่คุณกังวลภายใต้ Vault Protocol (ความลับสูงสุด) เพื่อหาทางออกที่ปลอดภัยที่สุด",
          ),
        ],
      });

    case "4":
    case "รีวิว":
    case "REVIEW":
      return client.replyMessage({
        replyToken,
        messages: [
          {
            type: "text",
            text: "⭐ UNLINK SUCCESS STORIES:\nเรามีเคสที่สำเร็จแล้วกว่า 1,000+ เคส\nตรวจสอบได้ที่: https://www.unlink-th.com/case-studies",
          },
        ],
      });
    case "0":
    case "MENU":
    case "เมนู":
      return client.replyMessage({ replyToken, messages: [getMainMenuFlex()] });

    default:
      if (
        ["ลบ", "ประจาน", "รูป", "ข่าว"].some((k) => normalizedInput.includes(k))
      )
        return client.replyMessage({
          replyToken,
          messages: [getReputationMenuFlex()],
        });
      if (
        ["กู้", "บ้าน", "เงิน", "สเตทเม้นท์"].some((k) =>
          normalizedInput.includes(k),
        )
      )
        return client.replyMessage({
          replyToken,
          messages: [getFinancialMenuFlex()],
        });
      return client.replyMessage({ replyToken, messages: [getMainMenuFlex()] });
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
            letterSpacing: "2px",
          },
          {
            type: "text",
            text: "REPUTATION & FINANCIAL STRATEGY",
            color: "#cccccc",
            size: "xxs",
            letterSpacing: "1px",
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
                  label: "🛡️ Reputation Shield",
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
                  label: "🏦 Financial Engineering",
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
                  label: "✈️ Overseas Operations",
                  text: "3",
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

function getOperationalStatusFlex(data: {
  caseId: string;
  progress: number;
  currentPhase: string;
  step1?: string;
  step2?: string;
  step3?: string;
}): line.messagingApi.FlexMessage {
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
                    letterSpacing: "1px",
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
                color:
                  data.step1 && data.step1.includes("สำเร็จ")
                    ? "#D4AF37"
                    : "#aaaaaa",
                size: "xs",
              },
              {
                type: "text",
                text: `↻ ${data.step2 || "Step 2"}`,
                color:
                  data.step2 && data.step2.includes("ดำเนินการ")
                    ? "#ffffff"
                    : "#666666",
                size: "xs",
                weight:
                  data.step2 && data.step2.includes("ดำเนินการ")
                    ? "bold"
                    : "regular",
              },
              {
                type: "text",
                text: `○ ${data.step3 || "Step 3"}`,
                color: "#666666",
                size: "xs",
              },
            ],
          },
          { type: "separator", color: "#333333" },
          {
            type: "text",
            text: "Vault Protocol: ปลอดภัยระดับสูงสุด ความลับของคุณคือความสำคัญอันดับหนึ่ง",
            color: "#aaaaaa",
            size: "xxs",
            wrap: true,
            align: "center",
          },
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

function getServiceDetailFlex(
  id: string,
  title: string,
  instruction: string,
): line.messagingApi.FlexMessage {
  return {
    type: "flex",
    altText: `Service: ${title}`,
    contents: {
      type: "bubble",
      styles: { body: { backgroundColor: "#000000" } },
      body: {
        type: "box",
        layout: "vertical",
        spacing: "md",
        contents: [
          {
            type: "text",
            text: "SERVICE PROTOCOL",
            color: "#D4AF37",
            size: "xxs",
            weight: "bold",
            letterSpacing: "2px",
          },
          {
            type: "text",
            text: title,
            color: "#ffffff",
            size: "lg",
            weight: "bold",
          },
          { type: "separator", color: "#333333" },
          {
            type: "text",
            text: instruction,
            color: "#eeeeee",
            size: "sm",
            wrap: true,
          },
          {
            type: "box",
            layout: "vertical",
            margin: "md",
            backgroundColor: "#222222",
            paddingAll: "md",
            cornerRadius: "sm",
            contents: [
              {
                type: "text",
                text: "🔒 ข้อมูลของคุณถูกคุ้มครองโดย PDPA & Vault Protocol",
                color: "#aaaaaa",
                size: "xxs",
                align: "center",
              },
            ],
          },
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

function getReputationMenuFlex(): line.messagingApi.FlexMessage {
  return getSubMenuFlex("REPUTATION SHIELD", "การจัดการชื่อเสียงดิจิทัล", [
    { label: "ลบประจาน / ข่าวเสีย", text: "11" },
    { label: "ล้างแบล็คลิสต์ออนไลน์", text: "12" },
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
    "OVERSEAS OPERATIONS",
    "ยุทธศาสตร์สำหรับคนไทยในต่างประเทศ",
    [
      { label: "เอกสารกู้บ้านสายบิน", text: "31" },
      { label: "เคลียร์ประวัติก่อนกลับไทย", text: "34" },
    ],
  );
}

function getSubMenuFlex(
  id: string,
  title: string,
  buttons: { label: string; text: string }[],
): line.messagingApi.FlexMessage {
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
            letterSpacing: "2px",
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
        contents: buttons
          .map((b) => ({
            type: "button",
            action: { type: "message", label: b.label, text: b.text },
            height: "sm",
            style: "secondary",
            color: "#333333",
          }))
          .concat([
            {
              type: "button",
              action: { type: "message", label: "BACK TO MENU", text: "0" },
              height: "sm",
              style: "link",
              color: "#bbbbbb",
            },
          ] as line.messagingApi.FlexButton[]),
      },
    },
  };
}
