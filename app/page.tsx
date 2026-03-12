/** @format */

import { Metadata } from "next";
import { Suspense } from "react";
import { siteConfig } from "@/constants/site-config";
import Link from "next/link";
import { Database, BookOpen } from "lucide-react";

// 📦 Core Sections
import Hero from "@/components/sections/Hero";
import CaseCommandCenter from "@/components/sections/CaseCommandCenter";
import CaseTrackerInfo from "@/components/sections/CaseTrackerInfo";
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

      {/* 1.5 Authority Signal Bar: Numerical Evidence (Verified Records) */}
      <section className="border-y border-white/5 bg-[#0a0f1d]/50 py-10 backdrop-blur-xl">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { label: "ทุนทรัพย์ที่ปลดล็อกสะสม", value: "฿500M+" },
              { label: "ปิดจบเคสประวัติเสีย", value: "1,200+" },
              { label: "สถิติการดำเนินการสำเร็จ", value: "99.8%" },
              { label: "มาตรฐานความปลอดภัย", value: "Vault-S" },
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
        <div className="mx-auto mb-12 max-w-5xl">
          <CaseCommandCenter />
        </div>
        <div className="mx-auto mb-20 max-w-5xl">
          <CaseTrackerInfo />
        </div>
        <ProtocolStepper />
      </section>

      {/* 3. Solutions Matrix: Core Services Discovery */}
      <section className="container">
        <div className="bg-muted/5 border-border/40 shadow-primary/5 relative rounded-[3.5rem] border p-10 shadow-2xl md:p-20">
          <div className="space-y-16">
            <SectionHeader
              align="center"
              badge={
                <>
                  <Database className="h-4 w-4" />
                  <span>Strategic Solutions 2026</span>
                </>
              }
              title="โซลูชันกู้คืน"
              titleHighlight="โอกาสและชื่อเสียง"
              description="รวบรวมโปรโตคอลการจัดการข้อมูลเชิงลึกที่ดึงข้อมูลจากเคสปฏิบัติการจริง เพื่อให้คุณกลับมาโดดเด่นในระบบนิเวศดิจิทัลอีกครั้ง"
              className="max-w-4xl mx-auto"
            />

            <Suspense
              fallback={
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-[480px] bg-white/[0.02] border border-white/5 rounded-[2.5rem] animate-pulse"
                    />
                  ))}
                </div>
              }
            >
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <ServicesGrid limit={6} />
              </div>
            </Suspense>
          </div>
        </div>
      </section>

      {/* 4. Proven Methodology & Evidence */}
      <Methods />
      <PortfolioSection />

      {/* 5. Success Records: Operational Transparency */}
      <section className="container">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16 border-b border-white/5 pb-8">
          <SectionHeader
            title="Proven"
            titleHighlight="Success"
            description="บันทึกปฏิบัติการจริงที่กู้คืนชื่อเสียงและโอกาสให้กับลูกค้าระดับ VIP"
            className="mb-0"
          />
          <div className="text-primary/40 font-mono text-[10px] tracking-[0.2em] uppercase text-right hidden md:block">
            Operational Records <br />
            <span className="text-[8px]">{siteConfig.name} Unit</span>
          </div>
        </div>

        <Suspense
          fallback={
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-[400px] bg-white/[0.02] border border-white/5 rounded-2xl animate-pulse"
                />
              ))}
            </div>
          }
        >
          <LatestCaseStudies />
        </Suspense>
      </section>

      {/* 6. Intelligence Hub: Strategic Insights */}
      <section className="container">
        <div className="flex items-center justify-between border-b border-white/5 pb-8 mb-16">
          <SectionHeader
            badge={
              <>
                <BookOpen className="h-4 w-4" />
                <span>Knowledge & Authority</span>
              </>
            }
            title="Strategic"
            titleHighlight="Insights"
            description="เจาะลึกยุทธศาสตร์การจัดการข้อมูลและภาพลักษณ์ระดับมืออาชีพ"
            className="mb-0"
          />
          <Link
            href="/blog"
            className="text-slate-500 hover:text-primary font-mono text-[10px] tracking-[0.3em] uppercase transition-colors"
          >
            View All Archives
          </Link>
        </div>

        <Suspense
          fallback={
            <div className="grid gap-8 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-[350px] bg-white/[0.02] border border-white/5 rounded-3xl animate-pulse"
                />
              ))}
            </div>
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
