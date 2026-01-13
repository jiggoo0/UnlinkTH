/** @format */

'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { WikiSidebar } from './WikiSidebar'
import { WikiBreadcrumbs } from './WikiBreadcrumbs'
import { BookOpen, ShieldCheck, Menu, X, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function WikiLayout({
  children,
  currentCategory,
  currentTitle,
}: {
  children: React.ReactNode
  currentCategory?: string
  currentTitle?: string
}) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const pathname = usePathname()

  // 🏛️ ปรับปรุง: ปิดเมนูอัตโนมัติเมื่อกดเปลี่ยนหน้า (ป้องกันเมนูค้างบนมือถือ)
  React.useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <div className="font-thai relative flex min-h-screen flex-col antialiased selection:bg-blue-100 selection:text-blue-700">
      {/* 🏛️ 1. แถบนำทางด้านบน (Sticky Navbar) */}
      <nav className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-6">
          {/* ส่วนบอกตำแหน่งปัจจุบัน: ปรับให้นิ่งและอ่านง่าย */}
          <WikiBreadcrumbs category={currentCategory} title={currentTitle} />

          <div className="flex items-center gap-3">
            {/* ป้ายรับรองสำหรับ Desktop */}
            <div className="hidden items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-3 py-1.5 lg:flex">
              <BookOpen size={14} className="text-blue-600" />
              <span className="text-[11px] font-black tracking-wider text-blue-700 uppercase">
                Library 2026
              </span>
            </div>

            {/* ปุ่มเมนูสำหรับ Mobile: เพิ่มความชัดเจน */}
            <Button
              variant="outline"
              size="sm"
              className="flex h-10 gap-2 rounded-xl border-slate-200 px-4 transition-transform active:scale-95 lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
              <span className="text-sm font-bold">เมนู</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* 🏛️ 2. ส่วนเนื้อหาและแถบข้าง (Main Grid) */}
      <div className="container mx-auto flex-grow px-4 lg:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Sidebar สำหรับหน้าจอใหญ่: ปรับให้ลื่นไหล (No-scrollbar) */}
          <aside className="no-scrollbar hidden overflow-y-auto border-r border-slate-50 py-12 lg:sticky lg:top-16 lg:col-span-3 lg:block lg:h-[calc(100vh-64px)]">
            <div className="pr-6">
              <p className="mb-5 text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">
                หมวดหมู่ความรู้
              </p>
              <WikiSidebar />
            </div>
          </aside>

          {/* พื้นที่เนื้อหาหลัก: จัดวาง Typography ให้มีความสำคัญที่สุด */}
          <main className="min-h-[70vh] py-10 lg:col-span-9 xl:col-span-8 xl:col-start-4">
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {children}
            </motion.div>

            {/* 🏛️ 3. ส่วนท้ายรับรองความถูกต้อง (Trust Footer) */}
            {/* ปรับปรุง: รวมข้อความให้กระชับ ไม่ซ้ำซ้อน และดูน่าเชื่อถือ */}
            <footer className="mt-24 border-t border-slate-100 pt-12 pb-20">
              <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-3 text-emerald-600 shadow-sm">
                    <ShieldCheck size={28} strokeWidth={2.5} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-black text-slate-800">
                      ข้อมูลถูกต้องและเชื่อถือได้
                    </p>
                    <p className="max-w-[280px] text-xs leading-relaxed text-slate-500">
                      ได้รับการตรวจสอบความถูกต้องโดยทีมงาน Unlink Thailand
                      ประจำปี 2026
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 md:items-end">
                  <div className="flex gap-4 text-[10px] font-black tracking-widest text-slate-400 uppercase">
                    <span>ช่วยเหลือสังคม</span>
                    <span className="text-slate-200">•</span>
                    <span>แบ่งปันความรู้</span>
                    <span className="text-slate-200">•</span>
                    <span>ปกป้องสิทธิ</span>
                  </div>
                  <div className="rounded-full border border-slate-100 bg-slate-50 px-3 py-1 text-[9px] font-bold text-slate-300">
                    SECURED KNOWLEDGE BASE // ULK-SYSTEM
                  </div>
                </div>
              </div>
            </footer>
          </main>
        </div>
      </div>

      {/* 🏛️ 4. หน้าต่างเมนูมือถือ (Mobile Drawer) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-[60] w-[85%] max-w-[320px] rounded-l-[2rem] bg-white p-8 shadow-2xl lg:hidden"
            >
              <div className="mb-10 flex items-center justify-between border-b border-slate-50 pb-6">
                <div className="flex items-center gap-2 text-blue-600">
                  <Info size={20} />
                  <span className="text-lg font-black tracking-tight text-slate-900">
                    หัวข้อที่น่าสนใจ
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-slate-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X size={20} />
                </Button>
              </div>
              <div className="no-scrollbar h-[calc(100vh-160px)] overflow-y-auto pr-2">
                <WikiSidebar />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
