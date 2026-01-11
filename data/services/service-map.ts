/** @format */

import { servicesGroupOne } from './services-1'
import { servicesGroupTwo } from './services-2'
import type { ServiceItem } from '@/types/service'

/**
 * [STRATEGY: CENTRALIZED SERVICE REGISTRY]
 * รวมบริการจากทุกกลุ่มเข้าด้วยกัน เพื่อเป็นแหล่งข้อมูลชุดเดียว (Single Source of Truth)
 */
const allServices: ServiceItem[] = [...servicesGroupOne, ...servicesGroupTwo]

/**
 * 1) 🏛️ Service Index Map
 * ประสิทธิภาพการเข้าถึง O(1) โดยใช้ slug เป็นคีย์
 */
export const serviceMap: Record<string, ServiceItem> = allServices.reduce(
  (acc, service) => {
    if (service.slug) {
      acc[service.slug] = service
    }
    return acc
  },
  {} as Record<string, ServiceItem>,
)

/**
 * 2) 🔍 Search by Slug
 */
export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return serviceMap[slug]
}

/**
 * 3) 🚀 Static Params Generator (Next.js 15 optimization)
 * ✅ FIXED: แก้ไขให้คืนค่าเป็น string[] บริสุทธิ์
 * เพื่อป้องกัน Error [object Object] ในขั้นตอนการ Build
 */
export function getAllServiceSlugs(): string[] {
  return allServices.map((service) => service.slug)
}

/**
 * 4) 🔗 Intelligent Related Services
 * ยุทธศาสตร์: ดึงบริการที่อยู่ในกลุ่มเดียวกัน (Hierarchy) มาแสดงก่อน
 */
export function getRelatedServices(
  currentSlug: string,
  limit = 2,
): ServiceItem[] {
  const currentService = serviceMap[currentSlug]

  return allServices
    .filter((s) => s.slug !== currentSlug)
    .sort((a, b) => {
      // Logic: แนะนำบริการที่มีช่วงราคา (Price Range) ใกล้เคียงกัน
      const diffA = Math.abs(
        (a.price?.min || 0) - (currentService?.price?.min || 0),
      )
      const diffB = Math.abs(
        (b.price?.min || 0) - (currentService?.price?.min || 0),
      )
      return diffA - diffB
    })
    .slice(0, limit)
}
