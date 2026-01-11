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
} from 'lucide-react'

/**
 * [STRATEGY: TECHNICAL DIRECTORY LAYOUT]
 * - สไตล์สารบบทางเทคนิค (Blueprint/Manifest style)
 * - รองรับ Responsive: ปรับจากตาราง 12 คอลัมน์เป็น Stack ในมือถือ
 * - Optimization: แก้ไข Type Error TS2322 โดยการลบ unused index prop
 */

export function ServiceGrid() {
  // 🏛️ Icon Registry: จัดการไอคอนทั้งหมดด้วย useMemo เพื่อประสิทธิภาพ
  const iconMap = useMemo<Record<string, React.ReactNode>>(
    () => ({
      search: <Search size={18} strokeWidth={1.5} />,
      shield: <Shield size={18} strokeWidth={1.5} />,
      'user-check': <UserCheck size={18} strokeWidth={1.5} />,
      'file-text': <FileText size={18} strokeWidth={1.5} />,
      lock: <Lock size={18} strokeWidth={1.5} />,
      database: <Database size={18} strokeWidth={1.5} />,
      globe: <Globe size={18} strokeWidth={1.5} />,
      'eye-off': <EyeOff size={18} strokeWidth={1.5} />,
      'shield-alert': <ShieldAlert size={18} strokeWidth={1.5} />,
    }),
    [],
  )

  return (
    <section className="bg-white py-24 selection:bg-blue-100 dark:bg-slate-950">
      <div className="container mx-auto max-w-6xl px-6">
        {/* 🏛️ Technical Table Header: ปรากฏเฉพาะบน Desktop */}
        <div className="mb-6 hidden grid-cols-12 border-b border-slate-900 pb-6 md:grid dark:border-slate-100">
          <div className="col-span-1">
            <span className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">
              ID
            </span>
          </div>
          <div className="col-span-5">
            <span className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">
              Protocol Name
            </span>
          </div>
          <div className="col-span-4 pl-4">
            <span className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">
              Description & Scope
            </span>
          </div>
          <div className="col-span-2 text-right">
            <span className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">
              Operational Status
            </span>
          </div>
        </div>

        {/* 🏛️ Service Rows: การจัดวางแบบข้อมูลหนาแน่น (Compact) */}
        <div className="group/grid divide-y divide-slate-100 border-t border-slate-100 dark:divide-slate-900 dark:border-slate-900">
          {allServices.map((service) => (
            <ServiceListRow
              key={service.id}
              // ✅ FIXED: ลบ index={index} ออกเพื่อให้ตรงกับ ServiceListRow Props ใหม่
              service={service}
              icon={iconMap[service.iconName] || <Shield size={18} />}
            />
          ))}
        </div>

        {/* 🏛️ System Footer Note */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-100 pt-10 text-[10px] font-bold text-slate-400 md:flex-row dark:border-slate-900">
          <div className="flex items-center gap-4">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            <p className="font-thai tracking-wide">
              * ระบบพร้อมดำเนินการภายใต้มาตรฐานความปลอดภัยข้อมูลระดับสูงสุด
              (ISO/IEC Ready)
            </p>
          </div>
          <div className="flex items-center gap-8 tracking-[0.2em] uppercase">
            <span>Directory v4.0.2</span>
            <span className="text-slate-200 dark:text-slate-800">|</span>
            <span className="text-slate-900 dark:text-slate-100">
              Confidential Handling
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
