/** @format */

'use client'

import React from 'react'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Zap, type LucideProps } from 'lucide-react'
import { ServiceItem } from '@/types/service'
import { cn } from '@/lib/utils'

/**
 * [STRATEGY: ROW-BASED OPERATIONAL UI v5.2]
 * - Type Safety: ปรับปรุงการตรวจสอบ React Element เพื่อความชัวร์ในการทำ Icon Cloning
 * - Design: เพิ่ม 'Glass-morphism' effect เล็กน้อยในส่วนของ Icon Terminal
 * - Interaction: ปรับความเร็วของ Active Indicator ให้ดู 'Responsive' มากขึ้น
 */

interface ServiceListRowProps {
  readonly service: ServiceItem
  readonly icon: React.ReactNode
}

export function ServiceListRow({ service, icon }: ServiceListRowProps) {
  // สร้าง Technical Code ตามมาตรฐานโปรโตคอล UN
  const serviceCode = `UN-PX${String(service.id).padStart(2, '0')}`

  return (
    <div className="group relative transition-all duration-300">
      {/* 🏛️ 1. ROW CONTAINER: Modular Interface */}
      <div
        className={cn(
          'relative grid grid-cols-1 items-center gap-6 px-8 py-8 md:grid-cols-12 md:gap-0 md:py-6',
          'bg-white transition-all duration-500 ease-out dark:bg-slate-950',
          'group-hover:bg-blue-50/40 dark:group-hover:bg-blue-900/10',
        )}
      >
        {/* 🏛️ 2. ACTIVE INDICATOR: แถบสถานะแนวตั้งที่จะตอบสนองต่อการ Hover */}
        <div
          className="absolute top-1/2 left-0 h-0 w-1.5 -translate-y-1/2 bg-blue-600 transition-all duration-300 group-hover:h-2/3"
          aria-hidden="true"
        />

        {/* A. Technical ID (Desktop Only) */}
        <div className="hidden md:col-span-1">
          <span className="font-mono text-[10px] font-black tracking-[0.25em] text-slate-300 transition-colors duration-500 group-hover:text-blue-600/60 dark:text-slate-700">
            {serviceCode}
          </span>
        </div>

        {/* B. Service Identity: Branding & Title */}
        <div className="flex items-center gap-6 md:col-span-5">
          {/* Icon Terminal Wrapper with Glow Effect */}
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white transition-all duration-500 group-hover:scale-105 group-hover:border-blue-600 group-hover:bg-blue-600 dark:border-slate-800 dark:bg-slate-900">
            <div className="z-10 text-slate-400 transition-colors duration-500 group-hover:text-white dark:text-slate-500">
              {React.isValidElement(icon)
                ? React.cloneElement(icon as React.ReactElement<LucideProps>, {
                    size: 22,
                    strokeWidth: 1.5,
                  })
                : icon}
            </div>
            {/* 🧩 Glow: สื่อถึงระบบที่กำลังทำงาน */}
            <div className="absolute inset-0 rounded-2xl bg-blue-400 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30" />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-2.5">
              <h3 className="font-sans text-[17px] font-black tracking-tight text-slate-900 uppercase dark:text-white">
                {service.title}
              </h3>
              {service.popular && (
                <div className="flex items-center gap-1.5 rounded-full bg-blue-600/10 px-2.5 py-0.5 dark:bg-blue-400/20">
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
              <p className="font-thai text-[13px] font-bold text-slate-400 transition-colors duration-500 group-hover:text-slate-700 dark:text-slate-500 dark:group-hover:text-slate-300">
                {service.tagline}
              </p>
            )}
          </div>
        </div>

        {/* C. Capability Audit Trail: Key Features (Desktop Only) */}
        <div className="hidden md:col-span-4 lg:block">
          <div className="flex flex-col gap-2.5 border-l border-slate-100 pl-8 dark:border-slate-900">
            {service.features?.slice(0, 2).map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-3 opacity-40 transition-all duration-500 group-hover:opacity-100"
              >
                <CheckCircle2 size={12} className="text-blue-600" />
                <span className="font-thai text-[12px] font-bold text-slate-500 dark:text-slate-400 dark:group-hover:text-slate-200">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* D. Execution Protocol: Interactive Trigger */}
        <div className="flex items-center justify-between md:col-span-2 md:justify-end">
          {/* Mobile Ref Badge */}
          <div className="inline-flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3 py-1.5 md:hidden dark:border-slate-800 dark:bg-slate-900">
            <span className="font-mono text-[9px] font-black tracking-widest text-slate-400 uppercase">
              {serviceCode}
            </span>
          </div>

          <Link
            href={`/services/${service.slug}`}
            className={cn(
              'group/btn relative flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300',
              'bg-slate-900 text-white hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-600 dark:hover:text-white',
              'shadow-xl shadow-transparent group-hover:shadow-blue-500/20',
            )}
            aria-label={`Execute Protocol: ${service.title}`}
          >
            <ArrowRight
              size={20}
              strokeWidth={2.5}
              className="transition-transform duration-500 group-hover/btn:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
