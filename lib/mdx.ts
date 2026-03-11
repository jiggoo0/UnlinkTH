import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Service, CaseStudy, BlogPost, BlogPostFrontmatter } from "@/types";
import { getImageUrl } from "./utils";

const contentDir = path.join(process.cwd(), "content");

/**
 * @TYPE_SYSTEM: Discriminated Unions for Industrial Grade Content
 */
export type ContentCategory = "blog" | "case-studies" | "services";

/**
 * ปลอดภัยต่อการรันบน Server (Vercel)
 */
function getSafeContentDir() {
  return contentDir;
}

/**
 * ดึงข้อมูล MDX ทั้งหมดในหมวดหมู่ที่ระบุ (Generic Version)
 */
export async function getAllPosts<T>(category: ContentCategory): Promise<T[]> {
  try {
    const categoryPath = path.join(getSafeContentDir(), category);
    const posts: T[] = [];

    function scan(dir: string) {
      if (!fs.existsSync(dir)) return;
      const entries = fs.readdirSync(dir);
      for (const entry of entries) {
        const fullPath = path.join(dir, entry);
        if (fs.statSync(fullPath).isDirectory()) {
          scan(fullPath);
        } else if (entry.endsWith(".mdx")) {
          const { data } = matter(fs.readFileSync(fullPath, "utf8"));
          posts.push({
            ...data,
            slug: entry.replace(".mdx", ""),
            image: resolveImage(data.image || data.thumbnail, category),
            date: data.date || new Date().toISOString(),
          } as T);
        }
      }
    }

    scan(categoryPath);
    return posts.sort((a, b) => {
      const dateA = new Date((a as { date: string }).date).getTime();
      const dateB = new Date((b as { date: string }).date).getTime();
      return dateB - dateA;
    });
  } catch (error) {
    console.error(`Error in getAllPosts for category ${category}:`, error);
    return [];
  }
}

export interface ServiceFrontmatter {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription?: string;
  date: string;
  author: string;
  category: string;
  image?: string;
  thumbnail?: string;
  imageUrl?: string;
  iconName?: string;
  features?: string[];
  priceInfo?: {
    startingAt: string;
    unit: string;
    model: string;
  };
  metadata?: {
    defaultTitle: string;
    defaultDescription: string;
    keywords: string[];
  };
}

/**
 * ค้นหาไฟล์ .mdx แบบ Recursive
 */
function findFileRecursive(dir: string, slug: string): string | null {
  try {
    if (!fs.existsSync(dir)) return null;
    const entries = fs.readdirSync(dir);
    for (const entry of entries) {
      const fullPath = path.join(dir, entry);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        const found = findFileRecursive(fullPath, slug);
        if (found) return found;
      } else if (entry === `${slug}.mdx`) {
        return fullPath;
      }
    }
  } catch (err) {
    console.error(`Recursive search error in ${dir}:`, err);
  }
  return null;
}

/**
 * ตัวช่วยจัดการ Path รูปภาพให้ถูกต้อง (เริ่มด้วย /images/)
 */
const resolveImage = (img: string | undefined, category: string): string => {
  if (!img) {
    return category === "services"
      ? "/images/services/default.webp"
      : "/images/blog/digital-ghost.webp";
  }
  if (img.startsWith("/") || img.startsWith("http")) return img;
  return `/images/${img}`;
};

// =========================================================
// SERVICES (CORE BUSINESS)
// =========================================================

function mapFrontmatterToService(fm: ServiceFrontmatter): Service {
  return {
    id: fm.id || fm.slug,
    slug: fm.slug,
    title: fm.title,
    shortDescription: fm.shortDescription || fm.description,
    description: fm.description,
    iconName: fm.iconName || "Activity",
    image: getImageUrl(resolveImage(fm.image || fm.imageUrl, "services")),
    category: fm.category,
    features: fm.features || [],
    priceInfo: fm.priceInfo || {
      startingAt: "0",
      unit: "ครั้ง",
      model: "Contact for Pricing",
    },
    metadata: fm.metadata || {
      defaultTitle: fm.title,
      defaultDescription: fm.description,
      keywords: [],
    },
  };
}

export async function getAllServices(): Promise<Service[]> {
  try {
    const servicesDir = path.join(getSafeContentDir(), "services");
    const services: Service[] = [];

    function scan(dir: string) {
      if (!fs.existsSync(dir)) return;
      const entries = fs.readdirSync(dir);
      for (const entry of entries) {
        const fullPath = path.join(dir, entry);
        if (fs.statSync(fullPath).isDirectory()) {
          scan(fullPath);
        } else if (entry.endsWith(".mdx")) {
          const { data } = matter(fs.readFileSync(fullPath, "utf8"));
          services.push(
            mapFrontmatterToService({
              ...data,
              slug: entry.replace(".mdx", ""),
            } as ServiceFrontmatter),
          );
        }
      }
    }

    scan(servicesDir);
    return services;
  } catch (error) {
    console.error("Error in getAllServices:", error);
    return [];
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const fullPath = findFileRecursive(path.join(getSafeContentDir(), "services"), slug);
  if (!fullPath) return null;

  const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));
  const service = mapFrontmatterToService({
    ...data,
    slug,
  } as ServiceFrontmatter);

  return { ...service, description: content };
}

// =========================================================
// CASE STUDIES (PORTFOLIO)
// =========================================================

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  try {
    const categoryPath = path.join(getSafeContentDir(), "case-studies");
    const cases: CaseStudy[] = [];

    function scan(dir: string) {
      if (!fs.existsSync(dir)) return;
      const entries = fs.readdirSync(dir);
      for (const entry of entries) {
        const fullPath = path.join(dir, entry);
        if (fs.statSync(fullPath).isDirectory()) {
          scan(fullPath);
        } else if (entry.endsWith(".mdx")) {
          const { data } = matter(fs.readFileSync(fullPath, "utf8"));
          const slug = entry.replace(".mdx", "");
          cases.push({
            slug,
            title: data.title || "Untitled Operation",
            category: data.category || "General",
            thumbnail: resolveImage(data.image || data.thumbnail, "case-studies"),
            excerpt: data.excerpt || data.description || "",
            date: data.date || "2026-01-01",
            priority: data.priority || 0,
          } as CaseStudy);
        }
      }
    }

    scan(categoryPath);
    return cases.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  } catch (error) {
    console.error("Error in getAllCaseStudies:", error);
    return [];
  }
}

export async function getLatestCaseStudies(
  limit: number = 3,
): Promise<CaseStudy[]> {
  const allCases = await getAllCaseStudies();
  return allCases.slice(0, limit);
}

export async function getCaseStudyBySlug(slug: string) {
  const fullPath = findFileRecursive(
    path.join(getSafeContentDir(), "case-studies"),
    slug,
  );
  if (!fullPath) return null;

  const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));
  return {
    slug,
    frontmatter: {
      title: data.title || "Untitled Operation",
      category: data.category || "General",
      thumbnail: resolveImage(data.image || data.thumbnail, "case-studies"),
      excerpt: data.excerpt || data.description || "",
      date: data.date || "2026-01-01",
      description: data.description || "",
    },
    content,
  };
}

// =========================================================
// BLOG (INSIGHTS)
// =========================================================

export async function getAllBlogPosts(): Promise<BlogPostFrontmatter[]> {
  try {
    const blogDir = path.join(getSafeContentDir(), "blog");
    const posts: BlogPostFrontmatter[] = [];

    function scan(dir: string) {
      if (!fs.existsSync(dir)) return;
      const entries = fs.readdirSync(dir);
      for (const entry of entries) {
        const fullPath = path.join(dir, entry);
        if (fs.statSync(fullPath).isDirectory()) {
          scan(fullPath);
        } else if (entry.endsWith(".mdx")) {
          const { data } = matter(fs.readFileSync(fullPath, "utf8"));
          posts.push({
            ...data,
            slug: entry.replace(".mdx", ""),
            image: resolveImage(data.image || data.thumbnail, "blog"),
            date: data.date || new Date().toISOString(),
          } as BlogPostFrontmatter);
        }
      }
    }

    scan(blogDir);
    return posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  } catch (error) {
    console.error("Error in getAllBlogPosts:", error);
    return [];
  }
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  const fullPath = findFileRecursive(path.join(getSafeContentDir(), "blog"), slug);
  if (!fullPath) return null;

  const { data, content } = matter(fs.readFileSync(fullPath, "utf8"));
  return {
    content,
    ...data,
    slug,
    image: resolveImage(data.image || data.thumbnail, "blog"),
  } as BlogPost;
}
