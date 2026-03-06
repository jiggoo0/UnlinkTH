/** @format */

import { CaseStudy } from "@/types";
import { getAllPosts, getPostBySlug } from "./mdx";

interface CaseFrontmatter {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
  category: string;
  client: string;
  outcome: string;
  thumbnail?: string;
  excerpt?: string;
  priority?: number;
}

/**
 * ดึงรายการ Case Studies ทั้งหมด
 */
export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  const allData = await getAllPosts<CaseFrontmatter>("case-studies");

  const studies = allData.map((item) => {
    return {
      slug: item.slug,
      title: item.title || "Untitled Operation",
      category: item.category || "General",
      thumbnail: item.thumbnail || item.image || "/images/cases/unlink-th.webp",
      excerpt: item.excerpt || item.description || "",
      date: item.date || "2026-01-01",
      priority: item.priority || 0,
    } as CaseStudy;
  });

  return studies.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });
}

/**
 * ดึงข้อมูล Case Study รายรายการ
 */
export async function getCaseStudyBySlug(slug: string) {
  const result = await getPostBySlug<CaseFrontmatter>("case-studies", slug);
  if (!result) return null;

  const { data: frontmatter, content } = result;

  return {
    slug,
    frontmatter: {
      title: frontmatter.title || "Untitled Operation",
      category: frontmatter.category || "General",
      thumbnail:
        frontmatter.thumbnail ||
        frontmatter.image ||
        "/images/cases/unlink-th.webp",
      excerpt: frontmatter.excerpt || frontmatter.description || "",
      date: frontmatter.date || "2026-01-01",
      description: frontmatter.description || "",
    },
    content,
  };
}

/**
 * ดึงรายการล่าสุด
 */
export async function getLatestCaseStudies(
  limit: number = 3,
): Promise<CaseStudy[]> {
  const allCases = await getAllCaseStudies();
  return allCases.slice(0, limit);
}
