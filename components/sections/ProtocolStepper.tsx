/** @format */

"use client";

import { motion } from "framer-motion";
import { Search, ShieldAlert, Hammer, Eye } from "lucide-react";

/**
 * UNLINK-TH | Operational Protocol Stepper (2026)
 * -------------------------------------------------------------------------
 * แสดงลำดับขั้นตอนการปฏิบัติการ 4 ระยะ (Phases)
 * ออกแบบในสไตล์ Industrial Lab เพื่อแสดงถึงความแม่นยำและเป็นระบบ
 */

const protocols = [
  {
    title: "1. Listen & Assess",
    description:
      "เราพร้อมรับฟังปัญหาของคุณอย่างเป็นส่วนตัว เพื่อวิเคราะห์แนวทางที่เหมาะสมที่สุดตามข้อเท็จจริง",
    icon: Search,
    color: "text-blue-500/80",
  },
  {
    title: "2. Resolve & Restore",
    description:
      "ดำเนินการแก้ไขและนำข้อมูลที่ส่งผลเสียออกอย่างมืออาชีพ เพื่อคืนความสบายใจให้กับตัวตนดิจิทัลของคุณ",
    icon: ShieldAlert,
    color: "text-red-500/80",
  },
  {
    title: "3. Build & Design",
    description:
      "สร้างโอกาสใหม่ด้วยการวางรากฐานตัวตนออนไลน์ที่แข็งแกร่งและน่าเชื่อถือ เพื่ออนาคตที่ก้าวกระโดด",
    icon: Hammer,
    color: "text-primary",
  },
  {
    title: "4. Support & Protect",
    description:
      "เรายังคงเคียงข้างเพื่อเฝ้าระวังและป้องกันไม่ให้ปัญหาเดิมกลับมาทำร้ายคุณได้อีกในระยะยาว",
    icon: Eye,
    color: "text-purple-500/80",
  },
];

export default function ProtocolStepper() {
  return (
    <div className="relative grid gap-8 md:grid-cols-4">
      {/* Connecting Line (Desktop Interface) */}
      <div className="bg-border/20 absolute top-12 left-0 -z-10 hidden h-px w-full md:block" />

      {protocols.map((step, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="lab-card group hover:border-primary/30 relative p-6 transition-all duration-500"
        >
          {/* Icon Architecture */}
          <div
            className={`bg-background border-border/50 group-hover:border-primary/40 mb-6 flex h-14 w-14 items-center justify-center rounded-xl border shadow-sm transition-all duration-500 group-hover:scale-110`}
          >
            <step.icon
              className={`h-7 w-7 ${step.color} group-hover:text-primary transition-colors`}
            />
          </div>

          {/* Protocol Specifications */}
          <h3 className="mb-3 text-xl font-bold tracking-tight">
            {step.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed font-light">
            {step.description}
          </p>

          {/* Authentication Badge */}
          <div className="bg-muted border-border absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full border font-mono text-[10px] font-bold shadow-sm">
            0{idx + 1}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
