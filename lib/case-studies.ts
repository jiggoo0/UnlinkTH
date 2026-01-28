/** @format */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { CaseStudy } from "@/types";

const CASES_PATH = path.join(process.cwd(), "content/case-studies");

/**
 * ดึงรายการ Case Studies ทั้งหมด
 * ดำเนินการ Parse Metadata และจัดเรียงตามลำดับเวลา (Chronological Order)
 */
export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  if (!fs.existsSync(CASES_PATH)) {
    console.warn("Audit Warning: Case studies directory not found.");
    return [];
  }

  const files = fs.readdirSync(CASES_PATH);

  const studies = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(CASES_PATH, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);

      // Mapping ข้อมูลให้ตรงตาม Interface CaseStudy
      return {
        slug: file.replace(".mdx", ""),
        title: data.title || "Untitled Operation",
        category: data.category || "General",
        thumbnail: data.thumbnail || data.image || "/images/cases/unlink-th.webp",
        excerpt: data.excerpt || data.description || "",
        date: data.date || "2026-01-01",
        priority: data.priority || 0,
      } as CaseStudy;
    });

  // เรียงลำดับ: ใหม่ไปเก่า (Descending Order)
  return studies.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
}

/**
 * ดึงข้อมูล Case Study รายรายการ (Intelligence Extraction)
 * ใช้สำหรับหน้า Dynamic Route [slug]
 */
export async function getCaseStudyBySlug(slug: string) {
  try {
    const fullPath = path.join(CASES_PATH, `${slug}.mdx`);
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    // จัดกลุ่มข้อมูลเพื่อความง่ายในการเรียกใช้ใน Page Component
    return {
      slug,
      frontmatter: {
        title: data.title || "Untitled Operation",
        category: data.category || "General",
        thumbnail: data.thumbnail || data.image || "/images/cases/unlink-th.webp",
        excerpt: data.excerpt || data.description || "",
        date: data.date || "2026-01-01",
        description: data.description || "",
      },
      content,
    };
  } catch {
    // ระงับ Error Object ที่ไม่ได้ใช้งานเพื่อความสะอาดของ Code
    return null;
  }
}

/**
 * ดึงรายการล่าสุดตามจำนวนที่ระบุ (Latest Briefing)
 * สำหรับแสดงผลที่หน้า Home หรือ Sidebar
 */
export async function getLatestCaseStudies(
  limit: number = 3
): Promise<CaseStudy[]> {
  const allCases = await getAllCaseStudies();
  return allCases.slice(0, limit);
}
