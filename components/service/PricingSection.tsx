/** @format */

'use client'

import React from 'react'
import { PricingTier } from './PricingTier'
import { SectionHeading } from '@/components/shared/section-heading'
import { faqData } from '@/data/faq'
import { allServices } from '@/data/services/all-services'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { Lock, EyeOff, Terminal, type LucideIcon } from 'lucide-react'

/**
 * [STRATEGY: INSTITUTIONAL PRICING v5.1]
 * - Fix: Resolved TS2322 by renaming 'isHighlighted' to 'highlight' to match PricingTierProps.
 * - Integrity: Maintaining zero-any policy with SecurityCardProps.
 */

interface SecurityCardProps {
  readonly id: string
  readonly icon: LucideIcon
  readonly title: string
  readonly description: string
}

export function PricingSection() {
  // กรองเฉพาะ Service ที่ต้องการแสดงผล (01, 05, 06)
  const displayServices = allServices.filter((s) =>
    ['01', '05', '06'].includes(s.id),
  )

  return (
    <section className="relative overflow-hidden bg-white py-32 selection:bg-blue-600/10 lg:py-48 dark:bg-slate-950">
      {/* 🧩 Background: Engineering Grid */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl px-6">
        {/* 🏛️ 1. HEADER: Strategic Positioning */}
        <div className="mb-24 flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <SectionHeading
            badge="Operational Fees"
            title="Protocol & Pricing"
            description="การประเมินเคสตามความซับซ้อนและนโยบายแพลตฟอร์ม เพื่อมอบโซลูชันที่มีประสิทธิภาพสูงสุดภายใต้มาตรฐานความปลอดภัยระดับสถาบัน"
            className="mb-0 max-w-3xl"
          />

          {/* NDA Status Indicator */}
          <div className="flex items-center gap-5 rounded-2xl border border-blue-100 bg-blue-50/30 px-8 py-5 dark:border-blue-900/30 dark:bg-blue-900/10">
            <div className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]"></span>
            </div>
            <div className="space-y-1">
              <p className="font-mono text-[10px] leading-none font-black tracking-[0.3em] text-blue-600 uppercase">
                Data Sovereignty
              </p>
              <p className="font-mono text-[11px] leading-none font-bold text-slate-900 uppercase dark:text-white">
                NDA Strict Protocol Active
              </p>
            </div>
          </div>
        </div>

        {/* 🏛️ 2. PRICING GRID: Selection Tier */}
        <div className="mb-32 grid grid-cols-1 gap-8 md:grid-cols-3">
          {displayServices.map((service) => (
            <PricingTier
              key={service.id}
              name={service.title}
              price={
                service.id === '01'
                  ? `฿${service.price.min.toLocaleString()}`
                  : 'Custom'
              }
              unit={service.id === '01' ? '/case' : '/project'}
              description={service.tagline || service.description}
              features={service.features}
              highlight={service.popular} // แก้จาก isHighlighted เป็น highlight
              ctaText={
                service.id === '01' ? 'Start Assessment' : 'Consult Specialist'
              }
            />
          ))}
        </div>

        {/* 🏛️ 3. SECURITY FRAMEWORK */}
        <div className="mb-40 overflow-hidden rounded-[2.5rem] border border-slate-100 bg-slate-50 shadow-sm dark:border-slate-800 dark:bg-slate-800">
          <div className="grid grid-cols-1 gap-px bg-slate-100 md:grid-cols-2 dark:bg-slate-800">
            <SecurityCard
              id="01"
              icon={Lock}
              title="Zero-Access Policy"
              description="เราทำงานผ่านช่องทางเทคนิคและกฎหมายของแพลตฟอร์มเท่านั้น ไม่มีนโยบายขอรหัสผ่านหรือเข้าถึงข้อมูลส่วนตัวในทุกกรณี"
            />
            <SecurityCard
              id="02"
              icon={EyeOff}
              title="Ephemeral Handling"
              description="ข้อมูลประเมินเคสทั้งหมดจะถูกทำลายทิ้งทันที (Data Purged) เมื่อภารกิจเสร็จสิ้นตามมาตรฐาน Security Lifecycle"
            />
          </div>
        </div>

        {/* 🏛️ 4. CLARITY ACCORDION: Final Conversion */}
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 flex flex-col items-center gap-4 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600">
              <Terminal size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-3xl font-black tracking-tight text-slate-900 uppercase dark:text-white">
              Clarity Protocol
            </h3>
            <p className="font-medium text-slate-500">
              คำถามที่พบบ่อยเกี่ยวกับการประเมินราคาและขั้นตอน
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.slice(0, 5).map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="rounded-3xl border border-slate-100 bg-white px-8 transition-all duration-500 data-[state=open]:border-blue-500/20 data-[state=open]:shadow-xl data-[state=open]:shadow-blue-500/5 dark:border-slate-800 dark:bg-slate-900/40"
              >
                <AccordionTrigger className="py-8 text-left text-lg font-bold text-slate-900 transition-colors hover:text-blue-600 hover:no-underline dark:text-slate-100">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="font-thai border-t border-slate-50 pt-6 pb-8 text-[16px] leading-relaxed text-slate-500 dark:border-slate-800 dark:text-slate-400">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

function SecurityCard({
  id,
  icon: Icon,
  title,
  description,
}: SecurityCardProps) {
  return (
    <div className="group bg-white p-14 transition-all duration-700 hover:bg-blue-50/30 dark:bg-slate-950 dark:hover:bg-slate-900/50">
      <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-[1.25rem] border border-slate-100 bg-white text-slate-900 shadow-sm transition-all duration-700 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white dark:border-slate-800 dark:bg-slate-800">
        <Icon size={28} strokeWidth={1.5} />
      </div>
      <h4 className="mb-4 font-mono text-[11px] font-black tracking-[0.35em] text-blue-600 uppercase">
        [{id}] {title}
      </h4>
      <p className="font-thai text-xl leading-relaxed font-bold text-slate-900 dark:text-slate-200">
        {description}
      </p>
    </div>
  )
}
