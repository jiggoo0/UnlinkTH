/** @format */

import { syncAdminCredentials } from "@/lib/auth";
import LoginForm from "./LoginForm";

export default async function AdminLoginPage() {
  // 🛡️ Bootstrap Security: Sync ฐานข้อมูลก่อนแสดงผลหน้า Login
  // สิ่งนี้จะช่วยแก้ปัญหา "no such table" หรือ Config เปลี่ยนแปลง
  await syncAdminCredentials();

  return (
    <div className="min-h-screen bg-[#050810] flex items-center justify-center p-6 text-white">
      <LoginForm />
    </div>
  );
}
