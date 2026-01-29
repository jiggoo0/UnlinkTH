/** @format */
import type { NextConfig } from "next"
import createMDX from "@next/mdx"
import remarkGfm from "remark-gfm"
import remarkFrontmatter from "remark-frontmatter"

const nextConfig: NextConfig = {
  // เปิดโหมดเข้มงวด ป้องกันปัญหา hydration error จากการใช้ธีม
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  // สำคัญ: ต้องรวม mdx เข้าไปในระบบ route
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  images: {
    formats: ["image/avif", "image/webp"],
    // บังคับ cache รูปภาพในโฟลเดอร์ public/images ให้มีประสิทธิภาพ
    minimumCacheTTL: 86400,
    remotePatterns: [
      { protocol: "https", hostname: "lin.ee" },
      { protocol: "https", hostname: "www.unlink-th.com" },
    ],
  },

  experimental: {
    // ใช้ระบบช่วย Build งาน MDX จำนวนมากในโฟลเดอร์ content
    mdxRs: false,
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "sonner",
      "@radix-ui/react-icons",
      "@/components/ui",
    ],
  },
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter, remarkGfm],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
