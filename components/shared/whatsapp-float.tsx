/** @format */

'use client'

import React from 'react'
import { MessageCircle, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * [STRATEGY: THE STRUCTURAL MINIMALIST]
 * - ใช้ Rectangular Tab เพื่อความสอดคล้องกับ LineFloat
 * - เน้นความพรีเมียมด้วย Micro-label และ Status Indicator
 */

export function WhatsAppFloat() {
  const WHATSAPP_NUMBER = '66800000000' // ใส่เบอร์ในรูปแบบสากล
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

  return (
    <aside className="pointer-events-none fixed right-0 bottom-32 z-[60] flex flex-col items-end">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'group pointer-events-auto relative flex items-center gap-4',
          'bg-white px-6 py-4 text-slate-950 shadow-2xl dark:bg-slate-900 dark:text-white',
          'rounded-l-none border-y border-l border-slate-100 dark:border-slate-800',
          'transition-all duration-300 hover:-translate-x-2',
        )}
      >
        {/* Accent Bar: ใช้สี WhatsApp ที่ดูแพง (Emerald-600) */}
        <div className="absolute top-0 -left-1 h-full w-1 bg-emerald-600" />

        <div className="flex flex-col items-start">
          <span className="text-[8px] font-black tracking-[0.3em] text-slate-400 uppercase">
            Global Support
          </span>
          <div className="flex items-center gap-2">
            <MessageCircle
              size={16}
              strokeWidth={3}
              className="text-emerald-600"
            />
            <span className="text-[11px] font-black tracking-[0.2em] uppercase">
              WhatsApp
            </span>
          </div>
        </div>

        <ArrowRight
          size={14}
          className="-translate-x-2 text-emerald-600 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
        />
      </a>
    </aside>
  )
}
