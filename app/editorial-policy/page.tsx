/** @format */

import { Metadata } from "next"
import {
  BookOpen,
  Scale,
  FileText,
  CheckCircle,
  Info,
  ShieldAlert,
  Fingerprint,
} from "lucide-react"
import ContactCTA from "@/components/sections/ContactCTA"

/**
 * UNLINK-TH | Editorial Policy & Data Ethics Framework (2026)
 * -------------------------------------------------------------------------
 * มาตรฐานการคัดกรองเนื้อหาและจริยธรรมในการจัดการชื่อเสียงออนไลน์
 * ออกแบบเพื่อเสริมสร้าง Trust Signal และความถูกต้องตามหลักนิติศาสตร์ดิจิทัล
 */

export const metadata: Metadata = {
  title: "Editorial Policy & Data Ethics | UNLINK-TH",
  description:
    "มาตรฐานการคัดกรองเนื้อหาและจริยธรรมในการจัดการชื่อเสียงออนไลน์ภายใต้หลักสิทธิส่วนบุคคลและความชอบธรรมทางกฎหมาย",
}

export default function EditorialPolicyPage() {
  const principles = [
    {
      title: "Verifiable Accuracy",
      description:
        "เนื้อหาที่จัดการต้องอ้างอิงจากข้อเท็จจริงเชิงเทคนิคและหลักฐานทางกฎหมายที่ตรวจสอบได้ เพื่อความยั่งยืนของข้อมูลในระบบการสืบค้น",
      icon: CheckCircle,
    },
    {
      title: "Legal & Human Rights",
      description:
        "ดำเนินการภายใต้กรอบกฎหมาย PDPA และเคารพสิทธิสากลในการถูกลืม โดยไม่ขัดต่อประโยชน์สาธารณะที่สำคัญ",
      icon: Scale,
    },
    {
      title: "Neutrality & Objectivity",
      description:
        "เราใช้ดุลยพินิจที่เป็นอิสระในการประเมินกรณีปฏิบัติการ เพื่อรักษาสมดุลระหว่างความเป็นส่วนตัวและสิทธิในการรับรู้ของสังคม",
      icon: Info,
    },
  ]

  return (
    <div className="pb-24">
      {/* 1. Protocol Header Section: สัญญาณความซื่อสัตย์ดิจิทัล */}
      <header className="bg-muted/10 border-border/50 relative overflow-hidden border-b py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03),transparent)]" />
        <div className="relative z-10 container">
          <div className="max-w-4xl space-y-8">
            <div className="bg-primary/5 border-primary/20 text-primary inline-flex items-center gap-3 rounded-full border px-4 py-2 font-mono text-[10px] tracking-[0.3em] uppercase">
              <BookOpen className="h-4 w-4" />
              <span>Standards & Compliance 2026</span>
            </div>
            <h1 className="text-5xl leading-[1.1] font-bold tracking-tighter md:text-7xl">
              Editorial <br />
              <span className="text-primary font-light italic">& Ethics</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl text-xl leading-relaxed font-light md:text-2xl">
              พันธกิจของเราคือการสร้างระบบนิเวศข้อมูลที่สะอาดและถูกต้อง
              ภายใต้มาตรฐานการคัดกรองที่เข้มงวดและโปร่งใสที่สุดในอุตสาหกรรมจัดการชื่อเสียง
            </p>
          </div>
        </div>
      </header>

      {/* 2. Operational Principles Grid: หลักการปฏิบัติงาน */}
      <section className="container py-24">
        <div className="grid gap-8 md:grid-cols-3">
          {principles.map((p, idx) => (
            <div
              key={idx}
              className="lab-card group border-border/40 bg-muted/5 hover:bg-muted/10 p-10 transition-all duration-500"
            >
              <div className="bg-primary/5 group-hover:bg-primary/10 mb-8 w-fit rounded-2xl p-3 transition-colors">
                <p.icon className="text-primary/70 h-8 w-8" />
              </div>
              <h3 className="mb-4 text-xl font-bold tracking-tight">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Detailed Policy Framework: มาตรฐานการจัดการเนื้อหา */}
      <section className="container pb-32">
        <div className="prose prose-invert prose-h2:text-3xl prose-h2:tracking-tighter prose-h3:text-primary prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground mx-auto max-w-4xl">
          <h2 className="border-border/10 border-b pb-4 tracking-tighter uppercase">
            Content Management Protocol
          </h2>
          <p>
            เรายึดถือว่าข้อมูลดิจิทัลคือโครงสร้างพื้นฐานของความเชื่อมั่น
            UNLINK-TH
            จึงกำหนดแนวทางปฏิบัติที่เป็นเลิศเพื่อให้การจัดการเนื้อหาเป็นไปอย่างมีประสิทธิภาพและชอบธรรม
            ดังนี้:
          </p>

          <div className="mt-16 grid gap-12">
            <div className="space-y-4">
              <h3 className="flex items-center gap-3 font-bold tracking-tight">
                <ShieldAlert className="h-5 w-5" />
                1. การคัดกรองกรณีปฏิบัติการ (Case Evaluation)
              </h3>
              <p>
                เราทำหน้าที่เป็นหน่วยคัดกรองจริยธรรม
                ทุกคำร้องจะต้องผ่านการตรวจสอบแรงจูงใจและข้อเท็จจริง
                เพื่อให้มั่นใจว่าการปฏิบัติการนั้นเป็นไปเพื่อปกป้องสิทธิส่วนบุคคลจากการบิดเบือน
                ไม่ใช่การปิดบังความจริงที่เป็นประโยชน์ต่อสาธารณะ
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="flex items-center gap-3 font-bold tracking-tight">
                <Fingerprint className="h-5 w-5" />
                2. ความถูกต้องและการพิสูจน์สิทธิ (Correction Protocol)
              </h3>
              <p>
                ในกระบวนการสร้างตัวตนใหม่
                ข้อมูลทั้งหมดต้องผ่านการตรวจสอบความถูกต้อง
                และอ้างอิงแหล่งที่มาที่น่าเชื่อถือเพื่อให้ระบบการค้นหายอมรับความมีตัวตนของข้อมูลในระยะยาวอย่างยั่งยืน
              </p>
            </div>
          </div>

          {/* Visualization of Verification Process */}

          <div className="bg-primary/5 border-primary/10 shadow-primary/5 my-16 flex items-start gap-6 rounded-[2rem] border p-10 shadow-2xl">
            <FileText className="text-primary mt-1 h-7 w-7 shrink-0" />
            <div className="space-y-3">
              <h4 className="text-foreground text-lg font-bold">
                Transparency & AI Governance
              </h4>
              <p className="text-muted-foreground m-0 text-sm leading-relaxed font-light">
                เรามีนโยบายควบคุมการใช้ปัญญาประดิษฐ์ (AI) อย่างเคร่งครัด
                โดยจะไม่ใช้เครื่องมืออัตโนมัติในการตัดสินใจด้านจริยธรรม
                ทุกกระบวนการคัดกรองจะต้องมีทีมผู้เชี่ยวชาญตรวจสอบขั้นตอนสุดท้ายเสมอ
                เพื่อความละเอียดอ่อนของบริบททางสังคม
              </p>
            </div>
          </div>

          <div className="grid gap-12">
            <div className="space-y-4">
              <h3 className="flex items-center gap-3 font-bold tracking-tight">
                <ShieldAlert className="h-5 w-5" />
                3. การต่อต้านข้อมูลเท็จ (Misinformation Resistance)
              </h3>
              <p>
                UNLINK-TH
                ปฏิเสธการสร้างข้อมูลที่เป็นเท็จเพื่อวัตถุประสงค์ในการทำลายผู้อื่น
                ยุทธวิธีของเราคือการจัดการข้อมูลที่ไม่พึงประสงค์และไม่เป็นความจริงออกจากระบบการสืบค้นอย่างถูกต้องตามระเบียบสากล
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="flex items-center gap-3 font-bold tracking-tight">
                <Scale className="h-5 w-5" />
                4. ความเป็นอิสระของทีมปฏิบัติการ
              </h3>
              <p>
                ฝ่ายจัดการข้อมูลและที่ปรึกษากฎหมายมีสิทธิขาดในการระงับโครงการทันที
                หากตรวจพบว่าข้อมูลที่ได้รับมีการปกปิดข้อเท็จจริง
                หรือการดำเนินการนั้นอาจส่งผลกระทบเชิงลบต่อบรรทัดฐานความถูกต้องในวงกว้าง
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-20">
        <ContactCTA />
      </div>
    </div>
  )
}
