/** @format */

import { NextRequest, NextResponse } from "next/server";
import * as line from "@line/bot-sdk";

const LINE_TOKEN = "BgmQagMZBMPi+FSrt2eXy1Ujw3j+M40bjE5T00pzT2vRTOmKLcbr+mFq6r97hwydTq9REosBk4yXDePckiX+uXQ0KXKiU0MDy3AQrgQz8bnVCQ09m5vUsHUae0FBUL+43He2CSgxIuv6XCXIboHJIQdB04t89/1O/w1cDnyilFU=";
const ADMIN_ID = "U40a4a0d00ff4a7bffc0aeae5902955a0";

const client = new line.messagingApi.MessagingApiClient({
  channelAccessToken: LINE_TOKEN,
});

/**
 * LINE WEBHOOK HANDLER - NAVIGATION SYSTEM EDITION
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
    return NextResponse.json({ status: "error" }, { status: 500 });
  }
}

/**
 * [Greeting] ข้อความต้อนรับพร้อมเมนูนำทาง
 */
async function handleFollowEvent(event: any) {
  const replyToken = event.replyToken;
  return client.replyMessage({
    replyToken: replyToken,
    messages: [getMainMenuFlex()]
  });
}

/**
 * [Main Logic] ระบบนำทางด้วยหมายเลข
 */
async function handleTextEvent(event: any) {
  const input = event.message.text.trim();
  const replyToken = event.replyToken;
  const userId = event.source.userId;

  // 1. ตอบสนองตามหมายเลข หรือ คำสำคัญ
  switch (input) {
    case "1":
    case "ลบแบล็คลิสต์":
      return client.replyMessage({ replyToken, messages: [getReputationFlexCard()] });

    case "2":
    case "กู้บ้าน":
      return client.replyMessage({ replyToken, messages: [getFinancialFlexCard()] });

    case "3":
    case "รีวิว":
      return client.replyMessage({ 
        replyToken, 
        messages: [{ type: "text", text: "ตรวจสอบความสำเร็จของเราได้ที่นี่ครับ: https://www.unlink-th.com/case-studies \n\nพิมพ์ '0' เพื่อกลับสู่เมนูหลัก" }] 
      });

    case "4":
    case "ปรึกษาด่วน":
      await client.pushMessage({
        to: ADMIN_ID,
        messages: [{ type: "text", text: `🚨 [URGENT] ลูกค้าต้องการคุยด่วน!\nUser ID: ${userId}\nข้อความล่าสุด: ${input}` }],
      });
      return client.replyMessage({ 
        replyToken, 
        messages: [{ type: "text", text: "รับทราบครับ! ผมแจ้งเจ้าหน้าที่ให้เรียบร้อยแล้วครับ รบกวนรอสักครู่นะครับ \n\nพิมพ์ '0' เพื่อกลับสู่เมนูหลัก" }] 
      });

    case "0":
    case "เมนูหลัก":
      return client.replyMessage({ replyToken, messages: [getMainMenuFlex()] });

    default:
      // ถ้าลูกค้าพิมพ์คำอื่นมา ให้ส่งเมนูหลักไปให้เลือก
      if (["ลบ", "ประจาน", "แบล็คลิสต์"].some(k => input.includes(k))) {
        return client.replyMessage({ replyToken, messages: [getReputationFlexCard()] });
      }
      if (["กู้", "บ้าน", "บูโร", "เงิน"].some(k => input.includes(k))) {
        return client.replyMessage({ replyToken, messages: [getFinancialFlexCard()] });
      }
      return client.replyMessage({ replyToken, messages: [getMainMenuFlex()] });
  }
}

/**
 * [Template] เมนูนำทางหลัก (Main Menu Flex)
 */
function getMainMenuFlex(): any {
  return {
    type: "flex",
    altText: "เมนูหลัก UNLINK-TH",
    contents: {
      type: "bubble",
      hero: { type: "image", url: "https://www.unlink-th.com/images/og/og-main.webp", size: "full", aspectRatio: "20:13", aspectMode: "cover" },
      body: {
        type: "box",
        layout: "vertical",
        backgroundColor: "#050810",
        contents: [
          { type: "text", text: "ยินดีต้อนรับสู่ UNLINK-TH", weight: "bold", color: "#D4AF37", size: "lg" },
          { type: "text", text: "กรุณาเลือกบริการโดย 'กดหมายเลข' หรือ 'คลิกปุ่ม' ด้านล่างครับ", size: "xs", color: "#aaaaaa", margin: "sm" },
          { type: "box", layout: "vertical", margin: "lg", spacing: "sm", contents: [
            { type: "button", action: { type: "message", label: "1. ล้างประวัติเน่า / แบล็คลิสต์", text: "1" }, style: "secondary", color: "#1a1a1a" },
            { type: "button", action: { type: "message", label: "2. ปั้นสเตทเม้นท์ / กู้บ้าน", text: "2" }, style: "secondary", color: "#1a1a1a" },
            { type: "button", action: { type: "message", label: "3. ดูรีวิวความสำเร็จ", text: "3" }, style: "secondary", color: "#1a1a1a" },
            { type: "button", action: { type: "message", label: "4. ปรึกษาเจ้าหน้าที่ (ด่วน)", text: "4" }, style: "primary", color: "#D4AF37" }
          ]}
        ]
      }
    }
  };
}

function getReputationFlexCard(): any {
  return {
    type: "flex",
    altText: "บริการล้างประวัติ - UNLINK-TH",
    contents: {
      type: "bubble",
      hero: { type: "image", url: "https://www.unlink-th.com/images/services/srv-identity-rehabilitation.webp", size: "full", aspectRatio: "20:13", aspectMode: "cover" },
      body: {
        type: "box",
        layout: "vertical",
        backgroundColor: "#050810",
        contents: [
          { type: "text", text: "ล้างประวัติเน่า & ทวงคืนชื่อเสียง", weight: "bold", size: "xl", color: "#D4AF37" },
          { type: "text", text: "เราช่วยลบข้อมูลเสียจาก Google และเว็บแบล็คลิสต์ 'ถอนรากถอนโคน' 100%", wrap: true, size: "sm", color: "#ffffff", margin: "md" },
          { type: "text", text: "พิมพ์ '0' เพื่อกลับสู่เมนูหลัก", size: "xxs", color: "#aaaaaa", margin: "lg" }
        ]
      },
      footer: {
        type: "box",
        layout: "vertical",
        backgroundColor: "#050810",
        contents: [{ type: "button", style: "primary", color: "#D4AF37", action: { type: "message", label: "ส่งเคสให้วิเคราะห์", text: "ขอประเมินเคสลบประวัติ" } }]
      }
    }
  };
}

function getFinancialFlexCard(): any {
  return {
    type: "flex",
    altText: "บริการกู้บ้าน - UNLINK-TH",
    contents: {
      type: "bubble",
      hero: { type: "image", url: "https://www.unlink-th.com/images/services/srv-credit-engineering.webp", size: "full", aspectRatio: "20:13", aspectMode: "cover" },
      body: {
        type: "box",
        layout: "vertical",
        backgroundColor: "#050810",
        contents: [
          { type: "text", text: "ฟื้นฟูเครดิต & ปั้นสเตทเม้นท์", weight: "bold", size: "xl", color: "#D4AF37" },
          { type: "text", text: "จัดระเบียบการเงินให้ธนาคารยอมรับ แม้เคยติดบูโรหรือยื่นกู้ไม่ผ่าน", wrap: true, size: "sm", color: "#ffffff", margin: "md" },
          { type: "text", text: "พิมพ์ '0' เพื่อกลับสู่เมนูหลัก", size: "xxs", color: "#aaaaaa", margin: "lg" }
        ]
      },
      footer: {
        type: "box",
        layout: "vertical",
        backgroundColor: "#050810",
        contents: [{ type: "button", style: "primary", color: "#D4AF37", action: { type: "message", label: "ปรึกษาแผนกู้บ้าน", text: "ขอปรึกษาแผนกู้บ้าน" } }]
      }
    }
  };
}
