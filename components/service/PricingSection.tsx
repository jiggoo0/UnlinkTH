/** @format */

'use client'

import * as React from 'react'
import { PricingTier } from './PricingTier'
import { SectionHeading } from '@/components/shared/section-heading'
import { faqData } from '@/data/faq'
import { allServices } from '@/data/services/all-services' // ดึงข้อมูลกลางมาใช้
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ShieldCheck, Lock, EyeOff, HelpCircle, ArrowRight } from 'lucide-react'

/**
 * [STRATEGY: THE TRUSTED ARCHITECT]
 * - ใช้ Dynamic Data จาก allServices
 * - เน้นความโปร่งใสเรื่อง NDA
 * - ใช้สี Slate และ Blue เพื่อสื่อถึง "ความจริง" (Truth) และ "เทคโนโลยี" (Tech)
 */

export function PricingSection() {
  // กรองเฉพาะบริการหลักที่ต้องการโชว์ในหน้า Pricing (หรือใช้ pricingData เดิมถ้าต้องการข้อความพิเศษ)
  const displayServices = allServices.filter((s) =>
    ['01', '05', '06'].includes(s.id),
  )

  return (
    <section className="bg-white py-32 selection:bg-blue-100 dark:bg-slate-950">
      <div className="container mx-auto max-w-6xl px-6">
        {/* 🏛️ Header */}
        <div className="mb-20 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            badge="Service Packages"
            title="Protocol & Pricing"
            description="เราเริ่มต้นด้วยการประเมินความเป็นไปได้ตามจริง เพื่อหาทางออกที่ยั่งยืนที่สุดสำหรับคุณ"
            className="mb-0 max-w-2xl"
          />
          <div className="flex items-center gap-4 rounded-full border border-blue-100 bg-blue-50/50 px-6 py-3 dark:border-blue-900/30 dark:bg-blue-900/10">
            <div className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
            </div>
            <span className="text-[10px] font-black tracking-[0.3em] text-blue-900 uppercase dark:text-blue-400">
              Strict NDA Compliance Active
            </span>
          </div>
        </div>

        {/* 🏛️ Pricing Grid (Dynamic rendering) */}
        <div className="mb-24 grid grid-cols-1 gap-6 md:grid-cols-3">
          {displayServices.map((service) => (
            <PricingTier
              key={service.id}
              name={service.title}
              price={
                service.id === '01'
                  ? `เริ่ม ${service.price.min.toLocaleString()}`
                  : 'Custom Quote'
              }
              description={service.tagline || service.description}
              features={service.features}
              isHighlighted={service.popular}
              ctaText={
                service.id === '01' ? 'เริ่มการประเมิน' : 'ปรึกษาผู้เชี่ยวชาญ'
              }
            />
          ))}
        </div>

        {/* 🏛️ Trust Signals (Grid Layout) */}
        <div className="mb-32 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-slate-100 bg-slate-100 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-white p-12 transition-colors hover:bg-slate-50 dark:bg-slate-950 dark:hover:bg-slate-900/50">
              <Lock size={20} className="mb-6 text-blue-600" />
              <h4 className="mb-4 text-[11px] font-black tracking-[0.3em] text-slate-900 uppercase dark:text-white">
                Zero-Access Policy
              </h4>
              <p className="font-thai text-[14px] leading-relaxed text-slate-500 dark:text-slate-400">
                เราทำงานผ่านช่องทางเทคนิคและกฎหมายของแพลตฟอร์มเท่านั้น
                ไม่มีความจำเป็นต้องขอรหัสผ่านหรือเข้าถึงความเป็นส่วนตัวของคุณ
              </p>
            </div>
            <div className="border-t border-slate-100 bg-white p-12 transition-colors hover:bg-slate-50 md:border-t-0 md:border-l dark:border-slate-900 dark:bg-slate-950 dark:hover:bg-slate-900/50">
              <EyeOff size={20} className="mb-6 text-blue-600" />
              <h4 className="mb-4 text-[11px] font-black tracking-[0.3em] text-slate-900 uppercase dark:text-white">
                Ephemeral Data Handling
              </h4>
              <p className="font-thai text-[14px] leading-relaxed text-slate-500 dark:text-slate-400">
                ข้อมูลทุกอย่างที่ใช้ในกระบวนการจะถูกทำลายทันทีที่ปิดเคส
                ไม่มีการจัดเก็บข้อมูลลูกค้าเพื่อความปลอดภัยสูงสุดในระยะยาว
              </p>
            </div>
          </div>
        </div>

        {/* 🏛️ FAQ Section */}
        <div className="mx-auto max-w-3xl">
          <div className="mb-16 text-center">
            <h3 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
              ความชัดเจนคือจุดเริ่มต้นของความไว้ใจ
            </h3>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="rounded-2xl border-none bg-slate-50 px-8 py-2 dark:bg-slate-900"
              >
                <AccordionTrigger className="text-left text-[14px] font-bold text-slate-900 hover:no-underline dark:text-slate-200">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="font-thai pt-2 pb-6 text-[15px] leading-relaxed text-slate-500">
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
