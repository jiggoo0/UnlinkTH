/** @format */

'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import { ServiceItem } from '@/types/service' // เปลี่ยนเป็น ServiceItem ตามที่เราย้ายไป
import { cn } from '@/lib/utils'

/**
 * [STRATEGY: ARCHITECTURAL SERVICE CARD]
 * - Interaction: ใช้การขยายของเส้น (Line Expansion) เพื่อสื่อถึงการเติบโตและการแก้ไข
 * - Design: เน้นความคมชัดของขอบ (Sharp Edges) เพื่อความดูเป็นทางการ
 */

interface ServiceCardProps {
  service: ServiceItem
  icon: React.ReactNode
  className?: string
}

export function ServiceCard({ service, icon, className }: ServiceCardProps) {
  return (
    <div
      className={cn(
        'group relative flex h-full flex-col border border-slate-100 bg-white p-10 transition-all duration-500',
        'hover:z-10 hover:-translate-y-2 hover:border-blue-600 dark:border-slate-800 dark:bg-slate-950 dark:hover:border-blue-500',
        'hover:shadow-[0_32px_64px_-16px_rgba(37,99,235,0.12)]',
        className,
      )}
    >
      {/* 🏛️ Decorative Line: ขยายจากขวาไปซ้ายเมื่อ Hover */}
      <div className="absolute top-0 right-0 h-1 w-0 bg-blue-600 transition-all duration-500 ease-in-out group-hover:w-full" />

      {/* 🏛️ Icon Section */}
      <div className="relative mb-10 flex h-16 w-16 items-center justify-center border border-slate-100 bg-slate-50 transition-all duration-500 group-hover:border-blue-600 group-hover:bg-blue-600 dark:border-slate-800 dark:bg-slate-900">
        <div className="z-10 text-slate-950 transition-colors duration-500 group-hover:text-white dark:text-slate-400">
          {icon}
        </div>
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-blue-500 opacity-0 blur-2xl transition-opacity group-hover:opacity-20" />
      </div>

      {/* 🏛️ Text Content */}
      <div className="flex-grow">
        <div className="mb-4 flex items-center gap-3">
          <h3 className="text-xl leading-tight font-black tracking-tighter text-slate-950 uppercase dark:text-white">
            {service.title}
          </h3>
          <div className="-translate-x-2 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
            <ShieldCheck size={16} className="text-blue-600" />
          </div>
        </div>

        <p className="font-thai mb-8 line-clamp-3 text-[14px] leading-relaxed text-slate-500 transition-colors group-hover:text-slate-600 dark:text-slate-400 dark:group-hover:text-slate-300">
          {service.description}
        </p>
      </div>

      {/* 🏛️ Footer: Navigation */}
      <div className="mt-auto border-t border-slate-50 pt-6 dark:border-slate-900">
        <Link
          href={`/services/${service.slug}`}
          className="group/link inline-flex items-center gap-4 text-[11px] font-black tracking-[0.3em] text-slate-400 uppercase transition-all hover:text-blue-600 dark:text-slate-500 dark:hover:text-blue-400"
        >
          <span className="relative">
            Review Protocol
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover/link:w-full" />
          </span>

          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-100 bg-white transition-all duration-500 group-hover/link:rotate-45 group-hover/link:border-blue-600 group-hover/link:bg-blue-600 group-hover/link:text-white dark:border-slate-800 dark:bg-slate-900">
            <ArrowUpRight size={14} />
          </div>
        </Link>
      </div>
    </div>
  )
}
