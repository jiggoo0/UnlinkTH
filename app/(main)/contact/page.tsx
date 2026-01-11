/** @format */

'use client'

import React from 'react'
import { ContactForm } from '@/components/contact/ContactForm'
import { TrustBadge } from '@/components/shared/trust-badge'
import { Clock, Shield, Lock, Fingerprint } from 'lucide-react'

/**
 * [STRATEGY: THE STRUCTURAL MINIMALIST - CONTACT ARCHITECTURE]
 */

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-100 dark:bg-slate-950">
      <div className="container mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-40">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-12 xl:gap-24">
          <div className="flex flex-col justify-between lg:col-span-5">
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center bg-slate-950 text-white dark:bg-blue-600">
                  <Fingerprint size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase">
                    Unlink Protocol
                  </span>
                  <span className="text-[9px] font-bold tracking-widest text-blue-600 uppercase">
                    Identity Protection Unit
                  </span>
                </div>
              </div>
              <h1 className="text-7xl leading-[0.8] font-black tracking-tighter text-slate-950 uppercase md:text-9xl dark:text-white">
                Secure <br />
                <span className="font-light text-slate-100 italic dark:text-slate-800">
                  Inquiry
                </span>
              </h1>
              <div className="max-w-md space-y-6 border-l-2 border-blue-600 pl-8">
                <p className="font-thai text-xl leading-relaxed font-medium text-slate-500 dark:text-slate-400">
                  กรุณากรอกรายละเอียดเพื่อให้ผู้เชี่ยวชาญประเมินสถานการณ์เบื้องต้น
                  <span className="mt-4 block text-sm font-bold text-slate-950 dark:text-white">
                    ข้อมูลของท่านจะถูกเข้ารหัสและทำลายทิ้งทันที
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-20 space-y-1 border-t border-slate-100 pt-10 dark:border-slate-800">
              {[
                {
                  icon: <Clock size={16} />,
                  label: 'Response SLA',
                  val: 'ภายใน 24 ชั่วโมง',
                },
                {
                  icon: <Shield size={16} />,
                  label: 'Data Policy',
                  val: 'Zero-Retention',
                },
                {
                  icon: <Lock size={16} />,
                  label: 'Encryption',
                  val: 'End-to-End Secure',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-4 transition-all hover:translate-x-1"
                >
                  <div className="flex items-center gap-4 text-slate-400">
                    <span className="text-blue-600">{item.icon}</span>
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-[11px] font-black text-slate-950 uppercase dark:text-white">
                    {item.val}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative lg:col-span-7">
            <div className="relative border-2 border-slate-950 bg-white p-8 md:p-14 dark:border-slate-800 dark:bg-slate-950">
              <div className="mb-14 border-b border-slate-50 pb-8 dark:border-slate-900">
                <div className="mb-3 flex items-center gap-3">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
                  <h3 className="text-[11px] font-black tracking-[0.4em] text-blue-600 uppercase">
                    Protocol: Information Request
                  </h3>
                </div>
                <p className="font-thai text-sm font-bold text-slate-400">
                  แบบฟอร์มบันทึกข้อมูลเพื่อการประเมิน (NDA Active)
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function ContactMethod({ label, val }: { label: string; val: string }) {
  return (
    <div className="space-y-1">
      <span className="text-[9px] font-black tracking-widest text-slate-400 uppercase">
        {label}
      </span>
      <p className="cursor-pointer text-sm font-black text-slate-950 transition-colors hover:text-blue-600 dark:text-white">
        {val}
      </p>
    </div>
  )
}
