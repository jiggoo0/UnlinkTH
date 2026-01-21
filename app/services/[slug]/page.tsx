// app/services/[slug]/page.tsx

import { notFound } from "next/navigation"
import Link from "next/link"
import { siteConfig } from "@/constants/site-config"
import { servicesData } from "@/constants/services-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  MessageCircle,
  ShieldCheck,
  Fingerprint,
} from "lucide-react"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const service = servicesData.find((s) => s.slug === slug)
  if (!service) return { title: "Protocol Not Found" }

  return {
    title: `${service.title} | Unlink-th Protocol`,
    description: service.shortDescription, // ปรับให้ตรงกับ services-data.ts
  }
}

export default async function SingleServicePage({ params }: Props) {
  const { slug } = await params
  const service = servicesData.find((s) => s.slug === slug)

  if (!service) notFound()

  const lineLink = `https://line.me/ti/p/${siteConfig.contact.lineId.replace("@", "")}`

  return (
    <article className="bg-background relative min-h-screen overflow-hidden py-20 lg:py-32">
      {/* Background Decor */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]">
        <div className="h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <Link
          href="/services"
          className="group text-muted-foreground hover:text-primary mb-12 inline-flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase transition-colors"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Return to Protocols
        </Link>

        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="mb-8 flex items-center gap-4">
              <Badge
                variant="outline"
                className="border-primary/30 bg-primary/5 text-primary px-4 py-1 font-mono text-[10px] tracking-[0.2em] uppercase"
              >
                {service.category} Strategy
              </Badge>
              <div className="flex items-center gap-2 opacity-30">
                <Fingerprint className="h-4 w-4" />
                <span className="font-mono text-[10px] uppercase">
                  ID: {service.id}
                </span>
              </div>
            </div>

            <h1 className="mb-8 text-4xl font-extrabold tracking-tight md:text-7xl">
              {service.title}
            </h1>

            <p className="text-muted-foreground/90 mb-12 text-xl leading-relaxed md:text-2xl">
              {service.shortDescription}
            </p>

            {/* เนื้อหาหลักเชิงเทคนิค */}
            <div className="prose prose-invert border-border/40 text-muted-foreground/80 max-w-none border-t pt-12">
              <h3 className="text-foreground">Technical Approach</h3>
              <p>{service.description}</p>

              <h3 className="text-foreground mt-8">Operational Features</h3>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <ShieldCheck className="text-primary mt-1 h-4 w-4 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="border-primary/20 bg-muted/5 sticky top-24 overflow-hidden rounded-[2rem] border p-8 backdrop-blur-md">
              <div className="bg-primary/10 mb-6 flex h-12 w-12 items-center justify-center rounded-2xl">
                <ShieldCheck className="text-primary h-6 w-6" />
              </div>

              <h3 className="mb-4 text-xl font-bold">
                เริ่มกระบวนการระงับเหตุ
              </h3>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                ระบุ URL
                หรือร่องรอยดิจิทัลที่ต้องการให้ผู้เชี่ยวชาญดำเนินการประเมินความเป็นไปได้เชิงเทคนิค
                (Technical Feasibility)
              </p>

              <Button
                asChild
                size="lg"
                className="h-14 w-full rounded-full bg-[#00B900] font-black text-white shadow-xl shadow-green-500/20 hover:bg-[#00A000]"
              >
                <Link href={lineLink} target="_blank">
                  <MessageCircle className="mr-2 h-6 w-6 fill-current" />
                  ปรึกษาผ่าน LINE OA
                </Link>
              </Button>

              <div className="mt-8 flex items-center justify-center gap-2 opacity-40">
                <div className="bg-primary h-1 w-1 animate-pulse rounded-full" />
                <p className="font-mono text-[10px] font-bold tracking-widest uppercase">
                  Specialist Online
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  )
}
