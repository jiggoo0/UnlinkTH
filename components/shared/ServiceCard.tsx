"use client"

import Link from "next/link"
import { Service } from "@/types"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import * as LucideIcons from "lucide-react"
import {
  ArrowRight,
  ShieldCheck,
  Fingerprint,
  HelpCircle,
  CircleDollarSign,
} from "lucide-react"

interface ServiceCardProps {
  service: Service
  className?: string
}

/**
 * ServiceCard: คอมโพเนนต์แสดงบัตรบริการ (Service Offerings)
 * อัปเดตล่าสุด: เพิ่มการแสดงผลข้อมูลราคา (Starting Price) และ Success Fee Model
 */
export const ServiceCard = ({ service, className }: ServiceCardProps) => {
  /**
   * Safe Icon Resolution:
   * ดึงคอมโพเนนต์ไอคอนจาก Lucide ตามชื่อที่ระบุใน constants
   */
  const IconComponent = (LucideIcons as any)[service.iconName] || HelpCircle

  return (
    <Card
      className={cn(
        "group border-border/50 bg-muted/5 hover:border-primary/40 hover:bg-muted/10 relative flex h-full flex-col overflow-hidden transition-all duration-500",
        className
      )}
    >
      {/* 01: Tactical Background Elements (Scanline Decor) */}
      <div
        className="group-hover:animate-scan pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(var(--color-primary),0.2)_50%,transparent_100%)] bg-[size:100%_4px] opacity-0 transition-opacity duration-500 group-hover:opacity-10"
        aria-hidden="true"
      />

      {/* 02: Header Layer (Icon & Tactical Badges) */}
      <CardHeader className="relative z-10 p-8 pb-4">
        <div className="mb-6 flex items-center justify-between">
          <div className="border-border bg-background group-hover:border-primary/50 flex h-14 w-14 items-center justify-center rounded-xl border transition-all duration-500 group-hover:rotate-[10deg] group-hover:shadow-[0_0_20px_rgba(var(--color-primary),0.15)]">
            <IconComponent className="text-primary/70 group-hover:text-primary h-7 w-7 transition-colors" />
          </div>

          <div className="flex flex-col items-end gap-2 text-right">
            <Badge
              variant="outline"
              className="border-primary/20 bg-primary/5 text-primary font-mono text-[10px] tracking-widest uppercase"
            >
              {service.category}
            </Badge>
            <div className="flex items-center gap-1.5 opacity-40 transition-opacity group-hover:opacity-100">
              <Fingerprint className="text-primary h-3 w-3" />
              <span className="font-mono text-[8px] font-bold tracking-tighter uppercase">
                Verified Protocol
              </span>
            </div>
          </div>
        </div>

        <CardTitle className="text-foreground group-hover:text-primary text-xl leading-tight font-bold tracking-tight transition-colors md:text-2xl">
          {service.title}
        </CardTitle>
      </CardHeader>

      {/* 03: Analysis Content (Pricing & Features) */}
      <CardContent className="relative z-10 flex-1 p-8 pt-2">
        {/* Pricing Insight Box - ประหยัดเวลาตอบคำถามเรื่องราคา */}
        {service.priceInfo && (
          <div className="border-primary/10 bg-primary/5 mb-6 flex items-center justify-between rounded-lg border px-4 py-3">
            <div className="flex items-center gap-2">
              <CircleDollarSign className="text-primary/60 h-4 w-4" />
              <span className="text-muted-foreground font-mono text-[10px] font-bold tracking-widest uppercase">
                Est. Investment
              </span>
            </div>
            <div className="text-right">
              <div className="text-foreground text-xs font-bold">
                <span className="text-muted-foreground text-[10px] font-medium">
                  เริ่ม{" "}
                </span>
                ฿{service.priceInfo.startingAt}
              </div>
              <div className="text-primary/80 text-[9px] font-medium tracking-tighter uppercase">
                {service.priceInfo.model}
              </div>
            </div>
          </div>
        )}

        <p className="text-muted-foreground/90 mb-6 text-sm leading-relaxed font-medium italic">
          {service.shortDescription}
        </p>

        <ul className="space-y-3">
          {service.features?.slice(0, 3).map((feature, index) => (
            <li
              key={`${service.slug}-feat-${index}`}
              className="text-muted-foreground/80 flex items-start text-[11px] font-medium tracking-tight"
            >
              <div className="bg-primary/10 mt-0.5 mr-3 flex h-4 w-4 shrink-0 items-center justify-center rounded-full">
                <ShieldCheck className="text-primary h-2.5 w-2.5" />
              </div>
              <span className="leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      {/* 04: Functional Footer (CTA) */}
      <CardFooter className="border-border/40 relative z-10 border-t p-6 pt-4">
        <Button
          variant="ghost"
          className="group/btn hover:border-primary/20 hover:bg-primary/5 h-11 w-full justify-between rounded-full border border-transparent transition-all duration-300"
          asChild
        >
          <Link href={`/services/${service.slug}`}>
            <span className="text-foreground text-[10px] font-black tracking-widest uppercase">
              Establish Protocol
            </span>
            <ArrowRight className="text-primary h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>

      {/* 05: Background Watermark Branding */}
      <div
        className="pointer-events-none absolute -right-6 -bottom-6 p-4 opacity-[0.02] grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-[0.06]"
        aria-hidden="true"
      >
        <IconComponent className="h-40 w-40" />
      </div>
    </Card>
  )
}
