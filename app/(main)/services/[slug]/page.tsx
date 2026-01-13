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
 * [STRATEGY: UNIVERSAL SERVICE PROTOCOL v5.3]
 * - Fix Lint: ลบการนำเข้า 'cn' ที่ไม่ได้ใช้งาน (Unused Variable)
 * - Optimization: ปรับปรุงโครงสร้าง Async Params สำหรับ Next.js 15
 * - UI/UX: ปรับปรุงส่วน Strategic Outcome ให้รองรับ Dark Mode เต็มรูปแบบ
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
    title: `${service.title} | Protocol ${service.id} | UnlinkTH`,
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      type: 'article',
    },
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

      <main className="min-h-screen bg-white pt-32 pb-32 selection:bg-blue-600/10 dark:bg-slate-950">
        <div className="container mx-auto max-w-7xl px-6">
          {/* 🏛️ 1. NAVIGATION PROTOCOL */}
          <nav className="mb-16">
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 font-mono text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase transition-all hover:text-blue-600"
            >
              <ArrowLeft
                size={14}
                className="transition-transform duration-500 group-hover:-translate-x-2"
              />
              System Services Repository
            </Link>
          </nav>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-20">
            {/* 🏛️ 2. CONTENT CORE */}
            <div className="space-y-20 lg:col-span-8">
              <header className="space-y-10">
                <SectionHeading
                  badge={`OPERATIONAL ID: ${service.id}`}
                  title={service.title}
                  subtitle="Enterprise Reputation Management"
                  description={service.description}
                  align="left"
                  className="mb-0 max-w-4xl"
                />
              </header>

              {/* 🏛️ Strategic Dossier: Capability & Outcome Matrix */}
              <div className="relative overflow-hidden rounded-[3rem] border border-slate-100 bg-white shadow-[0_40px_80px_-16px_rgba(0,0,0,0.08)] dark:border-slate-800 dark:bg-slate-900">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Scope of Execution */}
                  <div className="p-10 lg:p-14">
                    <div className="mb-12 flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/20">
                        <ShieldCheck size={20} />
                      </div>
                      <h4 className="font-mono text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">
                        Capability Scope
                      </h4>
                    </div>

                    <ul className="space-y-7">
                      {service.features.map((feature, index) => (
                        <li
                          key={index}
                          className="group flex items-start gap-4"
                        >
                          <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900/30">
                            <CheckCircle2 size={10} strokeWidth={3} />
                          </div>
                          <span className="font-thai text-[15px] leading-relaxed font-bold text-slate-600 transition-colors group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-slate-100">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Primary Outcome Section */}
                  <div className="relative flex flex-col justify-between overflow-hidden bg-slate-950 p-10 text-white lg:p-14 dark:bg-slate-900/50">
                    <div className="pointer-events-none absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />

                    <div className="relative z-10">
                      <div className="mb-12 flex items-center gap-4">
                        <Activity size={18} className="text-blue-500" />
                        <span className="font-mono text-[10px] font-black tracking-[0.3em] text-blue-500 uppercase">
                          Strategic Outcome
                        </span>
                      </div>
                      <div className="mb-6 font-sans text-5xl leading-[0.9] font-black tracking-tighter text-white uppercase lg:text-7xl">
                        {service.outcome}
                      </div>
                      <p className="font-thai max-w-[240px] text-[14px] leading-relaxed font-bold text-slate-400">
                        ทวงคืนอำนาจการควบคุมชื่อเสียงและข้อมูลออนไลน์ของคุณอย่างยั่งยืน
                      </p>
                    </div>

                    <div className="relative z-10 mt-16 flex items-center gap-3 font-mono text-[9px] font-black tracking-[0.4em] text-slate-600 uppercase">
                      <Zap size={14} className="animate-pulse text-blue-500" />
                      Framework v5.3 Optimized
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 🏛️ 3. CONVERSION HUB: Action Sidebar */}
            <aside className="lg:sticky lg:top-32 lg:col-span-4">
              <div className="rounded-[3rem] border border-slate-100 bg-white p-10 shadow-2xl shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
                <div className="mb-10 flex items-center gap-4 rounded-2xl border border-blue-50 bg-blue-50/30 p-5 dark:border-blue-900/20 dark:bg-blue-900/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                    <Lock size={20} />
                  </div>
                  <div>
                    <span className="block font-mono text-[9px] font-black tracking-[0.2em] text-blue-600/60 uppercase">
                      Privacy Protocol
                    </span>
                    <span className="font-sans text-[12px] font-black text-slate-900 uppercase dark:text-white">
                      Strict Confidentiality
                    </span>
                  </div>
                </div>

                <h3 className="mb-4 font-sans text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                  เริ่มต้น <br /> การปรึกษา
                </h3>
                <p className="font-thai mb-10 text-[14px] leading-relaxed font-bold text-slate-500 dark:text-slate-400">
                  ประเมินความเป็นไปได้ในระดับเทคนิคและข้อกฎหมายภายใต้การปกปิดอัตลักษณ์อย่างเคร่งครัด
                </p>

                <div className="space-y-4">
                  <Button
                    asChild
                    size="lg"
                    className="h-20 w-full rounded-2xl bg-blue-600 text-[15px] font-black shadow-[0_20px_40px_-12px_rgba(37,99,235,0.4)] transition-all duration-500 hover:scale-[1.02] hover:bg-blue-700 active:scale-[0.98]"
                  >
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-4"
                    >
                      เริ่มปรึกษาผู้เชี่ยวชาญ <ArrowRight size={20} />
                    </Link>
                  </Button>

                  <div className="flex items-center gap-4 py-4">
                    <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                    <span className="font-mono text-[9px] font-black tracking-widest text-slate-300 uppercase">
                      OR
                    </span>
                    <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                  </div>

                  <Link
                    href="/wiki"
                    className="flex w-full items-center justify-center gap-3 font-mono text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase transition-colors hover:text-blue-600"
                  >
                    Documentation <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  )
}
