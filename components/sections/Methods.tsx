"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  DatabaseZap,
  Scale,
  SearchCheck,
  ShieldAlert,
  Fingerprint,
  Activity,
} from "lucide-react"

/**
 * Technical Methodologies Data
 * ยุทธศาสตร์ Hybrid (Technical + Legal) ที่เป็นหัวใจของ UNLINK
 */
const methods = [
  {
    icon: <DatabaseZap className="text-primary h-7 w-7" />,
    title: "Technical De-indexing",
    description:
      "ปฏิบัติการถอดถอนดัชนีการค้นหาจากระดับอัลกอริทึมของ Search Engine เพื่อตัดเส้นทางการเข้าถึงข้อมูลจากสาธารณะอย่างถาวร",
    features: [
      "Cache Removal Protocol",
      "URL Re-crawl Suppression",
      "Search Console Optimization",
    ],
  },
  {
    icon: <Scale className="text-primary h-7 w-7" />,
    title: "Legal Enforcement",
    description:
      "บังคับใช้สิทธิตามกฎหมาย PDPA (สิทธิในการถูกลืม) และกรอบกฎหมายสากล เพื่อสร้างอำนาจต่อรองในการลบข้อมูลที่ต้นทาง",
    features: [
      "PDPA Compliance Notice",
      "Data Controller Negotiation",
      "Regulatory Liaison",
    ],
  },
  {
    icon: <SearchCheck className="text-primary h-7 w-7" />,
    title: "Suppression Strategy",
    description:
      "ในกรณีที่ไม่สามารถลบต้นทางได้ เราจะใช้ระบบ Reverse SEO เพื่อเจือจางและผลักดันเนื้อหาลบให้พ้นจากพื้นที่การมองเห็น",
    features: [
      "Authority Dilution",
      "Positive Asset Generation",
      "Rank Suppression",
    ],
  },
]

export default function Methods() {
  return (
    <section
      id="methods"
      className="bg-background relative overflow-hidden py-24 lg:py-40"
    >
      {/* 01: Operational Background Decor - Tactical Grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        aria-hidden="true"
      >
        <div className="h-full w-full bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* 02: Strategic Header Segment */}
        <div className="mb-20 flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <Badge
                variant="outline"
                className="border-primary/30 bg-primary/5 text-primary px-4 py-1.5 font-mono text-[10px] tracking-[0.2em] uppercase"
              >
                System Methodology
              </Badge>
              <div className="flex items-center gap-1.5 opacity-30">
                <Activity className="text-primary h-3 w-3 animate-pulse" />
                <span className="font-mono text-[8px] tracking-tighter uppercase">
                  Analysis Active
                </span>
              </div>
            </div>

            <h2 className="text-foreground text-4xl leading-[1.1] font-extrabold tracking-tighter md:text-6xl lg:text-7xl">
              กลยุทธ์เชิงเทคนิค <br />
              <span className="text-muted-foreground text-3xl font-light italic md:text-5xl lg:text-6xl">
                ที่เหนือกว่าการแจ้งลบแบบทั่วไป
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden pb-4 md:block"
          >
            <div className="border-primary/30 border-l-2 pl-8">
              <p className="text-muted-foreground/80 max-w-xs text-sm leading-relaxed font-medium italic md:text-base">
                เราประเมินและเลือกใช้วิธีที่เหมาะสมตามโครงสร้างข้อมูล
                เพื่อให้ได้ผลลัพธ์ที่แม่นยำและป้องกันการเกิดซ้ำ (Re-appearance)
              </p>
            </div>
          </motion.div>
        </div>

        {/* 03: Methods Matrix Grid */}

        <div className="grid gap-8 md:grid-cols-3">
          {methods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="group border-border/50 bg-muted/5 hover:border-primary/40 hover:bg-muted/10 hover:shadow-primary/5 relative h-full overflow-hidden transition-all duration-500 hover:shadow-2xl">
                <CardContent className="p-10">
                  {/* Tactical Icon Container */}
                  <div className="border-border/40 bg-background group-hover:border-primary/50 mb-10 inline-flex h-16 w-16 items-center justify-center rounded-2xl border transition-all duration-500 group-hover:rotate-[10deg] group-hover:shadow-[0_0_25px_rgba(var(--color-primary),0.15)]">
                    {method.icon}
                  </div>

                  <h3 className="text-foreground group-hover:text-primary mb-5 text-2xl font-black tracking-tight transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground/90 mb-10 text-base leading-relaxed font-medium">
                    {method.description}
                  </p>

                  <ul className="space-y-4">
                    {method.features.map((feature, fIndex) => (
                      <li
                        key={`${index}-${fIndex}`}
                        className="text-foreground/60 group-hover:text-foreground/80 flex items-center text-[11px] font-black tracking-[0.15em] uppercase transition-colors"
                      >
                        <div className="bg-primary/40 group-hover:bg-primary mr-4 h-1.5 w-1.5 rounded-full transition-all group-hover:scale-125" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>

                {/* Tactical Backdrop ID */}
                <span className="text-primary/[0.03] group-hover:text-primary/[0.06] pointer-events-none absolute right-10 bottom-4 font-mono text-8xl font-black italic transition-all duration-700 select-none group-hover:-translate-y-2">
                  0{index + 1}
                </span>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* 04: Authority & Differentiation Note */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-primary/20 bg-primary/5 mt-24 overflow-hidden rounded-[2.5rem] border p-8 backdrop-blur-md lg:p-16"
        >
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="bg-primary/10 flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl shadow-[0_0_30px_rgba(var(--color-primary),0.1)]">
              <ShieldAlert className="text-primary h-10 w-10" />
            </div>

            <div className="flex-1 text-center lg:text-left">
              <h4 className="text-foreground mb-4 text-2xl font-bold tracking-tight">
                The Technical Difference
              </h4>
              <p className="text-muted-foreground/80 text-base leading-loose italic md:text-lg">
                เราแตกต่างจากหน่วยงานทั่วไปที่เน้นเพียงปริมาณการรีพอร์ต: UNLINK
                วิเคราะห์บนพื้นฐานของ
                <span className="text-primary decoration-primary/20 mx-2 font-mono font-black tracking-tighter uppercase underline underline-offset-4">
                  Technical Feasibility
                </span>
                และมาตรการถอดถอนระดับ Metadata เพื่อผลลัพธ์ที่ยั่งยืนที่สุด
              </p>
            </div>

            <div className="shrink-0">
              <div className="group border-primary/20 bg-background text-primary hover:border-primary/50 hover:bg-primary/5 flex cursor-default items-center gap-4 rounded-full border px-8 py-4 text-[10px] font-black tracking-[0.3em] uppercase transition-all">
                Identity Protected
                <Fingerprint className="h-4 w-4 transition-transform group-hover:scale-110" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
