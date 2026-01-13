/** @format */

'use client'

import React from 'react'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Zap, type LucideProps } from 'lucide-react'
import { ServiceItem } from '@/types/service'
import { cn } from '@/lib/utils'

/**
 * [STRATEGY: ROW-BASED OPERATIONAL UI v5.0]
 * - Fix: Resolved 'Unexpected any' by using 'LucideProps' for icon cloning.
 * - Performance: ใช้ React.isValidElement ร่วมกับ Type narrowing ที่ปลอดภัย
 * - UI Consistency: ปรับ Radius ของ Module เป็น 16px (2xl) ตามระบบ Component ล่าสุด
 */

type Props = {
  service: ServiceItem
  icon: React.ReactNode
}

export function ServiceListRow({ service, icon }: Props) {
  const serviceCode = `UN-PX${String(service.id).padStart(2, '0')}`

  return (
    <div className="group relative transition-all duration-300">
      {/* 🏛️ 1. ROW CONTAINER: ออกแบบให้เหมือนชิ้นส่วน Module ในระบบหลัก */}
      <div
        className={cn(
          'relative grid grid-cols-1 items-center gap-6 px-8 py-8 md:grid-cols-12 md:gap-0 md:py-6',
          'bg-white transition-all duration-300 dark:bg-slate-950',
          'group-hover:bg-blue-50/40 dark:group-hover:bg-blue-900/10',
        )}
      >
        {/* 🏛️ 2. ACTIVE INDICATOR: แถบสถานะแนวตั้งที่จะขยายเมื่อ Hover */}
        <div className="absolute top-1/2 left-0 h-0 w-1 -translate-y-1/2 bg-blue-600 transition-all duration-500 group-hover:h-3/5" />

        {/* A. Technical ID (Desktop Only) */}
        <div className="hidden md:col-span-1">
          <span className="font-mono text-[10px] font-black tracking-[0.2em] text-slate-300 transition-colors duration-500 group-hover:text-blue-600 dark:text-slate-700">
            {serviceCode}
          </span>
        </div>

        {/* B. Service Identity: Icon & Branding */}
        <div className="flex items-center gap-6 md:col-span-5">
          {/* Icon Terminal Wrapper */}
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white transition-all duration-500 group-hover:border-blue-600 group-hover:bg-blue-600 dark:border-slate-800 dark:bg-slate-900">
            <div className="z-10 text-slate-400 transition-colors duration-500 group-hover:text-white dark:text-slate-500">
              {React.isValidElement(icon)
                ? React.cloneElement(icon as React.ReactElement<LucideProps>, {
                    size: 22,
                    strokeWidth: 1.5,
                  })
                : icon}
            </div>
            {/* Background Glow Effect */}
            <div className="absolute inset-0 rounded-xl bg-blue-400 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-25" />
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <h3 className="font-sans text-[17px] font-black tracking-tight text-slate-900 uppercase dark:text-white">
                {service.title}
              </h3>
              {service.popular && (
                <div className="flex items-center gap-1 rounded-full bg-blue-600/10 px-2.5 py-0.5 dark:bg-blue-400/20">
                  <Zap
                    size={10}
                    className="fill-blue-600 text-blue-600 dark:fill-blue-400"
                  />
                  <span className="text-[9px] font-black tracking-widest text-blue-600 uppercase dark:text-blue-400">
                    Priority
                  </span>
                </div>
              )}
            </div>
            {service.tagline && (
              <p className="font-thai text-[13px] font-bold text-slate-400 transition-colors duration-500 group-hover:text-blue-600/70 dark:text-slate-500">
                {service.tagline}
              </p>
            )}
          </div>
        </div>

        {/* C. Capability Audit Trail (Desktop Only) */}
        <div className="hidden md:col-span-4 lg:block">
          <div className="flex flex-col gap-2 pl-6">
            {service.features?.slice(0, 2).map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-3 opacity-60 transition-opacity duration-300 group-hover:opacity-100"
              >
                <CheckCircle2 size={12} className="text-blue-600" />
                <span className="font-thai text-[12px] font-bold text-slate-500 transition-colors group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-slate-200">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* D. Execution Protocol: Trigger Button */}
        <div className="flex items-center justify-between md:col-span-2 md:justify-end">
          {/* Mobile-only status badge */}
          <div className="inline-flex items-center gap-2 rounded-lg border border-blue-100 bg-blue-50 px-3 py-1.5 md:hidden dark:border-blue-900/30 dark:bg-blue-900/10">
            <span className="font-mono text-[9px] font-black tracking-widest text-blue-600 uppercase">
              ID: {serviceCode}
            </span>
          </div>

          <Link
            href={`/services/${service.slug}`}
            className={cn(
              'flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300',
              'border-2 border-slate-900 bg-transparent text-slate-900 hover:bg-slate-900 hover:text-white',
              'dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-slate-950',
              'shadow-lg shadow-transparent group-hover:shadow-blue-500/15',
            )}
            aria-label={`Execute Protocol: ${service.title}`}
          >
            <ArrowRight
              size={20}
              strokeWidth={2.5}
              className="transition-transform duration-500 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
