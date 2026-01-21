import { notFound } from "next/navigation"
import Link from "next/link"
import { Metadata } from "next"
import { siteConfig } from "@/constants/site-config"
import { servicesData } from "@/constants/services-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  MessageCircle,
  ShieldCheck,
  Fingerprint,
  Activity,
  Terminal,
  CircleDollarSign,
  ChevronRight,
} from "lucide-react"

interface Props {
  params: Promise<{ slug: string }>
}

/**
 * generateMetadata:
 * ดึงข้อมูล Metadata เฉพาะทางเพื่อเพิ่มประสิทธิภาพ SEO (Search Intent Optimized)
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = servicesData.find((s) => s.slug === slug)

  if (!service) return { title: "Protocol Not Found" }

  const pageTitle = `${service.title} | ${siteConfig.name} Protocol`
  const pageDesc = service.metadata?.description || service.shortDescription

  return {
    title: pageTitle,
    description: pageDesc,
    keywords: service.metadata?.keywords,
    openGraph: {
      title: service.metadata?.title || pageTitle,
      description: pageDesc,
      url: `${siteConfig.url}/services/${slug}`,
      siteName: siteConfig.name,
      locale: "th_TH",
      type: "article",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  }
}

/**
 * SingleServicePage:
 * หน้าแสดงรายละเอียดบริการรายบุคคล ออกแบบในสไตล์ Technical Specialist
 */
export default async function SingleServicePage({ params }: Props) {
  // 1. Resolve Params (Next.js 15 Standard)
  const { slug } = await params

  // 2. Data Lookup
  const service = servicesData.find((s) => s.slug === slug)
  if (!service) notFound()

  return (
    <article className="bg-background relative min-h-screen overflow-hidden py-20 lg:py-32">
      {/* 01: HUD Decoration Layer */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        aria-hidden="true"
      >
        <div className="h-full w-full bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Navigation Breadcrumb */}
        <Link
          href="/services"
          className="group text-muted-foreground hover:text-primary mb-12 inline-flex items-center gap-2 font-mono text-[10px] font-bold tracking-[0.2em] uppercase transition-colors"
        >
          <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
          Return to Operational Protocols
        </Link>

        <div className="grid gap-16 lg:grid-cols-12">
          {/* 02: Analysis Content (Technical Specification) */}
          <div className="lg:col-span-8">
            <header className="mb-12">
              <div className="mb-8 flex flex-wrap items-center gap-4">
                <Badge
                  variant="outline"
                  className="border-primary/30 bg-primary/5 text-primary px-4 py-1 font-mono text-[10px] tracking-[0.2em] uppercase"
                >
                  {service.category} Strategy
                </Badge>
                <div className="flex items-center gap-2 opacity-30">
                  <Fingerprint className="text-primary h-4 w-4" />
                  <span className="font-mono text-[9px] font-bold tracking-tighter uppercase italic">
                    Ref Protocol: {service.id}
                  </span>
                </div>
              </div>

              <h1 className="text-foreground mb-8 text-4xl leading-tight font-extrabold tracking-tighter md:text-7xl lg:text-8xl">
                {service.title}
              </h1>

              <p className="text-muted-foreground/90 max-w-3xl text-xl leading-relaxed font-medium md:text-2xl">
                {service.shortDescription}
              </p>
            </header>

            {/* Technical Detail Section */}
            <section className="prose prose-invert border-border/40 text-muted-foreground/80 max-w-none border-t pt-12">
              <div className="text-foreground mb-10 flex items-center gap-3">
                <Terminal className="text-primary h-5 w-5" />
                <h2 className="m-0 text-xl font-bold tracking-tight">
                  Technical Analysis & Approach
                </h2>
              </div>

              <div className="mb-12 text-lg leading-loose font-medium">
                {service.description}
              </div>

              <div className="text-foreground mb-8 flex items-center gap-3">
                <Activity className="text-primary h-5 w-5" />
                <h3 className="m-0 text-lg font-bold tracking-tight">
                  Operational Features & Capabilities
                </h3>
              </div>

              <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2">
                {service.features.map((feature, i) => (
                  <li
                    key={`${service.id}-feature-${i}`}
                    className="border-border/40 bg-muted/5 hover:border-primary/20 hover:bg-muted/10 flex items-start gap-3 rounded-2xl border p-5 transition-all"
                  >
                    <ShieldCheck className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                    <span className="text-sm leading-snug font-semibold">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* 03: Tactical Sidebar (Liaison & Investment Overview) */}
          <aside className="lg:col-span-4">
            <div className="border-primary/20 bg-muted/10 sticky top-24 overflow-hidden rounded-[3rem] border p-10 backdrop-blur-md">
              <div
                className="absolute -top-8 -right-8 opacity-[0.03]"
                aria-hidden="true"
              >
                <ShieldCheck className="text-primary h-40 w-40" />
              </div>

              <div className="bg-primary/10 relative z-10 mb-8 flex h-12 w-12 items-center justify-center rounded-2xl">
                <CircleDollarSign className="text-primary h-6 w-6" />
              </div>

              <h3 className="relative z-10 mb-4 text-2xl font-bold tracking-tight">
                ประเมินงบประมาณการระงับเหตุ
              </h3>

              {/* Pricing Matrix Integration */}
              {service.priceInfo && (
                <div className="border-primary/10 bg-primary/5 relative z-10 mb-8 space-y-4 rounded-[2rem] border p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground font-mono text-[10px] font-bold tracking-[0.2em] uppercase">
                      Service Model
                    </span>
                    <Badge className="bg-primary/10 text-primary border-none px-3 py-1 text-[9px] font-black tracking-tighter uppercase">
                      {service.priceInfo.model}
                    </Badge>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-muted-foreground mb-1 text-xs font-bold tracking-widest uppercase">
                      Estimated Starting At
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-foreground text-4xl font-black">
                        ฿{service.priceInfo.startingAt}
                      </span>
                      <span className="text-muted-foreground text-[10px] font-bold uppercase">
                        {service.priceInfo.unit}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <p className="text-muted-foreground/90 relative z-10 mb-10 text-sm leading-relaxed font-medium">
                ระบุ URL หรือร่องรอยดิจิทัลที่คุณกังวลเพื่อให้ Specialist
                ดำเนินการทำ Technical Feasibility Audit
                ภายใต้นโยบายรักษาความลับสูงสุด (NDA Policy)
              </p>

              <Button
                asChild
                size="lg"
                className="relative z-10 h-16 w-full rounded-full bg-[#00B900] text-sm font-black text-white shadow-xl shadow-green-500/20 transition-all hover:scale-[1.02] hover:bg-[#00A000]"
              >
                <Link
                  href={siteConfig.contact.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-3 h-6 w-6 fill-current" />
                  INITIATE PROTOCOL
                </Link>
              </Button>

              <div className="mt-10 flex flex-col items-center gap-4 opacity-40">
                <div className="flex items-center gap-2">
                  <div className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full" />
                  <p className="text-foreground font-mono text-[9px] font-bold tracking-[0.4em] uppercase">
                    Secure Channel Active
                  </p>
                </div>
                <div className="via-primary/40 h-[1px] w-full bg-gradient-to-r from-transparent to-transparent" />
                <div className="flex items-center gap-2">
                  <ChevronRight className="h-3 w-3" />
                  <p className="text-muted-foreground text-[8px] font-bold tracking-[0.2em] uppercase">
                    Confidentiality Guaranteed
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  )
}
