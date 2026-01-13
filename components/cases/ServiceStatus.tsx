/** @format */

'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { CheckCircle2, Clock, ShieldAlert, Activity } from 'lucide-react'

/**
 * [STRATEGY: OPERATIONAL STATUS INDICATOR v5.0]
 * - Fix: Removed unused 'Loader2' to resolve Lint warning.
 * - Engineering: ใช้ระบบ Memoization เพื่อป้องกันการ Re-render ของ Configuration Object
 * - Aesthetics: ออกแบบให้เป็น High-density UI ที่แสดงข้อมูลได้ครบถ้วนในพื้นที่จำกัด
 */

export type ProjectStatus = 'Completed' | 'In Progress' | 'Pending' | 'Archived'

interface ServiceStatusProps {
  status: ProjectStatus
  className?: string
}

export function ServiceStatus({ status, className }: ServiceStatusProps) {
  const statusConfig = React.useMemo(
    () => ({
      Completed: {
        label: 'Resolved',
        subLabel: 'Outcome_Secure',
        icon: <CheckCircle2 size={12} strokeWidth={2.5} />,
        styles:
          'text-emerald-600 border-emerald-500/15 bg-emerald-50/50 dark:text-emerald-400 dark:border-emerald-400/20 dark:bg-emerald-400/5',
        dot: 'bg-emerald-500',
        pulse: false,
      },
      'In Progress': {
        label: 'Active',
        subLabel: 'Protocol_Running',
        icon: (
          <Activity size={12} strokeWidth={2.5} className="animate-pulse" />
        ),
        styles:
          'text-blue-600 border-blue-500/15 bg-blue-50/50 dark:text-blue-400 dark:border-blue-400/20 dark:bg-blue-400/5',
        dot: 'bg-blue-600',
        pulse: true,
      },
      Pending: {
        label: 'Queue',
        subLabel: 'Auth_Awaiting',
        icon: <Clock size={12} strokeWidth={2.5} />,
        styles:
          'text-slate-500 border-slate-500/15 bg-slate-50/50 dark:text-slate-400 dark:border-slate-400/20 dark:bg-slate-400/5',
        dot: 'bg-slate-400',
        pulse: false,
      },
      Archived: {
        label: 'Archived',
        subLabel: 'Data_Encrypted',
        icon: <ShieldAlert size={12} strokeWidth={2.5} />,
        styles:
          'text-amber-600 border-amber-500/15 bg-amber-50/50 dark:text-amber-400 dark:border-amber-400/20 dark:bg-amber-400/5',
        dot: 'bg-amber-500',
        pulse: false,
      },
    }),
    [],
  )

  const current = statusConfig[status] || statusConfig['Pending']

  return (
    <div
      className={cn(
        'group inline-flex items-center gap-3 rounded-full border px-4 py-1.5 transition-all duration-300',
        current.styles,
        className,
      )}
    >
      {/* 🏛️ 1. STATUS DOT & PULSE INDICATOR */}
      <div className="relative flex h-2 w-2 items-center justify-center">
        {current.pulse && (
          <span
            className={cn(
              'absolute h-full w-full animate-ping rounded-full opacity-30',
              current.dot,
            )}
          />
        )}
        <span
          className={cn(
            'relative h-1.5 w-1.5 rounded-full shadow-[0_0_4px_rgba(0,0,0,0.1)]',
            current.dot,
          )}
        />
      </div>

      {/* 🏛️ 2. IDENTITY LABEL SYSTEM */}
      <div className="flex flex-col leading-[1.1]">
        <span className="font-mono text-[10px] font-black tracking-[0.15em] uppercase">
          {current.label}
        </span>
        <span className="font-mono text-[6px] font-black tracking-[0.2em] uppercase opacity-40">
          {current.subLabel}
        </span>
      </div>

      {/* 🏛️ 3. OPERATIONAL ICON */}
      <div className="ml-1 border-l border-current/10 pl-2.5 text-[10px] opacity-50 transition-all duration-300 group-hover:opacity-100">
        {current.icon}
      </div>
    </div>
  )
}
