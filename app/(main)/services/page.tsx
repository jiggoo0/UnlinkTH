/** @format */

import type { Metadata } from 'next'
import {
  Search,
  Shield,
  UserCheck,
  FileText,
  Lock,
  Database,
  Globe,
  EyeOff,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react'

// Data Layer
import { allServices } from '@/data/services/all-services'

// Component Architecture
import { ServiceListRow } from '@/components/service/ServiceListRow'
import { PricingSection } from '@/components/service/PricingSection'
import { SectionHeading } from '@/components/shared/section-heading'
import { Seo } from '@/components/seo/Seo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

/**
 * [STRATEGY: SERVICES DIRECTORY v5.0]
 * - Fix: Removed unused 'Zap' icon to resolve Lint warning
 * - Identity: ปรับสู่ "Strategic Intelligence" เน้นความขาวสะอาด เรียบหรู และดูเป็นทางการ (Formal Sophistication)
 * - UX: ใช้โครงสร้าง List-based ที่อ่านง่ายเหมือนสารบัญยุทธศาสตร์
 */

export const metadata: Metadata = {
  title:
    'Operational Services | กลยุทธ์จัดการชื่อเสียงและข้อมูลดิจิทัล | UnlinkTH',
  description:
    'โซลูชันการจัดการประวัติออนไลน์ การลบลิงก์เสีย และการคุ้มครองความเป็นส่วนตัวระดับองค์กรภายใต้มาตรฐานความปลอดภัยสูงสุด',
  openGraph: {
    title: 'Professional Service Protocols | UnlinkTH',
    description:
      'จัดการทุกความเสี่ยงด้านชื่อเสียงออนไลน์ด้วยมาตรฐานความปลอดภัยระดับสูง',
    images: ['/images/og-services.jpg'],
  },
}

// 🏛️ Icon Registry (Centralized for consistent stroke and size)
const iconMap: Record<string, React.ReactNode> = {
  search: <Search size={20} strokeWidth={1.5} />,
  shield: <Shield size={20} strokeWidth={1.5} />,
  'user-check': <UserCheck size={20} strokeWidth={1.5} />,
  'file-text': <FileText size={20} strokeWidth={1.5} />,
  lock: <Lock size={20} strokeWidth={1.5} />,
  database: <Database size={20} strokeWidth={1.5} />,
  globe: <Globe size={20} strokeWidth={1.5} />,
  'eye-off': <EyeOff size={20} strokeWidth={1.5} />,
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-0 selection:bg-blue-600/10 dark:bg-slate-950">
      <Seo
        title="Operational Services"
        description="โซลูชันการจัดการชื่อเสียงออนไลน์และข้อมูลดิจิทัลอย่างเป็นระบบ"
      />

      {/* 🏛️ 1. STRATEGIC HEADER: ปรับให้ดูนุ่มนวลและน่าเชื่อถือขึ้น */}
      <section className="container mx-auto mb-32 max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-16 lg:flex-row lg:items-end">
          <SectionHeading
            badge="Service Directory"
            title="Digital Intelligence Strategy"
            subtitle="เราออกแบบโครงสร้างตัวตนดิจิทัลใหม่ เพื่อให้คุณควบคุมชื่อเสียงได้อย่างสมบูรณ์"
            description="ทุกโปรโตคอลการทำงานถูกออกแบบมาเพื่อแก้ไขปัญหาที่ต้นเหตุ พร้อมมาตรการรักษาความลับระดับองค์กรสูงสุดภายใต้มาตรฐาน UnlinkTH"
            className="mb-0 max-w-4xl"
            align="left"
          />
          <div className="flex items-center gap-5 rounded-[2rem] border border-slate-100 bg-slate-50/50 px-8 py-5 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/50">
            <div className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            </div>
            <span className="font-mono text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">
              System Status:{' '}
              <span className="text-emerald-600 dark:text-emerald-400">
                Operational Ready
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* 🏛️ 2. PROTOCOL DIRECTORY: รายการบริการที่เน้นความชัดเจน */}
      <section className="container mx-auto max-w-7xl px-6">
        {/* Table Header: ปรับ Typography ให้มีความเป็น Institutional มากขึ้น */}
        <div className="mb-10 hidden grid-cols-12 rounded-2xl bg-slate-50 px-10 py-8 font-mono text-[11px] font-black tracking-[0.4em] text-slate-400 uppercase md:grid dark:bg-slate-900">
          <div className="col-span-1">Ref.</div>
          <div className="col-span-5">Protocol Description</div>
          <div className="col-span-4 pl-6">Operational Sector</div>
          <div className="col-span-2 text-right">Access Status</div>
        </div>

        {/* Services List: ปรับความนุ่มนวลของ Row */}
        <div className="space-y-6">
          {allServices.map((service) => (
            <div key={service.id} className="group transition-all duration-500">
              <ServiceListRow
                service={service}
                icon={
                  iconMap[service.iconName] || (
                    <Shield size={20} strokeWidth={1.5} />
                  )
                }
              />
            </div>
          ))}
        </div>
      </section>

      {/* 🏛️ 3. PRICING ARCHITECTURE: ย้ายส่วนราคามาไว้ในส่วนที่เหมาะสม */}
      <section className="mt-48 border-t border-slate-100 bg-slate-50/30 dark:border-slate-800 dark:bg-slate-900/10">
        <PricingSection />
      </section>

      {/* 🏛️ 4. STRATEGIC CTA: ปรับภาพลักษณ์ให้ดูพรีเมียมและมั่นคง */}
      <section className="relative overflow-hidden border-t border-slate-100 bg-slate-950 py-40 text-center text-white dark:border-slate-800">
        {/* Ambient Decorative Grid */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.05]" />
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="relative z-10 container mx-auto px-6">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="inline-flex items-center gap-4 rounded-full border border-blue-500/20 bg-blue-500/5 px-8 py-3 backdrop-blur-sm">
              <ShieldCheck size={18} className="text-blue-500" />
              <span className="font-mono text-[11px] font-black tracking-[0.5em] text-blue-500 uppercase">
                Privacy Protocol Enforced
              </span>
            </div>

            <h2 className="font-sans text-5xl font-black tracking-tighter md:text-7xl">
              ต้องการยุทธศาสตร์ <br />
              <span className="text-4xl text-blue-500 italic md:text-6xl">
                ที่ออกแบบเฉพาะคุณ?
              </span>
            </h2>

            <p className="font-thai mx-auto max-w-2xl text-xl leading-relaxed font-medium text-slate-400">
              เราเข้าใจว่าแต่ละเคสมีความละเอียดอ่อนที่แตกต่างกัน
              ปรึกษาทีมยุทธศาสตร์เพื่อประเมินแผนงานเบื้องต้นภายใต้ข้อตกลงรักษาความลับระดับสูงสุด
            </p>

            <div className="flex flex-col items-center justify-center gap-10 pt-10 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-18 rounded-[1.25rem] bg-blue-600 px-16 text-base font-black tracking-tight text-white shadow-[0_20px_40px_-12px_rgba(37,99,235,0.4)] transition-all duration-500 hover:scale-105 hover:bg-blue-700 active:scale-95 sm:w-auto"
              >
                <Link href="/contact" className="flex items-center gap-4">
                  Initiate Private Consultation <ArrowRight size={20} />
                </Link>
              </Button>
            </div>

            <p className="pt-8 font-mono text-[11px] font-black tracking-[0.6em] text-slate-600 uppercase">
              Authenticated Access Only // Unlink-TH 2026
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
