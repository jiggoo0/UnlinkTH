/** @format */

"use client"

import { motion } from "framer-motion"
import { ShieldCheck, BarChart3, Fingerprint, Lock, Shield } from "lucide-react"

/**
 * UNLINK-TH | Evidence-Based Reputation Control (2026)
 * -------------------------------------------------------------------------
 * ส่วนแสดงผลลัพธ์เชิงสถิติที่ผ่านการรับรอง (Verified Metrics)
 * ออกแบบเพื่อเสริมสร้าง E-E-A-T ในสายตาผู้ใช้งานและ Search Engine
 */

const stats = [
  { label: "Links Removed", value: "2,500+", icon: ShieldCheck },
  { label: "Success Rate", value: "94%", icon: BarChart3 },
  { label: "Entities Protected", value: "450+", icon: Fingerprint },
  { label: "Privacy Score", value: "100/100", icon: Lock },
]

export default function Proof() {
  return (
    <section className="container py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lab-card bg-muted/5 border-border/40 relative overflow-hidden p-10 md:p-20"
      >
        {/* Architectural Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:40px_40px]" />
        <div className="bg-primary/5 pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full blur-[120px]" />

        <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">
          {/* Text Intelligence Section */}
          <div className="space-y-8">
            <div className="bg-primary/5 border-primary/10 text-primary inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] tracking-[0.2em] uppercase">
              <Shield className="h-3.5 w-3.5" />
              <span>Audit Protocol Active</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl leading-[1.1] font-bold tracking-tighter md:text-6xl">
                Evidence-Based <br />
                <span className="text-primary font-light italic">
                  Reputation Control
                </span>
              </h2>
              <p className="text-muted-foreground max-w-md text-lg leading-relaxed font-light md:text-xl">
                เราเปลี่ยนความกังวลให้เป็นตัวเลขที่พิสูจน์ได้ผ่านกระบวนการตรวจสอบข้อมูลเชิงลึก
                ทุกปฏิบัติการถูกบันทึกและควบคุมภายใต้มาตรฐานความปลอดภัยระดับสูงสุด
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-background border-border/50 text-muted-foreground hover:border-primary/40 rounded-full border px-5 py-2 font-mono text-[10px] tracking-widest uppercase transition-colors">
                verified-protocol-v4.0
              </div>
              <div className="bg-background border-border/50 text-muted-foreground hover:border-primary/40 rounded-full border px-5 py-2 font-mono text-[10px] tracking-widest uppercase transition-colors">
                encrypted-liaison-mode
              </div>
            </div>
          </div>

          {/* Metrics Visualization Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-background/60 border-border/50 hover:border-primary/30 hover:bg-background/80 group flex flex-col items-center space-y-4 rounded-3xl border p-8 text-center transition-all"
              >
                <div className="bg-primary/5 group-hover:bg-primary/10 rounded-2xl p-3 transition-colors">
                  <stat.icon className="text-primary/70 group-hover:text-primary h-6 w-6 transition-colors" />
                </div>
                <div className="space-y-1">
                  <span className="block text-3xl font-bold tracking-tight md:text-4xl">
                    {stat.value}
                  </span>
                  <span className="text-muted-foreground/60 group-hover:text-primary/60 font-mono text-[10px] tracking-[0.2em] uppercase transition-colors">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Meta */}
        <div className="border-border/5 text-muted-foreground/20 mt-16 flex items-center justify-between border-t pt-8 font-mono text-[9px] tracking-[0.3em] uppercase">
          <span>Data Integrity Certified: 2026.01.28</span>
          <span>Security Class: Confidential</span>
        </div>
      </motion.div>
    </section>
  )
}
