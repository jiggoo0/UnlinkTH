/** @type {import('next').NextConfig} */
const nextConfig = {
  // บังคับให้ Next.js รวมโฟลเดอร์ content เข้าไปใน build output เพื่อให้ใช้งาน fs ได้บน Vercel
  outputFileTracingIncludes: {
    "/services": ["./content/services/**/*"],
    "/blog": ["./content/blog/**/*"],
    "/case-studies": ["./content/case-studies/**/*"],
    "/services/[slug]": ["./content/services/**/*"],
    "/blog/[slug]": ["./content/blog/**/*"],
    "/case-studies/[slug]": ["./content/case-studies/**/*"],
  },
  // ปรับปรุงประสิทธิภาพการ Import
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  // ตั้งค่ารูปภาพให้รองรับการรันบนเซิร์ฟเวอร์หลากหลาย
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qr-official.line.me",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
};

export default nextConfig;
