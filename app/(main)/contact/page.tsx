/** @format */

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ContactForm } from '@/components/contact/ContactForm'
import { Clock, Lock, Fingerprint, ShieldCheck, Zap } from 'lucide-react'
import { Seo } from '@/components/seo/Seo'

/**
 * [STRATEGY: THE INTELLIGENCE INTAKE v5.1]
 * - Fix: Removed unused 'cn' utility to resolve final Lint warnings.
 * - Identity: Refined "Sophisticated Simplicity" for high-stakes inquiries.
 * - Security: Reinforced Visual Trust indicators (AES-256, Zero-Retention).
 */

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Secure Inquiry | ปรึกษาผู้เชี่ยวชาญด้านชื่อเสียงออนไลน์ | UnlinkTH"
        description="ช่องทางส่งคำขอประเมินเคสส่วนบุคคลภายใต้มาตรฐานความลับสูงสุด (Strict NDA)"
      />

      <main className="min-h-screen overflow-hidden bg-white selection:bg-blue-600/10 dark:bg-slate-950">
        <div className="relative container mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-40">
          {/* 🧩 Ambient Background: Atmosphere of Trust */}
          <div className="pointer-events-none absolute top-0 right-0 h-[800px] w-[800px] translate-x-1/4 -translate-y-1/4 rounded-full bg-blue-50/50 blur-[120px] dark:bg-blue-900/5" />

          <div className="grid grid-cols-1 gap-20 lg:grid-cols-12 xl:gap-32">
            {/* 🏛️ 1. LEFT COLUMN: STRATEGIC CONTEXT */}
            <div className="relative z-10 flex flex-col justify-between lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-12"
              >
                {/* Branding Badge */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-[0_12px_24px_-8px_rgba(37,99,235,0.4)]">
                    <Fingerprint size={24} strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase">
                      Unlink Protocol
                    </span>
                    <span className="font-mono text-[9px] font-bold tracking-widest text-blue-600 uppercase">
                      Secure Intelligence Unit
                    </span>
                  </div>
                </div>

                {/* Primary Heading */}
                <div className="space-y-8">
                  <h1 className="font-sans text-6xl leading-[0.9] font-black tracking-tighter text-slate-900 md:text-8xl dark:text-white">
                    Secure <br />
                    <span className="text-blue-600 italic">Inquiry</span>
                  </h1>
                  <div className="max-w-md border-l-2 border-blue-600/20 pl-8 transition-colors hover:border-blue-600">
                    <p className="font-thai text-lg leading-relaxed font-medium text-slate-500 dark:text-slate-400">
                      กรุณาระบุรายละเอียดเบื้องต้นเพื่อให้ผู้เชี่ยวชาญประเมินสถานการณ์ภายใต้
                      <span className="mt-2 block font-black text-slate-900 dark:text-white">
                        นโยบายรักษาความลับสูงสุด (NDA Standard)
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* 📊 Security Dashboard */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-20 space-y-2 rounded-[2.5rem] border border-slate-100 bg-slate-50/50 p-10 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/50"
              >
                <p className="mb-6 font-mono text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">
                  Operational Standard
                </p>
                {[
                  {
                    icon: <Clock size={16} />,
                    label: 'Response SLA',
                    val: 'Within 24 Hours',
                  },
                  {
                    icon: <ShieldCheck size={16} />,
                    label: 'Privacy Standard',
                    val: 'Zero-Retention',
                  },
                  {
                    icon: <Lock size={16} />,
                    label: 'Encryption',
                    val: 'AES-256 Bit',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border-b border-slate-100 py-4 last:border-0 dark:border-slate-800"
                  >
                    <div className="flex items-center gap-4 text-blue-600">
                      {item.icon}
                      <span className="font-mono text-[10px] font-black tracking-widest text-slate-400 uppercase">
                        {item.label}
                      </span>
                    </div>
                    <span className="font-sans text-[11px] font-black tracking-tight text-slate-900 uppercase dark:text-white">
                      {item.val}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* 🏛️ 2. RIGHT COLUMN: INTAKE FORM */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative lg:col-span-7"
            >
              <div className="relative overflow-hidden rounded-[3.5rem] border border-slate-100 bg-white shadow-[0_48px_96px_-24px_rgba(0,0,0,0.06)] dark:border-slate-800 dark:bg-slate-900">
                {/* Form Header */}
                <div className="bg-slate-50/50 px-10 py-12 md:px-14 dark:bg-slate-800/50">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="relative flex h-2.5 w-2.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                        </div>
                        <h3 className="font-mono text-[10px] font-black tracking-[0.4em] text-blue-600 uppercase">
                          Protocol: Case Intake
                        </h3>
                      </div>
                      <p className="font-thai text-sm font-bold text-slate-500">
                        กรุณากรอกข้อมูลเพื่อขอรับการประเมิน
                      </p>
                    </div>
                    <div className="flex items-center gap-2 rounded-2xl border border-blue-100 bg-white px-5 py-2.5 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                      <Zap size={14} className="text-blue-600" />
                      <span className="font-mono text-[10px] font-black tracking-widest text-slate-900 uppercase dark:text-white">
                        NDA Active
                      </span>
                    </div>
                  </div>
                </div>

                {/* Form Container */}
                <div className="px-10 pt-10 pb-16 md:px-14">
                  <ContactForm />
                </div>
              </div>

              {/* Verified Footer */}
              <div className="mt-10 flex items-center justify-center gap-6 opacity-30">
                <div className="h-px w-16 bg-slate-300 dark:bg-slate-700" />
                <span className="font-mono text-[9px] font-black tracking-[0.3em] text-slate-500 uppercase">
                  Verified Secure Environment
                </span>
                <div className="h-px w-16 bg-slate-300 dark:bg-slate-700" />
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  )
}
