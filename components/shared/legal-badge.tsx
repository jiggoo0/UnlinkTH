/** @format */

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Scale, FileText, Globe } from 'lucide-react'

/**
 * [STRATEGY: LEGAL AUTHORITY v5.5]
 * - Fix: Removed unused 'cn' import to resolve lint warning.
 * - Interaction: อัปเกรด Hover State ให้มีการเปลี่ยนสีไอคอนแบบ Dynamic
 * - Context: เน้น Metadata "Verified // Cycle_2026.01" เพื่อแสดงความสดใหม่ของระบบ
 */

interface BadgeItemProps {
  icon: React.ElementType
  label: string
  subLabel: string
}

const BadgeItem = ({ icon: Icon, label, subLabel }: BadgeItemProps) => (
  <div className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-500 hover:border-blue-600/30 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-blue-600/5">
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white dark:bg-slate-900 dark:text-slate-400">
      <Icon className="h-6 w-6" strokeWidth={1.5} />
    </div>
    <div className="flex flex-col">
      <span className="font-mono text-[9px] font-black tracking-[0.2em] text-blue-600/70 uppercase">
        {subLabel}
      </span>
      <span className="font-sans text-[13px] font-black tracking-tight text-slate-900 uppercase dark:text-white">
        {label}
      </span>
    </div>
  </div>
)

export default function LegalBadge() {
  const badges = [
    {
      icon: ShieldCheck,
      label: 'PDPA Compliant',
      subLabel: 'TH-Privacy Act',
    },
    { icon: Globe, label: 'GDPR Standards', subLabel: 'Global Safe-net' },
    {
      icon: Scale,
      label: 'Legal Protocol',
      subLabel: 'Right to Erasure',
    },
    {
      icon: FileText,
      label: 'Security Level 4',
      subLabel: 'ISO/IEC-27001',
    },
  ]

  return (
    <section className="relative w-full overflow-hidden border-y border-slate-100 bg-white/50 py-12 dark:border-slate-900 dark:bg-transparent">
      {/* 🏛️ Infrastructure Accent: Blue vertical marker */}
      <div className="absolute top-0 left-0 h-full w-1 bg-blue-600" />

      <div className="container mx-auto px-6">
        {/* Header Metadata Section */}
        <div className="mb-10 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-mono text-[10px] font-black tracking-[0.4em] text-slate-400 uppercase">
              Operational Certification
            </h3>
            <p className="font-thai text-[13px] font-bold text-slate-500">
              ระบบการทำงานภายใต้การควบคุมมาตรฐานความปลอดภัยดิจิทัลสากล
            </p>
          </div>
          <div className="h-px w-full flex-1 bg-slate-100 md:mx-10 md:w-auto dark:bg-slate-800" />
        </div>

        {/* Badges Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {badges.map((badge, index) => (
            <BadgeItem
              key={index}
              icon={badge.icon}
              label={badge.label}
              subLabel={badge.subLabel}
            />
          ))}
        </motion.div>

        {/* 🏛️ System Metadata Footer: Real-time verification feel */}
        <div className="mt-12 flex items-center justify-center gap-4 text-center opacity-40">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-600" />
          <p className="font-mono text-[9px] font-bold tracking-widest text-slate-500 uppercase">
            Compliance Sync: Verified // Cycle_2026.01
          </p>
        </div>
      </div>
    </section>
  )
}
