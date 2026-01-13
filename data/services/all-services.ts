/** @format */

import { servicesGroupOne } from './services-1'
import { servicesGroupTwo } from './services-2'
import type { ServiceItem } from '@/types/service'

/**
 * [STRATEGY: CENTRALIZED SERVICE REGISTRY v3.2]
 * - Single Source of Truth: Export 'allServices' เพื่อให้ HomePage ใช้งานได้โดยตรง
 * - Performance: ใช้ Record Lookup แทน Array Find เพื่อความเร็วระดับ O(1)
 * - SSG Readiness: เตรียมข้อมูลให้พร้อมสำหรับ Next.js 15 Static Params
 */

// 🏛️ 1. BASE DATA
// ส่งออก allServices เป็น Named Export เพื่อแก้ปัญหา Import Error ในหน้า (main)/page.tsx
export const allServices: ServiceItem[] = [
  ...servicesGroupOne,
  ...servicesGroupTwo,
]

// 🏛️ 2. HASH MAP REGISTRY
export const serviceMap: Record<string, ServiceItem> = allServices.reduce(
  (acc, service) => {
    if (service.slug) {
      acc[service.slug] = service
    }
    return acc
  },
  {} as Record<string, ServiceItem>,
)

// 🏛️ 3. DATA SELECTORS
export function getServiceBySlug(slug: string): ServiceItem | undefined {
  if (!slug) return undefined
  return serviceMap[slug]
}

/**
 * คืนค่า Static Params สำหรับ Next.js generateStaticParams
 */
export function getAllServiceParams() {
  return allServices.map((service) => ({
    slug: service.slug,
  }))
}

/**
 * ระบบแนะนำบริการ (Related Services) ตาม Price Tier Proximity
 */
export function getRelatedServices(
  currentSlug: string,
  limit = 2,
): ServiceItem[] {
  const currentService = serviceMap[currentSlug]
  if (!currentService) return allServices.slice(0, limit)

  return allServices
    .filter((s) => s.slug !== currentSlug)
    .sort((a, b) => {
      const priceA = a.price?.min || 0
      const priceB = b.price?.min || 0
      const currentPrice = currentService.price?.min || 0
      return Math.abs(priceA - currentPrice) - Math.abs(priceB - currentPrice)
    })
    .slice(0, limit)
}

// 🏛️ 4. GROUP ACCESSORS
export const getServicesByGroup = (group: 1 | 2) => {
  return group === 1 ? servicesGroupOne : servicesGroupTwo
}
