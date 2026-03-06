/** @format */

"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/constants/site-config";

import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowRight, Activity, Lock } from "lucide-react";
import Link from "next/link";

/**
 * UNLINK-TH | Operational Hero Intelligence (2026)
 * -------------------------------------------------------------------------
 * ส่วนการแสดงผลเริ่มต้นที่เน้นการสร้างความน่าเชื่อถือและส่งสัญญาณความปลอดภัย
 * ออกแบบเพื่อรองรับกลุ่มลูกค้าที่ต้องการความเป็นส่วนตัวและความเด็ดขาดในการแก้ปัญหา
 */

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-36 md:pb-40">
      {/* Intelligence Ambient Layer: ควบคุมบรรยากาศด้วยแสงและเงา */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[15%] left-1/2 aspect-square w-[140%] max-w-7xl -translate-x-1/2 opacity-20">
          <div className="bg-radial-gradient from-primary/30 h-full w-full via-transparent to-transparent blur-[140px]" />
        </div>
        <div className="bg-primary/5 absolute top-[10%] right-[5%] h-96 w-96 animate-pulse blur-[120px]" />
      </div>

      <div className="relative z-10 container">
        <div className="mx-auto flex max-w-6xl flex-col items-center space-y-12 text-center">
          {/* Status Badge Protocol: บ่งบอกสถานะการทำงานของระบบ */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-primary/5 border-primary/10 text-primary inline-flex items-center gap-2.5 rounded-full border px-5 py-2 font-mono text-[10px] tracking-[0.3em] uppercase"
          >
            <Lock className="h-3.5 w-3.5" />
            <span className="animate-pulse">
              Reputation Protocol v4.0 Active
            </span>
          </motion.div>

          {/* Strategic Headline Interface: การสื่อสารหลักของแบรนด์ */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl leading-[0.9] font-bold tracking-tighter text-balance md:text-9xl"
            >
              {siteConfig.hero.headlineLine1} <br />
              <span className="text-primary glow-gold font-light italic">
                {siteConfig.hero.headlineLine2}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed font-light md:text-2xl"
            >
              อำนาจในการจัดการตัวตนดิจิทัลควรอยู่ในมือคุณ
              เราคือที่ปรึกษาในการ{" "}
              <span className="text-foreground font-medium">จัดการประวัติเสีย</span>{" "}
              ลบข้อมูลเชิงลบ
              และกู้คืนสิทธิในการเริ่มต้นใหม่ให้คุณอย่างปลอดภัย
            </motion.p>
          </div>

          {/* Tactical Liaison Actions: ช่องทางการติดต่อสื่อสาร */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex w-full flex-col items-center gap-5 pt-6 sm:w-auto sm:flex-row"
          >
            <Button
              size="lg"
              className="shadow-primary/20 group h-18 w-full rounded-full px-12 text-xl shadow-2xl transition-all sm:w-auto bg-primary text-primary-foreground font-bold tracking-widest uppercase"
              asChild
            >
              <Link href={siteConfig.contact.lineUrl}>
                {siteConfig.hero.ctaPrimary.label}
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-primary/20 hover:bg-primary/5 h-18 w-full rounded-full px-12 text-xl backdrop-blur-md transition-all sm:w-auto"
              asChild
            >
              <Link href={siteConfig.hero.ctaSecondary.href}>{siteConfig.hero.ctaSecondary.label}</Link>
            </Button>
          </motion.div>

          {/* System Verification Metrics: ข้อมูลยืนยันประสิทธิภาพ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="border-border/10 grid w-full max-w-5xl grid-cols-1 gap-16 border-t pt-20 md:grid-cols-3"
          >
            {[
              {
                label: "ความสำเร็จของงาน",
                value: "98% SUCCESS RATE",
                icon: ShieldCheck,
              },
              {
                label: "มาตรฐานความปลอดภัย",
                value: "100% CONFIDENTIAL",
                icon: Lock,
              },
              {
                label: "การติดต่อเจ้าหน้าที่",
                value: "DIRECT LINE",
                icon: Activity,
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="group flex flex-col items-center space-y-3"
              >
                <div className="bg-primary/5 group-hover:bg-primary/10 rounded-2xl p-3 transition-colors">
                  <stat.icon className="text-primary/50 group-hover:text-primary h-5 w-5 transition-colors" />
                </div>
                <div className="space-y-1">
                  <span className="text-muted-foreground/30 block font-mono text-[9px] tracking-[0.4em] uppercase">
                    {stat.label}
                  </span>
                  <span className="text-foreground text-sm font-bold tracking-widest uppercase">
                    {stat.value}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
