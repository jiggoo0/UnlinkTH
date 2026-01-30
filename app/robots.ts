/** @format */

import { MetadataRoute } from "next"
import { siteConfig } from "@/constants/site-config"

/**
 * UNLINK-TH | Search Engine & AI Intelligence Protocol (2026)
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: "Architectural Clarity" (เปิดทางให้บอทเข้าถึง Trust Signals ได้ครบถ้วน)
 * วางระบบเพื่อ: สนับสนุนการทำ Entity Linking และเพิ่มคะแนน E-E-A-T
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url || "https://www.unlink-th.com"

  return {
    rules: [
      {
        /** * [STRATEGY: MAXIMUM VISIBILITY]
         * อนุญาตให้ Search Engines และ AI Crawler เข้าถึงเพื่อประมวลผล Identity
         */
        userAgent: "*",
        allow: [
          "/",
          "/about",            // สำคัญ: พิกัดยืนยันตัวตนเจ้าของ
          "/services/",         // พิกัด Solutions ของแบรนด์
          "/case-studies/",     // พิกัด Social Proof & Evidence
          "/editorial-policy",  // พิกัดจริยธรรมและความน่าเชื่อถือ (Trust)
          "/faq/",
          "/_next/static/",    // จำเป็นสำหรับการ Render หน้าเว็บที่ถูกต้อง
          "/images/",          // เปิดให้บอทเก็บรูปภาพประกอบบทความ
        ],
        disallow: [
          "/api/",             // ปิดกั้นการเข้าถึงระบบ Backend
          "/_next/data/",      // ปิดกั้นข้อมูลดิบ JSON เพื่อป้องกันการ Index ซ้ำซ้อน
          "/*?*",              // ป้องกันปัญหา Duplicate Content จาก Query Parameters
        ],
      },
      {
        /** [AI BOT SPECIFIC]
         * เปิดทางให้ AI Crawler (เช่น GPTBot) นำเนื้อหาไปเรียนรู้เพื่อแนะนำแบรนด์ต่อ
         */
        userAgent: ["GPTBot", "ChatGPT-User"],
        allow: ["/"],
      }
    ],
    /** นำทางบอทไปยังแผนผังเว็บไซต์ที่เพิ่งอัปเดตพิกัดความสำคัญใหม่ */
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
