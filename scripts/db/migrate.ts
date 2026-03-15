/** @format */

import { initDatabase } from "../../lib/db";
import "dotenv/config.js";

// 🚀 [AI Automation] Database Migration Script
// สคริปต์นี้ใช้สำหรับรัน Migration เพื่อสร้าง Schema พื้นฐานใน Turso
async function runMigration() {
  console.log("🛠️ [AI] Starting database migration...");
  try {
    const success = await initDatabase();
    if (success) {
      console.log("✅ [AI] Migration completed successfully!");
      process.exit(0);
    } else {
      console.log("❌ [AI] Migration failed.");
      process.exit(1);
    }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("🔴 [AI] Critical Migration Error:", message);
    process.exit(1);
  }
}

runMigration();
