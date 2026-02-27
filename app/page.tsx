/** @format */

import Hero from "@/components/shared/Hero"
import ProtocolStepper from "@/components/sections/ProtocolStepper"
import StatusTracker from "@/components/shared/StatusTracker"
import Methods from "@/components/sections/Methods"
import Proof from "@/components/sections/Proof"
import ServiceCard from "@/components/shared/ServiceCard"
import CaseStudyCard from "@/components/shared/CaseStudyCard"
import FaqSection from "@/components/sections/FaqSection"
import ContactCTA from "@/components/sections/ContactCTA"

import { siteConfig } from "@/constants/site-config"
import { servicesData } from "@/constants/services-data"
import { getLatestCaseStudies } from "@/lib/case-studies"
import { Metadata } from "next"

/**
 * UNLINK-TH | Central Intelligence Home (2026)
 * -------------------------------------------------------------------------
 * สถาปัตยกรรมหน้าแรกที่รวบรวมทุก Protocol และผลลัพธ์เชิงประจักษ์
 * ออกแบบมาเพื่อนำเสนอแนวทางการจัดการชื่อเสียงแบบ Dualism (Dark & Bright)
 */

export const metadata: Metadata = {
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
  keywords: siteConfig.seo.keywords,
}

export default async function HomePage() {
  // ดึงบันทึกปฏิบัติการล่าสุด 3 รายการจากฐานข้อมูล MDX
  const latestCases = await getLatestCaseStudies(3)

  return (
    <div className="flex flex-col gap-28 overflow-x-hidden pb-20">
      {/* PHASE 1: Identity & Initial Hook */}
      <Hero />

      {/* PHASE 2: Strategic Protocol (Process flow) */}
      <section className="container scroll-mt-24" id="protocol">
        <div className="mx-auto mb-20 max-w-3xl space-y-4 text-center">
          <h2 className="text-4xl font-bold tracking-tighter md:text-6xl">
            The Unlink Protocol
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed font-light md:text-xl">
            กระบวนการทำงาน 4 ขั้นตอนที่เปลี่ยนวิกฤตชื่อเสียงให้เป็นโอกาสใหม่
            ด้วยการผสานเทคนิคจัดการข้อมูลและนิติศาสตร์ดิจิทัลขั้นสูง
          </p>
        </div>
        <div className="mx-auto mb-12 max-w-4xl">
          <StatusTracker />
        </div>
        <ProtocolStepper />
      </section>

      {/* PHASE 3: Architecture Solutions (Service Display) */}
      <section className="container">
        <div className="bg-muted/5 border-border/40 shadow-primary/5 relative rounded-[3rem] border p-12 shadow-2xl md:p-20">
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="flex flex-col justify-center space-y-8 lg:col-span-1">
              <div className="space-y-4">
                <h2 className="text-4xl leading-none font-bold tracking-tighter">
                  Reputation <br />
                  <span className="text-primary glow-emerald">
                    Architecting
                  </span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed font-light">
                  เราดำเนินการตั้งแต่การถอดถอนข้อมูลที่สร้างความเสียหาย (Unlink)
                  ไปจนถึงการวางรากฐานตัวตนดิจิทัลใหม่ (Architect) อย่างเป็นระบบ
                </p>
              </div>
              <div className="border-border/10 border-t pt-4">
                <span className="text-primary/60 font-mono text-[10px] tracking-[0.3em] uppercase">
                  Total Control Protocol
                </span>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
              {servicesData && servicesData.length > 0 ? (
                servicesData
                  .slice(0, 4)
                  .map((service) =>
                    service ? (
                      <ServiceCard key={service.id} service={service} />
                    ) : null
                  )
              ) : (
                <div className="border-border/20 col-span-2 rounded-3xl border border-dashed py-20 text-center">
                  <p className="text-muted-foreground font-mono text-sm tracking-widest uppercase">
                    Synchronizing Service Data...
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PHASE 4: Technical Expertise (Methods) */}
      <Methods />

      {/* PHASE 5: Proof of Success */}
      <Proof />

      {/* PHASE 6: Verified Outcomes (Case Studies) */}
      <section className="container">
        <div className="border-border/10 mb-16 flex flex-col items-end justify-between gap-8 border-b pb-8 md:flex-row">
          <div className="max-w-xl space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter uppercase">
              Verified Outcomes
            </h2>
            <p className="text-muted-foreground text-lg font-light">
              บันทึกผลลัพธ์จากการปฏิบัติการจริงภายใต้มาตรฐานการรักษาความลับสูงสุด
            </p>
          </div>
          <div className="text-primary/40 font-mono text-[10px] tracking-[0.2em] uppercase">
            Operational Intelligence
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {latestCases.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>

      {/* PHASE 7: Final Liaison (FAQ & CTA) */}
      <div className="space-y-24">
        <FaqSection />
        <ContactCTA />
      </div>
    </div>
  )
}
