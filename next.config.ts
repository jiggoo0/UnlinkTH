import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* 1. การจัดการรูปภาพ (Image Optimization) */
  images: {
    formats: ['image/avif', 'image/webp'], // ใช้ฟอร์แมตสมัยใหม่เพื่อลดขนาดไฟล์ < 150KB
    deviceSizes: [640, 750, 828, 1080, 1200], // กำหนดขนาดรูปตามอุปกรณ์
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co', // รองรับรูปภาพ Case Study จาก Supabase Storage
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // รองรับรูปโปรไฟล์ Google (ถ้ามีระบบรีวิว)
      },
    ],
  },

  /* 2. ความปลอดภัย (Security Headers) */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY', // ป้องกันการถูกนำเว็บไปใส่ใน iframe (Clickjacking)
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', // ป้องกันการเดาประเภทไฟล์
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()', // ปิดการเข้าถึงฮาร์ดแวร์ที่ไม่จำเป็น
          },
        ],
      },
    ]
  },

  /* 3. ประสิทธิภาพและการตั้งค่า Build */
  experimental: {
    // ปรับปรุงการจัดการสแต็ก Server Actions
    serverActions: {
      bodySizeLimit: '2mb', // จำกัดขนาดการอัปโหลดไฟล์หลักฐาน (สลิป/รูปภาพแบล็กลิสต์)
    },
  },

  // ข้ามขั้นตอนการเช็คบางอย่างตอน Build เพื่อความรวดเร็ว (แต่ควรเช็คผ่าน CI/CD)
  typescript: {
    ignoreBuildErrors: false, // แนะนำให้เปิดไว้เป็น false เพื่อความเป๊ะของ Type
  },
  eslint: {
    ignoreDuringBuilds: true, // ช่วยให้ Deploy บน Vercel ได้เร็วขึ้น
  },

  /* 4. การจัดการ Redirects (ถ้ามี) */
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true, // ทำ SEO Redirect จากหน้า /home ไปที่ root
      },
    ]
  },

  // ปรับปรุงการทำงานของ Compiler
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // ลบ console.log ออกในโปรดักชัน
  },
}

export default nextConfig
