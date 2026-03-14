import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * UNLINK-PAYMENT: SMART AMOUNT GENERATOR
 * สร้างยอดเงินพร้อมเศษสตางค์เพื่อความแม่นยำในการตรวจสอบ
 * ตัวอย่าง: 299 -> 299.12
 */
export function calculateSafeAmount(baseAmount: number): number {
  // สุ่มเศษสตางค์ 0.01 - 0.99
  const randomCents = Math.floor(Math.random() * 99 + 1) / 100;
  return Number((baseAmount + randomCents).toFixed(2));
}

/**
 * UNLINK-PAYMENT: EMVCo Standard CRC16 Calculation
 * ใช้สำหรับตรวจสอบความถูกต้องของรหัส QR Code (มาตรฐานธนาคาร)
 */
function crc16(data: string): string {
  let crc = 0xffff;
  for (let i = 0; i < data.length; i++) {
    let x = ((crc >> 8) ^ data.charCodeAt(i)) & 0xff;
    x ^= x >> 4;
    crc = ((crc << 8) ^ (x << 12) ^ (x << 5) ^ x) & 0xffff;
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

/**
 * UNLINK-PAYMENT: MASTER PAYMENT CONFIGURATION
 * รวมข้อมูลบัญชีที่ผ่านการทดสอบทั้งหมด (LH, TrueMoney, PromptPay)
 */
export function generatePromptPayQR(amount: number = 0) {
  // มาตรฐาน: เบอร์โทรศัพท์ 13 หลัก (0066 + เบอร์ตัด 0 หน้า)
  const mobileNumber = "0066990322175";

  const tag29_content = [
    "0016A000000677010111", // Application ID
    `0113${mobileNumber}`, // PromptPay ID (Mobile)
  ].join("");

  const payloadParts = [
    "000201", // Payload Format Indicator
    "010212", // Point of Initiation Method (12 = Dynamic)
    `29${tag29_content.length.toString().padStart(2, "0")}${tag29_content}`,
    "5303764", // Transaction Currency (THB)
  ];

  if (amount > 0) {
    const amountStr = amount.toFixed(2);
    payloadParts.push(
      `54${amountStr.length.toString().padStart(2, "0")}${amountStr}`,
    );
  }

  payloadParts.push("5802TH"); // Country Code
  payloadParts.push("6304"); // CRC Tag

  const payloadBeforeCRC = payloadParts.join("");
  // 2. คำนวณ Checksum ท้ายรหัส
  const finalPayload = payloadBeforeCRC + crc16(payloadBeforeCRC);

  // 3. สร้างรูปภาพ QR Code (ใช้ promptpay.io ซึ่งเสถียรที่สุดในไทย)
  const formattedAmount = amount > 0 ? amount.toFixed(2) : "";
  const qrImageUrl = `https://promptpay.io/0990322175/${formattedAmount}.png`;

  return {
    qrUrl: qrImageUrl,
    payload: finalPayload,
    accountName: "นาย อลงกรณ์ ยมเกิด",
    branchName: "UNLINK-TH",
    branchId: "56288",
    accounts: [
      { type: "LH Bank", no: "801-2-59331-2", name: "นาย อลงกรณ์ ยมเกิด" },
      { type: "TrueMoney", no: "099-032-2175", name: "นาย อลงกรณ์ ยมเกิด" },
      { type: "PromptPay", no: "140000990322175", name: "นาย อลงกรณ์ ยมเกิด" },
    ],
  };
}

/**
 * UNLINK-PAYMENT: STATIC QR CONFIGURATION (FALLBACK)
 */
export function getPaymentConfig(amount: number = 0) {
  return generatePromptPayQR(amount);
}

/**
 * Helper to get Local Asset URL (Public Folder)
 * 🛡️ Robust Strategy: จัดการ Path ให้ถูกต้องไม่ว่าจะส่งมาในรูปแบบใด
 */
export function getImageUrl(path: string): string {
  if (!path) return "/images/services/default.webp";
  if (path.startsWith("http")) return path;

  // 1. ทำความสะอาด Path (ลบ / ตัวแรกออกถ้ามี เพื่อให้จัดการง่าย)
  let cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // 2. ถ้าใน Path มีคำว่า "images/" อยู่แล้ว ให้ส่งกลับโดยเติม / นำหน้า
  if (cleanPath.startsWith("images/")) {
    return `/${cleanPath}`;
  }

  // 3. ถ้าไม่มี "images/" ให้นำหน้าด้วย /images/
  return `/images/${cleanPath}`;
}
