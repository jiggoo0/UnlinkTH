/** @format */

import { WikiService } from '@/lib/wiki'
import { WikiCard } from '@/components/wiki/WikiCard'
import { WikiHero } from '@/components/wiki/WikiHero'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { WikiArticle } from '@/data/wiki/articles'

/**
 * [STRATEGY: DYNAMIC CATEGORY VIEW v5.2]
 * - Fix TS2551: เปลี่ยนชื่อ Method เป็น getAllArticles ตาม lib/wiki.ts
 * - Fix TS7006: ระบุ Type ให้ parameter 'article' ใน map function
 */

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const category = WikiService.getCategoryById(slug)

  if (!category) return { title: 'ไม่พบหมวดหมู่ | Unlink TH' }

  return {
    title: `${category.title} | ศูนย์ความรู้ Unlink TH`,
    description: category.description,
  }
}

export default async function WikiCategoryPage({ params }: PageProps) {
  const { slug } = await params

  // 1. ดึงข้อมูลหมวดหมู่
  const categoryInfo = WikiService.getCategoryById(slug)

  if (!categoryInfo) {
    notFound()
  }

  // 2. [FIXED]: ใช้ชื่อฟังก์ชันที่ถูกต้องตาม lib/wiki.ts
  const articles = WikiService.getAllArticles(categoryInfo.id)

  return (
    <div className="flex flex-col gap-y-12 pb-20">
      <WikiHero
        title={categoryInfo.title}
        description={categoryInfo.description}
      />

      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between border-b border-slate-100 pb-8 dark:border-slate-800">
          <div className="flex items-center gap-4">
            <div className="h-6 w-1.5 rounded-full bg-blue-600" />
            <h2 className="font-thai text-xl font-black text-slate-900 dark:text-white">
              บทความในหมวดหมู่ {categoryInfo.title}
            </h2>
          </div>
          <div className="rounded-full bg-slate-100 px-4 py-1 dark:bg-slate-900">
            <span className="font-mono text-xs font-black text-blue-600">
              COUNT: {articles.length.toString().padStart(2, '0')}
            </span>
          </div>
        </div>

        {articles.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* [FIXED]: ระบุ Type (article: WikiArticle) เพื่อแก้ TS7006 */}
            {articles.map((article: WikiArticle) => (
              <WikiCard
                key={article.id}
                title={article.title}
                excerpt={article.excerpt}
                slug={article.slug}
                category={article.category}
                readingTime={article.readTime}
                lastUpdated={article.date}
              />
            ))}
          </div>
        ) : (
          <div className="relative overflow-hidden rounded-[3rem] border-2 border-dashed border-slate-100 bg-slate-50/30 py-24 text-center dark:border-slate-800 dark:bg-slate-900/20">
            <div className="relative z-10 flex flex-col items-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-3xl shadow-sm dark:bg-slate-950">
                📂
              </div>
              <h3 className="font-thai text-xl font-black text-slate-900 dark:text-white">
                กำลังเตรียมข้อมูล
              </h3>
              <p className="font-thai mt-3 max-w-xs text-slate-500">
                ทีมงานกำลังเร่งเรียบเรียงบทความเพื่อให้ได้ข้อมูลที่ถูกต้องที่สุด
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
