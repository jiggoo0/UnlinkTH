/** @format */

import { NextRequest, NextResponse } from "next/server";
import * as line from "@line/bot-sdk";

// 1. ตั้งค่า LINE Client ผ่าน Environment Variables (ปลอดภัยที่สุด)
const client = new line.messagingApi.MessagingApiClient({
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN || "",
});

/**
 * LINE WEBHOOK HANDLER
 * -------------------------------------------------------------------------
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const events: any[] = body.events;

    const results = await Promise.all(
      events.map(async (event) => {
        if (event.type === "follow") {
          return handleFollowEvent(event);
        }
        if (event.type === "message" && event.message.type === "text") {
          return handleTextEvent(event);
        }
        return null;
      })
    );

    return NextResponse.json({ status: "success", results });
  } catch (err) {
    console.error("LINE Webhook Error:", err);
    return NextResponse.json(
      { status: "error", message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

/**
 * [Greeting] ข้อความต้อนรับเพื่อนใหม่
 */
async function handleFollowEvent(event: any) {
  const replyToken = event.replyToken;
  const greetingText = 
    "ยินดีที่ได้รู้จักนะครับ! ผมคือผู้ช่วยส่วนตัวจาก UNLINK-TH ครับ \n\n" +
    "เราเข้าใจดีว่าบางครั้งอดีตที่ผิดพลาด หรือการโดนกลั่นแกล้งออนไลน์ อาจทำให้ชีวิตคุณสะดุด... แต่ที่นี่คือ 'พื้นที่ปลอดภัย' สำหรับคุณครับ \n\n" +
    "คุณสามารถพิมพ์เรื่องที่ต้องการปรึกษาทิ้งไว้ หรือกดเลือกบริการจากเมนูด้านล่างได้เลยครับ ทีมงานผู้เชี่ยวชาญจะรีบมาประเมินเคสให้คุณทันทีครับ";

  return client.replyMessage({
    replyToken: replyToken,
    messages: [{ type: "text", text: greetingText }],
  });
}

/**
 * [Response] ตอบโต้ตาม Keyword
 */
async function handleTextEvent(event: any) {
  const userMessage = event.message.text;
  const replyToken = event.replyToken;

  let replyMessage = "";

  if (userMessage.includes("ขอลบแบล็คลิสต์") || userMessage.includes("ลบชื่อประจาน")) {
    replyMessage = "ทีมงาน UNLINK-TH พร้อมช่วย 'ถอนรากถอนโคน' ประวัติเน่าและข้อมูลเสียออกจาก Google ครับ \n\nรบกวนส่ง 'ลิงก์ที่กังวล' มาให้เราวิเคราะห์แผนปฏิบัติการก่อนได้เลยครับ ความลับ 100% ครับ";
  } else if (userMessage.includes("ขอกู้บ้าน") || userMessage.includes("บูโร")) {
    replyMessage = "ยื่นกู้ไม่ผ่าน หรือติดบูโร... ไม่ใช่จุดจบครับ! \n\nเราเชี่ยวชาญการฟื้นฟูประวัติเน่าและจัดระเบียบสเตทเม้นท์ให้ธนาคารยอมรับได้จริงครับ \n\nรบกวนส่งรายละเอียดเคสมาให้ผมช่วยประเมินโอกาสรอดเบื้องต้นก่อนได้เลยครับ";
  } else if (userMessage.includes("ปรึกษาด่วน")) {
    replyMessage = "รับทราบครับ! ผมกำลังประสานงานให้ผู้เชี่ยวชาญมาดูแลเคสของคุณโดยตรงครับ \n\nระหว่างนี้รบกวนพิมพ์สรุปปัญหาทิ้งไว้ได้เลยครับ";
  } else {
    replyMessage = "สวัสดีครับ! ยินดีที่ได้ดูแลนะครับ หากคุณมีปัญหาเรื่องประวัติการเงินหรือชื่อเสียงออนไลน์ พิมพ์รายละเอียดทิ้งไว้ได้เลยครับ ทีมงานเราพร้อมลุยเคสยากให้คุณครับ";
  }

  return client.replyMessage({
    replyToken: replyToken,
    messages: [{ type: "text", text: replyMessage }],
  });
}
