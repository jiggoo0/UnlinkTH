import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // หากต้องการข้ามการเช็ค ESLint ตอน build (ไม่แนะนำแต่ทำได้ถ้าจะรีบเอาขึ้น)
  // eslint: { ignoreDuringBuilds: true }, 
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
