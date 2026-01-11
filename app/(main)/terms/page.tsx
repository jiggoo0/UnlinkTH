/** @format */

'use client'

import React from 'react'
import {
  ShieldCheck,
  Scale,
  FileWarning,
  HelpCircle,
  FileText,
  Lock,
  ChevronRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * [STRATEGY: THE STRUCTURAL MINIMALIST]
 * - Dossier Layout: เปลี่ยนข้อกำหนดเป็นแฟ้มบันทึกข้อตกลงเชิงยุทธศาสตร์
 * - Visual Trust: ใช้เส้นสายที่คมชัด (0.5px border) และ Contrast ที่สูง
 */

export default function TermsPage() {
  const terms = [
    {
      icon: <ShieldCheck className="text-blue-600" size={20} />,
      title: 'การรักษาความลับ (Non-Disclosure Protocol)',
      content:
        'UnlinkTH ตกลงที่จะรักษาข้อมูลส่วนบุคคล รายละเอียดเคส และเอกสารทุกฉบับของลูกค้าไว้เป็นความลับสูงสุดภายใต้มาตรฐานการเข้ารหัสและมาตรการทางกฎหมาย และจะไม่เปิดเผยต่อบุคคลภายนอกโดยเด็ดขาดตลอดไป',
    },
    {
      icon: <Scale className="text-blue-600" size={20} />,
      title: 'ขอบเขตภาระหน้าที่ (Scope of Authority)',
      content:
        "เราทำหน้าที่เป็นที่ปรึกษาและตัวกลางเชิงเทคนิคในการประสานงานเพื่อใช้สิทธิ 'Right to be Forgotten' ผลลัพธ์อาจแตกต่างกันตามโครงสร้าง Algorithm และนโยบายภายในของแต่ละแพลตฟอร์มต้นทาง",
    },
    {
      icon: <FileWarning className="text-blue-600" size={20} />,
      title: 'นโยบายความคุ้มครองทางการเงิน',
      content:
        'เพื่อความโปร่งใสสูงสุด หากการดำเนินงานไม่เป็นไปตามเป้าหมาย (Success-based Outcome) เราดำเนินนโยบายคืนค่าบริการตามสัดส่วนที่ระบุในสัญญาจ้างงานอย่างเคร่งครัด',
    },
    {
      icon: <HelpCircle className="text-blue-600" size={20} />,
      title: 'ข้อจำกัดและความถูกต้องของข้อมูล',
      content:
        'บริษัทขอสงวนสิทธิ์ในการยุติการให้บริการทันที หากตรวจพบว่าข้อมูลที่ได้รับมีความพยายามใช้บริการเพื่อปกปิดการกระทำความผิดทางกฎหมายหรือมีเจตนาทุจริต',
    },
  ]

  return (
    <main className="min-h-screen bg-white py-32 selection:bg-blue-100 dark:bg-slate-950">
      <div className="container mx-auto max-w-5xl px-6">
        {/* 🏛️ Page Header: Institutional Style */}
        <header className="mb-24 flex flex-col items-start border-l-4 border-slate-950 pl-8 dark:border-blue-600">
          <div className="mb-6 flex items-center gap-3">
            <FileText className="text-blue-600" size={18} />
            <span className="text-[10px] font-black tracking-[0.5em] text-slate-400 uppercase">
              Terms of Engagement v2.6
            </span>
          </div>
          <h1 className="mb-6 text-6xl leading-none font-black tracking-tighter text-slate-950 uppercase md:text-8xl dark:text-white">
            Terms <br />
            <span className="font-light text-slate-200 italic dark:text-slate-800">
              of Service
            </span>
          </h1>
          <p className="font-thai max-w-xl text-lg leading-relaxed font-medium text-slate-500 dark:text-slate-400">
            ระเบียบปฏิบัติและข้อตกลงเพื่อความเข้าใจที่ตรงกันในการคุ้มครองสิทธิ{' '}
            <br />
            และบริหารจัดการชื่อเสียงดิจิทัลของคุณภายใต้มาตรฐานสากล
          </p>
        </header>

        {/* 🏛️ Terms List: Structural Dossier Style */}
        <div className="space-y-0 border-t-2 border-slate-950 dark:border-slate-800">
          {terms.map((item, index) => (
            <section
              key={index}
              className="group border-b border-slate-100 py-16 transition-all duration-500 hover:bg-slate-50/50 dark:border-slate-900 dark:hover:bg-slate-900/30"
            >
              <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-12">
                <div className="flex items-center gap-6 md:col-span-5">
                  <span className="text-[10px] font-black text-slate-300">
                    0{index + 1}
                  </span>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center bg-slate-50 dark:bg-slate-900">
                      {item.icon}
                    </div>
                    <h3 className="text-xs font-black tracking-widest text-slate-950 uppercase dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="relative md:col-span-7">
                  <p className="font-thai text-base leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.content}
                  </p>
                  <ChevronRight
                    size={14}
                    className="absolute top-1 -right-4 text-blue-600 opacity-0 transition-all group-hover:translate-x-2 group-hover:opacity-100"
                  />
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* 🏛️ Legal Closing Summary */}
        <footer className="mt-32 border-2 border-slate-950 bg-white p-10 shadow-[15px_15px_0px_0px_rgba(2,6,23,1)] dark:border-slate-800 dark:bg-slate-950 dark:shadow-[15px_15px_0px_0px_rgba(30,41,59,1)]">
          <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-blue-600">
                <Lock size={16} />
                <span className="text-[10px] font-black tracking-[0.3em] uppercase">
                  Authentication protocol active
                </span>
              </div>
              <p className="font-thai text-sm leading-relaxed font-bold text-slate-500">
                การเริ่มใช้บริการหรือการส่งข้อมูลผ่าน Console
                ถือเป็นการยอมรับเงื่อนไขนี้ <br />
                สอบถามรายละเอียดทางกฎหมาย:{' '}
                <span className="cursor-pointer text-slate-950 underline decoration-blue-600 decoration-2 underline-offset-4 transition-colors hover:text-blue-600 dark:text-white">
                  legal@unlinkth.com
                </span>
              </p>
            </div>
            <div className="border-l-2 border-slate-100 pl-12 text-right dark:border-slate-800">
              <p className="mb-2 text-[10px] font-black tracking-[0.4em] text-slate-300 uppercase">
                Last Revision
              </p>
              <time className="text-3xl font-black tracking-tighter text-slate-950 italic dark:text-white">
                08.JAN.2026
              </time>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
