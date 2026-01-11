/** @format */

'use client'

import * as React from 'react'
import { useState, useMemo } from 'react'
import { Seo } from '@/components/seo/Seo'
import { SectionHeading } from '@/components/shared/section-heading'
import { ProjectCard } from '@/components/cases/ProjectCard'
import { ProjectFilter } from '@/components/cases/ProjectFilter'
import { ShieldCheck, Lock } from 'lucide-react'

// Import Data จากแหล่งกลาง
import { allProjects, projectCategories } from '@/data/case/all-cases'

/**
 * [STRATEGY: DYNAMIC PROTOCOL ARCHIVE]
 * - Tone: Empathy -> Authority (การแสดงความสำเร็จที่เป็นรูปธรรม)
 * - UX: Instant Filtering & Clear Privacy Signals
 * - Fix: เพิ่ม 'badge' prop ใน SectionHeading เพื่อแก้ไข Error TS2741
 */

export default function CasesPage() {
  const [activeTab, setActiveTab] = useState('ทั้งหมด')

  // 🏛️ Filter Logic: ทำงานรวดเร็วระดับมิลลิวินาที
  const filteredProjects = useMemo(() => {
    if (activeTab === 'ทั้งหมด') return allProjects
    return allProjects.filter((project) => project.category === activeTab)
  }, [activeTab])

  return (
    <>
      <Seo
        title="Tactical Case Studies | บันทึกผลการดำเนินงาน"
        description="สำรวจบันทึกปฏิบัติการการจัดการข้อมูลดิจิทัล และการแก้ไขปัญหาชื่อเสียงออนไลน์ภายใต้มาตรการรักษาความลับสูงสุด (NDA)"
      />

      <main className="min-h-screen bg-white pt-32 pb-24 selection:bg-blue-600 selection:text-white dark:bg-slate-950">
        <div className="container mx-auto max-w-6xl px-6">
          {/* 🏛️ Header: สร้าง Authority ตั้งแต่แรกเห็น */}
          <header className="mb-16">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-12 bg-blue-600" />
              <span className="text-[10px] font-black tracking-[0.4em] text-blue-600 uppercase">
                Verified Records
              </span>
            </div>

            <SectionHeading
              badge="Case Studies" // ✅ แก้ไข: เพิ่ม badge เพื่อล้าง Error TS2741
              title="Execution Protocols"
              subtitle="พิสูจน์ผลลัพธ์ผ่านสถานการณ์จริง"
              description="เราเปลี่ยนวิกฤตออนไลน์ให้เป็นสถานการณ์ที่ควบคุมได้ ศึกษาแนวทางการแก้ไขปัญหาชื่อเสียงเชิงลึกผ่านบันทึกการปฏิบัติงานจริง"
              align="left"
              className="mb-0"
            />
          </header>

          {/* 🏛️ Filter Interface: เรียบง่ายและแม่นยำ */}
          <section className="sticky top-20 z-30 mb-12 border-b border-slate-100 bg-white/80 pb-8 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
            <ProjectFilter
              categories={projectCategories}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </section>

          {/* 🏛️ Project Display: Intelligence Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="animate-in fade-in slide-in-from-bottom-6 fill-mode-both duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center border border-dashed border-slate-200 py-40 text-center dark:border-slate-800">
              <ShieldCheck className="mb-4 h-12 w-12 text-slate-200" />
              <p className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">
                Status: No protocols archived in this sector.
              </p>
            </div>
          )}

          {/* 🏛️ Privacy Footer: ตอกย้ำความปลอดภัย (Security Signal) */}
          <footer className="mt-32 rounded-2xl border border-slate-900 bg-slate-900 p-12 text-white">
            <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-center">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-blue-400">
                  <Lock size={16} />
                  <span className="text-[10px] font-black tracking-widest uppercase">
                    NDA Security Compliance
                  </span>
                </div>
                <h3 className="text-2xl font-black tracking-tighter uppercase">
                  Your Privacy is our Protocol.
                </h3>
                <p className="font-thai max-w-xl text-sm leading-relaxed text-slate-400">
                  ข้อมูลที่แสดงเป็นเพียงส่วนหนึ่งของกระบวนการเชิงเทคนิค
                  รายละเอียดเฉพาะที่ระบุตัวตนบุคคลหรือองค์กรถูกปกปิดอย่างเข้มงวด
                  หากคุณต้องการประเมินสถานการณ์ที่เป็นความลับ ปรึกษาเราได้โดยตรง
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex h-14 items-center justify-center bg-white px-10 text-[11px] font-black tracking-widest text-slate-950 uppercase transition-all hover:bg-blue-600 hover:text-white active:scale-95"
              >
                Start Private Audit
              </a>
            </div>
          </footer>
        </div>
      </main>
    </>
  )
}
