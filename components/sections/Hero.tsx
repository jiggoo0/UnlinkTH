"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/constants/site-config"
import {
  ShieldCheck,
  ArrowRight,
  LockKeyhole,
  Search,
  Activity,
  Fingerprint,
} from "lucide-react"

/**
 *
 * Hero Section: ศูนย์กลางการสื่อสารและสร้างความเชื่อมั่น (Authority Hub)
 * ยุทธศาสตร์: Establishing Identity -> Strong Value Prop -> Immediate Action
 */
export default function Hero() {
  // สร้าง Link โดยตรงตามนโยบาย LINE-Only จาก siteConfig
  const lineLink = `https://line.me/ti/p/${siteConfig.contact.lineId.replace(
    "@",
    ""
  )}`

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* 01: Strategic Background Layer */}
      <div
        className="bg-background absolute inset-0 -z-10"
        aria-hidden="true"
      />

      {/* 02: Visual Atmosphere (Lab/Technical Grid) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        aria-hidden="true"
      >
        <div className="h-full w-full bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      {/* 03: Scanline & Ambient Light Effects */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="animate-scan h-[200%] w-full bg-[linear-gradient(to_bottom,transparent_0%,var(--color-primary)_50%,transparent_100%)] opacity-10" />
        <div className="bg-primary/5 absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Status Indicator Layer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-3"
          >
            <Badge
              variant="outline"
              className="border-primary/20 bg-primary/5 text-primary px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] uppercase"
            >
              <ShieldCheck className="mr-2 h-3.5 w-3.5" />
              Specialized Digital Fixer
            </Badge>
            <div className="flex items-center gap-1.5 opacity-40">
              <Activity className="text-primary h-3 w-3 animate-pulse" />
              <span className="font-mono text-[8px] font-bold tracking-tighter uppercase">
                System Ready
              </span>
            </div>
          </motion.div>

          {/* Headline Layer: The Fixer's Narrative */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-6xl text-5xl leading-tight font-extrabold tracking-tighter sm:text-7xl lg:text-9xl"
          >
            เราไม่ได้แค่ซ่อน <br />
            <span className="text-muted-foreground text-4xl font-light italic sm:text-6xl lg:text-8xl">
              แต่เราตัดการเชื่อมต่อ
            </span>
          </motion.h1>

          {/* Subtext & Philosophy Layer */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-muted-foreground/80 mt-10 max-w-2xl text-lg leading-relaxed sm:text-xl lg:text-2xl"
          >
            จัดการข้อมูลดิจิทัลที่ผิดพลาดให้หายไปจากพื้นที่การมองเห็นถาวร
            <span className="text-foreground mt-4 block font-bold">
              คืนอิสรภาพให้ตัวตนออนไลน์ของคุณ ภายใต้ความลับสูงสุด
            </span>
          </motion.p>

          {/* Call to Action: Operational Conversion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-14 flex flex-col items-center gap-6 sm:flex-row"
          >
            <Button
              size="lg"
              className="group bg-primary text-primary-foreground shadow-primary/20 h-16 rounded-full px-12 text-lg font-black tracking-tight shadow-2xl transition-all hover:scale-[1.05] active:scale-95"
              asChild
            >
              <Link href={lineLink} target="_blank" rel="noopener noreferrer">
                เริ่มขั้นตอนระงับเหตุ
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="ghost"
              className="hover:bg-muted/10 h-16 rounded-full px-10 text-sm font-bold tracking-[0.2em] uppercase transition-all"
              asChild
            >
              <Link href="/services">
                <Search className="mr-3 h-4 w-4" />
                Technical Protocol
              </Link>
            </Button>
          </motion.div>

          {/* Integrity Banner: Operational Integrity */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 1, delay: 1 }}
            className="border-primary/10 mt-28 flex w-full max-w-4xl flex-col items-center justify-center gap-8 border-t pt-14 text-[10px] sm:flex-row"
          >
            <div className="group text-foreground hover:text-primary flex items-center gap-3 transition-colors">
              <LockKeyhole className="text-primary h-4 w-4" />
              <span className="font-mono font-bold tracking-[0.4em] uppercase">
                Zero-Log Protocol Active
              </span>
            </div>

            <div className="bg-border/40 hidden h-5 w-px sm:block" />

            <div className="group text-foreground hover:text-primary flex items-center gap-3 transition-colors">
              <Fingerprint className="text-primary h-4 w-4" />
              <span className="font-mono font-bold tracking-[0.4em] uppercase">
                Diagnosis at no cost
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        className="from-background absolute bottom-0 h-24 w-full bg-gradient-to-t to-transparent"
        aria-hidden="true"
      />
    </section>
  )
}
