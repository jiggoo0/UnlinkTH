/** @format */

import { Metadata } from "next";
import { getAllServices } from "@/lib/services";
import ServiceCard from "@/components/shared/ServiceCard";
import { siteConfig } from "@/constants/site-config";
import { ShieldAlert, Cpu, Database, ArrowRight } from "lucide-react";

/**
 * UNLINK-TH | Operational Service Protocols (2026)
 * -------------------------------------------------------------------------
 * สถาปัตยกรรมหน้ารวมบริการเชิงนิติศาสตร์และวิศวกรรมข้อมูล
 */

export const metadata: Metadata = {
  title: "Service Protocols & Digital Architectures | UNLINK-TH",
  description:
    "สำรวจโซลูชันการจัดการชื่อเสียงออนไลน์เชิงเทคนิค ตั้งแต่การ De-indexing ข้อมูลที่เป็นเท็จ ไปจนถึงการวางระบบเกราะป้องกันตัวตนดิจิทัล (SEO Shadowing)",
};

export default async function ServicesPage() {
  const services = await getAllServices();

  return (
    <div className="pb-32">
      {/* 1. Technical Header */}
      <header className="bg-muted/10 border-b border-border/50 py-28 mb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,rgba(16,185,129,0.05),transparent)] pointer-events-none" />
        <div className="container relative z-10">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 text-primary text-[10px] font-mono uppercase tracking-[0.3em]">
              <Database className="h-4 w-4" />
              <span>Intelligence Service Catalog 2026</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9]">
              Reputation <br />
              <span className="text-primary italic font-light">Protocols</span>
            </h1>

            <p className="text-muted-foreground text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
              เราให้บริการจัดการภาพลักษณ์ดิจิทัลผ่านกระบวนการทางวิศวกรรมข้อมูล แบ่งเป็น 2 ระยะหลัก: 
              การถอดถอนอดีต (Cleanup Phase) และการออกแบบสถาปัตยกรรมอนาคต (Architect Phase)
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
        <div className="lab-card bg-muted/5 border-border/10 rounded-[3rem] p-12 md:p-20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 text-primary/10">
            <Cpu className="w-40 h-40" />
          </div>
          
          <div className="relative z-10 max-w-2xl space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary/60 text-[10px] font-mono uppercase tracking-widest">
                <ShieldAlert className="w-4 h-4" />
                <span>Special Operations</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Complex Case <br />
                Investigation?
              </h2>
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                ในกรณีที่ปัญหาของคุณมีความซับซ้อนสูงหรืออยู่นอกเหนือจากโปรโตคอลมาตรฐาน 
                ทีมวิศวกรและที่ปรึกษากฎหมายของเราพร้อมออกแบบโซลูชันแบบเฉพาะตัว (Tailor-made) 
                เพื่อแก้ปัญหาที่ต้นเหตุอย่างแท้จริง
              </p>
            </div>

            <a
              href={siteConfig.contact.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm shadow-xl shadow-primary/20 transition-all hover:gap-5 group"
            >
              ติดต่อฝ่ายเทคนิคเพื่อประเมินงานส่วนบุคคล
              <ArrowRight className="w-5 h-5 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
