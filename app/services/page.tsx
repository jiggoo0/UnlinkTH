/** @format */

import { Metadata } from "next";
import { getAllServices } from "@/lib/mdx";
import ServiceCard from "@/components/shared/ServiceCard";
import { siteConfig } from "@/constants/site-config";
import { getImageUrl } from "@/lib/utils";
import {
  ShieldAlert,
  Cpu,
  Database,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Globe,
} from "lucide-react";
import JsonLd from "@/components/shared/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo-schemas";

/**
 * UNLINK-GLOBAL | Service Protocols (SSG Mode)
 * ข้อมูลบริการทั้งหมดจะถูกฝังลงใน HTML ตั้งแต่ตอน Build
 */

export const metadata: Metadata = {
  title: "Service Protocols | ยุทธศาสตร์การจัดการข้อมูลและภาพลักษณ์ดิจิทัล",
  description:
    "โซลูชันกู้คืนภาพลักษณ์ออนไลน์ ตั้งแต่การลบข้อมูลที่ผิดพลาดในอดีต ไปจนถึงการวางระบบสร้างตัวตนดิจิทัลใหม่ที่โดดเด่นและน่าเชื่อถือภายใต้ความลับสูงสุด",
  alternates: {
    canonical: "/services",
  },
};

export default async function ServicesPage() {
  const allServices = await getAllServices();

  // จัดกลุ่มบริการตาม Category (แบบ Case-insensitive)
  const filterServices = (cats: string[]) => 
    allServices.filter((s) => cats.includes((s.category || "").toLowerCase()));

  const categories = [
    {
      id: "reputation",
      name: "Reputation Management",
      description: "ปฏิบัติการกู้คืนชื่อเสียงและระงับข้อมูลเชิงลบออนไลน์",
      icon: ShieldCheck,
      services: filterServices(["reputation", "extreme", "business", "personal", "legal"]),
    },
    {
      id: "financial",
      name: "Financial Strategy",
      description: "วิศวกรรมการเงินและการวางแผนกู้บ้านสำหรับอาชีพอิสระ",
      icon: TrendingUp,
      services: filterServices(["financial"]),
    },
    {
      id: "immigration",
      name: "Global Mobility",
      description: "ยุทธศาสตร์การเตรียมเอกสารวีซ่าและพำนักระยะยาวสากล",
      icon: Globe,
      services: filterServices(["immigration", "documentation"]),
    },
  ];

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
  ];

  const methodologyAbstractUrl = getImageUrl("methodology-abstract.webp");

  return (
    <div className="pb-32 bg-[#050810]">
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />

      {/* 1. Cinematic Header */}
      <header className="relative mb-20 overflow-hidden border-b border-white/5 py-32 md:py-48">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,rgba(16,185,129,0.1),transparent)]" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
          style={{ backgroundImage: `url(${methodologyAbstractUrl})` }}
        />

        <div className="relative z-10 container">
          <div className="max-w-4xl space-y-10">
            <div className="bg-primary/5 border-primary/20 text-primary inline-flex items-center gap-3 rounded-full border px-5 py-2 font-mono text-[10px] tracking-[0.4em] uppercase backdrop-blur-md">
              <Database className="h-4 w-4" />
              <span>Operational Service Protocols 2026</span>
            </div>

            <h1 className="text-6xl leading-[0.85] font-bold tracking-tighter text-white md:text-[9rem]">
              Strategic <br />
              <span className="text-primary italic font-light">Solutions</span>
            </h1>

            <p className="text-slate-400 max-w-2xl text-xl leading-relaxed font-light md:text-2xl">
              เราคือ **"สถาปนิกผู้คุมกฎข้อมูล"**
              ที่รู้วิธีสร้างบัลลังก์แห่งความน่าเชื่อถือให้คุณ
              และมีอำนาจในการระงับมลพิษข้อมูลที่ผู้ไม่หวังดีจ้องทำลายคุณ
            </p>
          </div>
        </div>
      </header>

      {/* 2. Grouped Services Section */}
      <div className="container space-y-40">
        {allServices.length === 0 ? (
          <div className="py-20 text-center">
            <ShieldAlert className="text-primary/20 w-16 h-16 mx-auto mb-6" />
            <p className="text-slate-500 font-mono text-xs tracking-widest uppercase">
              No Active Modules Found in Matrix
            </p>
          </div>
        ) : (
          categories.map((cat, catIdx) => (
            cat.services.length > 0 && (
              <section key={cat.id} id={cat.id} className="scroll-mt-24">
                <div className="mb-16 flex flex-col items-start justify-between gap-8 border-b border-white/5 pb-12 md:flex-row md:items-end">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-primary">
                      <cat.icon className="h-8 w-8" />
                      <span className="font-mono text-xs tracking-[0.4em] uppercase">
                        Phase 0{catIdx + 1}
                      </span>
                    </div>
                    <h2 className="text-4xl font-bold tracking-tighter text-white md:text-6xl uppercase">
                      {cat.name}
                    </h2>
                    <p className="text-slate-500 text-lg font-light">
                      {cat.description}
                    </p>
                  </div>
                  <div className="text-slate-600 font-mono text-[10px] tracking-[0.2em] uppercase text-right">
                    Active Modules: {cat.services.length} <br />
                    <span className="text-primary/40 text-[8px]">
                      {siteConfig.name} Unit
                    </span>
                  </div>
                </div>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                  {cat.services.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              </section>
            )
          ))
        )}
      </div>

      {/* 3. Custom Solution Liaison */}
      <section className="container mt-48">
        <div className="relative overflow-hidden rounded-[3.5rem] border border-white/5 bg-[#0a0f1d] p-12 md:p-24 group transition-all duration-700 hover:border-primary/20">
          <div className="text-primary/5 absolute -top-10 -right-10 p-12 transition-transform duration-1000 group-hover:scale-110 group-hover:-rotate-12">
            <Cpu className="h-64 w-64" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-10">
            <div className="space-y-6">
              <div className="bg-primary/5 border-primary/20 text-primary inline-flex items-center gap-3 rounded-full border px-4 py-1.5 font-mono text-[9px] tracking-[0.3em] uppercase backdrop-blur-md">
                <ShieldAlert className="h-3.5 w-3.5" />
                <span>Special Operations Unit</span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-white md:text-7xl leading-none">
                Complex Case <br />
                <span className="text-primary italic">Investigation?</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed font-light md:text-xl">
                หากปัญหาของคุณมีความซับซ้อนสูงหรืออยู่นอกเหนือจากโปรโตคอลมาตรฐาน
                ทีมที่ปรึกษาระดับสูงของเราพร้อมออกแบบโซลูชันแบบเฉพาะตัว
                เพื่อแก้ปัญหาที่ต้นเหตุภายใต้ความลับสูงสุด
              </p>
            </div>

            <a
              href={siteConfig.contact.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-black shadow-primary/20 group inline-flex items-center gap-4 rounded-full px-12 py-6 text-sm font-bold tracking-widest uppercase shadow-2xl transition-all hover:scale-105"
            >
              Contact Liaison Specialist
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
