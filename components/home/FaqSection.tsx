/** @format */

'use client'

import React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { Plus, Fingerprint, Activity, ShieldCheck } from 'lucide-react'
import { faqData } from '@/data/faq'
import { cn } from '@/lib/utils'

/**
 * [STRATEGY: THE DOSSIER ARCHITECTURE]
 * - Visual: เน้นความเป็น "ที่ปรึกษาเฉพาะทาง" ผ่าน UI ที่ดูเหมือนรายงานวิเคราะห์
 * - Logic: แสดงให้เห็นว่าทุกคำถามมี "กระบวนการปฏิบัติงาน (Protocol)" รองรับ
 * - UX: ใช้ Framer Motion (via Tailwind/Radix) เพื่อความลื่นไหลแต่ยังคงความสุขุม
 */

export function FaqSection() {
  return (
    <section className="container mx-auto px-6 py-32 lg:py-48">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
        {/* 🏛️ Left Column: Strategic Positioning */}
        <div className="h-fit space-y-10 lg:sticky lg:top-32 lg:col-span-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <ShieldCheck size={18} className="animate-pulse" />
              <h2 className="text-[10px] font-black tracking-[0.4em] uppercase">
                Expert Analysis
              </h2>
            </div>
            <h3 className="text-4xl leading-[0.95] font-black tracking-tighter text-slate-950 uppercase md:text-6xl dark:text-white">
              Client <br />
              <span className="font-light text-slate-300 italic dark:text-slate-700">
                Inquiries
              </span>
            </h3>
          </div>

          <p className="font-thai max-w-xs text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
            วิเคราะห์ขั้นตอนปฏิบัติงาน และตอบข้อสงสัยเชิงยุทธศาสตร์
            เพื่อความเข้าใจที่ชัดเจนก่อนเริ่มกระบวนการจัดระเบียบข้อมูลออนไลน์
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-100 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
                <Activity size={16} className="text-blue-600" />
              </div>
              <div>
                <p className="text-[9px] font-black tracking-widest text-slate-400 uppercase">
                  Operation Status
                </p>
                <p className="text-[10px] font-bold text-slate-950 uppercase dark:text-white">
                  Strategy:{' '}
                  <span className="text-emerald-500">Active Support</span>
                </p>
              </div>
            </div>

            {/* 🛡️ Privacy Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-white dark:bg-blue-600">
              <Fingerprint size={12} />
              <span className="text-[9px] font-bold tracking-widest uppercase">
                Privacy Guaranteed
              </span>
            </div>
          </div>
        </div>

        {/* 🏛️ Right Column: Data Dossier (FAQ Accordion) */}
        <div className="lg:col-span-8">
          <Accordion.Root
            type="single"
            collapsible
            className="w-full space-y-4"
          >
            {faqData.map((item) => (
              <Accordion.Item
                key={item.id}
                value={item.id}
                className={cn(
                  'group overflow-hidden rounded-2xl border border-slate-100 bg-white transition-all duration-500',
                  'data-[state=open]:border-slate-950 data-[state=open]:shadow-2xl data-[state=open]:shadow-slate-200/50',
                  'dark:border-slate-900 dark:bg-slate-950/50 dark:data-[state=open]:border-blue-600 dark:data-[state=open]:shadow-none',
                )}
              >
                <Accordion.Header className="flex">
                  <Accordion.Trigger className="flex flex-1 items-center justify-between p-8 text-left outline-none md:p-10">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-black tracking-widest text-blue-600 uppercase dark:text-blue-400">
                          {item.id.replace('-', '_')}
                        </span>
                        <span className="h-px w-8 bg-slate-200 dark:bg-slate-800" />
                        <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                          {item.category}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold tracking-tight text-slate-950 md:text-2xl dark:text-slate-100">
                        {item.question}
                      </h4>
                    </div>

                    <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-slate-100 transition-all duration-500 group-data-[state=open]:rotate-45 group-data-[state=open]:bg-slate-950 group-data-[state=open]:text-white dark:border-slate-800 dark:group-data-[state=open]:bg-blue-600">
                      <Plus size={20} />
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden transition-all">
                  <div className="px-8 pb-10 md:px-10">
                    <div className="mb-8 h-px w-full bg-slate-100 dark:bg-slate-900" />
                    <div className="font-thai prose prose-slate dark:prose-invert max-w-2xl">
                      <p className="text-[16px] leading-relaxed text-slate-600 dark:text-slate-400">
                        {item.answer}
                      </p>
                    </div>
                    {/* Visual Authority Marker */}
                    <div className="mt-8 flex items-center gap-2 opacity-30">
                      <div className="h-1 w-1 rounded-full bg-slate-400" />
                      <span className="text-[8px] font-bold tracking-widest text-slate-400 uppercase">
                        End of Analysis
                      </span>
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  )
}
