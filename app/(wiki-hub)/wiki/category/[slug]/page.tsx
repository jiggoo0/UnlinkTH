/** @format */

import { WikiService } from '@/lib/wiki'
import { WikiCard } from '@/components/wiki/WikiCard'
import { WikiHero } from '@/components/wiki/WikiHero'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

/**
 * [STRATEGY: DYNAMIC CATEGORY VIEW]
 * - ลบการครอบ WikiLayout ซ้ำซ้อน (Single Shell Principle)
 * - ดึงข้อมูลหมวดหมู่และบทความที่เกี่ยวข้องมาแสดงผลในรูปแบบ Grid
 * - รองรับ SEO สำหรับหน้าหมวดหมู่โดยเฉพาะ
 */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const category = WikiService.getCategories().find(
    (c) => c.id.toLowerCase() === slug.toLowerCase(),
  )

  return {
    title: category
      ? `${category.title} | หมวดหมู่ความรู้ UnlinkTH`
      : 'หมวดหมู่ความรู้',
    description:
      category?.description ||
      'รวบรวมบทความแยกตามหมวดหมู่เพื่อการค้นหาที่ง่ายขึ้น',
  }
}

export default async function WikiCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  // 1. ค้นหาข้อมูลหมวดหมู่
  const categoryInfo = WikiService.getCategories().find(
    (c) => c.id.toLowerCase() === slug.toLowerCase(),
  )

  // 2. ถ้าไม่พบหมวดหมู่ ให้แสดงหน้า 404
  if (!categoryInfo) {
    notFound()
  }

  // 3. ดึงบทความทั้งหมดที่อยู่ในหมวดหมู่นี้
  const articles = WikiService.getAllArticles(categoryInfo.id)

  return (
    /* ✅ หมายเหตุ: ไม่ต้องใส่ <WikiLayout> ครอบ เพราะถูกจัดการโดย layout.tsx ของโฟลเดอร์ wiki แล้ว */
    <div className="flex flex-col gap-y-12 pb-20">
      {/* 🏛️ 1. ส่วนหัวหมวดหมู่ (Hero) */}
      <WikiHero
        title={categoryInfo.title}
        description={categoryInfo.description}
      />

      <div className="container mx-auto px-4 lg:px-6">
        {/* 🏛️ 2. ส่วนหัวรายการ: แสดงจำนวนผลลัพธ์ */}
        <div className="mb-10 flex items-center justify-between border-b border-slate-100 pb-6">
          <div className="flex items-center gap-2">
            <div className="h-4 w-1 rounded-full bg-blue-600" />
            <h2 className="font-thai text-lg font-black text-slate-900">
              บทความในหมวดหมู่ {categoryInfo.title}
            </h2>
          </div>
          <span className="font-thai text-sm font-bold text-slate-400">
            ทั้งหมด {articles.length} หัวข้อ
          </span>
        </div>

        {/* 🏛️ 3. รายการบทความ (Grid View) */}
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
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
          /* กรณีไม่มีบทความในหมวดหมู่ */
          <div className="flex flex-col items-center justify-center rounded-[3rem] border-2 border-dashed border-slate-100 bg-slate-50/50 py-24 text-center">
            <div className="mb-4 text-4xl">📂</div>
            <h3 className="font-thai text-xl font-black text-slate-900">
              กำลังอัปเดตข้อมูล
            </h3>
            <p className="font-thai mt-2 text-slate-400">
              ขณะนี้ยังไม่มีบทความในหมวดหมู่นี้ โปรดรอติดตามเร็วๆ นี้
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
