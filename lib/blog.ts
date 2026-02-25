/** @format */

import { BlogPost, BlogPostFrontmatter } from "@/types"
import { getAllMDXData, readMDXFile } from "./mdx"

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const allData = getAllMDXData<BlogPostFrontmatter>("blog")

  const posts = allData.map((item) => ({
    slug: item.slug,
    content: item.content,
    ...item.frontmatter,
  }))

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const item = readMDXFile<BlogPostFrontmatter>("blog", slug)
  if (!item) return null

  return {
    slug: item.slug,
    content: item.content,
    ...item.frontmatter,
  }
}
