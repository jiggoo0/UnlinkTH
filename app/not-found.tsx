/** @format */

'use client'

import React, { Suspense } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useSearchParams } from 'next/navigation'
import {
  ArrowLeft,
  ShieldCheck,
  Search,
  Terminal,
  ShieldAlert,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

/**
 * [STRATEGY: THE COMPASSIONATE GUIDE v5.0]
 * - Fix: Removed unused 'FileWarning' to resolve Lint warning.
 * - Architecture: ใช้ Suspense ครอบ Content ที่มีการใช้งาน Hook เพื่อความปลอดภัยในการทำ SSR
 * - UI: ออกแบบมาให้ดูเหมือนหน้าต่าง Console ของระบบความปลอดภัย (Security Dashboard)
 */

function NotFoundContent() {
  const searchParams = useSearchParams()
  // พยายามดึง path จาก params (ถ้ามี) หรือแสดงเป็นระบบ Log
  const attemptedPath = searchParams.get('path') || 'UNSPECIFIED_NODE'

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="space-y-5"
      >
        <div className="flex items-center gap-3 text-blue-600">
          <div className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-600 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-600"></span>
          </div>
          <span className="font-mono text-[11px] font-black tracking-[0.5em] uppercase">
            Protocol Status: 404
          </span>
        </div>

        <h1 className="font-sans text-6xl leading-none font-black tracking-tighter text-slate-900 md:text-8xl dark:text-white">
          ไม่พบข้อมูล<span className="text-blue-600">.</span>
        </h1>

        <div className="flex items-center gap-3 text-slate-500 md:text-xl">
          <ShieldAlert size={22} className="text-amber-500/80" />
          <h2 className="font-bold tracking-tight">
            Resource Unavailable or Restricted
          </h2>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-xl rounded-[2rem] border border-slate-200 bg-white/50 p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] backdrop-blur-2xl dark:border-slate-800 dark:bg-slate-900/50"
      >
        <div className="space-y-6">
          <p className="font-thai text-lg leading-relaxed text-slate-500 dark:text-slate-400">
            ขออภัย หน้าที่คุณพยายามเข้าถึงไม่พร้อมใช้งานในระบบ
            อาจเกิดจากการปรับปรุงโครงสร้างทรัพยากรข้อมูล
            หรือรหัสเข้าถึงนี้ถูกจำกัดภายใต้สัญญารักษาความลับ
            <span className="font-black text-slate-900 italic dark:text-blue-400">
              (Unlink Security Protocol)
            </span>
          </p>

          <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 px-5 py-3 dark:border-slate-800 dark:bg-slate-950">
            <Terminal size={14} className="text-blue-600" />
            <span className="font-mono text-[10px] font-bold tracking-widest text-slate-400 uppercase">
              Log: Target Node{' '}
              <span className="text-blue-600 underline">{attemptedPath}</span>{' '}
              not resolved
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-white dark:bg-slate-950">
      {/* 🏛️ 1. DECORATIVE BACKGROUND LAYERS */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[size:40px_40px] opacity-[0.04] dark:opacity-[0.07]" />

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute top-1/2 -right-20 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute top-1/2 right-0 translate-x-1/3 -translate-y-1/2 text-blue-600 opacity-[0.03]">
        <ShieldCheck size={800} strokeWidth={0.5} />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <Suspense
          fallback={
            <div className="animate-pulse space-y-10">
              <div className="h-24 w-2/3 rounded-3xl bg-slate-100 dark:bg-slate-800" />
              <div className="h-48 w-full max-w-xl rounded-[2rem] bg-slate-50 dark:bg-slate-900" />
            </div>
          }
        >
          <NotFoundContent />
        </Suspense>

        {/* 🏛️ 2. COMMAND ACTION BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 flex flex-col gap-5 sm:flex-row"
        >
          <Button
            asChild
            size="lg"
            className="h-16 rounded-2xl bg-blue-600 px-10 text-sm font-black shadow-[0_20px_40px_-12px_rgba(37,99,235,0.4)] transition-all hover:scale-105 active:scale-95"
          >
            <Link href="/" className="flex items-center gap-3">
              <ArrowLeft size={18} strokeWidth={2.5} />
              Return to Command Center
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-16 rounded-2xl border-slate-200 bg-white/80 px-10 text-sm font-black backdrop-blur-sm transition-all hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900/80"
          >
            <Link href="/services" className="flex items-center gap-3">
              <Search size={18} strokeWidth={2.5} />
              Audit Services
            </Link>
          </Button>
        </motion.div>

        {/* 🏛️ 3. SYSTEM METADATA FOOTER */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute right-6 bottom-10 left-6 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 md:flex-row dark:border-slate-900"
        >
          <div className="flex items-center gap-3 text-slate-300 dark:text-slate-700">
            <Terminal size={14} />
            <p className="font-mono text-[9px] font-black tracking-[0.4em] uppercase">
              System Identity Verified // Unlink-TH Intelligence Division
            </p>
          </div>
          <div className="font-mono text-[9px] font-bold tracking-widest text-slate-200 uppercase dark:text-slate-800">
            Node_Ref: 404_SEC_GATEWAY_V5
          </div>
        </motion.footer>
      </div>
    </main>
  )
}
