"use client";

import { motion } from "framer-motion";
import Methods from "./Methods";
import ProtocolStepper from "./ProtocolStepper";
import Proof from "./Proof";
import FaqSection from "./FaqSection";

/**
 * 
 * HomeClientSections: ศูนย์รวมส่วนประกอบหลักในหน้า Landing Page
 * ยุทธศาสตร์การเล่าเรื่อง (The Fixer's Narrative):
 * 1. Authority (Methods) - แสดงความเชี่ยวชาญเชิงเทคนิค
 * 2. Transparency (Protocol) - แสดงขั้นตอนที่ตรวจสอบได้
 * 3. Validation (Proof) - แสดงผลลัพธ์ที่เกิดขึ้นจริง
 * 4. Clarity (FAQ) - ขจัดข้อสงสัยเชิงเทคนิค
 */
export default function HomeClientSections() {
  return (
    <div className="relative flex w-full flex-col bg-background">
      {/* 01: Methodology - Technical Authority */}
      <section
        id="methods"
        className="relative scroll-mt-24 overflow-hidden py-24 lg:py-40"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Methods />
        </motion.div>
      </section>

      {/* 02: Protocol - Systematic Transparency */}
      <section
        id="protocol"
        className="relative border-y border-border/40 bg-muted/5 scroll-mt-24 py-24 lg:py-40"
      >
        {/* Background Tactical Grid */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
          aria-hidden="true"
        >
          <div className="h-full w-full bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:32px_32px]" />
        </div>

        <div className="relative z-10">
          <ProtocolStepper />
        </div>
      </section>

      {/* 03: Validation - Strategic Proof */}
      <section id="proof" className="relative scroll-mt-24 py-24 lg:py-40">
        <Proof />
      </section>

      {/* 04: Tactical FAQ - Objective Clarity */}
      <section
        id="faq"
        className="relative border-t border-border/40 bg-muted/5 scroll-mt-24 py-24 lg:py-40"
      >
        <FaqSection />
      </section>

      {/* 05: Visual Atmosphere - Tactical Ambient Decor */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        {/* Top Glow: Primary Lens */}
        <div
          className="absolute -left-[10%] top-[15%] h-[600px] w-[600px] animate-pulse rounded-full bg-primary/10 blur-[120px]"
          style={{ animationDuration: "8s" }}
        />

        {/* Center Glow: Subtle Pulse */}
        <div className="absolute right-[-5%] top-[50%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />

        {/* Bottom Glow: Finishing Touch */}
        <div
          className="absolute bottom-[10%] left-[20%] h-[700px] w-[700px] animate-pulse rounded-full bg-primary/5 blur-[150px]"
          style={{ animationDuration: "12s" }}
        />
      </div>

      {/* Global Scanline Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-[100] bg-[linear-gradient(to_bottom,transparent_0%,#fff_50%,transparent_100%)] bg-[size:100%_4px] opacity-[0.01]"
        aria-hidden="true"
      />
    </div>
  );
}
