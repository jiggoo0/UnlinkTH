/** @format */

import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * [STRATEGY: ARCHITECTURAL CARD SYSTEM v4.6]
 * - Consistency: ปรับ Radius เป็น 16px (2xl) เพื่อความสมดุลกับ Button 12px
 * - Aesthetics: เพิ่มมิติ Shadow แบบ Soft Elevation และรองรับ Glassmorphism
 * - Layout: ปรับปรุง Grid Alignment สำหรับ CardAction
 */

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn(
        // 1. Base Layout: ใช้ความโค้งมนที่นุ่มนวลกว่าปุ่มเล็กน้อย (16px)
        'flex flex-col gap-4 rounded-2xl border bg-white text-slate-950 shadow-sm transition-all dark:bg-slate-950 dark:text-slate-50',
        // 2. Visual Style: Border ที่บางและเบา
        'border-slate-200 dark:border-slate-800',
        className,
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 p-6 pb-2 has-data-[slot=card-action]:grid-cols-[1fr_auto]',
        className,
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        'font-sans text-xl font-bold tracking-tight text-slate-900 dark:text-white',
        className,
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        'text-sm leading-relaxed text-slate-500 dark:text-slate-400',
        className,
      )}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        'col-start-2 row-span-2 row-start-1 self-center justify-self-end',
        className,
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-content"
      className={cn('px-6 pt-2 pb-6', className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        'flex items-center gap-4 border-slate-100 px-6 pt-2 pb-6 dark:border-slate-800 [.border-t]:pt-6',
        className,
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
