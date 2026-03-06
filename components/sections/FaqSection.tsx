/** @format */

"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, ShieldCheck, Zap, Lock } from "lucide-react";

/**
 * UNLINK-TH | Intelligence FAQ Protocol (2026)
 * -------------------------------------------------------------------------
 * ภาคส่วนจัดการข้อโต้แย้งเชิงเทคนิคและกฎหมาย
 * เน้นการสร้างความโปร่งใสในกระบวนการจัดการข้อมูลและการออกแบบตัวตนใหม่
 */

const faqs = [
  {
    question: "การถอดถอนข้อมูลเชิงลบขัดต่อข้อกฎหมายหรือไม่?",
    answer:
      "การดำเนินการทั้งหมดอยู่ภายใต้สิทธิ Right to be Forgotten ตามกรอบกฎหมาย PDPA ของไทยและมาตรฐานสากล เราทำหน้าที่เป็นตัวแทนในการยื่นคำร้องผ่านช่องทางที่ถูกต้องของระบบการค้นหา เพื่อปกป้องสิทธิส่วนบุคคลจากการบิดเบือนข้อมูล",
    icon: ShieldCheck,
  },
  {
    question: "หลังจากดำเนินการลบแล้ว ข้อมูลมีโอกาสจะกลับมาปรากฏซ้ำหรือไม่?",
    answer:
      "การลบผ่านกระบวนการ De-indexing คือการถอดถอนดัชนีออกจากฐานข้อมูลโดยตรง ข้อมูลในที่อยู่เดิมจะไม่กลับมาปรากฏในระบบการค้นหา อย่างไรก็ตาม เราแนะนำให้วางเกราะป้องกันเชิงรุก (Reputation Shield) เพื่อป้องกันความพยายามสร้างข้อมูลใหม่ในอนาคต",
    icon: Zap,
  },
  {
    question: "กรอบเวลามาตรฐานในการเห็นผลลัพธ์ปฏิบัติการคือเท่าใด?",
    answer:
      "โดยปกติระบบการค้นหาจะเริ่มตอบสนองต่อคำร้องและแสดงผลการเปลี่ยนแปลงภายใน 7-14 วันทำการ ทั้งนี้ขึ้นอยู่กับความซับซ้อนของโครงสร้างแพลตฟอร์มต้นทาง ซึ่งจะมีการประเมินกรอบเวลาเฉพาะเคสให้ทราบก่อนเริ่มงาน",
    icon: HelpCircle,
  },
  {
    question: "มาตรการความปลอดภัยและการรักษาความลับข้อมูลลูกค้า?",
    answer:
      "UNLINK-TH ยึดถือ Zero-Knowledge Policy ข้อมูลและเอกสารทั้งหมดจะถูกจัดเก็บในระบบเข้ารหัสชั้นสูง และจะถูกทำลายทิ้งทันที (Secure Shredding) หลังสิ้นสุดภารกิจ เพื่อรับประกันว่าความเป็นส่วนตัวจะถูกปกป้องอย่างสมบูรณ์",
    icon: Lock,
  },
];

export default function FaqSection() {
  return (
    <section className="container py-24" id="faq-protocol">
      <div className="grid gap-20 lg:grid-cols-12">
        {/* Header Column: Strategic Context */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8 lg:col-span-5"
        >
          <div className="bg-primary/5 border-primary/20 text-primary inline-flex items-center gap-3 rounded-full border px-4 py-2 font-mono text-[10px] tracking-[0.3em] uppercase">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Intelligence Support Protocol</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl leading-[1.1] font-bold tracking-tighter md:text-6xl">
              Technical <br />
              <span className="text-primary font-light italic">Inquiries</span>
            </h2>
            <p className="text-muted-foreground max-w-md text-lg leading-relaxed font-light md:text-xl">
              รวบรวมคำตอบเชิงเทคนิคและกฎหมาย
              เพื่อความโปร่งใสในกระบวนการจัดการชื่อเสียงและตัวตนดิจิทัล
            </p>
          </div>

          <div className="border-border/10 border-t pt-8">
            <div className="text-primary/40 flex items-center gap-4 font-mono text-[9px] tracking-widest uppercase">
              <span className="bg-primary/20 h-px w-8"></span>
              Verified Response v4.0.1
            </div>
          </div>
        </motion.div>

        {/* Content Column: The Accordion Interface */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-7"
        >
          <Accordion type="single" collapsible className="w-full space-y-6">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="lab-card border-border/40 bg-muted/5 hover:bg-muted/10 overflow-hidden rounded-[2rem] border px-10 transition-all duration-500"
              >
                <AccordionTrigger className="hover:text-primary group py-10 text-left text-xl font-bold tracking-tight transition-all hover:no-underline">
                  <div className="flex items-center gap-6">
                    <span className="text-primary/20 group-hover:text-primary font-mono text-xs transition-colors duration-500">
                      /{(idx + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="leading-tight">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground border-border/5 border-t pt-6 pb-10 pl-14 text-lg leading-relaxed font-light">
                  <div className="max-w-2xl">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
