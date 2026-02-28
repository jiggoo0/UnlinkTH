/**
 * [SYSTEM CORE]: UNLINK_HYBRID_ENGINE v18.5.0 (PRODUCTION_HARDENED)
 * [STRATEGY]: Environment-Aware Logic | Full SEO Redirects | Security Hardening
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import nextMDX from "@next/mdx"
import bundleAnalyzer from "@next/bundle-analyzer"
import type { NextConfig } from "next"
import remarkFrontmatter from "remark-frontmatter"
import remarkGfm from "remark-gfm"

// [ENVIRONMENT_SENSING]: ตรวจสอบสภาวะแวดล้อมเพื่อเลือก Engine ที่เหมาะสม
const isVercel = process.env.VERCEL === "1"
const isDev = process.env.NODE_ENV === "development"

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter],
    rehypePlugins: [],
  },
})

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})

const nextConfig: NextConfig = {
  // --- 1. CORE ARCHITECTURE ---
  cacheComponents: true,
  reactStrictMode: true,
  compress: true,
  reactCompiler: true, // [REACT_19]: Enable compiler for zero-memo performance
  poweredByHeader: false,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],

  // --- 2. SECURITY & ANALYTICS ---
  compiler: {
    removeConsole: !isDev ? { exclude: ["error", "warn"] } : false,
  },

  productionBrowserSourceMaps: false,

  /**
   * 3. [SEO_REDIRECTS_ENGINE]: กู้คืนระบบนำทางและ Canonical Links ทั้งหมด
   */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "unlink-th.com" }],
        destination: "https://www.unlink-th.com/:path*",
        permanent: true,
      },
    ]
  },

  /**
   * 4. [SECURITY_AND_CACHING]: กู้คืน Header ความปลอดภัยและกลยุทธ์ Cache
   */
  async headers() {
    const securityHeaders = [
      { key: "X-DNS-Prefetch-Control", value: "on" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      {
        key: "Content-Security-Policy",
        value:
          "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' *.vercel-scripts.com; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data:; font-src 'self'; connect-src 'self'; media-src 'self'; object-src 'none'; frame-ancestors 'none';",
      },
    ]

    if (process.env.VERCEL_ENV !== "production") {
      securityHeaders.push({ key: "X-Robots-Tag", value: "noindex, nofollow" })
    }

    return [
      { source: "/:path*", headers: securityHeaders },
      {
        source: "/(about|services|areas|blog|case-studies|privacy|terms)",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=0, s-maxage=31536000, stale-while-revalidate=60",
          },
        ],
      },
      {
        source: "/(images|fonts)/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ]
  },

  /**
   * 5. [ENVIRONMENT_ADAPTER]: ส่วนที่ปรับแต่งตามสภาวะแวดล้อม
   */
  experimental: {
    scrollRestoration: true,
    workerThreads: false,
    cpus: isVercel ? undefined : 1,
    mdxRs: isVercel,
    optimizePackageImports: [
      "lucide-react",
      "@radix-ui/react-slot",
      "tailwindcss-animate",
      "date-fns",
      "clsx",
      "tailwind-merge",
      "sonner",
    ],
  },

  // --- 6. IMAGE INFRASTRUCTURE ---
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { protocol: "https", hostname: "www.unlink-th.com" },
      { protocol: "https", hostname: "www.aemdevweb.com" },
      { protocol: "https", hostname: "lin.ee" },
    ],
  },

  /**
   * 7. [WEBPACK_INFRASTRUCTURE]: ปรับจูนระบบประมวลผล (Local Fix + Cloud Opt)
   */
  webpack: (config, { dev, isServer }) => {
    // [LOCAL_TERMUX_FIX]: แก้ไขปัญหา Watcher บน Android Filesystem
    if (!isVercel && dev) {
      config.cache = false
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: ["**/node_modules/**", "**/.next/**", "**/.git/**"],
      }
    }

    if (isVercel && isServer) {
      config.optimization = { ...config.optimization, minimize: true }
    }

    return config
  },
}

export default withBundleAnalyzer(withMDX(nextConfig))
