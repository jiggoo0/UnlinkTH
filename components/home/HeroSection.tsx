/** @format */

'use client'

import React from 'react'
import { motion, type Variants } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  ShieldCheck,
  ArrowRight,
  Lock,
  Globe,
  ShieldAlert,
  type LucideIcon,
} from 'lucide-react'

/**
 * [STRATEGY: ARCHITECTURAL HERO v4.17]
 * - Fix: Removed unused 'Terminal' import to resolve Lint warning.
 * - Design: Maintained 12px (rounded-xl) for buttons and 24px (rounded-3xl) for grid.
 * - UX: Strategic ease-out exponential motion for high-end digital identity.
 */

interface HeroFeature {
  readonly icon: LucideIcon
  readonly label: string
  readonly sub: string
}

export function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const features: readonly HeroFeature[] = [
    { icon: Lock, label: 'Confidentiality', sub: 'NDA Protected' },
    { icon: Globe, label: 'Compliance', sub: 'GDPR / PDPA' },
    { icon: ShieldAlert, label: 'Response', sub: 'Instant Action' },
    { icon: ShieldCheck, label: 'Verification', sub: 'Result-Driven' },
  ] as const

  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden bg-white dark:bg-slate-950">
      {/* 🏛️ 1. ARCHITECTURAL BACKGROUND (Grid & Glow) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a05_1px,transparent_1px),linear-gradient(to_bottom,#0f172a05_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)] bg-[size:45px_45px]" />
        <div className="absolute top-[20%] left-1/2 h-[700px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.03] blur-[120px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-6 py-20"
      >
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          {/* 🏛️ LEFT COLUMN: Strategic Messaging */}
          <div className="lg:col-span-8">
            {/* Protocol Status Badge */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-100 bg-blue-50/30 px-4 py-1.5 dark:border-blue-900/30 dark:bg-blue-900/20">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600"></span>
                </span>
                <span className="font-mono text-[10px] font-black tracking-[0.25em] text-blue-700 uppercase dark:text-blue-400">
                  Protocol // Intelligence_Active
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="font-sans text-[clamp(2.5rem,8vw,5.5rem)] leading-[1.05] font-black tracking-tight text-slate-900 dark:text-white">
                ทวงคืนสิทธิ์ <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent italic">
                  เหนือข้อมูลดิจิทัล
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} className="max-w-2xl">
              <p className="font-thai text-lg leading-relaxed font-medium text-slate-500 md:text-xl dark:text-slate-400">
                เราเชี่ยวชาญด้านการจัดการข้อมูลที่ส่งผลกระทบต่อชื่อเสียง
                ผ่านกระบวนการทางกฎหมายและเทคนิคชั้นสูง
                เพื่อสร้างความถูกต้องให้กับตัวตนออนไลน์ของคุณในทุกมิติ
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-12 flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="h-16 px-10 text-base shadow-2xl shadow-blue-500/20"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  วิเคราะห์ข้อมูลฟรี <ArrowRight size={20} className="ml-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-16 px-10 text-base"
              >
                <Link href="/services">ตรวจสอบบริการ</Link>
              </Button>
            </motion.div>
          </div>

          {/* 🏛️ RIGHT COLUMN: Feature Matrix */}
          <div className="hidden lg:col-span-4 lg:block">
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 shadow-2xl dark:border-slate-800 dark:bg-slate-800"
            >
              {features.map((feature, i) => {
                const Icon = feature.icon
                return (
                  <div
                    key={i}
                    className="group flex flex-col bg-white p-10 transition-all duration-300 hover:bg-blue-50/50 dark:bg-slate-950 dark:hover:bg-slate-900/50"
                  >
                    <Icon className="mb-6 h-7 w-7 text-blue-600 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3" />
                    <h4 className="font-mono text-[11px] font-black tracking-widest text-slate-900 uppercase dark:text-white">
                      {feature.label}
                    </h4>
                    <p className="mt-2 font-mono text-[9px] tracking-wider text-slate-400 uppercase">
                      {feature.sub}
                    </p>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
