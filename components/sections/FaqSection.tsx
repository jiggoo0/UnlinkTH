"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Terminal,
  ShieldQuestion,
  Fingerprint,
  Activity,
} from "lucide-react";
import { motion } from "framer-motion";

/**
 * 
 * FAQ Data Strategy:
 * ข้อมูลคำถามที่พบบ่อยที่ถูกออกแบบมาเพื่อไขข้อสงสัยเชิงเทคนิคและความปลอดภัยของข้อมูล
 */
const faqs = [
  {
    id: "item-1",
    question: "การลบลิงก์จาก Google ใช้เวลานานเท่าไหร่?",
    answer:
      "โดยปกติกระบวนการ De-indexing ในระดับเทคนิคจะใช้เวลาประมาณ 24-72 ชั่วโมง หลังจากระบบตรวจสอบ Metadata และอนุมัติคำร้อง อย่างไรก็ตาม ระยะเวลาโดยรวมอาจขึ้นอยู่กับความซับซ้อนของข้อมูลและนโยบายของเว็บไซต์ต้นทางในแต่ละกรณี",
  },
  {
    id: "item-2",
    question: "ข้อมูลที่ถูกถอดถอนแล้วมีโอกาสกลับมาปรากฏใหม่หรือไม่?",
    answer:
      "เราใช้โปรโตคอลการถอดถอนแบบถาวร (Permanent Removal) และมีการติดตั้งระบบเฝ้าระวัง (Monitoring System) เพื่อตรวจจับการ Re-indexing หากข้อมูลเดิมกลับมาปรากฏซ้ำภายในระยะเวลาประกัน เราดำเนินการจัดการใหม่ทันทีโดยไม่มีค่าใช้จ่าย",
  },
  {
    id: "item-3",
    question: "กระบวนการนี้ถูกต้องตามกฎหมายและเป็นความลับเพียงใด?",
    answer:
      "การดำเนินการทั้งหมดอยู่ภายใต้กรอบกฎหมาย PDPA และหลักสิทธิในการถูกลืม (Right to be Forgotten) ข้อมูลทุกอย่างที่ได้รับจากท่านจะถูกเข้ารหัสและทำลายทิ้งทันทีหลังจากปิดภารกิจตามมาตรฐาน Confidentiality Protocol ของเรา",
  },
  {
    id: "item-4",
    question: "ขั้นตอนการประเมินค่าใช้จ่ายมีเกณฑ์อย่างไร?",
    answer:
      "ค่าใช้จ่ายจะถูกประเมินตามความยากง่ายเชิงเทคนิค จำนวน URL และระดับความเสียหาย ข้อมูลราคาจะถูกเสนออย่างโปร่งใสหลังจาก Specialist ได้ทำการประเมินความเป็นไปได้เชิงเทคนิค (Technical Feasibility Audit) เบื้องต้นแล้วเท่านั้น",
  },
];

export default function FaqSection() {
  return (
    <section className="relative w-full py-24 lg:py-32">
      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* 01: Strategy Header Segment - Authority & Context */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="sticky top-32"
            >
              <div className="mb-6 flex items-center gap-3">
                <Badge
                  variant="outline"
                  className="border-primary/30 bg-primary/5 px-4 py-1.5 font-mono text-[10px] tracking-[0.2em] text-primary uppercase"
                >
                  Knowledge Base
                </Badge>
                <div className="flex items-center gap-1.5 opacity-30">
                  <Activity className="h-3 w-3 animate-pulse text-primary" />
                  <span className="font-mono text-[8px] tracking-tighter uppercase">
                    Query System Active
                  </span>
                </div>
              </div>

              <h2 className="mb-8 text-4xl font-extrabold tracking-tighter text-foreground md:text-6xl">
                คำถามที่พบบ่อย <br />
                <span className="font-light italic text-muted-foreground">
                  เชิงเทคนิคและระเบียบการ
                </span>
              </h2>

              <p className="mb-10 text-lg leading-relaxed text-muted-foreground/80 md:text-xl">
                เพื่อความโปร่งใสในกระบวนการจัดการ Digital Footprint
                เราได้รวบรวมข้อสงสัยเบื้องต้นเกี่ยวกับระบบบริหารจัดการข้อมูลและมาตรการรักษาความปลอดภัย
              </p>

              <div className="flex items-center gap-4 rounded-2xl border border-border/40 bg-muted/5 p-4 transition-colors hover:bg-muted/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <ShieldQuestion className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] font-black tracking-widest text-foreground uppercase">
                    Verified Protocol Docs
                  </span>
                  <span className="text-[10px] italic text-muted-foreground">
                    Last Updated: 2026.01.21
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 02: Tactical Accordion Segment - Interactive Q&A */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq) => (
                  <AccordionItem
                    key={faq.id}
                    value={faq.id}
                    className="overflow-hidden rounded-[1.5rem] border border-border/40 bg-muted/5 px-6 transition-all hover:border-primary/20 hover:bg-muted/10 data-[state=open]:border-primary/30 data-[state=open]:bg-muted/15"
                  >
                    <AccordionTrigger className="group py-6 hover:no-underline">
                      <div className="flex items-center gap-5 text-left">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/40 bg-background shadow-sm transition-all duration-300 group-hover:rotate-12 group-hover:border-primary/50 group-hover:bg-primary/5">
                          <Terminal className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-base font-bold tracking-tight text-foreground transition-colors group-hover:text-primary md:text-lg">
                          {faq.question}
                        </span>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="pb-8 pl-[60px] pr-4">
                      <div className="relative border-l-2 border-primary/20 pl-8">
                        <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--color-primary),0.5)]" />
                        <p className="text-sm italic leading-loose text-muted-foreground/90 md:text-base">
                          {faq.answer}
                        </p>

                        <div className="mt-6 flex items-center gap-2 opacity-20">
                          <Fingerprint className="h-3 w-3 text-primary" />
                          <span className="font-mono text-[8px] tracking-widest uppercase">
                            Confidential Solution Verified
                          </span>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>

            {/* 03: Integrity Note - Visual Validation */}
            <div className="mt-12 flex items-center justify-center gap-4 text-center">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border/40 to-transparent" />
              <div className="flex items-center gap-2 opacity-30">
                <div className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(var(--color-primary),0.5)]" />
                <p className="font-mono text-[9px] font-bold tracking-[0.4em] uppercase text-muted-foreground">
                  Security Cleared Information Center
                </p>
                <div className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_5px_rgba(var(--color-primary),0.5)]" />
              </div>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
