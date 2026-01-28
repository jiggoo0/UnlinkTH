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
 * ภาคส่วนเริ่มต้นที่เน้นการสร้าง Authority และ Trust Signaling 
 * ออกแบบโดยใช้ Dynamic Motion สำหรับกลุ่มลูกค้า High-Net-Worth
 */

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-20 md:pt-36 md:pb-40">
      
      {/* 🌌 Intelligence Ambient Layer */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[15%] left-1/2 aspect-square w-[140%] max-w-7xl -translate-x-1/2 opacity-20">
          <div className="bg-radial-gradient from-primary/30 h-full w-full via-transparent to-transparent blur-[140px]" />
        </div>
        <div className="bg-primary/5 absolute top-[10%] right-[5%] h-96 w-96 animate-pulse blur-[120px]" />
      </div>

      <div className="relative z-10 container">
        <div className="mx-auto flex max-w-6xl flex-col items-center space-y-12 text-center">
          
          {/* Status Badge Protocol */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-primary/5 border-primary/10 text-primary inline-flex items-center gap-2.5 rounded-full border px-5 py-2 font-mono text-[10px] tracking-[0.3em] uppercase"
          >
            <Lock className="h-3.5 w-3.5" />
            <span className="animate-pulse">Reputation Protocol v4.0 Active</span>
          </motion.div>

          {/* Strategic Headline Interface */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl leading-[0.9] font-bold tracking-tighter text-balance md:text-9xl"
            >
              Unlink the Past, <br />
              <span className="text-primary glow-emerald italic font-light">
                Architect Your Future
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed font-light md:text-2xl"
            >
              เราไม่ใช่เพียงผู้ลบข้อมูล แต่เราคือสถาปนิกผู้ออกแบบตัวตนดิจิทัล 
              เปลี่ยนภาพจำที่เป็นอุปสรรคให้เป็น <span className="text-foreground font-medium">Digital Authority</span> ที่ทรงพลังและยั่งยืน
            </motion.p>
          </div>

          {/* Tactical Liaison Actions */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex w-full flex-col items-center gap-5 pt-6 sm:w-auto sm:flex-row"
          >
            <Button
              size="lg"
              className="shadow-primary/20 group h-18 w-full rounded-full px-12 text-xl shadow-2xl transition-all sm:w-auto"
              asChild
            >
              <Link href={siteConfig.contact.lineUrl}>
                เริ่มกระบวนการประเมิน (Private)
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-primary/20 hover:bg-primary/5 h-18 w-full rounded-full px-12 text-xl backdrop-blur-md transition-all sm:w-auto"
              asChild
            >
              <Link href="/case-studies">สำรวจบันทึกปฏิบัติการ</Link>
            </Button>
          </motion.div>

          {/* System Verification Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            className="border-border/10 grid w-full max-w-5xl grid-cols-1 gap-16 border-t pt-20 md:grid-cols-3"
          >
            {[
              {
                label: "Operational Integrity",
                value: "100% SUCCESS BASED",
                icon: ShieldCheck,
              },
              { 
                label: "Data Security Protocol", 
                value: "NDA ENFORCED", 
                icon: Lock 
              },
              {
                label: "Expert Liaison",
                value: "DIRECT PRIORITY",
                icon: Activity,
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="group flex flex-col items-center space-y-3"
              >
                <div className="bg-primary/5 p-3 rounded-2xl group-hover:bg-primary/10 transition-colors">
                  <stat.icon className="text-primary/50 group-hover:text-primary h-5 w-5 transition-colors" />
                </div>
                <div className="space-y-1">
                  <span className="text-muted-foreground/30 font-mono text-[9px] tracking-[0.4em] uppercase block">
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
