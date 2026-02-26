/** @format */

"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  ShieldCheck,
  Cpu,
  Scale,
  Zap,
  ExternalLink,
  Lock,
  Target,
  Users,
} from "lucide-react"
import Link from "next/link"
import ContactCTA from "@/components/sections/ContactCTA"
import { siteConfig } from "@/constants/site-config"

interface AboutContentProps {
  founderName: string
}

export default function AboutContent({ founderName }: AboutContentProps) {
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
      {/* 1. Protocol Header */}
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
              &quot;{siteConfig.hero.leftSide.headline},{" "}
              {siteConfig.hero.rightSide.headline}&quot; —{siteConfig.name}{" "}
              คือทีมผู้เชี่ยวชาญด้านการจัดการชื่อเสียงออนไลน์
              ที่เปลี่ยนจากวิกฤตสู่อนาคตดิจิทัลที่มั่นคงด้วยวิศวกรรมข้อมูล
            </p>
          </motion.div>
        </div>
      </header>

      {/* 2. Methodology */}
      <section className="container py-32">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tighter md:text-5xl">
                The Architect <br /> Methodology
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed font-light">
                ในยุคที่อินเทอร์เน็ตมีระบบจดจำที่ซับซ้อน
                การลบเพียงอย่างเดียวไม่เพียงพอ
                {siteConfig.name} จึงบูรณาการเทคนิค SEO
                ขั้นสูงเข้ากับมาตรการทางกฎหมายดิจิทัล
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
                    Neutralize ข้อมูลเชิงลบออกจากระบบการค้นหาอย่างถาวร
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
                    Construct รากฐานชื่อเสียงใหม่ผ่านโครงสร้าง Digital Authority
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="from-primary/20 absolute -inset-1 rounded-[3rem] bg-gradient-to-r to-transparent opacity-25 blur transition duration-1000 group-hover:opacity-50"></div>
            <div className="bg-muted/5 border-border/40 relative flex aspect-square items-center justify-center overflow-hidden rounded-[3rem] border">
              <Image
                src="/images/methodology-abstract.webp"
                alt="Methodology Abstract"
                fill
                className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="from-background via-background/20 absolute inset-0 bg-gradient-to-t to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-end space-y-4 p-12 text-center">
                <Lock className="text-primary glow-emerald h-12 w-12" />
                <span className="text-primary/80 font-mono text-[10px] tracking-[0.5em] uppercase drop-shadow-md">
                  Data Sovereignty Secured
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Technical Backbone */}
      <section className="border-border/10 bg-muted/5 border-y py-32">
        <div className="container grid items-center gap-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lab-card border-primary/20 bg-muted/20 group relative aspect-square overflow-hidden rounded-[3rem]">
              <Image
                src="/images/operational-core.webp"
                alt="Operational Core"
                fill
                className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="from-background/90 via-background/20 absolute inset-0 z-10 bg-gradient-to-t to-transparent" />
              <div className="absolute bottom-12 left-12 z-20 space-y-2">
                <p className="text-primary font-mono text-[10px] tracking-[0.4em] uppercase drop-shadow-md">
                  Operational Core
                </p>
                <p className="text-3xl font-bold tracking-tighter drop-shadow-lg">
                  {siteConfig.name} Team
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-12 lg:col-span-7">
            <div className="space-y-8">
              <div className="text-primary inline-flex items-center gap-4 font-mono text-[10px] tracking-widest uppercase">
                <span className="bg-primary/30 h-px w-12"></span>
                <span>The Visionary Expertise</span>
              </div>
              <h2 className="text-5xl leading-none font-bold tracking-tighter md:text-7xl">
                Technical Data <br />
                <span className="text-muted-foreground/50 text-2xl font-light md:text-3xl">
                  Reputation Architects
                </span>
              </h2>
              <blockquote className="border-primary/40 space-y-6 border-l-2 pl-10">
                <p className="text-muted-foreground text-xl leading-relaxed font-light italic md:text-3xl">
                  &quot;{siteConfig.company.approach}&quot;
                </p>
                <footer className="text-primary mt-4 font-mono text-xs tracking-widest uppercase">
                  — {founderName}
                </footer>
              </blockquote>
            </div>

            <div className="flex flex-wrap gap-10 pt-4">
              <Link
                href={siteConfig.founder.url}
                target="_blank"
                className="group text-primary/60 hover:text-primary flex items-center gap-3 font-mono text-xs tracking-widest uppercase transition-colors"
              >
                Engineering Core <ExternalLink className="h-3.5 w-3.5" />
              </Link>
              <div className="group text-muted-foreground/40 flex items-center gap-3 font-mono text-xs tracking-widest uppercase">
                <Users className="h-3.5 w-3.5" /> Specialist Certified
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Values */}
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
