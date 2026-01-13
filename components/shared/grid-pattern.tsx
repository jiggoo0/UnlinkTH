/** @format */

'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * [STRATEGY: ARCHITECTURAL GRID SYSTEM v5.3]
 * - Form: ใช้เส้น Grid ขนาด 40px เพื่อสร้างความรู้สึกเหมือนพิมพ์เขียว (Blueprint)
 * - Dynamic Masking: ใช้ Radial Gradient เพื่อให้ Grid เด่นเฉพาะจุดกลางและจางออกขอบ
 * - Detail: เพิ่มจุดตัด (Crosshair) ในบางจุดเพื่อเสริมภาพลักษณ์ Technical UI
 */

interface GridPatternProps {
  width?: number
  height?: number
  x?: number
  y?: number
  strokeDasharray?: string | number
  className?: string
}

export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  className,
}: GridPatternProps) {
  const id = React.useId()

  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden',
        className,
      )}
    >
      {/* 🏛️ 1. BASE SVG GRID */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full stroke-slate-200/40 dark:stroke-blue-500/10"
      >
        <defs>
          <pattern
            id={id}
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
            x={x}
            y={y}
          >
            {/* Horizontal and Vertical Blueprint Lines */}
            <path
              d={`M.5 ${height}V.5H${width}`}
              fill="none"
              strokeDasharray={strokeDasharray}
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      </svg>

      {/* 🏛️ 2. TACTICAL OVERLAYS */}
      {/* Radial Mask: ทำให้ Grid ค่อยๆ จางหายไปที่ขอบแบบมืออาชีพ */}
      <div
        className={cn(
          'absolute inset-0',
          'bg-[radial-gradient(circle_at_center,transparent_0%,white_80%)]',
          'dark:bg-[radial-gradient(circle_at_center,transparent_0%,#020617_85%)]',
        )}
      />

      {/* Subtle Noise Texture: เพิ่มความ Organic ให้กับพื้นหลังดิจิทัล */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.015] mix-blend-overlay dark:opacity-[0.03]" />
    </div>
  )
}
