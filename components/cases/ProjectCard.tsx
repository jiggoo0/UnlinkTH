/** @format */

import Link from 'next/link'
import { ArrowRight, CheckCircle2, Clock, ShieldCheck } from 'lucide-react'
import { Project } from '@/types/project'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
  className?: string
}

/**
 * [STRATEGY: INTELLIGENCE CARD ARCHITECTURE]
 * - รองรับ Dark Mode อย่างสมบูรณ์
 * - เน้นความ Scannability ของข้อมูลเชิงเทคนิค
 * - ใช้มาตรฐานการจัดวางแบบ Report-Style
 */

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <div
      className={cn(
        'group relative flex flex-col border border-slate-100 bg-white p-8 transition-all duration-500',
        'hover:border-blue-600/20 hover:shadow-[32px_32px_64px_-16px_rgba(0,0,0,0.03)]',
        'dark:border-slate-800 dark:bg-slate-950 dark:hover:border-blue-500/30',
        className,
      )}
    >
      {/* 🏛️ Header: Meta Information */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShieldCheck size={12} className="text-blue-600" />
          <span className="text-[10px] font-black tracking-[0.2em] text-blue-600 uppercase">
            {project.category}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase">
          <Clock size={12} />
          {project.duration}
        </div>
      </div>

      {/* 🏛️ Main Content */}
      <div className="flex flex-1 flex-col space-y-4">
        <h3 className="text-xl leading-tight font-black tracking-tighter text-slate-950 transition-colors group-hover:text-blue-600 md:text-2xl dark:text-white">
          {project.title}
        </h3>

        <p className="font-thai line-clamp-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          {project.description}
        </p>

        {/* 🏛️ Strategic Outcome Badge: จุดขายที่ปิดการขาย */}
        <div className="mt-auto pt-6">
          <div className="flex items-center gap-3 rounded-sm bg-slate-50 px-4 py-3 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
            <CheckCircle2 size={16} className="flex-shrink-0 text-blue-600" />
            <span className="text-[11px] leading-snug font-bold tracking-tight uppercase">
              {project.outcome}
            </span>
          </div>
        </div>
      </div>

      {/* 🏛️ Action Footer */}
      <Link
        href={`/cases/${project.slug}`}
        className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6 text-[10px] font-black tracking-widest text-slate-900 uppercase transition-all group-hover:text-blue-600 dark:border-slate-800 dark:text-slate-300 dark:group-hover:text-blue-400"
      >
        <span className="flex items-center gap-2">
          Review Operation Protocol
        </span>
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-2"
        />
      </Link>
    </div>
  )
}
