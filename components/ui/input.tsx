/** @format */

import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * [STRATEGY: ARCHITECTURAL INPUT SYSTEM v2.1]
 * - Consistency: ใช้ความโค้งมนระดับ 12px (rounded-xl) เท่ากับปุ่มหลัก
 * - Authority: เพิ่มความสูงและ Padding เพื่อความง่ายในการกรอกข้อมูล (UX)
 * - Aesthetics: ใช้พื้นหลังกึ่งโปร่งใส (Glassmorphism) ใน Dark Mode
 */

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // 1. Base Layout & Typography
        'flex w-full min-w-0 px-4 py-2 text-base transition-all duration-200 md:text-sm',
        'file:border-0 file:bg-transparent file:text-sm file:font-medium',
        'placeholder:text-slate-400 dark:placeholder:text-slate-500',

        // 2. Shape & Border (Aligned with Button radius)
        'h-12 rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950/50',

        // 3. Focus & Interaction (Sleek Blue Glow)
        'outline-none focus-visible:border-blue-500/50 focus-visible:ring-4 focus-visible:ring-blue-500/10',

        // 4. Disabled & Error States
        'disabled:cursor-not-allowed disabled:opacity-50',
        'aria-invalid:border-red-500 aria-invalid:ring-red-500/10',

        // 5. Custom Selection Color
        'selection:bg-blue-600/20 selection:text-blue-600',

        className,
      )}
      {...props}
    />
  )
}

export { Input }
