/** @format */

"use client";

import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";
import { Service } from "@/types";
import { ArrowRight, ShieldCheck } from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

/**
 * UNLINK-TH | Service Protocol Interface (2026)
 * -------------------------------------------------------------------------
 * การ์ดแสดงผลบริการที่เน้นความโปร่งใสของข้อมูลและความปลอดภัย
 * จัดการ Error: Unused variables (HTMLMotionProps, cn)
 */

export default function ServiceCard({ service }: ServiceCardProps) {
  if (!service) return null;

  // Resolve dynamic icons from library safely
  const IconComponent = (LucideIcons[
    service.iconName as keyof typeof LucideIcons
  ] || ShieldCheck) as LucideIcons.LucideIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="lab-card group relative flex h-full flex-col justify-between p-10 border-border/40 hover:border-primary/40 transition-all duration-500 bg-muted/5 hover:bg-muted/10"
    >
      {/* Visual Identity Layer */}
      <div className="absolute top-0 right-0 h-40 w-40 bg-primary/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-primary/10 transition-colors" />

      <div className="relative z-10 space-y-8">
        {/* 1. Technical Header */}
        <div className="flex items-start justify-between">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/5 border border-primary/10 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:scale-110">
            <IconComponent className="text-primary glow-emerald h-8 w-8" />
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-background/50 border border-border/10 text-muted-foreground/60 font-mono text-[9px] tracking-[0.2em] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Protocol Verified
          </div>
        </div>

        {/* 2. Core Specification */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tighter leading-tight group-hover:text-primary transition-colors">
            {service.title || "Standard Intelligence"}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed font-light line-clamp-3">
            {service.shortDescription || "หน่วยประมวลผลอยู่ระหว่างการดึงข้อมูลสถาปัตยกรรม..."}
          </p>
        </div>

        {/* 3. Capability Modules */}
        {service.features && service.features.length > 0 && (
          <div className="pt-6 border-t border-border/10 space-y-3">
            {service.features.slice(0, 3).map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 text-[11px] text-muted-foreground/70 font-light"
              >
                <ShieldCheck className="text-primary/40 h-3.5 w-3.5" />
                <span className="line-clamp-1 italic">{feature}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 4. Action & Metadata Footer */}
      <div className="relative z-10 mt-12 flex items-end justify-between border-t border-border/10 pt-8">
        <div className="space-y-1">
          <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground/30">
            Classification
          </p>
          <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary/60">
            {service.category || "Classified"}
          </p>
        </div>

        <Link
          href={`/services/${service.slug}`}
          className="group/btn relative inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-primary hover:gap-4 transition-all"
        >
          Access Specs
          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
