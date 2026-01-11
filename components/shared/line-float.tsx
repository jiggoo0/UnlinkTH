/** @format */

'use client'

import React from 'react'
import { MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * [STRATEGY: THE STRUCTURAL MINIMALIST]
 * - ใช้ Rectangular Tab เพื่อความเป็นระเบียบระดับที่ปรึกษา (Consultancy Style)
 * - ปรับปรุงข้อมูลเป็น Line OA จริง: @204uuzew
 * - เพิ่มสถานะ Encryption เพื่อย้ำเรื่องความปลอดภัย (Privacy-First)
 */

export function LineFloat() {
  // ✅ เปลี่ยนเป็น Line OA จริงของคุณ
  const LINE_URL = 'https://lin.ee/Eu9Td5a'

  return (
    <aside className="pointer-events-none fixed right-0 bottom-12 z-[60] flex flex-col items-end">
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'group pointer-events-auto relative flex items-center gap-5',
          'bg-slate-950 px-6 py-5 text-white shadow-[0_20px_50px_rgba(0,0,0,0.3)] dark:bg-blue-700',
          'rounded-l-2xl border-y border-l border-white/10 transition-all duration-500',
          'hover:-translate-x-3 hover:bg-blue-600 dark:hover:bg-blue-600',
        )}
      >
        {/* Technical Accent: เส้นขอบด้านซ้ายแบบเรืองแสงเมื่อ Hover */}
        <div className="absolute top-0 left-0 h-full w-1 rounded-l-2xl bg-blue-500 opacity-0 transition-opacity group-hover:opacity-100" />

        <div className="flex flex-col items-start gap-1">
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={10} className="text-emerald-400" />
            <span className="text-[8px] font-black tracking-[0.3em] text-white/50 uppercase">
              Encrypted Support
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <MessageCircle size={18} strokeWidth={2.5} className="text-white" />
            <div className="flex flex-col">
              <span className="text-[12px] leading-none font-black tracking-[0.15em] uppercase">
                Consultation
              </span>
              <span className="mt-1 text-[9px] font-medium text-white/40">
                Line: @204uuzew
              </span>
            </div>
          </div>
        </div>

        <div className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 transition-colors group-hover:bg-white/20">
          <ArrowRight
            size={14}
            className="-translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
          />
        </div>
      </a>

      {/* Real-time Status Indicator */}
      <div className="mt-3 mr-4 flex items-center gap-2 rounded-full border border-slate-100 bg-white/80 px-3 py-1.5 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/50">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
        </span>
        <span className="text-[9px] font-black tracking-tighter text-slate-500 uppercase dark:text-slate-400">
          Secured Connection:{' '}
          <span className="text-emerald-600 dark:text-emerald-500">Active</span>
        </span>
      </div>
    </aside>
  )
}
