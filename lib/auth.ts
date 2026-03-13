/** @format */

import { cookies } from "next/headers";

/**
 * 🔒 UNLINK-GLOBAL: ADMIN AUTHENTICATION (v1.1)
 * -------------------------------------------------------------------------
 * ระบบตรวจสอบสิทธิ์เข้าถึงหน้าควบคุมการปฏิบัติการ (Username & Password)
 */

const ADMIN_SESSION_KEY = "unlink_admin_session";

export async function loginAdmin(username: string, password: string) {
  const secretUsername = process.env.ADMIN_USERNAME || "admin";
  const secretPassword = process.env.ADMIN_PASSWORD;

  if (!secretPassword) {
    console.error("🚨 ADMIN_PASSWORD is not set in environment variables.");
    return { success: false, error: "System Configuration Error" };
  }

  if (username === secretUsername && password === secretPassword) {
    const cookieStore = await cookies();
    cookieStore.set(ADMIN_SESSION_KEY, "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 2, // 2 Hours session
      path: "/",
    });
    return { success: true };
  }

  return { success: false, error: "Invalid Credentials" };
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_SESSION_KEY);
}

export async function isAuthenticated() {
  const cookieStore = await cookies();
  return cookieStore.get(ADMIN_SESSION_KEY)?.value === "authenticated";
}
