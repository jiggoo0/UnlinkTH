import { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site-config";
import { servicesData } from "@/constants/services-data";
/**
 * CRITICAL FIX: ตรวจสอบไฟล์ @/lib/case-studies.ts 
 * ตรวจสอบว่ามีการส่งออก (export) ฟังก์ชันที่ดึงข้อมูลทั้งหมดหรือไม่
 * หากใน lib ใช้ชื่ออื่น เช่น 'caseStudies' (ตัวแปร) หรือ 'getAllCaseStudies' 
 * ให้เปลี่ยนชื่อด้านล่างนี้ให้ตรงกัน
 */
import { caseStudies } from "@/lib/case-studies"; 

/**
 * sitemap: ฟังก์ชันสำหรับสร้าง XML Sitemap แบบ Dynamic (Next.js App Router)
 * ช่วยให้ Google Search Console ตรวจพบหน้าบริการและเคสทั้งหมดแบบอัตโนมัติ
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;

  // 1. จัดการข้อมูลกรณีศึกษา (Dynamic Case Study Routes)
  let caseEntries: MetadataRoute.Sitemap = [];
  try {
    // ใช้ตัวแปร caseStudies โดยตรงหาก lib ไม่ได้ส่งออกเป็นฟังก์ชัน async
    const allCases = Array.isArray(caseStudies) ? caseStudies : [];
    
    caseEntries = allCases.map((item: any) => ({
      url: `${baseUrl}/case-studies/${item.slug}`,
      // ใช้ความสามารถของ JavaScript ในการ fallback วันที่หากไม่มีข้อมูล
      lastModified: new Date(item.date || item.publishedAt || new Date()),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));
  } catch (error) {
    console.error("Operational Error: Unable to fetch cases for sitemap:", error);
  }

  // 2. จัดการข้อมูลบริการ (Dynamic Service Routes)
  const serviceEntries: MetadataRoute.Sitemap = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // 3. รายการหน้าหลักและหน้าคงที่ (Static Routes)
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/case-studies",
    "/faq",
    "/contact",
    "/privacy",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : 0.8,
  }));

  // รวมชุดข้อมูลทั้งหมดเข้าด้วยกัน
  return [...staticEntries, ...serviceEntries, ...caseEntries];
}
