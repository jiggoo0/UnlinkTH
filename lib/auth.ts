/** @format */

import { cookies } from "next/headers";
import { db, initDatabase } from "@/lib/db";
import crypto from "crypto";

/**
 * 🔒 UNLINK-GLOBAL: ADMIN AUTHENTICATION (v2.2 - Decoupled Architecture)
 * -------------------------------------------------------------------------
 * มาตรฐานความปลอดภัยระดับ Elite: แยกส่วนกระบวนการ Setup ออกจาก Runtime Login
 */

const ADMIN_SESSION_KEY = "unlink_admin_session";

/**
 * 🛠️ UTILITIES
 */
function hashPassword(password: string) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

/**
 * 🏗️ SYSTEM BOOTSTRAP: ENSURE ADMIN
 * ใช้สำหรับครั้งแรกที่ระบบสตาร์ท หรือเมื่อมีการอัปเดต Credentials
 */
export async function syncAdminCredentials() {
  try {
    await initDatabase();

    const username = process.env.ADMIN_USERNAME || "Admin";
    const password = process.env.ADMIN_PASSWORD;

    if (!password) {
      console.warn("⚠️ [AUTH]: ADMIN_PASSWORD missing. Skip credentials sync.");
      return;
    }

    const hashed = hashPassword(password);

    // Sync ข้อมูลลงใน ID '1' เสมอเพื่อความเป็นระเบียบ
    await db.execute({
      sql: "INSERT OR REPLACE INTO admins (id, username, password) VALUES ('1', ?, ?)",
      args: [username, hashed],
    });

    console.log(`✅ [AUTH]: Credentials synchronized for: ${username}`);
  } catch (error) {
    console.error("❌ [AUTH]: Credentials Sync Failed:", error);
  }
}

/**
 * 🔑 CORE LOGIN LOGIC (Read-only for high resilience)
 */
export async function loginAdmin(username: string, password: string) {
  try {
    const hashedPassword = hashPassword(password);

    // ตรวจสอบข้อมูลจาก DB โดยตรง (No write operations here)
    const result = await db.execute({
      sql: "SELECT * FROM admins WHERE username = ? AND password = ?",
      args: [username, hashedPassword],
    });

    if (result.rows.length > 0) {
      const cookieStore = await cookies();
      cookieStore.set(ADMIN_SESSION_KEY, "authenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24, // 24 Hours session
        path: "/",
        sameSite: "lax",
      });
      return { success: true };
    }
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error("🚨 [AUTH]: Authentication System Critical Error:", errorMsg);

    // หากเกิด Error เพราะตารางยังไม่มี ให้ลองรัน Sync ครั้งเดียว
    if (errorMsg.includes("no such table")) {
      console.log("🔄 [AUTH]: Attempting emergency recovery...");
      await syncAdminCredentials();
      return {
        success: false,
        error: "System initializing. Please try again.",
      };
    }

    return {
      success: false,
      error: "Database Connection Failure. Please try again in 30s.",
    };
  }

  return { success: false, error: "Invalid Operational Credentials" };
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_SESSION_KEY);
}

export async function isAuthenticated() {
  const cookieStore = await cookies();
  return cookieStore.get(ADMIN_SESSION_KEY)?.value === "authenticated";
}
