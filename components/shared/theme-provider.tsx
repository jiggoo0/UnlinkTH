/** @format */

'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

/**
 * [STRATEGY: THEME ARCHITECTURE]
 * - Attribute: ใช้ 'class' เพื่อสอดคล้องกับ Tailwind 4.0 CSS selector strategy
 * - Performance: ใช้ disableTransitionOnChange เพื่อความนิ่งของ UI ขณะสลับโหมด
 * - Robustness: ป้องกัน Flash of Unstyled Content (FOUC)
 */

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  // หมายเหตุ: Next.js 15 แนะนำให้จัดการ Hydration Warning ที่ระดับ Layout
  // แต่การทำ Mounted check ใน Provider ก็เป็นวิธีที่ปลอดภัยสูงสำหรับ Client Components
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // ในระหว่างที่กำลัง Mount ให้แสดง Children แบบโปร่งใสเพื่อรักษา Layout
  // หรือส่งค่า Children ออกไปตรงๆ หากคุณจัดการ suppressHydrationWarning ที่ html tag แล้ว
  if (!mounted) {
    return <>{children}</>
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
