/** @format */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Activity,
  ChevronRight,
  Zap,
} from 'lucide-react'

// Data Layer
import {
  getServiceBySlug,
  getAllServiceSlugs,
} from '@/data/services/service-map'

// UI Components
import { SectionHeading } from '@/components/shared/section-heading'
import { Button } from '@/components/ui/button'
import { Seo } from '@/components/seo/Seo'

/**
 * [STRATEGY: HIGH-CONVERSION SERVICE PROTOCOL v5.0]
 * - Authority: ใช้โครงสร้าง "Strategic Dossier" เพื่อสร้างภาพลักษณ์ผู้เชี่ยวชาญระดับสูง
 * - Conversions: เน้น Sidebar ที่มี "Trust Badges" เพื่อลดแรงต้านทาน (Friction) ก่อนการติดต่อ
 * - Architecture: รองรับ Next.js 15 Async Params และ Optimized Static Generation
 */

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) return { title: 'Service Not Found | UnlinkTH' }

  return {
    title: `${service.title} | Managed Digital Intelligence | UnlinkTH`,
    description: service.description,
  }
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs()
  return slugs.map((slug: string) => ({
    slug: slug,
  }))
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) notFound()

  return (
    <>
      <Seo
        title={service.title}
        description={service.description}
        isService={true}
      />

      <main className="min-h-screen bg-white pt-32 pb-24 selection:bg-blue-600/10 dark:bg-slate-950">
        <div className="container mx-auto max-w-7xl px-6">
          {/* 🏛️ 1. BREADCRUMB: Contextual Anchor */}
          <nav className="mb-16">
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 font-mono text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase transition-all hover:text-blue-600"
            >
              <ArrowLeft
                size={14}
                className="transition-transform group-hover:-translate-x-2"
              />
              Back to Protocol Directory
            </Link>
          </nav>

          <div className="grid grid-cols-1 items-start gap-20 lg:grid-cols-12">
            {/* 🏛️ 2. LEFT: STRATEGIC CONTENT */}
            <div className="space-y-20 lg:col-span-8">
              <header className="space-y-8">
                <SectionHeading
                  badge={`Operational ID: ${service.id}`}
                  title={service.title}
                  subtitle="Managed Digital Intelligence"
                  description={service.description}
                  align="left"
                  className="mb-0 max-w-4xl"
                />
              </header>

              {/* 🏛️ Strategic Dossier: Capability & Outcome */}
              <div className="relative overflow-hidden rounded-[3.5rem] border border-slate-100 bg-white shadow-[0_48px_96px_-24px_rgba(0,0,0,0.06)] dark:border-slate-800 dark:bg-slate-900">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Capabilities List */}
                  <div className="p-12 lg:p-16">
                    <h4 className="mb-12 flex items-center gap-4 font-mono text-[11px] font-black tracking-[0.3em] text-blue-600 uppercase">
                      <ShieldCheck size={22} strokeWidth={1.5} /> Core
                      Capabilities
                    </h4>
                    <ul className="space-y-8">
                      {service.features.map((feature, index) => (
                        <li
                          key={index}
                          className="group flex items-start gap-5"
                        >
                          <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900/30">
                            <CheckCircle2 size={12} />
                          </div>
                          <span className="font-thai text-[16px] leading-relaxed font-medium text-slate-500 transition-colors group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-white">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Strategic Outcome Section: The Result Focus */}
                  <div className="relative flex flex-col justify-between bg-slate-950 p-12 text-white lg:p-16">
                    {/* Ambient Grid Pattern */}
                    <div
                      className="absolute inset-0 opacity-[0.03]"
                      style={{
                        backgroundImage: `url('/images/grid-pattern.svg')`,
                        maskImage:
                          'radial-gradient(circle at center, white, transparent)',
                      }}
                    />

                    <div className="relative z-10">
                      <h4 className="mb-12 flex items-center gap-4 font-mono text-[11px] font-black tracking-[0.3em] text-blue-500 uppercase">
                        <Activity size={22} strokeWidth={1.5} /> Strategic
                        Outcome
                      </h4>
                      <div className="mb-8 font-sans text-5xl leading-none font-black tracking-tighter text-white uppercase lg:text-6xl">
                        {service.outcome}
                      </div>
                      <p className="font-thai max-w-xs text-base leading-relaxed font-bold text-slate-400">
                        เป้าหมายสูงสุดของการดำเนินงานภายใต้กรอบการทำงานที่
                        UnlinkTH ออกแบบเฉพาะคุณ
                      </p>
                    </div>

                    <div className="relative z-10 mt-16 flex items-center gap-3 font-mono text-[10px] font-black tracking-widest text-slate-600 uppercase italic">
                      <Zap size={16} className="text-blue-500" /> Operational
                      Framework v5.0
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 🏛️ 3. RIGHT: SIDEBAR CONVERSION HUB */}
            <aside className="lg:sticky lg:top-32 lg:col-span-4">
              <div className="rounded-[3.5rem] border border-slate-100 bg-white p-12 shadow-[0_48px_96px_-24px_rgba(0,0,0,0.06)] dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-12 flex items-center gap-5 rounded-2xl border border-slate-50 bg-slate-50/50 px-6 py-5 dark:border-slate-800 dark:bg-slate-800/50">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                    <Lock size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] font-black tracking-[0.3em] text-slate-400 uppercase">
                      Privacy Protocol
                    </span>
                    <span className="font-sans text-[11px] font-black tracking-tight text-slate-900 uppercase dark:text-white">
                      Encrypted Handling
                    </span>
                  </div>
                </div>

                <h3 className="mb-6 font-sans text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                  Initiate Private <br /> Inquiry
                </h3>
                <p className="font-thai mb-12 text-[15px] leading-relaxed font-medium text-slate-500 dark:text-slate-400">
                  รับการประเมินวิเคราะห์สิทธิในการจัดการข้อมูลรายบุคคลภายใต้ข้อตกลงรักษาความลับสูงสุด
                  (Strict NDA)
                </p>

                <div className="space-y-5">
                  <Button
                    asChild
                    size="lg"
                    className="h-18 w-full rounded-[1.25rem] bg-blue-600 text-base font-black shadow-[0_20px_40px_-12px_rgba(37,99,235,0.4)] transition-all duration-500 hover:scale-[1.03] active:scale-[0.97]"
                  >
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-4"
                    >
                      Start Consultation <ArrowRight size={20} />
                    </Link>
                  </Button>

                  <div className="flex items-center justify-center gap-5 py-4">
                    <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                    <span className="font-mono text-[10px] font-black tracking-widest text-slate-300 uppercase">
                      Or
                    </span>
                    <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                  </div>

                  <Link
                    href="/wiki"
                    className="flex w-full items-center justify-center gap-3 font-mono text-[11px] font-black tracking-[0.3em] text-slate-400 uppercase transition-colors hover:text-blue-600"
                  >
                    View Intelligence Base <ChevronRight size={14} />
                  </Link>
                </div>
              </div>

              <div className="mt-10 flex items-center justify-center gap-4 opacity-30">
                <ShieldCheck size={18} className="text-blue-600" />
                <span className="font-mono text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase">
                  Authenticated Provider
                </span>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  )
}
