/** @format */

import type { ServiceItem } from '@/types/service'
import { servicesGroupOne } from './services-1'
import { servicesGroupTwo } from './services-2'

/**
 * [STRATEGY: SINGLE SOURCE OF TRUTH]
 * - รวมบริการและจัดเรียงข้อมูลให้พร้อมใช้งานทันที
 * - ป้องกันการ Sort ซ้ำในระดับ UI เพื่อ Performance
 */

const rawServices: ServiceItem[] = [...servicesGroupOne, ...servicesGroupTwo]

// 1) จัดเรียงลำดับตาม ID ให้เรียบร้อยที่ระดับ Module
export const allServices: ServiceItem[] = [...rawServices].sort((a, b) =>
  a.id.localeCompare(b.id),
)

// 2) ดึงเฉพาะบริการที่เป็น Highlight (เช่น แสดงใน Hero หรือ Home)
export const popularServices = allServices.filter((service) => service.popular)

// 3) Helper: ค้นหาบริการด้วย Slug (สำหรับหน้า [slug]/page.tsx)
export const getServiceBySlug = (slug: string): ServiceItem | undefined => {
  return allServices.find((service) => service.slug === slug)
}

// 4) Helper: ดึงบริการที่เกี่ยวข้อง (Related Services) แบบไม่ซ้ำกับหน้าปัจจุบัน
export const getRelatedServices = (
  currentSlug: string,
  limit = 2,
): ServiceItem[] => {
  return allServices
    .filter((service) => service.slug !== currentSlug)
    .slice(0, limit)
}
