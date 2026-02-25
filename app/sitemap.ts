/** @format */

import { MetadataRoute } from "next"
import { siteConfig } from "@/constants/site-config"
import { servicesData } from "@/constants/services-data"
import { getAllCaseStudies } from "@/lib/case-studies"
import { getAllBlogPosts } from "@/lib/blog"

export const dynamic = "force-static"

/**
 * UNLINK-TH | SEO Sitemap Engine (2026)
 * -------------------------------------------------------------------------
 * หน้าที่: สร้างแผนผังเว็บไซต์แบบ Dynamic เพื่อให้ Google Index ข้อมูลได้ครบถ้วน
 * มุ่งเน้นการส่งสัญญาณด้าน Trust & Authority (E-E-A-T) ผ่านหน้า Identity ต่างๆ
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url

  // [1] ดึงข้อมูล Dynamic Case Studies (Social Proof / Evidence)
  const allCases = await getAllCaseStudies()
  const caseEntries: MetadataRoute.Sitemap = allCases.map((item) => ({
    url: `${baseUrl}/case-studies/${item.slug}`,
    lastModified: new Date(item.date || new Date()),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // [2] ดึงข้อมูล Service Protocols (Main Conversion Pages)
  const serviceEntries: MetadataRoute.Sitemap = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }))

  // [3] ดึงข้อมูล Blog Posts (Educational / Intent Capture)
  const allBlogs = await getAllBlogPosts()
  const blogEntries: MetadataRoute.Sitemap = allBlogs.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date || new Date()),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // [4] หน้าหลักและหน้าที่สร้างความน่าเชื่อถือ (Trust & Identity Signals)
  const staticRoutes = [
    { path: "", priority: 1.0, changeFreq: "daily" as const }, // Home
    { path: "/about", priority: 0.8, changeFreq: "weekly" as const }, // Identity & Founder
    {
      path: "/editorial-policy",
      priority: 0.8,
      changeFreq: "monthly" as const,
    },
    { path: "/services", priority: 0.8, changeFreq: "weekly" as const },
    { path: "/case-studies", priority: 0.8, changeFreq: "weekly" as const },
    { path: "/faq", priority: 0.6, changeFreq: "weekly" as const },
    { path: "/contact", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/privacy", priority: 0.5, changeFreq: "monthly" as const },
  ]

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }))

  return [...staticEntries, ...serviceEntries, ...caseEntries, ...blogEntries]
}
