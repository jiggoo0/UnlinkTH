import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getCaseBySlug, getAllCases } from "@/lib/mdx"
import { Typography } from "@/components/ui/typography"
import { siteConfig } from "@/constants/site-config"
import { ChevronLeft, Calendar, Share2, ShieldCheck } from "lucide-react"
import Link from "next/link"
import Image from "next/image" // ✅ เพิ่มสำหรับแสดงภาพหน้าปก
import React from "react"

interface Props {
  params: Promise<{ slug: string }>
}

/**
 * 1. Generate Metadata สำหรับ SEO
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const caseItem = await getCaseBySlug(slug)

  if (!caseItem) return { title: `ไม่พบเคสศึกษา | ${siteConfig.name}` }

  // ✅ ใช้ featuredImage จาก frontmatter ตามโครงสร้างไฟล์ MDX
  const ogImage = caseItem.frontmatter.featuredImage || siteConfig.ogImage

  return {
    title: `${caseItem.frontmatter.title} | Case Study`,
    description: caseItem.frontmatter.summary,
    openGraph: {
      title: caseItem.frontmatter.title,
      description: caseItem.frontmatter.summary,
      url: `${siteConfig.url}/case-studies/${slug}`,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: caseItem.frontmatter.title,
        },
      ],
      type: "article",
      publishedTime: caseItem.frontmatter.date,
    },
    twitter: {
      card: "summary_large_image",
      title: caseItem.frontmatter.title,
      description: caseItem.frontmatter.summary,
      images: [ogImage],
    },
  }
}

/**
 * 2. Static Site Generation (SSG)
 */
export async function generateStaticParams() {
  const cases = await getAllCases()
  return cases.map((c) => ({
    slug: c.slug,
  }))
}

/**
 * 3. Main Page Component
 */
export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params
  const caseItem = await getCaseBySlug(slug)

  if (!caseItem) notFound()

  const { frontmatter, content } = caseItem

  return (
    <article className="min-h-screen bg-white pb-24 selection:bg-blue-100 selection:text-blue-900">
      {/* Top Progress Bar - เส้นตกแต่ง */}
      <div className="h-1.5 w-full bg-slate-100">
        <div className="h-full w-1/3 bg-blue-600" />
      </div>

      <div className="container mx-auto max-w-4xl px-4 pt-12">
        {/* Navigation */}
        <nav className="mb-10">
          <Link
            href="/case-studies"
            className="group inline-flex items-center text-sm font-bold text-slate-500 transition-colors hover:text-blue-600"
          >
            <ChevronLeft className="mr-1 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            ย้อนกลับไปหน้ากรณีศึกษา
          </Link>
        </nav>

        {/* Header Section */}
        <header className="mb-12">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <div className="rounded-full bg-blue-50 px-4 py-1 text-[10px] font-bold tracking-widest text-blue-600 uppercase">
              {frontmatter.category}
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
              <ShieldCheck className="h-4 w-4" />
              Verified Case Study
            </div>
          </div>

          <Typography
            variant="h1"
            className="mb-8 border-none p-0 text-3xl leading-tight font-black tracking-tighter text-slate-900 md:text-5xl lg:text-6xl"
          >
            {frontmatter.title}
          </Typography>

          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-slate-400" />
              <time dateTime={frontmatter.date}>
                {new Date(frontmatter.date).toLocaleDateString("th-TH", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <span className="hidden text-slate-300 md:block">•</span>
            <div className="flex items-center gap-2">
              <Share2 className="h-4 w-4 text-slate-400" />
              Public Disclosure
            </div>
          </div>
        </header>

        {/* ✅ Featured Image Section: เพิ่มการแสดงรูปภาพหน้าปก */}
        {frontmatter.featuredImage && (
          <div className="relative mb-16 aspect-video overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50 shadow-2xl shadow-slate-200/50">
            <Image
              src={frontmatter.featuredImage}
              alt={frontmatter.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>
        )}

        {/* MDX Content */}
        <main className="prose prose-slate prose-blue prose-headings:scroll-m-20 prose-headings:tracking-tight prose-p:leading-relaxed prose-p:text-slate-600 prose-blockquote:not-italic prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:bg-blue-50/50 prose-strong:text-slate-900 lg:prose-xl max-w-none">
          {content}
        </main>

        {/* Call to Action Section */}
        <footer className="mt-24 border-t border-slate-100 pt-16">
          <div className="group relative overflow-hidden rounded-[2.5rem] bg-slate-900 p-8 text-center text-white md:p-16">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 -mt-24 -mr-24 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute bottom-0 left-0 -mb-24 -ml-24 h-80 w-80 rounded-full bg-indigo-600/10 blur-3xl" />

            <div className="relative z-10">
              <h3 className="mb-4 text-2xl font-black md:text-4xl">
                ปรึกษาปัญหาชื่อเสียงออนไลน์
              </h3>
              <p className="mx-auto mb-10 max-w-xl text-lg text-slate-400">
                เคสของคุณสามารถแก้ไขได้เหมือนกรณีศึกษานี้
                เราพร้อมประเมินโอกาสความสำเร็จให้เบื้องต้นโดยไม่มีค่าใช้จ่าย
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={siteConfig.contact.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-16 items-center justify-center rounded-full bg-[#06C755] px-10 text-xl font-bold text-white shadow-xl shadow-[#06C755]/20 transition-all hover:translate-y-[-2px] hover:bg-[#05b34c] active:scale-95"
                >
                  ปรึกษาทาง LINE ทันที
                </a>
              </div>
              <p className="mt-6 text-xs font-medium text-slate-500">
                * ข้อมูลทั้งหมดจะถูกเก็บเป็นความลับสูงสุดตามมาตรฐาน PDPA
              </p>
            </div>
          </div>
        </footer>
      </div>
    </article>
  )
}
