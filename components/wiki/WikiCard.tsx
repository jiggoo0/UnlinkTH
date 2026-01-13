/** @format */

'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight, Clock, ShieldCheck, Hash } from 'lucide-react'
import { cn } from '@/lib/utils'
import { WikiService } from '@/lib/wiki'

interface WikiCardProps {
  title: string
  excerpt: string
  slug: string
  category: string
  readingTime?: string
  lastUpdated?: string
  className?: string
}

export function WikiCard({
  title,
  excerpt,
  slug,
  category,
  readingTime,
  lastUpdated,
  className,
}: WikiCardProps) {
  const categoryInfo = WikiService.getCategoryById(category)

  // แปลงรูปแบบวันที่จาก 2026-01-05 เป็น 5 ม.ค. 2026
  const formatDate = (dateStr?: string) => {
    if (!dateStr) return 'อัปเดตล่าสุด 2026'
    try {
      const date = new Date(dateStr)
      return `อัปเดตเมื่อ ${date.toLocaleDateString('th-TH', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })}`
    } catch {
      return dateStr
    }
  }

  return (
    <motion.div
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-7 transition-all hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-600/10 md:p-9',
        className,
      )}
    >
      {/* 🏛️ 1. TOP METADATA: เพิ่มความชัดเจนของสัญลักษณ์ */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
            <Hash size={18} />
          </div>
          <div className="flex flex-col">
            <span className="font-thai text-[10px] font-black tracking-widest text-slate-400 uppercase">
              หมวดหมู่
            </span>
            <span className="font-thai text-sm font-bold text-blue-600">
              {categoryInfo?.title || category}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-slate-400">
          <Clock size={12} />
          <span className="font-thai text-[11px] font-bold tracking-tight uppercase">
            {readingTime || '5 นาที'}
          </span>
        </div>
      </div>

      {/* 🏛️ 2. CONTENT AREA: เน้นการอ่านที่สบายตา */}
      <div className="flex-grow space-y-4">
        <Link href={`/wiki/${slug}`} className="block">
          <h3 className="font-thai text-2xl leading-snug font-black text-slate-900 transition-colors group-hover:text-blue-600 md:text-3xl">
            {title}
          </h3>
        </Link>
        <p className="font-thai line-clamp-3 text-base leading-relaxed text-slate-500">
          {excerpt}
        </p>
      </div>

      {/* 🏛️ 3. FOOTER: ข้อมูลความน่าเชื่อถือ */}
      <div className="mt-8 flex items-center justify-between border-t border-slate-50 pt-7">
        <div className="flex items-center gap-2.5 text-slate-400">
          <div className="rounded-full bg-emerald-50 p-1 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
            <ShieldCheck size={14} />
          </div>
          <span className="font-thai text-[12px] font-bold text-slate-400">
            {formatDate(lastUpdated)}
          </span>
        </div>

        <Link
          href={`/wiki/${slug}`}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/30 transition-all group-hover:bg-blue-700 hover:scale-110 active:scale-95"
          aria-label={`อ่านรายละเอียด: ${title}`}
        >
          <ChevronRight
            size={24}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>

      {/* Decorative Gradient: ความพรีเมียมที่เรียบง่าย */}
      <div className="absolute inset-x-0 bottom-0 h-1.5 w-0 bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-700 group-hover:w-full" />
    </motion.div>
  )
}
