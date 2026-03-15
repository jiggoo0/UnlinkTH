/** @format */

import { cookies } from "next/headers";
import { db, initDatabase } from "@/lib/db";
import crypto from "crypto";

/**
 * 🔒 UNLINK-GLOBAL: ADMIN AUTHENTICATION (v2.4 - Production Ready)
 * -------------------------------------------------------------------------
 * ระบบตรวจสอบสิทธิ์ที่เน้นความโปร่งใสของข้อผิดพลาดและการกู้คืนเชิงรุก
 */

const ADMIN_SESSION_KEY = "unlink_admin_session";

function hashPassword(password: string) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

/**
 * 🏗️ SYSTEM BOOTSTRAP
 */
export async function syncAdminCredentials() {
  const username = process.env.ADMIN_USERNAME || "Admin";
  const password = process.env.ADMIN_PASSWORD;

  if (!password) {
    console.error(
      "🚨 [AUTH_FATAL]: ADMIN_PASSWORD environment variable is missing.",
    );
    return;
  }

  try {
    await initDatabase();
    const hashed = hashPassword(password);

    await db.execute({
      sql: "INSERT OR REPLACE INTO admins (id, username, password) VALUES ('1', ?, ?)",
      args: [username, hashed],
    });

    console.log(
      `✅ [AUTH]: System Credentials successfully synced for ${username}`,
    );
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error("❌ [AUTH]: Sync failed:", errorMsg);
  }
}

/**
 * 🔑 LOGIN OPERATION
 */
export async function loginAdmin(username: string, password: string) {
  const envUsername = process.env.ADMIN_USERNAME?.trim();
  const envPassword = process.env.ADMIN_PASSWORD?.trim();

  // 1. [CRITICAL PRIORITY]: Direct Environment Variable Check
  // วิธีนี้ชัวร์ที่สุด จบปัญหาเรื่อง DB Connection ล้มเหลวขณะล็อกอิน
  if (envUsername && envPassword) {
    if (username === envUsername && password === envPassword) {
      console.log("✅ [AUTH]: Logged in via Direct ENV Match.");
      await createAuthSession();
      return { success: true };
    }
  }

  // 2. [FALLBACK]: Database Check (กรณี Env ไม่ได้ตั้งค่า หรือต้องการใช้หลาย User ในอนาคต)
  try {
    const hashedPassword = hashPassword(password);
    const result = await db.execute({
      sql: "SELECT * FROM admins WHERE username = ? AND password = ?",
      args: [username, hashedPassword],
    });

    if (result.rows.length > 0) {
      console.log("✅ [AUTH]: Logged in via Database Match.");
      await createAuthSession();
      return { success: true };
    }
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error("🚨 [AUTH_DB_ERROR]:", errorMsg);
    // หากมาถึงตรงนี้แล้ว ENV Check ข้างบนก็ไม่ผ่าน แสดงว่ารหัสผิดจริง หรือระบบล่มหนัก
  }

  return { success: false, error: "Invalid Operational Credentials" };
}

/**
 * 🛠️ INTERNAL: Create Session Cookie
 */
async function createAuthSession() {
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_SESSION_KEY, "authenticated", {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24, // 24 Hours
    path: "/",
    sameSite: "lax",
  });
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_SESSION_KEY);
}

export async function isAuthenticated() {
  const cookieStore = await cookies();
  return cookieStore.get(ADMIN_SESSION_KEY)?.value === "authenticated";
}
