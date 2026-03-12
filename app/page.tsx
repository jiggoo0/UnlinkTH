/** @format */

import { Metadata } from "next";
import { Suspense } from "react";
import { siteConfig } from "@/constants/site-config";
import Link from "next/link";

// 📦 Core Sections
import Hero from "@/components/sections/Hero";
import StatusTracker from "@/components/sections/StatusTracker";
import { PortfolioSection } from "@/components/sections/Portfolio";
import { SecureChannel } from "@/components/sections/SecureChannel";
import ProtocolStepper from "@/components/sections/ProtocolStepper";
import Methods from "@/components/sections/Methods";
import FaqSection from "@/components/sections/FaqSection";
import SectionHeader from "@/components/shared/SectionHeader";

// 📦 Dynamic Content Sections
import ServicesGrid from "@/components/sections/ServicesGrid";
import LatestCaseStudies from "@/components/sections/LatestCaseStudies";
import LatestInsights from "@/components/sections/LatestInsights";

/**
 * UNLINK-GLOBAL | High-Signal Home (2026 Strategy)
 * -------------------------------------------------------------------------
 * หน้าแรกที่เน้นการส่งสัญญาณความน่าเชื่อถือ (E-E-A-T)
 * ผ่านโครงสร้างแบบ Modular ที่ดึงข้อมูลจาก MDX แบบ SSG
 */

export async function generateMetadata(): Promise<Metadata> {
  const seo = siteConfig?.seo || {};
  return {
    title: seo.defaultTitle || "UNLINK-GLOBAL",
    description: seo.defaultDescription,
    keywords: seo.keywords,
  };
}

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 overflow-x-hidden pb-20 md:gap-16">
      {/* 1. Hero Section: First Impression & Primary CTA */}
      <Hero />

      {/* 1.5 Authority Signal Bar: Numerical Evidence */}
      <section className="border-y border-white/5 bg-[#0a0f1d]/50 py-10 backdrop-blur-xl">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "เงินทุนที่ปลดล็อกได้", value: "฿500M+" },
              { label: "ปิดจบเคสประวัติเสีย", value: "1,200+" },
              { label: "โอกาสผ่านสินเชื่อ", value: "99.8%" },
              { label: "ระดับความลับสูงสุด", value: "Vault-S" },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left space-y-1">
                <div className="text-2xl md:text-4xl font-black tracking-tighter text-primary italic">
                  {stat.value}
                </div>
                <div className="text-[10px] font-mono tracking-[0.2em] text-slate-500 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Protocol Matrix: Operational Workflow */}
      <section className="container scroll-mt-24" id="protocol">
        <SectionHeader
          align="center"
          title="จัดการประวัติ"
          titleHighlight="ให้เริ่มต้นใหม่ได้จริง"
          description="จาก 'เรื่องยาก' ให้กลายเป็น 'เรื่องง่าย' ด้วยกระบวนการที่รัดกุม ปิดความลับมิดชิด ปลอดภัย และจ่ายจริงตามเนื้องาน"
        />
        <div className="mx-auto mb-12 max-w-4xl">
          <StatusTracker />
        </div>
        <ProtocolStepper />
      </section>

      {/* 3. Solutions Matrix: Core Services Discovery */}
      <section className="container">
        <div className="bg-muted/5 border-border/40 shadow-primary/5 relative rounded-[3rem] border p-10 shadow-2xl md:p-16">
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="flex flex-col justify-center space-y-8 lg:col-span-1">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tighter leading-none uppercase text-white">
                  ทางเลือก <br />
                  <span className="text-primary glow-gold italic">
                    ปลดล็อกโอกาส
                  </span>
                </h2>
                <p className="text-muted-foreground text-lg font-light leading-relaxed">
                  ทางออกสำหรับคนทำงานอาชีพพิเศษ แม่ค้าออนไลน์ และนักธุรกิจ
                  ที่ต้องการกู้บ้าน ยื่นวีซ่า หรือเริ่มต้นชีวิตใหม่แบบใสสะอาด
                </p>
              </div>
              <div className="border-border/10 border-t pt-4">
                <span className="text-primary/60 font-mono text-[10px] tracking-[0.3em] uppercase">
                  Private Identity Services
                </span>
              </div>
            </div>

            <Suspense
              fallback={
                <div className="h-96 animate-pulse bg-white/5 rounded-3xl" />
              }
            >
              <ServicesGrid />
            </Suspense>
          </div>
        </div>
      </section>

      {/* 4. Proven Methodology & Evidence */}
      <Methods />
      <PortfolioSection />

      {/* 5. Success Records: Operational Transparency */}
      <section className="container">
        <div className="border-border/10 mb-16 flex flex-col items-end justify-between gap-8 border-b pb-8 md:flex-row">
          <div className="max-w-xl space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter uppercase text-white">
              Proven <br />
              <span className="text-primary glow-gold italic">Success</span>
            </h2>
            <p className="text-muted-foreground text-lg font-light">
              บันทึกปฏิบัติการจริงที่กู้คืนชื่อเสียงและโอกาสให้กับลูกค้าระดับ
              VIP
            </p>
          </div>
          <div className="text-primary/40 font-mono text-[10px] tracking-[0.2em] uppercase text-right">
            Operational Records <br />
            <span className="text-[8px]">{siteConfig.name} Unit</span>
          </div>
        </div>

        <Suspense
          fallback={
            <div className="h-80 animate-pulse bg-white/5 rounded-2xl" />
          }
        >
          <LatestCaseStudies />
        </Suspense>
      </section>

      {/* 6. Intelligence Hub: Strategic Insights */}
      <section className="container">
        <div className="mb-16 flex items-center justify-between border-b border-white/5 pb-8">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter uppercase text-white">
              Strategic <br />
              <span className="text-primary glow-gold italic">Insights</span>
            </h2>
            <p className="text-muted-foreground text-lg font-light">
              เจาะลึกยุทธศาสตร์การจัดการข้อมูลและภาพลักษณ์ระดับมืออาชีพ
            </p>
          </div>
          <Link
            href="/blog"
            className="text-slate-500 hover:text-primary font-mono text-[10px] tracking-[0.3em] uppercase transition-colors"
          >
            View All Archives
          </Link>
        </div>

        <Suspense
          fallback={
            <div className="h-96 animate-pulse bg-white/5 rounded-3xl" />
          }
        >
          <LatestInsights />
        </Suspense>
      </section>

      {/* 7. Final Trust & FAQ Section */}
      <div className="space-y-24">
        <FaqSection />
        <SecureChannel />
      </div>
    </div>
  );
}
