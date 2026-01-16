import Link from "next/link"
import Image from "next/image" // ✅ นำเข้าสำหรับการแสดงผลรูปภาพ
import { getAllCases } from "@/lib/mdx"
import { Typography } from "@/components/ui/typography"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { ArrowRight, Calendar, ExternalLink } from "lucide-react"

/**
 * CaseStudySection: ส่วนแสดงผลงานล่าสุดบนหน้า Landing Page
 * ดึงข้อมูลจาก MDX และจัดเรียงตามวันที่ใหม่ล่าสุด
 */
export default async function CaseStudySection() {
  // 1. ดึงข้อมูลเคสทั้งหมด
  const allCases = await getAllCases()

  // 2. กรองและจัดเรียง (แสดง 3 รายการล่าสุดที่มีรูปภาพประกอบ)
  const featuredCases = allCases
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    )
    .slice(0, 3)

  if (featuredCases.length === 0) return null

  return (
    <section className="relative overflow-hidden bg-slate-50/40 py-24">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 z-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-50 opacity-50 blur-3xl" />

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div className="max-w-2xl text-left">
            <Badge
              variant="outline"
              className="mb-4 border-blue-200 bg-blue-50 px-3 py-1 font-bold tracking-wide text-blue-700"
            >
              SUCCESS STORIES
            </Badge>
            <Typography
              variant="h2"
              className="border-none pb-0 text-3xl font-extrabold tracking-tight md:text-5xl"
            >
              ผลงานการจัดการข้อมูล <br />
              <span className="text-blue-600">ที่ลูกค้าไว้วางใจ</span>
            </Typography>
            <Typography variant="p" className="mt-4 max-w-lg text-slate-500">
              ตัวอย่างเคสจริงที่ Unlink-TH
              กู้คืนชื่อเสียงออนไลน์ให้กลับมาขาวสะอาดอีกครั้งด้วยวิธีที่ถูกต้อง
            </Typography>
          </div>

          <Link
            href="/case-studies"
            className="group flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-sm transition-all hover:border-blue-600 hover:text-blue-600"
          >
            ดูเคสทั้งหมด
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Case Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {featuredCases.map((item) => (
            <Link
              href={`/case-studies/${item.slug}`}
              key={item.slug}
              className="group flex h-full"
            >
              <Card className="relative flex flex-col overflow-hidden border-slate-200/60 bg-white transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-blue-500/10">
                {/* ✅ Image Preview: แสดงรูปภาพหน้าปกเคสศึกษา */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                  <Image
                    src={
                      item.frontmatter.featuredImage || "/images/og-main.jpg"
                    }
                    alt={item.frontmatter.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-slate-900/80 text-[10px] text-white backdrop-blur-md">
                      {item.frontmatter.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="space-y-3 p-6 pb-2">
                  <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                    <Calendar className="h-3 w-3" />
                    {new Date(item.frontmatter.date).toLocaleDateString(
                      "th-TH",
                      {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      }
                    )}
                  </div>
                  <CardTitle className="line-clamp-2 text-xl leading-snug font-bold transition-colors group-hover:text-blue-600">
                    {item.frontmatter.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col justify-between p-6 pt-0">
                  <CardDescription className="mb-6 line-clamp-3 text-sm leading-relaxed text-slate-600">
                    {item.frontmatter.summary}
                  </CardDescription>

                  <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                    <span className="flex items-center gap-1 text-xs font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                      เจาะลึกเคสนี้ <ExternalLink className="h-3 w-3" />
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 transition-all group-hover:bg-blue-600 group-hover:text-white">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
