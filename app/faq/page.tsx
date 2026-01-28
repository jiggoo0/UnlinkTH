/** @format */

import { Metadata } from "next"
import { siteConfig } from "@/constants/site-config"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  HelpCircle,
  ShieldCheck,
  Scale,
  Globe,
  Lock,
  MessageCircle,
} from "lucide-react"
import ContactCTA from "@/components/sections/ContactCTA"

export const metadata: Metadata = {
  title: "FAQ & Knowledge Center | UnlinkTH",
  description:
    "รวบรวมคำถามที่พบบ่อยเกี่ยวกับกระบวนการ De-indexing, การจัดการภาพลักษณ์ออนไลน์ (ORM) และข้อกฎหมาย PDPA",
}

// ข้อมูลคำถามแบ่งตามหมวดหมู่ (Architect Strategy)
const faqCategories = [
  {
    id: "cleanup",
    label: "Cleanup & Removal",
    icon: ShieldCheck,
    questions: [
      {
        q: "บริการ De-indexing คืออะไร และต่างจากการลบปกติอย่างไร?",
        a: "De-indexing คือกระบวนการทางเทคนิคเพื่อแจ้งให้ Search Engine (เช่น Google) ถอนดัชนี URL ออกจากฐานข้อมูลถาวร ข้อมูลจะไม่ปรากฏในการค้นหาแม้จะใช้คีย์เวิร์ดที่ตรงตัว ต่างจากการลบโพสต์ทั่วไปที่อาจยังมี Cache หรือข้อมูลตกค้างอยู่ในระบบการค้นหาครับ",
      },
      {
        q: "สามารถลบกระทู้ Pantip หรือข่าวอาชญากรรมเก่าได้จริงหรือไม่?",
        a: "ทำได้ครับ หากข้อมูลนั้นเข้าข่ายละเมิดสิทธิส่วนบุคคล บิดเบือน หรือเป็นข้อมูลที่สิ้นสุดผลทางกฎหมายแล้ว เราจะใช้มาตรการทางเทคนิคร่วมกับข้อกฎหมาย PDPA เพื่อดำเนินการถอดถอนข้อมูลเหล่านั้นออกอย่างถาวร",
      },
    ],
  },
  {
    id: "architect",
    label: "Reputation Architecting",
    icon: Globe,
    questions: [
      {
        q: "SEO Shadowing ทำงานอย่างไร?",
        a: "เป็นกลยุทธ์เชิงรุกโดยการสร้าง 'กำแพงเนื้อหาเชิงบวก' (Positive Assets) ที่มีความน่าเชื่อถือสูง เพื่อเข้ายึดครองพื้นที่หน้าแรกของ Google ผลลัพธ์คือข้อมูลที่คุณต้องการให้โลกเห็นจะโดดเด่นขึ้นมา และเบียดข่าวเสียเดิมให้ตกไปอยู่ในหน้าหลังที่ไม่มีคนเข้าถึง",
      },
      {
        q: "การสร้างตัวตนใหม่บน Google ใช้เวลานานแค่ไหน?",
        a: "สำหรับการสร้างภาพลักษณ์ใหม่ (Architecting) จะเริ่มเห็นผลใน 4-8 สัปดาห์ เนื่องจากต้องรอให้ Google Bot เข้ามาเก็บข้อมูลและประเมินค่าความน่าเชื่อถือ (E-E-A-T) ของเนื้อหาใหม่ที่เราวางระบบไว้ครับ",
      },
    ],
  },
  {
    id: "legal",
    label: "Security & Legal",
    icon: Scale,
    questions: [
      {
        q: "ความลับของลูกค้าจะถูกจัดการอย่างไร?",
        a: "เรายึดถือมาตรฐานสูงสุด (Non-Disclosure Protocol) ข้อมูลทุกอย่างจะถูกเข้ารหัส และไม่มีการเปิดเผยชื่อลูกค้าหรือเคสในเชิงพาณิชย์หากไม่ได้รับอนุญาต ทีมงานทุกคนทำงานภายใต้สัญญา NDA ที่เข้มงวด",
      },
      {
        q: "โมเดล Success Fee คืออะไร?",
        a: "สำหรับบริการลบลิ้งก์บางประเภท เราใช้โมเดล 'Success-Based' คือลูกค้าจะชำระค่าธรรมเนียมส่วนใหญ่ต่อเมื่อการดำเนินการสำเร็จและลิงก์หายไปจากหน้า Google แล้วเท่านั้น เพื่อความมั่นใจสูงสุดของคุณครับ",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="pb-20">
      {/* Header Section */}
      <header className="bg-muted/20 border-border/50 border-b py-24">
        <div className="container">
          <div className="max-w-3xl space-y-6">
            <div className="bg-primary/10 border-primary/20 text-primary inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs">
              <HelpCircle className="h-4 w-4" />
              <span>Unlink Support Protocol</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter md:text-6xl">
              Questions & <span className="text-primary">Intelligence</span>
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              เจาะลึกทุกข้อสงสัยเกี่ยวกับการจัดการอัตลักษณ์ดิจิทัล
              จากมุมมองวิศวกรรมข้อมูลและที่ปรึกษาด้านชื่อเสียง
            </p>
          </div>
        </div>
      </header>

      {/* FAQ Grid */}
      <section className="container py-20">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Side Info */}
          <aside className="space-y-8 lg:col-span-4">
            <div className="lab-card sticky top-24 p-8">
              <Lock className="text-primary mb-6 h-8 w-8" />
              <h3 className="mb-4 text-xl font-bold">Secure Support</h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                หากคุณมีคำถามที่ละเอียดอ่อนและไม่สามารถเปิดเผยในที่สาธารณะได้
                เราแนะนำให้ปรึกษาผ่านช่องทางส่วนตัวที่ปลอดภัย
              </p>
              <a
                href={siteConfig.contact.lineUrl}
                className="text-primary inline-flex items-center gap-2 font-bold hover:underline"
              >
                <MessageCircle className="h-4 w-4" />
                Private Consultation →
              </a>
            </div>
          </aside>

          {/* FAQ Content */}
          <main className="space-y-16 lg:col-span-8">
            {faqCategories.map((category) => (
              <div key={category.id} className="space-y-6">
                <div className="border-border/50 flex items-center gap-3 border-b pb-4">
                  <category.icon className="text-primary h-5 w-5" />
                  <h2 className="text-foreground/80 text-xl font-bold tracking-widest uppercase">
                    {category.label}
                  </h2>
                </div>

                <Accordion
                  type="single"
                  collapsible
                  className="w-full space-y-4"
                >
                  {category.questions.map((item, idx) => (
                    <AccordionItem
                      key={idx}
                      value={`${category.id}-${idx}`}
                      className="lab-card border-none px-6"
                    >
                      <AccordionTrigger className="hover:text-primary py-6 text-left font-medium transition-colors">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </main>
        </div>
      </section>

      {/* CTA Section */}
      <ContactCTA />
    </div>
  )
}
