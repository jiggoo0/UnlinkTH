/** @format */
import withBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🛡️ ระบบจะเลือก output: 'standalone' เมื่ออยู่บน Vercel อัตโนมัติ (ข้ามการตั้งค่าซับซ้อน)

  images: {
    // 🚀 รองรับการเรียกรูปภาพจาก Vercel Blob อย่างสมบูรณ์แบบ
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.public.blob.vercel-storage.com",
      },
    ],
  },

  experimental: {
    // 🚀 เพิ่มประสิทธิภาพการ Import (แนะนำสำหรับ Next.js 16+)
    optimizePackageImports: [
      "@/components/shared",
      "@/components/sections",
      "@/constants",
    ],
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
};

const analyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default analyzer(nextConfig);
