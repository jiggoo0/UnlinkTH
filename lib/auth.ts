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
  // 1. ตรวจสอบ Config เบื้องต้น
  if (!process.env.TURSO_DATABASE_URL || !process.env.TURSO_AUTH_TOKEN) {
    return {
      success: false,
      error: "Database configuration is not established.",
    };
  }

  try {
    const hashedPassword = hashPassword(password);

    // 2. ตรวจสอบข้อมูลแบบ Read-only
    const result = await db.execute({
      sql: "SELECT * FROM admins WHERE username = ? AND password = ?",
      args: [username, hashedPassword],
    });

    if (result.rows.length > 0) {
      const cookieStore = await cookies();
      cookieStore.set(ADMIN_SESSION_KEY, "authenticated", {
        httpOnly: true,
        secure: true,
        maxAge: 60 * 60 * 24, // 24 Hours
        path: "/",
        sameSite: "lax",
      });
      return { success: true };
    }
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error("🚨 [AUTH_RUNTIME_ERROR]:", errorMsg);

    // จัดการ Error แยกตามกรณี
    if (errorMsg.includes("no such table")) {
      await syncAdminCredentials();
      return {
        success: false,
        error: "Database initializing. Please retry in 5s.",
      };
    }

    if (errorMsg.includes("401") || errorMsg.includes("auth")) {
      return { success: false, error: "Infrastructure Authentication Error." };
    }

    return {
      success: false,
      error: `System Connection Failure: ${errorMsg.substring(0, 30)}...`,
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
