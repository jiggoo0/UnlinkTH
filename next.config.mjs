/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🚀 NEXT.JS 16+ ELITE CONFIGURATION
  reactStrictMode: true,

  // 🛡️ SECURITY HEADERS PROTOCOL
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  // 🖼️ IMAGE OPTIMIZATION (SHARP READY)
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // 📦 BUNDLE OPTIMIZATION
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "clsx",
      "tailwind-merge",
    ],
    // 💎 React 19 / Next 16 เฉพาะทาง
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
};

export default nextConfig;
