/** @format */

'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ShieldAlert, RefreshCw, Home, Lock } from 'lucide-react'

/**
 * [STRATEGY: THE STABILIZER V5.0]
 * - Fix: Removed unused 'ChevronRight' and 'cn' to resolve Lint warnings.
 * - UX: เปลี่ยน Error Page ให้เป็น "Security Intervention" เพื่อรักษาภาพลักษณ์ความปลอดภัย
 * - Trust: ใช้ Trace ID เพื่อสื่อสารถึงความโปร่งใสในการตรวจสอบระบบ (Auditability)
 */

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // [INTEL LOG] บันทึกเหตุการณ์ลงในระบบความมั่นคงของแอปพลิเคชัน
    console.error('STABILIZER_ALERT_ID:', error.digest, error)
  }, [error])

  return (
    <div className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-white px-6 text-center dark:bg-slate-950">
      {/* 🏛️ 1. ATMOSPHERIC LAYER: Subtle Security Glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-[120px] dark:bg-blue-900/10" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* 🏛️ 2. IDENTITY ICON: High-Authority Shield */}
        <div className="group mb-12">
          <div className="relative flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] ring-1 ring-slate-100 transition-all duration-700 group-hover:rotate-[360deg] dark:bg-slate-900 dark:ring-slate-800">
            <ShieldAlert
              size={42}
              strokeWidth={1.5}
              className="text-blue-600 transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg dark:bg-blue-600">
            <Lock size={14} />
          </div>
        </div>

        {/* 🏛️ 3. CONTENT: Authoritative Response */}
        <div className="mb-12 max-w-2xl space-y-6">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-slate-200 dark:bg-slate-800" />
            <h2 className="font-mono text-[11px] font-black tracking-[0.5em] text-blue-600 uppercase">
              Protocol Interruption
            </h2>
            <span className="h-px w-10 bg-slate-200 dark:bg-slate-800" />
          </div>

          <h1 className="font-sans text-4xl font-black tracking-tighter text-slate-900 md:text-5xl dark:text-white">
            ระบบตรวจพบความขัดแย้ง <br />
            <span className="text-blue-600 italic">ในการประมวลผลข้อมูล</span>
          </h1>

          <p className="font-thai mx-auto max-w-lg text-lg leading-relaxed font-medium text-slate-500 dark:text-slate-400">
            เพื่อรักษาความปลอดภัยสูงสุดให้กับข้อมูลส่วนบุคคลของคุณ
            ระบบได้หยุดการทำงานชั่วคราวเพื่อตรวจสอบความถูกต้อง (System Integrity
            Check) กรุณาทำการกู้คืนการเชื่อมต่อใหม่อีกครั้ง
          </p>
        </div>

        {/* 🏛️ 4. ACTIONS: Strategic Recovery */}
        <div className="flex w-full flex-col gap-5 sm:w-auto sm:flex-row">
          <Button
            onClick={() => reset()}
            size="lg"
            className="h-16 min-w-[240px] rounded-2xl bg-blue-600 text-base font-black shadow-[0_20px_40px_-12px_rgba(37,99,235,0.4)] transition-all hover:scale-105 active:scale-95"
          >
            <RefreshCw size={20} className="mr-3" />
            เชื่อมต่อระบบใหม่ (Reset)
          </Button>

          <Button
            variant="outline"
            asChild
            size="lg"
            className="h-16 min-w-[240px] rounded-2xl border-slate-200 bg-white text-base font-black dark:border-slate-800 dark:bg-slate-900"
          >
            <Link href="/">
              <Home size={20} className="mr-3" />
              กลับสู่ศูนย์ปฏิบัติการ
            </Link>
          </Button>
        </div>

        {/* 🏛️ 5. SUPPORT TRACEABILITY */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-3 rounded-full border border-slate-100 bg-slate-50/50 px-6 py-2 dark:border-slate-800 dark:bg-slate-900/50">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-600 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600"></span>
            </span>
            <p className="font-mono text-[10px] font-black tracking-widest text-slate-400 uppercase">
              Security Trace ID:{' '}
              <span className="text-slate-900 dark:text-blue-500">
                {error.digest?.toUpperCase() || 'UNL-CORE-500'}
              </span>
            </p>
          </div>
          <p className="font-mono text-[10px] font-bold text-slate-400 italic opacity-60">
            TECHNICAL INTELLIGENCE TEAM HAS BEEN SYNCHRONIZED
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
