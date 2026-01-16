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
import { MessageCircle, HelpCircle } from "lucide-react"
import Link from "next/link"

/**
 * FaqSection: ส่วนแสดงคำถามที่พบบ่อย
 * ใช้ Accordion เพื่อจัดการเนื้อหาปริมาณมากให้ดูสะอาดตา
 */
export default function FaqSection() {
  return (
    <section className="bg-white py-24" id="faq">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Section Header */}
        <div className="mb-16 space-y-4 text-center">
          <Badge
            variant="secondary"
            className="border-none bg-blue-50 px-4 py-1 text-blue-700 hover:bg-blue-100"
          >
            <HelpCircle className="mr-2 h-3 w-3" />
            Common Questions
          </Badge>
          <Typography
            variant="h2"
            className="border-none pb-0 text-3xl font-extrabold tracking-tight md:text-5xl"
          >
            คำถามที่ <span className="text-blue-600">พบบ่อย</span>
          </Typography>
          <Typography variant="p" className="mx-auto max-w-xl text-slate-500">
            รวบรวมข้อสงสัยเบื้องต้นเกี่ยวกับการลบข้อมูล การจัดการ SEO
            และข้อกำหนดทางกฎหมายที่เราพบบ่อยที่สุด
          </Typography>
        </div>

        {/* Accordion List */}
        <div className="rounded-3xl border border-slate-100 bg-slate-50/50 p-4 shadow-sm md:p-8">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border-b-0 bg-white px-4 transition-all data-[state=open]:shadow-md data-[state=open]:ring-1 data-[state=open]:ring-blue-100 md:px-6"
              >
                <AccordionTrigger className="py-6 text-left font-bold text-slate-900 transition-colors hover:text-blue-600 hover:no-underline md:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-slate-600 md:text-base">
                  <div className="border-t border-slate-50 pt-2 italic">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA below FAQ */}
        <div className="relative mt-16 overflow-hidden rounded-3xl bg-blue-600 p-8 text-center text-white shadow-xl shadow-blue-200 md:p-12">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#fff,transparent)] opacity-10" />

          <div className="relative z-10 space-y-6">
            <Typography
              variant="h3"
              className="border-none text-2xl font-bold text-white md:text-3xl"
            >
              ยังมีข้อสงสัยอื่นๆ หรืออยากปรึกษาเคสของคุณ?
            </Typography>
            <Typography variant="p" className="mx-auto max-w-lg text-blue-100">
              ทีมงานของเรายินดีให้คำปรึกษาเบื้องต้นฟรี โดยไม่มีค่าใช้จ่าย
              ทุกข้อมูลจะถูกเก็บเป็นความลับสูงสุด
            </Typography>
            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-white px-8 font-bold text-blue-600 hover:bg-slate-100"
                asChild
              >
                <a
                  href={siteConfig.contact.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5 fill-current" />
                  ทักแชทปรึกษาฟรี
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-300 px-8 font-bold text-white hover:bg-blue-700"
                asChild
              >
                <Link href="/contact">ติดต่อเรา</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
