/** @format */

import { cookies } from "next/headers";
import fs from "fs";
import path from "path";

/**
 * 🔒 UNLINK-GLOBAL: ADMIN AUTHENTICATION (v1.1)
 * -------------------------------------------------------------------------
 * ระบบตรวจสอบสิทธิ์เข้าถึงหน้าควบคุมการปฏิบัติการ (Username & Password)
 */

const ADMIN_SESSION_KEY = "unlink_admin_session";

/**
 * 🛡️ VAULT LOADER
 * ดึงความลับจาก AI Vault หากไม่มีใน Environment (สำหรับ Local/Termux)
 */
function getVaultCredentials() {
  try {
    const vaultPath = path.join(process.cwd(), ".gemini/secrets/admin.json");
    if (fs.existsSync(vaultPath)) {
      const data = fs.readFileSync(vaultPath, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.warn("⚠️ [AUTH]: Could not read AI Vault credentials.");
  }
  return {};
}

export async function loginAdmin(username: string, password: string) {
  const vault = getVaultCredentials();
  
  const secretUsername = process.env.ADMIN_USERNAME || vault.ADMIN_USERNAME || "admin";
  const secretPassword = process.env.ADMIN_PASSWORD || vault.ADMIN_PASSWORD;

  if (!secretPassword) {
    console.error("🚨 ADMIN_PASSWORD is not set in environment or AI Vault.");
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
