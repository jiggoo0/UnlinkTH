"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/constants/site-config";
import {
  MessageCircle,
  ShieldCheck,
  Lock,
  ArrowRight,
  Fingerprint,
  Activity,
} from "lucide-react";

/**
 * 
 * ContactCTA: ส่วนปิดท้ายการเล่าเรื่อง (The Final Commitment)
 * ยุทธศาสตร์: Expertise -> Security -> Immediate Action
 * ออกแบบเพื่อสร้างความปลอดภัย (Safe Space) และความเชื่อมั่นสูงสุดก่อนการติดต่อ
 */
export default function ContactCTA() {
  // สร้าง Link โดยตรงจาก siteConfig เพื่อความง่ายในการจัดการข้อมูลติดต่อ
  const lineLink = `https://line.me/ti/p/${siteConfig.contact.lineId.replace(
    "@",
    ""
  )}`;

  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-background py-24 lg:py-40"
    >
      {/* 01: Operational Atmosphere (Tactical Decor) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        aria-hidden="true"
      >
        <div className="h-full w-full bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      {/* Central Shield Watermark - Tactical Background */}
      <div
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-[0.01]"
        aria-hidden="true"
      >
        <ShieldCheck className="h-[600px] w-[600px] text-primary lg:h-[800px] lg:w-[800px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-primary/20 bg-muted/5 p-8 text-center backdrop-blur-xl md:rounded-[3.5rem] md:p-24"
        >
          {/* Status Monitoring Indicator */}
          <div className="mb-10 flex items-center justify-center gap-3">
            <Badge
              variant="outline"
              className="border-primary/30 bg-primary/5 px-5 py-2 font-mono text-[10px] tracking-[0.25em] text-primary uppercase shadow-[0_0_15px_rgba(var(--color-primary),0.1)]"
            >
              Secure Protocol Active
            </Badge>
            <div className="flex items-center gap-1.5 opacity-40">
              <Activity className="h-3 w-3 animate-pulse text-primary" />
              <span className="font-mono text-[8px] tracking-tighter uppercase">
                Live Support
              </span>
            </div>
          </div>

          <h2 className="mb-10 text-4xl font-extrabold tracking-tighter text-foreground md:text-7xl lg:text-8xl">
            คืนความปกติสุข <br />
            <span className="font-light italic text-muted-foreground">
              ให้แก่ตัวตนดิจิทัลของคุณ
            </span>
          </h2>

          <p className="mx-auto mb-14 max-w-2xl text-lg leading-relaxed text-muted-foreground/80 md:text-xl lg:text-2xl">
            เราพร้อมประเมินความเป็นไปได้เชิงเทคนิคผ่านระบบ <br className="hidden md:block" />
            <span className="font-bold italic underline underline-offset-8 decoration-primary/30 text-foreground">
              Zero-Knowledge Consultation
            </span>{" "}
            ที่ยึดถือมาตรการรักษาความลับสูงสุด
          </p>

          {/* Action Interface: ช่องทางติดต่อสื่อสาร */}
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Button
              size="lg"
              className="group h-16 rounded-full bg-[#00B900] px-12 text-lg font-black tracking-tight text-white shadow-2xl shadow-green-500/30 transition-all hover:scale-[1.05] hover:bg-[#00A000] active:scale-95"
              asChild
            >
              <Link href={lineLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-3 h-6 w-6 fill-current transition-transform group-hover:rotate-12" />
                เริ่มปรึกษาเจ้าหน้าที่
              </Link>
            </Button>

            <Button
              variant="ghost"
              className="group h-16 rounded-full px-10 text-sm font-bold tracking-widest uppercase transition-all hover:bg-primary/5"
              asChild
            >
              <Link href="/privacy">
                Privacy Protocol
                <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>
          </div>

          {/* Trust Infrastructure Grid */}
          <div className="mt-20 grid grid-cols-1 gap-12 border-t border-border/40 pt-16 sm:grid-cols-3">
            {/* Data Destruction */}
            <div className="group flex flex-col items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:rotate-6 group-hover:bg-primary/20">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <div className="flex flex-col gap-1 text-center">
                <span className="font-mono text-[10px] font-black tracking-[0.3em] text-foreground uppercase">
                  Data Destruction
                </span>
                <span className="font-medium italic tracking-wider text-muted-foreground text-[9px] uppercase">
                  Post-consultation purge
                </span>
              </div>
            </div>

            {/* Strict Anonymity */}
            <div className="group flex flex-col items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:rotate-6 group-hover:bg-primary/20">
                <Fingerprint className="h-6 w-6 text-primary" />
              </div>
              <div className="flex flex-col gap-1 text-center">
                <span className="font-mono text-[10px] font-black tracking-[0.3em] text-foreground uppercase">
                  Strict Anonymity
                </span>
                <span className="font-medium italic tracking-wider text-muted-foreground text-[9px] uppercase">
                  Unlinked personal ID
                </span>
              </div>
            </div>

            {/* Expert Audit */}
            <div className="group flex flex-col items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 group-hover:rotate-6 group-hover:bg-primary/20">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <div className="flex flex-col gap-1 text-center">
                <span className="font-mono text-[10px] font-black tracking-[0.3em] text-foreground uppercase">
                  Expert Audit
                </span>
                <span className="font-medium italic tracking-wider text-muted-foreground text-[9px] uppercase">
                  Technical feasibility only
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Security Compliance Footer */}
        <div className="mt-16 flex flex-col items-center gap-6 text-center opacity-40">
          <p className="max-w-2xl font-mono text-[9px] font-bold leading-loose tracking-[0.3em] uppercase text-muted-foreground">
            {siteConfig.footer?.disclaimer ||
              "Operational Integrity: All data transmitted during evaluation is purged automatically after the session ends."}
          </p>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
