/** @format */

import { Metadata } from "next";
import { getAllServices } from "@/lib/services";
import ServiceCard from "@/components/shared/ServiceCard";
import { siteConfig } from "@/constants/site-config";
import { ShieldAlert, Cpu, Database, ArrowRight } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo-schemas";

/**
 * UNLINK-TH | Operational Service Protocols (2026)
 * -------------------------------------------------------------------------
 * สถาปัตยกรรมหน้ารวมบริการเชิงนิติศาสตร์และวิศวกรรมข้อมูล
 */

export const metadata: Metadata = {
  title: "บริการลบชื่อเสีย และออกแบบภาพลักษณ์ใหม่ | UNLINK-TH",
  description:
    "โซลูชันกู้คืนภาพลักษณ์ออนไลน์ ตั้งแต่การลบข้อมูลที่ผิดพลาดในอดีต (De-indexing) ไปจนถึงการวางระบบสร้างตัวตนดิจิทัลใหม่ที่โดดเด่นและน่าเชื่อถือ",
  alternates: {
    canonical: "/services",
  },
};

export default async function ServicesPage() {
  const services = await getAllServices();

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
  ];

  return (
    <div className="pb-32">
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />
      {/* 1. Technical Header */}
      <header className="bg-muted/10 border-border/50 relative mb-20 overflow-hidden border-b py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,var(--primary),transparent)] opacity-5" />
        <div className="relative z-10 container">
          <div className="max-w-4xl space-y-8">
            <div className="bg-primary/5 border-primary/20 text-primary inline-flex items-center gap-3 rounded-full border px-4 py-2 font-mono text-[10px] tracking-[0.3em] uppercase">
              <Database className="h-4 w-4" />
              <span>ทางเลือกเพื่อการเริ่มต้นใหม่ที่ยั่งยืน</span>
            </div>

            <h1 className="text-5xl leading-[0.9] font-bold tracking-tighter md:text-8xl">
              Restore <br />
              <span className="text-primary font-light italic">
                Your Identity
              </span>
            </h1>

            <p className="text-muted-foreground max-w-2xl text-xl leading-relaxed font-light md:text-2xl">
              คืนพื้นที่ชีวิตดิจิทัลที่สะอาดตาและน่าเชื่อถือ
              ผ่านกระบวนการจัดการข้อมูลที่แม่นยำและเป็นระบบ
              เพื่อให้คุณก้าวต่อไปสู่อนาคตที่สดใสกว่าเดิม
            </p>
          </div>
        </div>
      </header>

      {/* 2. Tactical Diagram Section */}

      {/* 3. Services Intelligence Grid */}
      <section className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* 4. Custom Solution Liaison */}
      <section className="container mt-32">
        <div className="lab-card bg-muted/5 border-border/10 group relative overflow-hidden rounded-[3rem] p-12 md:p-20">
          <div className="text-primary/10 absolute top-0 right-0 p-12">
            <Cpu className="h-40 w-40" />
          </div>

          <div className="relative z-10 max-w-2xl space-y-8">
            <div className="space-y-4">
              <div className="text-primary/60 flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase">
                <ShieldAlert className="h-4 w-4" />
                <span>Special Operations</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                Complex Case <br />
                Investigation?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-light">
                ในกรณีที่ปัญหาของคุณมีความซับซ้อนสูงหรืออยู่นอกเหนือจากโปรโตคอลมาตรฐาน
                ทีมวิศวกรและที่ปรึกษากฎหมายของเราพร้อมออกแบบโซลูชันแบบเฉพาะตัว
                (Tailor-made) เพื่อแก้ปัญหาที่ต้นเหตุอย่างแท้จริง
              </p>
            </div>

            <a
              href={siteConfig.contact.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground shadow-primary/20 group inline-flex items-center gap-3 rounded-full px-10 py-5 text-sm font-bold tracking-widest uppercase shadow-xl transition-all hover:gap-5"
            >
              ติดต่อฝ่ายเทคนิคเพื่อประเมินงานส่วนบุคคล
              <ArrowRight className="h-5 w-5 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
