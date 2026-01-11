/** @format */

'use client'

import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'

/**
 * [STRATEGY: VISUAL AUTHORITY]
 * - แก้ไข TS2339: เพิ่ม 'badge' ลงใน interface เพื่อรองรับข้อมูลจากทุกหน้า
 * - Entrance Animation: ใช้ Framer Motion สร้างจังหวะการเปิดตัวที่ดูเป็นมืออาชีพ
 * - Responsive Design: ปรับ Typography ให้รองรับทั้ง EN (Uppercase) และ TH (Font-Thai)
 */

interface SectionHeadingProps {
  /** ไอคอนประกอบหัวข้อ (LucideIcon) */
  icon?: LucideIcon
  /** ข้อความขนาดเล็กด้านบนเพื่อบอกหมวดหมู่ */
  badge: string
  /** หัวข้อหลัก (H2) เน้นความหนาและใหญ่ */
  title: string
  /** หัวข้อย่อยหรือสโลแกนประกอบ (เน้นภาษาไทย) */
  subtitle?: string
  /** เนื้อหาอธิบายรายละเอียดเพิ่มเติม */
  description?: string
  /** การจัดวางตำแหน่งเนื้อหา */
  align?: 'left' | 'center'
  /** เพิ่มเติม Tailwind class */
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
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'mb-12 flex flex-col space-y-6',
        isCenter ? 'mx-auto items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {/* 🏛️ 01: Badge Layer - สร้างการจดจำหมวดหมู่ */}
      <div
        className={cn(
          'flex items-center gap-3 text-[10px] font-black tracking-[0.4em] text-blue-600 uppercase',
          isCenter ? 'justify-center' : '',
        )}
      >
        {Icon && (
          <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-slate-950 text-white dark:bg-blue-600">
            <Icon size={14} strokeWidth={2.5} />
          </div>
        )}
        <div className="flex flex-col">
          <span className="relative pb-1">{badge}</span>
          <div
            className={cn('h-[2px] w-6 bg-blue-600', isCenter ? 'mx-auto' : '')}
          />
        </div>
      </div>

      {/* 🏛️ 02: Title & Emphasis Layer - จุดปะทะสายตาหลัก */}
      <div className="flex flex-col space-y-3">
        <h2
          className={cn(
            'text-4xl leading-[0.95] font-black tracking-tighter text-slate-950 uppercase md:text-6xl dark:text-white',
            isCenter ? 'max-w-4xl' : 'max-w-3xl',
          )}
        >
          {title}
        </h2>

        {subtitle && (
          <span
            className={cn(
              'font-thai text-xl font-bold tracking-tight text-blue-600/90 italic md:text-2xl',
              isCenter ? 'mx-auto' : '',
            )}
          >
            {subtitle}
          </span>
        )}
      </div>

      {/* 🏛️ 03: Narrative Layer - ส่วนขยายความเพื่อความเข้าใจ */}
      {description && (
        <p
          className={cn(
            'font-thai max-w-2xl text-[16px] leading-relaxed font-medium text-slate-500 md:text-[18px] dark:text-slate-400',
            isCenter ? 'mx-auto' : '',
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
