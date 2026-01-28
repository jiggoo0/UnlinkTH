/** @format */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { servicesData } from "@/constants/services-data";
import { Service } from "@/types";

const SERVICES_CONTENT_PATH = path.join(process.cwd(), "content/services");

/**
 * ดึงข้อมูล Protocol ทั้งหมดจากคลังข้อมูลหลัก (Constants)
 * ใช้สำหรับการแสดงผลในหน้า List และ Navigation
 */
export async function getAllServices(): Promise<Service[]> {
  return servicesData;
}

/**
 * ดึงข้อมูลบริการเชิงลึก (Intelligence Extraction)
 * ผสมผสานข้อมูลพื้นฐานจาก Constants เข้ากับเนื้อหา Technical Specs ใน MDX
 */
export async function getServiceBySlug(slug: string) {
  try {
    const baseInfo = servicesData.find((s) => s.slug === slug);
    
    // หากไม่พบข้อมูลพื้นฐานใน Constants ให้ระงับกระบวนการทันที
    if (!baseInfo) return null;

    const fullPath = path.join(SERVICES_CONTENT_PATH, `${slug}.mdx`);

    // ตรวจสอบความมีอยู่ของไฟล์ MDX
    if (!fs.existsSync(fullPath)) {
      // หากไม่มีไฟล์ MDX ให้ส่งกลับเฉพาะข้อมูลพื้นฐาน
      return {
        ...baseInfo,
        content: "",
      };
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    /**
     * Data Merging Protocol:
     * ลำดับความสำคัญ: MDX Frontmatter > Base Constants
     */
    return {
      ...baseInfo,
      ...data, // ทับข้อมูลบางส่วนจาก Frontmatter หากมีการระบุไว้
      description: content, // ใช้เนื้อหาจาก MDX เป็นคำอธิบายเชิงลึก
      metadata: {
        ...baseInfo.metadata,
        ...(data.metadata as object || {}),
      },
    };
  } catch (error) {
    // รายงานความผิดพลาดในระบบ Log ภายใต้ Intelligence Framework
    console.error(`Audit Error | Failed to fetch service: ${slug}`, error);
    return null;
  }
}
