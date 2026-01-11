/** @format */

'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  Facebook,
  MessageCircle,
  ArrowUpRight,
  ShieldCheck,
} from 'lucide-react'
import { Logo } from './logo'

/**
 * [STRATEGY: CORPORATE FOOTER ARCHITECTURE]
 * - Social Integration: เพิ่ม Facebook และ Line OA จริง (@204uuzew)
 * - Authority: เพิ่มสถานะ "Privacy Protocol" เพื่อย้ำความปลอดภัย
 * - Human-Centric: ปรับชื่อเมนูให้ตรงกับปัญหาของลูกค้า (Search Management, Second Chance)
 */

const FOOTER_LINKS = {
  services: [
    { name: 'จัดการข้อมูลใน Google', href: '/services' },
    { name: 'กู้คืนชื่อเสียงออนไลน์', href: '/services' },
    { name: 'ลบประวัติเสีย/Blacklist', href: '/services' },
    { name: 'สิทธิ์ในการเริ่มต้นใหม่', href: '/services' },
  ],
  company: [
    { name: 'วิเคราะห์เคสตัวอย่าง', href: '/cases' },
    { name: 'คำถามเชิงเทคนิค (FAQ)', href: '/faq' },
    { name: 'ติดต่อที่ปรึกษา', href: '/contact' },
    { name: 'ตรวจสอบร่องรอยดิจิทัล', href: '/services' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'PDPA Compliance', href: '/privacy' },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-slate-100 bg-white pt-24 pb-12 transition-colors duration-500 dark:border-slate-900 dark:bg-slate-950">
      {/* 🧩 Background Elements: Subtle Grid for Tech feel */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(#3b82f6 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="container mx-auto max-w-7xl px-6">
        <div className="mb-20 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-12">
          {/* 🏛️ Column 1: Brand Identity & Mission */}
          <div className="space-y-8 lg:col-span-4">
            <div className="flex flex-col gap-6">
              <Logo fontSize="text-2xl" iconSize={22} />
              <p className="font-thai max-w-sm text-sm leading-relaxed font-medium text-slate-500 dark:text-slate-400">
                เราเชื่อในสิทธิ์ของการเริ่มต้นใหม่
                บริการที่ปรึกษาเฉพาะทางด้านการจัดการชื่อเสียง
                และปกป้องความเป็นส่วนตัวออนไลน์ ภายใต้มาตรฐานความปลอดภัยระดับสูง
                (Strict NDA)
              </p>
            </div>

            {/* Social Channels Integration */}
            <div className="flex items-center gap-3">
              {[
                {
                  icon: <Facebook size={18} />,
                  label: 'Facebook',
                  href: 'https://www.facebook.com/share/17evN8sgR1/',
                },
                {
                  icon: <MessageCircle size={18} />,
                  label: 'Line OA',
                  href: 'https://lin.ee/Eu9Td5a',
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-400 transition-all hover:border-blue-600 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 🏛️ Column 2: Solutions Navigation (Long-tail Keywords) */}
          <div className="space-y-7 lg:col-span-2">
            <h4 className="text-[10px] font-black tracking-[0.4em] text-slate-950 uppercase dark:text-white">
              Core Services
            </h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group font-thai flex items-center text-[13px] font-bold text-slate-500 transition-colors hover:text-blue-600 dark:text-slate-400"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={12}
                      className="ml-1 opacity-0 transition-all group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 🏛️ Column 3: Navigation */}
          <div className="space-y-7 lg:col-span-2">
            <h4 className="text-[10px] font-black tracking-[0.4em] text-slate-950 uppercase dark:text-white">
              Resources
            </h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-thai text-[13px] font-bold text-slate-500 transition-colors hover:text-blue-600 dark:text-slate-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 🏛️ Column 4: Secure Channel & Live Status */}
          <div className="space-y-7 lg:col-span-4">
            <h4 className="text-[10px] font-black tracking-[0.4em] text-slate-950 uppercase dark:text-white">
              Official Contact
            </h4>
            <div className="relative overflow-hidden rounded-xl border border-slate-100 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900/40">
              <div className="relative z-10 space-y-6">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black tracking-widest text-blue-600 uppercase">
                    Encrypted Line Support
                  </span>
                  <a
                    href="https://lin.ee/Eu9Td5a"
                    target="_blank"
                    className="text-xl font-black tracking-tight text-slate-950 transition-colors hover:text-blue-600 dark:text-white"
                  >
                    @204uuzew
                  </a>
                </div>

                <div className="flex items-center gap-4 border-t border-slate-200 pt-6 dark:border-slate-800">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm dark:bg-slate-800">
                    <ShieldCheck size={18} className="text-emerald-500" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                      Operational Integrity
                    </span>
                    <span className="flex items-center gap-1.5 text-[12px] font-bold text-slate-900 dark:text-white">
                      <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                      Protocol: Secure & Confidential
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🏛️ Bottom Compliance Bar */}
        <div className="flex flex-col items-center justify-between gap-8 border-t border-slate-100 pt-12 md:flex-row dark:border-slate-900">
          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-black tracking-[0.25em] text-slate-400 uppercase">
              © {currentYear} UnlinkTH Management Unit.{' '}
              <br className="md:hidden" />
              Reputation & Privacy Protection Group.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase transition-colors hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
