/** @format */

import { MetadataRoute } from "next"
import { siteConfig } from "@/constants/site-config"
import { servicesData } from "@/constants/services-data"
import { getAllCaseStudies } from "@/lib/case-studies"

/**
 * UNLINK-TH | SEO Sitemap Engine (2026)
 * -------------------------------------------------------------------------
 * สร้างดัชนี URL อัตโนมัติเพื่อประสิทธิภาพสูงสุดในการทำ Indexing
 * แบ่งสถาปัตยกรรมข้อมูลตามระดับความสำคัญ (Priority Logic)
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url

  // [1] ดึงข้อมูล Dynamic Case Studies จากเนื้อหา MDX
  const allCases = await getAllCaseStudies()
  const caseEntries: MetadataRoute.Sitemap = allCases.map((item) => ({
    url: `${baseUrl}/case-studies/${item.slug}`,
    lastModified: new Date(item.date || new Date()),
    changeFrequency: "monthly" as const,
    priority: 0.7, // เคสศึกษาเป็น Social Proof ที่ช่วยสนับสนุนหน้าหลัก
  }))

  // [2] ดึงข้อมูล Service Protocols จาก Constants
  const serviceEntries: MetadataRoute.Sitemap = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9, // บริการคือ Key Conversion Page ที่ต้องการอันดับสูง
  }))

  // [3] หน้า Static หลักและหน้าที่เกี่ยวข้องกับความน่าเชื่อถือ
  const staticRoutes = [
    "", // Index (Home)
    "/about", // Identity
    "/services", // Protocol Catalog
    "/case-studies", // Evidence Portfolio
    "/faq", // Intelligence Hub
    "/contact", // Secure Liaison
    "/privacy", // Security Protocol
    "/editorial-policy", // Ethics Charter
  ]

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : 0.8,
  }))

  // รวมชุดข้อมูล URL ทั้งหมดเข้าด้วยกัน
  return [...staticEntries, ...serviceEntries, ...caseEntries]
}
