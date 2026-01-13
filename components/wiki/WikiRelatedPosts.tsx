/** @format */

'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Layers, ChevronRight } from 'lucide-react'

interface Post {
  title: string
  slug: string
  category: string
  categoryName?: string // รองรับชื่อหมวดหมู่ภาษาไทย
}

interface WikiRelatedPostsProps {
  posts: Post[]
}

/**
 * [STRATEGY: KNOWLEDGE CONTINUITY]
 * - Accessibility: ใช้หัวข้อภาษาไทยที่ชัดเจน และปุ่มกดขนาดใหญ่
 * - UX: เน้นการนำทางที่ลื่นไหล (Fluid Navigation)
 * - Visual: เพิ่มความนุ่มนวลด้วยเงาและขอบที่โค้งมนมากขึ้น
 */

export function WikiRelatedPosts({ posts }: WikiRelatedPostsProps) {
  if (!posts || posts.length === 0) return null

  return (
    <section className="mt-24 border-t border-slate-100 pt-16">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-blue-600">
            <Layers size={20} strokeWidth={2.5} />
            <span className="font-thai text-xs font-black tracking-widest uppercase">
              ศึกษาเพิ่มเติม
            </span>
          </div>
          <h3 className="font-thai text-2xl font-black tracking-tight text-slate-900 md:text-3xl">
            หัวข้อที่น่าสนใจใกล้เคียงกัน
          </h3>
        </div>

        <Link
          href="/wiki"
          className="group font-thai hidden items-center gap-2 text-sm font-bold text-slate-400 transition-all hover:text-blue-600 md:flex"
        >
          ดูศูนย์ความรู้ทั้งหมด
          <div className="rounded-full bg-slate-50 p-1.5 transition-colors group-hover:bg-blue-600 group-hover:text-white">
            <ArrowRight size={16} />
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link
              href={`/wiki/${post.slug}`}
              className="group relative block h-full rounded-[2rem] border border-slate-100 bg-white p-7 shadow-sm transition-all hover:border-blue-200 hover:shadow-xl hover:shadow-blue-600/5"
            >
              <div className="flex h-full flex-col">
                <div className="mb-4">
                  <span className="font-thai rounded-lg border border-blue-100/50 bg-blue-50 px-3 py-1 text-[10px] font-bold tracking-wider text-blue-600 uppercase">
                    {post.categoryName || post.category}
                  </span>
                </div>

                <h4 className="font-thai line-clamp-2 flex-grow text-lg leading-snug font-bold text-slate-800 transition-colors group-hover:text-blue-600">
                  {post.title}
                </h4>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-300 transition-colors group-hover:text-blue-400">
                    <BookOpen size={14} />
                    <span className="font-thai text-[11px] font-bold">
                      อ่านรายละเอียด
                    </span>
                  </div>
                  <div className="text-slate-200 transition-all group-hover:translate-x-1 group-hover:text-blue-600">
                    <ChevronRight size={20} />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Mobile-only View All Button */}
      <div className="mt-8 md:hidden">
        <Link
          href="/wiki"
          className="font-thai flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-50 py-4 text-sm font-bold text-slate-600 transition-colors active:bg-slate-100"
        >
          ดูหัวข้อทั้งหมดในศูนย์ความรู้
        </Link>
      </div>
    </section>
  )
}
