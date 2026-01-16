"use client"

import React from "react"
import {
  CheckCircle2,
  Search,
  MessageSquare,
  ShieldCheck,
  // ✅ แก้ไข: ลบ ArrowRight ที่ไม่ได้ใช้งานออกเพื่อผ่าน ESLint
  ChevronRight,
} from "lucide-react"
import { Typography } from "@/components/ui/typography"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const steps = [
  {
    title: "ส่งลิงก์วินิจฉัย",
    description:
      "ส่งลิงก์ที่มีปัญหามาให้เราทาง Line เพื่อวิเคราะห์ต้นทางของข้อมูลและระดับความยากง่ายเบื้องต้น",
    icon: Search,
    color: "bg-blue-500",
    shadow: "shadow-blue-500/20",
  },
  {
    title: "ประเมินแนวทาง",
    description:
      "ทีมงานวิเคราะห์และแจ้งแผนการจัดการตามจริงว่าควร 'เจรจาลบ' หรือ 'ใช้ SEO ดันกลบ' พร้อมประเมินระยะเวลา",
    icon: MessageSquare,
    color: "bg-blue-600",
    shadow: "shadow-blue-600/20",
  },
  {
    title: "ลงมือจัดการ",
    description:
      "ดำเนินการตามแผนที่วางไว้ ไม่ว่าจะเป็นการเจรจาเชิงลึก ยื่นสิทธิ์ PDPA หรือเริ่มวางโครงสร้าง SEO ทันที",
    icon: ShieldCheck,
    color: "bg-blue-700",
    shadow: "shadow-blue-700/20",
  },
  {
    title: "สรุปผลและติดตาม",
    description:
      "ส่งรายงานสรุปผลการดำเนินงาน และให้คำแนะนำในการดูแลจัดการชื่อเสียงออนไลน์ในระยะยาว",
    icon: CheckCircle2,
    color: "bg-emerald-500",
    shadow: "shadow-emerald-500/20",
  },
]

/**
 * ProtocolStepper: แสดงขั้นตอนการดำเนินงาน (Service Workflow)
 * ✅ แสดงผลแบบ Alternating Layout บน Desktop (ซ้าย-ขวา)
 * ✅ ดีไซน์สไตล์ Modern Corporate พร้อม Micro-interactions
 * ✅ ESLint Clean: ลบ Unused ArrowRight ออกแล้ว
 */
export default function ProtocolStepper() {
  return (
    <div className="relative mx-auto max-w-6xl px-4 py-20">
      {/* 🛣️ Central Path Line (Desktop Only) */}
      <div className="absolute top-0 left-9 hidden h-full w-[2px] bg-gradient-to-b from-transparent via-slate-200 to-transparent md:left-1/2 md:block md:-translate-x-1/2" />

      <div className="space-y-16 md:space-y-24">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "relative flex flex-col md:flex-row md:items-center",
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              {/* 1. 🔘 Node Icon: จุดกึ่งกลาง timeline */}
              <div className="absolute left-0 z-20 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-white shadow-xl md:left-1/2 md:-translate-x-1/2 md:transform">
                <div
                  className={cn(
                    "flex h-full w-full items-center justify-center rounded-full text-white shadow-inner",
                    step.color
                  )}
                >
                  <step.icon size={22} strokeWidth={2.5} />
                </div>
              </div>

              {/* 2. 📄 Content Card */}
              <div
                className={cn(
                  "ml-16 rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all hover:shadow-2xl hover:shadow-blue-500/5 md:ml-0 md:w-[45%]",
                  isEven ? "md:text-left" : "md:text-right"
                )}
              >
                <div
                  className={cn(
                    "mb-4 inline-flex items-center rounded-full px-4 py-1 text-xs font-black tracking-widest uppercase",
                    isEven
                      ? "bg-blue-50 text-blue-600"
                      : "bg-blue-50 text-blue-600 md:flex-row-reverse"
                  )}
                >
                  Step {index + 1}
                </div>

                <Typography
                  variant="h3"
                  className="mb-4 border-none pb-0 text-2xl font-black text-slate-900"
                >
                  {step.title}
                </Typography>

                <Typography
                  variant="p"
                  className="text-base leading-relaxed text-slate-500"
                >
                  {step.description}
                </Typography>

                {/* Mobile Next Indicator */}
                <div className="mt-6 flex items-center gap-2 text-xs font-black tracking-widest text-blue-600 uppercase md:hidden">
                  ขั้นตอนถัดไป{" "}
                  <ChevronRight size={14} className="animate-pulse" />
                </div>
              </div>

              {/* 3. 🧩 Gap for Desktop Balance */}
              <div className="hidden md:block md:w-[10%]" />
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
