/** @format */

import { WikiService } from '@/lib/wiki'
import { WikiContent } from '@/components/wiki/WikiContent'
import { WikiTableOfContents } from '@/components/wiki/WikiTableOfContents'
import { WikiRelatedPosts } from '@/components/wiki/WikiRelatedPosts'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
// [FIXED]: เพิ่ม Activity และ ShieldCheck จาก lucide-react เพื่อแก้ปัญหา Error และความเสถียร
import { Activity, ShieldCheck } from 'lucide-react'

/**
 * [STRATEGY: PRODUCTION READY v2.8]
 * - Fix TS2304: เพิ่ม Import 'Activity' จาก lucide-react
 * - Fix TS2322: ใส่ 'category' ใน Map relatedPosts
 * - Optimization: ใช้ Component จริงจาก Library แทน SVG Manual เพื่อความสม่ำเสมอ
 */

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug: rawSlug } = await params
  const slug = decodeURIComponent(rawSlug)
  const article = WikiService.getArticleBySlug(slug)

  if (!article) return { title: 'ไม่พบเนื้อหา | Unlink TH' }

  return {
    title: `${article.title} | ศูนย์ความรู้ Unlink TH`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      url: `https://unlink.th/wiki/${article.slug}`,
    },
  }
}

export default async function WikiArticlePage({ params }: PageProps) {
  const { slug: rawSlug } = await params
  const slug = decodeURIComponent(rawSlug)
  const article = WikiService.getArticleBySlug(slug)

  if (!article) notFound()

  // 1. เตรียมข้อมูล Related Posts พร้อมใส่ category ให้ครบตาม Type
  const relatedPosts = WikiService.getRelatedArticles(slug, 3).map((p) => ({
    id: p.id,
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    iconName: p.iconName,
    category: p.category,
  }))

  const categoryInfo = WikiService.getCategoryById(article.category)

  return (
    <div className="flex flex-col gap-16 xl:flex-row">
      <article className="min-w-0 flex-1">
        <WikiContent
          title={article.title}
          category={article.category}
          categoryName={categoryInfo?.title || 'ทั่วไป'}
          date={article.date}
          author={article.author}
          content={article.content}
        />

        <div className="mt-20 border-t border-slate-100 pt-16 dark:border-slate-800">
          <div className="mb-10 space-y-1">
            <h3 className="font-thai text-2xl font-black tracking-tight text-slate-900 dark:text-white">
              บทความที่คุณอาจสนใจ
            </h3>
            <p className="font-thai text-sm font-medium text-slate-500">
              เรียนรู้วิธีจัดการข้อมูลส่วนตัวเพิ่มเติมจากผู้เชี่ยวชาญ
            </p>
          </div>
          <WikiRelatedPosts posts={relatedPosts} />
        </div>
      </article>

      <aside className="hidden w-80 shrink-0 xl:block">
        <div className="sticky top-32 space-y-12">
          {/* Table of Contents */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-blue-600">
              <div className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
              <h4 className="font-mono text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">
                In this article
              </h4>
            </div>
            <WikiTableOfContents />
          </div>

          {/* Expert Review Badge */}
          <div className="relative overflow-hidden rounded-[2.5rem] border border-blue-50 bg-blue-50/30 p-8 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/40">
            <div className="relative z-10 space-y-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-600/20">
                <ShieldCheck size={24} strokeWidth={2.5} />
              </div>
              <div className="space-y-2">
                <p className="font-thai text-[15px] font-black text-slate-900 dark:text-white">
                  ข้อมูลตรวจสอบแล้ว
                </p>
                <p className="font-thai text-[14px] leading-relaxed font-medium text-slate-500 dark:text-slate-400">
                  เนื้อหาได้รับการยืนยันความถูกต้องตามหลัก PDPA
                  และเทคนิคล่าสุดปี 2026 เรียบร้อยแล้ว
                </p>
              </div>
            </div>
            {/* Background Icon Decoration */}
            <div className="absolute -right-6 -bottom-6 text-blue-600 opacity-[0.05] dark:opacity-[0.08]">
              <Activity size={140} />
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}
