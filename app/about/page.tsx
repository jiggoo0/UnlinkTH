"use client"

import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/constants/site-config"
import {
  ShieldCheck,
  EyeOff,
  Target,
  Lock,
  Activity,
  Fingerprint,
  ChevronRight,
} from "lucide-react"
import ContactCTA from "@/components/sections/ContactCTA"
import { motion } from "framer-motion"

/**
 * About: ตัวตนและพันธกิจของ UNLINK-TH
 * ยุทธศาสตร์: Establishing Authority -> Technical Empathy -> Core Values
 */

const values = [
  {
    icon: <Lock className="text-primary h-6 w-6" />,
    title: "Absolute Privacy",
    description:
      "เราไม่มีนโยบายจัดเก็บฐานข้อมูลลูกค้า ข้อมูลและเอกสารทั้งหมดจะถูกทำลายทิ้ง (Secure Purge) ทันทีหลังปิดภารกิจภายใต้มาตรฐาน NDA สูงสุด",
  },
  {
    icon: <Target className="text-primary h-6 w-6" />,
    title: "Technical Precision",
    description:
      "ดำเนินการในระดับ De-indexing และ Metadata Removal โดยวิศวกรข้อมูล เพื่อผลลัพธ์ที่ถาวรและแม่นยำกว่าการทำ SEO ทั่วไป",
  },
  {
    icon: <EyeOff className="text-primary h-6 w-6" />,
    title: "Non-Judgmental Support",
    description:
      "เราคือ Silent Partner ที่พร้อมรับฟังและแก้ไขปัญหาด้วยความเข้าใจ โดยไม่ตัดสินเหตุการณ์ในอดีตหรือเบื้องหลังของคุณ",
  },
]

export default function AboutPage() {
  return (
    <div className="bg-background flex w-full flex-col overflow-hidden">
      {/* 01: Hero Section - The Specialist Vision */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-56 lg:pb-32">
        {/* Tactical Background Decor: HUD Grid */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
          aria-hidden="true"
        >
          <div className="h-full w-full bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:32px_32px]" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <Badge
                variant="outline"
                className="border-primary/30 bg-primary/5 text-primary px-4 py-1.5 font-mono text-[10px] tracking-[0.2em] uppercase"
              >
                The Specialist Unit
              </Badge>
              <div className="flex items-center gap-1.5 opacity-30">
                <Activity className="text-primary h-3 w-3 animate-pulse" />
                <span className="font-mono text-[8px] tracking-tighter uppercase">
                  Mission Active
                </span>
              </div>
            </div>

            <h1 className="text-foreground mb-10 text-5xl leading-tight font-extrabold tracking-tighter md:text-7xl lg:text-8xl">
              ทุกคนควรมีโอกาส <br />
              <span className="text-muted-foreground text-4xl font-light italic md:text-6xl lg:text-7xl">
                เริ่มต้นใหม่ในโลกดิจิทัล
              </span>
            </h1>

            <p className="text-muted-foreground/80 max-w-2xl text-xl leading-relaxed md:text-2xl">
              <span className="text-foreground font-bold italic">
                {siteConfig.name}
              </span>{" "}
              คือหน่วยปฏิบัติการพิเศษที่ก่อตั้งโดยวิศวกรข้อมูลและที่ปรึกษากฎหมาย
              เพื่อทวงคืนสิทธิความเป็นส่วนตัวและการมีอยู่ของข้อมูล
              ด้วยการบังคับใช้สิทธิ{" "}
              <span className="text-primary decoration-primary/30 italic underline underline-offset-8">
                Right to be Forgotten
              </span>{" "}
              อย่างเป็นระบบ
            </p>
          </motion.div>
        </div>
      </section>

      {/* 02: Philosophy Section - Technical Empathy */}
      <section className="relative z-10 container mx-auto px-6 py-24 lg:py-40">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="text-primary flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest uppercase">
                <div className="bg-primary h-1 w-6" />
                Our Philosophy
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
                มากกว่าการลบ <br />
                <span className="text-primary italic">
                  คือการคืนพื้นที่ส่วนตัว
                </span>
              </h2>
            </div>

            <div className="text-muted-foreground/90 font-thai space-y-6 text-lg leading-loose">
              <p>
                บนโลกอินเทอร์เน็ต "ความทรงจำ" เป็นสิ่งที่ถาวร
                แม้ข้อมูลเหล่านั้นจะเป็นข่าวเก่าที่จบไปแล้ว ข่าวบิดเบือน
                หรือความผิดพลาดในอดีตที่ได้รับการแก้ไขแล้วก็ตาม
                สิ่งเหล่านี้กลายเป็น{" "}
                <strong className="text-foreground font-bold italic">
                  "โซ่ตรวนดิจิทัล"
                </strong>{" "}
                ที่ฉุดรั้งโอกาสในหน้าที่การงานและชื่อเสียงของคุณในปัจจุบัน
              </p>
              <p>
                เราไม่ได้มองหาแค่การลบลิงก์ แต่เราเน้นกระบวนการถอดถอนดัชนีข้อมูล
                <span className="bg-muted/30 text-foreground mx-2 rounded px-2 py-1 font-mono text-sm font-bold">
                  (Technical De-indexing)
                </span>{" "}
                เพื่อให้ข้อมูลที่ไม่พึงประสงค์หายไปจากระบบการสืบค้นอย่างถาวร
                ภายใต้กรอบของกฎหมายความปลอดภัยข้อมูลส่วนบุคคล (PDPA)
              </p>
            </div>

            <div className="border-primary/20 bg-primary/5 relative overflow-hidden rounded-2xl border p-8 backdrop-blur-sm">
              <div className="flex items-start gap-5">
                <div className="bg-primary/10 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl">
                  <ShieldCheck className="text-primary h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <p className="text-foreground/80 leading-relaxed font-bold italic">
                    "เราไม่ใช่เอเจนซี่โฆษณา แต่เราคือ Silent Partner
                    ที่จัดการวิกฤตชื่อเสียงให้คุณอย่างเงียบเชียบและแม่นยำที่สุด"
                  </p>
                  <div className="text-primary/60 flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase">
                    <ChevronRight className="h-3 w-3" />
                    Encrypted Operation Protocol
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Core Values Cards Matrix */}
          <div className="grid gap-6">
            {values.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group border-border/50 bg-muted/5 hover:border-primary/40 hover:bg-muted/10 relative overflow-hidden rounded-[2.5rem] border p-8 transition-all duration-500"
              >
                <div className="bg-primary/10 group-hover:bg-primary/20 mb-6 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:rotate-12">
                  {item.icon}
                </div>
                <h3 className="text-foreground mb-3 text-xl font-extrabold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground/80 text-base leading-relaxed">
                  {item.description}
                </p>
                {/* Decorative Elements */}
                <Fingerprint className="text-primary absolute -right-6 -bottom-6 h-32 w-32 opacity-[0.02] transition-opacity duration-700 group-hover:opacity-[0.05]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 03: Conversion Segment */}
      <div className="border-border/40 bg-muted/5 border-t">
        <ContactCTA />
      </div>
    </div>
  )
}
