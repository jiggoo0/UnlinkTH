/** @format */

'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

/**
 * [STRATEGY: TACTICAL CATEGORY FILTER v5.0]
 * - Fix: Removed unused 'AnimatePresence' to resolve Lint warning.
 * - UX: ใช้ Shared Layout Animation (layoutId) เพื่อสร้างรอยเชื่อมต่อระหว่างสถานะ
 * - Style: เน้นความขรึมด้วยสี Slate-900 และเพิ่มความมีชีวิตชีวาด้วย Blue-600 ใน Dark Mode
 */

interface ProjectFilterProps {
  categories: string[]
  activeTab: string
  onTabChange: (tab: string) => void
}

export function ProjectFilter({
  categories,
  activeTab,
  onTabChange,
}: ProjectFilterProps) {
  return (
    <nav className="relative py-10" aria-label="Project category filter">
      {/* 🏛️ 1. CAPSULE TRACK: Container สำหรับระบบการเลือก */}
      <div className="flex flex-wrap items-center gap-3">
        {categories.map((tab) => {
          const isActive = activeTab === tab

          return (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              type="button"
              aria-pressed={isActive}
              className={cn(
                'group relative flex items-center justify-center rounded-full px-8 py-3.5 transition-colors duration-300',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2',
                isActive
                  ? 'text-white'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white',
              )}
            >
              {/* 🏛️ 2. ACTIVE PILL: ตัวบ่งชี้สถานะที่เคลื่อนที่อย่างลื่นไหล */}
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-slate-900 shadow-[0_12px_24px_-8px_rgba(15,23,42,0.3)] dark:bg-blue-600 dark:shadow-[0_12px_24px_-8px_rgba(37,99,235,0.4)]"
                  style={{ borderRadius: 9999 }}
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}

              {/* 🏛️ 3. HOVER INDICATOR: การตอบสนองเบาๆ เมื่อวางเมาส์ */}
              {!isActive && (
                <div className="absolute inset-0 rounded-full bg-slate-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-slate-800" />
              )}

              {/* 🏛️ 4. LABEL DESIGN: ตัวอักษรและสัญลักษณ์สถานะ */}
              <span className="relative z-10 flex items-center gap-3">
                <span className="font-mono text-[11px] font-black tracking-[0.3em] uppercase">
                  {tab}
                </span>

                {isActive && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"
                  />
                )}
              </span>
            </button>
          )
        })}
      </div>

      {/* 🏛️ 5. STATUS INFRASTRUCTURE: เส้นนำสายตาและตัวบ่งชี้ระบบ */}
      <div className="relative mt-12 flex items-center gap-5">
        <div className="h-[1px] flex-grow bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-800" />
        <div className="flex items-center gap-3 font-mono text-[9px] font-black tracking-[0.5em] text-slate-400 uppercase">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-600/40 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600"></span>
          </span>
          Protocol_Filter_Active
        </div>
        <div className="h-[1px] w-16 bg-gradient-to-l from-slate-200 to-transparent dark:from-slate-800" />
      </div>
    </nav>
  )
}
