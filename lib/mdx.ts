import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Service, CaseStudy, BlogPost, BlogPostFrontmatter } from "@/types";
import { getImageUrl } from "./utils";

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
  // กรณีระบุมาแค่ชื่อไฟล์ในโฟลเดอร์หมวดหมู่
  if (!img.includes("/")) return `/images/${category}/${img}`;
  // กรณีระบุหมวดหมู่มาด้วยแต่ไม่มี /images/
  return `/images/${img}`;
};

/**
 * ค้นหาไฟล์ .mdx แบบ Recursive (ใช้ Sync เพื่อเสถียรภาพตอน Build)
 */
function getAllMdxFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
  if (!fs.existsSync(dirPath)) return [];
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllMdxFiles(filePath, arrayOfFiles);
    } else if (file.endsWith(".mdx")) {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

// =========================================================
// SERVICES
// =========================================================

function mapToService(data: any, slug: string): Service {
  // ดึงรายละเอียดจากฟิลด์ที่มีความเป็นไปได้สูงสุด
  const desc = data.shortDescription || data.description || "";
  const imgPath = data.image || data.thumbnail || data.imageUrl || "";

  return {
    id: data.id || slug,
    slug: slug,
    title: data.title || "Untitled Service",
    shortDescription: desc,
    description: data.description || "",
    iconName: data.iconName || "ShieldCheck",
    image: getImageUrl(resolveImage(imgPath, "services")),
    category: data.category || "General",
    features: data.features || [],
    priceInfo: data.priceInfo || { startingAt: "0", unit: "ครั้ง", model: "Contact" },
    metadata: data.metadata || { defaultTitle: data.title, defaultDescription: desc, keywords: [] },
  };
}

export async function getAllServices(): Promise<Service[]> {
  try {
    const servicesPath = path.join(process.cwd(), "content", "services");
    const filePaths = getAllMdxFiles(servicesPath);
    
    return filePaths.map((filePath) => {
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return mapToService(data, path.basename(filePath, ".mdx"));
    });
  } catch (error) {
    console.error("[MDX] Error in getAllServices:", error);
    return [];
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const servicesPath = path.join(process.cwd(), "content", "services");
    const allFiles = getAllMdxFiles(servicesPath);
    const filePath = allFiles.find((f) => path.basename(f, ".mdx") === slug);
    
    if (!filePath) return null;

    const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
    const service = mapToService(data, slug);
    return { ...service, description: content };
  } catch (error) {
    return null;
  }
}

// =========================================================
// CASE STUDIES
// =========================================================

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  try {
    const casesPath = path.join(process.cwd(), "content", "case-studies");
    const filePaths = getAllMdxFiles(casesPath);
    
    return filePaths.map((filePath) => {
      const { data } = matter(fs.readFileSync(filePath, "utf8"));
      const slug = path.basename(filePath, ".mdx");
      return {
        slug,
        title: data.title || "Untitled Case",
        category: data.category || "General",
        thumbnail: resolveImage(data.image || data.thumbnail, "cases"),
        excerpt: data.excerpt || data.description || "",
        date: data.date || "2026-01-01",
        priority: data.priority || 0,
      } as CaseStudy;
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    return [];
  }
}

// =========================================================
// BLOG
// =========================================================

export async function getAllBlogPosts(): Promise<BlogPostFrontmatter[]> {
  try {
    const blogPath = path.join(process.cwd(), "content", "blog");
    const filePaths = getAllMdxFiles(blogPath);
    
    return filePaths.map((filePath) => {
      const { data } = matter(fs.readFileSync(filePath, "utf8"));
      return {
        ...data,
        slug: path.basename(filePath, ".mdx"),
        image: resolveImage(data.image || data.thumbnail, "blog"),
        date: data.date || new Date().toISOString(),
      } as BlogPostFrontmatter;
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const blogPath = path.join(process.cwd(), "content", "blog");
    const allFiles = getAllMdxFiles(blogPath);
    const filePath = allFiles.find((f) => path.basename(f, ".mdx") === slug);
    
    if (!filePath) return null;

    const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
    return {
      content,
      ...data,
      slug,
      image: resolveImage(data.image || data.thumbnail, "blog"),
    } as BlogPost;
  } catch (error) {
    return null;
  }
}

// Helpers
export const getAllPosts = getAllBlogPosts;
export const getLatestCaseStudies = async (limit: number) => {
  const all = await getAllCaseStudies();
  return all.slice(0, limit);
};
