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

  // 1. ตรวจสอบใน CWD โดยตรง
  if (fs.existsSync(path.join(cwd, "content"))) return cwd;

  // 2. ตรวจสอบในโครงสร้าง Standalone ของ Vercel
  const standalonePath = path.join(cwd, ".next", "standalone");
  if (fs.existsSync(path.join(standalonePath, "content")))
    return standalonePath;

  // 3. ตรวจสอบย้อนกลับจาก __dirname (สำหรับบาง Edge Cases)
  const currentDir = path.resolve(__dirname);
  const rootFromDir = currentDir.split(".next")[0];
  if (fs.existsSync(path.join(rootFromDir, "content"))) return rootFromDir;

  return cwd;
};

// ฟังก์ชันช่วยหา Content Path ที่เสถียรที่สุด (Compute on call)
function getContentPath(): string {
  const root = getProjectRoot();
  const contentPath = path.join(root, "content");

  if (process.env.NODE_ENV === "production" && !fs.existsSync(contentPath)) {
    console.error(
      `[MDX-SYSTEM] CRITICAL: Content path not found at ${contentPath}`,
    );
  }

  return contentPath;
}

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
  if (!fs.existsSync(dir)) {
    if (process.env.NODE_ENV === "production") {
      console.warn(`[MDX-SYSTEM] Directory not found: ${dir}`);
    }
    return [];
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = entries.map((entry) => {
    const res = path.join(dir, entry.name);
    return entry.isDirectory() ? getFilesRecursive(res) : res;
  });

  const filteredFiles = Array.prototype
    .concat(...files)
    .filter((f) => f.endsWith(".mdx"));

  return filteredFiles;
}

// =========================================================
// SERVICES SYSTEM (CORE)
// =========================================================

export async function getAllServices(): Promise<Service[]> {
  try {
    const CONTENT_PATH = getContentPath();
    const servicesDir = path.join(CONTENT_PATH, "services");

    if (process.env.NODE_ENV === "production") {
      console.log(`[MDX-SYSTEM] Scanning services in: ${servicesDir}`);
    }

    const files = getFilesRecursive(servicesDir);

    const services = files.map((filePath) => {
      try {
        const source = fs.readFileSync(filePath, "utf8");
        const { data } = matter(source);
        const slug = path.basename(filePath, ".mdx");
        const fm = data as unknown as ServiceFrontmatter;

        // Extract first image from content if frontmatter image is missing
        const firstImageMatch =
          source.match(/<Image[^>]+src=["']([^"']+)["']/i) ||
          source.match(/!\[.*?\]\((.*?)\)/);
        const contentImage = firstImageMatch ? firstImageMatch[1] : undefined;

        return {
          id: String(fm.id || slug),
          slug: slug,
          title: String(fm.title || "Untitled Service"),
          shortDescription: String(fm.shortDescription || fm.description || ""),
          description: String(fm.description || ""),
          iconName: String(fm.iconName || "ShieldCheck"),
          image: resolveImagePath(
            fm.image || fm.imageUrl || fm.thumbnail || contentImage,
            "services",
          ),
          category: String(fm.category || "General").trim(),
          features: Array.isArray(fm.features) ? fm.features : [],
          priceInfo: {
            startingAt: String(fm.priceInfo?.startingAt || "0"),
            unit: String(fm.priceInfo?.unit || "โปรเจกต์"),
            model: String(fm.priceInfo?.model || "Operational Standard"),
          },
          metadata: {
            defaultTitle: String(fm.metadata?.defaultTitle || fm.title || ""),
            defaultDescription: String(
              fm.metadata?.defaultDescription || fm.shortDescription || "",
            ),
            keywords: Array.isArray(fm.metadata?.keywords)
              ? fm.metadata.keywords
              : [],
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

    const CONTENT_PATH = getContentPath();
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
    const CONTENT_PATH = getContentPath();
    const dir = path.join(CONTENT_PATH, "case-studies");
    const files = getFilesRecursive(dir);

    const studies = files.map((filePath) => {
      try {
        const source = fs.readFileSync(filePath, "utf8");
        const { data } = matter(source);
        const slug = path.basename(filePath, ".mdx");
        const fm = data as Record<string, unknown>;
        const priceInfo = fm["priceInfo"] as
          | Record<string, unknown>
          | undefined;
        const metadata = fm["metadata"] as Record<string, unknown> | undefined;

        // Extract first image from content
        const firstImageMatch =
          source.match(/<Image[^>]+src=["']([^"']+)["']/i) ||
          source.match(/!\[.*?\]\((.*?)\)/);
        const contentImage = firstImageMatch ? firstImageMatch[1] : undefined;

        // 🛡️ EXPLICIT MAPPING (No Spread Overwrites)
        return {
          id: String(fm["id"] || slug),
          slug: slug,
          title: String(fm["title"] || "Classified Operation"),
          category: String(fm["category"] || "Field Record"),
          shortDescription: String(
            fm["shortDescription"] || fm["excerpt"] || fm["description"] || "",
          ),
          excerpt: String(fm["excerpt"] || fm["description"] || ""),
          image: resolveImagePath(
            (fm["image"] as string | undefined) || contentImage,
            "case-studies",
          ),
          thumbnail: resolveImagePath(
            (fm["image"] as string | undefined) || contentImage,
            "case-studies",
          ),
          date: String(fm["date"] || "2026-03-14"),
          priority: fm["priority"] ? 1 : 0,
          client: String(fm["client"] || "VIP"),
          outcome: String(fm["outcome"] || "CLEANSED"),
          iconName: String(fm["iconName"] || "Shield"),
          features: Array.isArray(fm["features"])
            ? (fm["features"] as string[])
            : [],
          legalReference: String(fm["legalReference"] || ""),
          platform: String(fm["platform"] || ""),
          verificationSteps: Array.isArray(fm["verificationSteps"])
            ? (fm["verificationSteps"] as string[])
            : [],
          auditLog: Array.isArray(fm["auditLog"])
            ? (fm["auditLog"] as Array<{ date: string; action: string }>)
            : [],
          priceInfo: {
            startingAt: String(priceInfo?.["startingAt"] || "0"),
            unit: String(priceInfo?.["unit"] || "Project"),
            model: String(priceInfo?.["model"] || "Success-Based"),
          },
          metadata: {
            defaultTitle: String(
              metadata?.["defaultTitle"] || fm["title"] || "",
            ),
            defaultDescription: String(
              metadata?.["defaultDescription"] || fm["description"] || "",
            ),
            keywords: Array.isArray(metadata?.["keywords"])
              ? (metadata["keywords"] as string[])
              : [],
          },
        } as CaseStudy;
      } catch {
        return null;
      }
    });

    return studies
      .filter((s): s is CaseStudy => s !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch {
    return [];
  }
}

export async function getAllBlogPosts(): Promise<BlogPostFrontmatter[]> {
  try {
    const CONTENT_PATH = getContentPath();
    const dir = path.join(CONTENT_PATH, "blog");
    const files = getFilesRecursive(dir);

    const posts = files.map((filePath) => {
      try {
        const source = fs.readFileSync(filePath, "utf8");
        const { data } = matter(source);
        const slug = path.basename(filePath, ".mdx");
        const fm = data as Record<string, unknown>;
        const priceInfo = fm["priceInfo"] as
          | Record<string, unknown>
          | undefined;
        const metadata = fm["metadata"] as Record<string, unknown> | undefined;

        // Extract first image from content
        const firstImageMatch =
          source.match(/<Image[^>]+src=["']([^"']+)["']/i) ||
          source.match(/!\[.*?\]\((.*?)\)/);
        const contentImage = firstImageMatch ? firstImageMatch[1] : undefined;

        // 🛡️ EXPLICIT MAPPING (No Spread Overwrites)
        return {
          id: String(fm["id"] || slug),
          slug: slug,
          title: String(fm["title"] || "Strategic Intelligence"),
          category: String(fm["category"] || "Protocol"),
          shortDescription: String(
            fm["shortDescription"] || fm["description"] || "",
          ),
          description: String(fm["description"] || ""),
          image: resolveImagePath(
            (fm["image"] as string | undefined) || contentImage,
            "blog",
          ),
          date: String(fm["date"] || "2026-03-14"),
          author: String(fm["author"] || "UNLINK-TH"),
          iconName: String(fm["iconName"] || "BookOpen"),
          features: Array.isArray(fm["features"])
            ? (fm["features"] as string[])
            : [],
          priceInfo: {
            startingAt: String(priceInfo?.["startingAt"] || "0"),
            unit: String(priceInfo?.["unit"] || "Insight"),
            model: String(priceInfo?.["model"] || "Standard"),
          },
          metadata: {
            defaultTitle: String(
              metadata?.["defaultTitle"] || fm["title"] || "",
            ),
            defaultDescription: String(
              metadata?.["defaultDescription"] || fm["description"] || "",
            ),
            keywords: Array.isArray(metadata?.["keywords"])
              ? (metadata["keywords"] as string[])
              : [],
          },
        } as BlogPostFrontmatter;
      } catch {
        return null;
      }
    });

    return posts
      .filter((p): p is BlogPostFrontmatter => p !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch {
    return [];
  }
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  const CONTENT_PATH = getContentPath();
  const dir = path.join(CONTENT_PATH, "blog");
  const files = getFilesRecursive(dir);
  const filePath = files.find((f) => path.basename(f, ".mdx") === slug);

  if (!filePath) return null;

  const { data: rawData, content } = matter(fs.readFileSync(filePath, "utf8"));
  const data = rawData as Record<string, unknown>;
  return {
    ...(data as unknown as BlogPostFrontmatter),
    content,
    slug,
    image: resolveImagePath(
      (data["image"] || data["thumbnail"]) as string | undefined,
      "blog",
    ),
  } as BlogPost;
}

export async function getCaseStudyBySlug(
  slug: string,
): Promise<CaseStudy | null> {
  const CONTENT_PATH = getContentPath();
  const dir = path.join(CONTENT_PATH, "case-studies");
  const files = getFilesRecursive(dir);
  const filePath = files.find((f) => path.basename(f, ".mdx") === slug);

  if (!filePath) return null;

  const { data: rawData, content } = matter(fs.readFileSync(filePath, "utf8"));
  const data = rawData as Record<string, unknown>;
  return {
    ...(data as unknown as CaseStudy),
    slug,
    content, // สำหรับ MDX Body
    image: resolveImagePath(
      (data["image"] || data["thumbnail"]) as string | undefined,
      "case-studies",
    ),
  } as CaseStudy;
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
