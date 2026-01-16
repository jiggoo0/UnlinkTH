"use client"

import React from "react"
import {
  CheckCircle2,
  Search,
  MessageSquare,
  ShieldCheck,
  ArrowRight,
} from "lucide-react"
import { Typography } from "@/components/ui/typography"
import { cn } from "@/lib/utils"

const steps = [
  {
    title: "ส่งลิงก์วินิจฉัย",
    description:
      "ส่งลิงก์ที่มีปัญหามาให้เราทาง Line เพื่อวิเคราะห์ต้นทางของข้อมูลและระดับความยากง่ายเบื้องต้น",
    icon: Search,
    color: "bg-blue-500",
  },
  {
    title: "ประเมินแนวทาง",
    description:
      "ทีมงานวิเคราะห์และแจ้งแผนการจัดการตามจริงว่าควร 'เจรจาลบ' หรือ 'ใช้ SEO ดันกลบ' พร้อมประเมินระยะเวลา",
    icon: MessageSquare,
    color: "bg-blue-600",
  },
  {
    title: "ลงมือจัดการ",
    description:
      "ดำเนินการตามแผนที่วางไว้ ไม่ว่าจะเป็นการเจรจาเชิงลึก ยื่นสิทธิ์ PDPA หรือเริ่มวางโครงสร้าง SEO ทันที",
    icon: ShieldCheck,
    color: "bg-blue-700",
  },
  {
    title: "สรุปผลและติดตาม",
    description:
      "ส่งรายงานสรุปผลการดำเนินงาน และให้คำแนะนำในการดูแลจัดการชื่อเสียงออนไลน์ในระยะยาว",
    icon: CheckCircle2,
    color: "bg-emerald-500",
  },
]

/**
 * ProtocolStepper: แสดงขั้นตอนการดำเนินงานแบบ Timeline
 * ออกแบบมาให้รองรับการแสดงผลทั้งมือถือ (Single Column)
 * และหน้าจอใหญ่ (Alternating Layout)
 */
export default function ProtocolStepper() {
  return (
    <div className="relative mx-auto max-w-5xl px-4 py-12">
      {/* Center Line (Desktop Only) */}
      <div className="absolute top-0 left-9 hidden h-full w-0.5 bg-slate-200 md:left-1/2 md:block md:-translate-x-1/2" />

      <div className="space-y-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className={cn(
              "relative flex flex-col md:flex-row md:items-center",
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            )}
          >
            {/* 1. Icon Node */}
            <div className="absolute left-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white shadow-lg md:left-1/2 md:-translate-x-1/2 md:transform">
              <div
                className={cn(
                  "flex h-full w-full items-center justify-center rounded-full text-white",
                  step.color
                )}
              >
                <step.icon size={18} />
              </div>
            </div>

            {/* 2. Content Card */}
            <div
              className={cn(
                "ml-14 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md md:ml-0 md:w-[45%]",
                index % 2 === 0 ? "md:text-left" : "md:text-right"
              )}
            >
              <div
                className={cn(
                  "mb-2 inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-bold text-blue-600",
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                )}
              >
                Step {index + 1}
              </div>

              <Typography
                variant="h3"
                className="mb-2 border-none pb-0 text-xl font-bold text-slate-900"
              >
                {step.title}
              </Typography>

              <Typography
                variant="p"
                className="text-sm leading-relaxed text-slate-600"
              >
                {step.description}
              </Typography>

              {/* Mobile Decorative Arrow */}
              <div className="mt-4 flex items-center gap-1 text-xs font-bold text-blue-600 md:hidden">
                NEXT STEP <ArrowRight size={12} />
              </div>
            </div>

            {/* 3. Spacer for Desktop */}
            <div className="hidden md:block md:w-[10%]" />
          </div>
        ))}
      </div>
    </div>
  )
}
