/** @format */

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * [STRATEGY: ARCHITECTURAL BUTTON v4.6]
 * - Consistency: ปรับระบบ Shape ให้สอดคล้องกับ Input (12px radius)
 * - Authority: เพิ่มน้ำหนัก Font และปรับปรุง Shadow ให้ดูแพงขึ้น
 */

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2.5 whitespace-nowrap text-sm font-bold tracking-tight transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-none active:scale-[0.97] uppercase',
  {
    variants: {
      variant: {
        // 🏛️ Unlink Primary: ปรับเป็น Solid Blue หรือ Black ตามสไตล์ Enterprise
        default:
          'bg-blue-600 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:shadow-blue-500/40 dark:bg-blue-500 dark:hover:bg-blue-400',

        // 🏛️ High-Alert: แดงแบบเคร่งขรึม
        destructive:
          'bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-500/20',

        // 🏛️ Blueprint: เส้นขอบที่ดูสะอาดตา
        outline:
          'border-2 border-slate-200 bg-transparent text-slate-900 hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-400',

        // 🏛️ Secondary: อารมณ์แบบนุ่มนวล
        secondary:
          'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800/50 dark:text-slate-100 dark:hover:bg-slate-800',

        // 🏛️ Ghost: สำหรับ UI ที่ต้องการความเบา
        ghost:
          'hover:bg-blue-50/50 hover:text-blue-600 dark:hover:bg-blue-900/20 dark:hover:text-blue-400',

        // 🏛️ Navigation Link
        link: 'text-blue-600 underline-offset-4 hover:underline dark:text-blue-400',
      },
      size: {
        default: 'h-12 px-8 py-2', // มาตรฐานเดียวกับ Input
        sm: 'h-10 px-4 text-xs',
        lg: 'h-14 px-10 text-base tracking-tighter', // สำหรับ Hero CTA
        icon: 'size-12',
        'icon-sm': 'size-10',
      },
      shape: {
        // 🏛️ ปรับให้สอดคล้องกับ Unlink Identity
        sharp: 'rounded-lg', // 8px - สำหรับเครื่องมือเล็กๆ
        standard: 'rounded-xl', // 12px - **แนะนำสำหรับปุ่มทั่วไป**
        soft: 'rounded-2xl', // 16px - สำหรับ Hero CTA ใหญ่ๆ
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      shape: 'standard', // เปลี่ยน Default เป็น 12px
    },
  },
)

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, shape, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, shape, className }))}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'

export { Button, buttonVariants }
