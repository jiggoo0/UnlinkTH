/** @format */

import Hero from "@/components/shared/Hero";
import ProtocolStepper from "@/components/sections/ProtocolStepper";
import Methods from "@/components/sections/Methods";
import ServiceCard from "@/components/shared/ServiceCard";
import CaseStudyCard from "@/components/shared/CaseStudyCard";
import FaqSection from "@/components/sections/FaqSection";
import ContactCTA from "@/components/sections/ContactCTA";

import { servicesData } from "@/constants/services-data";
import { getLatestCaseStudies } from "@/lib/case-studies";

/**
 * UNLINK-TH | Central Intelligence Home (2026)
 * -------------------------------------------------------------------------
 * สถาปัตยกรรมหน้าแรกที่รวบรวมทุก Protocol และผลลัพธ์เชิงประจักษ์
 */

export default async function HomePage() {
  // ดึงบันทึกปฏิบัติการล่าสุด 3 รายการ
  const latestCases = await getLatestCaseStudies(3);

  return (
    <div className="flex flex-col gap-28 overflow-x-hidden pb-20">
      
      {/* PHASE 1: Identity & Initial Hook */}
      <Hero />

      {/* PHASE 2: Strategic Protocol (Process flow) */}
      <section className="container scroll-mt-24" id="protocol">
        <div className="mx-auto mb-20 max-w-3xl text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tighter md:text-6xl">
            The Unlink Protocol
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl font-light leading-relaxed">
            กระบวนการทำงาน 4 ขั้นตอนที่เปลี่ยนวิกฤตชื่อเสียงให้เป็นโอกาสใหม่ 
            ด้วยการผสานเทคโนโลยีจัดการข้อมูลและนิติศาสตร์ดิจิทัลขั้นสูง
          </p>
        </div>
        <ProtocolStepper />
      </section>

      {/* PHASE 3: Architecture Solutions (Service Display) */}
      
      <section className="container">
        <div className="bg-muted/5 border-border/40 relative rounded-[3rem] border p-12 md:p-20 shadow-2xl shadow-primary/5">
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="flex flex-col justify-center space-y-8 lg:col-span-1">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tighter leading-none">
                  Reputation <br />
                  <span className="text-primary glow-emerald">Architecting</span>
                </h2>
                <p className="text-muted-foreground text-lg font-light leading-relaxed">
                  เราดำเนินการตั้งแต่การถอดถอนข้อมูลที่สร้างความเสียหาย (Unlink) 
                  ไปจนถึงการวางรากฐานตัวตนดิจิทัลใหม่ (Architect) อย่างเป็นระบบ
                </p>
              </div>
              <div className="pt-4 border-t border-border/10">
                <span className="text-[10px] font-mono text-primary/60 uppercase tracking-[0.3em]">
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
                <div className="col-span-2 py-20 text-center border border-dashed border-border/20 rounded-3xl">
                  <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest">
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

      {/* PHASE 5: Verified Outcomes (Case Studies) */}
      <section className="container">
        <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row border-b border-border/10 pb-8">
          <div className="max-w-xl space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter uppercase">
              Verified Outcomes
            </h2>
            <p className="text-muted-foreground font-light text-lg">
              บันทึกผลลัพธ์จากการปฏิบัติการจริงภายใต้มาตรฐานการรักษาความลับสูงสุด
            </p>
          </div>
          <div className="text-[10px] font-mono text-primary/40 uppercase tracking-[0.2em]">
            Operational Intelligence
          </div>
        </div>
        
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {latestCases.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </section>

      {/* PHASE 6: Final Liaison (FAQ & CTA) */}
      <div className="space-y-24">
        <FaqSection />
        <ContactCTA />
      </div>
    </div>
  );
}
