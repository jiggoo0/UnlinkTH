"use client"

import Link from "next/link"
import Image from "next/image"
import { CaseStudy } from "@/lib/case-studies"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ShieldCheck, ArrowUpRight, Fingerprint, Activity } from "lucide-react"

interface CaseStudyCardProps {
  caseStudy: CaseStudy
  className?: string
}

/**
 * CaseStudyCard - คอมโพเนนต์แสดงบันทึกปฏิบัติการ (Operation Archive Card)
 * ออกแบบในสไตล์ "Technical Archive" เพื่อสร้างความเชื่อมั่นในกระบวนการทำงานเชิงเทคนิค
 */
export const CaseStudyCard = ({ caseStudy, className }: CaseStudyCardProps) => {
  return (
    <Card
      className={cn(
        "group border-border/50 bg-muted/5 hover:border-primary/40 hover:bg-muted/10 relative flex h-full flex-col overflow-hidden transition-all duration-500",
        className
      )}
    >
      {/* 01: Visual Identity Layer (Image with Tactical Overlay) */}
      <div className="border-border/20 relative aspect-video w-full overflow-hidden border-b">
        <Image
          src={caseStudy.image}
          alt={caseStudy.title}
          fill
          priority={false}
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient Overlay & Glassmorphism Badge */}
        <div className="from-background/90 via-background/20 absolute inset-0 bg-gradient-to-t to-transparent opacity-60" />

        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          <Badge
            variant="outline"
            className="border-primary/30 bg-background/80 text-primary px-3 py-1 font-mono text-[10px] tracking-widest uppercase backdrop-blur-md"
          >
            {caseStudy.category}
          </Badge>
        </div>
      </div>

      {/* 02: Log Header (Operational Status Indicator) */}
      <CardHeader className="p-6 pb-2">
        <div className="mb-3 flex items-center justify-between opacity-40">
          <div className="flex items-center gap-1.5 font-mono text-[9px] font-bold tracking-[0.2em] uppercase">
            <Fingerprint className="text-primary h-3 w-3" />
            <span>Operational Log Verified</span>
          </div>
          <Activity className="text-primary h-3 w-3 animate-pulse" />
        </div>
        <h3 className="text-foreground group-hover:text-primary text-xl leading-tight font-bold tracking-tight transition-colors">
          {caseStudy.title}
        </h3>
      </CardHeader>

      {/* 03: Report Content (Analysis & Protocol) */}
      <CardContent className="flex-1 space-y-5 p-6 pt-2">
        {/* Incident Summary Box */}
        <div className="border-border/40 bg-background/50 group-hover:border-primary/20 group-hover:bg-background/80 rounded-xl border p-4 transition-all duration-300">
          <p className="text-primary/70 mb-1 font-mono text-[9px] font-black tracking-widest uppercase">
            Incident Analysis
          </p>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
            {caseStudy.incident}
          </p>
        </div>

        {/* Tactical Info Layer */}
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="bg-primary/10 mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full">
              <ShieldCheck className="text-primary h-2.5 w-2.5" />
            </div>
            <div className="text-[13px] leading-relaxed">
              <span className="text-foreground/90 mr-1 font-mono text-[10px] font-bold tracking-wider uppercase">
                Protocol:
              </span>{" "}
              <span className="text-muted-foreground">
                {caseStudy.protocol}
              </span>
            </div>
          </div>

          <div className="border-border/20 flex items-start gap-3 border-t pt-3">
            <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </div>
            <div className="text-[13px] leading-relaxed">
              <span className="text-foreground/90 mr-1 font-mono text-[10px] font-bold tracking-wider uppercase">
                Impact:
              </span>{" "}
              <span className="text-muted-foreground/90 italic">
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
          className="group/btn border-border/40 bg-muted/5 text-foreground hover:bg-primary/5 hover:text-primary h-12 w-full justify-between rounded-xl border text-[10px] font-bold tracking-widest uppercase transition-all duration-300"
          asChild
        >
          <Link href={`/case-studies/${caseStudy.slug}`}>
            วิเคราะห์แนวทางแก้ปัญหา
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>
        </Button>
      </CardFooter>

      {/* Background Decor: Tactical Scanline Effect */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent_0%,rgba(var(--color-primary),0.02)_50%,transparent_100%)] bg-[size:100%_4px] opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        aria-hidden="true"
      />
    </Card>
  )
}
