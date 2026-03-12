/** @format */

import { NextRequest, NextResponse } from "next/server";
import * as line from "@line/bot-sdk";

const LINE_TOKEN = "BgmQagMZBMPi+FSrt2eXy1Ujw3j+M40bjE5T00pzT2vRTOmKLcbr+mFq6r97hwydTq9REosBk4yXDePckiX+uXQ0KXKiU0MDy3AQrgQz8bnVCQ09m5vUsHUae0FBUL+43He2CSgxIuv6XCXIboHJIQdB04t89/1O/w1cDnyilFU=";
const ADMIN_ID = "U40a4a0d00ff4a7bffc0aeae5902955a0";

const client = new line.messagingApi.MessagingApiClient({
  channelAccessToken: LINE_TOKEN,
});

/**
 * LINE WEBHOOK HANDLER - HIGH CONTRAST EDITION
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

async function handleFollowEvent(event: any) {
  return client.replyMessage({
    replyToken: event.replyToken,
    messages: [getMainMenuFlex()]
  });
}

async function handleTextEvent(event: any) {
  const input = event.message.text.trim();
  const replyToken = event.replyToken;
  const userId = event.source.userId;

  switch (input) {
    case "1":
    case "ขอลบแบล็คลิสต์":
      return client.replyMessage({ replyToken, messages: [getReputationFlexCard()] });

    case "2":
    case "ขอกู้บ้าน":
      return client.replyMessage({ replyToken, messages: [getFinancialFlexCard()] });

    case "3":
    case "รีวิว":
      return client.replyMessage({ 
        replyToken, 
        messages: [{ type: "text", text: "⭐ ตรวจสอบความสำเร็จของเราได้ที่นี่ครับ: https://www.unlink-th.com/case-studies \n\n(พิมพ์ '0' เพื่อกลับสู่เมนูหลัก)" }] 
      });

    case "4":
    case "ปรึกษาด่วน":
      await client.pushMessage({
        to: ADMIN_ID,
        messages: [{ type: "text", text: `🚨 [URGENT] มีลูกค้าต้องการคุยด่วน!\nUser ID: ${userId}\nข้อความ: ${input}` }],
      });
      return client.replyMessage({ 
        replyToken, 
        messages: [{ type: "text", text: "✅ รับทราบครับ! แจ้งเจ้าหน้าที่ให้แล้วครับ รบกวนรอสักครู่นะครับ \n\n(พิมพ์ '0' เพื่อกลับสู่เมนูหลัก)" }] 
      });

    case "0":
    case "เมนูหลัก":
      return client.replyMessage({ replyToken, messages: [getMainMenuFlex()] });

    default:
      if (["ลบ", "ประจาน", "แบล็คลิสต์"].some(k => input.includes(k))) return client.replyMessage({ replyToken, messages: [getReputationFlexCard()] });
      if (["กู้", "บ้าน", "บูโร", "เงิน"].some(k => input.includes(k))) return client.replyMessage({ replyToken, messages: [getFinancialFlexCard()] });
      return client.replyMessage({ replyToken, messages: [getMainMenuFlex()] });
  }
}

/**
 * [Design] เมนูหลัก - เน้นอ่านง่าย (High Contrast)
 */
function getMainMenuFlex(): any {
  return {
    type: "flex",
    altText: "เมนูหลัก UNLINK-TH",
    contents: {
      type: "bubble",
      hero: {
        type: "image",
        url: "https://www.unlink-th.com/og/og-main.webp", // ใช้พาธที่เข้าถึงได้จริง
        size: "full",
        aspectRatio: "20:13",
        aspectMode: "cover"
      },
      body: {
        type: "box",
        layout: "vertical",
        backgroundColor: "#000000", // พื้นหลังดำสนิทเพื่อให้อ่านง่าย
        contents: [
          { type: "text", text: "ยินดีต้อนรับสู่ UNLINK-TH", weight: "bold", color: "#D4AF37", size: "lg" },
          { type: "text", text: "กรุณาเลือกบริการด้านล่างครับ", size: "sm", color: "#FFFFFF", margin: "sm" },
          { type: "box", layout: "vertical", margin: "xl", spacing: "md", contents: [
            { type: "button", action: { type: "message", label: "1. ล้างประวัติเน่า / แบล็คลิสต์", text: "1" }, style: "secondary", color: "#333333" },
            { type: "button", action: { type: "message", label: "2. ปั้นสเตทเม้นท์ / กู้บ้าน", text: "2" }, style: "secondary", color: "#333333" },
            { type: "button", action: { type: "message", label: "3. ดูรีวิวความสำเร็จ", text: "3" }, style: "secondary", color: "#333333" },
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
      body: {
        type: "box",
        layout: "vertical",
        backgroundColor: "#000000",
        spacing: "md",
        contents: [
          { type: "text", text: "ล้างประวัติ & ทวงคืนชื่อเสียง", weight: "bold", size: "xl", color: "#D4AF37" },
          { type: "text", text: "เราช่วยลบข้อมูลเสียจาก Google และเว็บแบล็คลิสต์อย่างมืออาชีพ", wrap: true, size: "md", color: "#FFFFFF" },
          { type: "separator", color: "#333333" },
          { type: "text", text: "✅ ลบรูปประจาน / ข้อมูลใส่ร้าย\n✅ ล้างชื่อจากเว็บรวมคนโกง\n✅ ระงับการเข้าถึง 100%", wrap: true, size: "sm", color: "#FFFFFF" },
          { type: "button", style: "primary", color: "#D4AF37", margin: "lg", action: { type: "message", label: "ส่งเคสให้วิเคราะห์ฟรี", text: "ขอลบแบล็คลิสต์" } },
          { type: "text", text: "พิมพ์ '0' กลับสู่เมนูหลัก", size: "xs", color: "#aaaaaa", align: "center" }
        ]
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
      body: {
        type: "box",
        layout: "vertical",
        backgroundColor: "#000000",
        spacing: "md",
        contents: [
          { type: "text", text: "ฟื้นฟูเครดิต & ปั้นสเตทเม้นท์", weight: "bold", size: "xl", color: "#D4AF37" },
          { type: "text", text: "จัดระเบียบการเงินให้ธนาคารยอมรับ แม้เคยติดบูโรหรือยื่นกู้ไม่ผ่าน", wrap: true, size: "md", color: "#FFFFFF" },
          { type: "separator", color: "#333333" },
          { type: "text", text: "✅ แก้ไขประวัติเสีย (บูโร)\n✅ ปั้นสเตทเม้นท์เพื่อยื่นกู้\n✅ พี่เลี้ยงจนถึงวันรับกุญแจ", wrap: true, size: "sm", color: "#FFFFFF" },
          { type: "button", style: "primary", color: "#D4AF37", margin: "lg", action: { type: "message", label: "ปรึกษาแผนกู้บ้านฟรี", text: "ขอกู้บ้าน" } },
          { type: "text", text: "พิมพ์ '0' กลับสู่เมนูหลัก", size: "xs", color: "#aaaaaa", align: "center" }
        ]
      }
    }
  };
}
