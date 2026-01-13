/** @format */

import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Activity,
} from 'lucide-react'
import { Project } from '@/types/project'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
  className?: string
}

/**
 * [STRATEGY: THE MISSION DOSSIER CARD v5.0]
 * - Fix: Removed unused 'Zap' icon to resolve Lint warning.
 * - Design: "Evidence-First" architecture เน้นโชว์ผลลัพธ์ที่จับต้องได้
 * - Branding: ใช้โทนสี Blue-Slate เพื่อสะท้อนความเป็นสถาบันด้านความปลอดภัย
 */

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <article
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 transition-all duration-500',
        'hover:-translate-y-1 hover:border-blue-600/30 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)]',
        'dark:border-slate-800 dark:bg-slate-950 dark:hover:border-blue-500/30',
        className,
      )}
    >
      {/* 🏛️ 1. OPERATIONAL TAGS & METADATA */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900/20 dark:text-blue-400 dark:ring-blue-900/40">
            <ShieldCheck size={18} />
          </div>
          <div className="flex flex-col">
            <span className="mb-0.5 font-mono text-[9px] font-black tracking-[0.2em] text-slate-400 uppercase">
              Dossier Category
            </span>
            <span className="font-mono text-[11px] font-black tracking-widest text-blue-600 uppercase dark:text-blue-400">
              {project.category}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-slate-100 bg-slate-50 px-3 py-1.5 dark:border-slate-800 dark:bg-slate-900">
          <Clock size={12} className="text-slate-400" />
          <span className="font-mono text-[10px] font-black tracking-tight text-slate-600 uppercase dark:text-slate-400">
            {project.duration}
          </span>
        </div>
      </div>

      {/* 🏛️ 2. IDENTITY & BRIEF */}
      <div className="flex flex-1 flex-col space-y-5">
        <Link href={`/cases/${project.slug}`} className="group/title">
          <h3 className="font-sans text-2xl leading-tight font-black tracking-tighter text-slate-900 transition-colors group-hover/title:text-blue-600 md:text-3xl dark:text-white dark:group-hover/title:text-blue-400">
            {project.title}
          </h3>
        </Link>

        <p className="font-thai line-clamp-3 text-[15px] leading-relaxed font-medium text-slate-500 dark:text-slate-400/80">
          {project.description}
        </p>

        {/* 🏛️ 3. STRATEGIC OUTCOME (High Impact Module) */}
        <div className="mt-auto pt-8">
          <div className="relative overflow-hidden rounded-[1.5rem] border border-blue-100 bg-blue-50/40 px-6 py-6 dark:border-blue-900/30 dark:bg-blue-900/10">
            {/* Visual Indicator: Pulse Effect */}
            <div className="absolute top-5 right-5">
              <Activity size={14} className="animate-pulse text-blue-600/30" />
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white shadow-[0_8px_16px_-4px_rgba(37,99,235,0.4)]">
                <CheckCircle2 size={16} strokeWidth={3} />
              </div>
              <div className="space-y-1.5">
                <span className="block font-mono text-[10px] font-black tracking-[0.3em] text-blue-600 uppercase">
                  Mission Success Outcome
                </span>
                <span className="font-thai block text-[14px] leading-snug font-black tracking-tight text-slate-900 dark:text-slate-100">
                  {project.outcome}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🏛️ 4. ACTION INTERFACE */}
      <Link
        href={`/cases/${project.slug}`}
        className="group/action mt-8 flex items-center justify-between border-t border-slate-100 pt-6 dark:border-slate-800"
      >
        <div className="flex flex-col">
          <span className="font-mono text-[9px] font-black tracking-[0.3em] text-slate-400 uppercase">
            Access Level
          </span>
          <span className="font-mono text-[11px] font-black tracking-[0.2em] text-slate-900 uppercase transition-colors group-hover:text-blue-600 dark:text-white">
            Review Case Study
          </span>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-xl transition-all group-hover:bg-blue-600 dark:bg-slate-800 dark:group-hover:bg-blue-600">
          <ArrowRight
            size={20}
            className="transition-transform group-hover:translate-x-1"
          />
        </div>
      </Link>
    </article>
  )
}
