/** @format */

'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

/**
 * [STRATEGY: THE STRUCTURAL LOGO v2]
 * - Fix TS2322: เพิ่ม fontSize และ iconSize เข้าไปใน LogoProps เพื่อรองรับ Navbar/Footer
 * - Symbol: ใช้โครงสร้างสี่เหลี่ยมตัดมุม (Technical Squircle) พร้อม Micro-interaction
 * - Symbol Detail: เพิ่ม Dot สัญลักษณ์สถานะ Intelligence (Active Node)
 */

interface LogoProps {
  className?: string
  href?: string
  variant?: 'default' | 'compact' | 'minimal'
  /** ✅ เพิ่ม prop เพื่อแก้ปัญหาจาก Navbar/Footer */
  fontSize?: string
  iconSize?: number
}

export const Logo = ({
  className,
  href = '/',
  variant = 'default',
  fontSize, // รับค่า text-size มาใช้งาน
  iconSize, // รับค่าขนาดไอคอนมาใช้งาน (ถ้ามี)
}: LogoProps) => {
  return (
    <Link
      href={href}
      aria-label="UnlinkTH - Reputation Management"
      className={cn(
        'group inline-flex items-center gap-2.5 transition-opacity select-none hover:opacity-90',
        className,
      )}
    >
      {/* 🏛️ Symbol Architecture */}
      <div className="relative">
        <div
          className={cn(
            'flex items-center justify-center bg-slate-950 transition-all duration-300 dark:bg-white',
            'rotate-0 rounded-sm group-hover:rotate-90', // Micro-interaction
            variant === 'minimal' ? 'h-8 w-8' : 'h-9 w-9',
            // ปรับขนาดตาม iconSize หากมีการส่งค่ามา
            iconSize ? `h-[${iconSize}px] w-[${iconSize}px]` : '',
          )}
          style={iconSize ? { width: iconSize, height: iconSize } : {}}
        >
          <span
            className={cn(
              'font-black tracking-tighter text-white uppercase dark:text-slate-950',
              iconSize && iconSize < 20 ? 'text-[10px]' : 'text-sm',
            )}
          >
            U
          </span>
        </div>
        {/* Status Node: สื่อถึงความ Active ของระบบ Intelligence */}
        <div className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full border-2 border-white bg-blue-600 dark:border-slate-950" />
      </div>

      {/* 🏛️ Wordmark Architecture */}
      {variant !== 'minimal' && (
        <div
          className={cn(
            'flex flex-col leading-[0.85] tracking-tighter',
            variant === 'compact' ? 'hidden md:flex' : 'flex',
          )}
        >
          <div className="flex items-baseline gap-0.5">
            <span
              className={cn(
                'font-black text-slate-950 uppercase dark:text-white',
                fontSize || 'text-lg', // ใช้ fontSize จาก props หรือ default ที่ text-lg
              )}
            >
              Unlink
            </span>
            <span
              className={cn('font-light text-blue-600', fontSize || 'text-lg')}
            >
              TH
            </span>
          </div>
          {variant === 'default' && (
            <span className="text-[9px] font-black tracking-[0.3em] text-slate-400 uppercase">
              Intelligence & Privacy
            </span>
          )}
        </div>
      )}
    </Link>
  )
}
