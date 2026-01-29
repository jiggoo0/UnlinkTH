/** @format */

"use client"

import { motion } from "framer-motion"
import {
  ShieldCheck,
  Cpu,
  Scale,
  Globe,
  History,
  Zap,
  ExternalLink,
  Lock,
  Target,
} from "lucide-react"
import Link from "next/link"
import ContactCTA from "@/components/sections/ContactCTA"

/**
 * UNLINK-TH | Operational Identity & Philosophy (2026)
 * -------------------------------------------------------------------------
 * สถาปัตยกรรมแบรนด์ที่เน้นการเปลี่ยนผ่านจากวิกฤตสู่อนาคตดิจิทัลที่มั่นคง
 * พัฒนาโดย: Reputation Architect
 */

export default function AboutPage() {
  const values = [
    {
      title: "Scientific Integrity",
      description:
        "การจัดการข้อมูลบนพื้นฐานของกระบวนการเชิงเทคนิค ทุกขั้นตอนสามารถอธิบายผลลัพธ์ได้อย่างแม่นยำ",
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
  ]

  return (
    <div className="pb-24">
      {/* 1. Protocol Header: Vision & Identity */}
      <header className="bg-muted/10 border-border/50 relative overflow-hidden border-b py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05),transparent)]" />
        <div className="relative z-10 container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl space-y-10"
          >
            <div className="bg-primary/5 border-primary/20 text-primary inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[10px] tracking-[0.3em] uppercase">
              <ShieldCheck className="h-4 w-4" />
              <span>Operational Excellence Since 2026</span>
            </div>
            <h1 className="text-5xl leading-[1.1] font-bold tracking-tighter md:text-8xl">
              Beyond Removal: <br />
              <span className="text-primary font-light italic">
                Architects of Trust
              </span>
            </h1>
            <p className="text-muted-foreground max-w-2xl text-xl leading-relaxed font-light md:text-3xl">
              &quot;Unlink the Past, Architect Your Future&quot; —
              เราคือผู้เชี่ยวชาญด้านการจัดการชื่อเสียงออนไลน์
              ที่ไม่ได้เพียงแค่ลบอดีต
              แต่เราออกแบบโครงสร้างความเชื่อมั่นใหม่ให้คุณ
            </p>
          </motion.div>
        </div>
      </header>

      {/* 2. Strategic Methodology: Unlink vs Architect */}
      <section className="container py-32">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tighter md:text-5xl">
                The Architect <br /> Methodology
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-light">
                ในยุคที่อินเทอร์เน็ตมีระบบจดจำที่ซับซ้อน
                การลบเพียงอย่างเดียวไม่เพียงพอต่อการกู้คืนเกียรติยศ UNLINK-TH
                จึงใช้กระบวนการเชิงเทคนิคเพื่อจัดการระบบนิเวศการค้นหาทั้งหมด
                เพื่อให้โลกจดจำคุณในแบบที่เป็นความจริงในปัจจุบัน
              </p>
            </div>

            <div className="grid gap-6">
              <div className="lab-card border-primary/10 bg-muted/5 hover:bg-muted/10 flex items-start gap-6 p-10 transition-all">
                <div className="bg-primary/10 text-primary rounded-xl p-3">
                  <Target className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-primary font-mono text-xs tracking-widest uppercase">
                    Phase 1: Unlink Protocol
                  </h4>
                  <p className="text-foreground text-lg leading-snug font-bold">
                    Neutralize
                    ข้อมูลเชิงลบและอดีตที่บิดเบือนออกจากระบบการค้นหาอย่างถาวร
                  </p>
                </div>
              </div>
              <div className="lab-card border-primary/10 bg-muted/5 hover:bg-muted/10 flex items-start gap-6 p-10 transition-all">
                <div className="bg-primary/10 text-primary rounded-xl p-3">
                  <Zap className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-primary font-mono text-xs tracking-widest uppercase">
                    Phase 2: Architect Protocol
                  </h4>
                  <p className="text-foreground text-lg leading-snug font-bold">
                    Construct รากฐานชื่อเสียงใหม่ที่ทรงพลังผ่านเทคนิค SEO
                    Authority ขั้นสูง
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="from-primary/20 absolute -inset-1 rounded-[3rem] bg-gradient-to-r to-transparent opacity-25 blur transition duration-1000 group-hover:opacity-50"></div>
            <div className="bg-muted/5 border-border/40 relative flex aspect-square items-center justify-center overflow-hidden rounded-[3rem] border p-12">
              <Globe className="text-primary/5 h-full w-full animate-pulse" />
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 p-6 text-center">
                <Lock className="text-primary glow-emerald h-16 w-16" />
                <span className="text-primary/60 font-mono text-[10px] tracking-[0.5em] uppercase">
                  Data Sovereignty Secured
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Technical Backbone: Strategic Identity */}
      <section className="border-border/10 bg-muted/5 border-y py-32">
        <div className="container grid items-center gap-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lab-card border-primary/20 bg-muted/20 relative aspect-square overflow-hidden rounded-[3rem]">
              <div className="absolute inset-0 flex items-center justify-center">
                <History className="text-primary/5 h-48 w-48" />
              </div>
              <div className="from-background/90 absolute inset-0 z-10 bg-gradient-to-t via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 z-20 space-y-2">
                <p className="text-primary font-mono text-[10px] tracking-[0.4em] uppercase">
                  Chief Architect
                </p>
                <p className="text-3xl font-bold tracking-tighter">
                  Alongkorl Y.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-12 lg:col-span-7">
            <div className="space-y-8">
              <div className="text-primary inline-flex items-center gap-4 font-mono text-[10px] tracking-widest uppercase">
                <span className="bg-primary/30 h-px w-12"></span>
                <span>The Visionary behind Unlink</span>
              </div>
              <h2 className="text-5xl leading-none font-bold tracking-tighter md:text-7xl">
                อลงกรณ์ ยมเกิด <br />
                <span className="text-muted-foreground/50 text-2xl font-light md:text-3xl">
                  (Technical Data Architect)
                </span>
              </h2>
              <blockquote className="border-primary/40 space-y-6 border-l-2 pl-10">
                <p className="text-muted-foreground text-xl leading-relaxed font-light italic md:text-3xl">
                  &quot;ในโลกดิจิทัล ชื่อเสียงคืออัลกอริทึมที่สามารถออกแบบได้
                  ผมใช้เทคโนโลยีเพื่อคืนสิทธิในความเป็นส่วนตัว
                  และสร้างมาตรฐานใหม่ให้กับตัวตนที่วัดผลได้จริง&quot;
                </p>
              </blockquote>
            </div>

            <div className="flex flex-wrap gap-10 pt-4">
              <Link
                href="https://me.aemdevweb.com"
                target="_blank"
                className="group text-primary/60 hover:text-primary flex items-center gap-3 font-mono text-xs tracking-widest uppercase transition-colors"
              >
                Identity Hub{" "}
                <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="https://www.aemdevweb.com"
                target="_blank"
                className="group text-primary/60 hover:text-primary flex items-center gap-3 font-mono text-xs tracking-widest uppercase transition-colors"
              >
                Engineering Core{" "}
                <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values: Integrity Protocol */}
      <section className="container py-32">
        <div className="mb-24 space-y-4 text-center">
          <h2 className="text-4xl font-bold tracking-tighter uppercase md:text-5xl">
            Operational Pillars
          </h2>
          <p className="text-muted-foreground text-lg font-light">
            รากฐานความน่าเชื่อถือที่เรายึดถือในทุกภารกิจ
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {values.map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="lab-card border-border/40 hover:border-primary/40 bg-muted/5 space-y-8 p-12 text-center transition-all duration-500"
            >
              <div className="bg-primary/5 border-primary/10 mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border">
                <v.icon className="text-primary glow-emerald h-10 w-10" />
              </div>
              <div className="space-y-4">
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
  )
}
