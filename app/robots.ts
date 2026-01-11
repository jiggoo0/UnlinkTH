import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://unlinkth.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/', // หน้าเว็บสาธารณะทั้งหมด
          '/services',
          '/cases',
          '/contact',
          '/terms',
          '/privacy-policy',
        ],
        disallow: [
          '/admin', // หลังบ้าน
          '/api', // API ทั้งหมด
          '/_next', // System assets
          '/uploads', // ไฟล์อัปโหลด (ถ้ามีในอนาคต)
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
