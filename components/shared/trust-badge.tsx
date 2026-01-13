/** @format */

'use client'

import React from 'react'
import { ShieldCheck, Lock, EyeOff, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * [STRATEGY: THE STRUCTURAL MINIMALIST v4.96]
 * - Fix: Removed unused 'ShieldAlert' import to satisfy ESLint.
 * - Authority: เพิ่มสถานะ "Active Protocol" เพื่อย้ำเตือนถึงการทำงานแบบ Real-time
 * - Precision: ปรับแต่ง Stroke-width และ Icon size ให้สอดรับกับสไตล์ Technical HUD
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
    { icon: ShieldCheck, label: 'Data Scrubbing', code: 'PROT-SCRB' },
    { icon: Lock, label: 'Legal Protocol', code: 'PROT-LEGL' },
    { icon: EyeOff, label: 'Shadow Removal', code: 'PROT-SHDW' },
    { icon: Zap, label: 'Rapid Response', code: 'PROT-INST' },
  ]

  return (
    <div
      className={cn(
        'relative overflow-hidden border-y border-slate-950/5 bg-white/80 py-6 backdrop-blur-md dark:border-white/5 dark:bg-slate-950/50',
        className,
      )}
    >
      <div
        className={cn(
          'container mx-auto px-6',
          variant === 'horizontal'
            ? 'flex flex-wrap items-center justify-around gap-y-8'
            : 'grid grid-cols-1 gap-[1px] bg-slate-200 sm:grid-cols-2 lg:grid-cols-4 dark:bg-slate-800',
        )}
      >
        {badges.map((badge, index) => (
          <div
            key={index}
            className={cn(
              'group relative flex items-center gap-4 transition-all duration-300',
              variant === 'grid' && 'bg-white px-6 py-8 dark:bg-slate-950',
            )}
          >
            {/* 🏛️ Icon Interface: Squared & Technical */}
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-none border border-slate-100 bg-slate-50 transition-colors group-hover:border-blue-600 dark:border-white/5 dark:bg-white/5">
              <badge.icon
                size={14}
                strokeWidth={2}
                className="text-slate-400 transition-colors group-hover:text-blue-600"
              />
            </div>

            {/* 🏛️ Label Interface: High-detail metadata */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-black tracking-[0.25em] text-slate-950 uppercase dark:text-white">
                  {badge.label}
                </span>
                <span className="hidden font-mono text-[8px] font-bold text-blue-600/40 md:inline">
                  [{badge.code}]
                </span>
              </div>
              <div className="mt-0.5 flex items-center gap-1.5">
                <div className="h-1 w-1 animate-pulse rounded-full bg-emerald-500" />
                <span className="text-[8px] font-black tracking-widest text-slate-400 uppercase">
                  Active Operational Status
                </span>
              </div>
            </div>

            {/* Structural Divider (เฉพาะ Horizontal on Desktop) */}
            {variant === 'horizontal' && index !== badges.length - 1 && (
              <div className="absolute -right-8 hidden h-4 w-[1px] bg-slate-200 md:block dark:bg-white/10" />
            )}
          </div>
        ))}
      </div>

      {/* Subtle HUD scanline for detail: Added for technical depth */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.01)_50%)] bg-[size:100%_4px]" />
    </div>
  )
}
