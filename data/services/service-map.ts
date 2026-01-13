/** @format */

import { servicesGroupOne } from './services-1'
import { servicesGroupTwo } from './services-2'
import type { ServiceItem } from '@/types/service'

export const allServices: ServiceItem[] = [
  ...servicesGroupOne,
  ...servicesGroupTwo,
]

// 🏛️ O(1) Search Registry
export const serviceMap: Record<string, ServiceItem> = allServices.reduce(
  (acc, service) => {
    if (service.slug) {
      acc[service.slug] = service
    }
    return acc
  },
  {} as Record<string, ServiceItem>,
)

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  const service = serviceMap[slug]

  // 🏛️ Dev Logging: ช่วยหาจุดผิดพลาดหาก slug ใน URL ไม่ตรงกับ Data
  if (!service && process.env.NODE_ENV === 'development') {
    console.error(
      `[Data Protocol Error]: Node "${slug}" is not resolved in Service Map.`,
    )
  }

  return service
}

export function getAllServiceSlugs(): string[] {
  return allServices.map((s) => s.slug).filter(Boolean)
}
