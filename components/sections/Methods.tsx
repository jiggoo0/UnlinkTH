/** @format */

"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Scale, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { siteConfig } from "@/constants/site-config";

/**
 * UNLINK-GLOBAL | Core Methodologies Protocol (2026)
 * -------------------------------------------------------------------------
 * รวบรวมยุทธวิธีหลักในการจัดการชื่อเสียงออนไลน์เชิงเทคนิค
 * เน้นความสะอาดของโครงสร้างและการนำเสนอข้อมูลที่คนไทยเข้าใจง่าย
 */

const methods = [
  {
    title: "ลบประวัติเสียถาวร",
    subtitle: "Data Removal",
    description:
      "จัดการถอนรากถอนโคนข้อมูลเสียและประวัติการค้นหาที่ทำร้ายคุณ ให้หายไปจากโลกออนไลน์อย่างถูกต้องและถาวร",
    icon: Cpu,
  },
  {
    title: "สร้างตัวตนใหม่ให้น่าเชื่อถือ",
    subtitle: "Trust Reconstruction",
    description:
      "ออกแบบและจัดวางข้อมูลชุดใหม่ที่แข็งแกร่ง เพื่อยึดครองพื้นที่หน้าแรกของ Google และสร้างความเชื่อมั่นให้ธนาคารและคู่ค้า",
    icon: Globe,
  },
  {
    title: "ปกป้องสิทธิ์ด้วยกฎหมาย PDPA",
    subtitle: "Legal Protection",
    description:
      "ใช้สิทธิ์ตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล เพื่อสั่งระงับและทำลายข้อมูลที่บิดเบือนหรือละเมิดความเป็นส่วนตัวของคุณ",
    icon: Scale,
  },
];

export default function Methods() {
  return (
    <section className="border-border/5 container border-t py-24">
      {/* 1. Protocol Header: Strategic Context */}
      <div className="mb-20 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl space-y-4"
        >
          <div className="text-primary flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase">
            <ShieldCheck className="h-4 w-4" />
            <span>มาตรฐานการทำงานระดับมืออาชีพ</span>
          </div>
          <h2 className="text-4xl leading-[1.1] font-bold tracking-tighter md:text-6xl">
            ทางรอดที่เป็นระบบ <br />
            เพื่อ <span className="text-primary font-light italic">เริ่มต้นใหม่</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed md:text-xl">
            เราผสมผสานเทคนิคการจัดการข้อมูลเข้ากับข้อกฎหมายดิจิทัล 
            เพื่อให้คุณได้กลับมาใช้ชีวิตได้อย่างมั่นใจและสง่างามอีกครั้ง
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
            <Link
              href={siteConfig.contact.lineUrl}
              className="flex items-center gap-2"
            >
              คุยกับทีมผู้เชี่ยวชาญ <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* 2. Method Grid: Execution Layers */}
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
                <method.icon className="text-primary glow-gold h-7 w-7" />
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
              <span>Ref: 2026.Q1</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
