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
} from 'lucide-react'
import { Logo } from './logo'

/**
 * [STRATEGY: THE DIGITAL VAULT FOOTER v5.5]
 * - Fix: Removed unused 'Lock' and 'cn' imports to resolve Lint warnings.
 * - UX: โครงสร้างข้อมูลแบบ Tiered Navigation แบ่งตามระดับความสำคัญของ Protocol
 * - Identity: เน้นย้ำสถานะ "UPLINK_READY" สื่อถึงความพร้อมในการให้บริการตลอดเวลา
 */

const FOOTER_LINKS = {
  protocols: [
    { name: 'Google De-indexing', href: '/services/google-de-indexing' },
    { name: 'Reputation Recovery', href: '/services/reputation-recovery' },
    { name: 'Data Erasure Service', href: '/services/data-erasure' },
    { name: 'Right to be Forgotten', href: '/services/right-to-be-forgotten' },
  ],
  governance: [
    { name: 'Case Archive', href: '/cases' },
    { name: 'Technical Wiki', href: '/wiki' },
    { name: 'Privacy Analysis', href: '/services' },
    { name: 'Institutional FAQ', href: '/faq' },
  ],
  security: [
    { name: 'PDPA/GDPR Compliance', href: '/privacy' },
    { name: 'Standard NDA Terms', href: '/terms' },
    { name: 'Operational Status', href: '/status' },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white pt-24 pb-12 dark:border-slate-800 dark:bg-slate-950">
      {/* 🏛️ 1. INFRASTRUCTURE DECOR: Technical Grid Overlay */}
      <div className="bg-tactical-grid pointer-events-none absolute inset-0 opacity-40 dark:opacity-20" />
      <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-blue-600/50 to-transparent" />

      <div className="relative z-10 container mx-auto max-w-7xl px-6">
        <div className="mb-24 grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* 🏛️ SECTION 01: BRAND AUTHORITY */}
          <div className="space-y-12 lg:col-span-4">
            <div className="space-y-8">
              <Logo fontSize="text-2xl" iconSize={32} />
              <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/50 p-6 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/50">
                <p className="font-thai text-[14px] leading-relaxed font-bold text-slate-500 italic dark:text-slate-400">
                  &ldquo;เราออกแบบโครงสร้างพื้นฐานเพื่อปกป้องสิทธิส่วนบุคคลดิจิทัล
                  และกู้คืนความยุติธรรมให้แก่ชื่อเสียงของคุณภายใต้มาตรฐานความปลอดภัยสูงสุด&rdquo;
                </p>
                <div className="absolute -right-2 -bottom-2 opacity-5">
                  <ShieldCheck size={64} />
                </div>
              </div>
            </div>

            {/* Tactical Social Nodes */}
            <div className="flex items-center gap-3">
              {[
                { icon: <Facebook size={18} />, label: 'Facebook', href: '#' },
                {
                  icon: <MessageCircle size={18} />,
                  label: 'Line OA',
                  href: '#',
                },
                {
                  icon: <Globe size={18} />,
                  label: 'Intelligence Network',
                  href: '#',
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 🏛️ SECTION 02: COMMAND NAVIGATION */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-5">
            {/* Core Protocols */}
            <div className="space-y-10">
              <div className="flex items-center gap-3 text-blue-600">
                <Terminal size={16} strokeWidth={2.5} />
                <h4 className="font-mono text-[10px] font-black tracking-[0.4em] uppercase">
                  Core_Protocols
                </h4>
              </div>
              <ul className="space-y-5">
                {FOOTER_LINKS.protocols.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group font-thai flex items-center text-[14px] font-bold text-slate-500 transition-colors hover:text-blue-600 dark:text-slate-400"
                    >
                      <ChevronRight
                        size={14}
                        className="mr-2 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                      />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Governance */}
            <div className="space-y-10">
              <div className="flex items-center gap-3 text-slate-400">
                <BookOpen size={16} strokeWidth={2.5} />
                <h4 className="font-mono text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase">
                  Governance
                </h4>
              </div>
              <ul className="space-y-5">
                {FOOTER_LINKS.governance.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group font-thai flex items-center text-[14px] font-bold text-slate-500 transition-colors hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 🏛️ SECTION 03: SECURE TERMINAL CARD */}
          <div className="lg:col-span-3">
            <div className="relative space-y-6 overflow-hidden rounded-3xl border border-blue-600/20 bg-blue-50/30 p-8 dark:bg-blue-900/10">
              <div className="space-y-2">
                <span className="font-mono text-[9px] font-black tracking-[0.3em] text-blue-600 uppercase">
                  Secure Access ID
                </span>
                <Link
                  href="#"
                  className="group flex items-center justify-between text-2xl font-black tracking-tighter text-slate-900 transition-colors hover:text-blue-600 dark:text-white"
                >
                  @204uuzew
                  <ArrowRight
                    size={20}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>

              <div className="space-y-5 border-t border-blue-600/10 pt-6">
                <div className="flex items-center gap-3">
                  <div className="relative h-2 w-2">
                    <div className="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-40" />
                    <div className="relative h-2 w-2 rounded-full bg-emerald-500" />
                  </div>
                  <span className="font-mono text-[10px] font-black tracking-tight text-slate-900 uppercase dark:text-slate-100">
                    STATUS: UPLINK_READY
                  </span>
                </div>
                <div className="rounded-xl border border-white bg-white/70 p-4 text-[11px] leading-relaxed font-bold text-slate-500 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                  <Activity size={12} className="mb-2 text-blue-600" />
                  ข้อมูลการสื่อสารทั้งหมดถูกเข้ารหัสและปกป้องโดยสัญญาความลับสูงสุด
                  (NDA)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🏛️ 4. BOTTOM INTEGRITY BAR */}
        <div className="flex flex-col items-center justify-between gap-10 border-t border-slate-100 pt-12 md:flex-row dark:border-slate-800">
          <div className="text-center md:text-left">
            <p className="font-mono text-[10px] font-black tracking-[0.3em] text-slate-900 uppercase dark:text-white">
              © {currentYear} UNLINK MANAGEMENT UNIT.
            </p>
            <p className="mt-1 font-mono text-[8px] font-bold tracking-[0.2em] text-slate-400 uppercase">
              Operational Infrastructure // Zero-Trace Environment
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {FOOTER_LINKS.security.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-mono text-[9px] font-black tracking-[0.2em] text-slate-400 uppercase transition-colors hover:text-blue-600"
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
