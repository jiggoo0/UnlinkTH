/** @format */

'use client'

import React from 'react'
import { MessageCircle, ArrowRight, ShieldCheck, Activity } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * [STRATEGY: THE STRUCTURAL MINIMALIST v5.0]
 * - Visual Identity: ใช้ Brutalist Rectangular Tab ที่เน้นความกว้างและการเข้ามุมที่คมชัด
 * - Interaction: ใช้ระบบ "X-Axis Offset" เมื่อ Hover เพื่อสร้างการตอบสนองแบบ Tactical
 * - Feedback: เพิ่ม Status Dashboard เล็กๆ ด้านล่างเพื่อย้ำสถานะ Operational Readiness
 */

export function LineFloat() {
  const LINE_URL = 'https://lin.ee/Eu9Td5a'

  return (
    <aside className="group/aside pointer-events-none fixed right-0 bottom-12 z-[60] flex flex-col items-end">
      {/* 🏛️ 1. MAIN ACTION TAB */}
      <a
        href={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'group pointer-events-auto relative flex items-center gap-6',
          'bg-slate-950 px-8 py-5 text-white shadow-[0px_20px_50px_rgba(0,0,0,0.3)] dark:bg-slate-900',
          'rounded-l-2xl border-y border-l border-white/10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
          'hover:-translate-x-6 hover:bg-blue-600 hover:shadow-blue-500/20 dark:hover:bg-blue-700',
        )}
      >
        {/* Security Accent Bar */}
        <div className="absolute top-0 left-0 h-full w-1.5 rounded-l-2xl bg-blue-500 transition-all group-hover:bg-white" />

        <div className="flex flex-col items-start gap-1.5">
          {/* Metadata Header */}
          <div className="flex items-center gap-2">
            <ShieldCheck
              size={12}
              className="text-blue-400 group-hover:text-white"
            />
            <span className="font-mono text-[9px] font-black tracking-[0.4em] text-white/40 uppercase group-hover:text-white/70">
              Protocol_Link
            </span>
          </div>

          {/* Main Identity */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <MessageCircle
                size={22}
                strokeWidth={2.5}
                className="text-white"
              />
              <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full border-2 border-slate-950 bg-emerald-500 group-hover:border-blue-600" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-sans text-[14px] font-black tracking-[0.05em] uppercase">
                Official Support
              </span>
              <span className="font-mono text-[10px] font-bold text-blue-400 group-hover:text-blue-100">
                ID: @204uuzew
              </span>
            </div>
          </div>
        </div>

        {/* Interaction Dial */}
        <div className="ml-2 flex items-center border-l border-white/10 pl-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 transition-all group-hover:bg-white group-hover:text-blue-600">
            <ArrowRight
              size={20}
              strokeWidth={3}
              className="transition-transform group-hover:translate-x-1"
            />
          </div>
        </div>
      </a>

      {/* 🏛️ 2. OPERATIONAL STATUS TELEMETRY */}
      <div className="mt-4 mr-4 flex flex-col items-end gap-2 transition-all duration-500 group-hover/aside:-translate-x-6">
        <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white/90 px-4 py-2 shadow-sm backdrop-blur-xl dark:border-white/5 dark:bg-slate-950/80">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[9px] font-black tracking-widest text-slate-500 uppercase dark:text-slate-400">
              UPLINK: <span className="text-emerald-600">ACTIVE</span>
            </span>
          </div>

          <div className="h-3 w-[1px] bg-slate-200 dark:bg-white/10" />

          <div className="flex items-center gap-1.5 text-slate-400">
            <Activity size={10} />
            <span className="font-mono text-[9px] font-bold">
              LATENCY: 12ms
            </span>
          </div>
        </div>
      </div>
    </aside>
  )
}
