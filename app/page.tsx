import type { Metadata } from "next"
import Hero from "@/components/landing/Hero"
import Methods from "@/components/landing/Methods"
import Proof from "@/components/landing/Proof"
import CaseStudySection from "@/components/shared/CaseStudySection"
import ContactCTA from "@/components/landing/ContactCTA"
import FaqSection from "@/components/shared/FaqSection"
import JsonLd from "@/components/seo/JsonLd"

/**
 * ✅ Metadata สำหรับหน้าแรก (Landing Page)
 * ปรับปรุงให้มีความเป็นมืออาชีพและเน้น Keyword สำคัญ
 */
export const metadata: Metadata = {
  title: "Unlink Thailand | บริการลบชื่อแบล็กลิสต์และจัดการชื่อเสียงออนไลน์",
  description:
    "กู้คืนความสะอาดให้ชื่อเสียงออนไลน์ของคุณ ปรึกษาฟรี! บริการลบแบล็กลิสต์ จัดการข่าวปลอม และใช้สิทธิ์ PDPA โดยทีมงานมืออาชีพที่เป็นกันเองเหมือนพี่น้อง",
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return (
    <>
      {/* 1. SEO & Structured Data */}
      <JsonLd />

      <main className="flex min-h-screen flex-col overflow-x-hidden">
        {/* 2. Hero Section - ดึงดูดความสนใจด้วยปัญหาและทางออก */}
        <Hero />

        {/* 3. Methods Section - บริการและวิธีการทำงานหลัก */}
        <section id="services" className="scroll-mt-20">
          <Methods />
        </section>

        {/* 4. Case Study Section - โชว์ผลงานจริงจากระบบ MDX */}
        <section id="cases" className="scroll-mt-20 bg-white">
          <CaseStudySection />
        </section>

        {/* 5. Proof Section - แสดงโปรโตคอลการทำงานที่โปร่งใส */}
        <section id="process" className="scroll-mt-20">
          <Proof />
        </section>

        {/* 6. FAQ Section - จัดการข้อสงสัยเบื้องต้น */}
        <section
          id="faq"
          className="scroll-mt-20 bg-slate-50/50 py-16 md:py-24"
        >
          <div className="container mx-auto">
            <FaqSection />
          </div>
        </section>

        {/* 7. Contact CTA - ส่วนกระตุ้นการตัดสินใจสุดท้าย */}
        <ContactCTA />
      </main>
    </>
  )
}
