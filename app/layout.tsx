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
 * แก้ไขปัญหา TS2322: Keywords readonly โดยการใช้ Spread Operator [...]
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  // ✅ แก้ไข: ใช้ Spread operator เพื่อแปลง Readonly Array เป็น Mutable Array
  // เพื่อให้ตรงกับ Type definition ของ Metadata ใน Next.js 15
  keywords: siteConfig.keywords
    ? [...siteConfig.keywords]
    : [
        "ลบชื่อแบล็คลิสต์",
        "แก้ไขประวัติออนไลน์",
        "ลบข้อมูลส่วนตัว",
        "ทำ SEO ดันชื่อ",
        "จัดการชื่อเสียออนไลน์",
      ],
  authors: [{ name: "Unlink-TH Team" }],
  creator: "Unlink-TH",
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
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

            {/* ✅ แก้ไข: ลบ Prop 'url' ออกเนื่องจาก LineButton ภายในใช้ siteConfig โดยตรงอยู่แล้ว */}
            <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-4">
              <LineButton />
            </div>

            <Toaster position="top-center" richColors closeButton />
          </div>
        </AppProvider>
      </body>
    </html>
  )
}
