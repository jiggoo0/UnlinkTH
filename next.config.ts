/**
 * UNLINK-TH | Core Configuration Matrix
 * -------------------------------------------------------------------------
 * จัดการการตั้งค่า Runtime, Security, และ Content Engine (MDX)
 * ออกแบบเพื่อรองรับ Performance สูงสุดตามมาตรฐาน Specialist Lab
 */

import type { NextConfig } from "next"
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
  /* [1] Core Framework Settings */
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  /* [2] Tactical Security Headers - ป้องกันการโจมตีทางไซเบอร์และรักษาความเป็นส่วนตัว */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Frame-Options", value: "SAMEORIGIN" }, // ป้องกัน Clickjacking
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;",
          },
        ],
      },
    ]
  },

  /* [3] Image Intelligence & Optimization */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lin.ee", // รองรับภาพจาก Line Official
      },
      {
        protocol: "https",
        hostname: "**.supabase.co", // รองรับภาพจาก Supabase Storage
      },
    ],
    formats: ["image/avif", "image/webp"], // บีบอัดภาพเพื่อรักษาความเร็ว Mobile LCP
  },

  /* [4] High-Performance Content Engine */
  experimental: {
    mdxRs: true, // ใช้ Rust-based compiler เพื่อประมวลผล MDX อย่างรวดเร็ว
  },
}

// [5] MDX Integration Logic
const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
