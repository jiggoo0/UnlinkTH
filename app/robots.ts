/** @format */

import { MetadataRoute } from "next"
import { siteConfig } from "@/constants/site-config"

/**
 * UNLINK-TH | Search Engine & AI Intelligence Protocol (2026)
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: "Visual & Architectural Clarity"
 * แก้ไข: เปิดทางให้ Googlebot เข้าถึงรูปภาพที่ผ่านการ Optimize (Next.js Image)
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url || "https://www.unlink-th.com"

  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/about",
          "/services/",
          "/case-studies/",
          "/editorial-policy",
          "/faq/",
          "/_next/static/",
          "/_next/image", // [CRITICAL FIX]: เปิดให้บอทเข้าถึงระบบจัดการรูปภาพของ Next.js
          "/images/",      // เปิดให้เข้าถึงโฟลเดอร์รูปภาพต้นฉบับ
        ],
        disallow: [
          "/api/",
          "/_next/data/",
          /** * [MODIFIED]: เลิกใช้ /*?* แบบกวาดล้าง 
           * เพื่อป้องกันไม่ให้ไปบล็อก /_next/image?url=... 
           * หากต้องการป้องกัน Duplicate Content ให้ใช้ Canonical Tag ในหน้าเพจแทน
           */
          "/*?fbclid=", // บล็อกเฉพาะ Parameter จาก Facebook (ถ้าต้องการ)
          "/*?utm_",    // บล็อกเฉพาะ Parameter จากการตลาด (ถ้าต้องการ)
        ],
      },
      {
        /** [AI BOT SPECIFIC] */
        userAgent: ["GPTBot", "ChatGPT-User"],
        allow: ["/"],
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
