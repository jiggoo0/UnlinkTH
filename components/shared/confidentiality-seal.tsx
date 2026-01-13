/** @format */

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Lock, EyeOff, Scale, ShieldAlert } from 'lucide-react'

/**
 * [STRATEGY: SECURITY GRID MODULES v5.0]
 * - Fix: Removed unused 'cn' import to resolve lint warning.
 * - Interaction: ใช้ "Dynamic Elevation" บนการ์ดเพื่อสื่อถึงความล้ำสมัย
 * - Trust: จัดวางระบบ Compliance (ISO/PDPA) ให้เป็นระเบียบและอ่านง่าย
 */

interface SealItemProps {
  icon: React.ReactNode
  title: string
  description: string
  id: string
}

const SealItem = ({ icon, title, description, id }: SealItemProps) => (
  <div className="group relative flex flex-col items-center space-y-6 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 dark:border-slate-800 dark:bg-slate-950">
    {/* 🏛️ Decorative Background ID: Watermark aesthetic */}
    <span className="absolute -top-2 -right-4 font-mono text-[40px] font-black text-slate-100 opacity-20 dark:text-white dark:opacity-[0.03]">
      {id}
    </span>

    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white dark:bg-slate-900 dark:text-blue-400">
      {icon}
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-blue-500/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
    </div>

    <div className="space-y-3">
      <h4 className="font-sans text-xl font-black tracking-tight text-slate-900 uppercase dark:text-white">
        {title}
      </h4>
      <p className="font-thai text-[14px] leading-relaxed font-medium text-slate-500 dark:text-slate-400">
        {description}
      </p>
    </div>
  </div>
)

export default function ConfidentialitySeal() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32 dark:bg-slate-950">
      {/* Background Decoration: Cyber Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] [mask-image:radial-gradient(black,transparent_70%)] opacity-[0.03]" />

      <div className="relative z-10 container mx-auto max-w-6xl px-6">
        {/* 🏛️ 1. HEADER SECTION */}
        <div className="mb-20 space-y-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-blue-50/50 px-4 py-2 dark:border-blue-900/30 dark:bg-blue-900/20"
          >
            <ShieldCheck size={16} className="text-blue-600" />
            <span className="font-mono text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase">
              Privacy Protocol v5.0
            </span>
          </motion.div>

          <h2 className="font-sans text-3xl font-black tracking-tighter text-slate-900 uppercase md:text-5xl dark:text-white">
            มาตรฐานความปลอดภัย <br className="md:hidden" />
            <span className="text-blue-600 underline decoration-blue-600/20 underline-offset-8">
              ระดับสูงสุด
            </span>
          </h2>
          <p className="font-thai mx-auto max-w-2xl text-[16px] leading-relaxed font-medium text-slate-500 dark:text-slate-400">
            เพราะเราเข้าใจว่าข้อมูลของคุณมีความสำคัญที่สุด
            เราจึงใช้มาตรการรักษาความลับแบบ{' '}
            <span className="font-bold text-slate-900 italic dark:text-white">
              Zero-Trace Policy
            </span>{' '}
            ในทุกขั้นตอนการทำงาน
          </p>
        </div>

        {/* 🏛️ 2. SEALS GRID: Data Integrity Blocks */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SealItem
              id="01"
              icon={<Lock size={28} strokeWidth={1.5} />}
              title="End-to-End Encryption"
              description="ข้อมูลส่วนบุคคลและประวัติการรับบริการจะถูกเข้ารหัสระดับทหารและทำลายทิ้งทันทีหลังจบภารกิจอย่างสมบูรณ์"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <SealItem
              id="02"
              icon={<EyeOff size={28} strokeWidth={1.5} />}
              title="Privacy Protection"
              description="ดำเนินการภายใต้สัญญา NDA (Non-Disclosure Agreement) ที่มีผลผูกพันทางกฎหมาย ไม่มีการเปิดเผยตัวตน 100%"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <SealItem
              id="03"
              icon={<Scale size={28} strokeWidth={1.5} />}
              title="Legal Compliance"
              description="ดำเนินการถูกต้องตามมาตรฐาน PDPA และ Right to be Forgotten สากล มั่นใจในทุกกระบวนการทางกฎหมาย"
            />
          </motion.div>
        </div>

        {/* 🏛️ 3. COMPLIANCE FOOTER: Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 border-t border-slate-100 pt-12 dark:border-slate-900"
        >
          <div className="flex cursor-default items-center gap-3 opacity-40 grayscale transition-all hover:opacity-100 hover:grayscale-0">
            <ShieldAlert size={20} className="text-slate-400" />
            <span className="font-mono text-[11px] font-black tracking-[0.4em] text-slate-500 uppercase">
              ISO/IEC 27001 Certified
            </span>
          </div>
          <div className="hidden h-4 w-[1px] bg-slate-200 md:block dark:bg-slate-800" />
          <div className="flex cursor-default items-center gap-3 opacity-40 grayscale transition-all hover:opacity-100 hover:grayscale-0">
            <span className="font-mono text-[11px] font-black tracking-[0.4em] text-slate-500 uppercase">
              PDPA Compliant
            </span>
          </div>
          <div className="hidden h-4 w-[1px] bg-slate-200 md:block dark:bg-slate-800" />
          <div className="flex cursor-default items-center gap-3 opacity-40 grayscale transition-all hover:opacity-100 hover:grayscale-0">
            <span className="font-mono text-[11px] font-black tracking-[0.4em] text-slate-500 uppercase">
              GDPR Standards
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
