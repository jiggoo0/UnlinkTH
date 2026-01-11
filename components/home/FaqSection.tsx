/** @format */

'use client'

import React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { Plus, Fingerprint, Activity } from 'lucide-react'
import { faqData } from '@/data/faq' // สมมติว่าโครงสร้าง data มี id, category, question, answer
import { cn } from '@/lib/utils'

/**
 * [STRATEGY: THE STRUCTURAL MINIMALIST]
 * - Dossier Approach: มองคำถามเป็น ID เคสเพื่อสร้าง Authority
 * - Performance: ใช้ Radix UI เพื่อความเร็วและ Accessibility (A11y)
 */

export function FaqSection() {
  return (
    <section className="container mx-auto px-6 py-32">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
        {/* 🏛️ Left: Information Architecture Summary */}
        <div className="h-fit space-y-10 lg:sticky lg:top-32 lg:col-span-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-blue-600">
              <Fingerprint size={18} className="animate-pulse" />
              <h2 className="text-[10px] font-black tracking-[0.4em] uppercase">
                Intelligence Support
              </h2>
            </div>
            <h3 className="text-4xl leading-[0.95] font-black tracking-tighter text-slate-950 uppercase md:text-6xl dark:text-white">
              Inquiry <br />
              <span className="font-light text-slate-200 italic dark:text-slate-800">
                Analysis
              </span>
            </h3>
          </div>

          <p className="font-thai max-w-xs text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
            วิเคราะห์และตอบข้อสงสัยเบื้องต้นเกี่ยวกับกระบวนการรักษาความปลอดภัย
            และขั้นตอนปฏิบัติงานเชิงยุทธศาสตร์ของเรา
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-100 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
                <Activity size={16} className="text-blue-600" />
              </div>
              <div>
                <p className="text-[9px] font-black tracking-widest text-slate-400 uppercase">
                  Core Systems
                </p>
                <p className="text-[10px] font-bold text-slate-950 uppercase dark:text-white">
                  Status: <span className="text-emerald-500">Active</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 🏛️ Right: Data Dossier (Accordion) */}
        <div className="lg:col-span-8">
          <Accordion.Root
            type="single"
            collapsible
            className="w-full space-y-2"
          >
            {faqData.map((item, index) => (
              <Accordion.Item
                key={item.id}
                value={item.id}
                className={cn(
                  'group border-b border-slate-100 bg-transparent px-4 transition-all duration-500',
                  'data-[state=open]:border-slate-950 data-[state=open]:bg-slate-50/50',
                  'dark:border-slate-900 dark:data-[state=open]:border-blue-600 dark:data-[state=open]:bg-slate-900/30',
                )}
              >
                <Accordion.Header className="flex">
                  <Accordion.Trigger className="flex flex-1 items-center justify-between py-10 text-left outline-none">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-[9px] font-black tracking-widest text-blue-600 uppercase">
                          DOC_{item.id}
                        </span>
                        <span className="h-[1px] w-6 bg-slate-200 dark:bg-slate-800" />
                        <span className="text-[9px] font-black tracking-widest text-slate-400 uppercase">
                          {item.category}
                        </span>
                      </div>
                      <h4 className="text-xl font-black tracking-tight text-slate-950 uppercase md:text-2xl dark:text-slate-100">
                        {item.question}
                      </h4>
                    </div>

                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-100 transition-all duration-500 group-data-[state=open]:rotate-45 group-data-[state=open]:bg-slate-950 group-data-[state=open]:text-white dark:border-slate-800 dark:group-data-[state=open]:bg-blue-600">
                      <Plus size={20} className="transition-colors" />
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden transition-all">
                  <div className="font-thai max-w-2xl pb-10 text-[16px] leading-relaxed text-slate-500 dark:text-slate-400">
                    <div className="mb-6 h-px w-full bg-slate-100 dark:bg-slate-900" />
                    <p className="pl-0 md:pl-10">{item.answer}</p>
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
