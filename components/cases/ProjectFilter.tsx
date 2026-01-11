/** @format */

'use client'

import { cn } from '@/lib/utils'

/**
 * [STRATEGY: TACTICAL CATEGORY FILTER]
 * - UX: ใช้ Capsule-style สำหรับ High-speed scannability
 * - Visual: เน้นความขรึม (Authority) และการตอบสนองที่แม่นยำ (Precision)
 * - Accessibility: รองรับทั้ง Light/Dark mode และสภาวะ Focus
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
    <nav className="relative py-2">
      {/* 🏛️ Capsule Filter Container */}
      <div className="flex flex-wrap items-center gap-2 md:gap-3">
        {categories.map((tab) => {
          const isActive = activeTab === tab

          return (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              type="button"
              aria-pressed={isActive}
              className={cn(
                // 🔹 Base: Tactical Typography & Spacing
                'relative flex items-center justify-center rounded-sm px-5 py-2.5 text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300',

                // 🔹 State: Interaction Logic
                isActive
                  ? 'bg-slate-900 text-white shadow-md dark:bg-blue-600 dark:shadow-blue-900/20'
                  : 'bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-900 dark:bg-slate-900/50 dark:text-slate-500 dark:hover:bg-slate-800 dark:hover:text-slate-200',

                // 🔹 Precision: Active States
                'focus:ring-1 focus:ring-blue-600 focus:ring-offset-2 focus:outline-none active:scale-95 dark:focus:ring-offset-slate-950',
              )}
            >
              {tab}
              {/* Dot indicator สำหรับสถานะ Active (Subtle Authority) */}
              {isActive && (
                <span className="ml-2 h-1 w-1 animate-pulse rounded-full bg-blue-400" />
              )}
            </button>
          )
        })}
      </div>

      {/* 🏛️ Infrastructure Line: เพิ่มความมั่นคงให้ UI */}
      <div className="mt-8 h-px w-full bg-slate-100 dark:bg-slate-800/50" />
    </nav>
  )
}
