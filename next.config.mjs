/** @format */
import withBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
/* global process */
const isTermux = process.env.SHELL?.includes("com.termux") || process.env.TERMUX === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🛡️ ปรับโหมด Standalone อัตโนมัติ: 'standalone' สำหรับ Production (Vercel)
  // แต่เป็น undefined สำหรับ Local Termux เพื่อเลี่ยงปัญหา Path Mapping
  output: isTermux ? undefined : "standalone",

  typescript: {
    // 🛡️ เข้มงวดใน Production แต่ยืดหยุ่นใน Local Termux เพื่อความเร็ว
    ignoreBuildErrors: isTermux,
  },

  images: {
    // 🚀 เปิดใช้ Image Optimization ใน Production เพื่อคะแนน LCP สูงสุด
    // แต่ปิดใน Termux เนื่องจากข้อจำกัดของ Library ประมวลผลรูปภาพ (เช่น sharp)
    unoptimized: isTermux,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "biwruclmzuaemlbrnbvu.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },

  // 🚀 Performance Tuning สำหรับ Next.js 16 + WASM
  experimental: {
    // ช่วยให้การ Import จาก @/components และ @/constants มีประสิทธิภาพสูงสุด
    optimizePackageImports: [
      "@/components/shared",
      "@/components/sections",
      "@/constants",
    ],
  },


  // 🛠️ Webpack Configuration (Fallback สำหรับ Node.js Modules)
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
