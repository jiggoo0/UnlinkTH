"use client";

import Link from "next/link";
import Image from "next/image";
import { CaseStudy } from "@/lib/case-studies";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ShieldCheck, ArrowUpRight, Fingerprint, Activity } from "lucide-react";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  className?: string;
}

/**
 * 
 * CaseStudyCard - คอมโพเนนต์แสดงบันทึกปฏิบัติการ
 * ออกแบบในสไตล์ "Technical Archive" เพื่อสร้างความเชื่อมั่นในกระบวนการทำงานเชิงเทคนิค
 */
export const CaseStudyCard = ({ caseStudy, className }: CaseStudyCardProps) => {
  return (
    <Card
      className={cn(
        "group relative flex h-full flex-col overflow-hidden border-border/50 bg-muted/5 transition-all duration-500 hover:border-primary/40 hover:bg-muted/10",
        className
      )}
    >
      {/* 01: Visual Identity Layer (Image with Overlay) */}
      <div className="relative aspect-video w-full overflow-hidden border-b border-border/20">
        <Image
          src={caseStudy.image}
          alt={caseStudy.title}
          fill
          priority={false}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient Overlay เพื่อความอ่านง่ายของ Badge */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-60" />

        <div className="absolute left-4 top-4 z-10 flex items-center gap-2">
          <Badge
            variant="outline"
            className="border-primary/30 bg-background/90 font-mono text-[10px] tracking-widest text-primary uppercase backdrop-blur-md shadow-sm"
          >
            {caseStudy.category}
          </Badge>
        </div>
      </div>

      {/* 02: Log Header (Operational Status Indicator) */}
      <CardHeader className="p-6 pb-2">
        <div className="mb-3 flex items-center justify-between opacity-40">
          <div className="flex items-center gap-1.5 font-mono text-[9px] font-bold tracking-[0.2em] uppercase">
            <Fingerprint className="h-3 w-3 text-primary" />
            <span>Operational Log Verified</span>
          </div>
          <Activity className="h-3 w-3 animate-pulse text-primary" />
        </div>
        <h3 className="text-xl font-bold leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary">
          {caseStudy.title}
        </h3>
      </CardHeader>

      {/* 03: Report Content (Analysis & Protocol) */}
      <CardContent className="flex-1 space-y-5 p-6 pt-2">
        {/* Incident Summary Box */}
        <div className="rounded-xl border border-border/40 bg-background/50 p-4 transition-colors group-hover:bg-background/80">
          <p className="mb-1 font-mono text-[9px] font-black tracking-widest text-primary/70 uppercase">
            Incident Analysis
          </p>
          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {caseStudy.incident}
          </p>
        </div>

        {/* Tactical Info Layer */}
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <ShieldCheck className="h-2.5 w-2.5 text-primary" />
            </div>
            <div className="text-[13px] leading-relaxed">
              <span className="mr-1 font-mono text-[10px] font-bold tracking-wider text-foreground/90 uppercase">
                Protocol:
              </span>{" "}
              <span className="text-muted-foreground">
                {caseStudy.protocol}
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3 border-t border-border/20 pt-3">
            <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </div>
            <div className="text-[13px] leading-relaxed">
              <span className="mr-1 font-mono text-[10px] font-bold tracking-wider text-foreground/90 uppercase">
                Impact:
              </span>{" "}
              <span className="italic text-muted-foreground">
                {caseStudy.impact}
              </span>
            </div>
          </div>
        </div>
      </CardContent>

      {/* 04: Technical Deep-dive Link */}
      <CardFooter className="p-6 pt-0">
        <Button
          variant="ghost"
          className="group/btn h-12 w-full justify-between rounded-xl border border-border/40 bg-muted/5 text-[10px] font-bold tracking-widest text-foreground uppercase transition-all duration-300 hover:bg-primary/5 hover:text-primary"
          asChild
        >
          <Link href={`/case-studies/${caseStudy.slug}`}>
            วิเคราะห์แนวทางแก้ปัญหา
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
          </Link>
        </Button>
      </CardFooter>

      {/* Background Decor Component (Subtle Tactical Scanline) */}
      <div
        className="animate-scan pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent_0%,rgba(var(--color-primary),0.02)_50%,transparent_100%)] bg-[size:100%_4px] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        aria-hidden="true"
      />
    </Card>
  );
};
