/** @format */

'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ShieldCheck, ArrowRight, Lock, Globe, ShieldAlert } from 'lucide-react'

/**
 * [STRATEGY: STRUCTURAL ELEMENTS v5.0]
 * - Fix: Removed unused 'Terminal' import to resolve lint warning.
 * - Architecture: ใช้โครงสร้าง Grid 12-column เพื่อความยืดหยุ่นของเลย์เอาต์
 * - Animation: 'Staggered Entrance' เพื่อสร้างความน่าเชื่อถือตั้งแต่เริ่มโหลด
 */

export function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  }

  const features = [
    { icon: Lock, label: 'Confidentiality', sub: 'NDA Protected' },
    { icon: Globe, label: 'Compliance', sub: 'GDPR / PDPA' },
    { icon: ShieldAlert, label: 'Response', sub: 'Instant Action' },
    { icon: ShieldCheck, label: 'Verification', sub: 'Result-Driven' },
  ]

  return (
    <section className="relative flex min-h-[95vh] flex-col justify-center overflow-hidden bg-white selection:bg-blue-600 selection:text-white dark:bg-slate-950">
      {/* 🏛️ 1. ARCHITECTURAL BACKGROUND: Structural grid and focal glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] bg-[size:40px_40px]" />
        <div className="absolute -top-[10%] left-1/2 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-6 py-20"
      >
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          {/* LEFT: STRATEGIC MESSAGING */}
          <div className="lg:col-span-8">
            {/* Live Identity Badge */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-100 bg-slate-50/50 px-3 py-1 dark:border-slate-800 dark:bg-slate-900/50">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                </span>
                <span className="font-mono text-[9px] font-black tracking-[0.2em] text-slate-500 uppercase">
                  Identity Protection Protocol // Active
                </span>
              </div>
            </motion.div>

            {/* Core Headline */}
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="font-sans text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.1] font-black tracking-tight text-slate-900 uppercase dark:text-white">
                ทวงคืนสิทธิ์ <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                  เหนือข้อมูลดิจิทัล
                </span>
              </h1>
            </motion.div>

            {/* Supporting Copy */}
            <motion.div variants={itemVariants} className="max-w-2xl">
              <p className="font-thai text-lg leading-relaxed font-medium text-slate-500 md:text-xl dark:text-slate-400">
                เราเชี่ยวชาญด้านการจัดการข้อมูลที่ส่งผลกระทบต่อชื่อเสียง
                ผ่านกระบวนการทางกฎหมายและเทคนิคชั้นสูง
                เพื่อสร้างความถูกต้องให้กับตัวตนออนไลน์ของคุณ
              </p>
            </motion.div>

            {/* 🏛️ ACTION TRIGGERS */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="h-14 rounded-2xl bg-blue-600 px-10 text-base font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] hover:bg-blue-700 active:scale-[0.98]"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  วิเคราะห์ข้อมูลฟรี <ArrowRight size={18} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 rounded-2xl border-slate-200 bg-transparent px-10 text-base font-bold text-slate-700 transition-all hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300"
              >
                <Link href="/services">ตรวจสอบบริการ</Link>
              </Button>
            </motion.div>
          </div>

          {/* RIGHT: TACTICAL FEATURE GRID */}
          <div className="hidden lg:col-span-4 lg:block">
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-px overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-200 shadow-2xl dark:border-slate-800 dark:bg-slate-800"
            >
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="group flex flex-col bg-white p-10 transition-colors hover:bg-blue-50/50 dark:bg-slate-950 dark:hover:bg-slate-900/50"
                >
                  <feature.icon className="mb-4 h-6 w-6 text-blue-600 transition-transform group-hover:scale-110 dark:text-blue-400" />
                  <h4 className="font-mono text-[10px] font-black tracking-widest text-slate-900 uppercase dark:text-white">
                    {feature.label}
                  </h4>
                  <p className="mt-1 font-mono text-[8px] tracking-wider text-slate-400 uppercase">
                    {feature.sub}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
