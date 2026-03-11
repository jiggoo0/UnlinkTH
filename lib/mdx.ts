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
  if (img.startsWith("blog/") || img.startsWith("cases/") || img.startsWith("services/")) {
    return `/images/${img}`;
  }
  return `/images/${category}/${img}`;
};

/**
 * สแกนไฟล์ .mdx แบบละเอียด (สนับสนุน Vercel Output Tracing)
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

function mapToService(data: Record<string, any>, slug: string): Service {
  const d = data;
  const desc = d.shortDescription || d.description || "";
  return {
    id: d.id || slug,
    slug: slug,
    title: d.title || "Untitled Service",
    shortDescription: desc,
    description: d.description || "",
    iconName: d.iconName || "ShieldCheck",
    image: getImageUrl(resolveImage(d.image || d.imageUrl || d.thumbnail, "services")),
    category: d.category || "General",
    features: d.features || [],
    priceInfo: d.priceInfo || { startingAt: "0", unit: "ครั้ง", model: "Contact" },
    metadata: d.metadata || { defaultTitle: d.title || "", defaultDescription: desc, keywords: [] },
  };
}

export async function getAllServices(): Promise<Service[]> {
  try {
    const contentPath = path.resolve(process.cwd(), "content/services");
    if (!fs.existsSync(contentPath)) return [];
    
    const files = scanMdxFiles(contentPath);
    return files.map((file) => {
      const { data } = matter(fs.readFileSync(file, "utf8"));
      return mapToService(data, path.basename(file, ".mdx"));
    });
  } catch (error) {
    console.error("[MDX] getAllServices Error:", error);
    return [];
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const contentPath = path.resolve(process.cwd(), "content/services");
    const files = scanMdxFiles(contentPath);
    const file = files.find((f) => path.basename(f, ".mdx") === slug);
    if (!file) return null;
    const { data, content } = matter(fs.readFileSync(file, "utf8"));
    return { ...mapToService(data, slug), description: content };
  } catch {
    return null;
  }
}

// =========================================================
// CASE STUDIES
// =========================================================

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  try {
    const contentPath = path.resolve(process.cwd(), "content/case-studies");
    if (!fs.existsSync(contentPath)) return [];
    
    const files = scanMdxFiles(contentPath);
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
  } catch {
    return [];
  }
}

export async function getCaseStudyBySlug(slug: string) {
  try {
    const contentPath = path.resolve(process.cwd(), "content/case-studies");
    const files = scanMdxFiles(contentPath);
    const file = files.find((f) => path.basename(f, ".mdx") === slug);
    if (!file) return null;
    const { data, content } = matter(fs.readFileSync(file, "utf8"));
    return {
      slug,
      frontmatter: {
        title: data.title,
        category: data.category,
        thumbnail: resolveImage(data.image || data.thumbnail, "case-studies"),
        excerpt: data.excerpt || data.description,
        date: data.date,
        description: data.description,
      },
      content,
    };
  } catch {
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
    const contentPath = path.resolve(process.cwd(), "content/blog");
    if (!fs.existsSync(contentPath)) return [];
    
    const files = scanMdxFiles(contentPath);
    return files.map((file) => {
      const { data } = matter(fs.readFileSync(file, "utf8"));
      return {
        ...data,
        slug: path.basename(file, ".mdx"),
        image: resolveImage(data.image || data.thumbnail, "blog"),
        date: data.date || new Date().toISOString(),
      } as unknown as BlogPostFrontmatter;
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch {
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const contentPath = path.resolve(process.cwd(), "content/blog");
    const files = scanMdxFiles(contentPath);
    const file = files.find((f) => path.basename(f, ".mdx") === slug);
    if (!file) return null;
    const { data, content } = matter(fs.readFileSync(file, "utf8"));
    return { content, ...data, slug, image: resolveImage(data.image || data.thumbnail, "blog") } as unknown as BlogPost;
  } catch {
    return null;
  }
}

export async function getAllPosts<T>(category: ContentCategory): Promise<T[]> {
  if (category === "blog") return (await getAllBlogPosts()) as unknown as T[];
  if (category === "services") return (await getAllServices()) as unknown as T[];
  if (category === "case-studies") return (await getAllCaseStudies()) as unknown as T[];
  return [];
}
