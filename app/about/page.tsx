"use client";

import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/constants/site-config";
import {
  ShieldCheck,
  EyeOff,
  Target,
  Lock,
  Activity,
  Fingerprint,
} from "lucide-react";
import ContactCTA from "@/components/sections/ContactCTA";
import { motion } from "framer-motion";

/**
 * 
 * About: ตัวตนและพันธกิจของ UNLINK
 * ยุทธศาสตร์: Establishing Authority -> Empathy -> Core Values
 */

const values = [
  {
    icon: <Lock className="text-primary h-6 w-6" />,
    title: "Absolute Privacy",
    description:
      "เราไม่มีนโยบายจัดเก็บฐานข้อมูลลูกค้า ข้อมูลและเอกสารทั้งหมดจะถูกทำลายทิ้ง (Secure Purge) ทันทีหลังปิดภารกิจ",
  },
  {
    icon: <Target className="text-primary h-6 w-6" />,
    title: "Technical Precision",
    description:
      "ดำเนินการในระดับ De-indexing และ Metadata Removal โดยวิศวกรข้อมูล เพื่อผลลัพธ์ที่ถาวรและแม่นยำสูง",
  },
  {
    icon: <EyeOff className="text-primary h-6 w-6" />,
    title: "Non-Judgmental Support",
    description:
      "เราคือ Silent Partner ที่พร้อมรับฟังและแก้ไขปัญหาด้วยความเข้าใจ โดยไม่ตัดสินเหตุการณ์ในอดีตของคุณ",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background flex w-full flex-col overflow-hidden">
      {/* 01: Hero Section - The Specialist Vision */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-56 lg:pb-32">
        {/* Tactical Background Decor */}
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
                The Specialist Team
              </Badge>
              <div className="flex items-center gap-1.5 opacity-30">
                <Activity className="text-primary h-3 w-3 animate-pulse" />
                <span className="font-mono text-[8px] tracking-tighter uppercase">
                  Mission Active
                </span>
              </div>
            </div>

            <h1 className="text-foreground mb-10 text-5xl font-extrabold tracking-tighter md:text-7xl lg:text-8xl leading-tight">
              ทุกคนควรมีโอกาส <br />
              <span className="text-muted-foreground font-light italic text-4xl md:text-6xl lg:text-7xl">
                เริ่มต้นใหม่ในโลกดิจิทัล
              </span>
            </h1>

            <p className="text-muted-foreground/80 max-w-2xl text-xl leading-relaxed md:text-2xl">
              <span className="text-foreground font-bold italic">
                {siteConfig.name}
              </span>{" "}
              ก่อตั้งขึ้นโดยกลุ่มวิศวกรข้อมูลและที่ปรึกษากฎหมายดิจิทัล
              ที่เล็งเห็นว่าข้อมูลในอดีตมักตามหลอกหลอนชีวิตปัจจุบันอย่างไม่เป็นธรรม
              เราจึงมุ่งมั่นใช้สิทธิ{" "}
              <span className="text-primary italic underline underline-offset-8 decoration-primary/30">
                Right to be Forgotten
              </span>{" "}
              เพื่อคืนอิสรภาพให้แก่คุณ
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
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              มากกว่าการลบ <br />
              <span className="text-primary italic">
                คือการคืนพื้นที่ส่วนตัว
              </span>
            </h2>
            <div className="text-muted-foreground/90 space-y-6 text-lg leading-loose">
              <p>
                ในปัจจุบัน อินเทอร์เน็ต "จดจำ" ทุกอย่างตลอดไป
                แม้ว่าข้อมูลเหล่านั้นจะหมดความจำเป็น เป็นข่าวเท็จ
                หรือเป็นเพียงความผิดพลาดในอดีตที่ได้รับการแก้ไขแล้ว
                สิ่งเหล่านี้กลายเป็น{" "}
                <strong className="text-foreground font-bold italic">
                  "โซ่ตรวนดิจิทัล"
                </strong>{" "}
                ที่ปิดกั้นโอกาสการทำงานและชื่อเสียงของคุณ
              </p>
              <p>
                ภารกิจของ UNLINK ไม่ใช่แค่การลบลิงก์
                แต่คือการใช้กระบวนการทางเทคนิคขั้นสูง{" "}
                <span className="text-foreground font-mono text-sm font-bold bg-muted/30 px-2 py-1 rounded">
                  (Technical De-indexing)
                </span>{" "}
                และหลักกฎหมาย PDPA
                เข้ามาตัดการเชื่อมโยงข้อมูลที่ไม่พึงประสงค์อย่างเป็นระบบและถาวร
              </p>
            </div>

            <div className="border-primary/20 bg-primary/5 relative overflow-hidden rounded-2xl border p-8 backdrop-blur-sm">
              <div className="flex items-center gap-5">
                <div className="bg-primary/10 flex h-14 w-14 shrink-0 items-center justify-center rounded-xl">
                  <ShieldCheck className="text-primary h-8 w-8" />
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed font-bold italic">
                  "เราไม่ใช่บริษัทโฆษณา แต่เราคือ Silent Partner
                  ที่จัดการปัญหาให้คุณอย่างเงียบเชียบและแม่นยำที่สุด"
                </p>
              </div>
            </div>
          </motion.div>

          {/* Core Values Cards */}
          <div className="grid gap-6 md:grid-cols-1">
            {values.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group border-border/50 bg-muted/5 hover:border-primary/40 hover:bg-muted/10 relative overflow-hidden rounded-[2.5rem] border p-8 transition-all duration-500"
              >
                <div className="bg-primary/10 mb-6 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:rotate-12 group-hover:bg-primary/20">
                  {item.icon}
                </div>
                <h3 className="text-foreground mb-3 text-xl font-extrabold tracking-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground/80 text-base leading-relaxed">
                  {item.description}
                </p>
                {/* Decoration Fingerprint Icon */}
                <Fingerprint className="absolute -right-6 -bottom-6 h-32 w-32 opacity-[0.02] transition-opacity group-hover:opacity-[0.05] text-primary" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 03: Conversion Segment */}
      <div className="border-border/40 border-t bg-muted/5">
        <ContactCTA />
      </div>
    </div>
  );
}
