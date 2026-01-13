/** @format */

import { MetadataRoute } from 'next'
import { allServices } from '@/data/services/all-services'
import { allProjects } from '@/data/case/all-cases'

/**
 * [STRATEGY: DYNAMIC SEARCH ARCHITECTURE v4.5]
 * - Reliability: ใช้ Interface แทน any เพื่อความปลอดภัยระดับ Type-Safe
 * - Performance: ตั้งค่า Change Frequency ให้สอดคล้องกับพฤติกรรมการอัปเดตข้อมูลจริง
 * - SEO Optimization: จัดลำดับ Priority ให้หน้า Home และ Services สูงสุดเพื่อเน้นการทำ Indexing
 */

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
  const siteUrl = 'https://unlink-th.vercel.app'
  const now = new Date()

  // 1. 🏛️ Core Structure: หน้าหลักที่ต้องการให้ Search Engine เข้าถึงบ่อยที่สุด
  const staticRoutes: MetadataRoute.Sitemap = [
    { route: '', priority: 1.0, frequency: 'daily' as const },
    { route: '/services', priority: 0.9, frequency: 'weekly' as const },
    { route: '/cases', priority: 0.8, frequency: 'weekly' as const },
    { route: '/contact', priority: 0.8, frequency: 'monthly' as const },
    { route: '/faq', priority: 0.7, frequency: 'monthly' as const },
    { route: '/privacy', priority: 0.3, frequency: 'yearly' as const },
    { route: '/terms', priority: 0.3, frequency: 'yearly' as const },
  ].map(({ route, priority, frequency }) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: frequency,
    priority,
  }))

  // 2. 🛠️ Service Protocol: หน้าบริการรายบุคคล (Long-tail SEO)
  const serviceRoutes: MetadataRoute.Sitemap = (
    allServices as unknown as ServiceWithMeta[]
  ).map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: service.updatedAt ? new Date(service.updatedAt) : now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // 3. 📂 Operational Records: กรณีศึกษา (Social Proof Indexing)
  const caseRoutes: MetadataRoute.Sitemap = (
    allProjects as unknown as ProjectWithMeta[]
  ).map((project) => {
    // Logic การเลือกวันที่ที่สดใหม่ที่สุดสำหรับ Crawler
    const finalDate = project.updatedAt
      ? new Date(project.updatedAt)
      : project.date
        ? new Date(project.date)
        : now

    return {
      url: `${siteUrl}/cases/${project.slug}`,
      lastModified: finalDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }
  })

  return [...staticRoutes, ...serviceRoutes, ...caseRoutes]
}
