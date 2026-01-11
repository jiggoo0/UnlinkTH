/** @format */

'use client'

import React, { useState } from 'react'
import { ShieldCheck, Lock, Loader2, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
// ✅ FIX: ลบ unused import 'cn' ออก
import { toast } from 'sonner'

/**
 * [STRATEGY: CONTACT FORM OPERATIONAL INTERFACE]
 * - Fix: ลบ Unused Imports (Send, CheckCircle2, cn)
 * - Error Handling: จัดการตัวแปร error ใน catch เพื่อลบ Warning
 * - UX: เน้นย้ำสถานะ "Authorized Inquiry" เพื่อสร้างความรู้สึกปลอดภัย
 */

export function ContactForm() {
  const [isPending, setIsPending] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsPending(true)

    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    try {
      // 🏛️ ยิง API ไปยังระบบแจ้งเตือน LINE Notify
      const response = await fetch('/api/line-notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) throw new Error('Security Protocol Violation')

      setIsSuccess(true)
      toast.success('Inquiry Authorized: ข้อมูลเข้าสู่ระบบรักษาความลับแล้ว')
    } catch (err) {
      // ✅ FIX: เปลี่ยน error เป็น err และเรียกใช้เพื่อลบ Warning
      console.error('Submission Error:', err)
      toast.error(
        'Submission Failed: ไม่สามารถเชื่อมต่อระบบรักษาความลับได้ โปรดลองอีกครั้ง',
      )
    } finally {
      setIsPending(false)
    }
  }

  // UI สำหรับสถานะส่งข้อมูลสำเร็จ
  if (isSuccess) {
    return (
      <div className="border-2 border-slate-950 bg-white p-14 text-center shadow-[12px_12px_0px_0px_rgba(2,6,23,1)] dark:border-blue-600 dark:bg-slate-950 dark:shadow-[12px_12px_0px_0px_rgba(30,41,59,1)]">
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center bg-blue-600 text-white">
            <ShieldCheck size={40} />
          </div>
        </div>
        <h3 className="mb-4 text-3xl font-black tracking-tighter text-slate-950 uppercase dark:text-white">
          Transmission Complete
        </h3>
        <p className="font-thai mx-auto max-w-sm text-slate-500 dark:text-slate-400">
          ข้อมูลของคุณถูกเข้ารหัสและส่งไปยังหน่วยปฏิบัติการแล้ว
          เจ้าหน้าที่ที่ได้รับอนุญาตจะติดต่อกลับผ่านช่องทางที่คุณระบุ
        </p>
        <Button
          variant="outline"
          className="mt-10 rounded-none border-2 border-slate-950 font-black uppercase"
          onClick={() => setIsSuccess(false)}
        >
          Send New Briefing
        </Button>
      </div>
    )
  }

  return (
    <div className="group relative overflow-hidden border-2 border-slate-950 bg-white p-8 shadow-[12px_12px_0px_0px_rgba(2,6,23,1)] transition-all duration-700 md:p-14 dark:border-slate-800 dark:bg-slate-950 dark:shadow-[12px_12px_0px_0px_rgba(30,41,59,1)]">
      {/* 🏛️ สถานะเครือข่ายจำลอง */}
      <div className="mb-12 flex items-center justify-between border-b border-slate-100 pb-6 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          <span className="text-[9px] font-black tracking-[0.3em] text-slate-950 uppercase dark:text-white">
            Node: BKK-HQ-SECURE
          </span>
        </div>
        <div className="flex items-center gap-2 text-slate-300">
          <span className="text-[9px] font-bold">256-BIT ENCRYPTION</span>
          <Lock size={12} />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Identity Field */}
          <div className="space-y-2">
            <label className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
              Operational Name / Org
            </label>
            <input
              required
              name="name"
              className="font-thai w-full border-b-2 border-slate-100 bg-transparent py-3 transition-colors outline-none focus:border-blue-600 dark:border-slate-800"
              placeholder="ระบุตัวตนของคุณ"
            />
          </div>

          {/* Contact Field */}
          <div className="space-y-2">
            <label className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
              Secure Callback Channel
            </label>
            <input
              required
              name="contact"
              className="font-thai w-full border-b-2 border-slate-100 bg-transparent py-3 transition-colors outline-none focus:border-blue-600 dark:border-slate-800"
              placeholder="Email หรือ เบอร์โทรศัพท์"
            />
          </div>

          {/* Classification Selection */}
          <div className="space-y-2 md:col-span-2">
            <label className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
              Protocol Classification
            </label>
            <div className="relative border-b-2 border-slate-100 dark:border-slate-800">
              <select
                name="category"
                className="font-thai w-full appearance-none bg-transparent py-3 outline-none focus:text-blue-600 dark:bg-slate-950 dark:text-white"
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
                className="pointer-events-none absolute top-3 right-0 text-slate-300"
                size={16}
              />
            </div>
          </div>

          {/* Message Area */}
          <div className="space-y-2 md:col-span-2">
            <label className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
              Briefing Details (Classified)
            </label>
            <textarea
              required
              name="message"
              rows={4}
              className="font-thai w-full border-2 border-slate-100 bg-slate-50/30 p-4 transition-all outline-none focus:border-blue-600 focus:bg-white dark:border-slate-800 dark:bg-slate-900/50 dark:text-white"
              placeholder="ระบุลิงก์หรือรายละเอียดที่ต้องการให้ดำเนินการ..."
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col items-center justify-between gap-8 border-t border-slate-100 pt-8 md:flex-row dark:border-slate-800">
          <div className="flex items-center gap-4 text-slate-400">
            <ShieldCheck size={24} className="text-blue-600" />
            <span className="font-thai text-[10px] leading-tight">
              Inquiry นี้ได้รับการคุ้มครองภายใต้ <br />
              <strong className="text-slate-900 uppercase dark:text-white">
                UNLINK Strict Secrecy Policy
              </strong>
            </span>
          </div>

          <Button
            type="submit"
            disabled={isPending}
            className="h-16 w-full rounded-none bg-slate-950 px-12 text-[12px] font-black tracking-[0.3em] text-white uppercase transition-all hover:bg-blue-600 md:w-auto dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            {isPending ? (
              <Loader2 className="animate-spin" />
            ) : (
              'Authorize Inquiry'
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
