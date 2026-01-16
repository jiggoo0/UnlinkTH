"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { siteConfig } from "@/constants/site-config"
import {
  MessageCircle,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

/**
 * Hero Section: ส่วนแรกของหน้าแรกที่ดึงดูดความสนใจ (Landing Page)
 * ✅ รองรับแอนิเมชันผ่าน Framer Motion
 * ✅ เน้น CTA ที่ชัดเจนและ Trust Indicators
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      {/* 🌌 Background Decorative Element: สร้างมิติด้วย Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,#eff6ff_0%,#fff_100%)]" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* 🛡️ Trust Badge */}
          <div className="mb-8 inline-flex items-center rounded-full bg-blue-50 px-5 py-2 text-sm font-bold text-blue-700 shadow-sm ring-1 ring-blue-700/10">
            <ShieldCheck className="mr-2 h-4 w-4" />
            ผู้เชี่ยวชาญด้านการจัดการชื่อเสียงออนไลน์ (E-Reputation)
          </div>

          {/* 📢 Main Title: ใช้ Typography System เพื่อความสม่ำเสมอ */}
          <Typography
            variant="h1"
            className="mb-6 border-none pb-0 text-4xl leading-[1.1] font-black tracking-tight text-slate-900 md:text-6xl lg:text-7xl"
          >
            {siteConfig.branding.heroTitle}
          </Typography>

          {/* 📝 Subtitle: อธิบายคุณค่าหลักของแบรนด์ */}
          <Typography
            variant="lead"
            className="mx-auto mb-12 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl"
          >
            {siteConfig.branding.heroSubTitle}
          </Typography>

          {/* 🚀 CTA Buttons: ปุ่มดำเนินการหลักและรอง */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="group h-16 bg-blue-600 px-10 text-lg font-bold shadow-xl shadow-blue-500/20 transition-all hover:bg-blue-700 hover:shadow-blue-500/40 active:scale-95"
              asChild
            >
              <a
                href={siteConfig.contact.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-6 w-6 fill-current" />
                {siteConfig.branding.ctaText}
                <ArrowRight className="ml-2 h-5 w-5 opacity-50 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="h-16 border-slate-200 bg-white px-10 text-lg font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-50 active:scale-95"
              asChild
            >
              <a href="#methods">วิธีการทำงานของเรา</a>
            </Button>
          </div>

          {/* ✅ Trust Indicators: สัญลักษณ์สร้างความเชื่อมั่นเบื้องต้น */}
          <div className="mt-20 flex flex-wrap justify-center gap-x-10 gap-y-4 text-sm font-bold tracking-wide text-slate-500 uppercase">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              ดำเนินการตาม PDPA
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              รักษาความลับ 100%
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              ประเมินเคสฟรี
            </span>
          </div>
        </motion.div>
      </div>

      {/* Decorative Blur Object */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/5 blur-[120px]" />
    </section>
  )
}
