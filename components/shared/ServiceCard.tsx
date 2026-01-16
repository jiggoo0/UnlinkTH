"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Typography } from "@/components/ui/typography"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
// ✅ นำเข้า ArrowRight เพิ่มเติมสำหรับปุ่มดูรายละเอียด
import {
  Trash2,
  Scale,
  Search,
  ShieldAlert,
  HeartHandshake,
  Zap,
  ArrowRight,
} from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  suitableFor: string[]
  imageUrl?: string
  iconName: "remove" | "legal" | "seo" | "consult" | "audit" | "default"
  className?: string
}

const ICON_MAP = {
  remove: Trash2,
  legal: Scale,
  seo: Zap,
  consult: HeartHandshake,
  audit: Search,
  default: ShieldAlert,
}

export default function ServiceCard({
  title,
  description,
  suitableFor,
  imageUrl,
  iconName,
  className,
}: ServiceCardProps) {
  const SelectedIcon = ICON_MAP[iconName] || ICON_MAP.default

  const finalSrc =
    imageUrl && imageUrl.trim() !== ""
      ? imageUrl
      : "/images/service/service.webp"

  return (
    <Card
      className={cn(
        "group relative flex h-full flex-col overflow-hidden border-slate-200 transition-all duration-500 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/10",
        className
      )}
    >
      {/* 🖼️ Image Section */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-100">
        <Image
          src={finalSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent opacity-60" />

        <div className="absolute bottom-4 left-6 z-10 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-blue-600 group-hover:text-white">
          <SelectedIcon className="h-7 w-7" />
        </div>
      </div>

      <CardHeader className="pt-8 pb-4">
        <CardTitle className="text-xl font-bold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600 md:text-2xl">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col">
        <Typography
          variant="p"
          className="mb-6 line-clamp-3 min-h-[4.5rem] leading-relaxed text-slate-600"
        >
          {description}
        </Typography>

        <div className="mb-8 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">
              Target Group
            </span>
            <div className="h-px flex-1 bg-slate-100" />
          </div>

          <div className="flex flex-wrap gap-2">
            {suitableFor &&
              suitableFor.map((item) => (
                <Badge
                  key={item}
                  variant="secondary"
                  className="border-none bg-blue-50/50 px-3 py-1 text-xs font-medium text-slate-700 transition-all group-hover:bg-blue-600 group-hover:text-white"
                >
                  {item}
                </Badge>
              ))}
          </div>
        </div>

        {/* ✅ เพิ่มปุ่ม "ดูรายละเอียดบริการ" ให้กดง่ายและชัดเจนขึ้น */}
        <div className="mt-auto border-t border-slate-50 pt-4">
          <div className="flex items-center text-sm font-bold text-blue-600 transition-all duration-300 group-hover:gap-2">
            <span>ดูรายละเอียดบริการ</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </CardContent>

      {/* Decorative Accent Line */}
      <div className="absolute bottom-0 h-1.5 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />
    </Card>
  )
}
