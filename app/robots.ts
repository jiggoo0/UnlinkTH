/**
 * UNLINK-TH | SEO Architecture: Robots Configuration
 * -------------------------------------------------------------------------
 * จัดการการเข้าถึงของ Search Engine Crawlers (Googlebot, Bingbot, etc.)
 * ออกแบบภายใต้มาตรฐานความปลอดภัยสูงสุดเพื่อปกป้องโครงสร้างข้อมูลภายใน
 */

import { MetadataRoute } from "next"
import { siteConfig } from "@/constants/site-config"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url || "https://www.unlink-th.com"

  return {
    rules: [
      {
        /**
         * [POLICY-01] General Search Engines
         * อนุญาตให้ Crawler มาตรฐานเข้าถึงหน้าเนื้อหาหลักเพื่อทำ Indexing
         */
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/", // ระงับการเข้าถึง Internal API Routes
          "/_next/", // ระงับการเข้าถึงไฟล์ระบบ Build Artifacts ของ Next.js
          "/admin/", // ระงับการเข้าถึงหน้าบริหารจัดการระบบ (Internal Use)
          "/private/", // ระงับการเข้าถึงโซนข้อมูลส่วนบุคคล
          "/*.json$", // ระงับการทำดัชนีไฟล์ข้อมูลโครงสร้าง JSON
          "/contact/success", // ระงับการเข้าถึงหน้ายืนยันการส่งข้อมูล
        ],
      },
      {
        /**
         * [POLICY-02] AI & Large Language Models (LLMs)
         * จำกัดสิทธิ์ AI Crawlers เพื่อป้องกันการดึงข้อมูลไปใช้ในการฝึกฝนโมเดล
         * สอดคล้องกับนโยบายรักษาความเป็นส่วนตัวของ UNLINK
         */
        userAgent: [
          "GPTBot", // OpenAI
          "ChatGPT-User", // OpenAI ChatGPT
          "CCBot", // Common Crawl
          "Google-Extended", // Google Gemini Training
          "PerplexityBot", // Perplexity AI
          "claudebot", // Anthropic Claude
        ],
        disallow: "/",
      },
    ],
    /**
     * [MAP] XML Sitemap Location
     * ระบุตำแหน่งดัชนี URL เพื่อให้ Google Search Console ทำงานได้รวดเร็วขึ้น
     */
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
