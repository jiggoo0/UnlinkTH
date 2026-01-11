/** @format */

import { MetadataRoute } from 'next'

/**
 * [STRATEGY: SEARCH ENGINE AUTHORITY CONTROL]
 * - ป้องกันบอทเข้าถึงส่วนระบบ (System Assets) เพื่อความปลอดภัย
 * - อนุญาตหน้า Conversion หลัก เพื่อสนับสนุนการทำ SEO Displacement
 * - รักษาความลับของไฟล์อัปโหลดและ API ตามเกณฑ์ Strict NDA
 */

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://unlinkth.com'

  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/services',
        '/cases',
        '/contact',
        '/faq',
        '/terms',
        '/privacy',
      ],
      disallow: [
        '/admin', // พื้นที่จัดการระบบ (Unauthorized access prevention)
        '/api/', // Backend endpoints
        '/uploads/', // แหล่งเก็บไฟล์เอกสารลูกค้า
        '/*.json$', // ป้องกันการดึงไฟล์โครงสร้างข้อมูล
      ],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
