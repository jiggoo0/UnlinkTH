/** @format */

import { WikiService } from '@/lib/wiki'
import { WikiContent } from '@/components/wiki/WikiContent'
import { WikiTableOfContents } from '@/components/wiki/WikiTableOfContents'
import { WikiRelatedPosts } from '@/components/wiki/WikiRelatedPosts'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

/**
 * [STRATEGY: CONTENT-FIRST RENDERING]
 * - แยก Layout ออกไปไว้ที่ไฟล์ layout.tsx ส่วนกลาง
 * - หน้า Page มีหน้าที่เพียงดึงข้อมูล (Fetch) และแสดงผลเนื้อหา (Content)
 * - รองรับ SEO Dynamic Metadata สำหรับการแชร์ลงโซเชียล
 */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = WikiService.getArticleBySlug(slug)

  if (!article) return { title: 'ไม่พบเนื้อหา | UnlinkTH' }

  return {
    title: `${article.title} | ศูนย์ความรู้ UnlinkTH`,
    description: article.excerpt,
  }
}

export default async function WikiArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  // 1. ดึงข้อมูลบทความผ่าน slug
  const article = WikiService.getArticleBySlug(slug)

  // 2. หากไม่พบหน้าบทความ ให้ส่งไป 404
  if (!article) {
    notFound()
  }

  // 3. ดึงบทความที่เกี่ยวข้องในหมวดหมู่เดียวกัน (จำกัด 3 รายการ)
  const relatedPosts = WikiService.getAllArticles(article.category)
    .filter((p) => p.slug !== article.slug)
    .slice(0, 3)

  const categoryInfo = WikiService.getCategoryById(article.category)

  return (
    /* ✅ หมายเหตุ: ลบ <WikiLayout> ออกแล้วเพื่อให้ใช้ร่วมกับ Nested Layout 
      โครงสร้าง Grid จะถูกควบคุมโดย WikiLayout ที่อยู่ในไฟล์ layout.tsx
    */
    <div className="flex flex-col gap-16 xl:flex-row">
      {/* ส่วนเนื้อหาบทความหลัก */}
      <article className="min-w-0 flex-1">
        <WikiContent
          title={article.title}
          category={article.category}
          categoryName={categoryInfo?.title}
          date={article.date}
          author={article.author}
          content={
            <div
              className="wiki-article-body"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          }
        />

        {/* ส่วนท้าย: บทความที่เกี่ยวข้อง */}
        <div className="mt-20 border-t border-slate-50 pt-10">
          <WikiRelatedPosts posts={relatedPosts} />
        </div>
      </article>

      {/* สารบัญ (Table of Contents): แสดงผลเฉพาะบนจอใหญ่ (xl) */}
      <aside className="hidden w-72 shrink-0 xl:block">
        <div className="sticky top-28 space-y-4">
          <div className="flex items-center gap-2 px-1">
            <div className="h-1 w-4 rounded-full bg-blue-600" />
            <p className="text-[11px] font-black tracking-[0.2em] text-slate-400 uppercase">
              สารบัญเนื้อหา
            </p>
          </div>
          <WikiTableOfContents />
        </div>
      </aside>
    </div>
  )
}
