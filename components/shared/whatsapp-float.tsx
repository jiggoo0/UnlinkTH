/** @format */

'use client'

import React from 'react'
import { MessageCircle, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * [STRATEGY: THE STRUCTURAL MINIMALIST v4.98]
 * - Form Factor: ใช้รูปทรงสี่เหลี่ยมตัดตรง (Hard-edge Tab) เพื่อความรู้สึก Solid และเป็นทางการ
 * - Visual Signal: ใช้ Emerald-600 แทน WhatsApp Green มาตรฐานเพื่อยกระดับความพรีเมียม
 * - UX Logic: ตำแหน่ง Bottom-32 ถูกคำนวณมาเพื่อให้ไม่ซ้อนทับกับช่องทาง Line OA หลัก
 */

export function WhatsAppFloat() {
  const WHATSAPP_NUMBER = '66800000000' // ระบบ Global Contact
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

  return (
    <aside className="pointer-events-none fixed right-0 bottom-40 z-[60] flex flex-col items-end">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'group pointer-events-auto relative flex items-center gap-5',
          'bg-white px-6 py-5 text-slate-950 shadow-[20px_0px_40px_rgba(0,0,0,0.1)] dark:bg-slate-950 dark:text-white',
          'border-y border-l-2 border-slate-950 transition-all duration-500 ease-in-out dark:border-white/20',
          'hover:bg-slate-50 hover:pl-10 dark:hover:bg-slate-900', // Sliding Effect
        )}
      >
        {/* 🏛️ Priority Indicator */}
        <div className="absolute top-0 right-0 h-full w-1.5 bg-emerald-600 transition-all group-hover:w-2" />

        <div className="flex flex-col items-start space-y-1">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            <span className="font-mono text-[9px] font-black tracking-[0.3em] text-slate-400 uppercase dark:text-slate-500">
              International_Link
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30">
              <MessageCircle size={18} strokeWidth={2.5} />
            </div>
            <span className="text-[12px] font-[1000] tracking-[0.1em] uppercase">
              Secure WhatsApp
            </span>
          </div>
        </div>

        {/* 🏛️ Interaction Trigger */}
        <div className="flex flex-col items-center border-l border-slate-100 pl-4 dark:border-white/10">
          <ArrowRight
            size={16}
            strokeWidth={3}
            className="text-emerald-600 transition-transform group-hover:translate-x-1"
          />
        </div>

        {/* HUD Micro-detail */}
        <div className="absolute right-2 -bottom-6 font-mono text-[7px] font-bold tracking-widest text-slate-300 uppercase opacity-0 transition-opacity group-hover:opacity-100 dark:text-slate-700">
          Protocol: Encrypted_P2P
        </div>
      </a>
    </aside>
  )
}
