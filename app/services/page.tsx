import type { Metadata } from "next"
import { servicesData } from "@/constants/services-data"
import { ServiceCard } from "@/components/shared/ServiceCard"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck, DatabaseZap, Fingerprint, Activity } from "lucide-react"

export const metadata: Metadata = {
  title: "Services | การจัดการข้อมูลดิจิทัลเฉพาะทาง",
  description:
    "สำรวจบริการจัดการชื่อเสียงออนไลน์ ลบลิงก์ Google และการใช้สิทธิ PDPA เพื่อความปลอดภัยในประวัติออนไลน์ของคุณ",
}

export default function ServicesPage() {
  return (
    <div className="relative flex w-full flex-col pb-32">
      {/* 01: Strategy Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 lg:pt-56 lg:pb-32">
        {/* Decorative Grid Background */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <Badge
            variant="outline"
            className="border-primary/30 bg-primary/5 text-primary mb-6 px-4 py-1.5 font-mono text-[10px] tracking-[0.2em] uppercase"
          >
            Operational Protocols
          </Badge>
          <h1 className="mb-8 text-5xl font-extrabold tracking-tighter md:text-7xl lg:text-8xl">
            แนวทางการจัดการ <br />
            <span className="text-muted-foreground font-light italic">
              ข้อมูลออนไลน์เฉพาะทาง
            </span>
          </h1>
          <p className="text-muted-foreground/80 mx-auto max-w-3xl text-lg leading-relaxed md:text-xl">
            ผสมผสานเทคนิคทางวิศวกรรมข้อมูล{" "}
            <span className="text-foreground font-bold">
              (Technical De-indexing)
            </span>
            เข้ากับกรอบกฎหมายดิจิทัล
            เพื่อให้คุณสามารถเริ่มต้นใหม่ในโลกออนไลน์ได้อย่างปลอดภัยและมั่นใจ
          </p>

          <div className="mt-12 flex items-center justify-center gap-6 opacity-40">
            <div className="flex items-center gap-2">
              <Fingerprint className="text-primary h-4 w-4" />
              <span className="font-mono text-[9px] font-bold tracking-widest uppercase">
                Protocol Verified
              </span>
            </div>
            <div className="bg-border h-4 w-px" />
            <div className="flex items-center gap-2">
              <Activity className="text-primary h-4 w-4 animate-pulse" />
              <span className="font-mono text-[9px] font-bold tracking-widest uppercase">
                System Active
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 02: Services Matrix Grid */}

      <section className="relative z-20 container mx-auto -mt-16 px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* 03: Technical Integrity Banner */}
      <section className="container mx-auto mt-32 px-6">
        <div className="border-primary/20 bg-muted/5 relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border p-8 backdrop-blur-md md:p-12 lg:p-16">
          {/* Subtle Watermark */}
          <ShieldCheck className="text-primary absolute -top-8 -right-8 h-48 w-48 opacity-[0.03]" />

          <div className="relative z-10 flex flex-col items-center gap-10 md:flex-row">
            <div className="bg-primary/10 flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl shadow-[0_0_30px_rgba(var(--color-primary),0.1)]">
              <DatabaseZap className="text-primary h-10 w-10" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-foreground mb-4 text-2xl font-bold tracking-tight md:text-3xl">
                มาตรฐาน Technical Diagnosis
              </h3>
              <p className="text-muted-foreground/80 text-base leading-relaxed">
                เราประเมินเคสตามความเป็นจริงทางเทคนิคก่อนเริ่มงานเสมอ
                <span className="text-primary mt-4 block font-bold italic">
                  * หากวิเคราะห์แล้วไม่สามารถดำเนินการได้
                  เราจะแจ้งให้ทราบทันทีโดยไม่มีค่าใช้จ่าย
                </span>
                เพื่อรักษามาตรฐานความโปร่งใสและจริยธรรมสูงสุดของผู้เชี่ยวชาญ
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
