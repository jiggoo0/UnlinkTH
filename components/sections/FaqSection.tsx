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
    question: "การขอลบข้อมูลหรือประวัติเสียผิดกฎหมายไหม?",
    answer:
      "ไม่ผิดกฎหมายครับ การดำเนินการทั้งหมดอยู่ภายใต้สิทธิ์ 'การถูกลืม' (Right to be Forgotten) ตามกฎหมาย PDPA ของไทยและสากล เราทำหน้าที่เป็นที่ปรึกษาเพื่อช่วยคุณยื่นคำร้องผ่านช่องทางที่ถูกต้อง เพื่อปกป้องสิทธิ์และความเป็นส่วนตัวของคุณจากการถูกใส่ร้ายหรือข้อมูลที่ล้าสมัยครับ",
    icon: ShieldCheck,
  },
  {
    question: "ลบไปแล้ว ข้อมูลจะกลับมาอีกไหม?",
    answer:
      "ข้อมูลที่ลบผ่านกระบวนการ De-indexing ของเราจะเป็นการถอดถอนออกจากฐานข้อมูลการค้นหาถาวรครับ ข้อมูลเดิมจะค้นหาไม่เจออีกแน่นอน อย่างไรก็ตาม เราขอแนะนำให้สร้างประวัติใหม่ที่แข็งแกร่ง (Reputation Shield) ควบคู่ไปด้วย เพื่อป้องกันไม่ให้มีใครพยายามสร้างข่าวเสียใหม่ๆ ในอนาคตครับ",
    icon: Zap,
  },
  {
    question: "ต้องใช้เวลานานแค่ไหนถึงจะเห็นผล?",
    answer:
      "โดยปกติจะเริ่มเห็นการเปลี่ยนแปลงภายใน 7-14 วันทำการครับ ขึ้นอยู่กับความยากง่ายของเว็บต้นทาง แต่เราจะมีการประเมินระยะเวลาที่แน่นอนให้คุณทราบก่อนเริ่มงานเสมอ เพื่อความสบายใจครับ",
    icon: HelpCircle,
  },
  {
    question: "ข้อมูลของฉันจะปลอดภัยและเป็นความลับแค่ไหน?",
    answer:
      "เรายึดถือความเป็นส่วนตัวเป็นเรื่องใหญ่ที่สุดครับ ข้อมูลและเอกสารทั้งหมดจะถูกจัดการในระบบที่ปลอดภัย และจะถูกทำลายทิ้งทันทีหลังจบงาน เพื่อรับประกันว่าความลับของคุณจะตายไปกับเราครับ",
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
            <span>ศูนย์ช่วยเหลือและตอบข้อสงสัย</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl leading-[1.1] font-bold tracking-tighter md:text-6xl">
              คำถาม <br />
              <span className="text-primary font-light italic">ที่พบบ่อย</span>
            </h2>
            <p className="text-muted-foreground max-w-md text-lg leading-relaxed font-light md:text-xl">
              เรารวบรวมข้อสงสัยที่คุณอาจกังวลใจ
              เพื่อความโปร่งใสและมั่นใจในบริการของเรา
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
