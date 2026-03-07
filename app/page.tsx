/** @format */

import { Metadata } from "next";
import { Suspense } from "react";
import { siteConfig } from "@/constants/site-config";
import { getAllServices } from "@/lib/services";
import { getLatestCaseStudies } from "@/lib/case-studies";

// 📦 Shared Components
import Hero from "@/components/shared/Hero";
import ServiceCard from "@/components/shared/ServiceCard";
import CaseStudyCard from "@/components/shared/CaseStudyCard";
import StatusTracker from "@/components/shared/StatusTracker";

// 📦 Section Components
import { PortfolioSection } from "@/components/sections/portfolio";
import { SecureChannel } from "@/components/sections/SecureChannel";
import ProtocolStepper from "@/components/sections/ProtocolStepper";
import Methods from "@/components/sections/Methods";
import FaqSection from "@/components/sections/FaqSection";

/**
 * UNLINK-GLOBAL | High-Signal Home (2026)
 */

export async function generateMetadata(): Promise<Metadata> {
  const seo = siteConfig?.seo || {};
  return {
    title: seo.defaultTitle || "UNLINK-GLOBAL",
    description: seo.defaultDescription,
    keywords: seo.keywords,
  };
}

// แยกส่วนบริการออกมาเป็น Component ย่อยเพื่อทำ Suspense
async function ServicesGrid() {
  const servicesData = await getAllServices().catch(() => []);

  if (servicesData.length === 0) {
    return (
      <div className="border-border/20 col-span-2 rounded-3xl border border-dashed py-20 text-center">
        <p className="text-muted-foreground font-mono text-sm uppercase tracking-widest">
          กำลังดึงข้อมูลระบบ...
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
      {servicesData.slice(0, 4).map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}

// แยกส่วน Case Studies ออกมาเป็น Component ย่อย
async function LatestCaseStudies() {
  const latestCases = await getLatestCaseStudies(3).catch(() => []);

  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {latestCases.map((study, index) => (
        <CaseStudyCard key={study.slug} study={study} priority={index < 2} />
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24 overflow-x-hidden pb-20">
      {/* 1. Hero Section - แสดงผลทันที */}
      <Hero />

      {/* 2. Protocol & How it Works */}
      <section className="container scroll-mt-24" id="protocol">
        <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
          <h2 className="text-4xl font-bold tracking-tighter md:text-6xl">
            ทางรอดที่เป็นระบบ
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed md:text-xl">
            เราเปลี่ยนปัญหาที่ซับซ้อนให้กลายเป็นขั้นตอนที่ชัดเจน
            เพื่อให้คุณเริ่มต้นใหม่ได้อย่างปลอดภัยที่สุด
          </p>
        </div>
        <div className="mx-auto mb-12 max-w-4xl">
          <StatusTracker />
        </div>
        <ProtocolStepper />
      </section>

      {/* 3. Solutions Grid */}
      <section className="container">
        <div className="bg-muted/5 border-border/40 shadow-primary/5 relative rounded-[3rem] border p-10 shadow-2xl md:p-20">
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="flex flex-col justify-center space-y-8 lg:col-span-1">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tighter leading-none">
                  บริการเพื่อ <br />
                  <span className="text-primary glow-gold">อนาคตใหม่</span>
                </h2>
                <p className="text-muted-foreground text-lg font-light leading-relaxed">
                  จัดการประวัติออนไลน์และวางโครงสร้างการเงิน
                  เพื่อเข้าถึงโอกาสที่คุณควรได้รับ
                </p>
              </div>
              <div className="border-border/10 border-t pt-4">
                <span className="text-primary/60 font-mono text-[10px] tracking-[0.3em] uppercase">
                  Institutional Reliability
                </span>
              </div>
            </div>

            <Suspense
              fallback={
                <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2 animate-pulse">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="bg-white/5 rounded-3xl h-64 border border-white/10"
                    />
                  ))}
                </div>
              }
            >
              <ServicesGrid />
            </Suspense>
          </div>
        </div>
      </section>

      <Methods />
      <PortfolioSection />

      {/* 7. Case Studies */}
      <section className="container">
        <div className="border-border/10 mb-16 flex flex-col items-end justify-between gap-8 border-b pb-8 md:flex-row">
          <div className="max-w-xl space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter uppercase">
              Proven <br />
              <span className="text-primary glow-gold italic">Success</span>
            </h2>
            <p className="text-muted-foreground text-lg font-light">
              บันทึกปฏิบัติการจริงที่กู้คืนชื่อเสียงให้กับลูกค้าระดับสากล
            </p>
          </div>
          <div className="text-primary/40 font-mono text-[10px] tracking-[0.2em] uppercase text-right">
            Operational Records <br />
            <span className="text-[8px]">Unlink-Global Unit</span>
          </div>
        </div>

        <Suspense
          fallback={
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 animate-pulse">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white/5 rounded-2xl h-80 border border-white/10"
                />
              ))}
            </div>
          }
        >
          <LatestCaseStudies />
        </Suspense>
      </section>

      <div className="space-y-24">
        <FaqSection />
        <SecureChannel />
      </div>
    </div>
  );
}
