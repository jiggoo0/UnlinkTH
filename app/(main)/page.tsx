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
  BookOpen,
  Terminal,
} from 'lucide-react'

// 🏛️ UI Components: Integrated Architecture
import { HeroSection } from '@/components/home/HeroSection'
import { FaqSection } from '@/components/home/FaqSection'
import { ProjectCard } from '@/components/cases/ProjectCard'
import { ServiceListRow } from '@/components/service/ServiceListRow'
import { SectionHeading } from '@/components/shared/section-heading'
import { Button } from '@/components/ui/button'
import { Seo } from '@/components/seo/Seo'

// ✅ Specialized Shared Components (Institutional v5.0)
import ConfidentialitySeal from '@/components/shared/confidentiality-seal'
import LegalBadge from '@/components/shared/legal-badge'
import ConfidentialityBanner from '@/components/shared/confidentiality-banner'

// 🏛️ Data Layer & Services
import { allProjects } from '@/data/case/all-cases'
import { allServices } from '@/data/services/all-services'
import { WikiService } from '@/lib/wiki'

/**
 * [STRATEGY: INSTITUTIONAL HUB v5.2]
 * - UX: ใช้ Dynamic filtering สำหรับ Featured content เพื่อประสิทธิภาพสูงสุด
 * - Design: ปรับระบบ Radius ให้คงที่ (12px - 16px) เพื่อความเป็นระเบียบ (Visual Logic)
 * - Security: แสดงผลข้อมูลกรณีศึกษาภายใต้ "Strict Confidentiality Mask"
 */

const ICON_REGISTRY: Record<string, React.ReactNode> = {
  search: <Search size={22} strokeWidth={1.5} />,
  shield: <Shield size={22} strokeWidth={1.5} />,
  'user-check': <ShieldCheck size={22} strokeWidth={1.5} />,
  'eye-off': <EyeOff size={22} strokeWidth={1.5} />,
  globe: <Globe size={22} strokeWidth={1.5} />,
  database: <Database size={22} strokeWidth={1.5} />,
  lock: <Lock size={22} strokeWidth={1.5} />,
}

export default function HomePage() {
  // 🏛️ Data Memorization: ป้องกันการประมวลผลซ้ำในทุก Render cycle
  const featuredProjects = React.useMemo(
    () =>
      (allProjects || []).filter((p) => p.status === 'Completed').slice(0, 2),
    [],
  )

  const featuredServices = React.useMemo(
    () => (allServices || []).filter((s) => s.popular).slice(0, 4),
    [],
  )

  const recentWiki = React.useMemo(
    () => (WikiService?.getAllArticles?.() || []).slice(0, 3),
    [],
  )

  return (
    <main className="flex flex-col gap-0 bg-white pb-24 selection:bg-blue-600/10 selection:text-blue-600 dark:bg-slate-950">
      <Seo
        title="UnlinkTH | บริการลบประวัติเสียและจัดการชื่อเสียงดิจิทัลระดับมืออาชีพ"
        description="ทวงคืนความเป็นส่วนตัวและลบข้อมูลที่ไม่พึงประสงค์บน Google ด้วยกระบวนการทางกฎหมายและเทคนิคขั้นสูง"
      />

      {/* 🚀 1. HERO LAYER: Strategic Entry */}
      <HeroSection />

      {/* 🛡️ 2. TRUST LAYER: Institutional Validation */}
      <section className="border-y border-slate-100 bg-slate-50/50 dark:border-slate-800/50 dark:bg-slate-900/20">
        <LegalBadge />
      </section>

      {/* 🛠️ 3. OPERATIONAL TIER: Featured Services */}
      <section className="container mx-auto px-6 py-32">
        <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            icon={Zap}
            badge="Operational Tier"
            title="Professional Protocols"
            description="ยุทธวิธีการลบข้อมูลและจัดการผลการค้นหาด้วยเทคนิค De-indexing และ SEO Suppression ขั้นสูง"
            className="mb-0 max-w-2xl"
          />
          <Button
            asChild
            variant="outline"
            className="h-14 rounded-2xl px-8 font-mono text-[11px] font-black tracking-[0.2em] uppercase transition-all hover:bg-slate-50 dark:border-slate-800"
          >
            <Link href="/services">
              All Protocols <ArrowUpRight size={14} className="ml-2" />
            </Link>
          </Button>
        </div>

        <div className="divide-y divide-slate-100 border-y border-slate-100 dark:divide-slate-800 dark:border-slate-800">
          {featuredServices.map((service) => (
            <ServiceListRow
              key={service.id}
              service={service}
              icon={ICON_REGISTRY[service.iconName] || <Shield size={22} />}
            />
          ))}
        </div>
      </section>

      {/* 📢 4. CONFIDENTIALITY BANNER: Strategic Reassurance */}
      <ConfidentialityBanner />

      {/* 🏆 5. EVIDENCE LAYER: Verified Success */}
      <section className="relative overflow-hidden border-y border-slate-100 bg-slate-50/50 py-32 dark:border-slate-800/50 dark:bg-slate-900/30">
        {/* Background Grid Accent */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />

        <div className="relative z-10 container mx-auto px-6">
          <SectionHeading
            icon={Star}
            badge="Recent Evidence"
            title="Success Stories"
            description="กรณีศึกษาที่ประสบความสำเร็จในการกู้คืนชื่อเสียงดิจิทัล (ข้อมูลอัตลักษณ์ถูกปกปิดเพื่อความปลอดภัย)"
            align="center"
          />
          <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="mt-20 text-center">
            <Button
              asChild
              className="h-18 rounded-[1.25rem] bg-slate-950 px-14 text-white shadow-2xl transition-all duration-500 hover:scale-105 dark:bg-white dark:text-slate-950"
            >
              <Link
                href="/cases"
                className="font-mono text-[12px] font-black tracking-[0.3em] uppercase"
              >
                Browse Archive <ArrowRight size={18} className="ml-3" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 🛡️ 6. SECURITY SEAL: The Ultimate Trust Symbol */}
      <ConfidentialitySeal />

      {/* 📚 7. KNOWLEDGE HUB: Intelligence Wiki Section */}
      <section className="container mx-auto px-6 py-32">
        <div className="relative overflow-hidden rounded-[3rem] border border-slate-100 bg-slate-50/40 p-10 md:p-20 dark:border-slate-800 dark:bg-slate-900/20">
          {/* Abstract Book Icon Decoration */}
          <div className="pointer-events-none absolute -top-10 -right-10 rotate-12 p-10 opacity-[0.03] dark:opacity-[0.07]">
            <BookOpen size={300} strokeWidth={0.5} />
          </div>

          <div className="relative z-10 mb-16 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-blue-600">
                <Terminal size={18} />
                <span className="font-mono text-[10px] font-black tracking-[0.4em] uppercase">
                  Intelligence Terminal
                </span>
              </div>
              <h3 className="font-sans text-4xl font-black tracking-tighter text-slate-900 md:text-5xl dark:text-white">
                Technical Wiki
              </h3>
              <p className="font-thai max-w-md text-[16px] leading-relaxed font-medium text-slate-500">
                คลังข้อมูลเชิงลึกด้านกฎหมายคุ้มครองข้อมูลส่วนบุคคล (PDPA)
                และกลยุทธ์การจัดการชื่อเสียงออนไลน์
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="h-14 rounded-2xl border-blue-600/20 px-10 font-bold text-blue-600 transition-all hover:bg-blue-600 hover:text-white"
            >
              <Link
                href="/wiki"
                className="font-mono text-[11px] tracking-widest uppercase"
              >
                Access Hub <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {recentWiki.map((article) => (
              <Link
                key={article.id}
                href={`/wiki/${article.slug}`}
                className="group flex h-full flex-col justify-between rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-500 hover:border-blue-600/30 hover:shadow-xl hover:shadow-blue-500/5 dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] font-black tracking-[0.3em] text-blue-600/60 uppercase">
                      REF-{String(article.id).padStart(3, '0')}
                    </span>
                    <div className="h-1.5 w-1.5 rounded-full bg-slate-200 transition-colors group-hover:bg-blue-600 dark:bg-slate-800" />
                  </div>
                  <h4 className="font-sans text-xl leading-snug font-black text-slate-900 transition-colors group-hover:text-blue-600 dark:text-slate-200">
                    {article.title}
                  </h4>
                </div>
                <div className="mt-10 flex items-center justify-between">
                  <span className="font-mono text-[10px] font-black tracking-widest text-slate-400 uppercase transition-colors group-hover:text-blue-600">
                    Read Report
                  </span>
                  <ArrowRight
                    size={16}
                    className="-translate-x-2 text-slate-300 opacity-0 transition-all group-hover:translate-x-0 group-hover:text-blue-600 group-hover:opacity-100"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 💬 8. FAQ LAYER: Direct Engagement */}
      <FaqSection />
    </main>
  )
}
