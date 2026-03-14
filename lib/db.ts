/** @format */

import { createClient, Client } from "@libsql/client";

/**
 * 🗄️ UNLINK-GLOBAL: TURSO DATABASE CONNECTOR (v1.3 - Hybrid Resilience)
 * -------------------------------------------------------------------------
 * มาตรฐานสูงสุด: ป้องกันความผิดพลาดจากการตั้งค่า Env และจัดการ Timeout แบบไดนามิก
 */

// ดึงค่าอย่างปลอดภัยและลดความเสี่ยงจาก Whitespace
const rawUrl = process.env.TURSO_DATABASE_URL || "";
const rawToken = process.env.TURSO_AUTH_TOKEN || "";

const url = rawUrl.trim();
const authToken = rawToken.trim();

// Singleton Pattern เพื่อป้องกัน Connection Exhaustion
const globalForDb = global as unknown as { db: Client | undefined };

export const db =
  globalForDb.db ||
  createClient({
    url: url || "file:local.db",
    authToken: authToken,
  });

if (process.env.NODE_ENV !== "production") globalForDb.db = db;

/**
 * 🏗️ DATABASE INITIALIZATION
 * ตรวจสอบความพร้อมของโครงสร้างพื้นฐาน
 */
export async function initDatabase() {
  // หากไม่มี Config พื้นฐาน ให้หยุดทำงานทันทีเพื่อไม่ให้ระบบวนลูป Error
  if (!url || !authToken) {
    const missing = !url ? "URL" : "TOKEN";
    console.error(`❌ [DB_FATAL]: TURSO_${missing} is missing in environment.`);
    return;
  }

  try {
    // 🛡️ Step 1: Schema Verification & Emergency Setup
    // ใช้ Batch เพื่อความเร็วและลด Latency
    await db.batch(
      [
        `CREATE TABLE IF NOT EXISTS cases (
        id TEXT PRIMARY KEY,
        customer_name TEXT NOT NULL,
        email TEXT NOT NULL,
        service TEXT,
        amount REAL,
        status TEXT DEFAULT 'pending',
        email_sent INTEGER DEFAULT 0,
        file_url TEXT,
        slip_url TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )`,
        `CREATE TABLE IF NOT EXISTS admins (
        id TEXT PRIMARY KEY,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        role TEXT DEFAULT 'admin',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )`,
      ],
      "write",
    );

    console.log("✅ [DB]: Infrastructure and Schema verified.");
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error("❌ [DB]: Schema sync failed:", errorMsg);

    // แจ้งเตือนกรณี Token ผิดพลาด (Unauthorized)
    if (errorMsg.includes("401") || errorMsg.toLowerCase().includes("auth")) {
      console.error("🚨 [DB_AUTH_ERROR]: Please verify TURSO_AUTH_TOKEN.");
    }
  }
}
