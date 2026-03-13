/** @format */

import { createClient } from "@libsql/client";

/**
 * 🗄️ UNLINK-GLOBAL: TURSO DATABASE CONNECTOR (v1.0)
 * -------------------------------------------------------------------------
 * หัวใจหลักของการจัดเก็บข้อมูลเคสและความลับ (Zero-Error Policy)
 */

const url = process.env.TURSO_DATABASE_URL?.trim();
const authToken = process.env.TURSO_AUTH_TOKEN?.trim();

if (!url || !authToken) {
  // สำหรับการทดสอบเบื้องต้น (Mock mode) หากยังไม่มีค่า Env
  console.warn(
    "⚠️ TURSO CONFIG MISSING: Database will run in local mode or fail.",
  );
}

export const db = createClient({
  url: url || "file:local.db",
  authToken: authToken,
});

/**
 * 🏗️ DATABASE INITIALIZATION
 * สร้างตาราง cases หากยังไม่มี
 */
export async function initDatabase() {
  try {
    await db.execute(`
      CREATE TABLE IF NOT EXISTS cases (
        id TEXT PRIMARY KEY,
        customer_name TEXT NOT NULL,
        email TEXT NOT NULL,
        service TEXT,
        amount REAL,
        status TEXT DEFAULT 'pending',
        email_sent INTEGER DEFAULT 0,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("✅ [DB]: Tables initialized successfully.");
  } catch (error) {
    console.error("❌ [DB]: Initialization failed:", error);
  }
}
