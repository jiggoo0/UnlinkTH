"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image" // ✅ นำเข้า Image สำหรับแสดงรูปภาพ
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/constants/site-config"
import { MessageCircle, FileQuestion, ArrowRight, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

type CategoryType =
  | "Negotiation"
  | "SEO Push"
  | "Legal"
  | "Content Removal"
  | "Online Reputation"

interface CaseItem {
  slug: string
  title: string
  description: string
  category: CategoryType
  date: string
  suitableFor?: string[]
  image?: string // ✅ เพิ่ม image ใน Interface
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
        {/* Header Section */}
        <header className="animate-in fade-in slide-in-from-bottom-4 mb-16 max-w-3xl duration-700">
          <nav className="mb-6 flex items-center gap-2 text-sm font-medium text-slate-500">
            <Link href="/" className="transition-colors hover:text-blue-600">
              หน้าแรก
            </Link>
            <ArrowRight className="h-3 w-3" />
            <Link
              href="/case-studies"
              className="transition-colors hover:text-blue-600"
            >
              กรณีศึกษา
            </Link>
          </nav>

          <Typography
            variant="h1"
            className="border-none pb-2 text-4xl font-black tracking-tighter text-slate-900 md:text-6xl"
          >
            {categoryName}
          </Typography>
          <Typography
            variant="p"
            className="mt-4 text-lg leading-relaxed text-slate-600 md:text-xl"
          >
            {description}
          </Typography>
        </header>

        {/* Grid List Section */}
        {cases.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((item) => (
              <Link
                href={`/case-studies/${item.slug}`}
                key={item.slug}
                className="group h-full"
              >
                <Card className="h-full overflow-hidden border-slate-200 transition-all duration-300 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10">
                  {/* ✅ Image Container: แสดงรูปจาก MDX */}
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image || "/images/og-main.jpg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-white/90 text-blue-600 backdrop-blur-sm hover:bg-white">
                        {item.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="p-6 pb-2">
                    <div className="mb-2 flex items-center gap-2 text-xs font-medium text-slate-400">
                      <Calendar className="h-3 w-3" />
                      {item.date}
                    </div>
                    <Typography
                      variant="h3"
                      className="line-clamp-2 text-xl font-bold text-slate-900 group-hover:text-blue-600"
                    >
                      {item.title}
                    </Typography>
                  </CardHeader>

                  <CardContent className="p-6 pt-0">
                    <Typography
                      variant="p"
                      className="mb-4 line-clamp-2 text-sm leading-relaxed text-slate-500"
                    >
                      {item.description}
                    </Typography>
                    <div className="flex items-center text-sm font-bold text-blue-600">
                      อ่านรายละเอียด
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          /* Empty State Section */
          <div className="flex flex-col items-center justify-center rounded-[2rem] border-2 border-dashed border-slate-200 bg-white/60 px-6 py-20 text-center backdrop-blur-sm">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-slate-100 text-slate-400">
              <FileQuestion size={48} strokeWidth={1.5} />
            </div>
            <div className="max-w-md space-y-3">
              <Typography
                variant="h3"
                className="border-none text-2xl font-bold text-slate-900"
              >
                ยังไม่มีข้อมูลในหมวดหมู่ {categoryName}
              </Typography>
              <Typography variant="p" className="text-slate-500">
                เรากำลังอัปเดตข้อมูลเร็วๆ นี้ คุณสามารถปรึกษาปัญหาของคุณได้ทันที
              </Typography>
            </div>
            <div className="mt-10">
              <Button
                size="lg"
                className="h-14 rounded-full bg-blue-600 px-8 text-base font-bold shadow-lg shadow-blue-200 transition-all hover:bg-blue-700"
                asChild
              >
                <a
                  href={siteConfig.contact.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  ปรึกษาฟรีผ่าน LINE
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
