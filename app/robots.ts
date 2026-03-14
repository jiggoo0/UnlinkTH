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
          "/api/", // ป้องกันการเข้าถึง Endpoint ภายใน
          "/admin/", // ป้องกันระบบหลังบ้าน
          "/verify/", // ป้องกัน Google Bot เข้าตรวจสอบหน้าจำลองสายการบิน
          "/download-vault/", // ป้องกันการ index หน้าแจกไฟล์ลูกค้า
        ],
      },
      {
        userAgent: "GPTBot", // บล็อก AI Bot หากต้องการรักษาความเป็นส่วนตัวของข้อมูลเคส
        disallow: ["/case-studies/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
