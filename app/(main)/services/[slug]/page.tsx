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
 * [STRATEGY: HIGH-CONVERSION SERVICE PROTOCOL]
 * - Next.js 15 Compliance: ใช้ Async Params สำหรับ Server Component
 * - Static Generation Fix: แก้ไขการส่งค่า slug ให้เป็น String ที่ชัดเจน ป้องกัน [object Object]
 */

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

/* 🏛️ SEO Engine */
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

/* 🏛️ Static Generation Fix: ป้องกัน Error [object Object] */
export async function generateStaticParams() {
  // ดึงค่า slugs มาเป็น string[] (เช่น ['reputation-repair', 'data-removal'])
  const slugs = getAllServiceSlugs()

  // ✅ คืนค่าเป็น Array ของ Object ที่มี property slug เป็น string เท่านั้น
  return slugs.map((slug) => ({
    slug: String(slug),
  }))
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  // ✅ Next.js 15 ต้อง await params ก่อนนำค่ามาใช้
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

      <main className="min-h-screen bg-white pt-32 pb-24 selection:bg-blue-100 dark:bg-slate-950">
        <div className="container mx-auto max-w-6xl px-6">
          {/* Navigation */}
          <nav className="mb-12">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              <ArrowLeft
                size={14}
                className="transition-transform group-hover:-translate-x-2"
              />
              Return to Protocol Directory
            </Link>
          </nav>

          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
            {/* Content Column */}
            <div className="space-y-16 lg:col-span-8">
              <header>
                <SectionHeading
                  badge={`Operational ID: ${service.id}`}
                  title={service.title}
                  subtitle="Managed Digital Intelligence"
                  description={service.description}
                  align="left"
                  className="mb-0"
                />
              </header>

              {/* Capability Card */}
              <div className="overflow-hidden border border-slate-100 shadow-sm dark:border-slate-800">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="border-b border-slate-100 bg-white p-10 md:border-r md:border-b-0 lg:p-12 dark:border-slate-800 dark:bg-slate-900">
                    <h4 className="mb-8 flex items-center gap-3 text-[11px] font-black tracking-[0.2em] text-blue-600 uppercase">
                      <ShieldCheck size={18} strokeWidth={2.5} /> Core
                      Capabilities
                    </h4>
                    <ul className="space-y-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-4">
                          <CheckCircle2
                            size={12}
                            className="mt-1 shrink-0 text-blue-600"
                          />
                          <span className="font-thai text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative flex flex-col justify-between bg-slate-950 p-10 text-white lg:p-12">
                    <div className="relative z-10">
                      <h4 className="mb-8 flex items-center gap-3 text-[11px] font-black tracking-[0.2em] text-blue-400 uppercase">
                        <Activity size={18} strokeWidth={2.5} /> Strategic
                        Outcome
                      </h4>
                      <div className="mb-6 text-4xl font-black tracking-tighter uppercase lg:text-5xl">
                        {service.outcome}
                      </div>
                    </div>
                    <p className="font-thai relative z-10 text-[11px] text-slate-500 italic">
                      *
                      ปฏิบัติการภายใต้กรอบกฎหมายดิจิทัลและมาตรฐานความปลอดภัยสูงสุด
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <aside className="lg:sticky lg:top-32 lg:col-span-4">
              <div className="border-2 border-slate-950 bg-white p-8 shadow-[20px_20px_0px_0px_rgba(0,0,0,0.05)] dark:border-white dark:bg-slate-950">
                <div className="mb-8 flex items-center gap-3 bg-slate-50 px-4 py-3 dark:bg-slate-900">
                  <Lock size={16} className="text-blue-600" />
                  <span className="text-[9px] font-black tracking-[0.2em] uppercase">
                    Encrypted Data Handling
                  </span>
                </div>
                <h3 className="mb-4 text-2xl font-black tracking-tighter uppercase">
                  Initiate Inquiry
                </h3>
                <p className="font-thai mb-10 text-[14px] text-slate-500">
                  รับการวิเคราะห์เคสรายบุคคลภายใต้นโยบายรักษาความลับสูงสุด
                  (Strict NDA)
                </p>
                <Button
                  asChild
                  className="h-16 w-full rounded-none bg-blue-600 text-[11px] font-black tracking-[0.2em] uppercase transition-all hover:bg-slate-900 dark:hover:bg-white dark:hover:text-slate-950"
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-4"
                  >
                    Start Consultation <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  )
}
