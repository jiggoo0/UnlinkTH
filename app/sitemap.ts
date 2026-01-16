import { MetadataRoute } from "next"
import { siteConfig } from "@/constants/site-config"
import { getAllCases } from "@/lib/mdx"
import { servicesData } from "@/constants/services-data"

/**
 * sitemap: ฟังก์ชันสำหรับสร้าง XML Sitemap แบบ Dynamic
 * ช่วยให้ Search Engine (Google, Bing) เข้าถึงทุกหน้าของเว็บไซต์ได้อย่างครบถ้วน
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url

  // 1. ดึงข้อมูล Case Studies ทั้งหมดจากโฟลเดอร์ content/cases
  // ระบบจะอ่านไฟล์ .mdx และสร้าง URL ให้โดยอัตโนมัติ
  const allCases = await getAllCases()
  const caseEntries = allCases.map((item) => ({
    url: `${baseUrl}/case-studies/${item.slug}`,
    lastModified: new Date(item.frontmatter.date || new Date()),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // 2. ดึงข้อมูลบริการ (Services) จาก constants/services-data.ts
  const serviceEntries = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // 3. รายการหน้าหลัก (Static Routes)
  const staticRoutes = [
    "", // หน้าแรก
    "/about", // เกี่ยวกับเรา
    "/services", // บริการทั้งหมด
    "/case-studies", // ผลงานทั้งหมด
    "/faq", // คำถามที่พบบ่อย
    "/contact", // ติดต่อเรา
    "/privacy", // นโยบายความเป็นส่วนตัว
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8, // หน้าแรกให้ความสำคัญสูงสุด
  }))

  // รวมทุก Entries เข้าด้วยกัน
  return [...staticRoutes, ...serviceEntries, ...caseEntries]
}
