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

/**
 * @REBRANDED: UNLINK-GLOBAL Intelligence Engine
 * 🛡️ PRODUCTION ADAPTATION: ปรับปรุงการหาโฟลเดอร์ Content ให้เสถียรใน Vercel (Standalone)
 */

// หาตำแหน่ง Root ของโปรเจกต์ที่แท้จริง
const getProjectRoot = () => {
  const cwd = process.cwd();
  // บน Vercel Standalone, content จะอยู่ใน .next/standalone/ (ซึ่งก็คือ root ของ node server)
  // แต่บางครั้ง Next.js จะรันจาก .next/standalone/server.js
  if (fs.existsSync(path.join(cwd, "content"))) return cwd;
  if (fs.existsSync(path.join(cwd, ".next", "standalone", "content"))) return path.join(cwd, ".next", "standalone");
  return cwd;
};

const PROJECT_ROOT = getProjectRoot();
const CONTENT_PATH = path.join(PROJECT_ROOT, "content");

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

  const cleanPath = img.replace(/^images\//, "");

  if (category === "case-studies") {
    if (cleanPath.startsWith("cases/")) return `/images/${cleanPath}`;
    return `/images/cases/${cleanPath}`;
  }

  if (cleanPath.startsWith(category + "/")) return `/images/${cleanPath}`;
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
    
    // Debug Logging (จะปรากฏใน Vercel Runtime Logs)
    if (process.env.NODE_ENV === 'production') {
      console.log(`[MDX-SYSTEM] Scanning services in: ${servicesDir}`);
    }

    const files = getFilesRecursive(servicesDir);

    const services = files.map((filePath) => {
      try {
        const source = fs.readFileSync(filePath, "utf8");
        const { data } = matter(source);
        const slug = path.basename(filePath, ".mdx");
        const fm = data as unknown as ServiceFrontmatter;

        return {
          id: String(fm.id || slug),
          slug: slug,
          title: String(fm.title || "Untitled Service"),
          shortDescription: String(fm.shortDescription || fm.description || ""),
          description: String(fm.description || ""),
          iconName: String(fm.iconName || "ShieldCheck"),
          image: resolveImagePath(fm.image || fm.imageUrl || fm.thumbnail, "services"),
          category: String(fm.category || "General").trim(),
          features: Array.isArray(fm.features) ? fm.features : [],
          priceInfo: {
            startingAt: String(fm.priceInfo?.startingAt || "0"),
            unit: String(fm.priceInfo?.unit || "โปรเจกต์"),
            model: String(fm.priceInfo?.model || "Operational Standard"),
          },
          metadata: {
            defaultTitle: String(fm.metadata?.defaultTitle || fm.title || ""),
            defaultDescription: String(fm.metadata?.defaultDescription || fm.shortDescription || ""),
            keywords: Array.isArray(fm.metadata?.keywords) ? fm.metadata.keywords : [],
          },
        } as Service;
      } catch (err) {
        console.error(`[MDX] Failed to parse service file: ${filePath}`, err);
        return null;
      }
    });

    return services.filter((s): s is Service => s !== null);
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
