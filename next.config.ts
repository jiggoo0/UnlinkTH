/** @format */
import type { NextConfig } from "next"
import createMDX from "@next/mdx"
import remarkGfm from "remark-gfm"
import remarkFrontmatter from "remark-frontmatter"

/**
 * REPUTATION ARCHITECT CONFIGURATION (2026)
 * Developer: นาย อลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์)
 * Strategy: Zero-Runtime Image Handling & MDX Turbo
 */
const nextConfig: NextConfig = {
  // 1. Static Export Protocol
  output: "export",
  trailingSlash: true, // ดีต่อ SEO และการทำ Folder Structure บน Hosting ทั่วไป
  distDir: "out",

  // 2. Image Optimization Fix (หัวใจสำคัญที่ทำให้ Error หาย)
  // ในโหมด export เราไม่สามารถใช้ Image Optimization API ของ Next.js ได้
  images: {
    unoptimized: true,
    // หมายเหตุ: formats และ remotePatterns จะถูกข้ามไปเมื่อใช้ unoptimized: true
    // แต่ใส่ไว้เพื่อรองรับการเปลี่ยนกลับมาใช้ Server Mode ในอนาคตได้
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "lin.ee" },
      { protocol: "https", hostname: "www.aemdevweb.com" },
      { protocol: "https", hostname: "www.unlink-th.com" },
    ],
  },

  // 3. Performance & Security Baseline
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  // 4. Routing & Extensions
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  // 5. Build Optimization
  experimental: {
    // ปรับเป็น true เพื่อใช้ Rust-based compiler สำหรับ MDX (เร็วกว่ามาก)
    mdxRs: true,
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "sonner",
      "@/components/ui",
    ],
  },

  // 6. Developer Metadata Identity
  env: {
    NEXT_PUBLIC_DEVELOPER: "นาย อลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์)",
    NEXT_PUBLIC_SITE_URL: "https://www.aemdevweb.com",
  },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter, remarkGfm],
    rehypePlugins: [], // สามารถเพิ่ม rehype-highlight สำหรับ Code Snippet คุณภาพสูงได้ที่นี่
  },
})

export default withMDX(nextConfig)
