"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  CheckCircle2,
  Clock,
  ShieldAlert,
  Search,
  ArrowUpRight,
  Fingerprint,
  Activity,
} from "lucide-react"

/**
 *
 * Case Studies Data (Strategic Archive)
 * ยึดหลัก Confidentiality Protocol: ไม่ระบุชื่อจริง แต่เน้นกระบวนการและผลลัพธ์เชิงประจักษ์
 */
const cases = [
  {
    category: "Corporate Executive",
    title: "De-indexing ข่าวทุจริตที่เป็นข้อมูลเท็จ",
    problem: "ข้อมูลเท็จจากคู่แข่งปรากฏบนหน้าแรก Google เมื่อค้นหาชื่อ-นามสกุล",
    solution: "Technical De-indexing ร่วมกับมาตรการ PDPA Notice",
    result: "ระงับการเข้าถึงสำเร็จภายใน 48 ชั่วโมง",
    impact: "Restored Business Trust",
  },
  {
    category: "Private Individual",
    title: "Source Removal ข้อมูลส่วนตัวรั่วไหล",
    problem:
      "ข้อมูลส่วนตัว (PII) ถูกเผยแพร่ไปยังเว็บไซต์ต่างประเทศโดยไม่ได้รับอนุญาต",
    solution: "Source Negotiation & URL Removal Protocol",
    result: "ถอดถอนลิงก์ต้นทางสำเร็จ 95% ภายใน 7 วัน",
    impact: "Privacy Reclaimed",
  },
  {
    category: "E-commerce Business",
    title: "Reverse SEO กระทู้ Blacklist ปลอม",
    problem: "กระทู้ดราม่าที่ข้อมูลบิดเบือนตกค้างในผลการค้นหาเป็นเวลานาน",
    solution: "SEO Suppression (Push Down) & Authority Dilution",
    result: "ผลักดันข้อมูลลบตกไปอยู่ที่หน้า 5+ ของผลการค้นหา",
    impact: "Sales Normalization",
  },
]

export default function Proof() {
  return (
    <section
      id="proof"
      className="bg-background relative overflow-hidden py-24 lg:py-40"
    >
      {/* 01: Operational Background Decor - Tactical Grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        aria-hidden="true"
      >
        <div className="h-full w-full bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* 02: Strategic Header Segment */}
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-6 flex items-center justify-center gap-3">
              <Badge
                variant="outline"
                className="border-primary/30 bg-primary/5 text-primary px-4 py-1.5 font-mono text-[10px] tracking-[0.2em] uppercase"
              >
                Proven Track Record
              </Badge>
              <div className="flex items-center gap-1.5 opacity-30">
                <Activity className="text-primary h-3 w-3 animate-pulse" />
                <span className="font-mono text-[8px] tracking-tighter uppercase">
                  Archive Verified
                </span>
              </div>
            </div>

            <h2 className="text-foreground mb-8 text-4xl leading-tight font-extrabold tracking-tighter md:text-6xl lg:text-7xl">
              กรณีศึกษา <br />
              <span className="text-muted-foreground text-3xl font-light italic md:text-5xl lg:text-6xl">
                และการบริหารจัดการวิกฤต
              </span>
            </h2>

            <p className="text-muted-foreground/80 mx-auto max-w-2xl text-lg leading-relaxed md:text-xl">
              เพื่อความเป็นส่วนตัวสูงสุด ข้อมูลทั้งหมดถูกจัดทำในรูปแบบนิรนาม{" "}
              <span className="text-foreground font-bold">(Anonymized)</span>{" "}
              นี่คือหลักฐานเชิงประจักษ์ในประสิทธิภาพของกระบวนการถอดถอนข้อมูลเชิงเทคนิคของเรา
            </p>
          </motion.div>
        </div>

        {/* 03: Operational Log Matrix (Cards Grid) */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Card className="group border-border/50 bg-muted/5 hover:border-primary/40 hover:bg-muted/10 hover:shadow-primary/5 relative h-full overflow-hidden transition-all duration-500 hover:shadow-2xl">
                <CardHeader className="p-8 pb-4">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="group-hover:text-primary flex items-center gap-2 transition-colors">
                      <Fingerprint className="text-primary/40 group-hover:text-primary/70 h-4 w-4" />
                      <span className="text-muted-foreground font-mono text-[10px] font-black tracking-widest uppercase">
                        LOG: {item.category}
                      </span>
                    </div>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                    </div>
                  </div>
                  <h3 className="text-foreground group-hover:text-primary text-xl leading-tight font-bold transition-colors md:text-2xl">
                    {item.title}
                  </h3>
                </CardHeader>

                <CardContent className="space-y-6 p-8 pt-2">
                  <div className="space-y-4">
                    {/* Initial Incident Section */}
                    <div className="border-destructive/20 group-hover:border-destructive/40 flex items-start gap-4 border-l pl-4 transition-colors">
                      <ShieldAlert className="text-destructive/60 mt-1 h-4 w-4 shrink-0" />
                      <div>
                        <p className="text-destructive/80 mb-1 text-[10px] font-black tracking-widest uppercase">
                          Initial Incident
                        </p>
                        <p className="text-muted-foreground/90 text-sm leading-relaxed">
                          {item.problem}
                        </p>
                      </div>
                    </div>
                    {/* Strategic Protocol Section */}
                    <div className="border-primary/20 group-hover:border-primary/40 flex items-start gap-4 border-l pl-4 transition-colors">
                      <Search className="text-primary/60 mt-1 h-4 w-4 shrink-0" />
                      <div>
                        <p className="text-primary/80 mb-1 text-[10px] font-black tracking-widest uppercase">
                          Strategic Protocol
                        </p>
                        <p className="text-muted-foreground/90 text-sm leading-relaxed">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Operational Verification Panel */}
                  <div className="border-primary/20 bg-primary/5 group-hover:bg-primary/10 relative mt-8 overflow-hidden rounded-[1.5rem] border p-6 backdrop-blur-sm transition-all">
                    <div className="relative z-10">
                      <div className="mb-3 flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className="border-primary/20 bg-background/50 text-primary h-5 px-2 font-mono text-[9px] font-black tracking-widest uppercase"
                        >
                          <Clock className="mr-1.5 h-3 w-3" />
                          Validated Result
                        </Badge>
                      </div>
                      <p className="text-foreground text-lg font-black tracking-tight md:text-xl">
                        {item.result}
                      </p>
                      <div className="border-primary/10 mt-4 flex items-center justify-between border-t pt-4">
                        <span className="text-muted-foreground/50 font-mono text-[9px] font-bold tracking-[0.2em] uppercase italic">
                          Effect: {item.impact}
                        </span>
                        <ArrowUpRight className="text-primary/30 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 04: Integrity Disclaimer & Policy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <div className="group border-border/40 bg-muted/10 text-muted-foreground/60 hover:border-primary/30 hover:text-primary inline-flex cursor-default items-center gap-3 rounded-full border px-8 py-3 text-[10px] font-black tracking-[0.3em] uppercase transition-all">
            <ShieldAlert className="h-4 w-4 transition-transform group-hover:scale-110" />
            Operational Integrity First Policy
          </div>
          <p className="text-muted-foreground/40 mx-auto mt-8 max-w-2xl text-xs leading-relaxed font-medium italic">
            * ผลลัพธ์เชิงสถิติอ้างอิงจากข้อมูลปฏิบัติการจริง
            อย่างไรก็ตามความสำเร็จขึ้นอยู่กับความซับซ้อนของ Metadata ในแต่ละเคส{" "}
            <br />
            เราดำเนินการวิเคราะห์ความเป็นไปได้ทางเทคนิค (Technical Feasibility
            Audit) เป็นรายกรณีเพื่อความโปร่งใสสูงสุด
          </p>
          <div className="via-primary/20 mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
