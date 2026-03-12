/** @format */

import { NextRequest, NextResponse } from "next/server";
import * as line from "@line/bot-sdk";

const LINE_TOKEN = "BgmQagMZBMPi+FSrt2eXy1Ujw3j+M40bjE5T00pzT2vRTOmKLcbr+mFq6r97hwydTq9REosBk4yXDePckiX+uXQ0KXKiU0MDy3AQrgQz8bnVCQ09m5vUsHUae0FBUL+43He2CSgxIuv6XCXIboHJIQdB04t89/1O/w1cDnyilFU=";

const client = new line.messagingApi.MessagingApiClient({
  channelAccessToken: LINE_TOKEN,
});

/**
 * LINE WEBHOOK - DEBUG MODE (CATCH USER ID)
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const events: any[] = body.events;

    const results = await Promise.all(
      events.map(async (event) => {
        if (event.type === "message" && event.message.type === "text") {
          const userId = event.source.userId;
          const userMessage = event.message.text;

          // 🎯 ถ้าเราพิมพ์คำว่า "รหัสของฉัน" บอทจะตอบรหัส User ID มาให้ครับ
          if (userMessage.includes("รหัสของฉัน")) {
            return client.replyMessage({
              replyToken: event.replyToken,
              messages: [{ type: "text", text: `User ID ของคุณคือ: ${userId}` }],
            });
          }

          // การตอบกลับทั่วไป
          return client.replyMessage({
            replyToken: event.replyToken,
            messages: [{ type: "text", text: "แจ้งเจ้าหน้าที่ให้แล้วครับ (กำลังตรวจสอบรหัสแอดมิน)" }],
          });
        }
        return null;
      })
    );

    return NextResponse.json({ status: "success", results });
  } catch (err) {
    return NextResponse.json({ status: "error" }, { status: 500 });
  }
}
