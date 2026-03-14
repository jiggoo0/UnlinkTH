/** @format */

import { createClient } from "@libsql/client";

/**
 * 🗄️ UNLINK-GLOBAL: TURSO DATABASE CONNECTOR (v1.1)
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
    // 🛡️ Step 1: Health Check / Connection Test
    if (url && !url.includes("undefined") && authToken) {
      try {
        await Promise.race([
          db.execute("SELECT 1"),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error("CONNECTION_TIMEOUT")), 8000),
          ),
        ]);
        console.log("📡 [DB]: Cloud connection established.");
      } catch (connErr: unknown) {
        console.error("❌ [DB]: Cloud connection failed:", connErr);
        // If we are on Vercel, we MUST have a cloud connection. Fallback to local won't work.
        if (process.env.VERCEL) {
          throw new Error("CLOUD_CONNECTION_REQUIRED_ON_VERCEL", {
            cause: connErr,
          });
        }
      }
    } else {
      console.warn(
        "⚠️ [DB_RESILIENCE]: Cloud config missing. Using local/fallback mode.",
      );
    }

    // 🛡️ Step 2: Check if tables exist before creating (Efficiency)
    const tableCheck = await db.execute(
      "SELECT name FROM sqlite_master WHERE type='table' AND name='admins'",
    );

    if (tableCheck.rows.length === 0) {
      console.log("🏗️ [DB]: Tables missing. Initializing schema...");
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
      console.log("✅ [DB]: Schema initialized successfully.");
    } else {
      console.log("✅ [DB]: Schema verified.");
    }
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error("❌ [DB]: Initialization fatal error:", errorMsg);
    throw new Error(`DATABASE_INIT_FAILURE: ${errorMsg}`, { cause: error });
  }
}
