"use client";

import Link from "next/link";
import { Service } from "@/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";
import { ArrowRight, ShieldCheck, Fingerprint, HelpCircle } from "lucide-react";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

/**
 * 
 * ServiceCard: คอมโพเนนต์แสดงบัตรบริการ (Service Offerings)
 * ออกแบบในสไตล์ "Technical Lab" เน้นความน่าเชื่อถือและการใช้ภาพลักษณ์แบบ Specialist
 */
export const ServiceCard = ({ service, className }: ServiceCardProps) => {
  /**
   * Safe Icon Resolution:
   * ตรวจสอบชื่อไอคอนจาก String ที่ได้รับในฐานข้อมูล/Constants
   * หากไม่พบจะใช้ HelpCircle เป็นค่าเริ่มต้นเพื่อป้องกัน Component Crash
   */
  const IconComponent = (LucideIcons as any)[service.iconName] || HelpCircle;

  return (
    <Card
      className={cn(
        "group relative flex h-full flex-col overflow-hidden border-border/50 bg-muted/5 transition-all duration-500 hover:border-primary/40 hover:bg-muted/10",
        className
      )}
    >
      {/* 01: Tactical Background Elements (Scanline Decor) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_bottom,transparent_0%,var(--color-primary)_50%,transparent_100%)] bg-[size:100%_4px] opacity-[0.03] transition-opacity duration-500 group-hover:animate-scan group-hover:opacity-[0.08]"
        aria-hidden="true"
      />

      {/* 02: Header Layer (Icon & Status Badges) */}
      <CardHeader className="relative z-10 p-8 pb-4">
        <div className="mb-6 flex items-center justify-between">
          {/* Brand-colored Icon Container with Hover Animation */}
          <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-background transition-all duration-500 group-hover:rotate-[10deg] group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(var(--color-primary),0.15)]">
            <IconComponent className="h-7 w-7 text-primary/80 transition-colors group-hover:text-primary" />
          </div>

          <div className="flex flex-col items-end gap-2 text-right">
            <Badge
              variant="outline"
              className="border-primary/20 bg-primary/5 font-mono text-[10px] tracking-widest text-primary uppercase"
            >
              {service.category}
            </Badge>
            <div className="flex items-center gap-1.5 opacity-40 transition-opacity group-hover:opacity-100">
              <Fingerprint className="h-3 w-3 text-primary" />
              <span className="font-mono text-[8px] font-bold tracking-tighter uppercase">
                Verified Protocol
              </span>
            </div>
          </div>
        </div>

        <CardTitle className="text-xl font-bold leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary md:text-2xl">
          {service.title}
        </CardTitle>
      </CardHeader>

      {/* 03: Analysis Content (Short Description & Features) */}
      <CardContent className="relative z-10 flex-1 p-8 pt-2">
        <p className="mb-8 text-sm font-medium italic leading-relaxed text-muted-foreground/90">
          {service.shortDescription}
        </p>

        {/* Feature Highlights: แสดงเฉพาะ 3 รายการแรกเพื่อความกระชับของหน้า Landing */}
        <ul className="space-y-3">
          {service.features?.slice(0, 3).map((feature, index) => (
            <li
              key={`${service.slug}-feat-${index}`}
              className="flex items-start text-[11px] font-medium tracking-tight text-muted-foreground/80"
            >
              <div className="mr-3 mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <ShieldCheck className="h-2.5 w-2.5 text-primary" />
              </div>
              <span className="leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      {/* 04: Functional Footer (CTA Button) */}
      <CardFooter className="relative z-10 border-t border-border/40 p-6 pt-4">
        <Button
          variant="ghost"
          className="group/btn h-11 w-full justify-between rounded-full border border-transparent transition-all duration-300 hover:border-primary/20 hover:bg-primary/5"
          asChild
        >
          <Link href={`/services/${service.slug}`}>
            <span className="text-[10px] font-black tracking-widest uppercase text-foreground">
              Establish Protocol
            </span>
            <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>

      {/* 05: Background Watermark Branding (Aesthetics) */}
      <div
        className="pointer-events-none absolute -bottom-6 -right-6 p-4 grayscale opacity-[0.03] transition-all duration-700 group-hover:scale-110 group-hover:opacity-[0.08]"
        aria-hidden="true"
      >
        <IconComponent className="h-36 w-36" />
      </div>
    </Card>
  );
};
