/** @format */

'use client'

import React from 'react'
import { Check, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

/**
 * [STRATEGY: PRICING TIER v5.1]
 * - Fix: Corrected JSX braces nesting error at line 92.
 * - Cleanup: Removed unused 'Lock' import to resolve lint warnings.
 * - Design: Squircle-shaped buttons and tactical typography.
 */

interface PricingTierProps {
  name: string
  price: string
  unit?: string
  description: string
  features: string[]
  highlight?: boolean
  ctaText?: string
  ctaLink?: string
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
        'relative flex flex-col overflow-hidden rounded-[2rem] p-8 transition-all duration-500',
        highlight
          ? 'bg-slate-950 text-white shadow-2xl ring-2 ring-blue-600 dark:bg-white dark:text-slate-950'
          : 'border border-slate-100 bg-white text-slate-900 hover:border-blue-200 dark:border-slate-800 dark:bg-slate-900 dark:text-white',
      )}
    >
      {/* 🏛️ 1. TIER HEADER */}
      <div className="mb-8 space-y-4">
        <h3
          className={cn(
            'font-mono text-[10px] font-black tracking-[0.4em] uppercase',
            highlight ? 'text-blue-400' : 'text-slate-400',
          )}
        >
          {name}
        </h3>

        <div className="flex flex-col gap-1">
          <div className="flex items-baseline gap-2">
            <span className="font-sans text-4xl font-black tracking-tighter">
              {price}
            </span>
            {unit && (
              <span className="font-mono text-[12px] font-bold tracking-widest text-slate-400 uppercase">
                {unit}
              </span>
            )}
          </div>
          <p className="font-thai text-[14px] font-bold opacity-60">
            {description}
          </p>
        </div>
      </div>

      {/* 🏛️ 2. FEATURE LIST */}
      <div className="mb-10 flex-1 space-y-4">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3">
            <div
              className={cn(
                'mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full',
                highlight
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
              )}
            >
              <Check size={10} strokeWidth={4} />
            </div>
            <span className="font-thai text-[13px] leading-tight font-bold opacity-80">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* 🏛️ 3. EXECUTION TRIGGER */}
      <Link
        href={ctaLink}
        className={cn(
          'group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl py-4 text-[13px] font-black tracking-widest uppercase transition-all duration-300',
          highlight
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-slate-900 text-white hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-600 dark:hover:text-white',
        )}
      >
        <span className="relative z-10">{ctaText}</span>
        <ArrowRight
          size={16}
          className="relative z-10 transition-transform group-hover:translate-x-1"
        />
      </Link>
    </div>
  )
}
