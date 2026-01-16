import type { Metadata, Viewport } from "next"
import { Kanit } from "next/font/google"
import "./globals.css"

import { siteConfig } from "@/constants/site-config"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import LineButton from "@/components/shared/LineButton"
import { Toaster } from "@/components/ui/sonner"
import AppProvider from "@/providers/AppProvider"

/**
 * 1. ฟอนต์ Kanit สำหรับภาษาไทยและภาษาอังกฤษ
 */
const kanit = Kanit({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-kanit",
  display: "swap",
})

/**
 * 2. Viewport Configuration (Next.js 15 Standard)
 */
export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

/**
 * 3. SEO Metadata
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.fullName, // ✅ ใช้ชื่อเต็มเพื่อ SEO ที่ดีขึ้นในหน้าแรก
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  // ✅ แก้ไขปัญหา Readonly Array
  keywords: [...siteConfig.keywords],
  authors: [{ name: "Unlink Thailand Team" }],
  creator: "Unlink Thailand",
  publisher: "Unlink Thailand",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: siteConfig.url,
    title: siteConfig.fullName,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.fullName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.fullName,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${kanit.variable} bg-background min-h-screen font-sans antialiased selection:bg-blue-100 selection:text-blue-900`}
      >
        <AppProvider>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-1">{children}</main>

            <Footer />

            {/* Floating Action Button (LINE) */}
            <div className="fixed right-6 bottom-6 z-50">
              <LineButton />
            </div>

            <Toaster position="top-center" richColors closeButton />
          </div>
        </AppProvider>
      </body>
    </html>
  )
}
