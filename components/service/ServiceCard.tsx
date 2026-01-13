/** @format */

'use client'

import React from 'react'
import Link from 'next/link'
import {
  ArrowUpRight,
  ShieldCheck,
  Fingerprint,
  type LucideIcon,
} from 'lucide-react'
import { ServiceItem } from '@/types/service'
import { cn } from '@/lib/utils'

/**
 * [STRATEGY: INSTITUTIONAL SERVICE CARD v5.0]
 * - Fix: Resolved 'jsx-no-comment-textnodes' error by moving comments to JS expressions.
 * - UX: ใช้ Ease-out-expo transition เพื่อความรู้สึกที่ Premium และ Responsive
 * - Visual: แถบบ่งชี้สถานะด้านบนสื่อถึงการ 'Active' ระบบเมื่อมีการ Hover
 */

interface ServiceCardProps {
  service: ServiceItem
  icon: LucideIcon
  className?: string
}

export function ServiceCard({
  service,
  icon: Icon,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-10 transition-all duration-700',
        'hover:border-blue-600/20 hover:shadow-[0_32px_64px_-16px_rgba(0,112,243,0.12)] dark:border-slate-800 dark:bg-slate-950',
        className,
      )}
    >
      {/* 🏛️ 1. TOP INDICATOR: แถบสถานะที่จะ Active เมื่อ Hover */}
      <div className="absolute top-0 right-0 h-[3px] w-0 bg-blue-600 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-full" />

      {/* 🏛️ 2. METADATA: Internal Reference Tracking */}
      <div className="mb-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-900">
            <Fingerprint size={14} className="text-blue-600/60" />
          </div>
          <span className="font-mono text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">
            REF-{service.id.padStart(2, '0')}
            {/* Note: Internal Reference ID */}
          </span>
        </div>
        <div className="translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ShieldCheck size={18} className="text-emerald-500" />
        </div>
      </div>

      {/* 🏛️ 3. ICONOGRAPHY: Squircle Design Core */}
      <div className="relative mb-8 flex h-20 w-20 items-center justify-center rounded-[1.5rem] border border-slate-100 bg-white shadow-sm transition-all duration-700 group-hover:bg-blue-600 group-hover:shadow-[0_12px_24px_rgba(37,99,235,0.25)] dark:border-slate-800 dark:bg-slate-900">
        <div className="z-10 text-blue-600 transition-colors duration-500 group-hover:text-white">
          <Icon size={32} strokeWidth={1.25} />
        </div>
      </div>

      {/* 🏛️ 4. CONTENT AREA */}
      <div className="flex-grow space-y-4">
        <h3 className="font-sans text-2xl font-black tracking-tight text-slate-900 uppercase dark:text-white">
          {service.title}
        </h3>
        <p className="font-thai line-clamp-3 text-[15px] leading-relaxed font-medium text-slate-500 transition-colors duration-500 group-hover:text-slate-700 dark:text-slate-400 dark:group-hover:text-slate-200">
          {service.description}
        </p>
      </div>

      {/* 🏛️ 5. ACCESS PROTOCOL: Action Footer */}
      <div className="mt-12 border-t border-slate-50 pt-8 dark:border-slate-900">
        <Link
          href={`/services/${service.slug}`}
          className="group/link flex items-center justify-between"
        >
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[9px] font-black tracking-[0.25em] text-blue-600 uppercase">
              Access Protocol
            </span>
            <span className="font-thai text-[13px] font-bold text-slate-900 dark:text-white">
              ตรวจสอบกระบวนการทำงาน
            </span>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 transition-all duration-500 group-hover/link:border-blue-600 group-hover/link:bg-blue-600 group-hover/link:text-white dark:border-slate-800 dark:bg-slate-900">
            <ArrowUpRight
              size={20}
              className="transition-transform duration-500 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            />
          </div>
        </Link>
      </div>
    </div>
  )
}
