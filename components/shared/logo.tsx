/** @format */

'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

/**
 * [STRATEGY: THE STRUCTURAL LOGO v4.28]
 * - Form: ปรับจากสี่เหลี่ยมคม (Sharp) เป็น Squircle อ่อนๆ (rounded-lg) เพื่อความ Modern High-end
 * - Interaction: ใช้ Smooth Rotation 180deg พร้อมกับสลับสี (Invert) เมื่อ Hover
 * - Fix: รองรับระบบ Dynamic Size ผ่าน Style Object เพื่อความแม่นยำสูงสุดในทุกหน้าจอ
 */

interface LogoProps {
  className?: string
  href?: string
  variant?: 'default' | 'compact' | 'minimal'
  fontSize?: string
  iconSize?: number
}

export const Logo = ({
  className,
  href = '/',
  variant = 'default',
  fontSize,
  iconSize,
}: LogoProps) => {
  // 🏛️ Identity Configuration
  const defaultIconSize = variant === 'minimal' ? 32 : 40
  const finalIconSize = iconSize || defaultIconSize

  return (
    <Link
      href={href}
      aria-label="UnlinkTH - Reputation Management"
      className={cn(
        'group inline-flex items-center gap-3.5 transition-all duration-300 select-none',
        className,
      )}
    >
      {/* 🏛️ 1. SYMBOL: The Intelligence Core */}
      <div className="relative shrink-0">
        <div
          className={cn(
            'flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]',
            'rounded-xl bg-slate-950 dark:bg-white', // 12px Squircle consistency
            'group-hover:rotate-[180deg] group-hover:bg-blue-600 dark:group-hover:bg-blue-600',
            'shadow-lg shadow-transparent group-hover:shadow-blue-500/20',
          )}
          style={{
            width: `${finalIconSize}px`,
            height: `${finalIconSize}px`,
          }}
        >
          <span
            className={cn(
              'font-black tracking-tighter uppercase transition-colors duration-500',
              'text-white group-hover:text-white dark:text-slate-950',
              finalIconSize < 30 ? 'text-[10px]' : 'text-lg',
            )}
          >
            U
          </span>
        </div>

        {/* 🏛️ 2. STATUS NODE: Pulse Indicator */}
        <div
          className={cn(
            'absolute -top-1 -right-1 h-3 w-3 rounded-full border-[2.5px] border-white bg-blue-600 dark:border-slate-950',
            'animate-pulse shadow-md',
          )}
        />
      </div>

      {/* 🏛️ 3. WORDMARK: The Brand Voice */}
      {variant !== 'minimal' && (
        <div
          className={cn(
            'flex flex-col tracking-tighter',
            variant === 'compact' ? 'hidden md:flex' : 'flex',
          )}
        >
          <div className="flex items-baseline gap-0.5">
            <span
              className={cn(
                'font-black text-slate-950 uppercase transition-colors group-hover:text-blue-600 dark:text-white',
                fontSize || 'text-2xl leading-none',
              )}
            >
              Unlink
            </span>
            <span
              className={cn(
                'font-light text-blue-600 transition-opacity group-hover:opacity-70',
                fontSize || 'text-2xl leading-none',
              )}
            >
              TH
            </span>
          </div>

          {variant === 'default' && (
            <div className="mt-1.5 flex items-center gap-2">
              <span className="h-[1px] w-3 bg-blue-600/30 transition-all group-hover:w-5 group-hover:bg-blue-600" />
              <span className="font-mono text-[8px] font-black tracking-[0.4em] text-slate-400 uppercase">
                Intelligence & Privacy
              </span>
            </div>
          )}
        </div>
      )}
    </Link>
  )
}
