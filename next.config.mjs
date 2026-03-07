/** @format */
import withBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
/* global process */
const nextConfig = {
  // 🛡️ ปิด standalone เนื่องจากสร้างปัญหา Path Mapping ในระบบไฟล์ Android/Termux
  // ทำให้ Next.js ค้นหาโมดูลในระดับ Runtime ได้แม่นยำขึ้น
  output: undefined,
  // ... (rest of the file)

  typescript: {
    // ข้ามการตรวจประเภทเพื่อความเร็วในการ Build บนทรัพยากรที่จำกัด
    ignoreBuildErrors: true,
  },

  images: {
    // จำเป็นสำหรับ Termux เนื่องจากไม่มี Library สำหรับประมวลผลรูปภาพ (เช่น sharp) ที่สมบูรณ์
    unoptimized: true,
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
