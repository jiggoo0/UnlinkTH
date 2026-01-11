/** @format */

'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Check, ShieldCheck, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

/**
 * [STRATEGY: ARCHITECTURAL PRICING CARD]
 * - ดีไซน์แบบห้องนิรภัย (Vault Design): เน้นความปลอดภัยและพื้นที่ที่จำกัด
 * - Interaction: ใช้ Transition ที่นุ่มนวลเพื่อสื่อถึงความใส่ใจ (Personal Touch)
 */

export interface PricingTierProps {
  name: string
  description?: string
  price: string
  features: string[]
  isHighlighted?: boolean
  ctaText?: string
  ctaHref?: string
}

export const PricingTier = ({
  name,
  description,
  price,
  isHighlighted = false,
  features,
  ctaText = 'เริ่มดำเนินการ',
  ctaHref = '/contact',
}: PricingTierProps) => {
  return (
    <div
      className={cn(
        'group relative flex h-full flex-col p-10 transition-all duration-500',
        'border border-slate-100 bg-white dark:border-slate-800 dark:bg-slate-950',
        isHighlighted
          ? 'z-10 scale-[1.02] shadow-[0_40px_80px_-15px_rgba(37,99,235,0.1)] ring-1 ring-blue-600'
          : 'hover:border-slate-300 dark:hover:border-slate-700',
      )}
    >
      {/* 🏛️ Badge: Recommended Protocol */}
      {isHighlighted && (
        <div className="absolute -top-3 left-10 bg-blue-600 px-4 py-1.5 shadow-lg shadow-blue-500/20">
          <span className="text-[9px] font-black tracking-[0.25em] text-white uppercase">
            Recommended Protocol
          </span>
        </div>
      )}

      {/* 🏛️ Header: Identity */}
      <div className="mb-10">
        <h3 className="mb-3 text-xl font-black tracking-tight text-slate-950 uppercase dark:text-white">
          {name}
        </h3>
        {description && (
          <p className="font-thai min-h-[40px] text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">
            {description}
          </p>
        )}
      </div>

      {/* 🏛️ Pricing: Logic */}
      <div className="mb-10 border-b border-slate-50 pb-10 dark:border-slate-900">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-black tracking-tighter text-slate-950 uppercase dark:text-white">
            {price}
          </span>
          {price.includes('xx') && (
            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
              Est.
            </span>
          )}
        </div>
      </div>

      {/* 🏛️ Features: Scope */}
      <ul className="mb-12 flex-grow space-y-5">
        {features.map((feature, index) => (
          <li key={index} className="group/item flex items-start gap-4">
            <div
              className={cn(
                'mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors',
                isHighlighted
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-400 dark:bg-slate-900',
              )}
            >
              <Check className="h-3 w-3" strokeWidth={3} />
            </div>
            <span className="font-thai text-[14px] leading-snug text-slate-600 transition-colors group-hover/item:text-slate-950 dark:text-slate-400 dark:group-hover/item:text-slate-200">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* 🏛️ CTA: Commitment */}
      <div className="mt-auto pt-6">
        <Button
          asChild
          className={cn(
            'group h-16 w-full rounded-none text-[11px] font-black tracking-[0.25em] uppercase transition-all duration-300',
            isHighlighted
              ? 'bg-blue-600 text-white hover:bg-slate-950 dark:hover:bg-white dark:hover:text-slate-950'
              : 'border border-slate-200 bg-transparent text-slate-900 hover:border-slate-950 hover:bg-slate-950 hover:text-white dark:border-slate-800 dark:text-slate-400 dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-950 dark:hover:text-white',
          )}
        >
          <Link
            href={ctaHref}
            className="flex items-center justify-center gap-3"
          >
            {ctaText}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>

        {/* 🔒 Encryption Signal */}
        <div className="mt-6 flex items-center justify-center gap-2 opacity-30 transition-opacity group-hover:opacity-60">
          <ShieldCheck size={12} className="text-blue-600" />
          <span className="text-[9px] font-bold tracking-[0.2em] text-slate-950 uppercase dark:text-white">
            End-to-End Encrypted Request
          </span>
        </div>
      </div>
    </div>
  )
}
