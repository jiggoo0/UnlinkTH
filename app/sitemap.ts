import { MetadataRoute } from "next"
import { siteConfig } from "@/constants/site-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  // รายการหน้าหลัก
  const routes = [
    "",
    "/about",
    "/services",
    "/case-studies",
    "/faq",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  return [...routes]
}
