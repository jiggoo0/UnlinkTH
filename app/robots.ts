/** @format */

import { MetadataRoute } from "next"
import { siteConfig } from "@/constants/site-config"

/**
 * UNLINK-TH | Crawler Governance Protocol (2026 Edition)
 * -------------------------------------------------------------------------
 * จัดการการเข้าถึงของ Search Engine และ AI Agents
 * ออกแบบมาเพื่อรักษาสมดุลระหว่าง SEO Visibility และ Data Privacy
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url

  return {
    rules: [
      {
        /**
         * [STRATEGY: PUBLIC VISIBILITY]
         * อนุญาตให้ Search Engine มาตรฐาน (Google, Bing, DuckDuckGo)
         * เข้าถึงเนื้อหาเพื่อทำอันดับและดึง Traffic เข้าสู่เว็บไซต์
         */
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/", // เส้นทางส่งข้อมูลหลังบ้าน
          "/_next/", // ไฟล์ระบบของ Next.js
          "/private/", // โซนข้อมูลความลับ
          "/*.json$", // ป้องกันการดึง Schema ข้อมูล
          "/contact/success", // หน้าขอบคุณ (ป้องกันการนับ Conversion ผิดพลาด)
          "/editorial-policy/internal", // นโยบายภายในที่ไม่เปิดเผย
        ],
      },
      {
        /**
         * [STRATEGY: AI SHIELD]
         * บล็อก AI Bots จากค่ายใหญ่ เพื่อไม่ให้ดึงข้อมูลเคสศึกษา
         * หรือเนื้อหาไปใช้ในการฝึกฝน LLM (Large Language Models)
         * เพื่อรักษาความลับขั้นสูงสุดของลูกค้า Unlink
         */
        userAgent: [
          "GPTBot", // OpenAI
          "ChatGPT-User", // OpenAI
          "CCBot", // Common Crawl
          "Google-Extended", // Google Gemini Training
          "anthropic-ai", // Anthropic Claude
          "Claude-Web", // Claude
          "PerplexityBot", // Perplexity AI
          "claudebot",
          "Omgilibot",
        ],
        disallow: "/",
      },
    ],
    /**
     * ระบุตำแหน่ง XML Sitemap เพื่อความรวดเร็วในการทำ Indexing
     */
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
