/** @format */

"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Cpu,
  Scale,
  Globe,
  History,
  Zap,
  ExternalLink,
  Lock,
} from "lucide-react";
import Link from "next/link";
import ContactCTA from "@/components/sections/ContactCTA";

/**
 * UNLINK-TH | Brand Identity & Philosophy (2026)
 * -------------------------------------------------------------------------
 * หน้าประวัติและความเป็นมาที่เน้นย้ำเรื่องสถาปัตยกรรมแห่งความเชื่อมั่น
 */

export default function AboutPage() {
  const values = [
    {
      title: "Scientific Integrity",
      description:
        "เราจัดการข้อมูลบนพื้นฐานของวิศวกรรมข้อมูล (Data Engineering) ทุกขั้นตอนสามารถอธิบายผลลัพธ์ทางเทคนิคได้อย่างแม่นยำ",
      icon: Cpu,
    },
    {
      title: "Legal Ethics",
      description:
        "ดำเนินการภายใต้ขอบเขตของกฎหมาย PDPA และสิทธิอันชอบธรรมในการถูกลืม (Right to be Forgotten) เพื่อความโปร่งใสสูงสุด",
      icon: Scale,
    },
    {
      title: "Total Confidentiality",
      description:
        "ความลับคือพันธกิจที่สำคัญที่สุด ข้อมูลลูกค้าจะถูกเข้ารหัสและทำลายทิ้งทันที (Secure Shredding) หลังภารกิจสำเร็จ",
      icon: Lock,
    },
  ];

  return (
    <div className="pb-24">
      {/* 1. Brand Philosophy Header */}
      <header className="bg-muted/10 border-b border-border/50 relative overflow-hidden py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05),transparent)] pointer-events-none" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl space-y-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 text-primary text-[10px] font-mono uppercase tracking-[0.3em]">
              <ShieldCheck className="h-4 w-4" />
              <span>Identity Established 2026</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[1.1]">
              Beyond Removal: <br />
              <span className="text-primary italic font-light">
                Architects of Trust
              </span>
            </h1>
            <p className="text-muted-foreground max-w-2xl text-xl md:text-3xl font-light leading-relaxed">
              &quot;Unlink the Past, Architect Your Future&quot; — 
              เราคือผู้เชี่ยวชาญด้านการจัดการชื่อเสียงออนไลน์ 
              ที่ไม่ได้เพียงแค่ลบอดีต แต่เราออกแบบอนาคตที่น่าเชื่อถือที่สุดให้แก่คุณ
            </p>
          </motion.div>
        </div>
      </header>

      {/* 2. The Visionary Strategy (Unlink vs Architect) */}
      <section className="container py-32">
        
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tighter">
                ทำไมต้อง Reputation Architect?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-light">
                ในยุคที่ข้อมูลดิจิทัลถูกบันทึกไว้ตลอดกาล การ &quot;ลบ&quot; เพียงอย่างเดียวอาจไม่เพียงพอ 
                เพราะอินเทอร์เน็ตมีกลไกการจดจำที่ซับซ้อน เราจึงพัฒนาแนวคิดการเป็น **สถาปนิกผู้คุมชื่อเสียง** เพื่อจัดการระบบนิเวศการค้นหาทั้งหมดให้สะท้อนตัวตนที่แท้จริงและเป็นปัจจุบันที่สุดของคุณ
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="lab-card border-primary/10 p-8 space-y-4 bg-muted/5 transition-all hover:bg-muted/10">
                <h4 className="text-primary font-mono text-xs uppercase tracking-widest">Phase 1: Unlink</h4>
                <p className="text-foreground font-bold text-lg leading-snug">
                  Neutralize ข้อมูลเชิงลบและอดีตที่บิดเบือนออกจากสารบบการค้นหา
                </p>
              </div>
              <div className="lab-card border-primary/10 p-8 space-y-4 bg-muted/5 transition-all hover:bg-muted/10">
                <h4 className="text-primary font-mono text-xs uppercase tracking-widest">Phase 2: Architect</h4>
                <p className="text-foreground font-bold text-lg leading-snug">
                  Construct รากฐานชื่อเสียงใหม่ที่ทรงพลังและยากต่อการสั่นคลอน
                </p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="bg-muted/5 border border-border/40 relative flex aspect-square items-center justify-center overflow-hidden rounded-[3rem] p-12">
              <Globe className="text-primary/5 h-full w-full animate-pulse" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center space-y-4">
                <Zap className="text-primary h-16 w-16 glow-emerald" />
                <span className="text-primary/60 font-mono text-[10px] tracking-[0.5em] uppercase">
                  Data Sovereignty Protocol
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Technical Backbone (Founder Context) */}
      <section className="border-y border-border/10 bg-muted/5 py-32">
        <div className="container grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lab-card relative aspect-square overflow-hidden rounded-[3rem] border-primary/20">
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.8))] z-10" />
              <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
                <History className="text-primary/10 h-32 w-32" />
              </div>
              <div className="absolute bottom-10 left-10 z-20 space-y-1">
                <p className="text-primary font-mono text-[10px] uppercase tracking-widest">Chief Architect</p>
                <p className="text-2xl font-bold tracking-tighter">Alongkorl.Y</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-10 lg:col-span-7">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-primary font-mono text-[10px] uppercase tracking-widest">
                <span className="h-px w-8 bg-primary/40"></span>
                <span>The Visionary behind Unlink</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                อลงกรณ์ ยมเกิด <br />
                <span className="text-muted-foreground font-light text-3xl md:text-4xl">(Alongkorl Y.)</span>
              </h2>
              <blockquote className="border-l-2 border-primary/40 pl-8 space-y-4">
                <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed italic font-light">
                  &quot;ในฐานะวิศวกรข้อมูลและผู้เชี่ยวชาญ Technical SEO 
                  ผมเล็งเห็นโอกาสที่จะใช้เทคโนโลยีเพื่อคืน 'สิทธิในความเป็นส่วนตัว' ให้กับผู้คน 
                  และสร้างมาตรฐานใหม่ในการจัดการชื่อเสียงดิจิทัลที่สามารถวัดผลได้จริง&quot;
                </p>
              </blockquote>
            </div>

            <div className="flex flex-wrap gap-8 pt-4">
              <Link
                href="https://me.aemdevweb.com"
                target="_blank"
                className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary/60 hover:text-primary transition-colors"
              >
                Identity Hub <ExternalLink className="h-3 w-3 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="https://www.aemdevweb.com"
                target="_blank"
                className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary/60 hover:text-primary transition-colors"
              >
                Engineering Core <ExternalLink className="h-3 w-3 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values Protocol */}
      <section className="container py-32">
        <div className="mb-20 text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tighter uppercase">Core Principles</h2>
          <p className="text-muted-foreground text-lg font-light">
            มาตรฐานการปฏิบัติงานสูงสุดที่เรายึดถือในทุกโครงการ
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="lab-card p-12 text-center space-y-6 border-border/40 hover:border-primary/40 transition-all duration-500"
            >
              <div className="bg-primary/5 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/10">
                <v.icon className="text-primary h-8 w-8 glow-emerald" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold tracking-tight">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">
                  {v.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <ContactCTA />
    </div>
  );
}
