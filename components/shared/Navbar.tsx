/** @format */

'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowRight, Lock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Logo } from './logo'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * [STRATEGY: ADAPTIVE NAVIGATION SYSTEM]
 * - Technical Authority: แสดงสถานะความปลอดภัย (Secure Status) ในจุดที่มองเห็นง่าย
 * - Human-Centric: ปรับภาษาปุ่มให้ดูเป็นการช่วยเหลือ (Consult) มากกว่าแค่การติดต่อ
 * - Performance: ใช้ Framer Motion เฉพาะจุดที่จำเป็นตาม AI Context (Functional Only)
 */

const NAV_LINKS = [
  { name: 'หน้าแรก', href: '/' },
  { name: 'บริการของเรา', href: '/services' },
  { name: 'กรณีศึกษา', href: '/cases' },
  { name: 'คำถามที่พบบ่อย', href: '/faq' },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [isVisible, setIsVisible] = React.useState(true)
  const lastScrollY = React.useRef(0)

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 20)

      if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
        setIsVisible(false)
        setIsOpen(false)
      } else {
        setIsVisible(true)
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // ปิดเมนูเมื่อมีการเปลี่ยนเส้นทาง
  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <nav
      className={cn(
        'fixed inset-x-0 top-0 z-[100] transition-all duration-500 ease-in-out',
        scrolled ? 'py-4' : 'py-6 md:py-8',
        isVisible ? 'translate-y-0' : '-translate-y-full',
      )}
    >
      <div className="container mx-auto max-w-7xl px-6">
        <div
          className={cn(
            'flex items-center justify-between rounded-full border px-6 py-2.5 transition-all duration-500 md:py-3',
            scrolled
              ? 'border-slate-200/50 bg-white/80 shadow-2xl backdrop-blur-xl dark:border-slate-800/30 dark:bg-slate-950/80'
              : 'border-transparent bg-transparent',
          )}
        >
          {/* 🏛️ Branding Area */}
          <div className="relative z-[110]">
            <Logo fontSize="text-[14px] md:text-base" iconSize={16} />
          </div>

          {/* 💻 Desktop Navigation */}
          <div className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'group font-thai relative py-2 text-[10px] font-black tracking-[0.25em] uppercase transition-all',
                    isActive
                      ? 'text-blue-600'
                      : 'text-slate-400 hover:text-slate-900 dark:hover:text-white',
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      'absolute bottom-0 left-0 h-0.5 rounded-full bg-blue-600 transition-all duration-300',
                      isActive ? 'w-full' : 'w-0 group-hover:w-4',
                    )}
                  />
                </Link>
              )
            })}
          </div>

          {/* 🛠️ Desktop Actions */}
          <div className="hidden items-center gap-6 md:flex">
            {/* 🛡️ Secure Status Indicator */}
            <div className="flex items-center gap-2 rounded-full border border-slate-200/50 bg-slate-100 px-3 py-1 dark:border-slate-800 dark:bg-slate-900">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              <span className="text-[9px] font-black tracking-widest text-slate-500 uppercase dark:text-slate-400">
                SECURED
              </span>
            </div>

            <Button
              asChild
              className="group h-11 rounded-full bg-slate-950 px-8 text-[10px] font-black tracking-widest text-white uppercase shadow-lg transition-all duration-500 hover:bg-blue-600 hover:shadow-blue-600/25 active:scale-95 dark:bg-blue-700 dark:hover:bg-blue-600"
            >
              <Link href="/contact" className="flex items-center gap-3">
                Secure Consult{' '}
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Button>
          </div>

          {/* 📱 Mobile Trigger */}
          <button
            className="relative z-[110] flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white transition-all active:scale-75 md:hidden dark:bg-white dark:text-slate-950"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation"
          >
            {isOpen ? (
              <X size={18} strokeWidth={3} />
            ) : (
              <Menu size={18} strokeWidth={3} />
            )}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[100] flex flex-col bg-white px-8 pt-32 pb-12 dark:bg-slate-950"
          >
            <div className="absolute top-0 right-0 -z-10 h-64 w-64 bg-blue-600/10 blur-[120px]" />

            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-blue-600" />
                <span className="text-[10px] font-black tracking-[0.4em] text-blue-600 uppercase">
                  Menu Directory
                </span>
              </div>
              <div className="flex flex-col gap-6">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'font-thai text-5xl font-black tracking-tighter uppercase transition-colors',
                        pathname === link.href
                          ? 'text-blue-600'
                          : 'text-slate-950 dark:text-white',
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-auto space-y-8">
              <div className="h-px w-full bg-slate-100 dark:bg-slate-900" />
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                  <div className="flex items-center gap-2">
                    <Lock size={12} className="text-emerald-500" />
                    Privacy Protocol Active
                  </div>
                  <span className="text-blue-600">v1.5.7</span>
                </div>
                <Button
                  asChild
                  className="h-16 w-full rounded-2xl bg-slate-950 text-[11px] font-black tracking-[0.2em] uppercase shadow-2xl dark:bg-blue-600"
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-3"
                  >
                    Start Protection Protocol <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
