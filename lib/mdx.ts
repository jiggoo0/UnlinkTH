import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Service, CaseStudy, BlogPost, BlogPostFrontmatter } from "@/types";
import { getImageUrl } from "./utils";

/**
 * ดึงพาธ Content Root
 */
const getRootPath = () => path.join(process.cwd(), "content");

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
 * สแกนไฟล์ .mdx แบบละเอียด
 */
function scanMdxFiles(dir: string, fileList: string[] = []): string[] {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      scanMdxFiles(filePath, fileList);
    } else if (file.endsWith(".mdx")) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

// =========================================================
// SERVICES
// =========================================================

function mapToService(data: any, slug: string): Service {
  return {
    id: data.id || slug,
    slug: slug,
    title: data.title || "Untitled Service",
    shortDescription: data.shortDescription || data.description || "",
    description: data.description || "",
    iconName: data.iconName || "ShieldCheck",
    image: getImageUrl(resolveImage(data.image || data.imageUrl || data.thumbnail, "services")),
    category: data.category || "General",
    features: data.features || [],
    priceInfo: data.priceInfo || { startingAt: "0", unit: "ครั้ง", model: "Contact" },
    metadata: data.metadata || { defaultTitle: data.title, defaultDescription: data.description, keywords: [] },
  };
}

export async function getAllServices(): Promise<Service[]> {
  try {
    const dir = path.join(getRootPath(), "services");
    const files = scanMdxFiles(dir);
    return files.map((file) => {
      const { data } = matter(fs.readFileSync(file, "utf8"));
      return mapToService(data, path.basename(file, ".mdx"));
    });
  } catch (e) {
    return [];
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const files = scanMdxFiles(path.join(getRootPath(), "services"));
    const file = files.find((f) => path.basename(f, ".mdx") === slug);
    if (!file) return null;
    const { data, content } = matter(fs.readFileSync(file, "utf8"));
    const service = mapToService(data, slug);
    return { ...service, description: content };
  } catch (e) {
    return null;
  }
}

// =========================================================
// CASE STUDIES
// =========================================================

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  try {
    const files = scanMdxFiles(path.join(getRootPath(), "case-studies"));
    const cases = files.map((file) => {
      const { data } = matter(fs.readFileSync(file, "utf8"));
      const slug = path.basename(file, ".mdx");
      return {
        slug,
        title: data.title || "Untitled Case",
        category: data.category || "General",
        thumbnail: resolveImage(data.image || data.thumbnail, "case-studies"),
        excerpt: data.excerpt || data.description || "",
        date: data.date || "2026-01-01",
        priority: data.priority || 0,
      } as CaseStudy;
    });
    return cases.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (e) {
    return [];
  }
}

export async function getCaseStudyBySlug(slug: string) {
  try {
    const files = scanMdxFiles(path.join(getRootPath(), "case-studies"));
    const file = files.find((f) => path.basename(f, ".mdx") === slug);
    if (!file) return null;
    const { data, content } = matter(fs.readFileSync(file, "utf8"));
    return {
      slug,
      frontmatter: {
        title: data.title || "Classified",
        category: data.category || "Operation",
        thumbnail: resolveImage(data.image || data.thumbnail, "case-studies"),
        excerpt: data.excerpt || data.description || "",
        date: data.date || "2026-01-01",
        description: data.description || "",
      },
      content,
    };
  } catch (e) {
    return null;
  }
}

export async function getLatestCaseStudies(limit: number = 3): Promise<CaseStudy[]> {
  const all = await getAllCaseStudies();
  return all.slice(0, limit);
}

// =========================================================
// BLOG
// =========================================================

export async function getAllBlogPosts(): Promise<BlogPostFrontmatter[]> {
  try {
    const files = scanMdxFiles(path.join(getRootPath(), "blog"));
    return files.map((file) => {
      const { data } = matter(fs.readFileSync(file, "utf8"));
      return {
        ...data,
        slug: path.basename(file, ".mdx"),
        image: resolveImage(data.image || data.thumbnail, "blog"),
        date: data.date || new Date().toISOString(),
      } as BlogPostFrontmatter;
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (e) {
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const files = scanMdxFiles(path.join(getRootPath(), "blog"));
    const file = files.find((f) => path.basename(f, ".mdx") === slug);
    if (!file) return null;
    const { data, content } = matter(fs.readFileSync(file, "utf8"));
    return { content, ...data, slug, image: resolveImage(data.image || data.thumbnail, "blog") } as BlogPost;
  } catch (e) {
    return null;
  }
}

export type ContentCategory = "blog" | "case-studies" | "services";

export async function getAllPosts<T>(category: ContentCategory): Promise<T[]> {
  if (category === "blog") return (await getAllBlogPosts()) as any;
  if (category === "services") return (await getAllServices()) as any;
  if (category === "case-studies") return (await getAllCaseStudies()) as any;
  return [];
}
