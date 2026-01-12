/** @format */

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ShieldCheck, ArrowRight, Lock, Fingerprint } from 'lucide-react'

/**
 * [ARCHITECT NOTE]
 * 1. Optimized LCP: ใช้ Motion เฉพาะจุด ไม่ Wrap ทั้ง Section เพื่อลด Main-thread Work
 * 2. Mobile TBT: ลดความซับซ้อนของ Animation บนหน้าจอขนาดเล็ก
 * 3. Conversion: เพิ่มน้ำหนักที่ปุ่ม Action และย้ำสิทธิ์ PDPA
 */

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-32 pb-24 md:pt-48 md:pb-40 dark:bg-slate-950">
      {/* Structural Elements - Pure CSS for Performance */}
      <div className="absolute top-0 left-1/2 h-40 w-px -translate-x-1/2 bg-gradient-to-b from-blue-600 to-transparent opacity-20" />

      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `url('/images/grid-pattern.svg')`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="mx-auto max-w-7xl">
          {/* Protocol Tagline */}
          <div className="mb-12 flex items-center gap-4 text-blue-600">
            <Fingerprint size={18} strokeWidth={2.5} />
            <span className="text-[10px] font-black tracking-[0.5em] uppercase md:text-[11px]">
              Privacy & Reputation Protocol 2026
            </span>
          </div>

          {/* Main Headline - ลด Animation ระยะเวลาลงเพื่อ LCP */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 text-6xl leading-[0.85] font-black tracking-tighter text-slate-950 md:text-[10rem] dark:text-white"
          >
            RESTORE <br />
            <span className="font-extralight text-slate-300 italic dark:text-slate-800">
              YOUR IDENTITY
            </span>{' '}
            <br />
            <span className="text-blue-600">UNLINK</span> DATA.
          </motion.h1>

          {/* Logic & Trust Section */}
          <div className="mb-20 grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-thai text-xl leading-relaxed font-medium text-slate-500 md:text-3xl dark:text-slate-400">
                เราให้บริการตรวจสอบและประเมินความเสี่ยงด้านชื่อเสียงออนไลน์
                เพื่อให้คุณได้รับข้อเท็จจริงว่าข้อมูลส่วนใดที่สามารถจัดการได้
                <span className="mt-6 block border-l-4 border-blue-600 pl-8 font-black text-slate-950 dark:text-white">
                  ตามสิทธิ์การถูกลืม (Right to be Forgotten) ภายใต้กฎหมาย PDPA
                </span>
              </p>
            </div>

            <div className="flex flex-col justify-center space-y-8 border-l border-slate-100 pl-12 lg:col-span-5 dark:border-slate-900">
              <div className="flex items-start gap-5">
                <div className="mt-1 rounded-full bg-blue-50 p-2 dark:bg-blue-900/30">
                  <Lock size={14} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="text-[11px] font-black tracking-widest text-slate-950 uppercase dark:text-white">
                    Strict Confidentiality
                  </h4>
                  <p className="text-[10px] tracking-wider text-slate-400 uppercase">
                    NDA Standard for every case
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="mt-1 rounded-full bg-blue-50 p-2 dark:bg-blue-900/30">
                  <ShieldCheck size={14} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="text-[11px] font-black tracking-widest text-slate-950 uppercase dark:text-white">
                    No False Promises
                  </h4>
                  <p className="text-[10px] tracking-wider text-slate-400 uppercase">
                    Assessment based on platform API & Policy
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action - เพิ่มลำดับความสำคัญ (Fetch Priority) */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              className="group h-20 min-w-[320px] rounded-none bg-blue-600 px-12 text-white shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)] transition-all duration-300 hover:bg-slate-900"
            >
              <Link
                href="/contact"
                className="flex items-center justify-center text-[12px] font-black tracking-[0.2em] uppercase"
              >
                เริ่มการประเมินเบื้องต้น
                <ArrowRight
                  className="ml-4 transition-transform group-hover:translate-x-2"
                  size={18}
                />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-20 min-w-[280px] rounded-none border-slate-200 px-12 transition-all duration-300 hover:border-slate-950 dark:border-slate-800 dark:text-white"
            >
              <Link
                href="/services"
                className="flex items-center justify-center text-[12px] font-black tracking-[0.2em] uppercase"
              >
                ขอบเขตบริการของเรา
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Atmospheric Glow - ใช้ Will-change เพื่อช่วย GPU */}
      <div className="pointer-events-none absolute top-0 -right-40 h-[600px] w-[600px] rounded-full bg-blue-600/5 blur-[120px] will-change-transform dark:bg-blue-600/10" />
    </section>
  )
}
