/** @format */

import { MetadataRoute } from 'next'

/**
 * [STRATEGY: SEARCH ENGINE AUTHORITY CONTROL v4.6]
 * - Strategic Access: อนุญาตเฉพาะหน้าที่สร้าง Trust และ Conversion
 * - Security Perimeter: ปิดกั้น API และ Assets เพื่อป้องกันการทำ Data Scraping
 * - Branding Index: เปิดส่วน /wiki เพื่อสร้างฐานข้อมูลความรู้ที่เป็นประโยชน์ต่อการติดอันดับ
 */

export default function robots(): MetadataRoute.Robots {
  // ✅ แนะนำให้ใช้ Production URL ที่เป็นมาตรฐานเพื่อความแม่นยำของดัชนี
  const siteUrl = 'https://unlinkth.com'

  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/services/', // หน้าบริการหลัก
        '/cases/', // กรณีศึกษา (Social Proof)
        '/contact/', // Intake Gateway
        '/faq/', // ความช่วยเหลือเบื้องต้น
        '/wiki/', // ฐานข้อมูลความรู้ (High SEO Value)
        '/privacy', // เอกสารแสดงความโปร่งใส
        '/terms',
      ],
      disallow: [
        '/api/', // ปิดกั้น Backend logic ทั้งหมด
        '/_next/', // ปิดกั้นไฟล์ระบบของ Next.js (ลด Crawl Budget Waste)
        '/admin/', // พื้นที่ระบบจัดการ (ถ้ามี)
        '/uploads/', // แหล่งเก็บไฟล์เอกสารลูกค้า (Strict Privacy)
        '/*.json$', // ป้องกันการดาวน์โหลดไฟล์ Schema/Config
      ],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
