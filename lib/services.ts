/** @format */

import { Service } from "@/types";
import { getAllPosts, getPostBySlug, ServiceFrontmatter } from "./mdx";

/**
 * Helper to map frontmatter to Service type
 */
function mapFrontmatterToService(fm: ServiceFrontmatter): Service {
  return {
    id: fm.id || fm.slug,
    slug: fm.slug,
    title: fm.title,
    shortDescription: fm.shortDescription || fm.description,
    description: fm.description, // Initial description from frontmatter
    iconName: fm.iconName || "Activity",
    image:
      fm.image ||
      fm.imageUrl ||
      "https://biwruclmzuaemlbrnbvu.supabase.co/storage/v1/object/public/UNLINK-TH/images/services/default.webp",
    category: fm.category,
    features: fm.features || [],
    priceInfo: fm.priceInfo || {
      startingAt: "0",
      unit: "ครั้ง",
      model: "Contact for Pricing",
    },
    metadata: fm.metadata || {
      defaultTitle: fm.title,
      defaultDescription: fm.description,
      keywords: [],
    },
  };
}

/**
 * ดึงข้อมูล Protocol ทั้งหมด
 */
export async function getAllServices(): Promise<Service[]> {
  const posts = await getAllPosts<ServiceFrontmatter>("services");
  return posts.map(mapFrontmatterToService);
}

/**
 * ดึงข้อมูลบริการเชิงลึก
 */
export async function getServiceBySlug(slug: string) {
  const result = await getPostBySlug<ServiceFrontmatter>("services", slug);
  if (!result) return null;

  const { data: frontmatter, content } = result;
  const service = mapFrontmatterToService(frontmatter);

  return {
    ...service,
    description: content, // Override with full MDX content for the page
  };
}
