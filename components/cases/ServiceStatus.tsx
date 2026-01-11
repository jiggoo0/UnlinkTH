/** @format */

'use client'

import { cn } from '@/lib/utils'
import { CheckCircle2, Loader2, Clock, ShieldAlert } from 'lucide-react'

/**
 * [STRATEGY: OPERATIONAL STATUS INDICATOR]
 * - Authority: ใช้สีและไอคอนที่สื่อถึงความปลอดภัยและผลลัพธ์ที่ชัดเจน
 * - Precision: แยก Configuration ออกจาก Rendering เพื่อความง่ายในการดูแลรักษา
 * - Performance: ใช้ Lucide icons แบบปรับแต่งขนาดให้เล็กและคมชัดที่สุด
 */

export type ProjectStatus = 'Completed' | 'In Progress' | 'Pending' | 'Archived'

interface ServiceStatusProps {
  status: ProjectStatus
  className?: string
}

export function ServiceStatus({ status, className }: ServiceStatusProps) {
  // 🏛️ Configuration: กำหนดค่าตามมาตรฐานสถาบัน
  const statusConfig: Record<
    ProjectStatus,
    { label: string; icon: React.ReactNode; styles: string; dot: string }
  > = {
    Completed: {
      label: 'Outcome Resolved',
      icon: <CheckCircle2 size={11} strokeWidth={3} />,
      styles:
        'text-emerald-700 bg-emerald-50/50 border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-800 dark:text-emerald-400',
      dot: 'bg-emerald-500',
    },
    'In Progress': {
      label: 'Operation Active',
      icon: <Loader2 size={11} className="animate-spin" strokeWidth={3} />,
      styles:
        'text-blue-700 bg-blue-50/50 border-blue-200 dark:bg-blue-950/30 dark:border-blue-800 dark:text-blue-400',
      dot: 'bg-blue-500',
    },
    Pending: {
      label: 'Under Review',
      icon: <Clock size={11} strokeWidth={3} />,
      styles:
        'text-slate-500 bg-slate-50/50 border-slate-200 dark:bg-slate-900/50 dark:border-slate-800 dark:text-slate-400',
      dot: 'bg-slate-400',
    },
    Archived: {
      label: 'Secured Archive',
      icon: <ShieldAlert size={11} strokeWidth={3} />,
      styles:
        'text-amber-700 bg-amber-50/50 border-amber-200 dark:bg-amber-950/30 dark:border-amber-800 dark:text-amber-400',
      dot: 'bg-amber-500',
    },
  }

  const current = statusConfig[status] || statusConfig['Pending']

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-sm border px-2.5 py-1 text-[9px] font-black tracking-[0.15em] uppercase transition-all duration-300',
        current.styles,
        className,
      )}
    >
      {/* Status Icon */}
      <span className="flex-shrink-0">{current.icon}</span>

      {/* Authority Label: ใช้ภาษาอังกฤษเพื่อความเป็นสากลและดูน่าเชื่อถือ */}
      <span className="leading-none">{current.label}</span>

      {/* Pulse Indicator: แสดงถึงความเคลื่อนไหวของระบบ */}
      <span
        className={cn(
          'h-1 w-1 rounded-full',
          current.dot,
          (status === 'In Progress' || status === 'Completed') &&
            'animate-pulse',
        )}
      />
    </div>
  )
}
