"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { siteConfig } from "@/constants/site-config"
import { MessageCircle, ShieldCheck, ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_40%_at_50%_50%,#eff6ff_0%,#fff_100%)]" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 ring-1 ring-blue-700/10 ring-inset">
            <ShieldCheck className="mr-2 h-4 w-4" />
            ผู้เชี่ยวชาญด้านการจัดการชื่อเสียงออนไลน์ (E-Reputation)
          </div>

          {/* Main Title */}
          <Typography
            variant="h1"
            className="mb-6 leading-tight tracking-tight text-slate-900 lg:text-7xl"
          >
            {siteConfig.branding.heroTitle}
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="lead"
            className="mx-auto mb-12 max-w-2xl text-slate-600"
          >
            {siteConfig.branding.heroSubTitle}
          </Typography>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="group h-14 bg-blue-600 px-8 text-lg font-bold shadow-lg shadow-blue-200 transition-all hover:bg-blue-700"
              asChild
            >
              <a
                href={siteConfig.contact.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5 fill-current" />
                {siteConfig.branding.ctaText}
                <ArrowRight className="ml-2 h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="h-14 border-slate-200 px-8 text-lg font-medium text-slate-700 transition-colors hover:bg-slate-50"
              asChild
            >
              <a href="#methods">วิธีการทำงานของเรา</a>
            </Button>
          </div>

          {/* Trust Indicators (Optional) */}
          <div className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm font-medium text-slate-400">
            <span className="flex items-center gap-2">
              ✓ ดำเนินการตามกฎหมาย PDPA
            </span>
            <span className="flex items-center gap-2">✓ รักษาความลับ 100%</span>
            <span className="flex items-center gap-2">
              ✓ ประเมินเคสเบื้องต้นฟรี
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
