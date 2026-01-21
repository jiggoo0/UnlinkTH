import { Metadata } from "next";
import { ShieldCheck, Scale, AlertTriangle, EyeOff, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Editorial & Ethics Policy | นโยบายจริยธรรมข้อมูล",
  description:
    "หลักจริยธรรมและนโยบายการตรวจสอบข้อมูลของ UNLINK เพื่อธำรงไว้ซึ่งความถูกต้องและสิทธิส่วนบุคคลตามมาตรฐานสากล",
};

export default function EditorialPolicy() {
  return (
    <main className="relative min-h-screen bg-background pb-24 pt-32">
      {/* Background Decor */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        aria-hidden="true"
      >
        <div className="h-full w-full bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="container mx-auto max-w-4xl px-6">
        {/* Header Section */}
        <div className="mb-16 border-l-4 border-primary pl-8">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tighter text-foreground sm:text-5xl lg:text-6xl">
            Editorial & <br />
            <span className="font-light italic text-muted-foreground">
              Ethics Policy
            </span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            นโยบายจริยธรรมและการคัดกรองเนื้อหาของ UNLINK
            ถูกกำหนดขึ้นเพื่อสร้างบรรทัดฐานในการจัดการข้อมูลดิจิทัลที่ถูกต้อง
            ภายใต้การเคารพสิทธิส่วนบุคคลและประโยชน์สาธารณะเป็นสำคัญ
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-16">
          {/* 01: Core Philosophy */}
          <section>
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-xl bg-primary/10 p-3">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                1. หลักการบริหารจัดการข้อมูล (Core Philosophy)
              </h2>
            </div>
            <div className="prose prose-invert max-w-none leading-loose text-muted-foreground">
              <p>
                UNLINK ดำเนินการในฐานะ <strong>Digital Fixer</strong>{" "}
                ผู้เชี่ยวชาญด้านการจัดการข้อมูลดิจิทัล
                เรายึดถือหลักการว่าข้อมูลทุกอย่างในโลกออนไลน์ควรมีความถูกต้อง
                ทันสมัย และไม่ละเมิดสิทธิส่วนบุคคล
                ภารกิจของเราคือการแก้ไขข้อผิดพลาดของข้อมูลที่ส่งผลกระทบต่อชีวิตและชื่อเสียง
                โดยใช้กลไกทางเทคนิค (Technical De-indexing) และข้อกฎหมาย PDPA
                อย่างโปร่งใส
              </p>
            </div>
          </section>

          {/* 02: Exclusion Criteria (Key for Google E-E-A-T) */}
          <section className="rounded-[2.5rem] border border-primary/10 bg-muted/30 p-8 lg:p-12">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-xl bg-destructive/10 p-3">
                <AlertTriangle className="h-6 w-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                2. เกณฑ์การปฏิเสธการให้บริการ (Exclusion Criteria)
              </h2>
            </div>
            <p className="mb-8 italic text-muted-foreground">
              เพื่อธำรงไว้ซึ่งจริยธรรมและประโยชน์สาธารณะ (Public Interest) UNLINK
              จะปฏิเสธการให้บริการในกรณีดังต่อไปนี้อย่างเด็ดขาด:
            </p>
            <ul className="grid gap-6 text-sm md:grid-cols-2">
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
                <li
                  key={idx}
                  className="rounded-2xl border border-border/40 bg-background/50 p-6"
                >
                  <h4 className="mb-2 text-[10px] font-black uppercase tracking-widest text-primary">
                    {item.title}
                  </h4>
                  <p className="leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {/* 03: Verification Process */}
          <section>
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-xl bg-primary/10 p-3">
                <EyeOff className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                3. กระบวนการตรวจสอบ (Verification Protocol)
              </h2>
            </div>
            <div className="prose prose-invert max-w-none space-y-4 leading-loose text-muted-foreground">
              <p>
                ก่อนการรับภารกิจ ทีมงาน UNLINK จะดำเนินการ{" "}
                <strong>Technical Feasibility Audit</strong> เพื่อตรวจสอบว่า:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>ข้อมูลดังกล่าวมีความบิดเบือน ล้าสมัย หรือละเมิดสิทธิส่วนบุคคลจริง</li>
                <li>
                  การถอดถอนข้อมูลไม่ขัดต่อหลักเกณฑ์ของแพลตฟอร์มและกฎหมายสากล
                </li>
                <li>
                  แหล่งที่มาของข้อมูล (Data Source)
                  มีกลไกที่สามารถดำเนินการทางเทคนิคได้
                </li>
              </ul>
            </div>
          </section>

          {/* 04: Anonymity & Privacy */}
          <section>
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-xl bg-primary/10 p-3">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                4. มาตรฐานการรักษาความลับ (Confidentiality)
              </h2>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 italic text-muted-foreground">
              &quot;UNLINK ปฏิบัติตามนโยบาย <strong>Secure Purge</strong>{" "}
              ข้อมูลเอกสารและร่องรอยการสื่อสารทั้งหมด
              จะถูกทำลายทิ้งทันทีหลังสิ้นสุดภารกิจหรือการประเมินงาน
              เราไม่มีนโยบายการจัดเก็บฐานข้อมูลลูกความย้อนหลังเพื่อป้องกันความเสี่ยงด้านความปลอดภัย
              100%&quot;
            </div>
          </section>
        </div>

        {/* Footer Note */}
        <div className="mt-20 border-t border-border/40 pt-12 text-center">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60">
            Certified Digital Fixer Protocol
          </p>
          <div className="flex justify-center gap-8">
            <Scale className="h-5 w-5 text-muted-foreground/30" />
            <ShieldCheck className="h-5 w-5 text-muted-foreground/30" />
            <Lock className="h-5 w-5 text-muted-foreground/30" />
          </div>
        </div>
      </div>
    </main>
  );
}
