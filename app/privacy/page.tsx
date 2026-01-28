/** @format */

import { Metadata } from "next";
import {
  ShieldCheck,
  Lock,
  EyeOff,
  Trash2,
  ShieldAlert,
  Server,
  FileKey
} from "lucide-react";
import ContactCTA from "@/components/sections/ContactCTA";

/**
 * UNLINK-TH | Confidentiality & Privacy Protocol (2026)
 * -------------------------------------------------------------------------
 * มาตรฐานการคุ้มครองข้อมูลระดับสูงสุดภายใต้หลักการ Zero-Knowledge Security
 * ออกแบบเพื่อรองรับมาตราฐาน PDPA และสัญญา NDA สากล
 */

export const metadata: Metadata = {
  title: "Confidentiality & Privacy Protocol | UNLINK-TH",
  description:
    "นโยบายการรักษาความลับขั้นสูงสุดและมาตรฐานการจัดการข้อมูลส่วนบุคคลภายใต้กฎหมาย PDPA ของ UNLINK-TH",
};

export default function PrivacyPage() {
  const lastUpdated = "28 มกราคม 2026";

  const protocols = [
    {
      title: "Non-Disclosure Policy (NDA)",
      description:
        "ข้อมูลทุกอย่างที่ท่านแจ้งแก่เรา จะถูกเก็บเป็นความลับสูงสุดภายใต้สัญญา NDA ทันทีที่เริ่มการปรึกษา ไม่มีการเปิดเผยตัวตนลูกค้าต่อสาธารณะในทุกกรณี",
      icon: EyeOff,
    },
    {
      title: "Data Shredding Protocol",
      description:
        "เรามีนโยบายทำลายข้อมูล (Data Destruction) ทันทีหลังจบโปรเจกต์ หรือหากการประเมินงานไม่ถูกดำเนินต่อ เพื่อป้องกันการรั่วไหลของข้อมูล 100%",
      icon: Trash2,
    },
    {
      title: "Encrypted Communication",
      description:
        "การสื่อสารและส่งต่อเอกสารทั้งหมดดำเนินการผ่านช่องทางที่มีการเข้ารหัส (End-to-End Encryption) มาตรฐานระดับเดียวกับสถาบันการเงิน",
      icon: Lock,
    },
  ];

  return (
    <div className="pb-24">
      {/* 1. Technical Header Section */}
      <header className="bg-muted/10 border-b border-border/50 relative overflow-hidden py-28">
        <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 text-primary text-[10px] font-mono uppercase tracking-[0.3em]">
              <ShieldCheck className="h-4 w-4" />
              <span>Zero-Knowledge Security Framework</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
              Privacy <br />
              <span className="text-primary italic font-light">& Protocol</span>
            </h1>
            <p className="text-muted-foreground text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
              เพราะชื่อเสียงของคุณเริ่มต้นที่ความลับของเรา 
              เราจึงวางระบบการจัดการข้อมูลที่เข้มงวดที่สุดเพื่อปกป้องความเป็นส่วนตัวของคุณในทุกขั้นตอนปฏิบัติการ
            </p>
            <div className="pt-4 flex items-center gap-4">
              <span className="text-muted-foreground/40 font-mono text-[10px] uppercase tracking-widest border border-border/10 px-3 py-1 rounded">
                Document ID: UTH-PRV-2026
              </span>
              <span className="text-muted-foreground/40 font-mono text-[10px] uppercase tracking-widest">
                Last Updated: {lastUpdated}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Privacy Pillars Grid */}
      
      <section className="container py-24">
        <div className="grid gap-8 md:grid-cols-3">
          {protocols.map((p, idx) => (
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

      {/* 3. Formal Regulatory Content */}
      <section className="container pb-32">
        <div className="prose prose-invert max-w-4xl mx-auto prose-h2:text-3xl prose-h2:tracking-tighter prose-h3:text-primary prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground">
          <h2 className="border-b border-border/10 pb-4">นโยบายการคุ้มครองข้อมูลส่วนบุคคล (PDPA Compliance)</h2>
          <p>
            UNLINK-TH ในฐานะผู้ควบคุมข้อมูลส่วนบุคคล (Data Controller) ยึดถือจริยธรรมดิจิทัลสูงสุดในการจัดการข้อมูล 
            นโยบายฉบับนี้ออกแบบมาเพื่อประกาศมาตรฐานความปลอดภัยสำหรับบริการ <strong>Reputation Architect</strong>
          </p>

          <div className="grid gap-12 mt-16">
            <div className="space-y-4">
              <h3 className="flex items-center gap-3">
                <Server className="w-5 h-5" />
                1. ขอบเขตการจัดเก็บข้อมูล (Data Minimization)
              </h3>
              <p>
                เราจัดเก็บข้อมูลเฉพาะส่วนที่จำเป็นอย่างยิ่งต่อการดำเนินงาน De-indexing และการปรับปรุงภาพลักษณ์ ได้แก่:
              </p>
              <ul className="list-none space-y-2 pl-4 border-l border-primary/20">
                <li className="text-sm"> ข้อมูลระบุตัวตนทางธุรกิจหรือบุคคล (เพื่อใช้ในสัญญา NDA)</li>
                <li className="text-sm"> ข้อมูลพิกัดดิจิทัล (ลิงก์ข่าว, URL กระทู้, หรือข้อมูลที่ละเมิดความเป็นส่วนตัว)</li>
                <li className="text-sm"> เอกสารแสดงสิทธิตามกฎหมาย (ใช้ยื่นต่อผู้ให้บริการ Search Engine เท่านั้น)</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="flex items-center gap-3">
                <FileKey className="w-5 h-5" />
                2. วัตถุประสงค์และการประมวลผล
              </h3>
              <p>
                ข้อมูลจะถูกใช้เพื่อวัตถุประสงค์เดียวคือ <strong>การปกป้องชื่อเสียงของท่าน</strong> 
                เราไม่มีนโยบายนำข้อมูลไปใช้ทางการตลาด หรือเปิดเผยข้อมูลการรับบริการของท่านต่อสาธารณะไม่ว่ากรณีใดๆ
              </p>
            </div>
          </div>

          {/* Internal Audit Banner */}
          <div className="bg-primary/5 border-primary/10 my-16 flex items-start gap-6 rounded-[2rem] border p-10 shadow-2xl shadow-primary/5">
            <ShieldAlert className="text-primary mt-1 h-7 w-7 shrink-0" />
            <div className="space-y-3">
              <h4 className="text-lg font-bold text-foreground">Internal Security Audit (Tier-1)</h4>
              <p className="text-muted-foreground m-0 text-sm font-light leading-relaxed">
                ระบบจัดการโครงการของเรามีการบันทึก Access Log ทุกขั้นตอน 
                ข้อมูลความลับจะถูกเข้ารหัสระดับเดียวกับสถาบันการเงิน และจะถูกถอนการติดตั้ง (Secure Purge) ออกจากระบบทันทีที่สิ้นสุดสัญญาจ้าง
              </p>
            </div>
          </div>

          <h3>3. สิทธิเหนือข้อมูลส่วนบุคคล</h3>
          <p>
            ท่านมีสิทธิในการขอเข้าถึง, แก้ไข, ระงับการใช้งาน หรือสั่งทำลายข้อมูล (Right to Erasure) ได้ทุกเวลาผ่านเจ้าหน้าที่คุ้มครองข้อมูล 
            โดยเราจะดำเนินการทันทีภายในกรอบเวลาปฏิบัติการ
          </p>

          <h3>4. ข้อมูลการติดต่อฝ่ายรักษาความลับ</h3>
          <p>
            หากท่านมีข้อสงสัยหรือต้องการยื่นคำร้องเกี่ยวกับข้อมูลส่วนบุคคล 
            กรุณาติดต่อทีมวิศวกรความปลอดภัยได้ที่: <br />
            <strong className="text-primary">Email:</strong> security@unlink-th.com
          </p>
        </div>
      </section>

      <div className="mt-20">
        <ContactCTA />
      </div>
    </div>
  );
}
