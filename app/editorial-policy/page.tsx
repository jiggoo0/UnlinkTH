/** @format */

import { Metadata } from "next";
import {
  BookOpen,
  Scale,
  FileText,
  CheckCircle,
  Info,
  ShieldAlert,
  Fingerprint,
} from "lucide-react";
import ContactCTA from "@/components/sections/ContactCTA";

/**
 * UNLINK-TH | Editorial Policy & Data Ethics Framework (2026)
 * -------------------------------------------------------------------------
 * มาตรฐานการคัดกรองเนื้อหาและจริยธรรมในการจัดการชื่อเสียงออนไลน์
 * ออกแบบเพื่อเสริมสร้าง Trust Signal และความถูกต้องตามหลักนิติศาสตร์
 */

export const metadata: Metadata = {
  title: "Editorial Policy & Data Ethics | UNLINK-TH",
  description:
    "มาตรฐานการคัดกรองเนื้อหาและจริยธรรมในการจัดการชื่อเสียงออนไลน์ของ UNLINK-TH ภายใต้หลักสิทธิส่วนบุคคลและความถูกต้องทางกฎหมาย",
};

export default function EditorialPolicyPage() {
  const principles = [
    {
      title: "Verifiable Accuracy",
      description:
        "เนื้อหาที่เราผลิตและจัดการต้องอ้างอิงจากข้อเท็จจริงทางเทคนิคและหลักฐานทางกฎหมายที่ตรวจสอบได้ (Evidence-based) เพื่อความยั่งยืนของข้อมูล",
      icon: CheckCircle,
    },
    {
      title: "Legal & Human Rights",
      description:
        "ดำเนินการภายใต้กรอบของกฎหมาย PDPA และเคารพสิทธิ Right to be Forgotten โดยไม่ขัดต่อผลประโยชน์สาธารณะที่สำคัญ",
      icon: Scale,
    },
    {
      title: "Neutrality & Objectivity",
      description:
        "เราใช้ดุลยพินิจที่เป็นอิสระในการประเมินเคส เพื่อรักษาสมดุลระหว่างความเป็นส่วนตัวและสิทธิในการรับรู้ข้อมูลของสังคม",
      icon: Info,
    },
  ];

  return (
    <div className="pb-24">
      {/* 1. Protocol Header */}
      <header className="bg-muted/10 border-b border-border/50 relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03),transparent)] pointer-events-none" />
        <div className="relative z-10 container">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 text-primary text-[10px] font-mono uppercase tracking-[0.3em]">
              <BookOpen className="h-4 w-4" />
              <span>Standards & Compliance 2026</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1]">
              Editorial <span className="text-primary font-light italic">& Ethics</span>
            </h1>
            <p className="text-muted-foreground text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
              พันธกิจของเราคือการสร้างระบบนิเวศข้อมูลที่สะอาดและถูกต้อง 
              ภายใต้มาตรฐานบรรณาธิการที่เข้มงวดและโปร่งใสที่สุดในอุตสาหกรรมจัดการชื่อเสียง
            </p>
          </div>
        </div>
      </header>

      {/* 2. Operational Principles Grid */}
      <section className="container py-24">
        <div className="grid gap-8 md:grid-cols-3">
          {principles.map((p, idx) => (
            <div key={idx} className="lab-card group border-border/40 p-10 bg-muted/5 hover:bg-muted/10 transition-all duration-500">
              <div className="mb-8 p-3 rounded-2xl bg-primary/5 w-fit group-hover:bg-primary/10 transition-colors">
                <p.icon className="text-primary/70 h-8 w-8" />
              </div>
              <h3 className="mb-4 text-xl font-bold tracking-tight">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Detailed Policy Framework */}
      
      <section className="container pb-32">
        <div className="prose prose-invert max-w-4xl mx-auto prose-h2:text-3xl prose-h2:tracking-tighter prose-h3:text-primary prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground">
          <h2 className="border-b border-border/10 pb-4">นโยบายและมาตรฐานการจัดการเนื้อหา</h2>
          <p>
            ในฐานะ <strong>Reputation Architect</strong> เรายึดถือว่าข้อมูลดิจิทัลคือโครงสร้างพื้นฐานของความเชื่อมั่น 
            UNLINK-TH จึงกำหนดแนวทางปฏิบัติที่เป็นเลิศ (Best Practices) เพื่อให้การจัดการเนื้อหาเป็นไปอย่างมีประสิทธิภาพและชอบธรรม ดังนี้:
          </p>

          <div className="grid gap-12 mt-16">
            <div className="space-y-4">
              <h3 className="flex items-center gap-3">
                <ShieldAlert className="w-5 h-5" />
                1. การคัดกรองกรณีศึกษา (Case Evaluation)
              </h3>
              <p>
                เราไม่ได้ทำหน้าที่เพียงแค่การถอดถอนข้อมูล แต่เราทำหน้าที่เป็นหน่วยกรองจริยธรรม ทุกคำร้องจะต้องผ่านการตรวจสอบแรงจูงใจและข้อเท็จจริง 
                เพื่อให้มั่นใจว่าการปฏิบัติการนั้นเป็นไปเพื่อปกป้องสิทธิส่วนบุคคลจากการบิดเบือน ไม่ใช่การปิดบังความจริงที่เป็นประโยชน์ต่อสาธารณะ
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="flex items-center gap-3">
                <Fingerprint className="w-5 h-5" />
                2. ความถูกต้องและการแก้ไขข้อมูล (Correction Protocol)
              </h3>
              <p>
                ในกระบวนการ <strong>Architecting Phase</strong> หรือการสร้างตัวตนใหม่ ข้อมูลทั้งหมดต้องผ่านการตรวจสอบความถูกต้อง (Verification) 
                และอ้างอิงแหล่งที่มาที่น่าเชื่อถือเท่านั้น เพื่อให้ระบบ Search Engine ยอมรับความมีตัวตนของข้อมูลในระยะยาวอย่างยั่งยืน
              </p>
            </div>
          </div>

          <div className="bg-primary/5 border-primary/10 my-16 flex items-start gap-6 rounded-[2rem] border p-10 shadow-2xl shadow-primary/5">
            <FileText className="text-primary mt-1 h-7 w-7 shrink-0" />
            <div className="space-y-3">
              <h4 className="text-lg font-bold text-foreground">Transparency & AI Governance</h4>
              <p className="text-muted-foreground m-0 text-sm font-light leading-relaxed">
                เรามีนโยบายควบคุมการใช้ปัญญาประดิษฐ์ (AI) อย่างเคร่งครัด โดยจะไม่ใช้เครื่องมืออัตโนมัติในการตัดสินใจด้านจริยธรรมหรือการตีความกฎหมาย 
                ทุกกระบวนการคัดกรองจะต้องมีมนุษย์ (Human-in-the-loop) เป็นผู้ตรวจสอบขั้นตอนสุดท้ายเสมอ เพื่อความละเอียดอ่อนของบริบทสังคม
              </p>
            </div>
          </div>

          <div className="grid gap-12">
            <div className="space-y-4">
              <h3 className="flex items-center gap-3">
                <ShieldAlert className="w-5 h-5" />
                3. การจัดการข้อมูลเท็จ (Misinformation Resistance)
              </h3>
              <p>
                UNLINK-TH ปฏิเสธการสร้างหรือเผยแพร่ข้อมูลที่เป็นเท็จเพื่อวัตถุประสงค์ในการทำลายผู้อื่น ยุทธวิธีของเราคือการใช้เทคโนโลยี 
                <strong> Source Neutralization</strong> เพื่อล้างข้อมูลที่ไม่พึงประสงค์และไม่เป็นความจริงออกจากระบบการสืบค้นอย่างถูกต้อง
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="flex items-center gap-3">
                <Scale className="w-5 h-5" />
                4. ความเป็นอิสระของทีมปฏิบัติการ
              </h3>
              <p>
                ฝ่ายวิศวกรรมข้อมูลและที่ปรึกษากฎหมายของเรามีสิทธิขาดในการระงับโครงการทันที หากตรวจพบว่าข้อมูลที่ได้รับจากลูกค้ามีการปกปิดข้อเท็จจริง 
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
  );
}
