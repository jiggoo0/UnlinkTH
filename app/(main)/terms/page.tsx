/** @format */

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  ShieldCheck,
  FileText,
  Lock,
  ChevronRight,
  Gavel,
  ShieldAlert,
} from 'lucide-react'
import { Seo } from '@/components/seo/Seo'

/**
 * [STRATEGY: THE LEGAL DOSSIER V5.0]
 * - Fix: Removed unused 'Scale', 'FileWarning', 'HelpCircle' to resolve Lint warnings
 * - Identity: ปรับสู่ "Institutional Legal Standard" เน้นความเฉียบคมและโปร่งใส (Transparency & Power)
 * - Typography: ใช้ Font Hierarchy ที่เน้นความสำคัญของหัวข้อสัญญาอย่างชัดเจน
 */

export default function TermsPage() {
  const terms = [
    {
      icon: <Lock size={20} />,
      title: 'การรักษาความลับ (Non-Disclosure Protocol)',
      tag: 'SEC-PRO-01',
      content:
        'UnlinkTH ตกลงที่จะรักษาข้อมูลส่วนบุคคล รายละเอียดเคส และเอกสารทุกฉบับของลูกค้าไว้เป็นความลับสูงสุดภายใต้มาตรฐานการเข้ารหัสระดับสากล และจะไม่เปิดเผยต่อบุคคลภายนอกโดยเด็ดขาดตลอดไป เว้นแต่จะได้รับความยินยอมเป็นลายลักษณ์อักษร',
    },
    {
      icon: <Gavel size={20} />,
      title: 'ขอบเขตภาระหน้าที่ (Scope of Authority)',
      tag: 'SEC-PRO-02',
      content:
        "เราทำหน้าที่เป็นที่ปรึกษาและตัวกลางเชิงเทคนิคเพื่อใช้สิทธิ 'Right to be Forgotten' ผลลัพธ์อาจแตกต่างกันตามโครงสร้าง Algorithm และนโยบายความเป็นส่วนตัวของแพลตฟอร์มต้นทาง อย่างไรก็ตามเรามุ่งมั่นดำเนินการจนถึงที่สุดตามสัญญาจ้าง",
    },
    {
      icon: <ShieldCheck size={20} />,
      title: 'นโยบายความคุ้มครองทางการเงิน',
      tag: 'SEC-PRO-03',
      content:
        'เพื่อความโปร่งใสสูงสุด หากการดำเนินงานไม่เป็นไปตามเป้าหมาย (Success-based Outcome) ภายใต้ระยะเวลาที่กำหนด เราดำเนินนโยบายคืนค่าบริการตามสัดส่วนที่ระบุในสัญญาหลักอย่างเคร่งครัดและเป็นธรรม',
    },
    {
      icon: <ShieldAlert size={20} />,
      title: 'ข้อจำกัดและความถูกต้องของข้อมูล',
      tag: 'SEC-PRO-04',
      content:
        'บริษัทขอสงวนสิทธิ์ในการปฏิเสธหรือยุติการให้บริการทันที หากตรวจพบว่าผู้รับบริการมีเจตนาใช้บริการเพื่อปกปิดการกระทำความผิดทางกฎหมายร้ายแรงหรือมีเจตนาทุจริตต่อสาธารณะ',
    },
  ]

  return (
    <>
      <Seo
        title="Terms of Service | ข้อตกลงการใช้บริการ UnlinkTH"
        description="ระเบียบปฏิบัติและข้อตกลงการบริหารจัดการชื่อเสียงดิจิทัลภายใต้มาตรฐานการรักษาความลับสูงสุด"
      />

      <main className="min-h-screen bg-white pt-32 pb-24 selection:bg-blue-600/10 dark:bg-slate-950">
        <div className="container mx-auto max-w-7xl px-6">
          {/* 🏛️ 1. HEADER: Institutional Authority Style */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-32 flex flex-col items-start gap-10 border-l-2 border-slate-100 pl-12 dark:border-slate-800"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-xl dark:bg-blue-600">
                <FileText size={22} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] font-black tracking-[0.5em] text-blue-600 uppercase">
                  Legal Engagement Protocol
                </span>
                <span className="font-mono text-[11px] font-bold text-slate-400 uppercase">
                  Revision ID: UNL-LGL-2026-V5
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="font-sans text-6xl font-black tracking-tighter text-slate-900 md:text-8xl dark:text-white">
                Terms of <br />
                <span className="text-blue-600 italic">Engagement</span>
              </h1>
              <p className="font-thai max-w-2xl text-xl leading-relaxed font-medium text-slate-500 dark:text-slate-400">
                ระเบียบปฏิบัติและข้อตกลงเพื่อสร้างความโปร่งใสในการคุ้มครองสิทธิ
                และบริหารจัดการชื่อเสียงดิจิทัลของคุณภายใต้กรอบกฎหมายสากล
              </p>
            </div>
          </motion.header>

          {/* 🏛️ 2. TERMS LIST: Detailed Row Selection */}
          <div className="border-t border-slate-100 dark:border-slate-800">
            {terms.map((item, index) => (
              <motion.section
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group border-b border-slate-100 py-20 transition-all duration-700 hover:bg-slate-50/50 dark:border-slate-800 dark:hover:bg-slate-900/30"
              >
                <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
                  <div className="flex flex-col gap-6 lg:col-span-5">
                    <span className="font-mono text-[11px] font-black tracking-[0.4em] text-blue-600 uppercase">
                      /{item.tag}
                    </span>
                    <div className="flex items-center gap-6">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-100 bg-white text-blue-600 shadow-sm transition-all duration-700 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white dark:border-slate-800 dark:bg-slate-900">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-black tracking-tight text-slate-900 uppercase dark:text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <div className="relative lg:col-span-7 lg:pt-4">
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

          {/* 🏛️ 3. LEGAL CLOSING: The Final Verification */}
          <motion.footer
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mt-40 overflow-hidden rounded-[3.5rem] bg-slate-950 p-16 text-white shadow-2xl"
          >
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.05]" />
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-600/10 blur-[100px]" />

            <div className="relative z-10 flex flex-col items-center justify-between gap-16 lg:flex-row">
              <div className="space-y-10">
                <div className="flex items-center gap-4 text-blue-500">
                  <Lock size={20} />
                  <span className="font-mono text-[11px] font-black tracking-[0.5em] uppercase">
                    Security protocol active
                  </span>
                </div>
                <p className="font-thai max-w-2xl text-base leading-relaxed font-bold text-slate-400">
                  การเริ่มต้นขอรับคำปรึกษาหรือการส่งข้อมูลผ่านระบบถือเป็นการยอมรับเงื่อนไขเบื้องต้นนี้อย่างสมบูรณ์{' '}
                  <br />
                  สำหรับคำถามทางข้อกฎหมายเพิ่มเติม
                  กรุณาติดต่อทีมยุทธศาสตร์ด้านกฎหมายของเราโดยตรงที่: <br />
                  <a
                    href="mailto:legal@unlinkth.com"
                    className="mt-4 block text-3xl font-black text-white underline decoration-blue-500 decoration-4 underline-offset-8 transition-colors hover:text-blue-500"
                  >
                    legal@unlinkth.com
                  </a>
                </p>
              </div>
              <div className="flex flex-col items-end border-l border-white/10 pl-16 text-right">
                <p className="mb-4 font-mono text-[11px] font-black tracking-[0.5em] text-slate-500 uppercase">
                  Last Revision
                </p>
                <time className="font-sans text-5xl font-black tracking-tighter text-white italic md:text-6xl">
                  13.JAN.2026
                </time>
                <div className="mt-6 flex items-center gap-3 font-mono text-[10px] font-black tracking-widest text-blue-500/50 uppercase">
                  UNLINK-TH TRUST VERIFIED
                </div>
              </div>
            </div>
          </motion.footer>
        </div>
      </main>
    </>
  )
}
