/** @format */

'use client'

import * as React from 'react'
import { SectionHeading } from '@/components/shared/section-heading'
import { FaqSection } from '@/components/home/FaqSection'
import { Seo } from '@/components/seo/Seo'
import {
  MessageCircle,
  ShieldQuestion,
  FileText,
  LifeBuoy,
  ArrowRight,
} from 'lucide-react'

/**
 * [STRATEGY: THE KNOWLEDGE BASE HUB]
 * - Accessibility: แบ่งหมวดหมู่ด้วย Help Cards เพื่อการเข้าถึงที่รวดเร็ว
 * - Conversion: Sidebar CTA ที่ติดตามผู้ใช้ (Sticky) เพื่อปิดการขาย
 * - Authority: ใช้โครงสร้างที่ดูเหมือนศูนย์ความช่วยเหลือระดับองค์กร (Enterprise Help Center)
 */

export default function FaqPage() {
  return (
    <>
      <Seo
        title="Knowledge Base & FAQ | Operational Support | UnlinkTH"
        description="ศูนย์รวมข้อมูลและคำถามที่พบบ่อยเกี่ยวกับกระบวนการลบลิงก์ การจัดการความปลอดภัยข้อมูล และนโยบายการรับประกันผลลัพธ์"
      />

      <main className="min-h-screen bg-white pt-32 pb-24 selection:bg-blue-100 dark:bg-slate-950">
        <section className="container mx-auto max-w-6xl px-6">
          {/* 🏛️ Header: Operational Clarity */}
          <header className="mb-20">
            <SectionHeading
              badge="Protocol Intelligence"
              title="Operational FAQ"
              subtitle="แหล่งรวบรวมข้อมูลทางเทคนิคและกระบวนการทำงานเพื่อความโปร่งใสสูงสุด"
              align="left"
            />
          </header>

          {/* 🏛️ Quick Navigation Cards */}
          <div className="mb-24 grid grid-cols-1 gap-px border border-slate-100 bg-slate-100 md:grid-cols-3 dark:border-slate-800 dark:bg-slate-800">
            <HelpCard
              icon={<ShieldQuestion className="text-blue-600" size={24} />}
              title="Security & NDA"
              desc="ทำความเข้าใจมาตรฐานการเก็บรักษาความลับระดับสูงของเรา"
            />
            <HelpCard
              icon={<FileText className="text-blue-600" size={24} />}
              title="Work Process"
              desc="ไทม์ไลน์และขั้นตอนการทำงานตั้งแต่เริ่มต้นจนเสร็จสิ้น"
            />
            <HelpCard
              icon={<LifeBuoy className="text-blue-600" size={24} />}
              title="Service Warranty"
              desc="นโยบายการรับประกันความสำเร็จและการจัดการเงินคืน"
            />
          </div>

          {/* 🏛️ Main Content Grid */}
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            {/* FAQ Accordion Area */}
            <div className="lg:col-span-8">
              <div className="space-y-8">
                <div className="flex items-center gap-4 border-b border-slate-100 pb-6 dark:border-slate-900">
                  <h2 className="text-2xl font-black tracking-tighter uppercase dark:text-white">
                    General Inquiries
                  </h2>
                  <div className="h-[1px] flex-1 bg-slate-100 dark:bg-slate-900" />
                </div>

                <div className="prose-slate dark:prose-invert">
                  <FaqSection />
                </div>
              </div>
            </div>

            {/* 🏛️ Sticky Support Sidebar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-6">
                <div className="relative overflow-hidden border-2 border-slate-950 bg-slate-950 p-10 text-white dark:border-slate-800">
                  <div className="absolute -top-4 -right-4 opacity-10">
                    <MessageCircle size={120} />
                  </div>

                  <div className="relative z-10 space-y-6">
                    <h3 className="text-2xl leading-tight font-black tracking-tight uppercase">
                      ต้องการการวิเคราะห์ <br /> รายกรณี?
                    </h3>
                    <p className="font-thai text-sm leading-relaxed font-medium text-slate-400">
                      หากสถานการณ์ของคุณมีความซับซ้อนหรือต้องการความรวดเร็วเป็นพิเศษ
                      ทีมที่ปรึกษาด้านยุทธศาสตร์ของเราพร้อมให้ข้อมูลเชิงลึกแบบ
                      Private Consult
                    </p>
                    <a
                      href="/contact"
                      className="group flex items-center justify-between bg-white px-6 py-4 text-[11px] font-black tracking-[0.2em] text-slate-950 uppercase transition-all hover:bg-blue-600 hover:text-white"
                    >
                      Initialize Consultation
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </a>
                  </div>
                </div>

                <div className="border border-slate-100 p-8 dark:border-slate-900">
                  <p className="mb-4 text-[10px] font-black tracking-widest text-slate-400 uppercase">
                    Operation Hours
                  </p>
                  <div className="flex justify-between text-xs font-bold text-slate-950 dark:text-white">
                    <span>Mon — Fri</span>
                    <span>09:00 - 18:00</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </>
  )
}

function HelpCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <div className="group bg-white p-10 transition-all hover:bg-slate-50 dark:bg-slate-950 dark:hover:bg-slate-900/50">
      <div className="mb-8 transform transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h4 className="mb-3 text-[11px] font-black tracking-[0.2em] text-slate-950 uppercase transition-colors group-hover:text-blue-600 dark:text-white">
        {title}
      </h4>
      <p className="font-thai text-sm leading-relaxed text-slate-500 dark:text-slate-400">
        {desc}
      </p>
    </div>
  )
}
