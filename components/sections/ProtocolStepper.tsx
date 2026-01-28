/** @format */

"use client"

import { motion } from "framer-motion"
import { Search, ShieldAlert, Hammer, Eye } from "lucide-react"

const protocols = [
  {
    title: "1. Assessment",
    description:
      "วิเคราะห์พิกัดความเสียหายและประเมินโอกาสสำเร็จด้วยระบบวิเคราะห์ Metadata",
    icon: Search,
    color: "text-blue-400",
  },
  {
    title: "2. Neutralization",
    description:
      "ตัดวงจรข้อมูลเชิงลบถาวรผ่านกระบวนการ Technical De-indexing และ Legal Take-down",
    icon: ShieldAlert,
    color: "text-red-400",
  },
  {
    title: "3. Construction",
    description:
      "วางรากฐานตัวตนใหม่ด้วย SEO Shadowing เพื่อจองพื้นที่หน้าแรกให้ขาวสะอาด",
    icon: Hammer,
    color: "text-primary",
  },
  {
    title: "4. Surveillance",
    description:
      "ระบบเฝ้าระวังและป้องกันข้อมูลเสียรายปี เพื่อความมั่นคงของภาพลักษณ์ในระยะยาว",
    icon: Eye,
    color: "text-purple-400",
  },
]

export default function ProtocolStepper() {
  return (
    <div className="relative grid gap-8 md:grid-cols-4">
      {/* Connecting Line (Desktop) */}
      <div className="bg-border/20 absolute top-12 left-0 -z-10 hidden h-px w-full md:block" />

      {protocols.map((step, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          viewport={{ once: true }}
          className="lab-card group relative p-6"
        >
          <div
            className={`bg-background border-border/50 group-hover:border-primary/50 mb-6 flex h-12 w-12 items-center justify-center rounded-xl border shadow-sm transition-colors`}
          >
            <step.icon className={`h-6 w-6 ${step.color}`} />
          </div>
          <h3 className="mb-2 text-lg font-bold tracking-tight">
            {step.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {step.description}
          </p>

          {/* Step Number Badge */}
          <div className="bg-muted border-border absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full border font-mono text-[10px] font-bold">
            0{idx + 1}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
