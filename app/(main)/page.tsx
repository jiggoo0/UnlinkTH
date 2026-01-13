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

// 🏛️ UI Components
import { HeroSection } from '@/components/home/HeroSection'
import { FaqSection } from '@/components/home/FaqSection'
import { ProjectCard } from '@/components/cases/ProjectCard'
import { ServiceListRow } from '@/components/service/ServiceListRow'
import { SectionHeading } from '@/components/shared/section-heading'
import { Button } from '@/components/ui/button'
import { Seo } from '@/components/seo/Seo'

// ✅ Components sanitized with 12px-16px radius logic
import ConfidentialitySeal from '@/components/shared/confidentiality-seal'
import LegalBadge from '@/components/shared/legal-badge'
import ConfidentialityBanner from '@/components/shared/confidentiality-banner'

// 🏛️ Data Layer
import { allProjects } from '@/data/case/all-cases'
import { allServices } from '@/data/services/all-services'
import { WikiService } from '@/lib/wiki'

const iconMap: Record<string, React.ReactNode> = {
  search: <Search size={22} />,
  shield: <Shield size={22} />,
  'user-check': <ShieldCheck size={22} />,
  'eye-off': <EyeOff size={22} />,
  globe: <Globe size={22} />,
  database: <Database size={22} />,
  lock: <Lock size={22} />,
}

export default function HomePage() {
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
    <main className="bg-background flex flex-col gap-0 pb-24 selection:bg-blue-600/10 selection:text-blue-600">
      <Seo
        title="UnlinkTH | บริการลบประวัติเสียและจัดการชื่อเสียงดิจิทัลระดับมืออาชีพ"
        description="ทวงคืนความเป็นส่วนตัวและลบข้อมูลที่ไม่พึงประสงค์บน Google ด้วยกระบวนการทางกฎหมายและเทคนิคขั้นสูง"
      />

      <HeroSection />

      {/* 🏛️ Trust Layer: Legal Validation */}
      <section className="border-y border-slate-100 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/20">
        <LegalBadge />
      </section>

      {/* 🏛️ Operational Tier: Services */}
      <section className="container mx-auto px-6 py-32">
        <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            icon={Zap}
            badge="Operational Tier"
            title="Professional Protocols"
            description="ยุทธวิธีการลบข้อมูลและจัดการผลการค้นหาด้วยเทคนิค De-indexing และ SEO Suppression"
            className="mb-0 max-w-2xl"
          />
          <Button
            asChild
            variant="outline"
            shape="standard" // ✅ 12px radius consistent with design
            className="h-14 px-8 font-bold tracking-[0.2em] uppercase transition-all hover:bg-slate-50 dark:border-slate-800"
          >
            <Link href="/services">
              All Protocols <ArrowUpRight size={14} className="ml-2" />
            </Link>
          </Button>
        </div>

        <div className="divide-slate-100 border-y border-slate-100 dark:divide-slate-800 dark:border-slate-800">
          {featuredServices.map((service) => (
            <ServiceListRow
              key={service.id}
              service={service}
              icon={iconMap[service.iconName] || <Shield size={22} />}
            />
          ))}
        </div>
      </section>

      {/* 🏛️ Confidentiality Layer */}
      <ConfidentialityBanner />

      {/* 🏛️ Success Layer: Evidence & Reports */}
      <section className="relative overflow-hidden border-y border-slate-100 bg-slate-50/50 py-32 dark:border-slate-800 dark:bg-slate-900/30">
        <div className="bg-grid-slate-200/[0.05] pointer-events-none absolute inset-0" />
        <div className="relative z-10 container mx-auto px-6">
          <SectionHeading
            icon={Star}
            badge="Recent Evidence"
            title="Success Stories"
            description="กรณีศึกษาที่ประสบความสำเร็จในการกู้คืนชื่อเสียง (ข้อมูลถูกปกปิดเป็นความลับ)"
            align="center"
          />
          <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button
              asChild
              variant="default"
              size="lg"
              shape="standard"
              className="h-16 px-12"
            >
              <Link href="/cases" className="tracking-widest uppercase">
                Browse Archive <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 🏛️ Security Seal Section */}
      <ConfidentialitySeal />

      {/* 🏛️ Knowledge Hub: Intelligence Wiki */}
      <section className="container mx-auto px-6 py-32">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-slate-50/30 p-10 md:p-20 dark:border-slate-800 dark:bg-slate-900/40">
          <div className="pointer-events-none absolute top-0 right-0 p-10 opacity-[0.03] dark:opacity-[0.07]">
            <BookOpen size={240} />
          </div>

          <div className="relative z-10 mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-blue-600">
                <Terminal size={18} />
                <span className="font-mono text-[10px] font-black tracking-[0.3em] uppercase">
                  Knowledge Terminal
                </span>
              </div>
              <h3 className="font-sans text-4xl font-bold tracking-tighter text-slate-900 dark:text-white">
                Intelligence Hub
              </h3>
              <p className="max-w-md font-medium text-slate-500">
                คลังความรู้เชิงเทคนิคและข้อกฎหมายเกี่ยวกับการจัดการชื่อเสียงดิจิทัล
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              shape="standard"
              className="h-14 border-blue-600/20 px-8 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              <Link href="/wiki" className="tracking-widest uppercase">
                Access Wiki <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {recentWiki.map((article) => (
              <Link
                key={article.id}
                href={`/wiki/${article.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950"
              >
                <div className="space-y-4">
                  <span className="font-mono text-[9px] font-bold tracking-widest text-blue-600/60 uppercase">
                    Ref // {String(article.id).padStart(3, '0')}
                  </span>
                  <h4 className="font-sans text-xl leading-snug font-bold transition-colors group-hover:text-blue-600 dark:text-slate-200">
                    {article.title}
                  </h4>
                </div>
                <div className="mt-8 flex items-center gap-2 text-[10px] font-bold tracking-widest text-slate-400 uppercase transition-colors group-hover:text-blue-600">
                  Analyze Protocol <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection />
    </main>
  )
}
