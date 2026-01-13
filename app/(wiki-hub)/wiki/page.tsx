/** @format */

import { WikiService } from '@/lib/wiki'
import { WikiHero } from '@/components/wiki/WikiHero'
import { WikiCard } from '@/components/wiki/WikiCard'
import { BookOpen, Sparkles, Clock, ArrowRight } from 'lucide-react'

export default function WikiLandingPage() {
  // ดึงข้อมูลบทความทั้งหมดจากระบบ
  const articles = WikiService.getAllArticles()

  return (
    <div className="flex flex-col gap-y-10 pb-20">
      {/* 🏛️ 1. ส่วนต้อนรับ: ใช้ภาษาที่เข้าใจง่ายและดูมีความหวัง */}
      <WikiHero
        title="คลังความรู้เพื่อสิทธิและเสรีภาพดิจิทัล"
        description="รวบรวมวิธีจัดการข้อมูลส่วนตัว ข้อกฎหมายน่ารู้ และแนวทางป้องกันตัวเองในโลกออนไลน์ ฉบับอ่านง่าย ใครๆ ก็เข้าใจได้"
      />

      <div className="container mx-auto px-4 lg:px-6">
        {/* 🏛️ 2. ส่วนหัวรายการบทความ: ออกแบบให้ดูเป็นระเบียบ ไม่ซับซอย */}
        <div className="mb-10 flex flex-col gap-4 border-b border-slate-100 pb-8 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-blue-600">
              <Sparkles size={18} />
              <span className="text-xs font-bold tracking-wider uppercase">
                เรื่องราวอัปเดตล่าสุด
              </span>
            </div>
            <h2 className="font-thai text-3xl font-black text-slate-900">
              บทความน่าสนใจ
            </h2>
            <p className="font-thai max-w-md text-slate-500">
              คัดสรรข้อมูลที่จำเป็นสำหรับคุณ
              เพื่อการใช้ชีวิตในโลกดิจิทัลอย่างปลอดภัยและมั่นใจ
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-slate-100"
                >
                  <BookOpen size={12} className="text-slate-400" />
                </div>
              ))}
            </div>
            <span className="text-sm font-medium text-slate-400">
              รวม {articles.length} หัวข้อความรู้
            </span>
          </div>
        </div>

        {/* 🏛️ 3. รายการบทความ: ใช้ WikiCard ที่เน้นความสบายตา */}
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
          <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-100 py-20 text-center">
            <div className="mb-4 rounded-full bg-slate-50 p-4">
              <Clock size={32} className="text-slate-300" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              กำลังเตรียมข้อมูล...
            </h3>
            <p className="text-slate-400">
              เรากำลังเร่งเขียนบทความที่เป็นประโยชน์มาให้คุณโปรดรอสักครู่
            </p>
          </div>
        )}

        {/* 🏛️ 4. ส่วนประชาสัมพันธ์ท้ายหน้า (Optional) */}
        <div className="group relative mt-16 overflow-hidden rounded-[2.5rem] bg-slate-900 p-8 text-white md:p-12">
          <div className="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-2xl font-black md:text-3xl">
                สงสัยเรื่องข้อมูลส่วนตัว?
              </h3>
              <p className="max-w-lg text-slate-400">
                หากคุณมีคำถามนอกเหนือจากบทความเหล่านี้
                ทีมงานของเราพร้อมให้คำปรึกษาและช่วยเหลือคุณในทุกขั้นตอน
              </p>
            </div>
            <button className="flex shrink-0 items-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-slate-900 transition-colors hover:bg-blue-50">
              พูดคุยกับทีมงาน <ArrowRight size={18} />
            </button>
          </div>
          {/* ตกแต่งพื้นหลังเล็กน้อย */}
          <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl transition-all group-hover:bg-blue-500/20" />
        </div>
      </div>
    </div>
  )
}
