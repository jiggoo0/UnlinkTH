import { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site-config";

/**
 * UNLINK-TH | Search Engine Accessibility Protocol
 * -------------------------------------------------------------------------
 * หน้าที่: ควบคุมการเข้าถึงของ Search Engine Bot ให้เน้นเฉพาะเนื้อหาคุณภาพ
 * มุ่งเน้นการส่งสัญญาณความน่าเชื่อถือและป้องกันการสืบค้นในส่วนที่ไม่จำเป็น
 */

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url;

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: [
          "/_next/", // ป้องกันการไต่ส่วนไฟล์ระบบของ Next.js
          "/api/",   // ป้องกันการเข้าถึง Endpoint ภายใน
        ],
      },
      {
        userAgent: "GPTBot", // บล็อก AI Bot หากต้องการรักษาความเป็นส่วนตัวของข้อมูลเคส
        disallow: ["/case-studies/"],
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
