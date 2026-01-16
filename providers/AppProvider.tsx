"use client"

import React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { TooltipProvider } from "@/components/ui/tooltip"

/**
 * AppProvider (Root Provider)
 * ทำหน้าที่รวบรวม Provider ทั้งหมดเพื่อให้คอมโพเนนต์ลูกใช้งานได้ทั่วทั้งแอป
 * และจัดการเรื่อง Hydration เพื่อให้ UI นิ่งและไม่เกิด Flash of unstyled content
 */
export default function AppProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = React.useState(false)

  // ป้องกันปัญหา Hydration Mismatch ระหว่าง Server และ Client
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <TooltipProvider delayDuration={300}>{children}</TooltipProvider>
    </NextThemesProvider>
  )
}
