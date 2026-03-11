import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * UNLINK-GLOBAL Security Middleware
 * ทำหน้าที่เป็น "ยามเฝ้าประตู" ตรวจสอบสิทธิ์ก่อนเข้าหน้าจัดการระบบ (Admin)
 */
export function middleware(request: NextRequest) {
  const session = request.cookies.get("ul_admin_session");
  const { pathname } = request.nextUrl;

  // 1. ตรวจสอบสิทธิ์หน้า Admin (ยกเว้นหน้า Login)
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    if (!session) {
      // ไม่มีสิทธิ์ -> ส่งกลับไปหน้า Login ทันที
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

/**
 * กำหนดขอบเขตการทำงาน (Matcher Strategy)
 * ปรับแต่งให้ Middleware รัน "เฉพาะ" จุดที่จำเป็นเท่านั้น เพื่อเพิ่มความเร็วให้หน้าเว็บทั่วไป
 */
export const config = {
  matcher: [
    /*
     * 1. รันเฉพาะหน้าที่มีผลต่อความปลอดภัย
     * 2. ยกเว้นไฟล์ระบบและ Assets ทั้งหมด (Static, Images, Fonts, etc.)
     */
    "/admin/:path*",
    "/api/setup/:path*", // ปกป้อง API ตั้งค่าระบบด้วย
  ],
};
