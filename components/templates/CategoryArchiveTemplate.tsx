"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/constants/site-config"
import { MessageCircle, FileQuestion, ArrowRight, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

/**
 * 1. กำหนด Union Type สำหรับ Category ให้สอดคล้องกับระบบหลัก
 */
type CategoryType =
  | "Negotiation"
  | "SEO Push"
  | "Legal"
  | "Content Removal"
  | "Online Reputation"

/**
 * 2. Interface สำหรับข้อมูล Case Study แต่ละรายการ
 */
interface CaseItem {
  slug: string
  title: string
  description: string
  category: CategoryType
  date: string
  suitableFor?: string[]
  image?: string
}

interface Props {
  categoryName: string
  description: string
  cases: CaseItem[]
}

export default function CategoryArchiveTemplate({
  categoryName,
  description,
  cases,
}: Props) {
  return (
    <section className="min-h-[80vh] bg-slate-50/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* --- Header Section --- */}
        <header className="animate-in fade-in slide-in-from-bottom-4 mb-16 max-w-4xl duration-700">
          <nav className="mb-6 flex items-center gap-2 text-sm font-medium text-slate-500">
            <Link href="/" className="transition-colors hover:text-blue-600">
              หน้าแรก
            </Link>
            <ArrowRight className="h-3 w-3 opacity-50" />
            <Link
              href="/services"
              className="transition-colors hover:text-blue-600"
            >
              บริการ
            </Link>
            <ArrowRight className="h-3 w-3 opacity-50" />
            <span className="text-blue-600">{categoryName}</span>
          </nav>

          <Typography
            variant="h1"
            className="border-none pb-2 text-4xl font-black tracking-tighter text-slate-900 md:text-6xl"
          >
            {categoryName}
          </Typography>
          <Typography
            variant="p"
            className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl"
          >
            {description}
          </Typography>
        </header>

        {/* --- Grid List Section --- */}
        {cases.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((item) => (
              <Link
                href={`/case-studies/${item.slug}`}
                key={item.slug}
                className="group h-full"
              >
                <Card className="flex h-full flex-col overflow-hidden border-slate-200 transition-all duration-300 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/10">
                  {/* Image Container with Hover Effect */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image || "/images/og-main.jpg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Floating Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 px-3 py-1 font-bold text-blue-600 shadow-sm backdrop-blur-md">
                        {item.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="p-6 pb-2">
                    <div className="mb-3 flex items-center gap-2 text-xs font-bold tracking-widest text-slate-400 uppercase">
                      <Calendar className="h-3 w-3" />
                      {item.date}
                    </div>
                    <Typography
                      variant="h3"
                      className="line-clamp-2 text-xl leading-tight font-bold text-slate-900 transition-colors group-hover:text-blue-600"
                    >
                      {item.title}
                    </Typography>
                  </CardHeader>

                  <CardContent className="flex flex-1 flex-col p-6 pt-0">
                    <Typography
                      variant="p"
                      className="mb-6 line-clamp-2 text-sm leading-relaxed text-slate-500"
                    >
                      {item.description}
                    </Typography>

                    {/* ✅ "อ่านรายละเอียด" Button Component */}
                    <div className="mt-auto flex items-center text-sm font-black tracking-wider text-blue-600 uppercase">
                      <span>อ่านรายละเอียดเคส</span>
                      <div className="ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 transition-all group-hover:translate-x-1 group-hover:bg-blue-600 group-hover:text-white">
                        <ArrowRight className="h-3 w-3" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          /* --- Empty State Section --- */
          <div className="flex flex-col items-center justify-center rounded-[2.5rem] border-2 border-dashed border-slate-200 bg-white px-6 py-24 text-center">
            <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-slate-50 text-slate-300">
              <FileQuestion size={48} strokeWidth={1.2} />
            </div>
            <div className="max-w-md space-y-4">
              <Typography
                variant="h3"
                className="border-none text-2xl font-bold text-slate-900"
              >
                กำลังรวบรวมข้อมูล {categoryName}
              </Typography>
              <Typography
                variant="p"
                className="leading-relaxed text-slate-500"
              >
                ขณะนี้ยังไม่มีกรณีศึกษาในหมวดหมู่นี้แสดงผลบนเว็บไซต์
                แต่ทีมงานของเรามีประสบการณ์ตรงในเคสลักษณะนี้
                คุณสามารถปรึกษาเพื่อรับตัวอย่างแนวทางแก้ไขได้ทันที
              </Typography>
            </div>
            <div className="mt-10">
              <Button
                size="lg"
                className="h-14 rounded-full bg-blue-600 px-10 text-base font-bold shadow-xl shadow-blue-500/20 transition-all hover:bg-blue-700 hover:shadow-blue-500/40 active:scale-95"
                asChild
              >
                <a
                  href={siteConfig.contact.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  คุยกับทีมงานผ่าน LINE
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
