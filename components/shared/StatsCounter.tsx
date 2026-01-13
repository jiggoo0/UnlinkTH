/** @format */

'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

/**
 * [STRATEGY: THE PRECISION COUNTER v4.90]
 * - Kinetic Motion: ใช้ useSpring (Damping 60, Stiffness 100) เพื่อจำลองการเคลื่อนไหวแบบ Mechanical Dial
 * - Formatting: ใช้ Intl.NumberFormat เพื่อรองรับมาตรฐานการแสดงผลตัวเลขระดับสากล
 * - Visual Hierarchy: ใช้ Italic Black Font เพื่อสื่อถึง "ความเร็วและการก้าวไปข้างหน้า"
 */

interface StatsCounterProps {
  end: number
  label: string
  suffix?: string
  className?: string
  /** รหัสอ้างอิงทางเทคนิคสำหรับแต่ละข้อมูลสถิติ */
  idCode?: string
}

export function StatsCounter({
  end,
  label,
  suffix = '',
  className,
  idCode = 'ST-00',
}: StatsCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
    restDelta: 0.001,
  })

  const [displayValue, setDisplayValue] = useState('0')

  useEffect(() => {
    if (isInView) {
      motionValue.set(end)
    }
  }, [isInView, end, motionValue])

  useEffect(() => {
    return springValue.on('change', (latest) => {
      setDisplayValue(Intl.NumberFormat('en-US').format(Math.floor(latest)))
    })
  }, [springValue])

  return (
    <div
      ref={ref}
      className={cn(
        'group relative flex flex-col items-center justify-center p-6 text-center',
        className,
      )}
    >
      {/* 🏛️ Metadata ID: Blueprint Detail */}
      <span className="mb-4 font-mono text-[9px] font-black tracking-[0.3em] text-blue-600/50 uppercase transition-colors group-hover:text-blue-600">
        {idCode}
      </span>

      {/* 🏛️ Quantitative Layer */}
      <div className="relative mb-4 flex items-baseline">
        <motion.span className="font-sans text-5xl font-[1000] tracking-tighter text-slate-950 uppercase italic md:text-7xl dark:text-white">
          {displayValue}
        </motion.span>
        {suffix && (
          <span className="ml-1 text-2xl font-black text-blue-600 italic md:text-3xl">
            {suffix}
          </span>
        )}
      </div>

      {/* 🏛️ Informational Layer */}
      <div className="relative">
        <div className="mx-auto mb-4 h-[2px] w-8 bg-blue-600 transition-all duration-700 group-hover:w-16" />
        <p className="font-thai max-w-[140px] text-[11px] leading-relaxed font-black tracking-[0.1em] text-slate-400 uppercase md:max-w-none dark:text-slate-500">
          {label}
        </p>
      </div>

      {/* Background Accent: Blueprint Crosshair */}
      <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute top-0 left-1/2 h-full w-[1px] -translate-x-1/2 bg-slate-100 dark:bg-white/5" />
        <div className="absolute top-1/2 left-0 h-[1px] w-full -translate-y-1/2 bg-slate-100 dark:bg-white/5" />
      </div>
    </div>
  )
}
