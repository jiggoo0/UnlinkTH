"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqData } from "@/content/faq-data"
import { Typography } from "@/components/ui/typography"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/constants/site-config"
import { MessageCircle, HelpCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

/**
 * FaqSection: ส่วนแสดงคำถามที่พบบ่อย
 * ✅ ใช้ Accordion แบบ Clean Design
 * ✅ เน้นความอ่านง่ายและความลื่นไหลของแอนิเมชัน
 * ✅ เพิ่มความเชื่อมั่นด้วยส่วนท้ายที่เน้นความเป็นส่วนตัว
 */
export default function FaqSection() {
  return (
    <section className="bg-white py-24 sm:py-32" id="faq">
      <div className="container mx-auto max-w-4xl px-4">
        {/* --- Section Header --- */}
        <div className="mb-16 space-y-4 text-center">
          <Badge
            variant="secondary"
            className="border-none bg-blue-50 px-5 py-1.5 text-xs font-black tracking-widest text-blue-700 uppercase"
          >
            <HelpCircle className="mr-2 h-3.5 w-3.5" />
            Common Questions
          </Badge>
          <Typography
            variant="h2"
            className="border-none pb-0 text-3xl font-black tracking-tight text-slate-900 md:text-5xl"
          >
            คำถามที่ <span className="text-blue-600 italic">พบบ่อย</span>
          </Typography>
          <Typography
            variant="p"
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-500"
          >
            รวบรวมข้อสงสัยเบื้องต้นเกี่ยวกับการลบข้อมูล การจัดการ SEO
            และข้อกำหนดทางกฎหมายที่เราพบบ่อยที่สุด
          </Typography>
        </div>

        {/* --- Accordion List --- */}
        <div className="rounded-[2.5rem] border border-slate-100 bg-slate-50/50 p-4 shadow-sm md:p-10">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-2xl border-none bg-white px-5 shadow-sm transition-all duration-300 data-[state=open]:shadow-xl data-[state=open]:ring-1 data-[state=open]:shadow-blue-500/5 data-[state=open]:ring-blue-100 md:px-8"
              >
                <AccordionTrigger className="py-7 text-left font-extrabold text-slate-900 transition-colors hover:text-blue-600 hover:no-underline md:text-xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-8 text-base leading-relaxed text-slate-600 md:text-lg">
                  <div className="border-t border-slate-50 pt-5 font-medium">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* --- Contact CTA Card --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-20 overflow-hidden rounded-[2.5rem] bg-blue-600 p-10 text-center text-white shadow-2xl shadow-blue-500/20 md:p-16"
        >
          {/* Decorative Pattern Layer */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#fff,transparent)] opacity-10" />
          <div className="absolute -right-12 -bottom-12 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl" />

          <div className="relative z-10 space-y-8">
            <Typography
              variant="h3"
              className="border-none text-2xl leading-tight font-black text-white md:text-4xl"
            >
              ยังมีข้อสงสัยอื่นๆ <br className="sm:hidden" />{" "}
              หรืออยากปรึกษาเคสของคุณ?
            </Typography>
            <Typography
              variant="p"
              className="mx-auto max-w-lg text-lg font-medium text-blue-100"
            >
              ทีมงานของเรายินดีให้คำปรึกษาเบื้องต้นฟรี
              ทุกข้อมูลจะถูกเก็บเป็นความลับสูงสุดภายใต้ข้อตกลงการบริการ
            </Typography>

            <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
              <Button
                size="lg"
                className="h-14 bg-white px-10 text-lg font-black text-blue-600 shadow-xl transition-all hover:bg-slate-50 active:scale-95"
                asChild
              >
                <a
                  href={siteConfig.contact.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-6 w-6 fill-current" />
                  ทักแชทปรึกษาฟรี
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-14 border-blue-300 bg-transparent px-10 text-lg font-black text-white transition-all hover:bg-blue-700 active:scale-95"
                asChild
              >
                <Link href="/contact" className="group">
                  ติดต่อเรา
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
