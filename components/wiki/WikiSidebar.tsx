/** @format */

'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Library,
  ShieldAlert,
  Scale,
  Fingerprint,
  TrendingUp,
  ShieldCheck,
  ChevronRight,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { WikiService } from '@/lib/wiki'

/**
 * [STRATEGY: NAVIGATION ACCESSIBILITY v5.6]
 * - Fix: Resolved 'Unexpected any' by using LucideIcon type for iconMap.
 * - Cleanup: Removed unused 'FileText' import.
 * - Clarity: ปรับระดับการมองเห็นของตัวเลขจำนวนบทความ (Counter) ให้คมชัดขึ้น
 */

export function WikiSidebar() {
  const pathname = usePathname()

  // ดึงหมวดหมู่จาก Service
  const categories = WikiService.getCategories()

  // 🏛️ Icon Map: แก้ไขจาก any เป็น LucideIcon เพื่อความปลอดภัยของข้อมูล
  const iconMap: Record<string, LucideIcon> = {
    legal: Scale,
    technical: ShieldAlert,
    orm: Zap,
    privacy: Fingerprint,
    general: Library,
  }

  return (
    <nav className="space-y-12">
      {/* 🏛️ 1. CATEGORY SECTION */}
      <div className="space-y-5">
        <div className="flex items-center gap-2 px-4 text-slate-400">
          <Library size={14} strokeWidth={2.5} />
          <h3 className="font-thai text-[11px] font-black tracking-[0.2em] uppercase">
            หมวดหมู่ความรู้
          </h3>
        </div>

        <div className="space-y-1.5">
          {categories.map((cat) => {
            const Icon = iconMap[cat.id] || Library
            const isActive = pathname.includes(`/wiki/category/${cat.id}`)
            const articles = WikiService.getAllArticles(cat.id)
            const articleCount = articles.length

            return (
              <Link
                key={cat.id}
                href={`/wiki/category/${cat.id}`}
                className={cn(
                  'group flex items-center justify-between rounded-2xl px-4 py-3.5 transition-all duration-300 active:scale-[0.98]',
                  isActive
                    ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20'
                    : 'text-slate-600 hover:bg-blue-50 hover:text-blue-600',
                )}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={cn(
                      'flex h-8 w-8 items-center justify-center rounded-xl transition-colors',
                      isActive
                        ? 'bg-white/20'
                        : 'bg-slate-50 group-hover:bg-white',
                    )}
                  >
                    <Icon
                      size={18}
                      className={cn(
                        'transition-colors',
                        isActive
                          ? 'text-white'
                          : 'text-slate-400 group-hover:text-blue-600',
                      )}
                    />
                  </div>
                  <span className="font-thai text-[14px] font-bold">
                    {cat.title}
                  </span>
                </div>

                {isActive ? (
                  <ChevronRight size={16} className="text-white/70" />
                ) : (
                  <span className="font-mono text-[10px] font-black text-slate-300 transition-colors group-hover:text-blue-400">
                    {articleCount}
                  </span>
                )}
              </Link>
            )
          })}
        </div>
      </div>

      {/* 🏛️ 2. RECOMMENDED ARTICLES */}
      <div className="space-y-5">
        <div className="flex items-center gap-2 px-4 text-blue-600">
          <TrendingUp size={14} strokeWidth={2.5} />
          <h3 className="font-thai text-[11px] font-black tracking-[0.2em] uppercase">
            บทความแนะนำ
          </h3>
        </div>
        <div className="space-y-1 px-1">
          {WikiService.getAllArticles()
            .slice(0, 3)
            .map((article) => (
              <TrendingItem
                key={article.slug}
                title={article.title}
                slug={article.slug}
              />
            ))}
        </div>
      </div>

      {/* 🏛️ 3. TRUST BANNER */}
      <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-50/50 to-white p-6 dark:border-white/5 dark:from-slate-900/50 dark:to-slate-900/20">
        <div className="relative z-10">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30">
            <ShieldCheck size={20} />
          </div>
          <h4 className="font-thai mb-2 text-sm font-black text-slate-900 dark:text-white">
            ข้อมูลที่เชื่อถือได้
          </h4>
          <p className="font-thai text-[12px] leading-relaxed text-slate-500 dark:text-slate-400">
            เนื้อหาทั้งหมดได้รับการกลั่นกรองตามมาตรฐาน
            <span className="font-bold text-blue-600 dark:text-blue-400">
              {' '}
              Unlink Protocol 2026
            </span>{' '}
            เพื่อสิทธิส่วนบุคคลที่ยั่งยืนของคุณ
          </p>
        </div>
        <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-blue-100/30 dark:bg-blue-900/10" />
      </div>
    </nav>
  )
}

function TrendingItem({ title, slug }: { title: string; slug: string }) {
  return (
    <Link
      href={`/wiki/${slug}`}
      className="group flex items-start gap-4 rounded-2xl p-3 transition-all hover:bg-slate-50 active:scale-95 dark:hover:bg-white/5"
    >
      <div className="mt-1.5 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-200 transition-colors group-hover:bg-blue-500 dark:bg-slate-700" />
      <span className="font-thai text-xs leading-relaxed font-bold text-slate-500 transition-colors group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-white">
        {title}
      </span>
    </Link>
  )
}
