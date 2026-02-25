/** @format */

import fs from "fs"
import path from "path"
import matter from "gray-matter"

/**
 * UNLINK-TH | Central MDX Processing Engine
 * -------------------------------------------------------------------------
 * หัวใจหลักในการจัดการข้อมูลเนื้อหาแบบ Static
 * รองรับการทำ Audit, Validation และ Parsing อย่างเป็นระบบ
 */

interface MDXData<T> {
  slug: string
  frontmatter: T
  content: string
}

const CONTENT_ROOT = path.join(process.cwd(), "content")

function getMDXFiles(dir: string) {
  const fullDir = path.join(CONTENT_ROOT, dir)
  if (!fs.existsSync(fullDir)) return []
  return fs.readdirSync(fullDir).filter((file) => file.endsWith(".mdx"))
}

export function readMDXFile<T>(dir: string, slug: string): MDXData<T> | null {
  try {
    const fullPath = path.join(CONTENT_ROOT, dir, `${slug}.mdx`)
    if (!fs.existsSync(fullPath)) return null

    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      frontmatter: data as T,
      content,
    }
  } catch (error) {
    console.error(
      `Audit Error: Failed to read MDX file [${dir}/${slug}]`,
      error
    )
    return null
  }
}

export function getAllMDXData<T>(dir: string): MDXData<T>[] {
  const files = getMDXFiles(dir)
  return files
    .map((file) => {
      const slug = file.replace(".mdx", "")
      return readMDXFile<T>(dir, slug)
    })
    .filter((data): data is MDXData<T> => data !== null)
}
