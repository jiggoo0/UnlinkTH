import type { Metadata } from "next"
import { siteConfig } from "@/constants/site-config"
import Hero from "@/components/sections/Hero"
import HomeClientSections from "@/components/sections/HomeClientSections"
import ContactCTA from "@/components/sections/ContactCTA"

/**
 *
 * * Metadata Optimization:
 * ยึดตามกลยุทธ์ "The Digital Fixer" เพื่อสร้าง Trust และ Authority ในหน้าแรก
 */
export const metadata: Metadata = {
  title: `${siteConfig.seo.defaultTitle} | บริการระงับการเข้าถึงและจัดการชื่อเสียงดิจิทัล`,
  description: siteConfig.seo.defaultDescription,
  alternates: { canonical: siteConfig.url },
  keywords: siteConfig.seo.keywords,
  openGraph: {
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "UNLINK Digital Reputation Management",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [siteConfig.ogImage],
  },
}

/**
 * HomePage: ศูนย์กลางปฏิบัติการ (Operational Hub)
 * ออกแบบโครงสร้างแบบ Layered Architecture เพื่อความลื่นไหลในการโหลด
 */
export default function HomePage() {
  return (
    <div className="bg-background relative flex min-h-screen flex-col overflow-hidden">
      {/* 01: Critical Entry Point - ส่วนสร้าง First Impression */}
      <Hero />

      {/* 02: Strategic Content Hub - ส่วนแสดงความเชี่ยวชาญและหลักฐาน */}
      <main className="relative z-10">
        <HomeClientSections />
      </main>

      {/* 03: Final Conversion Point - ส่วนปิดการขายและสร้างความเชื่อมั่นสุดท้าย */}
      <section className="border-primary/10 bg-muted/5 relative z-20 border-t py-24 lg:py-40">
        <ContactCTA />
      </section>

      {/* 04: Atmospheric Engineering Layer (Background Decor) */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        aria-hidden="true"
      >
        {/* Top Glow: สร้างมิติแสงบริเวณส่วนหัว */}
        <div className="bg-primary/5 absolute top-[-5%] left-[-5%] h-[600px] w-[600px] rounded-full blur-[120px]" />

        {/* Bottom Glow: สร้างมิติแสงบริเวณส่วนท้าย */}
        <div className="bg-primary/10 absolute right-[-5%] bottom-[-5%] h-[500px] w-[500px] rounded-full blur-[100px]" />

        {/* Subtle Scanline Overlay สำหรับบรรยากาศ Technical Lab */}
        <div className="h-full w-full bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.01)_50%,transparent_100%)] bg-[size:100%_4px] opacity-20" />
      </div>
    </div>
  )
}
