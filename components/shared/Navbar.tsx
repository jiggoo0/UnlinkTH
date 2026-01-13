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
  ArrowRight,
  PhoneCall,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Logo } from './logo'

const MENU_ITEMS = [
  { name: 'หน้าแรก', href: '/', icon: Home },
  { name: 'บริการของเรา', href: '/services', icon: Briefcase },
  { name: 'ผลงานที่ผ่านมา', href: '/cases', icon: History },
  { name: 'ศูนย์ความรู้ (Wiki)', href: '/wiki', icon: BookOpen },
  { name: 'คำถามที่พบบ่อย', href: '/faq', icon: HelpCircle },
]

export function Navbar() {
  const pathname = usePathname()
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)

  // ปิดเมนูอัตโนมัติเมื่อเปลี่ยนหน้า
  React.useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  return (
    <nav className="fixed inset-x-0 top-0 z-[100] border-b border-slate-100 bg-white/95 backdrop-blur-md">
      {/* 🏛️ 1. Sub-Header (Desktop Only) */}
      <div className="hidden border-b border-slate-50 bg-slate-50/50 px-6 py-2 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <p className="font-thai text-[11px] font-medium text-slate-500">
            ระบบบริหารจัดการข้อมูลส่วนบุคคลอย่างเป็นธรรม
            ภายใต้มาตรฐานความปลอดภัยระดับสากล
          </p>
          <div className="flex items-center gap-4 text-[11px] font-bold tracking-wider text-blue-600 uppercase">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              สถานะระบบ: ปกติ (Online)
            </span>
          </div>
        </div>
      </div>

      {/* 🏛️ 2. Main Navigation Interface */}
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* ✅ FIXED: นำ <Link> ออก เพราะในคอมโพเนนต์ Logo มี <Link> อยู่แล้ว */}
          <div className="flex shrink-0 items-center">
            <Logo fontSize="text-lg md:text-xl" iconSize={24} />
          </div>

          {/* Desktop Menu Links */}
          <div className="hidden items-center gap-1 lg:flex">
            {MENU_ITEMS.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'group flex items-center gap-2 rounded-xl px-4 py-2.5 transition-all duration-300',
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-blue-600',
                  )}
                >
                  <Icon size={16} strokeWidth={isActive ? 2.5 : 2} />
                  <span className="font-thai text-[14px] font-bold tracking-tight">
                    {item.name}
                  </span>
                </Link>
              )
            })}
          </div>

          {/* Contact Hub */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-white shadow-md transition-all hover:bg-blue-700 active:scale-95 sm:flex"
            >
              <PhoneCall size={16} />
              <span className="font-thai text-[14px] font-bold">
                ติดต่อเจ้าหน้าที่
              </span>
            </Link>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-900 transition-all hover:bg-slate-100 active:scale-90 lg:hidden"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 📱 3. Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-x-0 top-[65px] z-[90] overflow-hidden border-b border-slate-200 bg-white lg:hidden"
          >
            <div className="flex flex-col gap-3 p-5">
              {MENU_ITEMS.map((item) => {
                const isActive = pathname === item.href
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'flex items-center gap-4 rounded-2xl px-5 py-4 transition-all',
                      isActive
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-slate-700 active:bg-slate-50',
                    )}
                  >
                    <Icon
                      size={22}
                      className={isActive ? 'text-blue-600' : 'text-slate-400'}
                    />
                    <span className="font-thai text-lg font-bold">
                      {item.name}
                    </span>
                  </Link>
                )
              })}

              <div className="mt-2 h-px w-full bg-slate-100" />

              <Link
                href="/contact"
                className="flex h-16 items-center justify-center gap-3 rounded-2xl bg-blue-600 text-white shadow-lg transition-colors active:bg-blue-700"
              >
                <PhoneCall size={20} />
                <span className="font-thai text-lg font-bold">
                  ปรึกษาเราตอนนี้
                </span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
