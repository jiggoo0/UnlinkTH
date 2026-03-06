/** @format */

import { BlogPost, BlogPostFrontmatter } from "@/types";
import { getAllPosts, getPostBySlug } from "./mdx";

export async function getAllBlogPosts(): Promise<BlogPostFrontmatter[]> {
  const allData = await getAllPosts<BlogPostFrontmatter>("blog");

  return allData.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  const result = await getPostBySlug<BlogPostFrontmatter>("blog", slug);
  if (!result) return null;

  return {
    content: result.content,
    ...result.data,
  };
}
