import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import FaqSection from "@/components/sections/FaqSection"
import ContactCTA from "@/components/sections/ContactCTA"
import {
  FileText,
  ShieldCheck,
  Clock,
  HelpCircle,
  Activity,
  Fingerprint,
} from "lucide-react"

/**
 *
 * Metadata Optimization:
 * ออกแบบมาเพื่อสร้าง Authority และความชัดเจนในบริการ
 */
export const metadata: Metadata = {
  title: "คำถามที่พบบ่อย (FAQ) | ศูนย์ข้อมูลการจัดการดิจิทัล",
  description:
    "รวบรวมข้อสงสัยเกี่ยวกับการลบประวัติออนไลน์ เทคนิคการจัดการ Digital Footprint และมาตรการรักษาความปลอดภัยข้อมูลส่วนบุคคลตามมาตรฐาน UNLINK",
  openGraph: {
    title: "FAQ | UNLINK Digital Fixer",
    description:
      "ไขข้อสงสัยเชิงเทคนิคเกี่ยวกับการจัดการชื่อเสียงและสิทธิในการถูกลืม",
    type: "website",
  },
}

/**
 * FAQ Page - หน้าศูนย์รวมคำถามและระเบียบปฏิบัติการ
 * ยุทธศาสตร์: Clarity -> Quick Guide -> Detailed Q&A -> Conversion
 */
export default function FaqPage() {
  return (
    <div className="bg-background flex w-full flex-col">
      {/* 01: Hero Segment - The Vision of Clarity */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-56 lg:pb-32">
        {/* Tactical Background Decor */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
          aria-hidden="true"
        >
          <div className="h-full w-full bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:32px_32px]" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl">
            <div className="mb-6 flex items-center gap-3">
              <Badge
                variant="outline"
                className="border-primary/30 bg-primary/5 text-primary px-4 py-1.5 font-mono text-[10px] tracking-[0.2em] uppercase"
              >
                Information Center
              </Badge>
              <div className="flex items-center gap-1.5 opacity-30">
                <Activity className="text-primary h-3 w-3 animate-pulse" />
                <span className="font-mono text-[8px] tracking-tighter uppercase">
                  Knowledge Base Active
                </span>
              </div>
            </div>

            <h1 className="text-foreground mb-8 text-5xl leading-tight font-extrabold tracking-tighter md:text-7xl lg:text-8xl">
              ความชัดเจน <br />
              <span className="text-muted-foreground text-4xl font-light italic md:text-6xl lg:text-7xl">
                คือจุดเริ่มต้นของความไว้วางใจ
              </span>
            </h1>

            <p className="text-muted-foreground/80 max-w-2xl text-xl leading-relaxed md:text-2xl">
              เรารวบรวมคำถามสำคัญเชิงเทคนิคและกระบวนการทำงาน
              เพื่อตอบข้อสงสัยที่คุณอาจกังวลใจ ภายใต้มาตรฐาน{" "}
              <span className="text-foreground font-bold italic">
                Confidentiality Protocol
              </span>{" "}
              ระดับสูงสุด
            </p>
          </div>
        </div>

        {/* Floating Decorative Icon */}
        <HelpCircle
          className="text-primary/5 pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 rotate-12"
          aria-hidden="true"
        />
      </section>

      {/* 02: Structured Guidelines - Quick Analysis Cards */}
      <section className="border-border/40 bg-muted/5 relative z-10 border-y py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {/* Guarantee Card */}
            <div className="group border-border/50 bg-background hover:border-primary/40 hover:shadow-primary/5 flex flex-col gap-6 rounded-[2rem] border p-8 transition-all duration-500 hover:shadow-xl">
              <div className="bg-primary/10 group-hover:bg-primary/20 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform group-hover:rotate-12">
                <ShieldCheck className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="group-hover:text-primary mb-3 text-xl font-bold tracking-tight transition-colors">
                  การันตีความลับ
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  เราไม่มีระบบสมาชิกหรือฐานข้อมูลกลาง ข้อมูลของคุณจะถูกทำลายทิ้ง
                  (Secure Purge) ทันทีหลังภารกิจลุล่วงตามมาตรฐาน No-Log Policy
                </p>
              </div>
            </div>

            {/* Diagnosis Card */}
            <div className="group border-border/50 bg-background hover:border-primary/40 hover:shadow-primary/5 flex flex-col gap-6 rounded-[2rem] border p-8 transition-all duration-500 hover:shadow-xl">
              <div className="bg-primary/10 group-hover:bg-primary/20 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform group-hover:rotate-12">
                <Clock className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="group-hover:text-primary mb-3 text-xl font-bold tracking-tight transition-colors">
                  ประเมินรวดเร็ว
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  ใช้เวลาวิเคราะห์ทางเทคนิคเบื้องต้น (Technical Diagnosis) เพียง
                  15-30 นาที เพื่อสรุปความเป็นไปได้และราคาอย่างตรงไปตรงมา
                </p>
              </div>
            </div>

            {/* Transparency Card */}
            <div className="group border-border/50 bg-background hover:border-primary/40 hover:shadow-primary/5 flex flex-col gap-6 rounded-[2rem] border p-8 transition-all duration-500 hover:shadow-xl">
              <div className="bg-primary/10 group-hover:bg-primary/20 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform group-hover:rotate-12">
                <FileText className="text-primary h-6 w-6" />
              </div>
              <div>
                <h3 className="group-hover:text-primary mb-3 text-xl font-bold tracking-tight transition-colors">
                  ความโปร่งใส
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  ระบุเงื่อนไขการดำเนินงานชัดเจน
                  หากวิเคราะห์แล้วไม่สามารถดำเนินการได้ในเชิงเทคนิค
                  เราจะแจ้งให้ทราบทันทีโดยไม่มีค่าใช้จ่าย
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03: Main Q&A Component */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-16 flex items-center justify-between">
            <div className="text-muted-foreground/40 flex items-center gap-3 font-mono text-[11px] font-black tracking-[0.4em] uppercase">
              <Fingerprint className="h-4 w-4" />
              Operational Q&A
            </div>
            <div className="bg-border/40 ml-8 hidden h-px flex-1 md:block" />
          </div>
          {/* เรียกใช้คอมโพเนนต์ FAQ ที่จัดการสถานะ Accordion */}
          <FaqSection />
        </div>
      </section>

      {/* 04: Final Protocol CTA */}
      <div className="border-border/40 bg-muted/5 border-t">
        <ContactCTA />
      </div>
    </div>
  )
}
