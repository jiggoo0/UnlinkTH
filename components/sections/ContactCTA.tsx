/** @format */

"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/constants/site-config"
import { Button } from "@/components/ui/button"
import {
  MessageCircle,
  ShieldCheck,
  ArrowRight,
  Lock,
  ShieldAlert,
  Terminal,
} from "lucide-react"
import Link from "next/link"

/**
 * UNLINK-TH | Contact Call-to-Action Protocol (2026)
 * -------------------------------------------------------------------------
 * ส่วนสรุปการติดต่อสื่อสารที่เน้นย้ำเรื่องความปลอดภัยและมาตรฐาน NDA
 * ออกแบบในสไตล์ Industrial Security Lab
 */

export default function ContactCTA() {
  return (
    <section className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="lab-card border-primary/20 bg-muted/5 shadow-primary/5 relative overflow-hidden p-10 text-center shadow-2xl md:p-20"
      >
        {/* Intelligence Background Layers */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.08),transparent)]" />
        <div className="via-primary/20 absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-4xl space-y-10">
          {/* Status Indicator */}
          <div className="bg-background/50 border-primary/10 text-primary inline-flex items-center gap-2.5 rounded-full border px-4 py-2 font-mono text-[10px] tracking-[0.25em] uppercase">
            <Lock className="h-3 w-3" />
            <span className="animate-pulse">
              Secure Liaison Connection Established
            </span>
          </div>

          {/* Strategic Headline */}
          <h2 className="text-4xl leading-[1.1] font-bold tracking-tighter text-balance md:text-6xl">
            Ready to{" "}
            <span className="text-primary glow-emerald">Unlink the Past</span>{" "}
            <br className="hidden md:block" />
            and Architect Your Future?
          </h2>

          {/* Operational Description */}
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed font-light md:text-2xl">
            เริ่มต้นกระบวนการจัดการชื่อเสียงออนไลน์อย่างเป็นระบบ
            ภายใต้มาตรฐานการรักษาความลับสูงสุด
            <span className="text-foreground mt-2 block font-medium">
              Non-Disclosure Agreement (NDA) Protected
            </span>
          </p>

          {/* Action Interface */}
          <div className="flex flex-col items-center justify-center gap-5 pt-6 sm:flex-row">
            <Button
              size="lg"
              className="shadow-primary/20 group h-16 w-full rounded-full px-12 text-xl shadow-2xl transition-all sm:w-auto"
              asChild
            >
              <Link href={siteConfig.contact.lineUrl}>
                <MessageCircle className="mr-3 h-6 w-6 fill-current" />
                เริ่มการเจรจา (Private)
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-primary/10 bg-background/50 hover:bg-primary/5 h-16 w-full rounded-full px-12 text-xl backdrop-blur-sm transition-all sm:w-auto"
              asChild
            >
              <Link href="mailto:contact@unlink-th.com">
                <Terminal className="mr-3 h-5 w-5" />
                ส่งบันทึกโครงการ
              </Link>
            </Button>
          </div>

          {/* Security Integrity Metrics */}

          <div className="border-border/10 grid grid-cols-1 gap-8 border-t pt-12 md:grid-cols-3">
            <div className="text-muted-foreground/60 flex items-center justify-center gap-2.5 font-mono text-[10px] tracking-widest uppercase">
              <ShieldCheck className="text-primary/50 h-4 w-4" />
              <span>Success-Based Model</span>
            </div>
            <div className="text-muted-foreground/60 flex items-center justify-center gap-2.5 font-mono text-[10px] tracking-widest uppercase">
              <ShieldAlert className="text-primary/50 h-4 w-4" />
              <span>End-to-End Encryption</span>
            </div>
            <div className="text-muted-foreground/60 border-border/10 flex items-center justify-center gap-2.5 border-t pt-4 font-mono text-[10px] tracking-widest uppercase md:border-t-0 md:pt-0">
              <span>Auth: AEMDEVWEB-2026</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
