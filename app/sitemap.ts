/**
 * UNLINK-TH | SEO Architecture: Dynamic XML Sitemap
 * -------------------------------------------------------------------------
 * ฟังก์ชันสร้างดัชนี URL อัตโนมัติ เพื่อสนับสนุน Search Engine Indexing
 * ออกแบบตามโครงสร้าง App Router และรองรับความหลากหลายของ Dynamic Slugs
 */

import { MetadataRoute } from "next"
import { siteConfig } from "@/constants/site-config"
import { servicesData } from "@/constants/services-data"
import { caseStudies } from "@/lib/case-studies"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url

  // [1] Dynamic Case Study Routes
  // ดึงข้อมูลจาก Data Repository เพื่อสร้างเส้นทางปฏิบัติการจริง
  const caseEntries: MetadataRoute.Sitemap = (caseStudies || []).map(
    (item) => ({
      url: `${baseUrl}/case-studies/${item.slug}`,
      lastModified: new Date(item.date || new Date()),
      changeFrequency: "monthly" as const,
      priority: 0.7, // เคสศึกษาช่วยเสริมสร้างความเชื่อมั่น (Proof)
    })
  )

  // [2] Dynamic Service Protocols
  // หัวใจหลักของ SEO สำหรับการสืบค้นบริการลบข้อมูล
  const serviceEntries: MetadataRoute.Sitemap = (servicesData || []).map(
    (service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9, // บริการคือหน้าหลักในการสร้าง Conversion
    })
  )

  // [3] Core Static Routes
  // หน้าสารบัญและหน้าที่เกี่ยวข้องกับความน่าเชื่อถือและนโยบายความเป็นส่วนตัว
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/case-studies",
    "/faq",
    "/contact",
    "/privacy",
    "/editorial-policy",
  ]

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : 0.8,
  }))

  /**
   * รวมชุดข้อมูล URL ทั้งหมดเข้าสู่ XML สถาปัตยกรรม
   * Priority: Index (1.0) > Services (0.9) > Policy/Static (0.8) > Cases (0.7)
   */
  return [...staticEntries, ...serviceEntries, ...caseEntries]
}
