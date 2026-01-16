import { faqData } from "@/content/faq-data"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata = {
  title: "คำถามที่พบบ่อย (FAQ) | Unlink-TH",
  description:
    "รวมข้อสงสัยเกี่ยวกับการลบข้อมูลแบล็กลิสต์ การจัดการข่าวเสีย และสิทธิ์ PDPA",
}

export default function FAQPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-20">
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-slate-900">
          คำถามที่พบบ่อย
        </h1>
        <p className="text-lg text-slate-600">
          รวมคำแนะนำและขั้นตอนการดำเนินงานเบื้องต้นเพื่อความสบายใจของลูกค้า
        </p>
      </section>

      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqData.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="rounded-xl border bg-white px-6 shadow-sm"
          >
            <AccordionTrigger className="py-6 text-left text-lg font-medium text-slate-800 hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-base leading-relaxed text-slate-600">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-16 rounded-2xl bg-blue-50 p-8 text-center">
        <h3 className="mb-2 text-xl font-semibold text-slate-900">
          ยังมีคำถามอื่นเพิ่มเติม?
        </h3>
        <p className="mb-6 text-slate-600">
          ปรึกษาทีมงานเพื่อประเมินเคสของคุณได้ฟรี ไม่มีค่าใช้จ่าย
        </p>
        <div className="flex justify-center">
          <button className="rounded-full bg-[#00B900] px-8 py-3 font-bold text-white transition-transform hover:scale-105 active:scale-95">
            คุยกับเราทาง LINE
          </button>
        </div>
      </div>
    </main>
  )
}
