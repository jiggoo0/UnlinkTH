/** @format */

import { Metadata } from "next"
import {
  ShieldCheck,
  Lock,
  EyeOff,
  Trash2,
  ShieldAlert,
  Server,
  FileKey,
} from "lucide-react"
import ContactCTA from "@/components/sections/ContactCTA"

/**
 * UNLINK-TH | Confidentiality & Privacy Protocol (2026)
 * -------------------------------------------------------------------------
 * มาตรฐานการคุ้มครองข้อมูลภายใต้หลักการ Zero-Knowledge Security
 * ออกแบบเพื่อรองรับมาตรฐาน PDPA และพันธสัญญาการรักษาความลับสากล
 */

export const metadata: Metadata = {
  title: "Confidentiality & Privacy Protocol | UNLINK-TH",
  description:
    "นโยบายการรักษาความลับและมาตรฐานการจัดการข้อมูลส่วนบุคคลภายใต้กฎหมาย PDPA ของ UNLINK-TH",
}

export default function PrivacyPage() {
  const lastUpdated = "28 มกราคม 2026"

  const protocols = [
    {
      title: "Non-Disclosure Policy",
      description:
        "ข้อมูลทุกอย่างที่ระบุในระหว่างการปรึกษา จะถูกเก็บเป็นความลับสูงสุดภายใต้สัญญา NDA ทันที ไม่มีการเปิดเผยตัวตนในทุกกรณี",
      icon: EyeOff,
    },
    {
      title: "Data Destruction Protocol",
      description:
        "นโยบายทำลายข้อมูล (Secure Shredding) ทันทีหลังจบโปรเจกต์ หรือเมื่อการประเมินงานสิ้นสุดลง เพื่อป้องกันการรั่วไหลของข้อมูล",
      icon: Trash2,
    },
    {
      title: "Encrypted Communication",
      description:
        "การรับส่งข้อมูลและเอกสารทั้งหมดดำเนินการผ่านช่องทางที่มีการเข้ารหัส (End-to-End Encryption) มาตรฐานระดับสูง",
      icon: Lock,
    },
  ]

  return (
    <div className="pb-24">
      {/* 1. Technical Header Section: สัญญาณความปลอดภัยหลัก */}
      <header className="bg-muted/10 border-border/50 relative overflow-hidden border-b py-28">
        <div className="bg-primary/5 pointer-events-none absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full blur-[120px]" />
        <div className="relative z-10 container">
          <div className="max-w-4xl space-y-8">
            <div className="bg-primary/5 border-primary/20 text-primary inline-flex items-center gap-3 rounded-full border px-4 py-2 font-mono text-[10px] tracking-[0.3em] uppercase">
              <ShieldCheck className="h-4 w-4" />
              <span>Zero-Knowledge Security Framework</span>
            </div>
            <h1 className="text-5xl leading-[0.9] font-bold tracking-tighter md:text-8xl">
              Privacy <br />
              <span className="text-primary font-light italic">& Protocol</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl text-xl leading-relaxed font-light md:text-2xl">
              เพราะชื่อเสียงของคุณเริ่มต้นที่ความลับของเรา
              เราจึงวางระบบจัดการข้อมูลที่เข้มงวดที่สุดเพื่อปกป้องความเป็นส่วนตัวในทุกขั้นตอนปฏิบัติการ
            </p>
            <div className="flex items-center gap-4 pt-4">
              <span className="text-muted-foreground/40 border-border/10 rounded border px-3 py-1 font-mono text-[10px] tracking-widest uppercase">
                Document ID: UTH-PRV-2026
              </span>
              <span className="text-muted-foreground/40 font-mono text-[10px] tracking-widest uppercase">
                Last Updated: {lastUpdated}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Privacy Pillars Grid: รากฐานการคุ้มครองข้อมูล */}
      <section className="container py-24">
        <div className="grid gap-8 md:grid-cols-3">
          {protocols.map((p, idx) => (
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

      {/* 3. Formal Regulatory Content: มาตรฐานทางกฎหมายและเทคนิค */}
      <section className="container pb-32">
        <div className="prose prose-invert prose-h2:text-3xl prose-h2:tracking-tighter prose-h3:text-primary prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground mx-auto max-w-4xl">
          <h2 className="border-border/10 border-b pb-4 tracking-tighter uppercase">
            Data Protection Standard (PDPA Compliance)
          </h2>
          <p>
            UNLINK-TH ในฐานะผู้ควบคุมข้อมูลส่วนบุคคล (Data Controller)
            ยึดถือจริยธรรมดิจิทัลในการจัดการข้อมูล
            นโยบายฉบับนี้ออกแบบมาเพื่อประกาศมาตรฐานความปลอดภัยสำหรับกระบวนการจัดการชื่อเสียง
          </p>

          {/* Visualizing Data Processing Flow */}

          <div className="mt-16 grid gap-12">
            <div className="space-y-4">
              <h3 className="flex items-center gap-3 font-bold tracking-tight">
                <Server className="h-5 w-5" />
                1. ขอบเขตการจัดเก็บข้อมูล (Data Minimization)
              </h3>
              <p>
                เราจัดเก็บข้อมูลเฉพาะส่วนที่จำเป็นอย่างยิ่งต่อการดำเนินงาน
                De-indexing และการปรับปรุงภาพลักษณ์ ได้แก่:
              </p>
              <ul className="border-primary/20 list-none space-y-2 border-l pl-4">
                <li className="text-sm italic">
                  {" "}
                  ข้อมูลระบุตัวตนทางธุรกิจหรือบุคคล (เพื่อใช้ในสัญญา NDA)
                </li>
                <li className="text-sm italic">
                  {" "}
                  พิกัดดิจิทัล (ลิงก์ข่าว, URL,
                  หรือข้อมูลที่ละเมิดความเป็นส่วนตัว)
                </li>
                <li className="text-sm italic">
                  {" "}
                  เอกสารแสดงสิทธิตามกฎหมาย
                  (ใช้ยื่นต่อผู้ให้บริการระบบการค้นหาเท่านั้น)
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="flex items-center gap-3 font-bold tracking-tight">
                <FileKey className="h-5 w-5" />
                2. วัตถุประสงค์และการประมวลผล
              </h3>
              <p>
                ข้อมูลจะถูกใช้เพื่อวัตถุประสงค์เดียวคือ{" "}
                <strong>การปกป้องชื่อเสียง</strong>
                เราไม่มีนโยบายนำข้อมูลไปใช้ทางการตลาด
                หรือเปิดเผยข้อมูลการรับบริการต่อสาธารณะไม่ว่ากรณีใดๆ
              </p>
            </div>
          </div>

          {/* Internal Audit Banner */}
          <div className="bg-primary/5 border-primary/10 shadow-primary/5 my-16 flex items-start gap-6 rounded-[2rem] border p-10 shadow-2xl">
            <ShieldAlert className="text-primary mt-1 h-7 w-7 shrink-0" />
            <div className="space-y-3">
              <h4 className="text-foreground text-lg font-bold">
                Internal Security Audit (Tier-1)
              </h4>
              <p className="text-muted-foreground m-0 text-sm leading-relaxed font-light">
                ระบบจัดการโครงการมีการบันทึกประวัติการเข้าถึง (Access Log)
                ทุกขั้นตอน ข้อมูลจะถูกเข้ารหัสระดับสูง และจะถูกถอนการติดตั้ง
                (Secure Purge) ออกจากระบบทันทีที่สิ้นสุดสัญญาจ้าง
              </p>
            </div>
          </div>

          <h3 className="font-bold tracking-tight">
            3. สิทธิเหนือข้อมูลส่วนบุคคล
          </h3>
          <p>
            ท่านมีสิทธิในการขอเข้าถึง, แก้ไข, ระงับการใช้งาน หรือสั่งทำลายข้อมูล
            (Right to Erasure) ได้ทุกเวลา
            โดยเราจะดำเนินการทันทีภายในกรอบเวลาปฏิบัติการที่กำหนด
          </p>

          <h3 className="font-bold tracking-tight">
            4. การติดต่อประสานงานด้านความลับ
          </h3>
          <p>
            หากท่านมีข้อสงสัยหรือต้องการยื่นคำร้องเกี่ยวกับข้อมูลส่วนบุคคล
            กรุณาติดต่อทีมประสานงานความปลอดภัยได้ที่: <br />
            <strong className="text-primary font-mono text-sm tracking-widest">
              security@unlink-th.com
            </strong>
          </p>
        </div>
      </section>

      <div className="mt-20">
        <ContactCTA />
      </div>
    </div>
  )
}
