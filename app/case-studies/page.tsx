import { getAllCases, getAllGuides, CaseFrontmatter } from "@/lib/mdx"
import { Typography } from "@/components/ui/typography"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"
import {
  CalendarDays,
  ArrowRight,
  BookOpen,
  Star,
  ShieldCheck,
} from "lucide-react"

/**
 * Interface สำหรับไอเทมที่จะแสดงในลิสต์
 */
interface ContentItem {
  slug: string
  frontmatter: CaseFrontmatter
}

export const metadata = {
  title: "Case Studies & Insights | แก้ไขประวัติออนไลน์และกู้คืนชื่อเสียง",
  description:
    "เจาะลึกเคสจริงการลบข้อมูลออนไลน์ พร้อมบทความให้ความรู้ด้าน PDPA และ SEO เพื่อการเริ่มต้นชีวิตใหม่อย่างมั่นใจ",
}

export default async function CaseStudiesPage() {
  const [allCases, allGuides] = await Promise.all([
    getAllCases(),
    getAllGuides(),
  ])

  // รวมและจัดเรียงข้อมูลตามวันที่
  const combinedContent: ContentItem[] = [...allCases, ...allGuides].sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  )

  return (
    <main className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      {/* --- Header Section --- */}
      <header className="mb-12 max-w-4xl">
        <div className="mb-4 flex items-center gap-2">
          <Badge
            variant="outline"
            className="border-blue-200 bg-blue-50 text-blue-700"
          >
            Knowledge Hub
          </Badge>
          <span className="text-sm text-slate-400">|</span>
          <span className="flex items-center gap-1 text-sm font-medium text-slate-500">
            <ShieldCheck className="h-4 w-4 text-green-500" /> Trust & Authority
          </span>
        </div>
        <Typography
          variant="h1"
          className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl"
        >
          ศูนย์รวมความรู้และ <span className="text-blue-600">ความสำเร็จ</span>
        </Typography>
        <Typography
          variant="p"
          className="text-xl leading-relaxed text-slate-600"
        >
          เราเชื่อว่า "ทุกคนควรมีโอกาสเริ่มต้นใหม่"
          ศึกษาเทคนิคการจัดการประวัติออนไลน์
          และดูวิธีที่เราช่วยลูกค้าตัวจริงแก้ปัญหาผ่านเคสจำลองเหล่านี้
        </Typography>
      </header>

      {/* --- Main Content Tabs --- */}
      <Tabs defaultValue="all" className="space-y-12">
        <div className="flex flex-col gap-6 border-b pb-4 sm:flex-row sm:items-center sm:justify-between">
          <TabsList className="bg-slate-100 p-1">
            <TabsTrigger value="all" className="flex items-center gap-2">
              ทั้งหมด
            </TabsTrigger>
            <TabsTrigger value="cases" className="flex items-center gap-2">
              <Star className="h-4 w-4" /> เคสตัวอย่าง
            </TabsTrigger>
            <TabsTrigger value="guides" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" /> บทความ/คู่มือ
            </TabsTrigger>
          </TabsList>

          <div className="text-sm text-slate-500 italic">
            พบ {allCases.length + allGuides.length} รายการที่น่าสนใจ
          </div>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid gap-8 md:grid-cols-2">
            {combinedContent.map((item) => (
              <ContentCard key={item.slug} item={item} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="cases" className="mt-0">
          <div className="grid gap-8 md:grid-cols-2">
            {allCases.map((item) => (
              <ContentCard key={item.slug} item={item} isCase />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="guides" className="mt-0">
          <div className="grid gap-8 md:grid-cols-2">
            {allGuides.map((item) => (
              <ContentCard key={item.slug} item={item} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* --- Footer Conversion --- */}
      <section className="mt-24 rounded-3xl bg-slate-900 p-8 text-center text-white sm:p-16">
        <Typography variant="h2" className="mb-4 text-3xl font-bold">
          เคสของคุณก็สามารถเป็นความสำเร็จถัดไปได้
        </Typography>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-blue-600 px-8 py-4 font-bold text-white shadow-lg shadow-blue-900/20 transition hover:bg-blue-700 active:scale-95"
          >
            ปรึกษาเคสของคุณฟรี
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-white/30 px-8 py-4 font-bold text-white transition hover:bg-white/10 active:scale-95"
          >
            ดูบริการทั้งหมด
          </Link>
        </div>
      </section>
    </main>
  )
}

/**
 * Reusable Card Component
 * ✅ แก้ไข: กำจัด 'any' โดยใช้ Interface ContentItem
 */
function ContentCard({
  item,
  isCase,
}: {
  item: ContentItem
  isCase?: boolean
}) {
  const finalIsCase =
    isCase || item.slug.includes("case") || !!item.frontmatter.category

  const typeLabel = finalIsCase ? "Case Study" : "Guide & Knowledge"
  const typeColor = finalIsCase
    ? "bg-amber-100 text-amber-700 border-amber-200"
    : "bg-emerald-100 text-emerald-700 border-emerald-200"

  return (
    <Link
      href={`/case-studies/${item.slug}`}
      className="group block h-full transition-all duration-300"
    >
      <Card className="flex h-full flex-col overflow-hidden border-slate-200 bg-white transition-all group-hover:border-blue-500 group-hover:shadow-xl">
        <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
          <Image
            src={
              item.frontmatter.featuredImage ||
              item.frontmatter.image ||
              "/images/og-main.jpg"
            }
            alt={item.frontmatter.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <CardHeader className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <Badge
              variant="outline"
              className={`px-3 py-1 font-medium ${typeColor}`}
            >
              {typeLabel}
            </Badge>
            <div className="flex items-center text-sm text-slate-400">
              <CalendarDays className="mr-2 h-4 w-4" />
              {item.frontmatter.date}
            </div>
          </div>
          <CardTitle className="line-clamp-2 text-2xl leading-tight font-bold transition-colors group-hover:text-blue-600">
            {item.frontmatter.title}
          </CardTitle>
          <CardDescription className="line-clamp-2 text-base text-slate-600">
            {item.frontmatter.summary}
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="flex items-center text-sm font-semibold text-blue-600">
            {finalIsCase ? "อ่านถอดบทเรียนเคสนี้" : "อ่านรายละเอียดความรู้"}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
