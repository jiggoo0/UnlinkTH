/** @format */

'use client'

import React from 'react'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ServiceItem } from '@/types/service'

/**
 * [STRATEGY: ROW-BASED OPERATIONAL UI]
 * - ดีไซน์แบบรายการปฏิบัติงานทางการแพทย์/เทคนิค (Clinical/Technical Audit Style)
 * - เน้นความรวดเร็วในการสแกนข้อมูล (Fast-scanning)
 */

type Props = {
  service: ServiceItem
  icon: React.ReactNode
  index: number
}

export function ServiceListRow({ service, icon, index }: Props) {
  // ใช้ ID จาก Data จริงมาเป็นรหัสอ้างอิง
  const serviceCode = `UN-${service.id}`

  return (
    <div className="group relative bg-white transition-all duration-300 hover:z-10 hover:bg-slate-50 md:border-b md:border-slate-100 dark:bg-slate-950 dark:hover:bg-slate-900/50 dark:md:border-slate-900">
      {/* 🏛️ Subtle Accent Border (Left) */}
      <div className="absolute top-0 left-0 h-full w-0 bg-blue-600 opacity-0 transition-all duration-300 group-hover:w-1 group-hover:opacity-100" />

      {/* 🏛️ Content Layout */}
      <div className="container mx-auto grid grid-cols-1 items-center gap-6 px-6 py-8 md:grid-cols-12 md:gap-0 md:py-6">
        {/* 1. Technical ID Code */}
        <div className="hidden md:col-span-1">
          <span className="text-[10px] font-black tracking-[0.25em] text-slate-300 transition-colors group-hover:text-blue-600 dark:text-slate-700">
            {serviceCode}
          </span>
        </div>

        {/* 2. Primary Service Detail */}
        <div className="flex items-center gap-5 md:col-span-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-slate-50 text-slate-400 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white dark:bg-slate-900 dark:text-slate-600">
            {icon}
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <h3 className="text-[15px] font-black tracking-tight text-slate-950 uppercase dark:text-white">
                {service.title}
              </h3>
              {service.popular && (
                <ShieldCheck
                  size={12}
                  className="animate-pulse text-blue-500"
                />
              )}
            </div>
            {service.subtitle && (
              <p className="font-thai text-[11px] font-medium tracking-wide text-slate-400 uppercase dark:text-slate-500">
                {service.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* 3. Scope of Service (Hidden on small mobile) */}
        <div className="hidden md:col-span-4 lg:block">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {service.features?.slice(0, 2).map((feature, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2
                  size={12}
                  className="text-blue-600 opacity-40 transition-opacity group-hover:opacity-100"
                />
                <span className="font-thai text-[11px] font-medium text-slate-400 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Action Link */}
        <div className="flex items-center justify-between md:col-span-2 md:justify-end">
          {/* Mobile Only Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 md:hidden dark:bg-blue-900/20">
            <span className="text-[9px] font-black tracking-widest text-blue-600 uppercase">
              Operational
            </span>
          </div>

          <Link
            href={`/services/${service.slug}`}
            className="flex h-12 w-12 items-center justify-center border border-slate-100 transition-all hover:bg-slate-950 hover:text-white md:group-hover:translate-x-1 dark:border-slate-800 dark:hover:bg-white dark:hover:text-slate-950"
            aria-label={`ดูรายละเอียดบริการ ${service.title}`}
          >
            <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </div>
  )
}
