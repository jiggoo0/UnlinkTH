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
 * ดึงพาธ Content Root
 */
const getRootPath = () => path.join(process.cwd(), "content");

/**
 * ตัวช่วยจัดการ Path รูปภาพให้ถูกต้อง
 * ปรับปรุงให้รองรับโครงสร้างโฟลเดอร์จริงใน public/images/
 */
const resolveImage = (img: string | undefined, category: string): string => {
  if (!img) {
    return category === "services"
      ? "/images/services/default.webp"
      : "/images/blog/digital-ghost.webp";
  }
  if (img.startsWith("/") || img.startsWith("http")) return img;

  // ตรวจสอบว่ามีชื่อโฟลเดอร์หมวดหมู่อยู่ใน path หรือยัง
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

function mapToService(data: Record<string, unknown>, slug: string): Service {
  const d = data as unknown as ServiceFrontmatter;
  const desc = d.shortDescription || d.description || "";
  const imgPath = d.image || d.thumbnail || d.imageUrl || "";

  return {
    id: d.id || slug,
    slug: slug,
    title: d.title || "Untitled Service",
    shortDescription: desc,
    description: d.description || "",
    iconName: d.iconName || "ShieldCheck",
    image: getImageUrl(resolveImage(imgPath, "services")),
    category: d.category || "General",
    features: d.features || [],
    priceInfo: d.priceInfo || {
      startingAt: "0",
      unit: "ครั้ง",
      model: "Contact",
    },
    metadata: d.metadata || {
      defaultTitle: d.title || "",
      defaultDescription: desc,
      keywords: [],
    },
  };
}

export async function getAllServices(): Promise<Service[]> {
  try {
    const dir = path.join(getRootPath(), "services");
    const files = scanMdxFiles(dir);
    return files.map((file) => {
      const { data } = matter(fs.readFileSync(file, "utf8"));
      return mapToService(
        data as Record<string, unknown>,
        path.basename(file, ".mdx"),
      );
    });
  } catch (error) {
    console.error("getAllServices Error:", error);
    return [];
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const files = scanMdxFiles(path.join(getRootPath(), "services"));
    const file = files.find((f) => path.basename(f, ".mdx") === slug);
    if (!file) return null;
    const { data, content } = matter(fs.readFileSync(file, "utf8"));
    return {
      ...mapToService(data as Record<string, unknown>, slug),
      description: content,
    };
  } catch {
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
      const d = data as unknown as CaseStudy;
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
    return cases.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  } catch {
    return [];
  }
}

export async function getCaseStudyBySlug(slug: string) {
  try {
    const files = scanMdxFiles(path.join(getRootPath(), "case-studies"));
    const file = files.find((f) => path.basename(f, ".mdx") === slug);
    if (!file) return null;
    const { data, content } = matter(fs.readFileSync(file, "utf8"));
    const d = data as unknown as CaseStudy;
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
  } catch {
    return null;
  }
}

export async function getLatestCaseStudies(
  limit: number = 3,
): Promise<CaseStudy[]> {
  const all = await getAllCaseStudies();
  return all.slice(0, limit);
}

// =========================================================
// BLOG
// =========================================================

export async function getAllBlogPosts(): Promise<BlogPostFrontmatter[]> {
  try {
    const files = scanMdxFiles(path.join(getRootPath(), "blog"));
    return files
      .map((file) => {
        const { data } = matter(fs.readFileSync(file, "utf8"));
        const d = data as unknown as BlogPostFrontmatter;
        return {
          ...d,
          slug: path.basename(file, ".mdx"),
          image: resolveImage(d.image || d.thumbnail, "blog"),
          date: d.date || new Date().toISOString(),
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
  try {
    const files = scanMdxFiles(path.join(getRootPath(), "blog"));
    const file = files.find((f) => path.basename(f, ".mdx") === slug);
    if (!file) return null;
    const { data, content } = matter(fs.readFileSync(file, "utf8"));
    const d = data as unknown as BlogPost;
    return {
      ...d,
      content,
      slug,
      image: resolveImage(d.image || d.thumbnail, "blog"),
    } as BlogPost;
  } catch {
    return null;
  }
}

export async function getAllPosts<T>(category: ContentCategory): Promise<T[]> {
  if (category === "blog") return (await getAllBlogPosts()) as unknown as T[];
  if (category === "services")
    return (await getAllServices()) as unknown as T[];
  if (category === "case-studies")
    return (await getAllCaseStudies()) as unknown as T[];
  return [];
}
