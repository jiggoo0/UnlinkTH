/** @format */

'use client'

import * as React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { MoveHorizontal, AlertCircle, CheckCircle } from 'lucide-react'

/**
 * [STRATEGY: VISUAL PROOF v4.30]
 * - Type Safety: นิยาม BeforeAfterSliderProps เพื่อรองรับการทำ Type Check
 * - Form: ปรับจากขอบเหลี่ยมจัดเป็น rounded-[2rem] (32px) เพื่อให้เข้ากับชุด Card อื่นๆ
 * - Concept: "Forensic Analysis" ใช้ Scanline และ Grayscale เพื่อเล่าเรื่องความแตกต่าง
 */

interface BeforeAfterSliderProps {
  beforeImg: string
  afterImg: string
  className?: string
}

export function BeforeAfterSlider({
  beforeImg,
  afterImg,
  className,
}: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = React.useState(50)
  const [isDragging, setIsDragging] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const position = (x / rect.width) * 100
    setSliderPos(Math.min(Math.max(position, 0), 100))
  }

  // 🏛️ Advanced Event Handling
  const onStart = () => setIsDragging(true)
  const onEnd = () => setIsDragging(false)

  const onMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging && e.type !== 'touchmove') return
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    handleMove(clientX)
  }

  return (
    <div
      ref={containerRef}
      onMouseDown={onStart}
      onMouseUp={onEnd}
      onMouseLeave={onEnd}
      onMouseMove={onMove}
      onTouchMove={onMove}
      onTouchStart={onStart}
      onTouchEnd={onEnd}
      className={cn(
        'group relative aspect-[16/10] w-full cursor-ew-resize overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 select-none dark:border-slate-800 dark:bg-slate-900',
        'shadow-2xl shadow-slate-200/50 dark:shadow-none',
        className,
      )}
      style={{ touchAction: 'none' }}
    >
      {/* 🟢 After Image: The Solution */}
      <Image
        src={afterImg}
        alt="After Processing"
        fill
        className="object-cover"
        priority
      />

      {/* 🏛️ After Badge: Floating Squircle */}
      <div className="absolute top-8 right-8 z-10 flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/90 px-5 py-3 text-[10px] font-black tracking-[0.2em] text-white uppercase shadow-xl shadow-emerald-500/20 backdrop-blur-xl">
        <CheckCircle size={14} strokeWidth={2.5} />
        Resolved Protocol
      </div>

      {/* 🔴 Before Image: The Incident (Clipped Layer) */}
      <div
        className="absolute inset-0 z-0"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <Image
          src={beforeImg}
          alt="Before Processing"
          fill
          className="object-cover brightness-75 grayscale transition-all duration-700 group-hover:brightness-100 group-hover:grayscale-0"
        />

        {/* 🏛️ Before Badge: Floating Squircle */}
        <div className="absolute top-8 left-8 z-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/90 px-5 py-3 text-[10px] font-black tracking-[0.2em] text-white uppercase shadow-xl backdrop-blur-xl">
          <AlertCircle size={14} strokeWidth={2.5} className="text-red-500" />
          Initial Incident
        </div>
      </div>

      {/* 🏛️ The Technical Divider (Scanner Bar) */}
      <div
        className="absolute top-0 bottom-0 z-20 w-[2px] bg-white transition-colors duration-300 group-hover:bg-blue-600"
        style={{ left: `${sliderPos}%` }}
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 -right-1 -left-1 bg-blue-600/20 opacity-0 blur-md transition-opacity group-hover:opacity-100" />

        {/* 🏛️ Mechanical Controller (The Handle) */}
        <div className="absolute top-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border-2 border-white bg-slate-950 text-white shadow-2xl transition-all duration-300 group-hover:border-blue-600 group-active:scale-90 dark:border-white dark:bg-blue-600">
          <MoveHorizontal size={24} strokeWidth={2.5} />
        </div>

        {/* Real-time Telemetry Data */}
        <div className="absolute bottom-10 -translate-x-1/2 rounded-full bg-slate-950 px-3 py-1 font-mono text-[9px] font-black tracking-widest text-white uppercase dark:bg-white dark:text-slate-950">
          SCAN_X:{Math.round(sliderPos)}%
        </div>
      </div>

      {/* 🧩 UI Polish: Scanline & Noise Overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] bg-repeat" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,black_50%)] bg-[length:100%_4px]" />
      </div>
    </div>
  )
}
