// proxy.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

/**
 * UNLINK-TH | Security Proxy Protocol (2026)
 * -------------------------------------------------------------------------
 * บังคับใช้มาตรการความปลอดภัยขั้นสูงผ่าน HTTP Headers
 * เพื่อป้องกันการถูกโจมตีและรักษาสถานะความลับของข้อมูล
 */

export function proxy(_request: NextRequest) {
  const response = NextResponse.next()

  // 1. Content Security Policy (CSP) - ป้องกัน XSS
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' *.lin.ee;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://www.unlink-th.com https://lin.ee;
    font-src 'self' data:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
  `
    .replace(/\s{2,}/g, " ")
    .trim()

  response.headers.set("Content-Security-Policy", cspHeader)

  // 2. ป้องกันการถูกเรียกใช้ใน Frame (Anti-Clickjacking)
  response.headers.set("X-Frame-Options", "DENY")

  // 3. ป้องกัน Browser จากการเดาชนิดไฟล์ (MIME Sniffing)
  response.headers.set("X-Content-Type-Options", "nosniff")

  // 4. บังคับใช้ HTTPS (HSTS)
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains; preload"
  )

  // 5. ควบคุมการส่งข้อมูล Referrer
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")

  return response
}

export const proxyConfig = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
