/** @format */

import { MetadataRoute } from 'next'
import { allServices } from '@/data/services/all-services'
import { allProjects } from '@/data/case/all-cases'

/**
 * [STRATEGY: DYNAMIC SEARCH ARCHITECTURE]
 * - แก้ไข: ใช้ Type Interface แทน 'any' เพื่อให้ผ่าน Strict Linting
 * - Precision: ปรับปรุงการจัดการ Date เพื่อความสดใหม่ของข้อมูล (Freshness)
 */

// 1. กำหนด Interface เพื่อรองรับข้อมูลจาก Data Source โดยไม่ต้องใช้ any
interface ServiceWithMeta {
  slug: string
  updatedAt?: string | Date
}

interface ProjectWithMeta {
  slug: string
  updatedAt?: string | Date
  date?: string | Date
}

export default function sitemap(): MetadataRoute.Sitemap {
  // ✅ ปรับปรุง: ใช้ URL ใหม่ที่ตัดสินใจเลือกใช้ทำธุรกิจจริง
  const siteUrl = 'https://unlink-th.vercel.app'
  const now = new Date()

  // 1. 🏛️ Static Routes: โครงสร้างหลักของเว็บไซต์
  const staticRoutes: MetadataRoute.Sitemap = [
    { route: '', priority: 1.0, frequency: 'daily' as const },
    { route: '/services', priority: 0.9, frequency: 'weekly' as const },
    { route: '/cases', priority: 0.8, frequency: 'weekly' as const },
    { route: '/contact', priority: 0.8, frequency: 'monthly' as const },
    { route: '/faq', priority: 0.6, frequency: 'monthly' as const },
    { route: '/privacy', priority: 0.3, frequency: 'yearly' as const },
    { route: '/terms', priority: 0.3, frequency: 'yearly' as const },
  ].map(({ route, priority, frequency }) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: frequency,
    priority,
  }))

  // 2. 🛠️ Dynamic Service Routes: แก้ไขปัญหา Long-tail Keywords รายบริการ
  const serviceRoutes: MetadataRoute.Sitemap = (
    allServices as unknown as ServiceWithMeta[]
  ).map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: service.updatedAt ? new Date(service.updatedAt) : now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // 3. 📂 Dynamic Case Routes: แสดงจุดจบของงาน (Outcomes)
  const caseRoutes: MetadataRoute.Sitemap = (
    allProjects as unknown as ProjectWithMeta[]
  ).map((project) => {
    let finalDate = now

    if (project.updatedAt) {
      finalDate = new Date(project.updatedAt)
    } else if (project.date) {
      finalDate = new Date(project.date)
    }

    return {
      url: `${siteUrl}/cases/${project.slug}`,
      lastModified: finalDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }
  })

  return [...staticRoutes, ...serviceRoutes, ...caseRoutes]
}
