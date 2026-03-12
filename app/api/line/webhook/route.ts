/** @format */

import { NextRequest, NextResponse } from "next/server";
import * as line from "@line/bot-sdk";

// 📍 ใส่รหัสตรงนี้เพื่อให้ระบบทำงานได้ทันที
const LINE_TOKEN = "BgmQagMZBMPi+FSrt2eXy1Ujw3j+M40bjE5T00pzT2vRTOmKLcbr+mFq6r97hwydTq9REosBk4yXDePckiX+uXQ0KXKiU0MDy3AQrgQz8bnVCQ09m5vUsHUae0FBUL+43He2CSgxIuv6XCXIboHJIQdB04t89/1O/w1cDnyilFU=";
const ADMIN_ID = "Ud1bbe23b314119009b9b571c0fd6103a"; // รหัสของคุณเอ็ม

const client = new line.messagingApi.MessagingApiClient({
  channelAccessToken: LINE_TOKEN,
});

/**
 * LINE WEBHOOK HANDLER
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

async function handleFollowEvent(event: any) {
  const replyToken = event.replyToken;
  const greetingText = "ยินดีที่ได้รู้จักครับ! ผมคือผู้ช่วยส่วนตัวจาก UNLINK-TH พร้อมดูแลเคสยากให้คุณแล้วครับ";
  return client.replyMessage({ replyToken, messages: [{ type: "text", text: greetingText }] });
}

async function handleTextEvent(event: any) {
  const userMessage = event.message.text.toLowerCase();
  const replyToken = event.replyToken;
  const userId = event.source.userId;

  // 🚨 ระบบแจ้งเตือนแอดมิน (ใส่รหัส ADMIN_ID ตรงๆ)
  if (userMessage.includes("ด่วน") || userMessage.includes("แอดมิน") || userMessage.includes("เจ้าหน้าที่")) {
    try {
      await client.pushMessage({
        to: ADMIN_ID,
        messages: [{ 
          type: "text", 
          text: `🚨 [ALERT] มีลูกค้าต้องการคุยด่วน!\nUser ID: ${userId}\nข้อความ: ${userMessage}` 
        }],
      });
    } catch (e) {
      console.error("Push Error:", e);
    }
    return client.replyMessage({
      replyToken,
      messages: [{ type: "text", text: "แจ้งเจ้าหน้าที่ให้แล้วครับ รอสักครู่นะครับ" }],
    });
  }

  // ส่งบัตรพรีเมียม (เรียกฟังก์ชันเดิม)
  if (["ลบ", "แบล็คลิสต์", "ประจาน"].some(k => userMessage.includes(k))) {
    return client.replyMessage({ replyToken, messages: [getReputationFlexCard()] });
  }
  if (["กู้", "บ้าน", "บูโร"].some(k => userMessage.includes(k))) {
    return client.replyMessage({ replyToken, messages: [getFinancialFlexCard()] });
  }

  return client.replyMessage({ replyToken, messages: [{ type: "text", text: "สวัสดีครับ พิมพ์เรื่องที่ต้องการปรึกษาทิ้งไว้ได้เลยครับ" }] });
}

function getReputationFlexCard(): any {
  return { type: "flex", altText: "ลบประวัติเสีย - UNLINK-TH", contents: { type: "bubble", hero: { type: "image", url: "https://www.unlink-th.com/images/services/srv-identity-rehabilitation.webp", size: "full" }, body: { type: "box", layout: "vertical", contents: [{ type: "text", text: "ทวงคืนตัวตนที่ใสสะอาด", weight: "bold", size: "xl", color: "#D4AF37" }] }, footer: { type: "box", layout: "vertical", contents: [{ type: "button", style: "primary", color: "#D4AF37", action: { type: "message", label: "ปรึกษาฟรี", text: "ขอประเมินเคสลบประวัติ" } }] }, styles: { body: { backgroundColor: "#050810" } } } };
}

function getFinancialFlexCard(): any {
  return { type: "flex", altText: "แก้บูโรกู้บ้าน - UNLINK-TH", contents: { type: "bubble", hero: { type: "image", url: "https://www.unlink-th.com/images/services/srv-credit-engineering.webp", size: "full" }, body: { type: "box", layout: "vertical", contents: [{ type: "text", text: "ปลดล็อกเครดิตกู้บ้าน", weight: "bold", size: "xl", color: "#D4AF37" }] }, footer: { type: "box", layout: "vertical", contents: [{ type: "button", style: "primary", color: "#D4AF37", action: { type: "message", label: "คุยแผนกู้บ้าน", text: "ขอปรึกษาแผนกู้บ้าน" } }] }, styles: { body: { backgroundColor: "#050810" } } } };
}
