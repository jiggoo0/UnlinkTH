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
import { siteConfig } from "@/constants/site-config"

/**
 * UNLINK-TH | Editorial Policy & Data Ethics Framework (2026)
 * -------------------------------------------------------------------------
 * มาตรฐานการคัดกรองเนื้อหาและจริยธรรมในการจัดการชื่อเสียงออนไลน์
 * Oversight by: อลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์) - Technical Data Architect
 */

export const metadata: Metadata = {
  title: `Editorial Policy & Ethics | ${siteConfig.name}`,
  description:
    "มาตรฐานการคัดกรองเนื้อหาและจริยธรรมในการจัดการชื่อเสียงออนไลน์ภายใต้หลักสิทธิส่วนบุคคลและความชอบธรรมทางกฎหมายของ UNLINK-TH",
}

export default function EditorialPolicyPage() {
  const lastUpdated = "30 มกราคม 2026"

  // Type Casting เพื่อป้องกัน Error TS18046: 'siteConfig.founder' is of type 'unknown'
  const founderName =
    (siteConfig.founder as { nameTh: string })?.nameTh || "Founder"

  const principles = [
    {
      title: "Verifiable Accuracy",
      description:
        "เนื้อหาที่จัดการต้องอ้างอิงจากข้อเท็จจริงเชิงเทคนิคและหลักฐานทางกฎหมายที่ตรวจสอบได้ เพื่อความยั่งยืนของข้อมูลในระบบสืบค้นสากล",
      icon: CheckCircle,
    },
    {
      title: "Legal & Human Rights",
      description:
        "ดำเนินการภายใต้กรอบกฎหมาย PDPA และเคารพสิทธิสากลในการถูกลืม (Right to be Forgotten) โดยไม่ขัดต่อประโยชน์สาธารณะ",
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
      {/* 1. Protocol Header Section */}
      <header className="bg-muted/10 border-border/50 relative overflow-hidden border-b py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03),transparent)]" />
        <div className="relative z-10 container">
          <div className="max-w-4xl space-y-8">
            <div className="bg-primary/5 border-primary/20 text-primary inline-flex items-center gap-3 rounded-full border px-4 py-2 font-mono text-[10px] tracking-[0.3em] uppercase">
              <BookOpen className="h-4 w-4" />
              <span>Standards & Compliance 2026</span>
            </div>
            <h1 className="text-5xl leading-[1.1] font-bold tracking-tighter md:text-8xl">
              Editorial <br />
              <span className="text-primary font-light italic">& Ethics</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl text-xl leading-relaxed font-light md:text-2xl">
              พันธกิจของ **{siteConfig.name}**
              คือการสร้างระบบนิเวศข้อมูลที่สะอาดและถูกต้อง
              ภายใต้การกำกับดูแลโดยผู้เชี่ยวชาญด้านสถาปัตยกรรมข้อมูลทางเทคนิค
            </p>
            <div className="flex items-center gap-4 pt-4">
              <span className="text-muted-foreground/40 border-border/10 rounded border px-3 py-1 font-mono text-[10px] tracking-widest uppercase">
                Policy ID: UTH-ETH-2026
              </span>
              <span className="text-muted-foreground/40 font-mono text-[10px] tracking-widest uppercase">
                Last Updated: {lastUpdated}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Operational Principles Grid */}
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

      {/* 3. Detailed Policy Framework */}
      <section className="container pb-32">
        <div className="prose prose-invert prose-h2:text-3xl prose-h2:tracking-tighter prose-h3:text-primary prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground mx-auto max-w-4xl">
          <h2 className="border-border/10 border-b pb-4 tracking-tighter uppercase">
            Content Management Protocol
          </h2>
          <p className="text-lg">
            เรายึดถือว่าข้อมูลดิจิทัลคือโครงสร้างพื้นฐานของความเชื่อมั่น **
            {siteConfig.name}** จึงกำหนดแนวทางปฏิบัติภายใต้การบริหารของ **
            {founderName}**
            เพื่อให้การจัดการเนื้อหาเป็นไปอย่างมีประสิทธิภาพและชอบธรรมสูงสุด
          </p>

          <div className="mt-16 grid gap-12">
            <div className="space-y-4">
              <h3 className="flex items-center gap-3 font-bold tracking-tight">
                <ShieldAlert className="h-5 w-5" />
                1. การคัดกรองกรณีปฏิบัติการ (Case Evaluation)
              </h3>
              <p>
                เราทำหน้าที่เป็นหน่วยคัดกรองจริยธรรม
                ทุกคำร้องจะต้องผ่านการตรวจสอบแรงจูงใจและข้อเท็จจริงเบื้องต้น
                เพื่อให้มั่นใจว่าการปฏิบัติการนั้นเป็นไปเพื่อปกป้องสิทธิส่วนบุคคลจากการถูกคุกคามหรือข้อมูลที่บิดเบือน
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="flex items-center gap-3 font-bold tracking-tight">
                <Fingerprint className="h-5 w-5" />
                2. ความถูกต้องและการพิสูจน์สิทธิ
              </h3>
              <p>
                ในกระบวนการวางสถาปัตยกรรมชื่อเสียงใหม่
                ข้อมูลทั้งหมดต้องผ่านการตรวจสอบ (Fact-Check)
                เพื่อให้ระบบการค้นหายอมรับความมีตัวตนของข้อมูลในระยะยาวอย่างยั่งยืน
              </p>
            </div>
          </div>

          {/* Internal Governance Banner */}
          <div className="bg-primary/5 border-primary/10 shadow-primary/5 my-16 flex items-start gap-6 rounded-[2rem] border p-10 shadow-2xl">
            <FileText className="text-primary mt-1 h-7 w-7 shrink-0" />
            <div className="space-y-3">
              <h4 className="text-foreground text-lg font-bold">
                Transparency & AI Governance
              </h4>
              <p className="text-muted-foreground m-0 text-sm leading-relaxed font-light">
                เรามีนโยบายควบคุมการใช้ปัญญาประดิษฐ์ (AI) อย่างเคร่งครัด
                โดยจะไม่ใช้เครื่องมืออัตโนมัติในการตัดสินใจด้านจริยธรรม
                ทุกกระบวนการคัดกรองจะถูกตรวจสอบโดยผู้เชี่ยวชาญเสมอ
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
