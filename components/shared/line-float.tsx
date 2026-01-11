/** @format */

'use client'

import React from 'react'
import { MessageCircle, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * [STRATEGY: THE STRUCTURAL MINIMALIST]
 * - ใช้ Rectangular Tab เพื่อความเป็นระเบียบระดับสถาบัน
 * - เพิ่ม Label ที่ชัดเจนเพื่อเพิ่ม Conversion Rate (CTR)
 */

export function LineFloat() {
  const LINE_URL = 'https://line.me/ti/p/@unlinkth' // อ้างอิงตามชื่อโปรเจกต์

  return (
    <aside className="pointer-events-none fixed right-0 bottom-12 z-[60] flex flex-col items-end">
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'group pointer-events-auto relative flex items-center gap-4',
          'bg-slate-950 px-6 py-4 text-white shadow-2xl dark:bg-blue-600',
          'rounded-l-none border-y border-l border-white/10 transition-all duration-300',
          'hover:-translate-x-2 hover:bg-blue-600 dark:hover:bg-blue-700',
        )}
      >
        {/* Decorative Badge Effect */}
        <div className="absolute top-0 -left-1 h-full w-1 bg-white/20" />

        <div className="flex flex-col items-start">
          <span className="text-[8px] font-black tracking-[0.3em] text-white/50 uppercase">
            Official Channel
          </span>
          <div className="flex items-center gap-2">
            <MessageCircle size={16} strokeWidth={3} className="text-white" />
            <span className="text-[11px] font-black tracking-[0.2em] uppercase">
              Line Support
            </span>
          </div>
        </div>

        <ArrowRight
          size={14}
          className="-translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
        />
      </a>

      {/* Optional: Status Indicator */}
      <div className="mt-2 mr-2 flex items-center gap-2 px-2">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
        </span>
        <span className="text-[8px] font-bold tracking-tighter text-slate-400 uppercase">
          Online
        </span>
      </div>
    </aside>
  )
}
