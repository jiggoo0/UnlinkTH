/** @format */

import * as line from "@line/bot-sdk";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

// 1. โหลดข้อมูลความลับ
dotenv.config({ path: ".env.local" });

const config: line.MessagingApiConfig = {
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN || "",
};

const client = new line.messagingApi.MessagingApiClient(config);
const blobClient = new line.messagingApi.MessagingApiBlobClient(config);

/**
 * RICH MENU SETUP SCRIPT (ULTIMATE REPAIR)
 * -------------------------------------------------------------------------
 */
async function setupRichMenu() {
  try {
    console.log("🚀 Starting Rich Menu Setup (V3)...");

    // สร้างเมนูด้วยการระบุฟิลด์โดยตรงตามที่ LINE API 400 Error แจ้งมา
    const result = await client.createRichMenu({
      richMenuRequest: {
        size: { width: 2500, height: 1686 },
        selected: true,
        name: "UNLINK-TH Official Menu",
        chatBarText: "ทางเลือกสุดท้ายของคุณ",
        areas: [
          {
            bounds: { x: 0, y: 0, width: 1250, height: 843 },
            action: { type: "message", text: "ขอลบแบล็คลิสต์" },
          },
          {
            bounds: { x: 1250, y: 0, width: 1250, height: 843 },
            action: { type: "message", text: "ขอกู้บ้าน" },
          },
          {
            bounds: { x: 0, y: 843, width: 1250, height: 843 },
            action: { type: "uri", uri: "https://www.unlink-th.com/case-studies" },
          },
          {
            bounds: { x: 1250, y: 843, width: 1250, height: 843 },
            action: { type: "message", text: "ปรึกษาด่วน" },
          },
        ]
      }
    });

    const richMenuId = result.richMenuId;
    console.log(`✅ Rich Menu Created! ID: ${richMenuId}`);

    // อัปโหลดรูปภาพ
    const imagePath = path.join(process.cwd(), "public", "images", "common", "rich-menu.png");
    const imageBuffer = fs.readFileSync(imagePath);
    await blobClient.uploadRichMenuImage(richMenuId, new Blob([imageBuffer], { type: 'image/png' }));
    console.log("✅ Rich Menu Image Uploaded!");

    // ตั้งค่าเป็นเมนูเริ่มต้น
    await client.setDefaultRichMenu(richMenuId);
    console.log("✅ Rich Menu set as Default!");

    process.exit(0);
  } catch (err) {
    console.error("❌ Rich Menu Setup Failed:", err);
    process.exit(1);
  }
}

setupRichMenu();
