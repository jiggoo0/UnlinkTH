/** @format */

'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  Home,
  Briefcase,
  History,
  BookOpen,
  HelpCircle,
  MessageCircle,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Logo } from './logo'

/**
 * [STRATEGY: ACCESSIBLE UI v6.1]
 * - Fix Lint: ลบการนำเข้า 'ArrowRight' ที่ไม่ได้ใช้งาน (Unused Variable)
 * - Language: ใช้ภาษาพูดที่เข้าใจง่าย ตัดศัพท์เทคนิคออก เพื่อความเป็นกันเอง
 * - UX: เน้นปุ่มติดต่อ (Contact Button) ให้มีความเด่นชัดสูงสุดทั้ง Desktop และ Mobile
 */

const MENU_ITEMS = [
  { name: 'หน้าแรก', href: '/', icon: Home },
  { name: 'บริการของเรา', href: '/services', icon: Briefcase },
  { name: 'รีวิว/ผลงาน', href: '/cases', icon: History },
  { name: 'ความรู้เรื่องลบข้อมูล', href: '/wiki', icon: BookOpen },
  { name: 'ถาม-ตอบ', href: '/faq', icon: HelpCircle },
]

export function Navbar() {
  const pathname = usePathname()
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)

  React.useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  return (
    <nav className="fixed inset-x-0 top-0 z-[100] border-b border-slate-100 bg-white/95 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/95">
      {/* 🏛️ 1. TOP ANNOUNCEMENT (Friendly Tone) */}
      <div className="hidden border-b border-blue-50 bg-blue-600 px-6 py-2 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <p className="font-thai text-[12px] font-medium text-white">
            รับแก้ปัญหาประวัติเสีย ลบข้อมูลไม่ดีบนเน็ต ดูแลด้วยใจ
            ปรึกษาฟรีไม่มีค่าใช้จ่าย
          </p>
          <div className="flex items-center gap-4 text-[11px] font-bold text-white uppercase">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              เจ้าหน้าที่พร้อมช่วยเหลือ (Online)
            </span>
          </div>
        </div>
      </div>

      {/* 🏛️ 2. MAIN NAV */}
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <Logo fontSize="text-xl" iconSize={28} />
          </div>

          {/* Desktop Links: เน้นภาษาไทยชัดๆ */}
          <div className="hidden items-center gap-2 lg:flex">
            {MENU_ITEMS.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'group relative flex items-center gap-2 rounded-full px-5 py-2.5 transition-all duration-300',
                    isActive
                      ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400'
                      : 'text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-white',
                  )}
                >
                  <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                  <span className="font-thai text-[15px] font-bold">
                    {item.name}
                  </span>
                </Link>
              )
            })}
          </div>

          {/* Contact Button: เน้นสีสดใส กระตุ้นการกด */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white shadow-lg shadow-blue-600/30 transition-all hover:scale-105 hover:bg-blue-700 active:scale-95 sm:flex"
            >
              <MessageCircle size={18} fill="currentColor" />
              <span className="font-thai text-[15px] font-bold">
                ทักหาเราเลย
              </span>
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-900 transition-all active:scale-90 lg:hidden dark:bg-slate-900 dark:text-white"
            >
              {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* 📱 3. MOBILE MENU */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-[64px] z-[90] border-b border-slate-200 bg-white p-5 lg:hidden dark:border-slate-800 dark:bg-slate-950"
          >
            <div className="flex flex-col gap-3">
              {MENU_ITEMS.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'flex items-center gap-4 rounded-2xl px-6 py-5 transition-all',
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-50 text-slate-700 dark:bg-slate-900 dark:text-slate-400',
                    )}
                  >
                    <item.icon size={22} />
                    <span className="font-thai text-xl font-bold">
                      {item.name}
                    </span>
                  </Link>
                )
              })}

              <Link
                href="/contact"
                className="font-thai mt-4 flex h-20 items-center justify-center gap-3 rounded-3xl bg-emerald-500 text-xl font-bold text-white shadow-xl shadow-emerald-500/20 transition-transform active:scale-95"
              >
                <MessageCircle size={24} fill="currentColor" />
                คุยกับเราตอนนี้ฟรี!
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
