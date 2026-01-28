/** @format */

"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle, ShieldCheck, Zap, Lock } from "lucide-react"

/**
 * UNLINK-TH | Intelligence FAQ Section (2026)
 * -------------------------------------------------------------------------
 * ออกแบบเพื่อจัดการข้อโต้แย้ง (Objection Handling) และสร้างความมั่นใจในเชิงเทคนิค
 */

const faqs = [
  {
    question: "การลบลิงก์หรือข่าวเสียผิดกฎหมายหรือไม่?",
    answer:
      "ไม่ผิดกฎหมายครับ เราดำเนินการภายใต้สิทธิ Right to be Forgotten ตามหลักกฎหมาย PDPA ของไทยและมาตรฐาน GDPR สากล โดยใช้เครื่องมือและช่องทางที่ถูกต้องของ Search Engine เพื่อปกป้องสิทธิส่วนบุคคลที่ถูกละเมิด",
    icon: ShieldCheck,
  },
  {
    question: "ลบแล้วมีโอกาสที่ข้อมูลเดิมจะกลับมาอีกไหม?",
    answer:
      "หากเป็นการลบแบบ De-indexing ถาวร ข้อมูลเดิมจะไม่กลับมาใน URL เดิมครับ อย่างไรก็ตาม เราแนะนำให้ทำระบบ Reputation Shield ควบคู่ไปด้วยเพื่อสร้างแนวป้องกันเชิงรุกต่อข้อมูลใหม่ที่อาจเกิดขึ้นในอนาคต",
    icon: Zap,
  },
  {
    question: "ใช้เวลานานเท่าไหร่ถึงจะเห็นผลการดำเนินการ?",
    answer:
      "ปกติกระบวนการถอดถอนดัชนีจะเริ่มแสดงผลภายใน 7-14 วันทำการ ทั้งนี้ขึ้นอยู่กับความซับซ้อนของแพลตฟอร์มต้นทางและปริมาณข้อมูล โดยผู้เชี่ยวชาญจะทำการประเมินกรอบเวลาที่แน่นอนให้ทราบก่อนเริ่มปฏิบัติการ",
    icon: HelpCircle,
  },
  {
    question: "มาตรการรักษาความลับของข้อมูลลูกค้าเป็นอย่างไร?",
    answer:
      "เราถือปฏิบัติภายใต้นโยบาย Non-Disclosure Policy ขั้นสูงสุด ข้อมูลและเอกสารทั้งหมดที่ใช้ในการดำเนินงานจะถูกเข้ารหัสและทำลายทิ้งทันที (Secure Data Purge) หลังเสร็จสิ้นภารกิจ เพื่อรับประกันความปลอดภัยของลูกค้า 100%",
    icon: Lock,
  },
]

export default function FaqSection() {
  return (
    <section className="container py-24" id="faq-protocol">
      <div className="grid gap-16 lg:grid-cols-3">
        {/* Header Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6 lg:col-span-1"
        >
          <div className="bg-primary/5 border-primary/20 text-primary inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] tracking-[0.2em] uppercase">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Support Center</span>
          </div>
          <h2 className="text-4xl leading-[1.1] font-bold tracking-tight">
            คำถามที่พบบ่อย <br />
            <span className="text-muted-foreground font-light">
              เกี่ยวกับบริการ
            </span>
          </h2>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            เราตอบทุกข้อสงสัยเชิงเทคนิคอย่างตรงไปตรงมา
            เพื่อความโปร่งใสในกระบวนการทำงานระดับสถาปนิกจัดการชื่อเสียง
          </p>
        </motion.div>

        {/* Content Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="lab-card border-border/40 bg-muted/5 hover:bg-muted/10 px-8 transition-all"
              >
                <AccordionTrigger className="hover:text-primary group py-8 text-left text-lg font-semibold transition-colors hover:no-underline">
                  <span className="flex items-center gap-4">
                    <span className="text-primary/40 group-hover:text-primary font-mono text-sm transition-colors">
                      0{idx + 1}
                    </span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground/90 border-border/5 border-t pt-4 pb-8 pl-9 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
