'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ShieldAlert, RefreshCw, Home } from 'lucide-react'

/**
 * [STRATEGY: THE STRUCTURAL MINIMALIST]
 * - Tone: รักษาความนิ่งและน่าเชื่อถือ (Institutional Composure)
 * - Design: ใช้สี่เหลี่ยมคมชัด (Sharp Edges) และ Divider เพื่อจัดระเบียบข้อผิดพลาด
 * - Copy: ใช้ภาษาที่แสดงถึงความรับผิดชอบและเป็นระบบ
 */

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // บันทึก Error ลงในระบบ Monitoring (ถ้ามี)
    console.error('System Integrity Breach:', error)
  }, [error])

  return (
    <div className="animate-enter flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      {/* 🏛️ Structural Icon Context */}
      <div className="relative mb-10">
        <div className="bg-brand-accent/10 absolute inset-0 scale-[1.5] rounded-full blur-3xl" />
        <div className="bg-background relative rounded-sm border-2 border-slate-950 p-6 dark:border-white">
          <ShieldAlert
            size={48}
            className="stroke-[1.5] text-slate-950 dark:text-white"
          />
        </div>
      </div>

      {/* 🏛️ Copy: Institutional Message */}
      <div className="mb-12 max-w-lg space-y-4">
        <h2 className="text-brand-accent text-[10px] font-black tracking-[0.5em] uppercase">
          System Notification
        </h2>
        <h1 className="text-3xl font-black tracking-tighter text-slate-950 uppercase md:text-4xl dark:text-white">
          ขออภัย ระบบขัดข้องชั่วคราว
        </h1>
        <div className="mx-auto my-6 h-px w-12 bg-slate-200 dark:bg-slate-800" />
        <p className="text-sm leading-relaxed font-medium text-slate-500 dark:text-slate-400">
          เซิร์ฟเวอร์ตรวจพบความผิดปกติในการประมวลผลข้อมูล
          ทีมเทคนิคได้รับแจ้งเหตุและกำลังดำเนินการกู้คืนระบบตามโปรโตคอลความปลอดภัย
        </p>
      </div>

      {/* 🏛️ Actions: Precision Buttons */}
      <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
        <Button
          onClick={() => reset()}
          className="btn-primary group h-14 px-10"
        >
          <RefreshCw
            size={16}
            className="mr-2 transition-transform duration-500 group-hover:rotate-180"
          />
          ลองใหม่อีกครั้ง
        </Button>

        <Button
          variant="outline"
          asChild
          className="btn-outline h-14 border-slate-200 px-10 text-slate-950 hover:border-slate-950 dark:border-slate-800 dark:text-white dark:hover:border-white"
        >
          <Link href="/">
            <Home size={16} className="mr-2" />
            กลับหน้าหลัก
          </Link>
        </Button>
      </div>

      {/* Error Reference (Optional) */}
      <p className="mt-12 text-[9px] font-bold tracking-widest text-slate-300 uppercase dark:text-slate-700">
        Dossier ID: {error.digest || 'INTERNAL_ST_ERROR'}
      </p>
    </div>
  )
}
