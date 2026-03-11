import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * UNLINK-TH Security Middleware
 * ป้องกันการเข้าถึงหน้า Admin โดยไม่ได้รับอนุญาต
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = request.cookies.get("ul_admin_session");

  // ตรวจสอบเฉพาะหน้าที่ขึ้นต้นด้วย /admin (ยกเว้นหน้า /admin/login)
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    if (!session) {
      // หากไม่มี Session ให้ Redirect ไปหน้า Login ทันที
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

/**
 * กำหนดขอบเขตของ Middleware
 */
export const config = {
  matcher: ["/admin/:path*"],
};
