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
  console.error(
    "❌ [DB_CONFIG_ERROR]: TURSO_DATABASE_URL or TURSO_AUTH_TOKEN is missing.",
  );
}

export const db = createClient({
  url: url || "file:local.db",
  authToken: authToken,
});

/**
 * 🏗️ DATABASE INITIALIZATION
 * สร้างตาราง cases และ admins หากยังไม่มี
 */
export async function initDatabase() {
  try {
    if (url && !url.includes("undefined") && authToken) {
      // Check connection first with a timeout pattern for remote DB
      await Promise.race([
        db.execute("SELECT 1"),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("CONNECTION_TIMEOUT")), 5000),
        ),
      ]);
    } else {
      console.warn(
        "⚠️ [DB_RESILIENCE]: Operating without cloud database. Using local/fallback mode.",
      );
    }

    await db.execute(`
      CREATE TABLE IF NOT EXISTS cases (
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
      )
    `);
    await db.execute(`
      CREATE TABLE IF NOT EXISTS admins (
        id TEXT PRIMARY KEY,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        role TEXT DEFAULT 'admin',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("✅ [DB]: Tables initialized successfully.");
  } catch (error) {
    console.error("❌ [DB]: Initialization failed:", error);
    throw new Error("DATABASE_INIT_FAILURE", { cause: error });
  }
}
