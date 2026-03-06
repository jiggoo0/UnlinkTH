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
 * การ์ดแสดงผลรายการที่เน้นความชัดเจนของข้อมูลเชิงเทคนิคและความปลอดภัย
 * ออกแบบตามหลักการ Sophisticated Minimalist เพื่อกลุ่มลูกค้าที่เน้นผลลัพธ์
 */

export default function ServiceCard({ service }: ServiceCardProps) {
  if (!service) return null;

  // Resolve dynamic icons จาก Library อย่างปลอดภัยเพื่อป้องกันปัญหา Runtime
  const IconComponent = (LucideIcons[
    service.iconName as keyof typeof LucideIcons
  ] || ShieldCheck) as LucideIcons.LucideIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="lab-card group border-border/40 hover:border-primary/40 bg-muted/5 hover:bg-muted/10 relative flex h-full flex-col justify-between p-10 transition-all duration-500"
    >
      {/* Background Ambient Layer: สร้างบรรยากาศความลึกลับและทันสมัย */}
      <div className="bg-primary/5 group-hover:bg-primary/10 pointer-events-none absolute top-0 right-0 h-40 w-40 rounded-full blur-[80px] transition-colors" />

      <div className="relative z-10 space-y-8">
        {/* 1. Technical Status Header */}
        <div className="flex items-start justify-between">
          <div className="bg-primary/5 border-primary/10 group-hover:bg-primary/20 group-hover:border-primary/40 flex h-16 w-16 items-center justify-center rounded-2xl border transition-all duration-500 group-hover:scale-110">
            <IconComponent className="text-primary glow-gold h-8 w-8" />
          </div>
          <div className="bg-background/50 border-border/10 text-muted-foreground/60 flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[9px] tracking-[0.2em] uppercase">
            <span className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full" />
            Protocol Verified
          </div>
        </div>

        {/* 2. Specification Core */}
        <div className="space-y-4">
          <h3 className="group-hover:text-primary text-2xl leading-tight font-bold tracking-tighter transition-colors md:text-3xl">
            {service.title || "Standard Intelligence"}
          </h3>
          <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed font-light">
            {service.shortDescription || "ระบบอยู่ระหว่างการประมวลผลข้อมูล..."}
          </p>
        </div>

        {/* 3. Capability Modules (Features) */}
        {service.features && service.features.length > 0 && (
          <div className="border-border/10 space-y-3 border-t pt-6">
            {service.features.slice(0, 3).map((feature, idx) => (
              <div
                key={idx}
                className="text-muted-foreground/70 flex items-center gap-3 text-[11px] font-light"
              >
                <ShieldCheck className="text-primary/40 h-3.5 w-3.5" />
                <span className="line-clamp-1 italic">{feature}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 4. Classification & Action Liaison */}
      <div className="border-border/10 relative z-10 mt-12 flex items-end justify-between border-t pt-8">
        <div className="space-y-1">
          <p className="text-muted-foreground/30 font-mono text-[9px] tracking-[0.3em] uppercase">
            Classification
          </p>
          <p className="text-primary/60 font-mono text-[10px] font-bold tracking-widest uppercase">
            {service.category || "Classified"}
          </p>
        </div>

        <Link
          href={`/services/${service.slug}`}
          className="group/btn text-primary relative inline-flex items-center gap-3 text-xs font-bold tracking-widest uppercase transition-all hover:gap-4"
        >
          Access Specs
          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
