/** @format */

"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/constants/site-config"
import {
  MessageCircle,
  Mail,
  ShieldCheck,
  Lock,
  Clock,
  FileText,
  ArrowRight,
  ShieldAlert,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * UNLINK-TH | Secure Liaison Interface
 * -------------------------------------------------------------------------
 * STRICT POLICY: No backend • No form submission • LINE-only communication
 * ออกแบบมาเพื่อความปลอดภัยสูงสุดของข้อมูลลูกค้า โดยไม่เก็บข้อมูลไว้บน Server
 */

export default function ContactContent() {
  return (
    <div className="pb-24">
      {/* 1. Protocol Header Interface */}
      <header className="bg-muted/10 border-border/50 relative overflow-hidden border-b py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03),transparent)]" />
        <div className="relative z-10 container">
          <div className="max-w-4xl space-y-8">
            <div className="bg-primary/5 border-primary/20 text-primary inline-flex items-center gap-3 rounded-full border px-4 py-2 font-mono text-[10px] tracking-[0.3em] uppercase">
              <Lock className="h-3.5 w-3.5" />
              <span>ความปลอดภัยของข้อมูลระดับสูงสุด (Privacy-First)</span>
            </div>
            <h1 className="text-5xl leading-[1.1] font-bold tracking-tighter md:text-7xl">
              Private Inquiry <br />
              <span className="text-primary font-light italic">
                & Strategic Liaison
              </span>
            </h1>
            <p className="text-muted-foreground max-w-2xl text-xl leading-relaxed font-light md:text-2xl">
              ความลับของท่านคือพันธกิจสำคัญ เพื่อความปลอดภัยสูงสุด
              เรางดรับข้อมูลผ่านหน้าเว็บไซต์
              และดำเนินการสื่อสารผ่านช่องทางเข้ารหัส (LINE Official)
              เพียงช่องทางเดียวเท่านั้น
            </p>
          </div>
        </div>
      </header>

      <section className="container py-24">
        <div className="grid gap-20 lg:grid-cols-12">
          {/* 2. Intelligence Sidebar: Authorized Channels */}
          <aside className="space-y-10 lg:col-span-5">
            <div className="space-y-8">
              <h2 className="text-muted-foreground/50 border-border/10 border-b pb-4 font-mono text-xs tracking-[0.4em] uppercase">
                Authorized Channels
              </h2>
              <div className="grid gap-6">
                {/* LINE Official Channel */}
                <a
                  href={siteConfig.contact.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lab-card group hover:bg-muted/5 border-border/40 flex items-center gap-8 p-8 transition-all"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#06C755]/10 transition-colors group-hover:bg-[#06C755]/20">
                    <MessageCircle className="h-7 w-7 text-[#06C755]" />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1 font-mono text-[10px] tracking-widest uppercase">
                      LINE Official (Primary)
                    </p>
                    <p className="group-hover:text-primary text-xl font-bold tracking-tight transition-colors">
                      {siteConfig.contact.lineId}
                    </p>
                  </div>
                </a>

                {/* Encrypted Email Channel */}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="lab-card group hover:bg-muted/5 border-border/40 flex items-center gap-8 p-8 transition-all"
                >
                  <div className="bg-primary/5 group-hover:bg-primary/10 flex h-14 w-14 items-center justify-center rounded-2xl transition-colors">
                    <Mail className="text-primary/70 h-7 w-7" />
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1 font-mono text-[10px] tracking-widest uppercase">
                      Secure Mail Interface
                    </p>
                    <p className="group-hover:text-primary text-xl font-bold tracking-tight transition-colors">
                      {siteConfig.contact.email}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* 3. Operational Integrity Metrics */}
            <div className="bg-muted/5 border-border/10 space-y-6 rounded-[2rem] border p-10">
              <div className="text-primary/80 flex items-center gap-3">
                <ShieldCheck className="h-5 w-5" />
                <h3 className="text-lg font-bold tracking-tight">
                  Integrity Guarantee
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">
                เพื่อป้องกันการรั่วไหลของข้อมูล (Data Breach) UNLINK-TH มีนโยบาย
                **Zero-Server Logs** โดยข้อมูลการปรึกษาทั้งหมดจะถูกจัดการผ่าน
                End-to-End Encryption ของแอปพลิเคชัน LINE เท่านั้น
              </p>
              <div className="border-border/5 flex items-center gap-6 border-t pt-2">
                <div className="text-muted-foreground/40 flex items-center gap-2 font-mono text-[10px] uppercase">
                  <Clock className="h-3 w-3" /> Priority Response
                </div>
                <div className="text-muted-foreground/40 flex items-center gap-2 font-mono text-[10px] uppercase">
                  <FileText className="h-3 w-3" /> Zero-Logs Policy
                </div>
              </div>
            </div>
          </aside>

          {/* 4. Secure Action Center */}
          <main className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lab-card border-primary/20 bg-primary/5 relative overflow-hidden border p-10 md:p-16"
            >
              <div className="bg-primary/10 pointer-events-none absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full blur-3xl" />

              <div className="relative space-y-10">
                <div className="space-y-4">
                  <div className="bg-primary/10 text-primary flex h-16 w-16 items-center justify-center rounded-2xl">
                    <ShieldAlert className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Secure Operation Center
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed font-light">
                    กดปุ่มด้านล่างเพื่อเริ่มการสนทนาส่วนตัวกับทีม Specialist
                    เราพร้อมวิเคราะห์เคสและวางแผนปฏิบัติการให้ท่านทันทีภายใต้มาตรการรักษาความลับสูงสุด
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="bg-background/40 border-border/40 flex items-center gap-4 rounded-2xl border p-5">
                    <Zap className="text-primary h-5 w-5 shrink-0" />
                    <span className="text-sm font-medium">
                      ประเมินเคสฟรีใน 1 ชม.
                    </span>
                  </div>
                  <div className="bg-background/40 border-border/40 flex items-center gap-4 rounded-2xl border p-5">
                    <Lock className="text-primary h-5 w-5 shrink-0" />
                    <span className="text-sm font-medium">
                      เข้ารหัสข้อมูล 100%
                    </span>
                  </div>
                </div>

                <div className="pt-6">
                  <Button
                    asChild
                    className="group shadow-primary/20 h-20 w-full rounded-2xl text-xl font-bold shadow-2xl transition-all"
                  >
                    <a
                      href={siteConfig.contact.lineUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-4"
                    >
                      <span>เริ่มการปรึกษาผ่าน LINE</span>
                      <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-2" />
                    </a>
                  </Button>
                </div>

                <div className="text-center">
                  <p className="text-muted-foreground/40 font-mono text-[10px] tracking-[0.3em] uppercase">
                    Trusted by High-Profile Entities & Private Individuals
                  </p>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </section>
    </div>
  )
}
