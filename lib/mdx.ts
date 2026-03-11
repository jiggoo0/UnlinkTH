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

  if (
    img.startsWith("blog/") ||
    img.startsWith("cases/") ||
    img.startsWith("services/")
  ) {
    return `/images/${img}`;
  }

  return `/images/${category}/${img}`;
};

/**
 * สแกนไฟล์ .mdx แบบละเอียด (สนับสนุน Vercel Output Tracing)
 */
function scanMdxFiles(dir: string, fileList: string[] = []): string[] {
  if (!fs.existsSync(dir)) {
    console.warn(`[MDX] Directory not found: ${dir}`);
    return fileList;
  }
  
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

function mapToService(data: Record<string, unknown>, slug: string): Service {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const d = data as any;
  const desc = d.shortDescription || d.description || "";
  const title = d.title || "Untitled Service";
  
  return {
    id: d.id || slug,
    slug: slug,
    title: title,
    shortDescription: desc,
    description: d.description || "",
    iconName: d.iconName || "ShieldCheck",
    image: getImageUrl(resolveImage(d.image || d.imageUrl || d.thumbnail, "services")),
    category: d.category || "General",
    features: d.features || [],
    priceInfo: d.priceInfo || { startingAt: "0", unit: "ครั้ง", model: "Contact" },
    metadata: d.metadata || { 
      defaultTitle: title, 
      defaultDescription: desc, 
      keywords: [] 
    },
  };
}

export async function getAllServices(): Promise<Service[]> {
  try {
    const contentPath = path.join(process.cwd(), "content", "services");
    console.log(`[MDX] Scanning services at: ${contentPath}`);
    
    const files = scanMdxFiles(contentPath);
    console.log(`[MDX] Found ${files.length} service files`);

    return files.map((file) => {
      const fileContents = fs.readFileSync(file, "utf8");
      const { data } = matter(fileContents);
      return mapToService(data as Record<string, unknown>, path.basename(file, ".mdx"));
    });
  } catch (error) {
    console.error("[MDX] getAllServices Error:", error);
    return [];
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const contentPath = path.join(process.cwd(), "content", "services");
    const files = scanMdxFiles(contentPath);
    const file = files.find((f) => path.basename(f, ".mdx") === slug);
    
    if (!file) return null;
    
    const fileContents = fs.readFileSync(file, "utf8");
    const { data, content } = matter(fileContents);
    return { 
      ...mapToService(data as Record<string, unknown>, slug), 
      description: content 
    };
  } catch (error) {
    console.error(`[MDX] Error getting service ${slug}:`, error);
    return null;
  }
}

// =========================================================
// CASE STUDIES
// =========================================================

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  try {
    const contentPath = path.join(process.cwd(), "content", "case-studies");
    const files = scanMdxFiles(contentPath);
    
    const cases = files.map((file) => {
      const { data } = matter(fs.readFileSync(file, "utf8"));
      const slug = path.basename(file, ".mdx");
      const d = data as any;
      
      return {
        slug,
        title: d.title || "Untitled Case",
        category: d.category || "General",
        thumbnail: resolveImage(d.image || d.thumbnail, "case-studies"),
        excerpt: d.excerpt || d.description || "",
        date: d.date || "2026-01-01",
        priority: d.priority || 0,
      } as CaseStudy;
    });
    
    return cases.sort((a, b) => 
      new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime()
    );
  } catch (error) {
    console.error("[MDX] getAllCaseStudies Error:", error);
    return [];
  }
}

export async function getCaseStudyBySlug(slug: string) {
  try {
    const contentPath = path.join(process.cwd(), "content", "case-studies");
    const files = scanMdxFiles(contentPath);
    const file = files.find((f) => path.basename(f, ".mdx") === slug);
    
    if (!file) return null;
    
    const { data, content } = matter(fs.readFileSync(file, "utf8"));
    const d = data as any;
    
    return {
      slug,
      frontmatter: {
        title: d.title || "Classified",
        category: d.category || "Operation",
        thumbnail: resolveImage(d.image || d.thumbnail, "case-studies"),
        excerpt: d.excerpt || d.description || "",
        date: d.date || "2026-01-01",
        description: d.description || "",
      },
      content,
    };
  } catch (error) {
    console.error(`[MDX] Error getting case study ${slug}:`, error);
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
    const contentPath = path.join(process.cwd(), "content", "blog");
    const files = scanMdxFiles(contentPath);
    
    return files.map((file) => {
      const { data } = matter(fs.readFileSync(file, "utf8"));
      const d = data as any;
      return {
        ...d,
        slug: path.basename(file, ".mdx"),
        image: resolveImage(d.image || d.thumbnail, "blog"),
        date: d.date || new Date().toISOString(),
      } as BlogPostFrontmatter;
    }).sort((a, b) => 
      new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime()
    );
  } catch (error) {
    console.error("[MDX] getAllBlogPosts Error:", error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const contentPath = path.join(process.cwd(), "content", "blog");
    const files = scanMdxFiles(contentPath);
    const file = files.find((f) => path.basename(f, ".mdx") === slug);
    
    if (!file) return null;
    
    const { data, content } = matter(fs.readFileSync(file, "utf8"));
    const d = data as any;
    
    return { 
      ...d, 
      content, 
      slug, 
      image: resolveImage(d.image || d.thumbnail, "blog") 
    } as BlogPost;
  } catch (error) {
    console.error(`[MDX] Error getting blog post ${slug}:`, error);
    return null;
  }
}

export async function getAllPosts<T>(category: ContentCategory): Promise<T[]> {
  if (category === "blog") return (await getAllBlogPosts()) as unknown as T[];
  if (category === "services") return (await getAllServices()) as unknown as T[];
  if (category === "case-studies") return (await getAllCaseStudies()) as unknown as T[];
  return [];
}
