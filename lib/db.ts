import { createClient } from "@libsql/client/web";

const url = process.env.TURSO_DATABASE_URL?.trim() || "";
const authToken = process.env.TURSO_AUTH_TOKEN?.trim() || "";

// สร้าง Client เฉพาะเมื่อมี URL เท่านั้น เพื่อป้องกันการล่มระดับ Global
export const db = createClient({
  url: url || "libsql://placeholder.io",
  authToken: authToken,
});

/**
 * Initialize Database Schema
 * รันฟังก์ชันนี้เพื่อสร้างตารางที่จำเป็นหากยังไม่มี
 */
export async function initDb() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      username TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      role TEXT DEFAULT 'admin',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS system_logs (
      id TEXT PRIMARY KEY,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      level TEXT NOT NULL,
      module TEXT NOT NULL,
      message TEXT NOT NULL,
      details TEXT
    )
  `);
}
