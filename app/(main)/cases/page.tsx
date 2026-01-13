/** @format */

'use client'

import * as React from 'react'
import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Seo } from '@/components/seo/Seo'
import { SectionHeading } from '@/components/shared/section-heading'
import { ProjectCard } from '@/components/cases/ProjectCard'
import { ProjectFilter } from '@/components/cases/ProjectFilter'
import {
  ShieldCheck,
  Lock,
  Fingerprint,
  FileSearch,
  ShieldAlert,
  ChevronRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// Import Data Layer
import { allProjects, projectCategories } from '@/data/case/all-cases'

/**
 * [STRATEGY: THE VERIFIED ARCHIVE v4.0]
 * - Authority: ใช้โครงสร้าง Intelligence Grid ที่เน้นความโปร่งใสของผลลัพธ์ (Proven Track Record)
 * - UX: ระบบ Sticky Dashboard Filter ที่ช่วยให้การสำรวจข้อมูลเป็นไปอย่างรวดเร็ว
 * - Security: เน้นย้ำเรื่องการปกปิดตัวตน (Anonymization) ในทุกจุดสัมผัส
 */

export default function CasesPage() {
  const [activeTab, setActiveTab] = useState('ทั้งหมด')

  // Optimized Filter Logic
  const filteredProjects = useMemo(() => {
    if (activeTab === 'ทั้งหมด') return allProjects
    return allProjects.filter((project) => project.category === activeTab)
  }, [activeTab])

  return (
    <>
      <Seo
        title="Tactical Case Studies | บันทึกปฏิบัติการ UnlinkTH"
        description="สำรวจผลลัพธ์ปฏิบัติการจัดการข้อมูลดิจิทัลและการกู้คืนชื่อเสียงออนไลน์ ภายใต้นโยบายการรักษาความลับสูงสุด"
      />

      <main className="bg-background selection:bg-primary/10 min-h-screen pt-32 pb-24">
        <div className="container mx-auto max-w-7xl px-6">
          {/* 🏛️ 1. STRATEGIC HEADER */}
          <header className="mb-20 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <div className="bg-primary/10 text-primary border-primary/20 flex h-10 w-10 items-center justify-center rounded-xl border">
                <FileSearch size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-primary font-mono text-[10px] leading-none font-bold tracking-[0.4em] uppercase">
                  Verified Intelligence Records
                </span>
                <span className="text-muted-foreground mt-1 font-mono text-[8px] font-bold tracking-widest uppercase">
                  Database Access: Restricted // v4.0
                </span>
              </div>
            </motion.div>

            <SectionHeading
              badge="Execution Protocols"
              title="Tactical Archives"
              subtitle="พิสูจน์ผลลัพธ์ผ่านสถานการณ์จริงที่ได้รับการคัดสรร"
              description="เราเปลี่ยนวิกฤตออนไลน์ให้เป็นเหตุการณ์ที่ควบคุมได้ ศึกษาแนวทางการแก้ไขปัญหาเชิงลึกผ่านบันทึกปฏิบัติการที่ดัดแปลงเพื่อรักษาความเป็นส่วนตัวของเจ้าของเคสเป็นสำคัญ"
              align="left"
              className="mb-0 max-w-4xl"
            />
          </header>

          {/* 🏛️ 2. FILTER INTERFACE (Dashboard Interaction) */}
          <section className="border-border/50 bg-background/60 shadow-primary/5 sticky top-24 z-30 mb-20 rounded-[1.5rem] border p-2 shadow-2xl backdrop-blur-2xl">
            <ProjectFilter
              categories={projectCategories}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </section>

          {/* 🏛️ 3. CASE DISPLAY GRID */}
          <div className="relative min-h-[500px]">
            <AnimatePresence mode="popLayout">
              {filteredProjects.length > 0 ? (
                <motion.div
                  layout
                  className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16"
                >
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.98, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="group"
                    >
                      <ProjectCard project={project} />
                      {/* Interaction Signal */}
                      <div className="mt-6 flex items-center justify-between px-2">
                        <div className="flex items-center gap-2">
                          <ShieldCheck size={14} className="text-emerald-500" />
                          <span className="text-muted-foreground font-mono text-[9px] font-bold tracking-widest uppercase">
                            Outcome Verified
                          </span>
                        </div>
                        <Link
                          href={`/cases/${project.id}`}
                          className="text-primary flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase opacity-0 transition-all group-hover:opacity-100"
                        >
                          View Protocol Details <ChevronRight size={12} />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border-border/50 bg-muted/20 flex flex-col items-center justify-center rounded-[3rem] border-2 border-dashed py-48 text-center"
                >
                  <div className="relative mb-8">
                    <Fingerprint className="text-muted-foreground/10 h-20 w-20" />
                    <ShieldAlert className="text-primary/40 absolute -right-2 -bottom-2 h-8 w-8 animate-pulse" />
                  </div>
                  <h4 className="text-foreground mb-2 font-sans text-lg font-bold">
                    Access Restricted
                  </h4>
                  <p className="text-muted-foreground max-w-xs font-mono text-[10px] leading-relaxed font-bold tracking-[0.2em] uppercase">
                    No protocols currently archived in this specific sector.
                    Please select another operational category.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 🏛️ 4. INSTITUTIONAL AUDIT FOOTER */}
          <motion.footer
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-foreground shadow-3xl relative mt-40 overflow-hidden rounded-[3rem] p-10 text-white md:p-20"
          >
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
            <div className="bg-primary/10 absolute -top-24 -right-24 h-96 w-96 rounded-full blur-[100px]" />

            <div className="relative z-10 flex flex-col items-start justify-between gap-16 lg:flex-row lg:items-center">
              <div className="space-y-8">
                <div className="bg-primary/10 border-primary/20 text-primary inline-flex items-center gap-3 rounded-full border px-5 py-2">
                  <Lock size={18} />
                  <span className="font-mono text-[10px] font-bold tracking-[0.3em] uppercase">
                    Institutional NDA Compliance Active
                  </span>
                </div>

                <h3 className="max-w-2xl font-sans text-4xl leading-tight font-semibold tracking-tighter md:text-6xl">
                  ความเป็นส่วนตัวของคุณคือ <br />
                  <span className="text-primary italic">
                    ภารกิจสูงสุด (Priority One)
                  </span>
                </h3>

                <p className="max-w-2xl font-sans text-lg leading-relaxed text-slate-400">
                  กรณีศึกษาเหล่านี้คือข้อพิสูจน์ถึงความมุ่งมั่นและผลลัพธ์ที่เป็นรูปธรรม
                  หากคุณกำลังเผชิญกับวิกฤตชื่อเสียงออนไลน์หรือต้องการจัดระเบียบข้อมูลใหม่
                  เราพร้อมให้คำปรึกษาและทำ Digital Audit
                  ให้แบบส่วนตัวภายใต้ข้อตกลงรักษาความลับ
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-md shadow-primary/20 h-20 rounded-2xl px-12 font-bold shadow-2xl transition-all hover:scale-105 active:scale-95"
                >
                  <Link href="/contact" className="flex items-center gap-4">
                    Start Private Audit <ShieldCheck size={22} />
                  </Link>
                </Button>
                <div className="flex items-center justify-center gap-3 text-slate-500">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                  <span className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase">
                    Auditors Online Now
                  </span>
                </div>
              </div>
            </div>
          </motion.footer>
        </div>
      </main>
    </>
  )
}
