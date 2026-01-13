/** @format */

'use client'

import * as React from 'react'
import {
  EyeOff,
  Trash2,
  ShieldCheck,
  Fingerprint,
  FileLock2,
  Lock,
  ChevronRight,
  Info,
} from 'lucide-react'
import { Seo } from '@/components/seo/Seo'
import { motion } from 'framer-motion'

/**
 * [STRATEGY: PRIVACY PROTOCOL V5.0]
 * - Fix: Removed unused 'ShieldAlert' to resolve Lint warning
 * - Identity: ปรับสู่ "Institutional Security Standard" เน้นความขาวสะอาดและนุ่มนวล (Sophisticated Simplicity)
 * - Typography: ใช้ Font Weight ที่หลากหลายเพื่อสร้าง Hierarchy แบบเอกสารราชการชั้นสูง
 */

export default function PrivacyPolicy() {
  const protocols = [
    {
      icon: <EyeOff size={24} />,
      tag: 'UNL-PRT-01',
      title: 'Anonymity Standard',
      subtitle: 'Zero-Knowledge Access Protocol',
      content:
        "เราใช้ระบบ 'Zero-Knowledge Access' ข้อมูลทุกอย่างของคุณจะถูกเข้ารหัสก่อนถูกบันทึก เจ้าหน้าที่ปฏิบัติการจะไม่สามารถเห็นตัวตนที่แท้จริงของคุณได้หากไม่ได้รับอนุญาตจากเจ้าหน้าที่ระดับสูง (Tier-3 Admin) เท่านั้น เพื่อความเป็นส่วนตัวสูงสุด",
    },
    {
      icon: <Trash2 size={24} />,
      tag: 'UNL-PRT-02',
      title: 'Data Destruction',
      subtitle: 'Military-Grade Post-Op Purge',
      content:
        'เมื่อภารกิจปิดตัวลงตามเงื่อนไขสัญญา เรามีนโยบาย Purge ข้อมูลถาวรภายใน 30 วัน ข้อมูลจะถูกเขียนทับ (Wipe) 7 ครั้งตามมาตรฐาน DoD 5220.22-M เพื่อให้มั่นใจว่าจะไม่มีร่องรอยดิจิทัลใดๆ หลงเหลืออยู่ในระบบสำรองของเรา',
    },
    {
      icon: <ShieldCheck size={24} />,
      tag: 'UNL-PRT-03',
      title: 'Legal Compliance',
      subtitle: 'PDPA & GDPR Global Alignment',
      content:
        'UnlinkTH ปฏิบัติงานสอดคล้องกับมาตราฐาน PDPA (ประเทศไทย) และ GDPR (สากล) อย่างเคร่งครัด คุณมีสิทธิในการเข้าถึง แก้ไข และสั่งทำลายข้อมูล (Right to Erasure) ของตนเองได้ตลอดเวลาผ่านช่องทาง Secure Mail ที่ได้รับการรับรอง',
    },
  ]

  return (
    <>
      <Seo
        title="Privacy & Security Protocol | UnlinkTH"
        description="นโยบายความปลอดภัยและโปรโตคอลการปกป้องข้อมูลส่วนบุคคลระดับสูงสุดภายใต้มาตรฐาน UnlinkTH"
      />

      <main className="min-h-screen bg-white pt-32 pb-24 selection:bg-blue-600/10 dark:bg-slate-950">
        <div className="container mx-auto max-w-7xl px-6">
          {/* 🏛️ 1. HEADER: Tactical Briefing Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-32 flex flex-col items-start gap-12"
          >
            <div className="flex items-center gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-slate-900 text-white shadow-2xl dark:bg-blue-600">
                <FileLock2 size={28} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[10px] font-black tracking-[0.5em] text-blue-600 uppercase">
                  Classified Security Documentation
                </span>
                <span className="font-mono text-[11px] font-bold text-slate-400 uppercase">
                  Document ID: UNL-SEC-2026-V5
                </span>
              </div>
            </div>

            <div className="space-y-8">
              <h1 className="font-sans text-6xl leading-[0.9] font-black tracking-tighter text-slate-900 md:text-8xl dark:text-white">
                Privacy <br />
                <span className="text-blue-600 italic">Protocol</span>
              </h1>

              <div className="max-w-2xl border-l-2 border-slate-100 pl-10 dark:border-slate-800">
                <p className="font-thai text-xl leading-relaxed font-medium text-slate-500 dark:text-slate-400">
                  เพราะ &quot;ความลับ&quot; คือรากฐานของความไว้วางใจในโลกดิจิทัล{' '}
                  <br />
                  <span className="mt-2 block font-black text-slate-900 dark:text-white">
                    เราจึงออกแบบระบบที่ไม่มีใครสามารถเจาะเข้าถึงได้
                    แม้แต่ทีมวิศวกรผู้พัฒนาระบบเอง
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* 🏛️ 2. PROTOCOLS: Sophisticated List Layout */}
          <div className="border-t border-slate-100 dark:border-slate-800">
            {protocols.map((item, index) => (
              <motion.section
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group border-b border-slate-100 py-20 transition-all duration-700 hover:bg-slate-50/50 dark:border-slate-800 dark:hover:bg-slate-900/30"
              >
                <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
                  <div className="space-y-6 lg:col-span-5">
                    <span className="font-mono text-[11px] font-black tracking-[0.4em] text-blue-600 uppercase">
                      /{item.tag}
                    </span>
                    <div className="space-y-6">
                      <div className="flex items-center gap-6">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-100 bg-white text-blue-600 shadow-sm transition-all duration-700 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white dark:border-slate-800 dark:bg-slate-900">
                          {item.icon}
                        </div>
                        <h2 className="text-3xl font-black tracking-tight text-slate-900 uppercase dark:text-white">
                          {item.title}
                        </h2>
                      </div>
                      <p className="pl-[88px] font-mono text-[10px] font-black tracking-widest text-slate-400 uppercase">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="relative lg:col-span-7 lg:pt-4 lg:pl-12">
                    <p className="font-thai text-lg leading-relaxed font-medium text-slate-500 transition-colors duration-500 group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-slate-200">
                      {item.content}
                    </p>
                    <ChevronRight
                      size={16}
                      className="absolute top-5 -right-4 text-blue-600 opacity-0 transition-all duration-500 group-hover:translate-x-2 group-hover:opacity-100"
                    />
                  </div>
                </div>
              </motion.section>
            ))}
          </div>

          {/* 🏛️ 3. DPO SECURE CHANNEL: The Vault UI */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mt-40 overflow-hidden rounded-[3.5rem] bg-slate-900 p-16 text-white shadow-2xl dark:bg-blue-950"
          >
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
            <div className="relative z-10 flex flex-col items-start justify-between gap-16 lg:flex-row lg:items-center">
              <div className="space-y-10">
                <div className="flex items-center gap-4 text-blue-500">
                  <Fingerprint size={32} strokeWidth={1.5} />
                  <span className="font-mono text-[11px] font-black tracking-[0.5em] uppercase">
                    Secure DPO Interface
                  </span>
                </div>
                <h3 className="font-sans text-5xl font-black tracking-tighter uppercase md:text-7xl">
                  Data Inquiry <br />{' '}
                  <span className="text-4xl text-blue-500 italic md:text-6xl">
                    Secure Report
                  </span>
                </h3>
                <p className="font-thai max-w-md text-base leading-relaxed font-bold text-slate-400">
                  สำหรับการใช้สิทธิเข้าถึงหรือทำลายข้อมูล (PDPA/GDPR Compliance)
                  กรุณาส่งรหัสเคสส่วนตัวของท่านมายังช่องทางเข้ารหัสลับของทีมคุ้มครองข้อมูลโดยตรง
                </p>
              </div>

              <div className="flex flex-col gap-6 lg:items-end">
                <span className="border-b border-blue-500/30 pb-2 font-mono text-[11px] font-black tracking-widest text-blue-500 uppercase">
                  Point of Contact
                </span>
                <a
                  href="mailto:dpo@unlinkth.com"
                  className="font-sans text-3xl font-black tracking-tight text-white transition-all hover:text-blue-500 md:text-5xl"
                >
                  dpo@unlinkth.com
                </a>
                <div className="flex items-center gap-3 rounded-full border border-white/5 bg-white/5 px-6 py-2.5 text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">
                  <Lock size={12} className="text-blue-500" /> SSL 256-Bit
                  Encrypted Link
                </div>
              </div>
            </div>
          </motion.div>

          {/* 🏛️ 4. FOOTER VERIFICATION: Trust Signals */}
          <div className="mt-24 flex flex-col items-center justify-between gap-10 border-t border-slate-100 pt-16 md:flex-row dark:border-slate-800">
            <div className="flex items-center gap-5">
              <div className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
              </div>
              <p className="font-mono text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase">
                Privacy Compliance Verified // Unlink-TH 2026
              </p>
            </div>
            <div className="flex items-center gap-4 text-slate-300 dark:text-slate-700">
              <ShieldCheck size={24} />
              <div className="h-8 w-px bg-slate-100 dark:bg-slate-800" />
              <Info size={20} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
