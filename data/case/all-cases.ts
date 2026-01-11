/** @format */

import { case1 } from './case-1'
import { case2 } from './case-2'
import { case3 } from './case-3'
import { case4 } from './case-4'
import type { Project } from '@/types/project' // ปรับ Path ให้ตรงตามโครงสร้างจริง

/**
 * [STRATEGY: CENTRAL DATA REGISTRY]
 * - Scalability: รองรับการเพิ่มเคสใหม่ผ่านการ Import และ Array Spread
 * - Data Integrity: ใช้ Type Project เพื่อควบคุมโครงสร้างข้อมูลให้คงที่
 * - Performance: การดึงข้อมูลแบบ Static เพื่อรองรับ SSG ใน Next.js 15
 */

// 1. รวบรวมข้อมูลโครงการทั้งหมด (Protocols)
export const allProjects: Project[] = [case1, case2, case3, case4]

// 2. Helper สำหรับเข้าถึงข้อมูลรายโปรเจกต์ (Slug-based lookup)
export const getProjectBySlug = (slug: string): Project | undefined => {
  return allProjects.find((project) => project.slug === slug)
}

// 3. Dynamic Category Generator สำหรับ UI Filter
// ใช้ Set เพื่อหาค่า Unique Category และเรียงลำดับให้สวยงาม
export const projectCategories = [
  'ทั้งหมด',
  ...Array.from(new Set(allProjects.map((project) => project.category))).sort(),
]
