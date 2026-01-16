import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getCaseBySlug, getAllCases, getGuideBySlug } from "@/lib/mdx"
import { Typography } from "@/components/ui/typography"
import { siteConfig } from "@/constants/site-config"
import { Badge } from "@/components/ui/badge"
import {
  ChevronLeft,
  Calendar,
  Share2,
  ShieldCheck,
  Clock,
  ArrowRight,
  Bookmark,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import React from "react"

interface Props {
  params: Promise<{ slug: string }>
}

/**
 * 1. SEO Metadata Generation
 * ✅ แก้ไขปัญหา Property 'description' does not exist โดยการใช้ Fallback Chain
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const item = (await getCaseBySlug(slug)) || (await getGuideBySlug(slug))

  if (!item) return { title: `ไม่พบเนื้อหา | ${siteConfig.name}` }

  // ป้องกัน Error ด้วยการเช็กทุกความเป็นไปได้ของ Image และ Description
  const ogImage =
    item.frontmatter.featuredImage ||
    item.frontmatter.image ||
    siteConfig.ogImage

  const description =
    item.frontmatter.description || item.frontmatter.summary || ""

  return {
    title: `${item.frontmatter.title} | Unlink Thailand`,
    description: description,
    openGraph: {
      title: item.frontmatter.title,
      description: description,
      url: `${siteConfig.url}/case-studies/${slug}`,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      type: "article",
    },
  }
}

/**
 * 2. SSG Support
 */
export async function generateStaticParams() {
  const cases = await getAllCases()
  return cases.map((c) => ({ slug: c.slug }))
}

/**
 * 3. Page Component
 */
export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params

  // ตรวจสอบทั้ง 2 แหล่งข้อมูล (Case Study และ Blog/Store)
  const item = (await getCaseBySlug(slug)) || (await getGuideBySlug(slug))

  if (!item) notFound()

  const { frontmatter, content } = item

  // โลจิกแยกประเภทเนื้อหาเพื่อปรับสี UI
  const isKnowledge =
    slug.includes("how-to") ||
    slug.includes("strategy") ||
    !slug.includes("clear")

  return (
    <article className="min-h-screen bg-slate-50/50 pb-24 selection:bg-blue-100 selection:text-blue-900">
      {/* ประดับด้านบนด้วยเส้นสีตามประเภทเนื้อหา */}
      <div
        className={`h-1.5 w-full ${isKnowledge ? "bg-emerald-500" : "bg-blue-600"}`}
      />

      <div className="container mx-auto max-w-4xl px-4 pt-10">
        {/* Navigation & Actions */}
        <nav className="mb-12 flex items-center justify-between">
          <Link
            href="/case-studies"
            className="group inline-flex items-center text-sm font-bold text-slate-500 transition-colors hover:text-blue-600"
          >
            <ChevronLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            ศูนย์ข้อมูลและเคสศึกษา
          </Link>
          <div className="flex gap-3">
            <button className="rounded-full border bg-white p-2 text-slate-400 shadow-sm transition-all hover:text-blue-600">
              <Share2 className="h-4 w-4" />
            </button>
            <button className="rounded-full border bg-white p-2 text-slate-400 shadow-sm transition-all hover:text-blue-600">
              <Bookmark className="h-4 w-4" />
            </button>
          </div>
        </nav>

        {/* --- Header Section --- */}
        <header className="mb-12 text-center md:text-left">
          <div className="mb-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Badge
              variant="secondary"
              className="border-slate-200 bg-white px-4 py-1.5 text-xs font-bold shadow-sm"
            >
              {frontmatter.category || "General Knowledge"}
            </Badge>
            <div className="flex items-center gap-1.5 text-xs font-bold text-blue-600">
              <ShieldCheck className="h-4 w-4" />
              {isKnowledge ? "Expert Insight" : "Verified Success"}
            </div>
          </div>

          <Typography
            variant="h1"
            className="mb-8 border-none p-0 text-3xl leading-tight font-black tracking-tight text-slate-900 md:text-5xl"
          >
            {frontmatter.title}
          </Typography>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-500 md:justify-start">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time>
                {new Date(frontmatter.date).toLocaleDateString("th-TH", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center gap-2 border-l border-slate-200 pl-6">
              <Clock className="h-4 w-4" />
              อ่านประมาณ 5-7 นาที
            </div>
          </div>
        </header>

        {/* --- Featured Image --- 
            ✅ แก้ไขปัญหา src undefined โดยการใส่ Fallback (siteConfig.ogImage)
        */}
        <div className="relative mb-16 aspect-[21/9] overflow-hidden rounded-[2.5rem] border-4 border-white shadow-2xl shadow-blue-100/50">
          <Image
            src={
              frontmatter.featuredImage ||
              frontmatter.image ||
              siteConfig.ogImage
            }
            alt={frontmatter.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        {/* --- MDX Content Area --- */}
        <div className="rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-sm md:p-16">
          <main className="prose prose-slate prose-blue lg:prose-xl prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-strong:font-bold prose-img:rounded-3xl prose-img:shadow-lg prose-table:border prose-table:rounded-xl prose-table:overflow-hidden prose-th:bg-slate-50 prose-th:p-4 prose-td:p-4 prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:bg-blue-50/50 prose-blockquote:rounded-r-2xl prose-blockquote:py-1 max-w-none">
            {content}
          </main>
        </div>

        {/* --- Footer Conversion --- */}
        <footer className="mt-20">
          <div className="relative overflow-hidden rounded-[3rem] bg-slate-950 px-8 py-12 text-center text-white md:px-20 md:py-20">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-4 text-3xl font-black md:text-4xl">
                ปรึกษาเคสชื่อเสียงออนไลน์
              </h3>
              <p className="mx-auto mb-10 max-w-lg text-lg text-slate-400">
                เคสของคุณมีความเฉพาะตัว เรายินดีให้คำปรึกษาเบื้องต้นฟรี
                เพื่อให้คุณเห็นแนวทางแก้ไขที่ชัดเจนที่สุด
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={siteConfig.contact.lineUrl}
                  target="_blank"
                  className="group inline-flex h-16 items-center justify-center rounded-full bg-[#06C755] px-10 text-xl font-bold text-white shadow-xl shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95"
                >
                  คุยทาง LINE ทันที
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              <p className="mt-8 text-xs font-medium text-slate-500 italic">
                * ข้อมูลทุกอย่างเป็นความลับ 100% ตามนโยบายความเป็นส่วนตัว
              </p>
            </div>
          </div>
        </footer>
      </div>
    </article>
  )
}
