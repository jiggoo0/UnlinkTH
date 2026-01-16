"use client"

import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { siteConfig } from "@/constants/site-config"
import { MessageCircle, ShieldCheck, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

/**
 * ContactCTA: ส่วนปิดการขายท้ายหน้า (Call to Action)
 * ✅ ออกแบบมาเพื่อสร้างความมั่นใจสูงสุดด้วยระบบรักษาความลับ
 * ✅ ใช้ Visual Design ที่โดดเด่นเพื่อกระตุ้น Conversion
 */
export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* 🟦 Background Layer: ใช้สีน้ำเงินแบรนด์พร้อมลวดลาย Grid */}
      <div className="absolute inset-0 bg-blue-600">
        {/* Decorative Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)",
          }}
        />
        {/* Glow Effect */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-400/30 blur-[100px]" />
        <div className="absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-blue-800/50 blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center text-white">
          {/* 🛡️ Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center rounded-full bg-white/10 px-5 py-2 text-sm font-bold text-blue-50 ring-1 ring-white/20 backdrop-blur-sm"
          >
            <ShieldCheck className="mr-2 h-4 w-4 text-blue-200" />
            ประเมินเคสเบื้องต้นฟรี โดยทีมงานผู้เชี่ยวชาญ
          </motion.div>

          <Typography
            variant="h2"
            className="mb-6 border-none pb-0 text-3xl leading-tight font-black text-white md:text-5xl"
          >
            พร้อมให้เราดูแล <br className="hidden sm:block" />
            ความปลอดภัยของชื่อเสียงคุณหรือยัง?
          </Typography>

          <Typography
            variant="p"
            className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-blue-100/90"
          >
            เพียงส่งรายละเอียดหรือลิงก์ที่มีปัญหามาให้เราทาง Line
            ทีมงานจะวิเคราะห์ความเป็นไปได้
            และแนะนำแนวทางการจัดการที่เหมาะสมที่สุดให้คุณทันที
          </Typography>

          {/* 🚀 Main CTA Button */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              className="group h-16 rounded-full px-10 text-xl font-extrabold text-blue-700 shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all hover:scale-105 hover:bg-white active:scale-95"
              asChild
            >
              <a
                href={siteConfig.contact.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-6 w-6 fill-current" />
                ปรึกษาทาง LINE (ฟรี)
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* 🔒 Confidentiality & Tags */}
          <div className="mt-12 space-y-6">
            <p className="text-sm font-medium text-blue-100/70 italic">
              * ข้อมูลและการสนทนาทั้งหมดถูกเก็บเป็นความลับสูงสุด
              (Confidentiality Agreement)
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] font-black tracking-[0.2em] text-blue-200/50 uppercase">
              <span className="rounded border border-white/10 px-2 py-1">
                Confidential
              </span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span className="rounded border border-white/10 px-2 py-1">
                Fast Response
              </span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span className="rounded border border-white/10 px-2 py-1">
                Expert Support
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
