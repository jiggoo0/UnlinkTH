import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Service, CaseStudy, BlogPost, BlogPostFrontmatter } from "@/types";
import { getImageUrl } from "./utils";

/**
 * @TYPE_SYSTEM: Discriminated Unions for Industrial Grade Content
 */
export type ContentCategory = "blog" | "case-studies" | "services";

/**
 * ตัวช่วยดึงพาธ Content ที่ปลอดภัยที่สุด
 */
function getContentPath(...subPaths: string[]) {
  return path.join(process.cwd(), "content", ...subPaths);
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
// GENERIC FETCHER
// =========================================================

export async function getAllPosts<T>(category: ContentCategory): Promise<T[]> {
  try {
    const categoryPath = getContentPath(category);
    if (!fs.existsSync(categoryPath)) {
      console.warn(`[MDX] Directory not found: ${categoryPath}`);
      return [];
    }

    const posts: T[] = [];

    function scan(dir: string) {
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
    return posts.sort((a: any, b: any) => 
      new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime()
    );
  } catch (error) {
    console.error(`[MDX] Error in getAllPosts (${category}):`, error);
    return [];
  }
}

// =========================================================
// SERVICES (CORE BUSINESS)
// =========================================================

function mapFrontmatterToService(fm: any, slug: string): Service {
  return {
    id: fm.id || slug,
    slug: slug,
    title: fm.title || "Untitled Service",
    shortDescription: fm.shortDescription || fm.description || "",
    description: fm.description || "",
    iconName: fm.iconName || "ShieldCheck",
    image: getImageUrl(resolveImage(fm.image || fm.imageUrl, "services")),
    category: fm.category || "General",
    features: fm.features || [],
    priceInfo: fm.priceInfo || {
      startingAt: "0",
      unit: "ครั้ง",
      model: "Contact for Pricing",
    },
    metadata: fm.metadata || {
      defaultTitle: fm.title || "",
      defaultDescription: fm.description || "",
      keywords: [],
    },
  };
}

export async function getAllServices(): Promise<Service[]> {
  try {
    const servicesDir = getContentPath("services");
    if (!fs.existsSync(servicesDir)) return [];

    const services: Service[] = [];
    function scan(dir: string) {
      const entries = fs.readdirSync(dir);
      for (const entry of entries) {
        const fullPath = path.join(dir, entry);
        if (fs.statSync(fullPath).isDirectory()) {
          scan(fullPath);
        } else if (entry.endsWith(".mdx")) {
          const { data } = matter(fs.readFileSync(fullPath, "utf8"));
          services.push(mapFrontmatterToService(data, entry.replace(".mdx", "")));
        }
      }
    }
    scan(servicesDir);
    return services;
  } catch (error) {
    console.error("[MDX] Error in getAllServices:", error);
    return [];
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const servicesDir = getContentPath("services");
    
    function findFile(dir: string): string | null {
      const entries = fs.readdirSync(dir);
      for (const entry of entries) {
        const fullPath = path.join(dir, entry);
        if (fs.statSync(fullPath).isDirectory()) {
          const found = findFile(fullPath);
          if (found) return found;
        } else if (entry === `${slug}.mdx`) {
          return fullPath;
        }
      }
      return null;
    }

    const filePath = findFile(servicesDir);
    if (!filePath) return null;

    const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
    const service = mapFrontmatterToService(data, slug);
    return { ...service, description: content };
  } catch (error) {
    console.error(`[MDX] Error getting service by slug (${slug}):`, error);
    return null;
  }
}

// =========================================================
// CASE STUDIES (PORTFOLIO)
// =========================================================

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  try {
    const categoryPath = getContentPath("case-studies");
    if (!fs.existsSync(categoryPath)) return [];

    const cases: CaseStudy[] = [];
    function scan(dir: string) {
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
    return cases.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("[MDX] Error in getAllCaseStudies:", error);
    return [];
  }
}

export async function getLatestCaseStudies(limit: number = 3): Promise<CaseStudy[]> {
  const allCases = await getAllCaseStudies();
  return allCases.slice(0, limit);
}

export async function getCaseStudyBySlug(slug: string) {
  try {
    const casesDir = getContentPath("case-studies");
    
    function findFile(dir: string): string | null {
      const entries = fs.readdirSync(dir);
      for (const entry of entries) {
        const fullPath = path.join(dir, entry);
        if (fs.statSync(fullPath).isDirectory()) {
          const found = findFile(fullPath);
          if (found) return found;
        } else if (entry === `${slug}.mdx`) {
          return fullPath;
        }
      }
      return null;
    }

    const filePath = findFile(casesDir);
    if (!filePath) return null;

    const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
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
  } catch (error) {
    console.error(`[MDX] Error getting case study by slug (${slug}):`, error);
    return null;
  }
}

// =========================================================
// BLOG (INSIGHTS)
// =========================================================

export async function getAllBlogPosts(): Promise<BlogPostFrontmatter[]> {
  try {
    const blogDir = getContentPath("blog");
    if (!fs.existsSync(blogDir)) return [];

    const posts: BlogPostFrontmatter[] = [];
    function scan(dir: string) {
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
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error("[MDX] Error in getAllBlogPosts:", error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const blogDir = getContentPath("blog");
    
    function findFile(dir: string): string | null {
      const entries = fs.readdirSync(dir);
      for (const entry of entries) {
        const fullPath = path.join(dir, entry);
        if (fs.statSync(fullPath).isDirectory()) {
          const found = findFile(fullPath);
          if (found) return found;
        } else if (entry === `${slug}.mdx`) {
          return fullPath;
        }
      }
      return null;
    }

    const filePath = findFile(blogDir);
    if (!filePath) return null;

    const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
    return {
      content,
      ...data,
      slug,
      image: resolveImage(data.image || data.thumbnail, "blog"),
    } as BlogPost;
  } catch (error) {
    console.error(`[MDX] Error getting blog post by slug (${slug}):`, error);
    return null;
  }
}
