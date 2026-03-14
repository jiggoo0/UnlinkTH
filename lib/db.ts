/** @format */

import { createClient, Client } from "@libsql/client";

/**
 * 🗄️ UNLINK-GLOBAL: TURSO DATABASE CONNECTOR (v1.2 - Singleton Edition)
 * -------------------------------------------------------------------------
 * มาตรฐานการเชื่อมต่อระดับ Elite: ลด Latency และป้องกัน Connection Exhaustion
 */

const url = process.env.TURSO_DATABASE_URL?.trim();
const authToken = process.env.TURSO_AUTH_TOKEN?.trim();

// ใช้ Global Variable เพื่อทำ Singleton ในสภาพแวดล้อม Next.js (HMR Friendly)
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
 * ตรวจสอบและสร้างตาราง (รันเพียงครั้งเดียวเมื่อจำเป็น)
 */
export async function initDatabase() {
  try {
    // 🛡️ Step 1: Silent Health Check
    if (url && authToken) {
      try {
        // ใช้เวลา Timeout ที่นานขึ้นเล็กน้อยสำหรับ Cold Start ของ Turso
        await Promise.race([
          db.execute("SELECT 1"),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error("DB_TIMEOUT")), 10000),
          ),
        ]);
      } catch {
        console.warn("⚠️ [DB]: Initial connection slow, but continuing...");
      }
    }

    // 🛡️ Step 2: Schema Verification (Optimized)
    // สร้างตาราง cases และ admins เฉพาะเมื่อยังไม่มีเท่านั้น
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

    console.log("✅ [DB]: Infrastructure verified.");
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error("❌ [DB]: Initialization Error:", errorMsg);
    // ไม่ Throw Error เพื่อให้แอปยังรันต่อได้ในโหมด Read-only หากจำเป็น
  }
}
