/** @format */

import { NextRequest, NextResponse } from "next/server";
import * as line from "@line/bot-sdk";

// 📍 ตั้งค่ารหัสผ่าน (Hardcoded for immediate reliability)
const LINE_TOKEN = "BgmQagMZBMPi+FSrt2eXy1Ujw3j+M40bjE5T00pzT2vRTOmKLcbr+mFq6r97hwydTq9REosBk4yXDePckiX+uXQ0KXKiU0MDy3AQrgQz8bnVCQ09m5vUsHUae0FBUL+43He2CSgxIuv6XCXIboHJIQdB04t89/1O/w1cDnyilFU=";
const ADMIN_ID = "U40a4a0d00ff4a7bffc0aeae5902955a0";

const client = new line.messagingApi.MessagingApiClient({
  channelAccessToken: LINE_TOKEN,
});

/**
 * LINE WEBHOOK HANDLER - STABLE NAVIGATION VERSION
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const events: any[] = body.events;

    const results = await Promise.all(
      events.map(async (event) => {
        try {
          if (event.type === "follow") return handleFollowEvent(event);
          if (event.type === "message" && event.message.type === "text") return handleTextEvent(event);
        } catch (e) {
          console.error("Event Error:", e);
        }
        return null;
      })
    );

    return NextResponse.json({ status: "success", results });
  } catch (err) {
    console.error("Main Webhook Error:", err);
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
  const normalizedInput = input.toLowerCase().replace(/\s+/g, '');

  // 🚨 1. แอดมินด่วน
  if (["5", "ด่วน", "แอดมิน", "เจ้าหน้าที่"].some(k => normalizedInput.includes(k))) {
    await client.pushMessage({
      to: ADMIN_ID,
      messages: [{ type: "text", text: `🚨 [URGENT] ลูกค้าต้องการคุยด่วน!\nUser ID: ${userId}\nข้อความ: ${input}` }],
    });
    return client.replyMessage({ replyToken, messages: [{ type: "text", text: "✅ รับทราบครับ! แจ้งเจ้าหน้าที่ให้แล้วครับ รบกวนรอสักครู่นะครับ \n\n(พิมพ์ '0' กลับสู่เมนูหลัก)" }] });
  }

  // 🔍 2. ระบบ Routing
  switch (input) {
    case "1": return client.replyMessage({ replyToken, messages: [getReputationFlexCard()] });
    case "11": return client.replyMessage({ replyToken, messages: [{ type: "text", text: "🔒 บริการลบโพสต์ประจาน/ข่าวเสีย\n👉 รบกวนส่ง 'ลิงก์ที่ต้องการให้ลบ' มาให้เราเช็กได้เลยครับ" }] });
    case "12": return client.replyMessage({ replyToken, messages: [{ type: "text", text: "🛡️ บริการล้างชื่อแบล็คลิสต์\n👉 รบกวนส่ง 'ชื่อ-นามสกุล' มาให้เราเช็กได้เลยครับ" }] });

    case "2": return client.replyMessage({ replyToken, messages: [getFinancialFlexCard()] });
    case "21": return client.replyMessage({ replyToken, messages: [{ type: "text", text: "🏦 บริการแก้ไขเครดิตบูโร\n👉 รบกวนแจ้ง 'ยอดหนี้รวม' และ 'สถานะปัจจุบัน' ให้เราหน่อยนะครับ" }] });
    case "22": return client.replyMessage({ replyToken, messages: [{ type: "text", text: "📈 บริการปั้นสเตทเม้นท์\n👉 อาชีพปัจจุบันของคุณคืออะไรครับ?" }] });

    case "3": return client.replyMessage({ replyToken, messages: [getOverseasFlexCard()] });
    case "31": return client.replyMessage({ replyToken, messages: [{ type: "text", text: "🏠 บริการปั้นเอกสารกู้บ้าน (สาวสายบิน)\n👉 รบกวนแจ้ง 'ประเทศที่ทำงาน' และ 'ราคาบ้าน' ครับ" }] });
    case "34": return client.replyMessage({ replyToken, messages: [{ type: "text", text: "🔒 ล้างประวัติเน่าก่อนกลับไทย\n👉 ส่งข้อมูลที่กังวลมาให้เราเช็กได้เลยครับ" }] });

    case "4": case "รีวิว": return client.replyMessage({ replyToken, messages: [{ type: "text", text: "⭐ รีวิวความสำเร็จ: https://www.unlink-th.com/case-studies" }] });
    case "0": case "เมนู": return client.replyMessage({ replyToken, messages: [getMainMenuFlex()] });

    default:
      if (["ลบ", "ประจาน", "แบล็คลิสต์"].some(k => normalizedInput.includes(k))) return client.replyMessage({ replyToken, messages: [getReputationFlexCard()] });
      if (["กู้", "บ้าน", "บูโร"].some(k => normalizedInput.includes(k))) return client.replyMessage({ replyToken, messages: [getFinancialFlexCard()] });
      return client.replyMessage({ replyToken, messages: [getMainMenuFlex()] });
  }
}

/**
 * [Design] เมนูหลัก
 */
function getMainMenuFlex(): any {
  return {
    type: "flex",
    altText: "เมนูหลัก UNLINK-TH",
    contents: {
      type: "bubble",
      hero: { type: "image", url: "https://www.unlink-th.com/og/og-main.webp", size: "full", aspectRatio: "20:13", aspectMode: "cover" },
      body: {
        type: "box",
        layout: "vertical",
        backgroundColor: "#000000",
        contents: [
          { type: "text", text: "ยินดีต้อนรับสู่ UNLINK-TH", weight: "bold", color: "#D4AF37", size: "lg" },
          { type: "box", layout: "vertical", margin: "xl", spacing: "sm", contents: [
            { type: "button", action: { type: "message", label: "1. ล้างประวัติเน่า / แบล็คลิสต์", text: "1" }, style: "secondary", color: "#222222" },
            { type: "button", action: { type: "message", label: "2. ปั้นสเตทเม้นท์ / กู้บ้าน", text: "2" }, style: "secondary", color: "#222222" },
            { type: "button", action: { type: "message", label: "3. ยุทธศาสตร์สาวสายบิน", text: "3" }, style: "secondary", color: "#222222" },
            { type: "button", action: { type: "message", label: "4. ดูรีวิวความสำเร็จ", text: "4" }, style: "secondary", color: "#222222" },
            { type: "button", action: { type: "message", label: "5. ติดต่อเจ้าหน้าที่ (ด่วน)", text: "5" }, style: "primary", color: "#D4AF37", margin: "md" }
          ]}
        ]
      }
    }
  };
}

function getReputationFlexCard(): any {
  return {
    type: "flex",
    altText: "ล้างประวัติเน่า - UNLINK-TH",
    contents: {
      type: "bubble",
      body: {
        type: "box",
        layout: "vertical",
        backgroundColor: "#000000",
        contents: [
          { type: "text", text: "ล้างประวัติ & ทวงคืนชื่อเสียง", weight: "bold", size: "xl", color: "#D4AF37" },
          { type: "box", layout: "vertical", margin: "md", spacing: "sm", contents: [
            { type: "button", action: { type: "message", label: "กด 11 : ลบรูปประจาน/ข่าวเสีย", text: "11" }, style: "secondary", color: "#222222" },
            { type: "button", action: { type: "message", label: "กด 12 : ล้างชื่อจากเว็บคนโกง", text: "12" }, style: "secondary", color: "#222222" }
          ]},
          { type: "text", text: "พิมพ์ '0' กลับสู่เมนูหลัก", size: "xs", color: "#aaaaaa", align: "center", margin: "md" }
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
        contents: [
          { type: "text", text: "ฟื้นฟูเครดิต & กู้บ้าน", weight: "bold", size: "xl", color: "#D4AF37" },
          { type: "box", layout: "vertical", margin: "md", spacing: "sm", contents: [
            { type: "button", action: { type: "message", label: "กด 21 : แก้บูโร / ประวัติเสีย", text: "21" }, style: "secondary", color: "#222222" },
            { type: "button", action: { type: "message", label: "กด 22 : ปั้นสเตทเม้นท์", text: "22" }, style: "secondary", color: "#222222" }
          ]},
          { type: "text", text: "พิมพ์ '0' กลับสู่เมนูหลัก", size: "xs", color: "#aaaaaa", align: "center", margin: "md" }
        ]
      }
    }
  };
}

function getOverseasFlexCard(): any {
  return {
    type: "flex",
    altText: "ยุทธศาสตร์พี่น้องสายบิน - UNLINK-TH",
    contents: {
      type: "bubble",
      body: {
        type: "box",
        layout: "vertical",
        backgroundColor: "#000000",
        contents: [
          { type: "text", text: "ยุทธศาสตร์สาวสายบิน ✈️", weight: "bold", size: "xl", color: "#D4AF37" },
          { type: "box", layout: "vertical", margin: "md", spacing: "sm", contents: [
            { type: "button", action: { type: "message", label: "กด 31 : ปั้นเอกสารกู้บ้านในไทย", text: "31" }, style: "secondary", color: "#222222" },
            { type: "button", action: { type: "message", label: "กด 34 : ล้างประวัติเน่าก่อนกลับไทย", text: "34" }, style: "secondary", color: "#222222" }
          ]},
          { type: "button", action: { type: "message", label: "ปรึกษาเคสลับ (ด่วน)", text: "5" }, style: "primary", color: "#D4AF37", margin: "md" },
          { type: "text", text: "พิมพ์ '0' กลับสู่เมนูหลัก", size: "xs", color: "#aaaaaa", align: "center", margin: "md" }
        ]
      }
    }
  };
}
