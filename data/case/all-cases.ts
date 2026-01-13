/** @format */

import { case1 } from './case-1'
import { case2 } from './case-2'
import { case3 } from './case-3'
import { case4 } from './case-4'
import type { Project } from '@/types/project'

/**
 * [STRATEGY: DATA ARCHITECTURE v1.0]
 * - Centralization: รวมเคสทั้งหมดเข้าด้วยกันเพื่อเป็นแหล่งอ้างอิงเดียว
 * - Static Optimization: คืนค่าเป็นอาเรย์คงที่เพื่อให้ Next.js 15 ทำการ Cache ได้อย่างมีประสิทธิภาพ
 * - Type Safety: บังคับใช้ Project interface เพื่อป้องกันการลืมใส่ Metadata สำคัญ (เช่น slug หรือ status)
 */

// ✅ 1. รวบรวมข้อมูลโครงการทั้งหมด (Source of Truth)
export const allProjects: Project[] = [case1, case2, case3, case4]

/**
 * ✅ 2. SELECTOR: Get Project by Slug
 * ประสิทธิภาพ: O(n) สำหรับการค้นหาข้อมูลรายหน้า
 */
export const getProjectBySlug = (slug: string): Project | undefined => {
  if (!slug) return undefined
  return allProjects.find((project) => project.slug === slug)
}

/**
 * ✅ 3. STATIC PARAMS: Next.js 15 Build Support
 * สำหรับใช้ใน generateStaticParams() เพื่อทำ SSG ล่วงหน้า
 */
export const getAllProjectParams = () => {
  return allProjects.map((project) => ({
    slug: project.slug,
  }))
}

/**
 * ✅ 4. FILTER LOGIC: Dynamic Category Generator
 * สร้างหมวดหมู่ที่ไม่ซ้ำกัน (Unique) เพื่อแสดงผลในส่วน Filter Bar
 */
export const projectCategories = [
  'ทั้งหมด',
  ...Array.from(new Set(allProjects.map((project) => project.category))).sort(),
]

/**
 * ✅ 5. QUERY: Featured Projects
 * ดึงเฉพาะเคสที่ต้องการ Highlight (เช่น เคสที่สำเร็จแล้วและได้รับอนุญาตให้เปิดเผย)
 */
export const getFeaturedProjects = (limit = 2): Project[] => {
  return allProjects
    .filter((project) => project.status === 'Completed')
    .slice(0, limit)
}
