/** @format */

"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/constants/site-config";
import { ShieldCheck, ArrowRight, Lock, Database, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/lib/utils";

/**
 * UNLINK-TH | Supreme Hero Intelligence (Final Protocol)
 * -------------------------------------------------------------------------
 * ผสานทักษะวิศวกรรมข้อมูลเข้ากับงานดีไซน์ระดับพรีเมียม
 * ออกแบบมาเพื่อ "ขายความสำเร็จ" (Selling Success) และ "ความมั่นคง" (Stability)
 */

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#050810] flex items-center pt-24 pb-20 md:pt-32 md:pb-36">
      {/* 1. Operational Background Infrastructure */}
      <div className="absolute inset-0 z-0">
        {/* Glow & Depth Layers */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Strategic Visual Anchor */}
        <Image
          src={getImageUrl("common/methodology-abstract.webp")}
          alt="Technical Methodology"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover opacity-[0.07] mix-blend-luminosity grayscale"
        />

        {/* Animated Scanner Effect: สื่อถึงการตรวจสอบและ Intervene ข้อมูล */}
        <motion.div
          initial={{ top: "-10%" }}
          animate={{ top: "110%" }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-sm z-10"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050810]/40 to-[#050810]" />
      </div>

      <div className="relative z-20 container mx-auto px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center space-y-12 text-center">
          {/* Clearance Badge: สร้างความรู้สึกทางการ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-primary/5 border-primary/20 text-primary inline-flex items-center gap-3 rounded-full border px-6 py-2 font-mono text-[10px] font-black tracking-[0.4em] uppercase backdrop-blur-xl shadow-[0_0_20px_rgba(16,185,129,0.1)]"
          >
            <ShieldCheck className="h-3 w-3" />
            <span>ความลับสูงสุด • ปลอดภัย 100% • ปรึกษาฟรี</span>
          </motion.div>

          {/* Strategic Narrative Hierarchy */}
          <div className="space-y-10">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl leading-[0.85] font-black tracking-tighter text-white sm:text-7xl md:text-[8.5rem] uppercase"
            >
              ปลดล็อกอดีต <br />
              <span className="text-primary italic font-light lowercase opacity-90">
                ทวงคืนอนาคต
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-slate-400 mx-auto max-w-3xl text-lg leading-relaxed font-light md:text-2xl"
            >
              ทางออกสุดท้ายของคนที่{" "}
              <span className="text-white font-medium italic">
                "ยื่นกู้ไม่ผ่าน"
              </span>{" "}
              เพราะติดบูโร หรือโดนประจานจนเสียชื่อ... เราช่วยล้างประวัติเน่าใน
              Google และฟื้นฟูตัวตนให้คุณกลับมาเริ่มชีวิตใหม่ได้ทันที
              (เห็นผลจริง 100% ความลับระดับสูงสุด)
            </motion.p>
          </div>

          {/* Execution CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex w-full flex-col items-center justify-center gap-5 pt-10 sm:flex-row"
          >
            <Link
              href={siteConfig.contact.lineUrl}
              className="group relative flex h-16 w-full items-center justify-center overflow-hidden rounded-full bg-primary px-12 text-[12px] font-black tracking-[0.3em] text-black uppercase transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] active:scale-[0.98] sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-3">
                ปรึกษาทางไลน์ฟรี (24 ชม.)
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
              </span>
            </Link>

            <Link
              href="/services"
              className="flex h-16 w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.02] px-12 text-[12px] font-black tracking-[0.3em] text-white uppercase backdrop-blur-md transition-all hover:bg-white/5 hover:border-white/20 sm:w-auto"
            >
              ดูแนวทางการแก้ไข
            </Link>
          </motion.div>

          {/* Core Verification Nodes */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="border-white/5 grid w-full max-w-5xl grid-cols-2 gap-12 border-t pt-24 md:grid-cols-4"
          >
            {[
              {
                label: "เงินทุนที่ปลดล็อกได้",
                value: "฿500M+",
                icon: Database,
              },
              { label: "ปิดจบเคสประวัติเสีย", value: "1,200+", icon: Zap },
              {
                label: "ความเร็วการดำเนินการ",
                value: "Fast-Action",
                icon: ShieldCheck,
              },
              { label: "ระดับความลับข้อมูล", value: "Vault-S", icon: Lock },
            ].map((stat, i) => (
              <div
                key={i}
                className="group flex flex-col items-center md:items-start space-y-4"
              >
                <div className="bg-primary/5 group-hover:bg-primary/10 rounded-2xl p-4 transition-all duration-500 border border-primary/10 group-hover:border-primary/40">
                  <stat.icon className="text-primary/30 group-hover:text-primary h-5 w-5 transition-colors duration-500" />
                </div>
                <div className="space-y-1 text-center md:text-left">
                  <span className="text-slate-600 block font-mono text-[9px] tracking-[0.4em] uppercase">
                    {stat.label}
                  </span>
                  <span className="text-white text-lg font-black tracking-tighter uppercase">
                    {stat.value}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Finishing Bottom Gradient */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#050810] via-[#050810]/80 to-transparent z-10" />
    </section>
  );
}
