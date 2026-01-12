/** @format */

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* 1. การจัดการรูปภาพ (Image Optimization) */
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [375, 640, 750, 828, 1080, 1200], // เพิ่ม 375px สำหรับ Mobile LCP ที่เล็กลง
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
    minimumCacheTTL: 60, // เพิ่มการ Cache รูปภาพเพื่อลดภาระ Server
  },

  /* 2. ความปลอดภัย (Security Headers) */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin', // ปรับให้เข้มงวดขึ้นเพื่อรักษาความลับลูกค้า
          },
          {
            key: 'Permissions-Policy',
            value:
              'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'Content-Security-Policy', // ป้องกัน XSS เบื้องต้น
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https:; font-src 'self' data:; connect-src 'self' https://*.supabase.co;",
          },
        ],
      },
    ]
  },

  /* 3. ประสิทธิภาพและการตั้งค่า Build */
  experimental: {
    // ปรับปรุงการจัดการ Bundle ขนาดเล็ก
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      '@radix-ui/react-icons',
      'clsx',
      'tailwind-merge',
    ],
    serverActions: {
      bodySizeLimit: '4mb', // ขยับเป็น 4mb สำหรับรูปภาพหลักฐานความละเอียดสูง
      allowedOrigins: ['unlinkth.com', '*.unlinkth.com'], // เพิ่มความปลอดภัยให้ Server Actions
    },
  },

  // มาตรฐานความปลอดภัยของ Code
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false, // แนะนำให้เป็น false เพื่อรักษามาตรฐาน Code Quality ของ Unlinkth
  },

  /* 4. การจัดการ Redirects */
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },

  /* 5. Compiler & Minification */
  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? {
            exclude: ['error', 'warn'], // เก็บ error/warn ไว้สำหรับ Debugging ใน Production
          }
        : false,
  },

  // เปิดใช้การบีบอัดไฟล์สูงสุด
  compress: true,

  // ปิดการแสดงผล Powered By Next.js เพื่อความปลอดภัย (Obscurity)
  poweredByHeader: false,

  // บังคับใช้ React Strict Mode เพื่อความเสถียรของ State
  reactStrictMode: true,
}

export default nextConfig
