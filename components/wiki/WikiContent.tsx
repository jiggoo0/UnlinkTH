/** @format */

'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import {
  Calendar,
  UserCheck,
  Share2,
  Bookmark,
  Printer,
  ShieldAlert,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

/**
 * [STRATEGY: ROBUST CONTENT RENDERING v3.1]
 * - Fix Lint: จัดการ Unused Variable 'e' ใน catch block โดยการใช้แฮนเดิลแบบว่างหรือลบออก
 * - Fix: ป้องกัน Hydration Mismatch สำหรับ Document ID ด้วย useEffect
 * - UX: เพิ่มความละเอียดของ Typography เพื่อการอ่านบทความยาวๆ (Thai Readability)
 */

interface WikiContentProps {
  title: string
  category: string
  categoryName?: string
  date: string
  author: string
  content: string
}

export function WikiContent({
  title,
  category,
  categoryName,
  date,
  author,
  content,
}: WikiContentProps) {
  // 🏛️ 1. แก้ไข Hydration Error (Client-side ID Generation)
  const [documentId, setDocumentId] = React.useState<string>('ULK-LOADING')

  React.useEffect(() => {
    const randomSuffix = Math.random()
      .toString(36)
      .substring(2, 7)
      .toUpperCase()
    setDocumentId(`ULK-${randomSuffix}`)
  }, [])

  // 🏛️ 2. Formatting Date (Thai Locale)
  const formattedDate = React.useMemo(() => {
    try {
      return new Date(date).toLocaleDateString('th-TH', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    } catch {
      // [FIXED]: ลบ 'e' ที่ไม่ได้ใช้ออก เพื่อให้ผ่าน ESLint
      return date
    }
  }, [date])

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      {/* 🏛️ HEADER SECTION */}
      <header className="mb-10 space-y-6">
        <div className="flex items-center gap-3">
          <span className="font-thai rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-bold text-blue-600 shadow-sm">
            หมวดหมู่: {categoryName || category}
          </span>
          <div className="h-px flex-grow bg-slate-100 dark:bg-slate-800" />
        </div>

        <h1 className="font-thai text-3xl leading-tight font-black tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-white">
          {title}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-6 border-y border-slate-100 py-6 dark:border-slate-800">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-slate-400" />
              <span className="font-thai text-sm font-bold text-slate-500">
                เขียนเมื่อ {formattedDate}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-emerald-50 p-1 dark:bg-emerald-500/10">
                <UserCheck
                  size={16}
                  className="text-emerald-600 dark:text-emerald-400"
                />
              </div>
              <span className="font-thai text-sm font-bold text-slate-700 dark:text-slate-300">
                ตรวจสอบความถูกต้องโดย {author}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 md:gap-2">
            <ActionIcon icon={<Share2 size={16} />} label="บอกต่อ" />
            <ActionIcon icon={<Bookmark size={16} />} label="เก็บไว้ดู" />
            <ActionIcon icon={<Printer size={16} />} label="พิมพ์เอกสาร" />
          </div>
        </div>
      </header>

      {/* 🏛️ IMPORTANT NOTE (Friendly Warning) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 flex items-start gap-4 rounded-3xl border border-amber-200 bg-amber-50/50 p-6 md:p-8 dark:border-amber-900/30 dark:bg-amber-900/10"
      >
        <div className="rounded-2xl bg-amber-100 p-2 text-amber-600 dark:bg-amber-900/50 dark:text-amber-400">
          <ShieldAlert size={24} />
        </div>
        <div className="font-thai text-md leading-relaxed text-slate-700 dark:text-slate-300">
          <strong className="mb-1 block text-lg font-black text-amber-800 dark:text-amber-500">
            ข้อควรรู้เบื้องต้น:
          </strong>{' '}
          บทความนี้จัดทำขึ้นเพื่อให้ความรู้เบื้องต้นเท่านั้น
          หากท่านถูกละเมิดสิทธิอย่างเร่งด่วน{' '}
          <strong className="text-blue-700 underline decoration-blue-300 underline-offset-4 dark:text-blue-400">
            แนะนำให้ปรึกษาเจ้าหน้าที่ Unlink โดยตรงเพื่อประเมินทางเทคนิค
          </strong>
        </div>
      </motion.div>

      {/* 🏛️ MAIN CONTENT (Rich Text Rendering) */}
      <article
        className="prose prose-slate prose-lg lg:prose-xl prose-headings:font-thai prose-headings:font-black prose-headings:text-slate-900 prose-p:font-thai prose-p:leading-extra-relaxed prose-p:text-slate-600 prose-strong:font-black prose-strong:text-slate-900 prose-img:rounded-3xl prose-img:shadow-2xl prose-a:text-blue-600 prose-a:font-bold hover:prose-a:underline dark:prose-invert dark:prose-headings:text-white dark:prose-p:text-slate-400 max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {/* 🏛️ FOOTER SECTION */}
      <footer className="mt-24 border-t border-slate-100 pt-12 pb-16 text-center dark:border-slate-800">
        <div className="inline-flex flex-col items-center gap-2">
          <div className="mb-6 h-12 w-1.5 animate-pulse rounded-full bg-blue-600" />
          <p className="font-thai text-sm font-extrabold tracking-wide text-slate-600 dark:text-slate-400">
            ศูนย์บริหารจัดการชื่อเสียงดิจิทัล Unlink Thailand
          </p>
          <div className="mt-3 space-y-1">
            <p className="font-mono text-[10px] font-black tracking-[0.4em] text-slate-300 uppercase">
              DOCUMENT ID: {documentId}
            </p>
            <p className="font-thai text-[10px] font-bold text-slate-300">
              Verified by UNLINK-TH Security Standard 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ActionIcon({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <Button
      variant="ghost"
      size="sm"
      className="group flex items-center gap-2 rounded-xl px-3 py-5 text-slate-400 transition-all hover:bg-blue-50 hover:text-blue-600 active:scale-95 dark:hover:bg-blue-900/20"
    >
      <span className="transition-transform group-hover:scale-110">{icon}</span>
      <span className="font-thai text-xs font-bold">{label}</span>
    </Button>
  )
}
