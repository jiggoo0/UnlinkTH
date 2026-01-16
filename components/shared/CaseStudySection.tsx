import Link from "next/link"
import Image from "next/image"
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
 * CaseStudySection: ส่วนแสดงผลงานล่าสุดบนหน้าแรก
 * ✅ รองรับการดึงข้อมูล MDX แบบ Async
 * ✅ Optimized Image ด้วย Next/Image
 * ✅ มีระบบ Sorting ตามวันที่ล่าสุด
 */
export default async function CaseStudySection() {
  // 1. ดึงข้อมูลเคสทั้งหมดจากไฟล์ .mdx ในโฟลเดอร์ content/cases
  const allCases = await getAllCases()

  // 2. จัดเรียงตามวันที่ (ใหม่ไปเก่า) และเลือกมาแสดง 3 เคสล่าสุด
  const featuredCases = allCases
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    )
    .slice(0, 3)

  if (featuredCases.length === 0) return null

  return (
    <section className="relative overflow-hidden bg-slate-50/40 py-24 sm:py-32">
      {/* 🎨 Background Decoration */}
      <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/30 blur-[120px]" />

      <div className="relative z-10 container mx-auto px-4">
        {/* --- Section Header --- */}
        <div className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div className="max-w-2xl text-left">
            <Badge
              variant="outline"
              className="mb-4 border-blue-200 bg-blue-50 px-3 py-1 font-bold tracking-widest text-blue-700 uppercase"
            >
              Success Stories
            </Badge>
            <Typography
              variant="h2"
              className="border-none pb-0 text-3xl font-black tracking-tight text-slate-900 md:text-5xl"
            >
              ผลงานการจัดการข้อมูล <br />
              <span className="text-blue-600 italic">ที่ลูกค้าไว้วางใจ</span>
            </Typography>
            <Typography
              variant="p"
              className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600"
            >
              ตัวอย่างเคสจริงที่ Unlink-TH
              ช่วยกู้คืนชื่อเสียงออนไลน์ให้กลับมาสะอาดอีกครั้งด้วยวิธีที่ถูกต้องและยั่งยืน
            </Typography>
          </div>

          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-black text-slate-900 shadow-sm transition-all hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600 active:scale-95"
          >
            ดูผลงานทั้งหมด
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* --- Case Cards Grid --- */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredCases.map((item) => (
            <Link
              href={`/case-studies/${item.slug}`}
              key={item.slug}
              className="group flex h-full"
            >
              <Card className="relative flex flex-col overflow-hidden border-slate-200/60 bg-white transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] group-hover:ring-1 group-hover:ring-blue-500/20">
                {/* 📸 Image Preview with Hover Effect */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={
                      item.frontmatter.featuredImage || "/images/og-main.jpg"
                    }
                    alt={item.frontmatter.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Category Overlay */}
                  <div className="absolute top-4 left-4">
                    <Badge className="border-none bg-slate-900/90 px-3 py-1 text-[10px] font-bold tracking-wider text-white uppercase backdrop-blur-md">
                      {item.frontmatter.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="space-y-3 p-8 pb-4">
                  <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-slate-400 uppercase">
                    <Calendar className="h-3.5 w-3.5 text-blue-500" />
                    {new Date(item.frontmatter.date).toLocaleDateString(
                      "th-TH",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </div>
                  <CardTitle className="line-clamp-2 text-xl leading-snug font-extrabold text-slate-900 transition-colors group-hover:text-blue-600">
                    {item.frontmatter.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col justify-between p-8 pt-0">
                  <CardDescription className="mb-8 line-clamp-3 text-base leading-relaxed text-slate-600">
                    {item.frontmatter.summary}
                  </CardDescription>

                  <div className="flex items-center justify-between border-t border-slate-100 pt-6">
                    <span className="inline-flex items-center gap-1.5 text-xs font-black tracking-wider text-slate-900 uppercase transition-colors group-hover:text-blue-600">
                      อ่านรายละเอียดเคส <ExternalLink className="h-3 w-3" />
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-50 transition-all duration-300 group-hover:rotate-[-45deg] group-hover:bg-blue-600 group-hover:text-white">
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
