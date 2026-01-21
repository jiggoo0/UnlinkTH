import { Metadata } from "next"
import {
  ShieldCheck,
  Scale,
  AlertTriangle,
  EyeOff,
  Lock,
  Activity,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Editorial & Ethics Policy | นโยบายจริยธรรมและการจัดการข้อมูล",
  description:
    "หลักจริยธรรมและนโยบายการตรวจสอบข้อมูลของ UNLINK-TH เพื่อธำรงไว้ซึ่งความถูกต้องของข้อมูลและสิทธิส่วนบุคคลตามมาตรฐานสากลและ PDPA",
}

export default function EditorialPolicy() {
  return (
    <main className="bg-background relative min-h-screen pt-32 pb-24 lg:pt-48">
      {/* 01: Tactical Background Decor */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        aria-hidden="true"
      >
        <div className="h-full w-full bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="container mx-auto max-w-4xl px-6">
        {/* 02: Header Section */}
        <header className="border-primary mb-20 border-l-4 pl-8">
          <div className="mb-6 flex items-center gap-3">
            <Badge
              variant="outline"
              className="border-primary/30 bg-primary/5 text-primary px-3 py-0.5 font-mono text-[10px] tracking-widest uppercase"
            >
              Standard Protocol
            </Badge>
            <div className="flex items-center gap-1.5 opacity-30">
              <Activity className="text-primary h-3 w-3 animate-pulse" />
              <span className="text-foreground font-mono text-[8px] tracking-tighter uppercase">
                Integrity Verified
              </span>
            </div>
          </div>
          <h1 className="text-foreground mb-6 text-4xl font-extrabold tracking-tighter sm:text-5xl lg:text-7xl">
            Editorial & <br />
            <span className="text-muted-foreground font-light italic">
              Ethics Policy
            </span>
          </h1>
          <p className="text-muted-foreground/80 font-thai max-w-2xl text-lg leading-relaxed">
            นโยบายจริยธรรมและการคัดกรองเนื้อหาของ UNLINK-TH
            ถูกกำหนดขึ้นเพื่อสร้างบรรทัดฐานในการจัดการข้อมูลดิจิทัลที่ถูกต้อง
            ภายใต้การเคารพสิทธิส่วนบุคคลและประโยชน์สาธารณะเป็นสำคัญ
          </p>
        </header>

        {/* 03: Content Matrix */}
        <div className="space-y-20">
          {/* Section 1: Philosophy */}
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="mb-6 flex items-center gap-4">
              <div className="bg-primary/10 rounded-xl p-3">
                <ShieldCheck className="text-primary h-6 w-6" />
              </div>
              <h2 className="text-foreground text-2xl font-bold tracking-tight">
                1. หลักการบริหารจัดการข้อมูล (Core Philosophy)
              </h2>
            </div>
            <div className="prose prose-invert text-muted-foreground font-thai max-w-none leading-loose">
              <p>
                UNLINK-TH ดำเนินการในฐานะ{" "}
                <strong className="text-foreground">Digital Fixer</strong>
                ผู้เชี่ยวชาญด้านการจัดการข้อมูลดิจิทัล
                เรายึดถือหลักการว่าข้อมูลทุกอย่างในโลกออนไลน์ควรมีความถูกต้อง
                ทันสมัย และไม่ละเมิดสิทธิส่วนบุคคล
                ภารกิจของเราคือการแก้ไขข้อผิดพลาดของข้อมูลที่ส่งผลกระทบต่อชีวิตและชื่อเสียง
                โดยใช้กลไกทางเทคนิค (Technical De-indexing) และข้อกฎหมาย PDPA
                อย่างโปร่งใส
              </p>
            </div>
          </section>

          {/* Section 2: Exclusion - CRITICAL FOR E-E-A-T */}
          <section className="border-primary/10 bg-muted/30 animate-in fade-in slide-in-from-bottom-4 rounded-[2.5rem] border p-8 duration-1000 lg:p-12">
            <div className="mb-8 flex items-center gap-4">
              <div className="bg-destructive/10 rounded-xl p-3">
                <AlertTriangle className="text-destructive h-6 w-6" />
              </div>
              <h2 className="text-foreground text-2xl font-bold tracking-tight">
                2. เกณฑ์การปฏิเสธการให้บริการ (Exclusion Criteria)
              </h2>
            </div>
            <p className="text-muted-foreground/90 font-thai mb-8 italic">
              เพื่อธำรงไว้ซึ่งจริยธรรมและประโยชน์สาธารณะ (Public Interest)
              UNLINK-TH จะปฏิเสธการให้บริการในกรณีดังต่อไปนี้อย่างเด็ดขาด:
            </p>
            <div className="font-thai grid gap-6 md:grid-cols-2">
              {[
                {
                  title: "Public Corruption",
                  desc: "คดีทุจริตคอร์รัปชันของนักการเมืองหรือเจ้าหน้าที่รัฐที่มีคำพิพากษาถึงที่สุด",
                },
                {
                  title: "Serious Crime",
                  desc: "ข้อมูลที่เกี่ยวข้องกับคดีอาชญากรรมร้ายแรงที่ส่งผลกระทบต่อความปลอดภัยสาธารณะ",
                },
                {
                  title: "Verified Fact",
                  desc: "ข้อมูลที่เป็นข้อเท็จจริงอันเป็นประโยชน์ต่อสังคมและไม่เป็นการละเมิดสิทธิเกินสมควร",
                },
                {
                  title: "Legal Order",
                  desc: "ข้อมูลที่อยู่ภายใต้คำสั่งศาลในการห้ามลบหรือทำลายเพื่อใช้เป็นพยานหลักฐาน",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="border-border/40 bg-background/50 hover:border-primary/20 rounded-2xl border p-6 transition-colors"
                >
                  <h4 className="text-primary mb-2 text-[10px] font-black tracking-widest uppercase">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground/80 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Verification */}
          <section>
            <div className="mb-6 flex items-center gap-4">
              <div className="bg-primary/10 rounded-xl p-3">
                <EyeOff className="text-primary h-6 w-6" />
              </div>
              <h2 className="text-foreground text-2xl font-bold tracking-tight">
                3. กระบวนการตรวจสอบ (Verification Protocol)
              </h2>
            </div>
            <div className="prose prose-invert text-muted-foreground font-thai max-w-none space-y-4 leading-loose">
              <p>
                ก่อนการรับภารกิจ ทีมปฏิบัติการจะดำเนินการ
                <strong className="text-foreground">
                  {" "}
                  Technical Feasibility Audit
                </strong>{" "}
                เพื่อตรวจสอบเกณฑ์มาตรฐาน:
              </p>
              <ul className="list-disc space-y-3 pl-6">
                <li>
                  การตรวจสอบความล้าสมัยหรือความบิดเบือนของข้อมูล (Data Relevance
                  Audit)
                </li>
                <li>การประเมินผลกระทบต่อสิทธิส่วนบุคคลตามกรอบกฎหมาย PDPA</li>
                <li>
                  การตรวจสอบแหล่งที่มาของข้อมูล (Source Integrity)
                  เพื่อวางแผนกลยุทธ์การถอดถอนอย่างเหมาะสม
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4: Confidentiality */}
          <section>
            <div className="mb-6 flex items-center gap-4">
              <div className="bg-primary/10 rounded-xl p-3">
                <Lock className="text-primary h-6 w-6" />
              </div>
              <h2 className="text-foreground text-2xl font-bold tracking-tight">
                4. มาตรฐานความปลอดภัยข้อมูล (Data Sovereignty)
              </h2>
            </div>
            <div className="border-primary/20 bg-primary/5 rounded-3xl border p-8 md:p-12">
              <p className="text-foreground font-thai text-lg leading-relaxed italic">
                &quot;UNLINK-TH ปฏิบัติตามนโยบาย{" "}
                <strong className="text-primary tracking-tighter uppercase">
                  Secure Purge
                </strong>{" "}
                เอกสารและร่องรอยการสื่อสารทั้งหมด
                จะถูกทำลายทิ้งทันทีหลังสิ้นสุดภารกิจหรือการประเมินงาน
                เราไม่มีนโยบายจัดเก็บฐานข้อมูลลูกความย้อนหลังเพื่อป้องกันความเสี่ยงด้านความปลอดภัย
                100%&quot;
              </p>
            </div>
          </section>
        </div>

        {/* 04: Footer Note */}
        <footer className="border-border/40 mt-32 border-t pt-16 text-center">
          <p className="text-muted-foreground/40 mb-6 font-mono text-[10px] font-bold tracking-[0.4em] uppercase">
            Certified Digital Fixer Operational Protocol
          </p>
          <div className="flex justify-center gap-10 opacity-20">
            <Scale className="text-foreground h-6 w-6" />
            <ShieldCheck className="text-foreground h-6 w-6" />
            <Lock className="text-foreground h-6 w-6" />
          </div>
        </footer>
      </div>
    </main>
  )
}
