/** @format */

'use client'

import * as React from 'react'
import Link from 'next/link'
import { Linkedin, Twitter, ArrowUpRight, ShieldCheck } from 'lucide-react'
import { Logo } from './logo'

/**
 * [STRATEGY: CORPORATE FOOTER ARCHITECTURE]
 * - Fix: ลบ Unused Imports (Mail, Globe, Lock, Zap, cn) เพื่อเคลียร์ Lint Warnings
 * - Navigation: แบ่งกลุ่มตาม User Intent (Solutions vs Legal)
 * - Brand Authority: เพิ่มสถานะ "System Operational" เพื่อสร้างความเชื่อมั่น
 */

const FOOTER_LINKS = {
  services: [
    { name: 'Search Management', href: '/services' },
    { name: 'Reputation Recovery', href: '/services' },
    { name: 'Privacy Protection', href: '/services' },
    { name: 'Digital Footprint Audit', href: '/services' },
  ],
  company: [
    { name: 'About Strategy', href: '/about' },
    { name: 'Case Studies', href: '/cases' },
    { name: 'Support FAQ', href: '/faq' },
    { name: 'Inquiry Channel', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'NDA Protocol', href: '/privacy' },
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
                ผู้เชี่ยวชาญด้านการบริหารจัดการชื่อเสียงดิจิทัลและปกป้องข้อมูลออนไลน์ระดับสูง
                ดำเนินการภายใต้มาตรฐานความปลอดภัยระดับองค์กรสากล
              </p>
            </div>

            <div className="flex items-center gap-3">
              {[
                { icon: <Linkedin size={18} />, label: 'LinkedIn', href: '#' },
                { icon: <Twitter size={18} />, label: 'Twitter', href: '#' },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-400 transition-all hover:border-blue-600 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* 🏛️ Column 2: Solutions Navigation */}
          <div className="space-y-7 lg:col-span-2">
            <h4 className="text-[10px] font-black tracking-[0.4em] text-slate-950 uppercase dark:text-white">
              Solutions
            </h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-[13px] font-bold text-slate-500 transition-colors hover:text-blue-600 dark:text-slate-400"
                  >
                    <span className="relative overflow-hidden">
                      {link.name}
                      <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                    </span>
                    <ArrowUpRight
                      size={12}
                      className="ml-1 opacity-0 transition-all group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 🏛️ Column 3: Corporate Links */}
          <div className="space-y-7 lg:col-span-2">
            <h4 className="text-[10px] font-black tracking-[0.4em] text-slate-950 uppercase dark:text-white">
              Corporate
            </h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[13px] font-bold text-slate-500 transition-colors hover:text-blue-600 dark:text-slate-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 🏛️ Column 4: Secure Channel & Status */}
          <div className="space-y-7 lg:col-span-4">
            <h4 className="text-[10px] font-black tracking-[0.4em] text-slate-950 uppercase dark:text-white">
              Secure Channel
            </h4>
            <div className="relative overflow-hidden rounded-xl border border-slate-100 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900/40">
              <div className="relative z-10 space-y-6">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black tracking-widest text-blue-600 uppercase">
                    Classified Email
                  </span>
                  <a
                    href="mailto:secure@unlinkth.com"
                    className="text-lg font-black tracking-tight text-slate-950 transition-colors hover:text-blue-600 dark:text-white"
                  >
                    secure@unlinkth.com
                  </a>
                </div>

                <div className="flex items-center gap-4 border-t border-slate-200 pt-6 dark:border-slate-800">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm dark:bg-slate-800">
                    <ShieldCheck size={18} className="text-blue-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                      Security Status
                    </span>
                    <span className="flex items-center gap-1.5 text-[12px] font-bold text-slate-900 dark:text-white">
                      <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                      Active 256-bit Encryption
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🏛️ Bottom Compliance & Integrity Bar */}
        <div className="flex flex-col items-center justify-between gap-8 border-t border-slate-100 pt-12 md:flex-row dark:border-slate-900">
          <div className="flex flex-col gap-2">
            <p className="text-[10px] font-black tracking-[0.25em] text-slate-400 uppercase">
              © {currentYear} UnlinkTH Strategy Unit.{' '}
              <br className="md:hidden" /> Professional Reputation Management.
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
