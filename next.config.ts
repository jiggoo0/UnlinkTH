import type { NextConfig } from "next"
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
  /* ปรับแต่งเพื่อให้รองรับการแสดงผลภาษาไทยและรูปภาพ */
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  // ตั้งค่าความปลอดภัยและการจัดการรูปภาพ (สำหรับรูปภาพ Before/After ในเคสตัวอย่าง)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lin.ee", // สำหรับดึงรูปภาพจาก Line
      },
      {
        protocol: "https",
        hostname: "**.supabase.co", // สำหรับดึงรูปภาพจาก Supabase Storage
      },
    ],
    formats: ["image/avif", "image/webp"], // บีบอัดรูปให้โหลดเร็วขึ้น
  },

  // ตั้งค่าการจัดการพลังประมวลผล (เหมาะสำหรับเว็บสาย Expert ที่เน้น Performance)
  experimental: {
    mdxRs: true, // ใช้ Rust-based compiler สำหรับ MDX เพื่อความเร็ว
  },
}

// เพิ่มการตั้งค่าสำหรับ MDX
const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
