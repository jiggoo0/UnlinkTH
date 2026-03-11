import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // บังคับให้ Next.js รวมโฟลเดอร์ content เข้าไปใน build output ทั้งหมด
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: path.join(__dirname),
    outputFileTracingIncludes: {
      '/**/*': ['./content/**/*'],
    },
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "qr-official.line.me" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
      };
    }
    return config;
  },
};

export default nextConfig;
