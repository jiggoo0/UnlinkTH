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
 * ตัวช่วยจัดการ Path รูปภาพให้ถูกต้อง
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

/**
 * ค้นหาไฟล์ .mdx ทั้งหมดในโฟลเดอร์ (รวมโฟลเดอร์ย่อย)
 */
function getAllMdxFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
  if (!fs.existsSync(dirPath)) return [];
  
  const files = fs.readdirSync(dirPath);

  files.forEach(function(file) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllMdxFiles(fullPath, arrayOfFiles);
    } else if (file.endsWith(".mdx")) {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

// =========================================================
// CORE GENERIC FETCHER
// =========================================================

export async function getAllPosts<T>(category: ContentCategory): Promise<T[]> {
  try {
    const categoryPath = path.join(process.cwd(), "content", category);
    if (!fs.existsSync(categoryPath)) return [];

    const filePaths = getAllMdxFiles(categoryPath);
    const posts = filePaths.map((filePath) => {
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      const slug = path.basename(filePath).replace(".mdx", "");
      
      return {
        ...data,
        slug,
        image: resolveImage(data.image || data.thumbnail, category),
        date: data.date || "2026-01-01",
      } as T;
    });

    return posts.sort((a: any, b: any) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (error) {
    console.error(`[MDX] Error in getAllPosts (${category}):`, error);
    return [];
  }
}

// =========================================================
// SERVICES
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
  const posts = await getAllPosts<any>("services");
  return posts.map(post => mapFrontmatterToService(post, post.slug));
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const servicesPath = path.join(process.cwd(), "content", "services");
    const allFiles = getAllMdxFiles(servicesPath);
    const filePath = allFiles.find(f => path.basename(f) === `${slug}.mdx`);
    
    if (!filePath) return null;

    const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
    const service = mapFrontmatterToService(data, slug);
    return { ...service, description: content };
  } catch (error) {
    console.error(`[MDX] Error in getServiceBySlug (${slug}):`, error);
    return null;
  }
}

// =========================================================
// CASE STUDIES
// =========================================================

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  try {
    const categoryPath = path.join(process.cwd(), "content", "case-studies");
    if (!fs.existsSync(categoryPath)) return [];

    const filePaths = getAllMdxFiles(categoryPath);
    const cases = filePaths.map((filePath) => {
      const { data } = matter(fs.readFileSync(filePath, "utf8"));
      const slug = path.basename(filePath).replace(".mdx", "");
      return {
        slug,
        title: data.title || "Untitled Operation",
        category: data.category || "General",
        thumbnail: resolveImage(data.image || data.thumbnail, "case-studies"),
        excerpt: data.excerpt || data.description || "",
        date: data.date || "2026-01-01",
        priority: data.priority || 0,
      } as CaseStudy;
    });

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
    const categoryPath = path.join(process.cwd(), "content", "case-studies");
    const allFiles = getAllMdxFiles(categoryPath);
    const filePath = allFiles.find(f => path.basename(f) === `${slug}.mdx`);

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
    console.error(`[MDX] Error in getCaseStudyBySlug (${slug}):`, error);
    return null;
  }
}

// =========================================================
// BLOG
// =========================================================

export async function getAllBlogPosts(): Promise<BlogPostFrontmatter[]> {
  const posts = await getAllPosts<BlogPostFrontmatter>("blog");
  return posts;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const categoryPath = path.join(process.cwd(), "content", "blog");
    const allFiles = getAllMdxFiles(categoryPath);
    const filePath = allFiles.find(f => path.basename(f) === `${slug}.mdx`);

    if (!filePath) return null;

    const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
    return {
      content,
      ...data,
      slug,
      image: resolveImage(data.image || data.thumbnail, "blog"),
    } as BlogPost;
  } catch (error) {
    console.error(`[MDX] Error in getBlogPostBySlug (${slug}):`, error);
    return null;
  }
}
