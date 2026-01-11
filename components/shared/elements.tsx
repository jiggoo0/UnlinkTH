/** @format */

import React from 'react'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  center?: boolean
  className?: string
}

/**
 * [STRATEGY: THE BRAND ANCHOR]
 * - หัวใจของทุก Section คือการระบุหัวข้อที่ชัดเจนและมี Hierarchy
 * - รองรับ Badge ด้านบนเพื่อระบุหมวดหมู่การปฏิบัติงาน (e.g., "Protocol", "Intelligence")
 */
export function SectionHeader({
  badge,
  title,
  subtitle,
  center = false,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-16 space-y-6', center && 'text-center', className)}>
      <div className="space-y-4">
        {badge && (
          <span
            className={cn(
              'inline-block text-[10px] font-black tracking-[0.4em] text-blue-600 uppercase',
              center && 'w-full',
            )}
          >
            {badge}
          </span>
        )}
        <h2 className="text-4xl leading-[0.9] font-black tracking-tighter text-slate-950 uppercase md:text-5xl dark:text-white">
          {title}
        </h2>
      </div>

      {subtitle && (
        <p
          className={cn(
            'font-thai max-w-2xl text-lg leading-relaxed text-slate-500 dark:text-slate-400',
            center && 'mx-auto',
          )}
        >
          {subtitle}
        </p>
      )}

      <div
        className={cn(
          'h-1.5 w-16 bg-blue-600 transition-all duration-500 group-hover:w-24',
          center && 'mx-auto',
        )}
      />
    </div>
  )
}

/**
 * [STRATEGY: THE PROTECTIVE SHELL]
 * - GlassContainer สื่อถึง "ความโปร่งใสที่แข็งแกร่ง"
 * - ใช้ผสมผสานระหว่าง Backdrop Blur และ Border Subtle
 */
export function GlassContainer({
  children,
  className,
  noPadding = false,
}: {
  children: React.ReactNode
  className?: string
  noPadding?: boolean
}) {
  return (
    <div
      className={cn(
        'relative overflow-hidden border border-white/20 bg-white/70 backdrop-blur-xl transition-all dark:border-slate-800 dark:bg-slate-950/50',
        !noPadding && 'p-8 md:p-12',
        'shadow-[0_8px_32px_0_rgba(15,23,42,0.08)]',
        className,
      )}
    >
      {/* Decorative inner light effect */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-white/5" />

      <div className="relative z-10">{children}</div>
    </div>
  )
}
