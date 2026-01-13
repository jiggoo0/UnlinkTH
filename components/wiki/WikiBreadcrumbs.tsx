/** @format */

'use client'

import * as React from 'react'
import Link from 'next/link'
import { ChevronRight, Home, BookOpen, FileText } from 'lucide-react'
import { motion } from 'framer-motion'

interface WikiBreadcrumbsProps {
  category?: string
  title?: string
  categoryName?: string
}

/**
 * [STRATEGY: INCLUSIVE WAYFINDING v5.6]
 * - Fix: Removed unused 'cn' import to resolve lint warning.
 * - Accessibility: กำหนดบทบาท aria-label และอาศัยพิกัดสี Slate-500 เพื่อ Contrast ที่ชัดเจน
 * - Flow: ระบบ Auto-scroll สำหรับหน้าจอขนาดเล็ก ป้องกัน Layout แตก
 */

export function WikiBreadcrumbs({
  category,
  categoryName,
  title,
}: WikiBreadcrumbsProps) {
  return (
    <nav
      aria-label="ตำแหน่งปัจจุบันของคุณ"
      className="no-scrollbar flex items-center overflow-x-auto scroll-smooth py-2"
    >
      <ol className="flex items-center gap-2 whitespace-nowrap">
        {/* 🏠 1. หน้าหลักของเว็บไซต์ */}
        <li className="flex items-center">
          <Link
            href="/"
            className="group flex items-center gap-1.5 text-slate-500 transition-colors hover:text-blue-600"
          >
            <Home size={16} />
            <span className="font-thai text-[13px] font-bold">หน้าหลัก</span>
          </Link>
        </li>

        <Separator />

        {/* 📚 2. หน้าแรกศูนย์ความรู้ */}
        <li className="flex items-center">
          <Link
            href="/wiki"
            className="flex items-center gap-1.5 text-slate-500 transition-colors hover:text-blue-600"
          >
            <BookOpen size={15} />
            <span className="font-thai text-[13px] font-bold">
              ศูนย์ความรู้
            </span>
          </Link>
        </li>

        {/* 📂 3. ชื่อหมวดหมู่ (Dynamic Route) */}
        {category && (
          <>
            <Separator />
            <li className="flex items-center">
              <Link
                href={`/wiki/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="font-thai text-[13px] font-bold text-slate-500 transition-colors hover:text-blue-600"
              >
                {categoryName || category}
              </Link>
            </li>
          </>
        )}

        {/* 📄 4. ชื่อบทความ (Current Node) */}
        {title && (
          <>
            <Separator />
            <li className="flex items-center" aria-current="page">
              <motion.div
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-600/5 px-3 py-1 shadow-sm dark:border-blue-900/30 dark:bg-blue-600/10"
              >
                <FileText
                  size={14}
                  className="text-blue-600 dark:text-blue-400"
                />
                <span className="font-thai max-w-[120px] truncate text-[13px] font-black text-blue-800 md:max-w-[300px] lg:max-w-none dark:text-blue-300">
                  {title}
                </span>
              </motion.div>
            </li>
          </>
        )}
      </ol>
    </nav>
  )
}

/** 🏛️ Internal Layout Component: Separator */
function Separator() {
  return (
    <li className="text-slate-300 dark:text-slate-700" aria-hidden="true">
      <ChevronRight size={14} strokeWidth={3} />
    </li>
  )
}
