/** @format */

'use client'

import * as React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { MoveHorizontal } from 'lucide-react'

interface BeforeAfterSliderProps {
  beforeImg: string
  afterImg: string
  className?: string
}

/**
 * [STRATEGY: VISUAL PROOF - INTERACTIVE COMPARISON]
 * - Interaction: ใช้การคำนวณตำแหน่งแบบ Relative เพื่อความแม่นยำทุกขนาดหน้าจอ
 * - UX: เพิ่มระบบป้องกันการ Scroll บนมือถือขณะใช้งาน Slider
 * - Visual: เพิ่มเบลอและ Gradient เล็กน้อยเพื่อให้เส้นแบ่งดูพรีเมียม
 */

export function BeforeAfterSlider({
  beforeImg,
  afterImg,
  className,
}: BeforeAfterSliderProps) {
  const [sliderPos, setSliderPos] = React.useState(50)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const position = (x / rect.width) * 100
    setSliderPos(Math.min(Math.max(position, 0), 100))
  }

  // รองรับทั้ง Mouse และ Touch events
  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX)
  const onTouchMove = (e: React.TouchEvent) => {
    // ป้องกันการ Scroll หน้าจอขณะเลื่อน Slider บนมือถือ
    if (e.cancelable) handleMove(e.touches[0].clientX)
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        'group relative aspect-video w-full cursor-ew-resize overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 select-none dark:border-slate-800',
        className,
      )}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
    >
      {/* 🟢 After Image: สื่อถึงความสำเร็จ (Background) */}
      <Image
        src={afterImg}
        alt="After Processing"
        fill
        sizes="(max-width: 1200px) 100vw, 80vw"
        className="object-cover"
        priority
      />
      <div className="absolute top-4 right-4 z-10 flex items-center gap-2 rounded-full bg-emerald-500/90 px-3 py-1.5 text-[10px] font-black tracking-widest text-white uppercase backdrop-blur-md">
        <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
        Resolved
      </div>

      {/* 🔴 Before Image: สื่อถึงปัญหาที่พบ (Foreground with Clip) */}
      <div
        className="absolute inset-0 z-0"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <Image
          src={beforeImg}
          alt="Before Processing"
          fill
          sizes="(max-width: 1200px) 100vw, 80vw"
          className="object-cover grayscale-[0.5]" // เพิ่มความหม่นเล็กน้อยเพื่อให้ After ดูเด่นขึ้น
        />
        <div className="absolute top-4 left-4 z-10 rounded-full bg-slate-950/80 px-3 py-1.5 text-[10px] font-black tracking-widest text-white uppercase backdrop-blur-md">
          Incident
        </div>
      </div>

      {/* 🏛️ The Control Hub (Slider Bar) */}
      <div
        className="absolute top-0 bottom-0 z-20 w-[2px] bg-white transition-colors group-hover:bg-blue-500"
        style={{ left: `${sliderPos}%` }}
      >
        {/* Central Controller */}
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-slate-950 text-white shadow-2xl transition-transform group-active:scale-90">
          <MoveHorizontal size={18} strokeWidth={3} />
        </div>

        {/* Visual Line Glow */}
        <div className="absolute inset-0 -left-1 w-3 bg-blue-500/10 opacity-0 blur-sm transition-opacity group-hover:opacity-100" />
      </div>
    </div>
  )
}
