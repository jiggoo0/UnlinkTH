"use server";

import { db } from "@/lib/db";
import { cookies } from "next/headers";
import { v4 as uuidv4 } from "uuid";
import crypto from "crypto";

// Secret สำหรับใช้ทำ Cookie Signing (ควรตั้งค่าใน .env.local)
const SESSION_SECRET =
  process.env.ADMIN_SESSION_SECRET || "UL_SECRET_2026_9mzm";
const SESSION_COOKIE_NAME = "ul_admin_session";

/**
 * ฟังก์ชันเข้ารหัสรหัสผ่าน (Secure Hashing)
 */
function hashPassword(password: string): string {
  return crypto
    .createHash("sha256")
    .update(password + SESSION_SECRET)
    .digest("hex");
}

/**
 * สร้างผู้ใช้ Admin (ใช้รันครั้งแรก)
 */
export async function seedAdminUser() {
  const username = "admin";
  const password = hashPassword("Aem25217.");
  const id = uuidv4();

  try {
    await db.execute({
      sql: "INSERT OR REPLACE INTO users (id, username, password) VALUES (?, ?, ?)",
      args: [id, username, password],
    });
    return { success: true, message: "Admin user initialized successfully" };
  } catch (err) {
    console.error("Seed Admin Error:", err);
    return { success: false, error: "Initialization failed" };
  }
}

/**
 * ล็อกอินเข้าระบบ
 */
export async function loginAction(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (!username || !password) {
    return { success: false, error: "โปรดระบุ Username และ Password" };
  }

  try {
    const result = await db.execute({
      sql: "SELECT * FROM users WHERE username = ? LIMIT 1",
      args: [username],
    });

    if (result.rows.length === 0) {
      return {
        success: false,
        error: "ไม่พบบัญชีผู้ใช้นี้ หรือรหัสผ่านไม่ถูกต้อง",
      };
    }

    const user = result.rows[0];
    const hashedPassword = hashPassword(password);

    if (hashedPassword !== user.password) {
      return { success: false, error: "รหัสผ่านไม่ถูกต้อง" };
    }

    // สร้าง Session Cookie (HTTP-only เพื่อความปลอดภัยสูงสุด)
    const cookieStore = await cookies();
    cookieStore.set(SESSION_COOKIE_NAME, user.id as string, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 1 วัน
      path: "/",
    });

    return { success: true };
  } catch (err) {
    console.error("Login Error:", err);
    return { success: false, error: "เกิดข้อผิดพลาดในการตรวจสอบสิทธิ์" };
  }
}

/**
 * ออกจากระบบ
 */
export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
  return { success: true };
}
