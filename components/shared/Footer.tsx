/** @format */

'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  Facebook,
  MessageCircle,
  ShieldCheck,
  Globe,
  Terminal,
  ChevronRight,
  BookOpen,
  Activity,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react'
import { Logo } from './logo'

/**
 * [STRATEGY: THE DIGITAL VAULT FOOTER v5.6]
 * - Language: ปรับคำศัพท์ให้คนทั่วไปเข้าใจง่ายขึ้น (เช่น Review, ปรึกษาฟรี)
 * - UX: เน้นทางลัดไปสู่การติดต่อ (Conversion Hub) ที่ชัดเจน
 * - Architecture: ใช้ Grid 40px Tactical สำหรับพื้นหลังเพื่อความพรีเมียม
 */

const FOOTER_LINKS = {
  protocols: [
    { name: 'ลบชื่อจาก Google', href: '/services/google-de-indexing' },
    { name: 'แก้ประวัติเสีย/ข่าวลบ', href: '/services/reputation-recovery' },
    { name: 'ลบข้อมูลส่วนตัว', href: '/services/data-erasure' },
    { name: 'ใช้สิทธิ์ขอลบข้อมูล', href: '/services/right-to-be-forgotten' },
  ],
  governance: [
    { name: 'ดูรีวิว/ผลงานเคสจริง', href: '/cases' },
    { name: 'ความรู้เรื่องสิทธิ์ของคุณ', href: '/wiki' },
    { name: 'วิเคราะห์ปัญหาฟรี', href: '/services' },
    { name: 'คำถามที่พบบ่อย', href: '/faq' },
  ],
  security: [
    { name: 'นโยบายคุ้มครองข้อมูล (PDPA)', href: '/privacy' },
    { name: 'ข้อตกลงรักษาความลับ', href: '/terms' },
    { name: 'สถานะการให้บริการ', href: '/status' },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white pt-24 pb-12 dark:border-slate-800 dark:bg-slate-950">
      {/* 🏛️ 1. INFRASTRUCTURE DECOR: ปรับความชัดของ Grid ให้ดูทันสมัย */}
      <div className="bg-tactical-grid pointer-events-none absolute inset-0 opacity-[0.4] dark:opacity-[0.1]" />
      <div className="absolute top-0 left-0 h-[1.5px] w-full bg-gradient-to-r from-transparent via-blue-600/30 to-transparent" />

      <div className="relative z-10 container mx-auto max-w-7xl px-6">
        <div className="mb-24 grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* 🏛️ SECTION 01: BRAND AUTHORITY (ภาษาที่มั่นใจและอบอุ่น) */}
          <div className="space-y-10 lg:col-span-4">
            <div className="space-y-8">
              <Logo fontSize="text-2xl" iconSize={32} />
              <div className="relative overflow-hidden rounded-[2rem] border border-blue-50 bg-blue-50/20 p-8 backdrop-blur-sm dark:border-slate-800/50 dark:bg-slate-900/30">
                <p className="font-thai text-[15px] leading-relaxed font-bold text-slate-600 dark:text-slate-400">
                  &ldquo;เราช่วยให้คุณกลับมาใช้ชีวิตบนโลกออนไลน์ได้อย่างสบายใจอีกครั้ง
                  ด้วยบริการลบข้อมูลและจัดการชื่อเสียงระดับมืออาชีพ
                  ความลับของคุณคือหัวใจสำคัญที่สุดของเรา&rdquo;
                </p>
                <div className="absolute -right-4 -bottom-4 text-blue-600 opacity-[0.05]">
                  <ShieldCheck size={120} />
                </div>
              </div>
            </div>

            {/* Social Nodes: เน้นไอคอนที่คนไทยใช้บ่อย */}
            <div className="flex items-center gap-4">
              {[
                {
                  icon: <Facebook size={20} fill="currentColor" />,
                  label: 'Facebook',
                  href: '#',
                  color: 'hover:text-blue-600',
                },
                {
                  icon: <MessageCircle size={20} fill="currentColor" />,
                  label: 'Line OA',
                  href: '#',
                  color: 'hover:text-emerald-500',
                },
                {
                  icon: <Globe size={20} />,
                  label: 'Website',
                  href: '#',
                  color: 'hover:text-blue-400',
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className={cn(
                    'flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-100 bg-white text-slate-400 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 dark:border-slate-800 dark:bg-slate-900',
                    social.color,
                  )}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 🏛️ SECTION 02: MENU NAVIGATION (ภาษาไทยที่เข้าใจง่าย) */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-5">
            {/* Core Services */}
            <div className="space-y-10">
              <div className="flex items-center gap-3 text-blue-600">
                <ShieldAlert size={18} />
                <h4 className="font-mono text-[10px] font-black tracking-[0.3em] uppercase">
                  Service_Protocols
                </h4>
              </div>
              <ul className="space-y-5">
                {FOOTER_LINKS.protocols.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group font-thai flex items-center text-[15px] font-bold text-slate-500 transition-colors hover:text-blue-600 dark:text-slate-400"
                    >
                      <ChevronRight
                        size={14}
                        className="mr-1 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                      />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Knowledge & Review */}
            <div className="space-y-10">
              <div className="flex items-center gap-3 text-slate-400">
                <BookOpen size={18} />
                <h4 className="font-mono text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase">
                  Inside_Archive
                </h4>
              </div>
              <ul className="space-y-5">
                {FOOTER_LINKS.governance.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group font-thai flex items-center text-[15px] font-bold text-slate-500 transition-colors hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 🏛️ SECTION 03: CONVERSION TERMINAL (เน้นให้คนทักไลน์) */}
          <div className="lg:col-span-3">
            <div className="relative space-y-6 overflow-hidden rounded-[2.5rem] border border-blue-600/10 bg-slate-950 p-8 text-white shadow-2xl">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Terminal size={60} />
              </div>

              <div className="space-y-2">
                <span className="font-mono text-[9px] font-black tracking-[0.3em] text-blue-400 uppercase">
                  Official Line ID
                </span>
                <Link
                  href="https://line.me/R/ti/p/@204uuzew"
                  className="group flex items-center justify-between text-2xl font-black tracking-tighter text-white transition-colors hover:text-blue-400"
                >
                  @204uuzew
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 transition-transform group-hover:rotate-45">
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </div>

              <div className="space-y-5 border-t border-white/10 pt-6">
                <div className="flex items-center gap-3">
                  <div className="relative h-2 w-2">
                    <div className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <div className="relative h-2 w-2 rounded-full bg-emerald-400" />
                  </div>
                  <span className="font-mono text-[10px] font-black tracking-widest text-emerald-400">
                    OPERATIONAL: ONLINE
                  </span>
                </div>
                <div className="font-thai rounded-2xl bg-white/5 p-4 text-[13px] leading-relaxed font-bold text-slate-400">
                  <Activity size={14} className="mb-2 text-blue-500" />
                  ไม่ต้องกังวล...
                  ทุกการแชทเป็นความลับและไม่มีการเปิดเผยข้อมูลส่วนตัว
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🏛️ 4. BOTTOM COPYRIGHT BAR */}
        <div className="flex flex-col items-center justify-between gap-10 border-t border-slate-100 pt-12 md:flex-row dark:border-slate-800">
          <div className="text-center md:text-left">
            <p className="font-mono text-[11px] font-black tracking-[0.1em] text-slate-900 uppercase dark:text-white">
              © {currentYear} UNLINK THAILAND UNIT.
            </p>
            <p className="font-thai mt-1 text-[11px] font-bold text-slate-400 uppercase">
              ผู้เชี่ยวชาญด้านการลบข้อมูลและจัดการชื่อเสียงออนไลน์แห่งประเทศไทย
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {FOOTER_LINKS.security.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-thai text-[12px] font-bold text-slate-400 transition-colors hover:text-blue-600"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

/** Utility: cn function helper */
function cn(...classes: (string | undefined | boolean)[]) {
  return classes.filter(Boolean).join(' ')
}
