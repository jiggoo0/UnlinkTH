/** @format */

'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { ListTree, ChevronRight, Hash } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TOCItem {
  id: string
  text: string
  level: number
}

/**
 * [STRATEGY: GUIDED READING EXPERIENCE]
 * - Clarity: เปลี่ยนหัวข้อจากภาษาอังกฤษเป็น "สารบัญเนื้อหา"
 * - Precision: ปรับปรุงระยะ Offset ให้แม่นยำขึ้นเมื่อ Scroll ไปยังหัวข้อ
 * - Aesthetics: ใช้เส้นบอกตำแหน่ง (Active Marker) ที่ดูทันสมัยและสบายตา
 */

export function WikiTableOfContents() {
  const [headings, setHeadings] = React.useState<TOCItem[]>([])
  const [activeId, setActiveId] = React.useState<string>('')

  // 1. ดึงหัวข้อบทความโดยอัตโนมัติ
  React.useEffect(() => {
    const articleBody = document.querySelector('article')
    if (!articleBody) return

    const elements = Array.from(articleBody.querySelectorAll('h2, h3'))
      .map((elem) => ({
        id:
          elem.id || elem.textContent?.toLowerCase().replace(/\s+/g, '-') || '',
        text: elem.textContent || '',
        level: Number(elem.tagName.substring(1)),
      }))
      .filter((item) => item.id !== '')

    // ผูก ID กับ Element จริง
    elements.forEach((item, index) => {
      const el = articleBody.querySelectorAll('h2, h3')[index]
      if (el && !el.id) el.id = item.id
    })

    setHeadings(elements)
  }, [])

  // 2. ระบบ Intersection Observer เพื่อตรวจจับว่าอ่านถึงไหนแล้ว
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-10% 0% -80% 0%' },
    )

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 140
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  if (headings.length === 0) return null

  return (
    <nav className="font-thai sticky top-[140px] hidden w-64 xl:block">
      <div className="mb-6 flex items-center gap-3 px-4 text-blue-600">
        <div className="rounded-xl bg-blue-50 p-2">
          <ListTree size={16} strokeWidth={2.5} />
        </div>
        <h3 className="text-sm font-black tracking-tight text-slate-900">
          สารบัญเนื้อหา
        </h3>
      </div>

      <div className="relative ml-6 space-y-1 border-l-2 border-slate-100">
        {headings.map((heading) => (
          <button
            key={heading.id}
            onClick={() => scrollToHeading(heading.id)}
            className={cn(
              'group relative flex w-full items-center py-2 text-left text-sm transition-all duration-300',
              activeId === heading.id
                ? 'font-bold text-blue-600'
                : 'text-slate-400 hover:text-slate-900',
            )}
            style={{
              paddingLeft: `${heading.level === 3 ? '2rem' : '1.2rem'}`,
            }}
          >
            {/* 🏛️ Active Line Marker */}
            {activeId === heading.id && (
              <motion.div
                layoutId="active-toc-line"
                className="absolute top-0 bottom-0 left-[-2px] w-[2px] bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}

            <div className="flex items-center gap-2">
              <span
                className={cn(
                  'transition-transform duration-300',
                  activeId === heading.id
                    ? 'scale-110 opacity-100'
                    : 'scale-75 opacity-0 group-hover:opacity-100',
                )}
              >
                <ChevronRight size={14} strokeWidth={3} />
              </span>
              <span className="line-clamp-2 leading-snug">{heading.text}</span>
            </div>
          </button>
        ))}
      </div>

      {/* 🏛️ 3. PROGRESS INDICATOR (Visual Only) */}
      <div className="mt-10 px-4">
        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
          <div className="mb-3 flex items-center gap-2">
            <Hash size={12} className="text-blue-400" />
            <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
              Reading Progress
            </span>
          </div>
          <div className="h-1 w-full overflow-hidden rounded-full bg-slate-200">
            <motion.div
              className="h-full bg-blue-500"
              initial={{ width: 0 }}
              animate={{
                width: `${((headings.findIndex((h) => h.id === activeId) + 1) / headings.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}
