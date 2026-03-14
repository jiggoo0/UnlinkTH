/** @format */

import * as line from "@line/bot-sdk";
import { siteConfig } from "@/constants/site-config";

/**
 * 📱 UNLINK-GLOBAL: LINE NOTIFICATION SYSTEM (V1.0)
 * Powered by LINE Messaging API
 */

const getLineClient = () => {
  const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;
  if (!token) return null;

  return new line.messagingApi.MessagingApiClient({
    channelAccessToken: token,
  });
};

const ADMIN_ID = process.env.LINE_USER_ID || "";

interface AdminNotificationData {
  customerName: string;
  caseId: string;
  amount: number;
  serviceTitle: string;
  slipUrl?: string;
  isAutomatic?: boolean;
}

/**
 * ส่งข้อความ Flex Message แจ้งเตือน Admin เมื่อมีความเคลื่อนไหวสำคัญ
 */
export async function sendAdminLineNotification(data: AdminNotificationData) {
  const client = getLineClient();
  if (!client || !ADMIN_ID) {
    console.error("❌ LINE Configuration missing (TOKEN or ADMIN_ID)");
    return { success: false, error: "Configuration Error" };
  }

  try {
    const statusText = data.isAutomatic
      ? "💰 ชำระเงินสำเร็จ (AUTO)"
      : "🚨 รอการตรวจสอบสลิป (MANUAL)";
    const accentColor = data.isAutomatic ? "#10B981" : "#F59E0B";

    await client.pushMessage({
      to: ADMIN_ID,
      messages: [
        {
          type: "flex",
          altText: `แจ้งเตือนเคสใหม่: ${data.caseId}`,
          contents: {
            type: "bubble",
            header: {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "text",
                  text: "UNLINK-GLOBAL NOTIFICATION",
                  color: "#ffffff",
                  size: "xs",
                  weight: "bold",
                },
              ],
              backgroundColor: "#000000",
              paddingAll: "12px",
            },
            body: {
              type: "box",
              layout: "vertical",
              contents: [
                {
                  type: "text",
                  text: statusText,
                  weight: "bold",
                  color: accentColor,
                  size: "sm",
                },
                {
                  type: "text",
                  text: data.customerName,
                  weight: "bold",
                  size: "xl",
                  margin: "md",
                },
                {
                  type: "text",
                  text: data.serviceTitle,
                  size: "xs",
                  color: "#666666",
                },
                {
                  type: "separator",
                  margin: "lg",
                },
                {
                  type: "box",
                  layout: "vertical",
                  margin: "lg",
                  spacing: "sm",
                  contents: [
                    {
                      type: "box",
                      layout: "horizontal",
                      contents: [
                        {
                          type: "text",
                          text: "Case ID",
                          size: "xs",
                          color: "#aaaaaa",
                          flex: 0,
                        },
                        {
                          type: "text",
                          text: data.caseId,
                          size: "xs",
                          color: "#666666",
                          align: "end",
                        },
                      ],
                    },
                    {
                      type: "box",
                      layout: "horizontal",
                      contents: [
                        {
                          type: "text",
                          text: "ยอดเงิน",
                          size: "xs",
                          color: "#aaaaaa",
                          flex: 0,
                        },
                        {
                          type: "text",
                          text: `฿${data.amount.toLocaleString()}`,
                          size: "xs",
                          color: "#1a1a1a",
                          align: "end",
                          weight: "bold",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            footer: {
              type: "box",
              layout: "vertical",
              spacing: "sm",
              contents: [
                data.slipUrl
                  ? {
                      type: "button",
                      style: "primary",
                      height: "sm",
                      color: "#000000",
                      action: {
                        type: "uri",
                        label: "🔎 ดูสลิปโอนเงิน",
                        uri: data.slipUrl,
                      },
                    }
                  : { type: "filler" },
                {
                  type: "button",
                  style: "link",
                  height: "sm",
                  action: {
                    type: "uri",
                    label: "เปิด Dashboard",
                    uri: `${siteConfig.url}/admin/liaison`,
                  },
                },
              ],
              flex: 0,
            },
          },
        },
      ],
    });

    return { success: true };
  } catch (error) {
    console.error("❌ LINE Push Error:", error);
    return { success: false, error: "Failed to send LINE notification" };
  }
}
