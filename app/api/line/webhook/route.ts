/** @format */

import { NextRequest, NextResponse } from "next/server";
import * as line from "@line/bot-sdk";

// 1. ตั้งค่า LINE Client
const client = new line.messagingApi.MessagingApiClient({
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN || "",
});

const ADMIN_ID = process.env.LINE_USER_ID || "";

/**
 * LINE WEBHOOK HANDLER (PREMIUM VERSION)
 * -------------------------------------------------------------------------
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const events: any[] = body.events;

    const results = await Promise.all(
      events.map(async (event) => {
        if (event.type === "follow") return handleFollowEvent(event);
        if (event.type === "message" && event.message.type === "text") return handleTextEvent(event);
        return null;
      })
    );

    return NextResponse.json({ status: "success", results });
  } catch (err) {
    console.error("LINE Webhook Error:", err);
    return NextResponse.json({ status: "error" }, { status: 500 });
  }
}

/**
 * [Greeting] ต้อนรับแบบพรีเมียม
 */
async function handleFollowEvent(event: any) {
  const replyToken = event.replyToken;
  const greetingText = 
    "ยินดีที่ได้รู้จักนะครับ! ผมคือผู้ช่วยส่วนตัวจาก UNLINK-TH ครับ \n\n" +
    "เราคือทางออกสุดท้ายของผู้ที่มีปัญหา 'ประวัติการเงิน' และ 'ชื่อเสียงออนไลน์' \n\n" +
    "เลือกบริการที่คุณต้องการปรึกษาจากเมนูด้านล่าง หรือพิมพ์รายละเอียดทิ้งไว้ได้เลยครับ ทีมงานผู้เชี่ยวชาญพร้อมดูแลคุณอย่างลับที่สุดครับ";

  return client.replyMessage({
    replyToken: replyToken,
    messages: [{ type: "text", text: greetingText }],
  });
}

/**
 * [Main Logic] ตอบโต้และแจ้งเตือนแอดมิน
 */
async function handleTextEvent(event: any) {
  const userMessage = event.message.text.toLowerCase();
  const replyToken = event.replyToken;
  const userId = event.source.userId;

  // ก. ระบบแจ้งเตือนแอดมิน (Real-time Notification)
  if (userMessage.includes("ปรึกษาด่วน") || userMessage.includes("แอดมิน") || userMessage.includes("เจ้าหน้าที่")) {
    if (ADMIN_ID) {
      await client.pushMessage({
        to: ADMIN_ID,
        messages: [{ 
          type: "text", 
          text: `🚨 [ALERT] มีลูกค้าต้องการคุยด่วน!\nUser ID: ${userId}\nข้อความ: ${userMessage}\n\nรีบเข้าไปตอบในหน้า Manager เลยครับ!` 
        }],
      });
    }
    return client.replyMessage({
      replyToken: replyToken,
      messages: [{ type: "text", text: "รับทราบครับ! ผมแจ้งเจ้าหน้าที่ให้เรียบร้อยแล้วครับ รบกวนรอสักครู่นะครับ เจ้าหน้าที่จะรีบติดต่อกลับมาดูแลคุณโดยเร็วที่สุดครับ" }],
    });
  }

  // ข. ส่ง Flex Message: ล้างประวัติ / แบล็คลิสต์
  if (["ลบ", "แบล็คลิสต์", "ประจาน", "google", "ประวัติเน่า"].some(k => userMessage.includes(k))) {
    return client.replyMessage({
      replyToken: replyToken,
      messages: [getReputationFlexCard()],
    });
  }

  // ค. ส่ง Flex Message: กู้บ้าน / บูโร / สเตทเม้นท์
  if (["กู้", "บ้าน", "บูโร", "สเตทเม้นท์", "ไม่ผ่าน", "เงิน"].some(k => userMessage.includes(k))) {
    return client.replyMessage({
      replyToken: replyToken,
      messages: [getFinancialFlexCard()],
    });
  }

  // ง. ข้อความทั่วไป
  return client.replyMessage({
    replyToken: replyToken,
    messages: [{ type: "text", text: "สวัสดีครับ! ยินดีที่ได้ดูแลนะครับ หากคุณมีปัญหาเรื่องประวัติการเงินหรือชื่อเสียงออนไลน์ พิมพ์รายละเอียดทิ้งไว้ได้เลยครับ หรือเลือกเมนูด้านล่างเพื่อให้ผมช่วยกรองข้อมูลเบื้องต้นให้ครับ" }],
  });
}

/**
 * [Template] บัตรบริการล้างประวัติ (Reputation)
 */
function getReputationFlexCard(): any {
  return {
    type: "flex",
    altText: "บริการทวงคืนชื่อเสียงออนไลน์ - UNLINK-TH",
    contents: {
      type: "bubble",
      hero: {
        type: "image",
        url: "https://www.unlink-th.com/images/services/srv-identity-rehabilitation.webp",
        size: "full",
        aspectRatio: "20:13",
        aspectMode: "cover"
      },
      body: {
        type: "box",
        layout: "vertical",
        spacing: "md",
        contents: [
          { type: "text", text: "ทวงคืนตัวตนที่ใสสะอาด", weight: "bold", size: "xl", color: "#D4AF37" },
          { type: "text", text: "เราช่วยลบประวัติเน่าจาก Google และเว็บแบล็คลิสต์ 'ถอนรากถอนโคน' อย่างมืออาชีพ", wrap: true, size: "sm", color: "#aaaaaa" },
          { type: "box", layout: "vertical", spacing: "sm", contents: [
            { type: "text", text: "✅ ลบรูปประจาน / ข้อมูลใส่ร้าย", size: "xs", color: "#ffffff" },
            { type: "text", text: "✅ ล้างชื่อจากเว็บรวมคนโกง", size: "xs", color: "#ffffff" },
            { type: "text", text: "✅ ระงับการเข้าถึงข้อมูลเสีย 100%", size: "xs", color: "#ffffff" }
          ]}
        ]
      },
      footer: {
        type: "box",
        layout: "vertical",
        contents: [
          { type: "button", style: "primary", color: "#D4AF37", action: { type: "message", label: "ขอประเมินเคสฟรี", text: "ขอประเมินเคสลบประวัติ" } }
        ]
      },
      styles: { body: { backgroundColor: "#050810" }, footer: { backgroundColor: "#050810" } }
    }
  };
}

/**
 * [Template] บัตรบริการกู้บ้าน (Financial)
 */
function getFinancialFlexCard(): any {
  return {
    type: "flex",
    altText: "บริการฟื้นฟูเครดิตกู้บ้าน - UNLINK-TH",
    contents: {
      type: "bubble",
      hero: {
        type: "image",
        url: "https://www.unlink-th.com/images/services/srv-credit-engineering.webp",
        size: "full",
        aspectRatio: "20:13",
        aspectMode: "cover"
      },
      body: {
        type: "box",
        layout: "vertical",
        spacing: "md",
        contents: [
          { type: "text", text: "ปลดล็อกเครดิต ทวงคืนบ้านในฝัน", weight: "bold", size: "xl", color: "#D4AF37" },
          { type: "text", text: "จัดระเบียบสเตทเม้นท์และฟื้นฟูประวัติบูโรให้ธนาคารยอมรับ แม้เคยพลาดมาก่อน", wrap: true, size: "sm", color: "#aaaaaa" },
          { type: "box", layout: "vertical", spacing: "sm", contents: [
            { type: "text", text: "✅ แก้ไขประวัติเสีย (บูโร)", size: "xs", color: "#ffffff" },
            { type: "text", text: "✅ ปั้นสเตทเม้นท์เพื่อยื่นกู้", size: "xs", color: "#ffffff" },
            { type: "text", text: "✅ พี่เลี้ยงจนถึงวันได้รับกุญแจ", size: "xs", color: "#ffffff" }
          ]}
        ]
      },
      footer: {
        type: "box",
        layout: "vertical",
        contents: [
          { type: "button", style: "primary", color: "#D4AF37", action: { type: "message", label: "คุยแผนกู้บ้าน", text: "ขอปรึกษาแผนกู้บ้าน" } }
        ]
      },
      styles: { body: { backgroundColor: "#050810" }, footer: { backgroundColor: "#050810" } }
    }
  };
}
