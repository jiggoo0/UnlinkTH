/** @format */

import * as React from 'react'
import { WikiLayout } from '@/components/wiki/WikiLayout'

/**
 * [STRATEGY: CENTRALIZED WIKI SHELL v5.0]
 * - Fix: Removed unused 'WikiService' import to resolve Lint warning.
 * - Architecture: ทำหน้าที่เป็น "Global Frame" สำหรับ Wiki-Hub ทั้งหมด
 * - UX: จัดการเรื่อง Entrance Animation เพื่อให้การสลับระหว่างหมวดหมู่บทความมีความต่อเนื่อง (Fluid Motion)
 */

interface WikiHubNestedLayoutProps {
  children: React.ReactNode
}

export default function WikiHubNestedLayout({
  children,
}: WikiHubNestedLayoutProps) {
  return (
    /**
     * ✅ CENTRALIZED LAYOUT ARCHITECTURE
     * WikiLayout: คอมโพเนนต์หลักที่จัดการโครงสร้าง 3-Column (Navigation, Content, TOC)
     * การเรียกใช้ที่นี่จุดเดียวช่วยลด Bundle Size และป้องกันการ Render ซ้อนทับในระดับ Page
     */
    <WikiLayout>
      <section className="animate-in fade-in slide-in-from-bottom-2 duration-700 ease-out">
        {children}
      </section>
    </WikiLayout>
  )
}
