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

interface WikiContentProps {
  title: string
  category: string
  categoryName?: string
  date: string
  author: string
  content: React.ReactNode
}

export function WikiContent({
  title,
  category,
  categoryName,
  date,
  author,
  content,
}: WikiContentProps) {
  // 🏛️ 1. แก้ไข Hydration Error: ใช้ useState + useEffect แทน useMemo สำหรับค่าสุ่ม
  const [documentId, setDocumentId] = React.useState<string>('ULK-LOADING')

  React.useEffect(() => {
    // จะทำงานเฉพาะบน Browser เท่านั้น ค่าสุ่มจึงจะไม่ขัดแย้งกับ Server
    const randomSuffix = Math.random()
      .toString(36)
      .substring(2, 7)
      .toUpperCase()
    setDocumentId(`ULK-${randomSuffix}`)
  }, [])

  // 🏛️ 2. ปรับการแสดงวันที่ให้เป็นภาษาไทยที่สุภาพ
  const formattedDate = React.useMemo(() => {
    return new Date(date).toLocaleDateString('th-TH', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }, [date])

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      {/* 🏛️ HEADER: เน้นหัวข้อตัวโต อ่านง่ายสำหรับผู้สูงอายุ */}
      <header className="mb-10 space-y-6">
        <div className="flex items-center gap-3">
          <span className="font-thai rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-bold text-blue-600 shadow-sm">
            หมวดหมู่: {categoryName || category}
          </span>
          <div className="h-px flex-grow bg-slate-100" />
        </div>

        <h1 className="font-thai text-3xl leading-tight font-black tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
          {title}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-6 border-y border-slate-100 py-6">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-slate-400" />
              <span className="font-thai text-sm font-bold text-slate-500">
                เขียนเมื่อ {formattedDate}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-emerald-50 p-1">
                <UserCheck size={16} className="text-emerald-600" />
              </div>
              <span className="font-thai text-sm font-bold text-slate-700">
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

      {/* 🏛️ IMPORTANT NOTE: ใช้ภาษาที่แสดงถึงความห่วงใย (เหมือนคนแนะนำกัน) */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 flex items-start gap-4 rounded-3xl border border-amber-200 bg-amber-50/50 p-6 md:p-8"
      >
        <div className="rounded-2xl bg-amber-100 p-2">
          <ShieldAlert className="flex-shrink-0 text-amber-600" size={24} />
        </div>
        <div className="font-thai text-md leading-relaxed text-slate-700">
          <strong className="mb-1 block text-lg font-black text-amber-800">
            ข้อควรรู้เบื้องต้น:
          </strong>{' '}
          บทความนี้จัดทำขึ้นเพื่อให้ความรู้แก่ประชาชนทั่วไป
          เนื้อหาไม่ใช่คำปรึกษาทางกฎหมายโดยตรง หากท่านมีปัญหาเร่งด่วน{' '}
          <strong>สามารถพูดคุยกับเจ้าหน้าที่ Unlink ได้ตลอดเวลา</strong>
        </div>
      </motion.div>

      {/* 🏛️ CONTENT: ใช้ขนาดตัวหนังสือ (prose-lg) ที่ใหญ่พอสำหรับคนทุกวัย */}
      <article className="prose prose-slate prose-lg prose-headings:font-thai prose-headings:font-black prose-p:font-thai prose-p:text-slate-600 prose-p:leading-extra-relaxed prose-strong:text-slate-900 prose-strong:font-black prose-img:rounded-[2rem] prose-img:shadow-xl max-w-none">
        {content}
      </article>

      {/* 🏛️ FOOTER: รหัสอ้างอิงเอกสาร (ปรับให้ดูเป็นทางการและขลังขึ้น) */}
      <footer className="mt-24 border-t border-slate-100 pt-12 pb-12 text-center">
        <div className="inline-flex flex-col items-center gap-2">
          <div className="mb-4 h-12 w-1.5 animate-pulse rounded-full bg-blue-600" />
          <p className="font-thai text-sm font-bold text-slate-500">
            ศูนย์คุ้มครองสิทธิและตัวตนดิจิทัล Unlink Thailand
          </p>
          <div className="mt-2 space-y-1">
            <p className="font-mono text-[9px] font-black tracking-[0.4em] text-slate-300 uppercase">
              รหัสอ้างอิงเอกสาร: {documentId}
            </p>
            <p className="font-thai text-[9px] font-bold text-slate-200">
              ได้รับการคุ้มครองและตรวจสอบความถูกต้องตามมาตรฐาน UNLINK-TH
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
      className="group flex items-center gap-2 rounded-xl px-3 py-5 text-slate-400 transition-all hover:bg-blue-50 hover:text-blue-600"
    >
      {icon}
      <span className="font-thai text-xs font-bold">{label}</span>
    </Button>
  )
}
