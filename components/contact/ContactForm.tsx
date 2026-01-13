/** @format */

'use client'

import * as React from 'react'
import {
  ShieldCheck,
  Lock,
  Loader2,
  ChevronDown,
  Terminal,
  Send,
  RefreshCcw,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'

/**
 * [STRATEGY: CONTACT FORM OPERATIONAL INTERFACE v5.0]
 * - Fix: Resolved unused 'cn' and 'err' variables to pass Lint check.
 * - Architecture: ใช้ระบบการจัดการ Error แบบนิรนาม (Anonymous Catch) เนื่องจากใช้ Toast แจ้งเตือนรวม
 * - Visual: ยกระดับสถานะ Success ให้เป็น Full-screen Experience ภายใน Card
 */

export function ContactForm() {
  const [isPending, setIsPending] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsPending(true)

    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    try {
      const response = await fetch('/api/line-notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) throw new Error('Protocol Violation')

      setIsSuccess(true)
      toast.success('Inquiry Authorized: ข้อมูลเข้าสู่ระบบรักษาความลับแล้ว')
    } catch {
      toast.error('Submission Failed: โปรดตรวจสอบการเชื่อมต่ออินเทอร์เน็ต')
    } finally {
      setIsPending(false)
    }
  }

  // ✅ Success State: สะอาด พรีเมียม และมั่นใจ
  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[2.5rem] border border-slate-200 bg-white p-12 text-center shadow-2xl md:p-24 dark:border-slate-800 dark:bg-slate-950">
        <div className="relative mb-10">
          <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full bg-blue-600 text-white shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)]">
            <ShieldCheck size={56} strokeWidth={2.5} />
          </div>
          <div className="absolute inset-0 animate-ping rounded-full bg-blue-600/20" />
        </div>
        <h3 className="mb-6 font-sans text-4xl font-black tracking-tighter text-slate-900 uppercase md:text-5xl dark:text-white">
          Transmission <br /> Complete
        </h3>
        <p className="mx-auto max-w-md text-[16px] leading-relaxed font-medium text-slate-500 dark:text-slate-400">
          ข้อมูลของคุณถูกเข้ารหัสระดับสากลและส่งถึงทีมปฏิบัติการแล้ว
          เราจะทำการตรวจสอบเบื้องต้นและติดต่อกลับผ่านช่องทางที่คุณระบุโดยเร็วที่สุด
        </p>
        <Button
          variant="outline"
          shape="standard"
          className="mt-14 h-14 border-slate-200 px-12 font-bold tracking-[0.2em] uppercase transition-all hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-900"
          onClick={() => setIsSuccess(false)}
        >
          <RefreshCcw className="mr-3" size={16} /> New Briefing
        </Button>
      </div>
    )
  }

  return (
    <div className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-2xl transition-all duration-700 md:p-16 dark:border-slate-800 dark:bg-slate-950">
      {/* 🏛️ 1. SYSTEM HEADER */}
      <div className="mb-14 flex items-center justify-between border-b border-slate-100 pb-10 dark:border-slate-800">
        <div className="flex items-center gap-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white dark:bg-blue-600">
            <Terminal size={22} />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              <span className="font-mono text-[11px] font-black tracking-[0.25em] text-slate-900 uppercase dark:text-white">
                Secure Terminal Active
              </span>
            </div>
            <p className="font-mono text-[9px] font-bold tracking-widest text-slate-400 uppercase">
              Auth Path: Unlink-TH // Secure_Gateway_v5.0
            </p>
          </div>
        </div>
        <div className="hidden items-center gap-4 text-slate-400 md:flex">
          <span className="font-mono text-[10px] font-black tracking-widest opacity-60">
            AES-256-GCM
          </span>
          <div className="h-8 w-[1px] bg-slate-100 dark:bg-slate-800" />
          <Lock size={18} className="text-blue-600" />
        </div>
      </div>

      {/* 🏛️ 2. OPERATIONAL FORM */}
      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="space-y-3">
            <label className="px-1 font-mono text-[10px] font-black tracking-[0.25em] text-slate-400 uppercase">
              Operational Identity
            </label>
            <Input
              required
              name="name"
              placeholder="Full Name / Organization"
              className="h-14 bg-slate-50/50 dark:bg-slate-900/50"
            />
          </div>

          <div className="space-y-3">
            <label className="px-1 font-mono text-[10px] font-black tracking-[0.25em] text-slate-400 uppercase">
              Secure Callback Channel
            </label>
            <Input
              required
              name="contact"
              placeholder="Email or Phone Number"
              className="h-14 bg-slate-50/50 dark:bg-slate-900/50"
            />
          </div>

          <div className="space-y-3 md:col-span-2">
            <label className="px-1 font-mono text-[10px] font-black tracking-[0.25em] text-slate-400 uppercase">
              Protocol Classification
            </label>
            <div className="group relative">
              <select
                name="category"
                className="flex h-14 w-full appearance-none items-center justify-between rounded-xl border border-slate-200 bg-slate-50/50 px-5 py-2 text-sm font-bold transition-all outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900/50 dark:text-white"
              >
                <option value="data-removal">
                  Emergency: ลบข้อมูลส่วนตัวเร่งด่วน
                </option>
                <option value="reputation">
                  Corporate: บริหารจัดการชื่อเสียงองค์กร
                </option>
                <option value="identity">
                  Identity: ป้องกันการแอบอ้างตัวตน
                </option>
                <option value="other">Other: ปรึกษาประเด็นดิจิทัลอื่นๆ</option>
              </select>
              <ChevronDown
                className="pointer-events-none absolute top-1/2 right-5 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-blue-600"
                size={20}
              />
            </div>
          </div>

          <div className="space-y-3 md:col-span-2">
            <label className="px-1 font-mono text-[10px] font-black tracking-[0.25em] text-slate-400 uppercase">
              Briefing Details (Classified)
            </label>
            <textarea
              required
              name="message"
              rows={5}
              className="flex w-full rounded-2xl border border-slate-200 bg-slate-50/50 p-5 text-sm leading-relaxed font-medium transition-all outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900/50 dark:text-white"
              placeholder="โปรดระบุรายละเอียดของกรณีที่คุณต้องการให้ทีมปฏิบัติการเข้าจัดการ..."
            />
          </div>
        </div>

        {/* 🏛️ 3. FINAL AUTHORIZATION */}
        <div className="flex flex-col items-center justify-between gap-8 border-t border-slate-100 pt-10 md:flex-row dark:border-slate-800">
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-900/30">
              <ShieldCheck size={28} strokeWidth={2.5} />
            </div>
            <p className="text-[11px] leading-relaxed font-bold text-slate-500 uppercase dark:text-slate-400">
              Your inquiry is protected by <br />
              <span className="text-slate-950 dark:text-white">
                Unlink Secrecy Protocol (NDA)
              </span>
            </p>
          </div>

          <Button
            type="submit"
            disabled={isPending}
            size="lg"
            shape="standard"
            className="h-16 w-full px-12 text-[12px] font-black tracking-[0.3em] md:w-auto"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-3 animate-spin" size={18} />
                AUTHORIZING...
              </>
            ) : (
              <>
                AUTHORIZE INQUIRY <Send className="ml-3" size={18} />
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
