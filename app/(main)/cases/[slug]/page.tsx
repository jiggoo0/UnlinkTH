/** @format */
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  BarChart3,
  ShieldCheck,
  Calendar,
  Lock,
} from 'lucide-react'
import { getProjectBySlug, allProjects } from '@/data/case/all-cases'
import { ServiceStatus } from '@/components/cases/ServiceStatus'
import { Seo } from '@/components/seo/Seo'
import { BeforeAfterSlider } from '@/components/shared/before-after-slider'

interface CasePageProps {
  params: Promise<{ slug: string }>
}

// ✅ ระบุ Type ให้ตรงกับที่ ServiceStatus คาดหวัง
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
    title: `${project.title} | ผลลัพธ์การดำเนินงาน`,
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
      <main className="min-h-screen bg-white pt-32 pb-24 selection:bg-blue-100 dark:bg-slate-950">
        <div className="container mx-auto max-w-5xl px-6">
          <nav className="mb-12">
            <Link
              href="/cases"
              className="group inline-flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase transition-all hover:text-blue-600"
            >
              <ArrowLeft
                size={14}
                className="transition-transform group-hover:-translate-x-1"
              />
              Back to Protocols
            </Link>
          </nav>

          <header className="mb-16 space-y-8">
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-2 bg-slate-900 px-3 py-1 text-[10px] font-black tracking-widest text-white uppercase dark:bg-blue-600">
                <ShieldCheck size={12} />
                {project.category}
              </span>
              {/* ✅ แก้ไข Type Assertion */}
              <ServiceStatus status={project.status as ProjectStatus} />
            </div>
            <h1 className="font-thai text-4xl font-black tracking-tighter text-slate-900 uppercase md:text-6xl dark:text-white">
              {project.title}
            </h1>
          </header>

          <section className="mb-16">
            <BeforeAfterSlider
              beforeImg="/images/projects/case-financial.jpg"
              afterImg="/images/projects/case-financial.jpg"
              className="shadow-2xl"
            />
          </section>

          <div className="mb-16 grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-3 dark:border-slate-800 dark:bg-slate-800">
            <div className="bg-slate-50 p-8 dark:bg-slate-900">
              <span className="flex items-center gap-2 text-[10px] font-black tracking-widest text-slate-400 uppercase">
                <Clock size={12} /> Timeline
              </span>
              <p className="text-xl font-bold text-slate-900 dark:text-white">
                {project.duration}
              </p>
            </div>
            <div className="border-l border-slate-200 bg-white p-8 md:col-span-2 dark:border-slate-800 dark:bg-slate-950">
              <span className="flex items-center gap-2 text-[10px] font-black tracking-widest text-blue-600 uppercase">
                <CheckCircle2 size={12} /> Resolved Outcome
              </span>
              <p className="font-thai text-xl font-black text-slate-900 dark:text-slate-100">
                {project.outcome}
              </p>
            </div>
          </div>

          <div className="grid gap-16 md:grid-cols-12">
            <aside className="space-y-8 md:col-span-5">
              <div className="space-y-4">
                <h2 className="border-b border-slate-900 pb-4 text-[11px] font-black tracking-widest uppercase dark:border-blue-500 dark:text-white">
                  Contextual Background
                </h2>
                <div className="font-thai text-lg leading-relaxed text-slate-600 italic dark:text-slate-400">
                  {/* ✅ แก้ไข HTML Entity */}
                  &quot;{project.description}&quot;
                </div>
              </div>
            </aside>
            <section className="space-y-8 md:col-span-7">
              {/* ส่วน Operational Steps... */}
              <h2 className="flex items-center gap-3 border-b border-slate-200 pb-4 text-[11px] font-black tracking-widest uppercase dark:border-slate-800 dark:text-white">
                <BarChart3 size={18} className="text-blue-600" /> Operational
                Protocol
              </h2>
              <div className="relative space-y-10 before:absolute before:inset-0 before:left-[15px] before:border-l before:border-slate-100 dark:before:border-slate-800">
                {project.steps.map((step, i) => (
                  <div
                    key={i}
                    className="group relative z-10 flex items-start gap-6"
                  >
                    <div className="flex h-8 w-8 items-center justify-center bg-slate-900 text-[10px] font-black text-white group-hover:bg-blue-600 dark:bg-blue-700">
                      {i + 1}
                    </div>
                    <p className="font-thai pt-1 text-base leading-relaxed text-slate-700 group-hover:text-blue-600 dark:text-slate-300">
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
