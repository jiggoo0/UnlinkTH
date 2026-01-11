/** @format */

'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'

interface StatsCounterProps {
  end: number
  label: string
  suffix?: string
  className?: string
}

/**
 * [STRATEGY: THE PRECISION COUNTER]
 * - Performance: ใช้ useSpring สำหรับการคำนวณตัวเลขที่ลื่นไหลระดับสถาบัน
 * - Interaction: เริ่มทำงานเมื่อ Element ปรากฏบนจอ (Viewport Trigger)
 * - Aesthetic: เน้นความคมชัดและการจัดวางแบบ Grid-aligned
 */

export function StatsCounter({
  end,
  label,
  suffix = '',
  className,
}: StatsCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })

  useEffect(() => {
    if (isInView) {
      motionValue.set(end)
    }
  }, [isInView, end, motionValue])

  // ฟังก์ชันจัดรูปแบบตัวเลข (Local state เพื่อลดการ Re-render หนักๆ)
  const [displayValue, setDisplayValue] = React.useState('0')

  useEffect(() => {
    springValue.on('change', (latest) => {
      setDisplayValue(Intl.NumberFormat('en-US').format(Math.floor(latest)))
    })
  }, [springValue])

  return (
    <div
      ref={ref}
      className={cn('group flex flex-col items-center text-center', className)}
    >
      {/* 🏛️ Number Display */}
      <div className="relative mb-3 inline-flex items-baseline">
        <motion.span className="text-4xl font-black tracking-tighter text-slate-950 uppercase italic md:text-6xl dark:text-white">
          {displayValue}
        </motion.span>
        {suffix && (
          <span className="ml-1 text-xl font-bold text-blue-600 italic md:text-2xl">
            {suffix}
          </span>
        )}

        {/* Decorative underline that expands on view */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: '100%' } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="absolute -bottom-2 left-0 h-[2px] bg-slate-100 dark:bg-slate-800"
        />
      </div>

      {/* 🏛️ Label Display */}
      <div className="max-w-[120px] md:max-w-none">
        <p className="text-[10px] leading-tight font-black tracking-[0.3em] text-slate-400 uppercase dark:text-slate-500">
          {label}
        </p>
      </div>
    </div>
  )
}
