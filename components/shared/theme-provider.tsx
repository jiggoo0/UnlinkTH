/** @format */

'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

/**
 * [STRATEGY: THEME ARCHITECTURE v4.12]
 * - Context: จัดการสภาวะแวดล้อมเชิงภาพ (Visual Environment) ของระบบ UnlinkTH
 * - Performance: ใช้ disableTransitionOnChange เพื่อป้องกันการคำนวณ Layout ใหม่ขณะเปลี่ยนโหมด
 * - Integrity: มั่นใจว่า CSS Variables ของ Tailwind 4.0 จะถูกฉีดเข้าสู่ DOM อย่างแม่นยำ
 */

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = React.useState(false)

  // 🏛️ 1. HYDRATION GUARD
  // มั่นใจว่า Theme จะถูกเรนเดอร์หลังจาก Client-side hydration เสร็จสิ้นเท่านั้น
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // ในกรณีที่ยังไม่ Mount เราจะเรนเดอร์ children โดยไม่ผ่าน Provider
  // เพื่อหลีกเลี่ยงอาการหน้าจอวูบ (Flicker) และ mismatch ระหว่าง Server/Client
  if (!mounted) {
    return <div className="invisible contents">{children}</div>
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={true}
      disableTransitionOnChange
      storageKey="unlink-theme-protocol" // ใช้ Key เฉพาะสำหรับ Branding
      {...props}
    >
      {/* 🏛️ 2. OPERATIONAL WRAPPER */}
      <div className="relative flex min-h-screen flex-col">{children}</div>
    </NextThemesProvider>
  )
}
