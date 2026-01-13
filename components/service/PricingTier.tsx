/** @format */

'use client'

import React from 'react'
import { Check, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

/**
 * [STRATEGY: PRICING TIER v5.2]
 * - Fix: ปรับปรุง Contrast Ratio ใน Dark Mode สำหรับ Highlighted Card
 * - UI: เพิ่มระบบ 'Active State' และ Shadow Layer เพื่อความลึกของวัตถุ
 * - Typography: ใช้ font-thai สำหรับคำอธิบายเนื้อหา และ font-mono สำหรับ Meta-data
 */

interface PricingTierProps {
  readonly name: string
  readonly price: string
  readonly unit?: string
  readonly description: string
  readonly features: readonly string[]
  readonly highlight?: boolean
  readonly ctaText?: string
  readonly ctaLink?: string
}

export function PricingTier({
  name,
  price,
  unit,
  description,
  features,
  highlight = false,
  ctaText = 'Get Started',
  ctaLink = '#',
}: PricingTierProps) {
  return (
    <div
      className={cn(
        'relative flex flex-col overflow-hidden rounded-[2.5rem] p-10 transition-all duration-500',
        highlight
          ? 'bg-slate-950 text-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] ring-2 ring-blue-600 dark:bg-white dark:text-slate-950'
          : 'border border-slate-100 bg-white text-slate-900 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/50 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:hover:border-slate-700 dark:hover:shadow-none',
      )}
    >
      {/* 🏛️ 1. TIER HEADER: Identification & Valuation */}
      <div className="mb-10 space-y-5">
        <h3
          className={cn(
            'font-mono text-[10px] font-black tracking-[0.4em] uppercase',
            highlight ? 'text-blue-400' : 'text-blue-600 dark:text-blue-400',
          )}
        >
          {name}
        </h3>

        <div className="flex flex-col gap-2">
          <div className="flex items-baseline gap-2">
            <span className="font-sans text-5xl font-black tracking-tighter">
              {price}
            </span>
            {unit && (
              <span className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase opacity-40">
                {unit}
              </span>
            )}
          </div>
          <p className="font-thai text-[15px] leading-relaxed font-bold opacity-60">
            {description}
          </p>
        </div>
      </div>

      {/* 🏛️ 2. FEATURE MATRIX: Tactical Capabilities */}
      <div className="mb-12 flex-1 space-y-5">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start gap-4">
            <div
              className={cn(
                'mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                highlight
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
              )}
            >
              <Check size={12} strokeWidth={4} />
            </div>
            <span className="font-thai text-[14px] leading-snug font-bold opacity-80">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* 🏛️ 3. EXECUTION TRIGGER: Conversion Point */}
      <Link
        href={ctaLink}
        className={cn(
          'group relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl py-5 text-[13px] font-black tracking-widest uppercase transition-all duration-300',
          highlight
            ? 'bg-blue-600 text-white shadow-[0_8px_20px_-4px_rgba(37,99,235,0.4)] hover:bg-blue-700'
            : 'bg-slate-900 text-white hover:bg-blue-600 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-blue-600 dark:hover:text-white',
        )}
      >
        <span className="relative z-10">{ctaText}</span>
        <ArrowRight
          size={18}
          className="relative z-10 transition-transform group-hover:translate-x-1.5"
        />

        {/* Subtle Shine Effect on Hover */}
        <div className="absolute inset-0 z-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
      </Link>
    </div>
  )
}
