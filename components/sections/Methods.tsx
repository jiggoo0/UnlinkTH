/** @format */

"use client"

import { motion } from "framer-motion"
import { Cpu, Globe, Scale, ArrowRight, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

/**
 * UNLINK-TH | Core Methodologies Protocol (2026)
 * -------------------------------------------------------------------------
 * รวบรวมยุทธวิธีหลักในการจัดการชื่อเสียงออนไลน์เชิงเทคนิค
 * เน้นความสะอาดของโครงสร้างและการเคลื่อนไหวที่นุ่มนวล
 */

const methods = [
  {
    title: "Technical De-indexing",
    subtitle: "Metadata Cleansing Protocol",
    description:
      "เราใช้กระบวนการ Eradicate เพื่อถอนรากถอนโคนข้อมูลออกจากฐานข้อมูล Google Search โดยตรง ผ่านระบบบริหารจัดการคำร้องระดับวิศวกรรมข้อมูล",
    icon: Cpu,
  },
  {
    title: "Reputation Shielding",
    subtitle: "SEO Shadowing Domination",
    description:
      "การสร้าง Digital Assets ความน่าเชื่อถือสูงเพื่อเข้ายึดครองพื้นที่การแสดงผลหน้าแรก และผลักดันข้อมูลเชิงลบให้พ้นจากสายตาการสืบค้นอย่างเป็นระบบ",
    icon: Globe,
  },
  {
    title: "Legal Enforcement",
    subtitle: "PDPA & Right to be Forgotten",
    description:
      "ปฏิบัติการผ่านข้อกฎหมายดิจิทัลร่วมกับมาตรการทางเทคนิค เพื่อบังคับใช้สิทธิการถอดถอนข้อมูลส่วนบุคคลตามมาตรฐานสากล",
    icon: Scale,
  },
]

export default function Methods() {
  return (
    <section className="border-border/5 container border-t py-24">
      {/* 1. Protocol Header */}
      <div className="mb-20 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl space-y-4"
        >
          <div className="text-primary flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase">
            <ShieldCheck className="h-4 w-4" />
            <span>Operational Methodologies</span>
          </div>
          <h2 className="text-4xl leading-[1.1] font-bold tracking-tighter md:text-6xl">
            Advanced{" "}
            <span className="text-primary font-light italic">Reputation</span>{" "}
            <br />
            Architectures
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed font-light md:text-xl">
            ผสมผสานวิศวกรรมข้อมูลระดับสูงร่วมกับยุทธศาสตร์กฎหมายดิจิทัล
            เพื่อสร้างทางออกที่ทรงพลังและยั่งยืนที่สุดให้แก่ภาพลักษณ์ออนไลน์ของคุณ
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Button
            variant="outline"
            className="border-primary/20 bg-primary/5 hover:bg-primary/10 rounded-full px-8 transition-all"
            asChild
          >
            <Link href="/services" className="flex items-center gap-2">
              View Technical Specs <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* 2. Method Grid */}
      <div className="grid gap-8 md:grid-cols-3">
        {methods.map((method, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            viewport={{ once: true }}
            className="lab-card group hover:bg-muted/5 flex flex-col justify-between p-10 transition-all duration-500"
          >
            <div className="space-y-6">
              <div className="bg-primary/5 border-primary/10 group-hover:bg-primary/20 flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-500 group-hover:scale-110">
                <method.icon className="text-primary glow-emerald h-7 w-7" />
              </div>

              <div className="space-y-2">
                <p className="text-primary/60 font-mono text-[10px] tracking-[0.25em] uppercase">
                  {method.subtitle}
                </p>
                <h3 className="text-2xl font-bold tracking-tight">
                  {method.title}
                </h3>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed font-light">
                {method.description}
              </p>
            </div>

            <div className="border-border/10 text-muted-foreground/30 mt-10 flex items-center justify-between border-t pt-6 font-mono text-[9px] tracking-widest uppercase">
              <span>Security Level: Alpha</span>
              <span>2026.01</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
