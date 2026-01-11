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
  Zap,
  ArrowRight, // ✅ แก้ไข: เพิ่มการ Import ArrowRight เพื่อล้าง Error TS2304
} from 'lucide-react'

// Data Layer
import { allServices } from '@/data/services/all-services'

// Component Architecture
import { ServiceListRow } from '@/components/service/ServiceListRow'
import { PricingSection } from '@/components/service/PricingSection'
import { SectionHeading } from '@/components/shared/section-heading'
import { Seo } from '@/components/seo/Seo'

/**
 * [STRATEGY: SERVICES DIRECTORY v4.0]
 * - Server-side Rendering (SSR): เพื่อดัชนี SEO ที่แม่นยำที่สุด
 * - Industrial Aesthetics: ใช้โครงสร้าง Grid และ Typography ที่เน้นความเด็ดขาด
 * - Trust Flow: เริ่มด้วยความเข้าใจ (Heading) -> แสดงศักยภาพ (List) -> ความชัดเจนของราคา (Pricing)
 */

export const metadata: Metadata = {
  title:
    'Operational Services | กลยุทธ์จัดการชื่อเสียงและข้อมูลดิจิทัล | UnlinkTH',
  description:
    'รวมโซลูชันการจัดการประวัติออนไลน์ การลบลิงก์เสีย และการคุ้มครองความเป็นส่วนตัวระดับองค์กรและบุคคลสำคัญ',
  openGraph: {
    title: 'Professional Service Protocols | UnlinkTH',
    description:
      'จัดการทุกความเสี่ยงด้านชื่อเสียงออนไลน์ด้วยมาตรฐานความปลอดภัยระดับสูง',
    images: ['/images/og-services.jpg'],
  },
}

// 🏛️ Icon Registry (ใช้สำหรับการแสดงผลใน Server Component)
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
    <main className="min-h-screen bg-white pt-32 pb-0 transition-colors duration-500 selection:bg-blue-100 dark:bg-slate-950">
      {/* 🏛️ SEO Component */}
      <Seo
        title="Operational Services"
        description="โซลูชันการจัดการชื่อเสียงออนไลน์และข้อมูลดิจิทัลอย่างเป็นระบบ"
      />

      {/* 🏛️ HEADER: Contextual Framing */}
      <section className="container mx-auto mb-24 max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <SectionHeading
            badge="Solutions & Protocols"
            title="Digital Intelligence Strategy"
            description="เราออกแบบโครงสร้างตัวตนดิจิทัลใหม่ เพื่อให้คุณควบคุมชื่อเสียงและความเป็นส่วนตัวได้อย่างสมบูรณ์ภายใต้มาตรฐานสากล"
            className="mb-0 max-w-3xl"
            align="left"
          />
          <div className="flex items-center gap-3 rounded-sm border border-slate-100 bg-slate-50/50 px-5 py-3 dark:border-slate-800 dark:bg-slate-900/50">
            <Zap size={14} className="animate-pulse text-blue-600" />
            <span className="text-[10px] font-black tracking-[0.2em] text-slate-900 uppercase dark:text-slate-100">
              Active Monitoring
            </span>
          </div>
        </div>
      </section>

      {/* 🏛️ SERVICES LIST: Operational Directory */}
      <section className="container mx-auto max-w-6xl px-6">
        {/* Table Header (Desktop Only) */}
        <div className="mb-6 hidden grid-cols-12 border-b border-slate-900 pb-6 text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase md:grid dark:border-slate-100">
          <div className="col-span-1">ID</div>
          <div className="col-span-5">Service Protocol</div>
          <div className="col-span-4 pl-4">Operational Scope</div>
          <div className="col-span-2 text-right">Details</div>
        </div>

        {/* List Rows - แสดงผลข้อมูลทั้งหมดจาก Data Layer */}
        <div className="divide-y divide-slate-100 border-t border-slate-100 md:border-t-0 dark:divide-slate-900 dark:border-slate-900">
          {allServices.map((service, index) => (
            <ServiceListRow
              key={service.id}
              index={index}
              service={service}
              icon={
                iconMap[service.iconName] || (
                  <Shield size={20} strokeWidth={1.5} />
                )
              }
            />
          ))}
        </div>
      </section>

      {/* 🏛️ PRICING: Transactional Trust */}
      <section className="mt-40 border-t border-slate-100 bg-slate-50/30 dark:border-slate-900 dark:bg-slate-900/10">
        <PricingSection />
      </section>

      {/* 🏛️ FOOTER CALL: Immediate Assistance */}
      <section className="border-t border-slate-100 bg-white py-32 text-center dark:border-slate-900 dark:bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl">
            <p className="mb-6 text-[11px] font-black tracking-[0.5em] text-blue-600 uppercase">
              Operational Consultation
            </p>
            <h2 className="mb-10 text-4xl font-black tracking-tighter text-slate-900 uppercase md:text-5xl dark:text-white">
              ต้องการแผนการจัดการ <br />
              <span className="font-light text-slate-400 italic">
                เฉพาะบุคคล?
              </span>
            </h2>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <a
                href="/contact"
                className="group flex h-16 w-full items-center justify-center gap-4 bg-slate-950 px-12 text-[11px] font-black tracking-[0.2em] text-white uppercase transition-all hover:bg-blue-600 sm:w-auto dark:bg-white dark:text-slate-950 dark:hover:bg-blue-600 dark:hover:text-white"
              >
                Secure Request
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                Privacy Policy Enforced
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
