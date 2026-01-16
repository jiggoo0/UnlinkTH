import Hero from "@/components/landing/Hero"
import Methods from "@/components/landing/Methods"
import Proof from "@/components/landing/Proof"
import CaseStudySection from "@/components/shared/CaseStudySection"
import ContactCTA from "@/components/landing/ContactCTA"
import FaqSection from "@/components/shared/FaqSection"
import JsonLd from "@/components/seo/JsonLd"

/**
 * Metadata สำหรับหน้าแรก เพื่อผลด้าน SEO
 * ปรับเปลี่ยนให้ตรงกับ keywords ของธุรกิจ
 */
export const metadata = {
  title: "Unlink-TH | กู้คืนชื่อเสียงออนไลน์และการจัดการข้อมูลดิจิทัลครบวงจร",
  description:
    "ปรึกษาฟรี! บริการลบข้อมูลแบล็กลิสต์ จัดการข่าวปลอม และทำ SEO Push เพื่อปกป้องความเป็นส่วนตัวของคุณด้วยทีมงานมืออาชีพ",
}

export default function HomePage() {
  return (
    <>
      {/* 1. SEO & Structured Data - ช่วยให้ Google เข้าใจโครงสร้างเว็บได้ดีขึ้น */}
      <JsonLd />

      <main className="flex min-h-screen flex-col overflow-hidden">
        {/* 2. Hero Section - เปิดตัวด้วย Value Proposition ที่ชัดเจน */}
        <Hero />

        {/* 3. Methods Section - วิธีการทำงาน 3 รูปแบบหลัก */}
        <section id="services">
          <Methods />
        </section>

        {/* 4. CaseStudySection - สร้าง Social Proof ด้วยผลงานจริงจาก MDX */}
        <section className="bg-white">
          <CaseStudySection />
        </section>

        {/* 5. Proof Section - ขั้นตอนการทำงาน (Protocol) เพื่อความโปร่งใส */}
        <Proof />

        {/* 6. FaqSection - เคลียร์ข้อสงสัย (Objection Handling) ก่อนการติดต่อ */}
        <section className="bg-slate-50/50 py-12 md:py-20">
          <FaqSection />
        </section>

        {/* 7. ContactCTA - ส่วนปิดการขายท้ายหน้า (Final Call to Action) */}
        <ContactCTA />
      </main>
    </>
  )
}
