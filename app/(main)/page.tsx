/** @format */

'use client'

import * as React from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Shield,
  Zap,
  Star,
  Search,
  ShieldCheck,
  EyeOff,
  Globe,
  Database,
  Lock,
} from 'lucide-react'

// UI / Sections
import { HeroSection } from '@/components/home/HeroSection'
import { FaqSection } from '@/components/home/FaqSection'
import { TrustBadge } from '@/components/shared/trust-badge'
import { ProjectCard } from '@/components/cases/ProjectCard'
import { ServiceListRow } from '@/components/service/ServiceListRow'
import { SectionHeading } from '@/components/shared/section-heading'
import { Button } from '@/components/ui/button'
import { Seo } from '@/components/seo/Seo'

// Data
import { allProjects } from '@/data/case/all-cases'
import { allServices } from '@/data/services/all-services'

/* -----------------------------------------
   ICON REGISTRY
   แมปชื่อ iconName จาก Data ให้เป็น Lucide Components
----------------------------------------- */
const iconMap: Record<string, React.ReactNode> = {
  search: <Search size={22} strokeWidth={1.5} />,
  shield: <Shield size={22} strokeWidth={1.5} />,
  'user-check': <ShieldCheck size={22} strokeWidth={1.5} />,
  'eye-off': <EyeOff size={22} strokeWidth={1.5} />,
  globe: <Globe size={22} strokeWidth={1.5} />,
  database: <Database size={22} strokeWidth={1.5} />,
  lock: <Lock size={22} strokeWidth={1.5} />,
}

export default function HomePage() {
  /* -----------------------------------------
     FEATURED DATA (Memoized)
  ----------------------------------------- */
  const featuredProjects = React.useMemo(
    () => allProjects.filter((p) => p.status === 'Completed').slice(0, 2),
    [],
  )

  const featuredServices = React.useMemo(
    () => allServices.filter((s) => s.popular).slice(0, 3),
    [],
  )

  return (
    <main className="flex flex-col gap-24 bg-white pb-24 transition-colors duration-500 selection:bg-blue-600/10 dark:bg-slate-950">
      {/* ================= SEO ================= */}
      <Seo
        title="UnlinkTH | Professional Online Reputation Management"
        description="บริการจัดการชื่อเสียงและปกป้องความเป็นส่วนตัวออนไลน์ระดับพรีเมียม ด้วยมาตรฐานความปลอดภัยสูงสุด"
        keywords={[
          'UnlinkTH',
          'Reputation Management',
          'Privacy Protection',
          'ลบข้อมูลส่วนตัว',
        ]}
      />

      {/* ================= HERO ================= */}
      <HeroSection />

      {/* ================= TRUST SIGNALS ================= */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-12 border-y border-slate-100 py-20 dark:border-slate-900">
          <SectionHeading
            badge="Security Compliance"
            title="Professional Standards"
            align="center"
            className="mb-0"
          />
          <div className="flex w-full justify-center opacity-40 grayscale transition-all duration-700 hover:opacity-100 hover:grayscale-0 dark:invert">
            <TrustBadge
              variant="horizontal"
              className="scale-90 border-none md:scale-110"
            />
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="container mx-auto px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <SectionHeading
            icon={Zap}
            badge="Capabilities"
            title="Service Protocol"
            description="กระบวนการทางเทคนิคเพื่อปกป้องและฟื้นฟูตัวตนดิจิทัลของคุณ"
            className="mb-0"
          />

          <Link
            href="/services"
            className="group inline-flex items-center gap-4 border-b-2 border-slate-100 pb-2 text-[11px] font-black tracking-[0.3em] text-slate-400 uppercase transition-all hover:border-blue-600 hover:text-blue-600 dark:border-slate-800"
          >
            All Protocols
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

        {/* ✅ FIXED: Removed unused 'index' prop to match ServiceListRow's updated Props */}
        <div className="border-t border-slate-950 dark:border-slate-100">
          {featuredServices.map((service) => (
            <ServiceListRow
              key={service.id}
              service={service}
              icon={iconMap[service.iconName] ?? <Shield size={22} />}
            />
          ))}
        </div>
      </section>

      {/* ================= CASE STUDIES ================= */}
      <section className="relative overflow-hidden border-y border-slate-100 bg-slate-50 py-32 dark:border-slate-900 dark:bg-slate-900/30">
        <div className="pointer-events-none absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-center opacity-[0.03] dark:invert" />

        <div className="relative z-10 container mx-auto px-6">
          <SectionHeading
            icon={Star}
            badge="Proven Performance"
            title="Selected Cases"
            description="ผลลัพธ์จากการบริหารจัดการภายใต้นโยบายรักษาความลับสูงสุด"
            align="center"
          />

          <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-20 text-center">
            <Button
              asChild
              variant="outline"
              className="group h-16 rounded-none border-slate-950 bg-white px-12 transition-all duration-500 hover:bg-slate-950 hover:text-white dark:border-slate-700 dark:bg-slate-950 dark:hover:bg-white dark:hover:text-slate-950"
            >
              <Link
                href="/cases"
                className="flex items-center gap-4 text-[10px] font-black tracking-[0.3em] uppercase"
              >
                Explore Success Stories
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-2"
                />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <FaqSection />

      {/* ================= FINAL CALL TO ACTION ================= */}
      <section className="container mx-auto mb-20 px-6">
        <div className="group relative flex flex-col items-center justify-between gap-16 overflow-hidden bg-slate-950 p-12 shadow-2xl md:p-24 lg:flex-row">
          <div className="relative z-10 max-w-2xl space-y-12 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/10 px-6 py-2.5 text-[10px] font-bold tracking-[0.3em] text-blue-400 uppercase">
              <ShieldCheck size={14} className="animate-pulse" />
              Operational Confidentiality Guaranteed
            </div>

            <h2 className="text-6xl leading-[0.85] font-black tracking-tighter text-white uppercase md:text-8xl">
              Reclaim Your <br />
              <span className="font-light text-blue-600 italic">
                Digital Identity
              </span>
            </h2>

            <p className="font-thai max-w-xl text-lg leading-relaxed text-slate-400">
              คืนอำนาจการควบคุมข้อมูลส่วนบุคคลและชื่อเสียงออนไลน์ให้กลับมาอยู่ในมือคุณ
              เริ่มปรึกษาผู้เชี่ยวชาญแบบส่วนตัวได้ตั้งแต่วันนี้
            </p>
          </div>

          <div className="relative z-10 flex w-full flex-col items-center gap-8 lg:w-auto">
            <Button
              asChild
              className="h-24 w-full rounded-none bg-blue-600 px-16 text-[13px] font-black tracking-[0.3em] text-white uppercase shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] transition-all duration-700 hover:bg-white hover:text-slate-950 lg:w-auto"
            >
              <Link
                href="/contact"
                className="flex items-center justify-center gap-4"
              >
                Secure Consultation
                <ArrowRight size={20} />
              </Link>
            </Button>
            <div className="flex items-center gap-4 opacity-50">
              <div className="h-1.5 w-1.5 animate-ping rounded-full bg-blue-500" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">
                Agents online: Response in &lt; 24h
              </span>
            </div>
          </div>

          <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-blue-600/10 to-transparent" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-blue-600/5 blur-[120px]" />
        </div>
      </section>
    </main>
  )
}
