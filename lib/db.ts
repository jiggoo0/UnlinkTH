/** @format */

import { createClient } from "@libsql/client";

// ✅ AI Automation Note:
// ค่า Environment Variables เหล่านี้ถูกใช้โดยระบบ AI และ Local/Prod Server
// หากรันผ่าน AI Agent โปรดตรวจสอบให้แน่ใจว่าได้ Export ตัวแปรเหล่านี้ใน Shell Session แล้ว

const url = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

if (!url || !authToken) {
  console.warn(
    "⚠️ [AI Automation Warning] TURSO_DATABASE_URL or TURSO_AUTH_TOKEN is missing. Database connection will fail.",
  );
}

// สร้าง Client เชื่อมต่อ Edge Database (Turso / LibSQL)
export const db = createClient({
  url: url || "libsql://missing-url",
  authToken: authToken || "missing-token",
});

/**
 * 🛠️ [AI Automation] Initial Database Setup
 * ฟังก์ชันนี้ใช้สำหรับสร้างตารางพื้นฐานหากยังไม่มีอยู่ในระบบ
 */
export const initDatabase = async () => {
  try {
    console.log("🛠️ [AI] Initializing database schema...");

    // สร้างตารางเบื้องต้นที่จำเป็นสำหรับ Liaison และ Auth
    await db.execute(`
      CREATE TABLE IF NOT EXISTS service_requests (
          id TEXT PRIMARY KEY,
          service_type TEXT NOT NULL,
          status TEXT NOT NULL DEFAULT 'pending',
          metadata TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    await db.execute(`
      CREATE TABLE IF NOT EXISTS mock_tickets (
          id TEXT PRIMARY KEY,
          ticket_type TEXT NOT NULL,
          reference_code TEXT NOT NULL UNIQUE,
          status TEXT NOT NULL DEFAULT 'active',
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // ตารางสำหรับ Admin Auth (อ้างอิงจากความต้องการของ lib/auth.ts)
    await db.execute(`
      CREATE TABLE IF NOT EXISTS admin_sessions (
          id TEXT PRIMARY KEY,
          token TEXT NOT NULL UNIQUE,
          expires_at DATETIME NOT NULL,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("✅ [AI] Database schema initialized successfully.");
    return true;
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("❌ [AI] Database initialization failed:", message);
    return false;
  }
};

// Helper function สำหรับให้ AI เรียกใช้ตรวจสอบ Connection แบบด่วน
export const checkDbConnection = async () => {
  try {
    const rs = await db.execute("SELECT 1 AS status");
    return { success: true, data: rs.rows[0] };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { success: false, error: message };
  }
};
