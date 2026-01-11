/** @format */

import { MetadataRoute } from 'next'
import { allServices } from '@/data/services/all-services'
import { allProjects } from '@/data/case/all-cases'

/**
 * [STRATEGY: DYNAMIC SEARCH ARCHITECTURE]
 * - แก้ไข TS2339: จัดการปัญหา missing 'updatedAt' โดยใช้ fallback จาก 'date' หรือ 'now'
 * - Precision: กำหนดลำดับความสำคัญ (Priority) ตามโครงสร้าง Conversion Funnel
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://unlinkth.com'
  const now = new Date()

  // 1. 🏛️ Static Routes: หน้าหลักและหน้าสำคัญเชิงกฎหมาย
  const staticRoutes = [
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

  // 2. 🛠️ Dynamic Service Routes: เส้นทางบริการรายย่อย
  const serviceRoutes = allServices.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    // ✅ แก้ไข: ใช้ service.updatedAt หากไม่มีให้ใช้ now
    lastModified:
      'updatedAt' in service ? new Date(service.updatedAt as string) : now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // 3. 📂 Dynamic Case Routes: เส้นทางผลงาน (Case Studies)
  const caseRoutes = allProjects.map((project) => ({
    url: `${siteUrl}/cases/${project.slug}`,
    /** * ✅ แก้ไขปัญหา Property 'updatedAt' missing:
     * ใช้ 'updatedAt' จาก interface ใหม่ที่เราเพิ่งอัปเดต หรือ fallback ไปที่ 'date'
     */
    lastModified: project.updatedAt
      ? new Date(project.updatedAt)
      : project.date
        ? new Date(project.date)
        : now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...serviceRoutes, ...caseRoutes]
}
