import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

/**
 * @TYPE_SYSTEM: Discriminated Unions for Industrial Grade Content
 */
type ContentCategory = "blog" | "case-studies" | "services";

interface BaseFrontmatter {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
  thumbnail?: string;
  imageUrl?: string;
}

interface BlogFrontmatter extends BaseFrontmatter {
  category: string;
}

interface CaseStudyFrontmatter extends BaseFrontmatter {
  category: string;
  client: string;
  outcome: string;
  excerpt?: string;
}

export interface ServiceFrontmatter extends BaseFrontmatter {
  id: string;
  category: string;
  tagline?: string;
  iconName?: string;
  shortDescription?: string;
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
  feeEstimate?: string;
  timeline?: string;
  protocol?: Array<{ title: string; description: string }>;
}

type PostFrontmatter =
  | BlogFrontmatter
  | CaseStudyFrontmatter
  | ServiceFrontmatter;

interface PostResult<T extends PostFrontmatter> {
  data: T;
  content: string;
  slug: string;
}

/**
 * ค้นหาไฟล์ .mdx แบบ Recursive
 */
function findFileRecursive(dir: string, slug: string): string | null {
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
  return null;
}

export async function getPostBySlug<T extends PostFrontmatter>(
  category: ContentCategory,
  slug: string,
): Promise<PostResult<T> | null> {
  const categoryPath = path.join(contentDir, category);
  if (!fs.existsSync(categoryPath)) return null;

  const fullPath = findFileRecursive(categoryPath, slug);
  if (!fullPath) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const postData = {
    ...data,
    slug,
    title: data.title || "Untitled",
    description: data.description || "",
    date: data.date || new Date().toISOString(),
    author: data.author || "Strategic Operative",
    image:
      data.image ||
      data.thumbnail ||
      data.imageUrl ||
      "https://biwruclmzuaemlbrnbvu.supabase.co/storage/v1/object/public/UNLINK-TH/images/blog/digital-ghost.webp",
  } as T;

  return { data: postData, content, slug };
}

export async function getAllPosts<T extends PostFrontmatter>(
  category: ContentCategory,
): Promise<T[]> {
  const categoryPath = path.join(contentDir, category);
  if (!fs.existsSync(categoryPath) || !fs.statSync(categoryPath).isDirectory())
    return [];

  const posts: T[] = [];

  /**
   * Recursive Scanner: ค้นหาไฟล์ .mdx ในทุกโฟลเดอร์ย่อย
   */
  function scanDir(dir: string) {
    const entries = fs.readdirSync(dir);
    for (const entry of entries) {
      const fullPath = path.join(dir, entry);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        scanDir(fullPath);
      } else if (entry.endsWith(".mdx")) {
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);
        const slug = entry.replace(".mdx", "");
        posts.push({
          ...data,
          slug,
          title: data.title || "Untitled",
          description: data.description || "",
          date: data.date || new Date().toISOString(),
          author: data.author || "Strategic Operative",
          image:
            data.image ||
            data.thumbnail ||
            data.imageUrl ||
            "https://biwruclmzuaemlbrnbvu.supabase.co/storage/v1/object/public/UNLINK-TH/images/blog/digital-ghost.webp",
        } as T);
      }
    }
  }

  scanDir(categoryPath);

  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}
