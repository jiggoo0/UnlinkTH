/** @format */

'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  MessageCircle,
  ShieldQuestion,
  FileText,
  LifeBuoy,
  ArrowRight,
  ChevronRight,
  Search,
  BookOpen,
} from 'lucide-react'

// UI Components
import { SectionHeading } from '@/components/shared/section-heading'
import { FaqSection } from '@/components/home/FaqSection'
import { Seo } from '@/components/seo/Seo'
import { Button } from '@/components/ui/button'

/**
 * [STRATEGY: THE KNOWLEDGE BASE HUB v4.0]
 * - Contextual Authority: เชื่อมโยง FAQ เข้ากับบทความเชิงลึกใน Wiki
 * - Cognitive Comfort: ใช้สี Navy และ Layout ที่สะอาดตาเพื่อลดความกังวลของผู้ใช้
 * - Path to Conversion: ติดตั้ง Sticky Sidebar ที่เน้น "Private Consult"
 */

export default function FaqPage() {
  return (
    <>
      <Seo
        title="Knowledge Base & FAQ | Operational Support | UnlinkTH"
        description="ศูนย์รวมข้อมูลและคำถามที่พบบ่อยเกี่ยวกับกระบวนการลบลิงก์ การจัดการความปลอดภัยข้อมูล และนโยบายการรับประกันผลลัพธ์"
      />

      <main className="bg-background selection:bg-primary/10 min-h-screen pt-32 pb-24">
        <section className="container mx-auto max-w-7xl px-6">
          {/* 🏛️ 1. STRATEGIC HEADER */}
          <header className="mb-20 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              badge="Intelligence Support"
              title="Operational FAQ"
              subtitle="ศูนย์รวบรวมข้อมูลทางเทคนิคและโปรโตคอลการทำงาน"
              description="เราเชื่อมั่นในความโปร่งใส ทุกขั้นตอนการปฏิบัติงานถูกรวบรวมไว้ที่นี่เพื่อความมั่นใจสูงสุดของคุณ"
              align="left"
              className="mb-0"
            />
            <div className="border-border bg-card flex w-full items-center gap-4 rounded-2xl border px-5 py-3 lg:w-96">
              <Search size={18} className="text-muted-foreground" />
              <input
                type="text"
                placeholder="Search protocols..."
                className="w-full bg-transparent text-sm focus:outline-none"
              />
            </div>
          </header>

          {/* 🏛️ 2. QUICK NAVIGATION (Dossier Cards) */}
          <div className="mb-24 grid grid-cols-1 gap-6 md:grid-cols-3">
            <HelpCard
              icon={<ShieldQuestion size={24} />}
              title="Security & NDA"
              desc="มาตรฐานการเข้ารหัสข้อมูลและการรักษาความลับระดับสูงภายใต้กฎหมาย"
            />
            <HelpCard
              icon={<FileText size={24} />}
              title="Work Process"
              desc="ไทม์ไลน์และขั้นตอนการทำงานเชิงเทคนิคตั้งแต่เริ่มต้นจนปิดภารกิจ"
            />
            <HelpCard
              icon={<LifeBuoy size={24} />}
              title="Service Warranty"
              desc="นโยบายการรับประกันความสำเร็จและโปรโตคอลการจัดการคืนค่าบริการ"
            />
          </div>

          {/* 🏛️ 3. MAIN CONTENT GRID */}
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            {/* FAQ Accordion Area */}
            <div className="lg:col-span-8">
              <div className="space-y-12">
                <div className="border-border/50 flex items-center gap-6 border-b pb-8">
                  <h2 className="text-2xl font-semibold tracking-tight uppercase">
                    General{' '}
                    <span className="text-primary italic">Inquiries</span>
                  </h2>
                  <div className="bg-border/50 h-px flex-1" />
                </div>

                <div className="prose-slate dark:prose-invert max-w-none">
                  <FaqSection />
                </div>

                {/* Wiki Bridge CTA */}
                <div className="border-primary/20 bg-primary/5 flex items-center justify-between gap-6 rounded-3xl border p-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-2xl">
                      <BookOpen size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold">ยังไม่พบคำตอบที่ต้องการ?</h4>
                      <p className="text-muted-foreground text-sm">
                        ศึกษาบทความเชิงลึกด้านกฎหมายและเทคนิคใน Wiki ของเรา
                      </p>
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary/20 hover:bg-primary rounded-xl hover:text-white"
                  >
                    <Link href="/wiki">Browse Wiki</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* 🏛️ 4. STICKY SUPPORT SIDEBAR */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-8">
                {/* Primary Consultation CTA */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="bg-foreground shadow-primary/10 relative overflow-hidden rounded-[2.5rem] p-10 text-white shadow-2xl"
                >
                  <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5" />

                  <div className="relative z-10 space-y-8">
                    <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-2xl text-white">
                      <MessageCircle size={24} />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-2xl leading-tight font-semibold tracking-tight">
                        ต้องการการวิเคราะห์ <br />{' '}
                        <span className="text-primary">เฉพาะกรณี?</span>
                      </h3>
                      <p className="font-sans text-sm leading-relaxed text-slate-400">
                        หากสถานการณ์ของคุณมีความซับซ้อน
                        ทีมยุทธศาสตร์ของเราพร้อมประเมินแผนงานแบบ Private Consult
                        ภายใต้สัญญา NDA
                      </p>
                    </div>

                    <Button
                      asChild
                      size="lg"
                      className="bg-primary shadow-primary/20 h-14 w-full rounded-xl font-bold shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Link
                        href="/contact"
                        className="flex items-center justify-between px-6"
                      >
                        Initialize Consultation
                        <ArrowRight size={18} />
                      </Link>
                    </Button>
                  </div>
                </motion.div>

                {/* Operation Info Card */}
                <div className="border-border bg-card space-y-6 rounded-[2rem] border p-8">
                  <div className="space-y-2">
                    <p className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase">
                      Operational Status
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 animate-ping rounded-full bg-emerald-500" />
                      <span className="text-xs font-bold uppercase">
                        All Systems Online
                      </span>
                    </div>
                  </div>
                  <div className="bg-border/50 h-px" />
                  <div className="space-y-3">
                    <p className="text-muted-foreground text-[10px] font-bold tracking-widest uppercase">
                      Secure Response Time
                    </p>
                    <p className="text-sm font-semibold">
                      &lt; 24 Hours (Guaranteed)
                    </p>
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
    <motion.div
      whileHover={{ y: -5 }}
      className="group border-border bg-card hover:border-primary/30 hover:shadow-primary/5 relative rounded-[2rem] border p-10 transition-all hover:shadow-xl"
    >
      <div className="bg-muted text-primary group-hover:bg-primary mb-8 flex h-14 w-14 items-center justify-center rounded-2xl transition-colors group-hover:text-white">
        {icon}
      </div>
      <h4 className="text-foreground mb-3 text-sm font-bold tracking-[0.2em] uppercase">
        {title}
      </h4>
      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
      <div className="text-primary mt-6 flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase opacity-0 transition-opacity group-hover:opacity-100">
        Learn More <ChevronRight size={12} />
      </div>
    </motion.div>
  )
}
