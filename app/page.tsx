/** @format */

import { Metadata } from "next";
import { Suspense } from "react";
import { siteConfig } from "@/constants/site-config";
import { getAllServices, getAllPosts, getLatestCaseStudies } from "@/lib/mdx";
import { BlogPostFrontmatter } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// 📦 Shared Components
import Hero from "@/components/shared/Hero";
import ServiceCard from "@/components/shared/ServiceCard";
import CaseStudyCard from "@/components/shared/CaseStudyCard";
import StatusTracker from "@/components/shared/StatusTracker";

// 📦 Section Components
import { PortfolioSection } from "@/components/shared/Portfolio";
import { SecureChannel } from "@/components/shared/SecureChannel";
import ProtocolStepper from "@/components/shared/ProtocolStepper";
import Methods from "@/components/shared/Methods";
import FaqSection from "@/components/shared/FaqSection";

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
      <div className="border-border/10 bg-white/5 col-span-2 rounded-[2.5rem] border border-dashed py-24 text-center backdrop-blur-sm">
        <div className="mx-auto max-w-xs space-y-4">
          <p className="text-primary font-mono text-[10px] tracking-[0.4em] uppercase">
            System Synchronizing
          </p>
          <p className="text-slate-400 text-sm font-light leading-relaxed">
            กำลังปรับปรุงและอัปโหลดข้อมูลยุทธศาสตร์ใหม่ <br />
            กรุณารอสักครู่เพื่อเข้าถึงโปรโตคอลล่าสุด
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
      {servicesData.slice(0, 6).map((service) => (
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

// แยกส่วน Blog ออกมาเป็น Component ย่อย
async function LatestInsights() {
  const allPosts = await getAllPosts<BlogPostFrontmatter>("blog").catch(
    () => [],
  );
  const latestPosts = allPosts.slice(0, 3);

  return (
    <div className="grid gap-8 md:grid-cols-3">
      {latestPosts.map((post: BlogPostFrontmatter, index: number) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group relative flex flex-col space-y-4 overflow-hidden rounded-3xl border border-white/5 bg-[#0a0f1d] p-6 transition-all duration-500 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5"
        >
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
            <Image
              src={post.image || "/images/blog/default-insight.webp"}
              alt={post.title}
              fill
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] to-transparent opacity-60" />
          </div>
          <div className="space-y-3">
            <span className="text-primary/60 font-mono text-[9px] tracking-[0.3em] uppercase">
              {post.category}
            </span>
            <h3 className="text-xl font-bold leading-tight text-white group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-slate-400 line-clamp-2 text-sm font-light leading-relaxed">
              {post.description}
            </p>
          </div>
          <div className="pt-2">
            <span className="text-primary inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase opacity-0 transition-all group-hover:opacity-100">
              Read Protocol <ArrowUpRight className="h-3 w-3" />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12 overflow-x-hidden pb-20 md:gap-16">
      {/* 1. Hero Section */}
      <Hero />

      {/* 1.5 Authority Signal Bar */}
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

      {/* 2. Protocol & How it Works */}
      <section className="container scroll-mt-24" id="protocol">
        <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
          <h2 className="text-4xl font-bold tracking-tighter md:text-6xl uppercase">
            จัดการประวัติ{" "}
            <span className="text-primary italic">ให้เริ่มต้นใหม่ได้จริง</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed md:text-xl">
            จาก "เรื่องยาก" ให้กลายเป็น "เรื่องง่าย" ด้วยกระบวนการที่รัดกุม
            ปิดความลับมิดชิด ไม่มีการเชื่อมโยงข้อมูลกับธนาคารหรือใครทั้งสิ้น
            จ่ายจริง ได้งานจริง
          </p>
        </div>
        <div className="mx-auto mb-12 max-w-4xl">
          <StatusTracker />
        </div>
        <ProtocolStepper />
      </section>

      {/* 3. Solutions Grid */}
      <section className="container">
        <div className="bg-muted/5 border-border/40 shadow-primary/5 relative rounded-[3rem] border p-10 shadow-2xl md:p-16">
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="flex flex-col justify-center space-y-8 lg:col-span-1">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold tracking-tighter leading-none uppercase">
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
                <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2 animate-pulse">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="bg-white/5 rounded-[2.5rem] h-64 border border-white/10"
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

      {/* 8. Strategic Insights */}
      <section className="container">
        <div className="mb-16 flex items-center justify-between border-b border-white/5 pb-8">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter uppercase">
              Strategic <br />
              <span className="text-primary glow-gold italic">Insights</span>
            </h2>
            <p className="text-muted-foreground text-lg font-light">
              เจาะลึกยุทธศาสตร์การจัดการข้อมูลและภาพลักษณ์ระดับ VIP
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
            <div className="grid gap-8 md:grid-cols-3 animate-pulse">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white/5 rounded-3xl h-96 border border-white/10"
                />
              ))}
            </div>
          }
        >
          <LatestInsights />
        </Suspense>
      </section>

      <div className="space-y-24">
        <FaqSection />
        <SecureChannel />
      </div>
    </div>
  );
}
