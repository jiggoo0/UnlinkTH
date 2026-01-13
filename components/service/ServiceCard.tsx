/** @format */

'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, Fingerprint, type LucideIcon } from 'lucide-react'
import { ServiceItem } from '@/types/service'
import { cn } from '@/lib/utils'

/**
 * [STRATEGY: INSTITUTIONAL SERVICE CARD v5.3]
 * - Fix Lint: ลบการนำเข้า 'ShieldCheck' ที่ไม่ได้ใช้งาน (Unused Variable)
 * - Immutability: คงสถานะ 'readonly' Props สำหรับ Data Integrity
 * - Performance: ใช้ transform-gpu เพื่อรีดประสิทธิภาพ Animation บน Mobile Device
 */

interface ServiceCardProps {
  readonly service: ServiceItem
  readonly icon: LucideIcon
  readonly className?: string
}

export function ServiceCard({
  service,
  icon: Icon,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        'group relative flex h-full transform-gpu flex-col overflow-hidden rounded-[2.5rem] border border-slate-100 bg-white p-10 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]',
        'hover:border-blue-600/30 hover:shadow-[0_40px_80px_-16px_rgba(0,112,243,0.15)]',
        'dark:border-slate-800 dark:bg-slate-950 dark:hover:border-blue-500/40',
        className,
      )}
    >
      {/* 🏛️ 1. TOP INDICATOR: Status bar active on hover */}
      <div
        className="absolute top-0 left-0 h-[4px] w-0 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-full"
        aria-hidden="true"
      />

      {/* 🏛️ 2. METADATA: Security Tracking Interface */}
      <div className="mb-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-900">
            <Fingerprint size={16} className="text-blue-600/50" />
          </div>
          <span className="font-mono text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">
            REF-{service.id.padStart(2, '0')}
          </span>
        </div>
        <div className="translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 dark:bg-emerald-500/10">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            <span className="font-mono text-[8px] font-black text-emerald-600 uppercase dark:text-emerald-400">
              Secure
            </span>
          </div>
        </div>
      </div>

      {/* 🏛️ 3. ICONOGRAPHY: Tactile Squircle Design */}
      <div className="relative mb-8 flex h-20 w-20 items-center justify-center rounded-[1.75rem] border border-slate-100 bg-white shadow-sm transition-all duration-700 group-hover:scale-110 group-hover:bg-blue-600 group-hover:shadow-[0_20px_40px_-8px_rgba(37,99,235,0.3)] dark:border-slate-800 dark:bg-slate-900">
        <div className="z-10 text-blue-600 transition-colors duration-500 group-hover:text-white">
          <Icon size={34} strokeWidth={1.25} />
        </div>
      </div>

      {/* 🏛️ 4. CONTENT CORE: Information Hierarchy */}
      <div className="flex-grow space-y-4">
        <h3 className="font-sans text-2xl font-black tracking-tight text-slate-900 uppercase md:text-3xl dark:text-white">
          {service.title}
        </h3>
        <p className="font-thai line-clamp-3 text-[15px] leading-relaxed font-medium text-slate-500 transition-colors duration-500 group-hover:text-slate-700 dark:text-slate-400 dark:group-hover:text-slate-200">
          {service.description}
        </p>
      </div>

      {/* 🏛️ 5. ACTION PROTOCOL: Linkage Footer */}
      <div className="mt-12 border-t border-slate-50 pt-8 dark:border-slate-800/50">
        <Link
          href={`/services/${service.slug}`}
          className="group/link flex items-center justify-between outline-none"
        >
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[9px] font-black tracking-[0.25em] text-blue-600 uppercase">
              Access Protocol
            </span>
            <span className="font-thai text-[14px] font-bold text-slate-900 transition-colors group-hover/link:text-blue-600 dark:text-white">
              ตรวจสอบกระบวนการทำงาน
            </span>
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-100 bg-slate-50 transition-all duration-500 group-hover/link:border-blue-600 group-hover/link:bg-blue-600 group-hover/link:text-white dark:border-slate-800 dark:bg-slate-900">
            <ArrowUpRight
              size={24}
              className="transition-transform duration-500 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
            />
          </div>
        </Link>
      </div>
    </div>
  )
}
