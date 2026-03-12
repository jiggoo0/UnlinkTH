import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
  Service,
  CaseStudy,
  BlogPost,
  BlogPostFrontmatter,
  ServiceFrontmatter,
} from "@/types";
import { getImageUrl } from "./utils";

/**
 * @REBRANDED: UNLINK-GLOBAL Intelligence Engine
 * วางระบบดึงข้อมูลแบบอุตสาหกรรม (Industrial Grade)
 */

const CONTENT_PATH = path.join(process.cwd(), "content");

/**
 * @TYPE_SYSTEM: Discriminated Unions for Industrial Grade Content
 */
export type ContentCategory = "blog" | "case-studies" | "services";

/**
 * ตัวช่วยจัดการ Path รูปภาพ (Intelligence Layer)
 */
function resolveImagePath(img: string | undefined, category: string): string {
  if (!img) {
    return category === "services"
      ? "/images/services/default.webp"
      : "/images/blog/digital-ghost.webp";
  }
  if (img.startsWith("/") || img.startsWith("http")) return img;

  // ตรวจสอบโครงสร้างโฟลเดอร์
  const cleanPath = img.replace(/^images\//, "");
  if (cleanPath.startsWith(category + "/")) {
    return `/images/${cleanPath}`;
  }

  // พิเศษสำหรับ Case Studies ที่โฟลเดอร์ใน public คือ cases
  if (category === "case-studies") {
    return `/images/cases/${cleanPath}`;
  }

  return `/images/${category}/${cleanPath}`;
}

/**
 * สแกนไฟล์ Recursive แบบเสถียร
 */
function getFilesRecursive(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = entries.map((entry) => {
    const res = path.resolve(dir, entry.name);
    return entry.isDirectory() ? getFilesRecursive(res) : res;
  });
  return Array.prototype.concat(...files).filter((f) => f.endsWith(".mdx"));
}

// =========================================================
// SERVICES SYSTEM (CORE)
// =========================================================

export async function getAllServices(): Promise<Service[]> {
  try {
    const servicesDir = path.join(CONTENT_PATH, "services");
    const files = getFilesRecursive(servicesDir);

    return files.map((filePath) => {
      const source = fs.readFileSync(filePath, "utf8");
      const { data } = matter(source);
      const slug = path.basename(filePath, ".mdx");
      const fm = data as unknown as ServiceFrontmatter;

      return {
        id: fm.id || slug,
        slug: slug,
        title: fm.title || "Untitled Service",
        shortDescription: fm.shortDescription || fm.description || "",
        description: fm.description || "",
        iconName: fm.iconName || "ShieldCheck",
        image: getImageUrl(
          resolveImagePath(fm.image || fm.imageUrl || fm.thumbnail, "services"),
        ),
        category: fm.category || "General",
        features: fm.features || [],
        priceInfo: fm.priceInfo || {
          startingAt: "0",
          unit: "ครั้ง",
          model: "Consultation",
        },
        metadata: fm.metadata || {
          defaultTitle: fm.title || "",
          defaultDescription: fm.shortDescription || "",
          keywords: [],
        },
      } as Service;
    });
  } catch (error) {
    console.error("[INTELLIGENCE] Failed to fetch services:", error);
    return [];
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const services = await getAllServices();
    const service = services.find((s) => s.slug === slug);
    if (!service) return null;

    // ดึงเนื้อหา MDX จริงๆ สำหรับหน้ารายละเอียด
    const servicesDir = path.join(CONTENT_PATH, "services");
    const files = getFilesRecursive(servicesDir);
    const filePath = files.find((f) => path.basename(f, ".mdx") === slug);

    if (filePath) {
      const { content } = matter(fs.readFileSync(filePath, "utf8"));
      return { ...service, description: content };
    }
    return service;
  } catch {
    return null;
  }
}

// =========================================================
// CASE STUDIES & BLOG SYSTEMS
// =========================================================

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  try {
    const dir = path.join(CONTENT_PATH, "case-studies");
    const files = getFilesRecursive(dir);

    return files
      .map((filePath) => {
        const { data } = matter(fs.readFileSync(filePath, "utf8"));
        const slug = path.basename(filePath, ".mdx");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const d = data as Record<string, any>;

        return {
          slug,
          title: d.title || "Classified Case",
          category: d.category || "Operation",
          thumbnail: resolveImagePath(d.image || d.thumbnail, "case-studies"),
          excerpt: d.excerpt || d.description || "",
          date: d.date || "2026-01-01",
          priority: d.priority || 0,
        } as CaseStudy;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch {
    return [];
  }
}

export async function getCaseStudyBySlug(slug: string) {
  const all = await getAllCaseStudies();
  const found = all.find((c) => c.slug === slug);
  if (!found) return null;

  const dir = path.join(CONTENT_PATH, "case-studies");
  const files = getFilesRecursive(dir);
  const filePath = files.find((f) => path.basename(f, ".mdx") === slug);

  if (filePath) {
    const { content } = matter(fs.readFileSync(filePath, "utf8"));
    return { slug, frontmatter: found, content };
  }
  return null;
}

export async function getAllBlogPosts(): Promise<BlogPostFrontmatter[]> {
  try {
    const dir = path.join(CONTENT_PATH, "blog");
    const files = getFilesRecursive(dir);

    return files
      .map((filePath) => {
        const { data } = matter(fs.readFileSync(filePath, "utf8"));
        const slug = path.basename(filePath, ".mdx");
        return {
          ...data,
          slug,
          image: resolveImagePath(data.image || data.thumbnail, "blog"),
          date: data.date || new Date().toISOString(),
        } as BlogPostFrontmatter;
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch {
    return [];
  }
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  const dir = path.join(CONTENT_PATH, "blog");
  const files = getFilesRecursive(dir);
  const filePath = files.find((f) => path.basename(f, ".mdx") === slug);

  if (!filePath) return null;

  const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
  return {
    ...data,
    content,
    slug,
    image: resolveImagePath(data.image || data.thumbnail, "blog"),
  } as BlogPost;
}

// Support for older implementations
export async function getAllPosts<T>(category: ContentCategory): Promise<T[]> {
  if (category === "blog") return (await getAllBlogPosts()) as unknown as T[];
  if (category === "services")
    return (await getAllServices()) as unknown as T[];
  if (category === "case-studies")
    return (await getAllCaseStudies()) as unknown as T[];
  return [];
}

export const getLatestCaseStudies = async (limit: number) => {
  const all = await getAllCaseStudies();
  return all.slice(0, limit);
};
