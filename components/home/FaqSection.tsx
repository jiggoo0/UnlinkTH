/** @format */

'use client'

import React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import {
  Plus,
  Fingerprint,
  Activity,
  ShieldCheck,
  Terminal,
  ArrowUpRight,
  Database,
  type LucideIcon,
} from 'lucide-react'
// ✅ นำเข้า wikiFAQs จากไฟล์ใหม่ และ IconRegistry
import { wikiFAQs } from '@/data/wiki/faq-data'
import { IconRegistry } from '@/data/wiki/articles'
import { cn } from '@/lib/utils'

/**
 * [STRATEGY: THE DOSSIER ARCHITECTURE v5.2]
 * - Integrated: เชื่อมต่อกับ wikiFAQs (Refactored Data)
 * - Dynamic Icons: ดึงไอคอนผ่าน IconRegistry ตาม iconName ในข้อมูล
 * - UX: รักษาระบบ Sticky Left Column และ Responsive Design
 */

export function FaqSection() {
  return (
    <section className="relative overflow-hidden bg-white py-32 lg:py-48 dark:bg-slate-950">
      {/* 🏛️ BACKGROUND DECORATION */}
      <div className="absolute inset-0 z-0 bg-[url('/images/grid-pattern.svg')] [mask-image:linear-gradient(to_bottom,black,transparent)] opacity-[0.02]" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
          {/* 🏛️ 1. STRATEGIC POSITIONING (Left Column) */}
          <div className="h-fit space-y-12 lg:sticky lg:top-32 lg:col-span-4">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-600/10 bg-blue-600/5 shadow-sm">
                  <ShieldCheck size={20} />
                </div>
                <h2 className="font-mono text-[10px] font-black tracking-[0.4em] uppercase">
                  Strategic Briefing
                </h2>
              </div>

              <h3 className="font-sans text-5xl leading-[0.95] font-black tracking-tighter text-slate-950 uppercase md:text-7xl dark:text-white">
                Client <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent italic">
                  Inquiries
                </span>
              </h3>
            </div>

            <p className="max-w-xs font-sans text-lg leading-relaxed font-medium text-slate-500 dark:text-slate-400">
              วิเคราะห์ขั้นตอนปฏิบัติงาน และตอบข้อสงสัยเชิงยุทธศาสตร์
              เพื่อให้คุณมั่นใจในกระบวนการจัดระเบียบข้อมูลดิจิทัล
            </p>

            <div className="space-y-8 border-t border-slate-100 pt-10 dark:border-slate-800">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white shadow-xl dark:bg-blue-600">
                  <Terminal size={20} />
                </div>
                <div className="space-y-0.5">
                  <p className="font-mono text-[9px] font-black tracking-[0.2em] text-slate-400 uppercase">
                    Security Node
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    <p className="font-mono text-[11px] font-bold text-slate-900 uppercase dark:text-white">
                      Live Support: Active
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                <BadgeItem icon={Fingerprint} label="Privacy Guaranteed" />
                <BadgeItem icon={Database} label="Encrypted Logs" />
              </div>
            </div>
          </div>

          {/* 🏛️ 2. DATA DOSSIER (Right Column) */}
          <div className="lg:col-span-8">
            <Accordion.Root
              type="single"
              collapsible
              className="w-full space-y-5"
            >
              {wikiFAQs.map((item) => {
                // ✅ ดึง Icon จาก Registry ตามชื่อที่เก็บในข้อมูล
                const DynamicIcon = IconRegistry[item.iconName] || ShieldCheck

                return (
                  <Accordion.Item
                    key={item.id}
                    value={item.id}
                    className={cn(
                      'group overflow-hidden rounded-3xl border border-slate-100 bg-slate-50/40 transition-all duration-500',
                      'hover:border-slate-200 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50',
                      'data-[state=open]:border-blue-500/30 data-[state=open]:bg-white data-[state=open]:shadow-2xl data-[state=open]:shadow-blue-500/5',
                      'dark:border-slate-800 dark:bg-slate-900/30 dark:hover:bg-slate-900 dark:data-[state=open]:border-blue-600/40 dark:data-[state=open]:bg-slate-950',
                    )}
                  >
                    <Accordion.Header>
                      <Accordion.Trigger className="group flex w-full flex-1 items-center justify-between p-8 text-left outline-none md:p-10">
                        <div className="space-y-5">
                          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                            {/* แสดงไอคอนประกอบหมวดหมู่ */}
                            <div className="flex items-center gap-2">
                              <DynamicIcon
                                size={14}
                                className="text-blue-600"
                              />
                              <span className="font-mono text-[10px] font-black text-blue-600 uppercase dark:text-blue-400">
                                {item.category}
                              </span>
                            </div>
                            <div className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block dark:bg-slate-700" />
                            <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                              PROTOCOL: {item.id.toUpperCase()}
                            </span>
                          </div>

                          <h4 className="font-sans text-2xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600 md:text-3xl dark:text-slate-100 dark:group-hover:text-blue-400">
                            {item.question}
                          </h4>
                        </div>

                        <div className="ml-8 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-slate-200 transition-all duration-500 group-data-[state=open]:rotate-90 group-data-[state=open]:border-blue-600 group-data-[state=open]:bg-blue-600 group-data-[state=open]:text-white dark:border-slate-800">
                          <Plus
                            size={20}
                            className="transition-transform duration-500 group-data-[state=open]:rotate-45"
                          />
                        </div>
                      </Accordion.Trigger>
                    </Accordion.Header>

                    <Accordion.Content className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden">
                      <div className="px-8 pb-10 md:px-10 md:pb-12">
                        <div className="mb-8 flex items-center gap-3 border-t border-slate-50 pt-8 dark:border-slate-800/50">
                          <ArrowUpRight size={14} className="text-blue-600" />
                          <span className="font-mono text-[10px] font-black tracking-widest text-slate-400 uppercase">
                            Official Resolution
                          </span>
                        </div>

                        <div className="font-thai">
                          <p className="text-lg leading-relaxed font-medium text-slate-600 md:text-xl dark:text-slate-400">
                            {item.answer}
                          </p>
                        </div>

                        <div className="mt-12 flex items-center justify-between opacity-40">
                          <div className="flex items-center gap-2">
                            <Activity size={10} className="text-emerald-500" />
                            <span className="font-mono text-[8px] font-bold tracking-widest text-slate-400 uppercase">
                              Integrity: Verified
                            </span>
                          </div>
                          <span className="font-mono text-[8px] tracking-[0.2em] text-slate-300 uppercase">
                            DOC_REF: {item.category}-2026
                          </span>
                        </div>
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                )
              })}
            </Accordion.Root>
          </div>
        </div>
      </div>
    </section>
  )
}

interface BadgeItemProps {
  icon: LucideIcon
  label: string
}

function BadgeItem({ icon: Icon, label }: BadgeItemProps) {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-2 shadow-sm transition-colors hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-slate-700">
      <Icon size={14} className="text-blue-600" />
      <span className="font-mono text-[9px] font-black tracking-widest text-slate-900 uppercase dark:text-white">
        {label}
      </span>
    </div>
  )
}
