/** @format */

'use client'

import React, { useMemo } from 'react'
import { allServices } from '@/data/services/all-services'
import { ServiceListRow } from './ServiceListRow'
import {
  Search,
  Shield,
  UserCheck,
  FileText,
  Lock,
  Database,
  Globe,
  EyeOff,
  ShieldAlert,
  Activity,
} from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * [STRATEGY: TECHNICAL DIRECTORY LAYOUT v5.0]
 * - Fix: Removed unused 'ChevronRight' to resolve Lint warning.
 * - UX: ใช้ 'Containerized Rows' เพื่อแยกข้อมูลออกเป็นโมดูลที่ชัดเจนและสแกนง่าย
 * - Technical Signal: เพิ่ม 'Vertical Selection Accent' เพื่อเน้นย้ำสถานะการใช้งาน
 */

export function ServiceGrid() {
  // 🏛️ Icon Registry: Pre-rendering for optimal performance and no layout shifts
  const iconMap = useMemo<Record<string, React.ReactNode>>(
    () => ({
      search: <Search size={20} strokeWidth={1.5} />,
      shield: <Shield size={20} strokeWidth={1.5} />,
      'user-check': <UserCheck size={20} strokeWidth={1.5} />,
      'file-text': <FileText size={20} strokeWidth={1.5} />,
      lock: <Lock size={20} strokeWidth={1.5} />,
      database: <Database size={20} strokeWidth={1.5} />,
      globe: <Globe size={20} strokeWidth={1.5} />,
      'eye-off': <EyeOff size={20} strokeWidth={1.5} />,
      'shield-alert': <ShieldAlert size={20} strokeWidth={1.5} />,
    }),
    [],
  )

  return (
    <section className="relative overflow-hidden bg-white py-32 lg:py-48 dark:bg-slate-950">
      {/* 🧩 Grid Background: Engineering Blueprint style */}
      <div className="absolute inset-0 z-0 bg-[url('/images/grid-pattern.svg')] [mask-image:radial-gradient(black,transparent_90%)] opacity-[0.03]" />

      <div className="relative z-10 container mx-auto max-w-7xl px-6">
        {/* 🏛️ 1. TABLE HEADER: System Manifest Labels */}
        <div className="mb-6 hidden grid-cols-12 items-center rounded-2xl bg-slate-50/80 px-10 py-5 md:grid dark:bg-slate-900/50">
          <div className="col-span-1">
            <span className="font-mono text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase">
              ID
            </span>
          </div>
          <div className="col-span-5 flex items-center gap-3">
            <Activity size={14} className="animate-pulse text-blue-600" />
            <span className="font-mono text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase">
              Operational Protocol
            </span>
          </div>
          <div className="col-span-4 pl-4">
            <span className="font-mono text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase">
              Capability Scope
            </span>
          </div>
          <div className="col-span-2 text-right">
            <span className="font-mono text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase">
              Auth_Status
            </span>
          </div>
        </div>

        {/* 🏛️ 2. DATA MANIFEST: Modular System Rows */}
        <div className="space-y-4">
          {allServices.map((service) => (
            <div
              key={service.id}
              className={cn(
                'group relative overflow-hidden rounded-[1.25rem] border border-slate-100 bg-white transition-all duration-300',
                'hover:border-blue-600/30 hover:bg-slate-50/50 hover:shadow-2xl hover:shadow-blue-500/5',
                'dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-900/40',
              )}
            >
              {/* Vertical Selection Accent */}
              <div className="absolute top-0 left-0 h-full w-1.5 bg-blue-600 opacity-0 transition-all duration-300 group-hover:opacity-100" />

              <div className="px-2">
                <ServiceListRow
                  service={service}
                  icon={iconMap[service.iconName] || <Shield size={20} />}
                />
              </div>
            </div>
          ))}
        </div>

        {/* 🏛️ 3. SYSTEM LOG FOOTER: Integrity & Compliance */}
        <div className="mt-24 flex flex-col items-center justify-between gap-12 border-t border-slate-100 pt-16 md:flex-row dark:border-slate-900">
          <div className="flex items-center gap-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-inner dark:bg-blue-900/20">
              <Shield size={28} strokeWidth={1.5} />
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2.5">
                <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                <p className="font-mono text-[11px] font-black tracking-widest text-slate-900 uppercase dark:text-white">
                  Verified Integrity Status
                </p>
              </div>
              <p className="font-thai text-[14px] font-medium text-slate-500 dark:text-slate-400">
                พร้อมดำเนินการภายใต้มาตรฐานความปลอดภัยข้อมูลระดับสูงสุด (ISO/IEC
                27001 Protocol)
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-3">
            <div className="flex items-center gap-6 font-mono text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">
              <span>Node: UN-TH-MAIN</span>
              <div className="h-4 w-px bg-slate-200 dark:bg-slate-800" />
              <span className="text-blue-600">Access: Authorized</span>
            </div>
            <span className="font-mono text-[9px] tracking-[0.5em] text-slate-300 uppercase dark:text-slate-700">
              Manifest_Build_v5.0_Secure
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
