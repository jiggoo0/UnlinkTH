/** @format */

import { cookies } from "next/headers";
import fs from "fs";
import path from "path";
import { db, initDatabase } from "@/lib/db";
import crypto from "crypto";

/**
 * 🔒 UNLINK-GLOBAL: ADMIN AUTHENTICATION (v2.1 - Enhanced Resilience)
 * -------------------------------------------------------------------------
 * ระบบตรวจสอบสิทธิ์ที่ออกแบบมาเพื่อกู้คืนตัวเองจากปัญหาฐานข้อมูล
 */

const ADMIN_SESSION_KEY = "unlink_admin_session";

/**
 * 🛠️ PASSWORD UTILITY
 */
function hashPassword(password: string) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

/**
 * 🛡️ VAULT LOADER
 */
function getVaultCredentials() {
  try {
    const vaultPath = path.join(process.cwd(), ".gemini/secrets/admin.json");
    if (fs.existsSync(vaultPath)) {
      const data = fs.readFileSync(vaultPath, "utf-8");
      return JSON.parse(data);
    }
  } catch {
    /* Silent fail */
  }
  return {};
}

/**
 * 🏗️ SYSTEM BOOTSTRAP: ENSURE ADMIN
 * บังคับ Init ฐานข้อมูลก่อนตรวจสอบเสมอเพื่อป้องกัน Database Error
 */
async function ensureAdminExists() {
  try {
    // 🛡️ ขั้นตอนที่ 1: มั่นใจว่าตาราง admins มีอยู่จริง
    await initDatabase();

    // 🛡️ ขั้นตอนที่ 2: ตรวจสอบจำนวน Admin
    const result = await db.execute("SELECT COUNT(*) as count FROM admins");
    const count = Number(result.rows[0]?.count) || 0;

    if (count === 0) {
      const vault = getVaultCredentials();
      const initialUsername =
        process.env.ADMIN_USERNAME || vault.ADMIN_USERNAME || "admin";
      const initialPassword =
        process.env.ADMIN_PASSWORD || vault.ADMIN_PASSWORD;

      if (initialPassword) {
        await db.execute({
          sql: "INSERT INTO admins (id, username, password) VALUES (?, ?, ?)",
          args: [
            crypto.randomUUID(),
            initialUsername,
            hashPassword(initialPassword),
          ],
        });
        console.log("✅ [AUTH]: System seeded with initial credentials.");
      }
    }
  } catch (error) {
    console.error("❌ [AUTH]: Security Bootstrap failed:", error);
    throw new Error("DATABASE_INIT_FAILURE", { cause: error });
  }
}

export async function loginAdmin(username: string, password: string) {
  try {
    // รันการตรวจสอบและสร้างตารางก่อนเริ่ม Login
    await ensureAdminExists();

    const hashedPassword = hashPassword(password);
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
      });
      return { success: true };
    }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("🚨 [AUTH]: Login System Error:", message);
    const errorMsg =
      message === "DATABASE_INIT_FAILURE"
        ? "DB_CONNECT_FAILED"
        : "AUTH_SYSTEM_ERROR";
    return { success: false, error: `Critical System Error: ${errorMsg}` };
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
