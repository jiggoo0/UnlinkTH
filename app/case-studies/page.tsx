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
import Link from "next/link"
import { CalendarDays, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Case Studies | ผลงานการจัดการข้อมูลและกู้คืนชื่อเสียง",
  description:
    "ศึกษาเคสจริงในการแก้ปัญหาแบล็กลิสต์, การใช้กฎหมาย PDPA และการทำ SEO Push เพื่อกู้คืนชื่อเสียงออนไลน์",
}

export default async function CaseStudiesPage() {
  // ดึงข้อมูลเคสทั้งหมดจากโฟลเดอร์ content/cases
  const allCases = await getAllCases()

  return (
    <main className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      {/* Header Section */}
      <header className="mb-16 max-w-3xl">
        <Badge
          variant="secondary"
          className="mb-4 border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100"
        >
          Our Success Stories
        </Badge>
        <Typography
          variant="h1"
          className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl"
        >
          กรณีศึกษาและความสำเร็จ
        </Typography>
        <Typography
          variant="p"
          className="text-xl leading-relaxed text-slate-600"
        >
          เรารวบรวมประสบการณ์จริงในการช่วยเหลือลูกค้าแก้ปัญหาบนโลกออนไลน์
          ตั้งแต่การเจรจาลบข้อมูลไปจนถึงการใช้เทคนิค SEO ขั้นสูง
        </Typography>
      </header>

      {/* Grid ของ Case Studies */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {allCases.map((item) => (
          <Link
            href={`/case-studies/${item.slug}`}
            key={item.slug}
            className="group block transition-all duration-300"
          >
            <Card className="h-full overflow-hidden border-slate-200 bg-white transition-all group-hover:border-blue-500 group-hover:shadow-xl">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge className="border-none bg-slate-100 px-3 py-1 text-slate-700 hover:bg-slate-200">
                    {item.frontmatter.category}
                  </Badge>
                  <div className="flex items-center text-sm text-slate-400">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    {item.frontmatter.date}
                  </div>
                </div>
                <CardTitle className="text-2xl leading-tight font-bold transition-colors group-hover:text-blue-600">
                  {item.frontmatter.title}
                </CardTitle>
                <CardDescription className="line-clamp-3 text-base text-slate-600">
                  {item.frontmatter.summary}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm font-semibold text-blue-600 transition-transform duration-300 group-hover:translate-x-2">
                  ดูรายละเอียดเคสแบบเจาะลึก
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Empty State กรณีไม่มีไฟล์เคส */}
      {allCases.length === 0 && (
        <div className="rounded-3xl border-2 border-dashed border-slate-200 py-20 text-center">
          <Typography variant="p" className="text-slate-500">
            กำลังเตรียมข้อมูลกรณีศึกษาเพิ่มเติม เร็วๆ นี้
          </Typography>
        </div>
      )}
    </main>
  )
}
