/** @format */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  Clock,
  BarChart3,
  ShieldCheck,
  Target,
  Zap,
  Activity,
} from 'lucide-react'
import { getProjectBySlug, allProjects } from '@/data/case/all-cases'
import { ServiceStatus } from '@/components/cases/ServiceStatus'
import { Seo } from '@/components/seo/Seo'
import { BeforeAfterSlider } from '@/components/shared/before-after-slider'

/**
 * [STRATEGY: TACTICAL DOSSIER v5.0]
 * - Fix: Removed unused 'CheckCircle2' to resolve Lint warning
 * - Design: ปรับจากความแข็งของ Grid เป็น Dossier Layout (แบบแฟ้มรายงาน)
 * - UX: เน้นการเล่าเรื่องผ่าน Operational Protocol และ Visual Evidence
 */

interface CasePageProps {
  params: Promise<{ slug: string }>
}

type ProjectStatus = 'Completed' | 'In Progress' | 'Pending'

export async function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: CasePageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: 'Not Found | UnlinkTH' }

  return {
    title: `${project.title} | Tactical Briefing | UnlinkTH`,
    description: project.description.substring(0, 160),
  }
}

export default async function ProjectDetailPage({ params }: CasePageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  return (
    <>
      <Seo
        title={project.title}
        description={project.description}
        article={true}
      />
      <main className="min-h-screen bg-white pt-32 pb-24 selection:bg-blue-600/10 dark:bg-slate-950">
        <div className="container mx-auto max-w-6xl px-6">
          {/* 🏛️ 1. NAVIGATION: พรีเมียมมินิมอล */}
          <nav className="mb-12">
            <Link
              href="/cases"
              className="group inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase transition-all hover:text-blue-600"
            >
              <ArrowLeft
                size={14}
                className="transition-transform duration-500 group-hover:-translate-x-2"
              />
              Back to Tactical Archives
            </Link>
          </nav>

          {/* 🏛️ 2. DOSSIER HEADER: พลิกดีไซน์ให้ดูเป็นทางการระดับสถาบัน */}
          <header className="relative mb-20 space-y-8">
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-[10px] font-black tracking-widest text-blue-700 uppercase dark:border-blue-800 dark:bg-blue-900/20">
                <ShieldCheck size={12} className="text-blue-600" />
                {project.category}
              </span>
              <ServiceStatus status={project.status as ProjectStatus} />
              <div className="h-1 w-1 rounded-full bg-slate-300" />
              <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                ID: UNL-{project.id}
              </span>
            </div>

            <h1 className="font-sans text-4xl leading-[0.95] font-black tracking-tighter text-slate-900 md:text-7xl lg:max-w-4xl dark:text-white">
              {project.title}
            </h1>
          </header>

          {/* 🏛️ 3. VISUAL EVIDENCE: ปรับ Slider ให้เข้ากับ Identity ใหม่ */}
          <section className="group relative mb-24">
            <div className="absolute -inset-4 rounded-[3.5rem] bg-blue-500/5 opacity-0 blur-3xl transition-opacity duration-1000 group-hover:opacity-100" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white shadow-2xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
              <BeforeAfterSlider
                beforeImg={
                  project.image || '/images/projects/case-financial.jpg'
                }
                afterImg={
                  project.image || '/images/projects/case-financial.jpg'
                }
                className="aspect-video w-full md:aspect-[21/9]"
              />
            </div>
          </section>

          {/* 🏛️ 4. KEY METRICS: ข้อมูลเชิงตัวเลขที่ชัดเจน */}
          <div className="mb-24 grid gap-8 md:grid-cols-3">
            <div className="flex flex-col justify-between rounded-[2rem] border border-slate-100 bg-slate-50/50 p-10 dark:border-slate-800 dark:bg-slate-900/50">
              <div className="space-y-4">
                <span className="flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">
                  <Clock size={14} className="text-blue-600" />
                  Operational Timeline
                </span>
                <p className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                  {project.duration}
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[2rem] bg-slate-900 p-10 text-white md:col-span-2">
              <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <span className="mb-6 flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-blue-500 uppercase">
                  <Target size={14} /> Strategic Resolved Outcome
                </span>
                <p className="font-thai text-2xl leading-relaxed font-bold tracking-tight md:text-3xl">
                  &quot;{project.outcome}&quot;
                </p>
                <div className="mt-8 flex items-center gap-2 text-[9px] font-black tracking-[0.2em] text-slate-500 uppercase">
                  <Zap size={12} className="text-blue-600" /> Verified by Unlink
                  Intelligence
                </div>
              </div>
            </div>
          </div>

          {/* 🏛️ 5. OPERATIONAL BREAKDOWN: การแยกส่วนเนื้อหาแบบ Asymmetric */}
          <div className="grid gap-20 lg:grid-cols-12">
            {/* Sidebar: Context */}
            <aside className="space-y-12 lg:col-span-5">
              <div className="space-y-8">
                <h2 className="flex items-center gap-4 text-[11px] font-black tracking-[0.4em] text-slate-900 uppercase dark:text-white">
                  <Activity size={18} className="text-blue-600" /> Case Context
                </h2>
                <div className="font-thai border-l-2 border-slate-100 py-2 pl-10 text-xl leading-relaxed text-slate-600 dark:border-slate-800 dark:text-slate-400">
                  {project.description}
                </div>
              </div>

              {/* Security Advisory */}
              <div className="rounded-[2rem] border border-dashed border-blue-100 bg-blue-50/50 p-8 dark:border-blue-900/30 dark:bg-blue-900/10">
                <p className="font-thai text-[13px] leading-relaxed font-bold text-blue-800 dark:text-blue-400">
                  * หมายเหตุ: ข้อมูลตัวตนและองค์กรถูกดัดแปลงภายใต้นโยบาย Privacy
                  First เพื่อปกป้องสิทธิส่วนบุคคลและความลับสูงสุดของเจ้าของเคส
                </p>
              </div>
            </aside>

            {/* Main: Protocol Steps */}
            <section className="space-y-12 lg:col-span-7">
              <h2 className="flex items-center gap-4 text-[11px] font-black tracking-[0.4em] text-slate-900 uppercase dark:text-white">
                <BarChart3 size={20} className="text-blue-600" /> Operational
                Protocol
              </h2>

              <div className="space-y-4">
                {project.steps.map((step, i) => (
                  <div
                    key={i}
                    className="group relative flex items-start gap-8 rounded-3xl p-8 transition-all duration-500 hover:bg-slate-50 dark:hover:bg-slate-900/50"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-900 font-mono text-sm font-black text-white transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-600">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <p className="font-thai pt-2 text-lg leading-relaxed text-slate-500 transition-colors duration-500 group-hover:text-slate-900 dark:group-hover:text-slate-200">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
