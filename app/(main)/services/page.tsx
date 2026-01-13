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
 * [STRATEGY: SERVICES DIRECTORY v5.2]
 * - Optimization: ย้าย Icon Map ออกจาก Component Body เพื่อลด Re-render
 * - Design: เพิ่มระบบ Grid Overlay สำหรับ CTA Section เพื่อความลึกทางสายตา
 * - Identity: ปรับภาษาให้มีความเป็นมืออาชีพที่ 'เข้าถึงง่าย' (Approachable Expertise)
 */

export const metadata: Metadata = {
  title: 'รายการบริการ | แก้ไขปัญหาชื่อเสียงและข้อมูลออนไลน์ | UnlinkTH',
  description:
    'รวบรวมโซลูชันการจัดการประวัติออนไลน์ การลบข้อมูลที่ไม่ถูกต้อง และการคุ้มครองความเป็นส่วนตัวที่ทุกคนเข้าถึงได้',
  openGraph: {
    title: 'Professional Service Protocols | UnlinkTH',
    description:
      'จัดการทุกความเสี่ยงด้านชื่อเสียงออนไลน์ด้วยมาตรฐานความปลอดภัยระดับสูง',
    images: ['/images/og-services.jpg'],
  },
}

// 🏛️ Icon Registry: ย้ายมาไว้ด้านนอกเพื่อ Static Optimization
const ICON_REGISTRY: Record<string, React.ReactNode> = {
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
        title="รายการบริการจัดการข้อมูล"
        description="รวมวิธีแก้ปัญหาชื่อเสียงออนไลน์และปกป้องข้อมูลส่วนตัวอย่างเป็นระบบ"
      />

      {/* 🏛️ 1. STRATEGIC HEADER: Universal Accessibility */}
      <section className="container mx-auto mb-32 max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-16 lg:flex-row lg:items-end">
          <SectionHeading
            badge="Service Directory"
            title="Digital Solutions"
            subtitle="จัดการปัญหาชื่อเสียงออนไลน์ให้ถูกต้องและยั่งยืน"
            description="เราช่วยคุณจัดระเบียบข้อมูลบนโลกอินเทอร์เน็ตใหม่ เพื่อให้คุณกลับมามีอำนาจควบคุมชื่อเสียงของตัวเองได้อีกครั้ง ผ่านขั้นตอนที่เป็นมืออาชีพและปลอดภัยที่สุด"
            className="mb-0 max-w-4xl"
            align="left"
          />

          {/* Status Badge: Reassured Operation */}
          <div className="flex items-center gap-5 rounded-[2rem] border border-slate-100 bg-slate-50/50 px-8 py-5 backdrop-blur-md dark:border-slate-800 dark:bg-blue-900/10">
            <div className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            </div>
            <div className="space-y-0.5">
              <span className="block font-mono text-[9px] font-black tracking-[0.3em] text-slate-400 uppercase">
                System Operational
              </span>
              <span className="font-mono text-[11px] font-bold text-emerald-600 uppercase dark:text-emerald-400">
                Ready for Assessment
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 🏛️ 2. PROTOCOL DIRECTORY: Modular Inventory */}
      <section className="container mx-auto max-w-7xl px-6">
        {/* Table Header: Information Partitioning */}
        <div className="mb-8 hidden grid-cols-12 rounded-3xl border border-slate-100 bg-slate-50/50 px-12 py-8 font-mono text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase md:grid dark:border-slate-800 dark:bg-slate-900/40">
          <div className="col-span-1">Ref_ID</div>
          <div className="col-span-5">Operational Protocol</div>
          <div className="col-span-4 border-l border-slate-200 pl-8 dark:border-slate-800">
            Capability Scope
          </div>
          <div className="col-span-2 text-right">Access</div>
        </div>

        {/* Services List Rendering */}
        <div className="space-y-6">
          {allServices.map((service) => (
            <div key={service.id} className="group transition-all duration-500">
              <ServiceListRow
                service={service}
                icon={
                  ICON_REGISTRY[service.iconName] || (
                    <Shield size={20} strokeWidth={1.5} />
                  )
                }
              />
            </div>
          ))}
        </div>
      </section>

      {/* 🏛️ 3. PRICING ARCHITECTURE: Institutional Transparency */}
      <section className="mt-48 border-t border-slate-100 bg-slate-50/30 dark:border-slate-800 dark:bg-slate-900/20">
        <PricingSection />
      </section>

      {/* 🏛️ 4. STRATEGIC CTA: Trusted Engagement */}
      <section className="relative overflow-hidden border-t border-slate-100 bg-slate-950 py-40 text-center text-white dark:border-slate-800">
        {/* Visual Decoration Layers */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.05]" />
        <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="relative z-10 container mx-auto px-6">
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="inline-flex items-center gap-4 rounded-full border border-blue-500/20 bg-blue-500/10 px-8 py-3 backdrop-blur-sm">
              <ShieldCheck size={18} className="text-blue-500" />
              <span className="font-mono text-[10px] font-black tracking-[0.5em] text-blue-400 uppercase">
                100% Confidential Protocol
              </span>
            </div>

            <h2 className="font-sans text-5xl leading-[1.1] font-black tracking-tighter md:text-7xl">
              ต้องการวิธีแก้ปัญหา <br />
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent italic">
                ที่เหมาะกับเคสของคุณ?
              </span>
            </h2>

            <p className="font-thai mx-auto max-w-2xl text-xl leading-relaxed font-medium text-slate-400">
              เราเข้าใจว่าความกังวลของแต่ละคนไม่เหมือนกัน
              ลองคุยกับเราเพื่อหาทางออกที่ดีที่สุดภายใต้มาตรฐานความปลอดภัยที่เข้มงวดที่สุด
            </p>

            <div className="flex flex-col items-center justify-center gap-10 pt-10 sm:flex-row">
              <Button
                asChild
                className="h-20 rounded-[1.5rem] bg-blue-600 px-12 text-[15px] font-black tracking-tight text-white shadow-[0_24px_48px_-12px_rgba(37,99,235,0.5)] transition-all duration-500 hover:scale-105 hover:bg-blue-700 active:scale-95"
              >
                <Link
                  href="/contact"
                  className="flex items-center gap-4 uppercase"
                >
                  เริ่มปรึกษาผู้เชี่ยวชาญฟรี{' '}
                  <ArrowRight size={22} strokeWidth={2.5} />
                </Link>
              </Button>
            </div>

            <div className="flex flex-col items-center gap-4 pt-12">
              <span className="font-mono text-[9px] font-black tracking-[0.6em] text-slate-700 uppercase">
                Authenticated Access Only // Secure Line
              </span>
              <div className="h-10 w-px bg-gradient-to-b from-blue-600/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
