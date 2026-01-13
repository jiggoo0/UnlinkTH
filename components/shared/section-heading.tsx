/** @format */

'use client'

import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

/**
 * [STRATEGY: VISUAL AUTHORITY v4.80]
 * - Animation: ใช้ Bezier Curve [0.22, 1, 0.36, 1] เพื่อสร้างจังหวะเปิดตัวแบบ "Smooth Deceleration"
 * - Typography: ใช้ระบบ Optical Sizing (Leading 0.85-0.95) เพื่อให้ข้อความตัวใหญ่ดูทรงพลัง
 * - Geometry: เพิ่ม Blueprint Line เพื่อช่วยนำสายตาจาก Badge ไปยัง Title
 */

interface SectionHeadingProps {
  icon?: LucideIcon
  badge: string
  title: string
  subtitle?: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  icon: Icon,
  badge,
  title,
  subtitle,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  const isCenter = align === 'center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'relative mb-16 flex flex-col',
        isCenter ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {/* 🏛️ 01: CLASSIFICATION LAYER (Badge & Icon) */}
      <div
        className={cn(
          'mb-8 flex items-center gap-4 text-[10px] font-black tracking-[0.4em] text-blue-600 uppercase',
          isCenter ? 'justify-center' : '',
        )}
      >
        {Icon && (
          <div className="flex h-10 w-10 items-center justify-center bg-slate-950 text-white shadow-[4px_4px_0px_0px_rgba(37,99,235,1)] dark:bg-blue-600 dark:shadow-none">
            <Icon size={18} strokeWidth={2} />
          </div>
        )}
        <div className="flex flex-col gap-1">
          <span className="font-mono">{badge}</span>
          <div
            className={cn('h-[2px] w-8 bg-blue-600', isCenter && 'mx-auto')}
          />
        </div>
      </div>

      {/* 🏛️ 02: PRIMARY COMMAND LAYER (H2 & Subtitle) */}
      <div className="flex flex-col space-y-4">
        <h2
          className={cn(
            'font-sans text-[clamp(2.5rem,7vw,4.5rem)] leading-[0.85] font-black tracking-[-0.04em] text-slate-950 uppercase dark:text-white',
            isCenter ? 'max-w-4xl' : 'max-w-3xl',
          )}
        >
          {title}
        </h2>

        {subtitle && (
          <span
            className={cn(
              'font-thai block text-xl font-black tracking-tight text-blue-600 md:text-3xl',
              isCenter ? 'mx-auto' : '',
            )}
          >
            {subtitle}
          </span>
        )}
      </div>

      {/* 🏛️ 03: CONTEXTUAL LAYER (Description) */}
      {description && (
        <div
          className={cn(
            'mt-8 border-slate-100 dark:border-slate-800',
            isCenter ? 'border-t-0' : 'border-l-2 pl-8',
          )}
        >
          <p
            className={cn(
              'font-thai max-w-2xl text-[16px] leading-[1.8] font-medium text-slate-500 md:text-[18px] dark:text-slate-400',
              isCenter ? 'mx-auto' : '',
            )}
          >
            {description}
          </p>
        </div>
      )}
    </motion.div>
  )
}
