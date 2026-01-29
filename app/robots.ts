/** @format */

import { MetadataRoute } from "next"
import { siteConfig } from "@/constants/site-config"

/**
 * UNLINK-TH | Search Engine & AI Intelligence Protocol 2026
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: "Ultra-Open Visibility" (เปิดพิกัดเต็มสูบเพื่อการ Indexing ที่ไวที่สุด)
 * วางระบบโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB Specialist)
 * เป้าหมาย: ให้ AI และ Search Engine เก็บข้อมูลได้ครบ 100% ไม่เสียเวลา
 */
export default function robots(): MetadataRoute.Robots {
  // ดึงพิกัด Domain จาก siteConfig หรือล็อกค่ามาตรฐาน
  const baseUrl = siteConfig.url || "https://www.unlink-th.com"

  return {
    rules: [
      {
        /** * [STRATEGY: GLOBAL ACCESS]
         * อนุญาตให้บอททุกประเภท (Google, Bing, AI Bots) เข้าถึงได้ทุกพิกัด
         */
        userAgent: "*",
        allow: [
          "/",
          "/services/", // พิกัดบริการหลัก
          "/case-studies/", // พิกัดผลงานกรณีศึกษา
          "/faq/", // พิกัดคำถามที่พบบ่อย
          "/_next/static/", // เปิดให้โหลด JS/CSS เพื่อเรนเดอร์หน้าเว็บ
          "/_next/image", // เปิดให้โหลดรูปภาพที่จูนสปีดไว้
        ],
        disallow: [
          "/api/", // พิกัดรับส่งข้อมูลภายใน
          "/_next/data/", // ปิดพิกัดข้อมูลดิบ JSON เพื่อให้บอทโฟกัสที่หน้า Render จริง
          "/*?*", // [CRITICAL]: ปิดพิกัด Parameter เพื่อป้องกัน Duplicate Content
        ],
      },
    ],
    /** แจ้งพิกัดแผนผังเว็บไซต์เพื่อนำทางบอทให้วิ่งงานได้เนี้ยบที่สุด */
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
