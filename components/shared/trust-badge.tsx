/** @format */

'use client'

import React from 'react'
import { ShieldCheck, Lock, EyeOff, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * [STRATEGY: THE STRUCTURAL MINIMALIST]
 * - แนวคิด: "The Invisible Safety"
 * - การจัดวาง: ใช้ Negative space และเส้นแบ่งที่บางเฉียบ (0.5px)
 * - Typography: เน้นการอ่านแบบสแกนผ่าน Uppercase tracking กว้าง
 * - Optimization: ลบ unused 'ShieldAlert' icon เพื่อผ่านการตรวจสอบ Lint
 */

interface TrustBadgeProps {
  className?: string
  variant?: 'horizontal' | 'grid'
}

export function TrustBadge({
  className,
  variant = 'horizontal',
}: TrustBadgeProps) {
  const badges = [
    { icon: ShieldCheck, label: 'Data Scrubbing' },
    { icon: Lock, label: 'Legal Protocol' },
    { icon: EyeOff, label: 'Shadow Removal' },
    { icon: Zap, label: 'Rapid Response' },
  ]

  return (
    <div
      className={cn(
        'border-y border-slate-100 bg-white/50 py-8 backdrop-blur-sm dark:border-slate-900 dark:bg-transparent',
        className,
      )}
    >
      <div
        className={cn(
          'container mx-auto px-6',
          variant === 'horizontal'
            ? 'flex flex-wrap items-center justify-center gap-x-16 gap-y-8'
            : 'grid grid-cols-2 gap-px bg-slate-100 md:grid-cols-4 dark:bg-slate-900',
        )}
      >
        {badges.map((badge, index) => (
          <div
            key={index}
            className={cn(
              'group flex items-center gap-3 transition-colors',
              variant === 'grid' && 'bg-white px-4 py-6 dark:bg-slate-950',
            )}
          >
            {/* Icon กับ Stroke ที่บางลงเพื่อความพรีเมียม */}
            <badge.icon
              size={13}
              className="stroke-[2] text-blue-600 dark:text-blue-500"
            />

            <div className="flex flex-col gap-0.5">
              <span className="text-[9px] font-black tracking-[0.3em] text-slate-950 uppercase dark:text-slate-100">
                {badge.label}
              </span>
              <span className="text-[8px] font-medium tracking-widest text-slate-400 uppercase">
                Active Protocol
              </span>
            </div>

            {/* Structural Divider (แบบ Horizontal) */}
            {variant === 'horizontal' && index !== badges.length - 1 && (
              <div className="ml-16 hidden h-5 w-[1px] bg-slate-100 md:block dark:bg-slate-800" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
