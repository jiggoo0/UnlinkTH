/** @format */

'use client'

import React, { Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ArrowLeft, ShieldAlert, Search, Terminal } from 'lucide-react'
import { Button } from '@/components/ui/button'

/**
 * [STRATEGY: THE RESILIENT 404]
 * - Next.js 15 Fix: หุ้ม useSearchParams ด้วย Suspense เพื่อป้องกัน Build Error
 * - UI: ใช้ธีม Institutional Terror/Tech เพื่อรักษา Branding แม้ในหน้า Error
 */

// 1. Component ย่อยสำหรับแสดงผลที่ต้องใช้ SearchParams
function NotFoundContent() {
  const searchParams = useSearchParams()
  const attemptedPath = searchParams.get('path') // ตัวอย่างการดึงค่ามาแสดง (ถ้ามี)

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-8xl font-black tracking-tighter text-slate-950 uppercase md:text-9xl dark:text-white">
          404<span className="text-blue-600">.</span>
        </h1>
        <h2 className="text-xl font-black tracking-widest text-slate-400 uppercase">
          Protocol Breach: Page Not Found
        </h2>
      </div>

      <div className="max-w-md border-l-2 border-red-500 bg-slate-50 p-6 dark:bg-slate-900/50">
        <p className="font-thai text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          ไม่พบหน้าที่คุณกำลังเรียกใช้ในฐานข้อมูลระบบ
          {attemptedPath && (
            <span className="ml-2 font-mono text-red-500">
              [Attempted: {attemptedPath}]
            </span>
          )}
          <br />
          ข้อมูลดังกล่าวอาจถูกลบ ย้าย
          หรือจำกัดการเข้าถึงตามนโยบายความเป็นส่วนตัว
        </p>
      </div>
    </div>
  )
}

// 2. Component หลัก (Default Export)
export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white selection:bg-blue-100 dark:bg-slate-950">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 opacity-[0.03] dark:opacity-[0.05]">
        <ShieldAlert size={600} />
      </div>

      <div className="relative z-10 container mx-auto flex min-h-screen flex-col justify-center px-6">
        {/* หุ้มด้วย Suspense เพื่อแก้ปัญหา Prerendering Error */}
        <Suspense
          fallback={
            <div className="animate-pulse space-y-8">
              <div className="h-32 w-64 bg-slate-100 dark:bg-slate-800" />
              <div className="h-20 w-full bg-slate-50 dark:bg-slate-900" />
            </div>
          }
        >
          <NotFoundContent />
        </Suspense>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            variant="default"
            className="h-14 rounded-none bg-slate-950 px-8 text-[11px] font-black tracking-[0.2em] uppercase transition-all hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-white dark:hover:text-slate-950"
          >
            <Link href="/" className="flex items-center gap-3">
              <ArrowLeft size={16} />
              Return to Core
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="h-14 rounded-none border-2 border-slate-950 px-8 text-[11px] font-black tracking-[0.2em] uppercase dark:border-slate-800"
          >
            <Link href="/services" className="flex items-center gap-3">
              <Search size={16} />
              Search Protocols
            </Link>
          </Button>
        </div>

        {/* Footer Info */}
        <div className="mt-20 flex items-center gap-4 text-slate-300 dark:text-slate-800">
          <Terminal size={14} />
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase">
            System Integrity Verified // UnlinkTH
          </span>
        </div>
      </div>
    </main>
  )
}
