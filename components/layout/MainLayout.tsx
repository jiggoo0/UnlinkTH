/** @format */

'use client'

import * as React from 'react'
import { Navbar } from '@/components/shared/Navbar'
import { Footer } from '@/components/shared/Footer'
import { LineFloat } from '@/components/shared/line-float'
import { cn } from '@/lib/utils'

/**
 * [STRATEGY: INCLUSIVE DESIGN v4.18]
 * - Visual Stability: ป้องกันอาการ Layout Shift ด้วยการจองพื้นที่ Header
 * - Semantic: แยกส่วน Header/Footer หลักออกจากหน้าบทความ Wiki โดยเด็ดขาด
 * - User Comfort: ใช้แอนิเมชันที่ช้าลง (1000ms) เพื่อลดความกระด้างของหน้าจอ
 */

interface MainLayoutProps {
  children: React.ReactNode
  className?: string
  hideNavbar?: boolean
  hideFooter?: boolean
  hideFloating?: boolean
}

export function MainLayout({
  children,
  className,
  hideNavbar = false,
  hideFooter = false,
  hideFloating = false,
}: MainLayoutProps) {
  return (
    <div
      className={cn(
        'font-thai relative flex min-h-screen flex-col bg-white antialiased dark:bg-slate-950',
        'transition-colors duration-500 selection:bg-blue-600/10 selection:text-blue-600',
      )}
    >
      {/* 🧭 NAVIGATION: แสดงเฉพาะหน้าเว็บหลัก (z-100) */}
      {!hideNavbar && (
        <header className="fixed inset-x-0 top-0 z-[100] h-20 bg-white/80 shadow-sm backdrop-blur-md transition-all duration-300 lg:h-24 dark:bg-slate-950/80">
          <Navbar />
        </header>
      )}

      {/* 🏗️ MAIN CONTENT: พื้นที่แสดงเนื้อหาหลัก */}
      <main
        id="main-content"
        className={cn(
          'relative flex w-full flex-grow flex-col',
          // ดันเนื้อหาลงมาให้พ้นแถบเมนู (Matching Header Height)
          !hideNavbar && 'pt-20 lg:pt-24',
          className,
        )}
      >
        {/* Entry Transition: สร้างความรู้สึกพรีเมียมขณะเปลี่ยนหน้า */}
        <div className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both flex-grow duration-1000 ease-out">
          {children}
        </div>
      </main>

      {/* 💬 FLOATING ACTIONS: ปุ่มติดต่อ (Line/Support) */}
      {!hideFloating && (
        <aside
          className="fixed right-6 bottom-8 z-[90] flex flex-col gap-5 md:right-10 md:bottom-10"
          aria-label="ช่องทางช่วยเหลือ"
        >
          <LineFloat />
        </aside>
      )}

      {/* 📜 FOOTER: ข้อมูลด้านล่างสุดของเว็บไซต์หลัก */}
      {!hideFooter && (
        <footer className="relative z-10 mt-auto border-t border-slate-100 dark:border-slate-800">
          <Footer />
        </footer>
      )}

      {/* PORTAL: สำหรับแสดง Modal หรือ Pop-up (z-150) */}
      <div id="portal-root" className="relative z-[150]" />
    </div>
  )
}
