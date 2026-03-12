/** @format */

import { NextRequest, NextResponse } from "next/server";
import * as line from "@line/bot-sdk";

// 1. ตั้งค่า LINE Client (อัปเดตให้รองรับ v10.x)
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

    // จัดการข้อความที่ได้รับทีละอัน
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
 * ฟังก์ชันจัดการเมื่อมีเพื่อนใหม่เพิ่มเข้ามา
 * -------------------------------------------------------------------------
 */
async function handleFollowEvent(event: any) {
  const replyToken = event.replyToken;
  
  const greetingText = 
    "ยินดีที่ได้รู้จักนะครับ! ผมคือผู้ช่วยส่วนตัวจาก UNLINK-TH ครับ \n\n" +
    "เราเข้าใจดีว่าบางครั้งอดีตที่ผิดพลาด หรือการโดนกลั่นแกล้งออนไลน์ อาจทำให้ชีวิตคุณสะดุด... แต่ที่นี่คือ 'พื้นที่ปลอดภัย' สำหรับคุณครับ \n\n" +
    "ไม่ว่าจะเป็นเรื่อง: \n" +
    "✅ ล้างประวัติเน่า/แบล็คลิสต์ใน Google \n" +
    "✅ ปั้นสเตทเม้นท์เพื่อกู้บ้านให้ผ่าน 100% \n" +
    "✅ จัดการวิกฤตดราม่าออนไลน์เร่งด่วน \n\n" +
    "คุณสามารถพิมพ์เรื่องที่ต้องการปรึกษาทิ้งไว้ได้เลยครับ ข้อมูลของคุณคือความลับสูงสุด (Private & Secure) ทีมงานผู้เชี่ยวชาญจะรีบมาประเมินเคสให้คุณทันทีครับ";

  return client.replyMessage({
    replyToken: replyToken,
    messages: [{ type: "text", text: greetingText }],
  });
}

/**
 * ฟังก์ชันจัดการข้อความ Text
 * -------------------------------------------------------------------------
 */
async function handleTextEvent(event: any) {
  const userMessage = event.message.text;
  const replyToken = event.replyToken;

  let replyMessage = "";

  if (userMessage.includes("ขอลบแบล็คลิสต์") || userMessage.includes("ลบชื่อประจาน")) {
    replyMessage =
      "เข้าใจเลยครับว่าเรื่องชื่อเสียงสำคัญแค่ไหน... \n\n" +
      "ทีมงาน UNLINK-TH พร้อมช่วย 'ถอนรากถอนโคน' ประวัติเน่าและข้อมูลเสียออกจาก Google ให้ใสสะอาดครับ \n\n" +
      "เบื้องต้นรบกวนส่ง 'ลิงก์ที่กังวล' หรือ 'ชื่อที่โดนประจาน' มาให้เราวิเคราะห์แผนปฏิบัติการก่อนได้เลยครับ ข้อมูลของคุณคือความลับ 100% ครับ";
  } else if (userMessage.includes("ขอกู้บ้าน") || userMessage.includes("บูโร") || userMessage.includes("สเตทเม้นท์")) {
    replyMessage =
      "ยื่นกู้ไม่ผ่าน หรือติดบูโร... ไม่ใช่จุดจบครับ! \n\n" +
      "เราเชี่ยวชาญการฟื้นฟูประวัติเน่าและจัดระเบียบสเตทเม้นท์ให้ธนาคารยอมรับได้จริง เพื่อให้คุณได้รับกุญแจบ้านในฝันครับ \n\n" +
      "รบกวนส่งรายละเอียดเคส หรือยอดหนี้ที่ค้างอยู่มาให้ผมช่วยประเมินโอกาสรอดเบื้องต้นก่อนได้เลยครับ ฟรีไม่มีค่าใช้จ่ายครับ";
  } else if (userMessage.includes("ปรึกษาด่วน") || userMessage.includes("ติดต่อพนักงาน")) {
    replyMessage =
      "รับทราบครับ! ผมกำลังประสานงานให้ผู้เชี่ยวชาญมาดูแลเคสของคุณโดยตรงครับ \n\n" +
      "ระหว่างนี้รบกวนพิมพ์สรุปปัญหาที่ต้องการให้เราช่วยสั้นๆ ทิ้งไว้ได้เลยครับ เมื่อทีมงานมาถึงจะสามารถเริ่มงานได้ทันทีครับ";
  } else {
    replyMessage =
      "สวัสดีครับ! ผมคือผู้ช่วยส่วนตัวจาก UNLINK-TH ยินดีที่ได้ดูแลนะครับ \n\n" +
      "หากคุณมีปัญหาเรื่อง 'ประวัติการเงิน' หรือ 'ชื่อเสียงออนไลน์' สามารถกดเลือกบริการจากเมนูด้านล่าง หรือพิมพ์รายละเอียดทิ้งไว้ได้เลยครับ ทีมงานเราพร้อมลุยเคสยากให้คุณกลับมาเริ่มต้นใหม่ได้จริงครับ";
  }

  return client.replyMessage({
    replyToken: replyToken,
    messages: [{ type: "text", text: replyMessage }],
  });
}
