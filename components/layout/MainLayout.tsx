/** @format */

'use client'

import * as React from 'react'
import { Navbar } from '@/components/shared/Navbar'
import { Footer } from '@/components/shared/Footer'
import { LineFloat } from '@/components/shared/line-float'
import { WhatsAppFloat } from '@/components/shared/whatsapp-float'
import { GoogleAnalytics } from '@/components/shared/google-analytics'
import { cn } from '@/lib/utils'

/**
 * [STRATEGY: ENTERPRISE STRUCTURAL INTEGRATION]
 * - Contextual Floating: รวมศูนย์ปุ่มแชทลอยตัวให้จัดการได้ที่เดียว
 * - Viewport Safety: ป้องกันเนื้อหาถูก Navbar ทับ (PT-20/24)
 * - Layer Management: จัดลำดับ z-index (Nav: 100, Floating: 90, Modal: 150)
 * - Motion Optimization: ใช้ animate-in ที่นุ่มนวล ลดความล้าทางสายตา
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
        'relative flex min-h-screen flex-col bg-white font-sans antialiased dark:bg-slate-950',
        'selection:bg-blue-600/10 selection:text-blue-600',
      )}
    >
      {/* 📊 Intelligence Layer (Analytics) */}
      <GoogleAnalytics />

      {/* 🧭 Navigation Layer */}
      {!hideNavbar && (
        <header className="fixed inset-x-0 top-0 z-[100]">
          <Navbar />
        </header>
      )}

      {/* 🏗️ Main Content Area */}
      <main
        className={cn(
          'flex w-full flex-grow flex-col',
          // ปรับ Offset ตามความสูง Navbar
          !hideNavbar && 'pt-20 lg:pt-24',
          className,
        )}
      >
        <div className="animate-in fade-in slide-in-from-bottom-1 fill-mode-both flex-grow duration-1000 ease-in-out">
          {children}
        </div>
      </main>

      {/* 💬 Communication Layer (Floating Actions) */}
      {!hideFloating && (
        <aside className="fixed right-8 bottom-8 z-[90] flex flex-col gap-3">
          <LineFloat />
          <WhatsAppFloat />
        </aside>
      )}

      {/* 📜 Information Layer */}
      {!hideFooter && <Footer />}

      {/* 🛡️ Security/Portal Root */}
      <div id="modal-root" className="relative z-[150]" />
    </div>
  )
}
