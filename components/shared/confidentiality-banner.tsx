/** @format */

'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Lock, EyeOff, Trash2, ShieldCheck, FileKey } from 'lucide-react'

/**
 * [STRATEGY: CONFIDENTIALITY BUNKER v5.0]
 * - Fix: Removed unused 'ShieldAlert' and 'cn' to resolve linting errors.
 * - Architecture: ใช้โครงสร้าง Grid Matrix สำหรับการแสดงผล Security Features
 * - Trust: เน้นย้ำ Zero-Trace Policy ผ่าน Micro-interactions และสถานะแบบ Real-time
 */

interface BannerFeatureProps {
  icon: React.ElementType
  text: string
}

const BannerFeature = ({ icon: Icon, text }: BannerFeatureProps) => (
  <div className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 transition-all duration-500 hover:border-blue-500/30 hover:bg-white/10">
    <div className="flex-shrink-0 rounded-xl bg-blue-600/20 p-2.5 shadow-inner transition-transform group-hover:scale-110">
      <Icon className="h-5 w-5 text-blue-400" />
    </div>
    <span className="font-thai text-[14px] font-bold tracking-wide text-white/90">
      {text}
    </span>
  </div>
)

export default function ConfidentialityBanner() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="container mx-auto max-w-7xl px-6">
        {/* 🏛️ 1. MAIN BUNKER CONTAINER */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950 p-8 shadow-2xl md:p-16 lg:p-20">
          {/* Subtle Intelligence Grid Background */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Orbital Glow Effects */}
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-blue-600/5 blur-[100px]" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-12 lg:flex-row">
            {/* 🏛️ 2. CONTENT ARCHITECTURE */}
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2"
              >
                <div className="h-2 w-2 animate-pulse rounded-full bg-blue-500" />
                <span className="font-mono text-[10px] font-black tracking-[0.3em] text-blue-400 uppercase">
                  Data Protection Protocol
                </span>
              </motion.div>

              <div className="space-y-4">
                <h2 className="font-sans text-3xl font-black tracking-tighter text-white uppercase md:text-5xl">
                  ข้อมูลของคุณคือ <br className="hidden md:block" />
                  <span className="text-blue-500">ความลับสูงสุด</span>
                </h2>

                <p className="font-thai max-w-xl text-[16px] leading-relaxed font-medium text-slate-400 md:text-[18px]">
                  เรายึดมั่นในนโยบายทำลายข้อมูลทันที (Zero-Trace Policy)
                  ภายใต้สัญญา{' '}
                  <span className="text-white underline decoration-blue-500 underline-offset-4">
                    NDA
                  </span>{' '}
                  ที่มีผลคุ้มครองตามกฎหมาย 100% ในทุกระดับการปฏิบัติงาน
                </p>
              </div>

              {/* Verified Badge Terminal */}
              <div className="flex items-center justify-center gap-4 pt-4 lg:justify-start">
                <ShieldCheck className="text-blue-500" size={32} />
                <div className="h-10 w-[1px] bg-white/10" />
                <div className="flex flex-col text-left">
                  <span className="font-mono text-[9px] font-black tracking-widest text-slate-500 uppercase">
                    Verification Code
                  </span>
                  <span className="font-mono text-[11px] font-bold text-white uppercase">
                    ISO/IEC-27001-COMPLIANT
                  </span>
                </div>
              </div>
            </div>

            {/* 🏛️ 3. SECURITY FEATURES MATRIX */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:w-[480px]"
            >
              <BannerFeature icon={EyeOff} text="Anonymous Identity" />
              <BannerFeature icon={FileKey} text="Legal NDA Bound" />
              <BannerFeature icon={Trash2} text="Zero-Trace Purge" />
              <BannerFeature icon={Lock} text="End-to-End Encryption" />
            </motion.div>
          </div>
        </div>

        {/* 🏛️ 4. SYSTEM STATUS FOOTER */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 opacity-30 md:flex-row">
          <div className="flex items-center gap-2 font-mono text-[9px] font-black tracking-[0.4em] text-slate-500 uppercase">
            <div className="h-1 w-1 rounded-full bg-blue-500" />
            Bunker_Build_v5.0_Stable
          </div>
          <div className="mx-10 hidden h-px flex-1 bg-gradient-to-r from-transparent via-slate-800 to-transparent md:block" />
          <span className="font-mono text-[9px] font-black tracking-[0.4em] text-slate-500 uppercase">
            Authorized Personnel Only
          </span>
        </div>
      </div>
    </section>
  )
}
