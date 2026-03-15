/** @format */

import { db } from "../../lib/db";
import "dotenv/config.js";

// 🚀 [AI Automation] Database Ping Script
// สคริปต์นี้ใช้สำหรับรันผ่าน terminal เพื่อเช็คว่าต่อ Turso ติดหรือไม่
async function ping() {
  console.log("🔗 [AI] Attempting to connect to Turso...");
  try {
    const start = Date.now();
    const rs = await db.execute("SELECT 1 AS status");
    const end = Date.now();

    if (rs.rows.length > 0 && rs.rows[0].status === 1) {
      console.log("✅ [AI] Connection Successful!");
      console.log(`⏱️  [AI] Latency: ${end - start}ms`);
      process.exit(0);
    }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("❌ [AI] Connection Failed!");
    console.error(`🔴 [AI] Error: ${message}`);
    process.exit(1);
  }
}

ping();
