import type { Metadata, Viewport } from "next"
import { Inter, Noto_Sans_Thai, JetBrains_Mono } from "next/font/google"
import { siteConfig } from "@/constants/site-config"
import JsonLd from "@/components/seo/JsonLd"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { cn } from "@/lib/utils"
import "./globals.css"

/**
 *
 * * Font Configuration:
 * แยก Sans (English), Noto (Thai), และ Mono เพื่อความคมชัดระดับ Clinical
 * สอดคล้องกับภาพลักษณ์ผู้เชี่ยวชาญเฉพาะทาง
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const notoThai = Noto_Sans_Thai({
  subsets: ["thai"],
  variable: "--font-thai",
  display: "swap",
  weight: ["300", "400", "500", "700"],
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const viewport: Viewport = {
  themeColor: "#05070a", // Obsidian Black จาก DNA แบรนด์
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.defaultDescription,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: "UNLINK Digital Fixers", url: siteConfig.url }],
  creator: "UNLINK",
  publisher: "UNLINK",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: siteConfig.url,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "UNLINK Digital Reputation & Data Privacy Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  /**
   * Organization Schema: ปรับเป็น ProfessionalService
   * เพื่อสร้าง Trust ในฐานะผู้เชี่ยวชาญเฉพาะทาง (Specialist Fixer)
   */
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/Logo.jpg`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    serviceType: [
      "Digital Reputation Management",
      "Data Privacy Solutions",
      "Content Suppression",
      "De-indexing Service",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "TH",
    },
    knowsAbout: [
      "PDPA",
      "SEO Suppression",
      "Right to Erasure",
      "Right to be Forgotten",
      "Digital Crisis Management",
    ],
  }

  return (
    <html
      lang="th"
      className={cn(
        "dark selection:bg-primary/20 selection:text-primary scroll-smooth",
        inter.variable,
        notoThai.variable,
        jetbrains.variable
      )}
      suppressHydrationWarning
    >
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          "font-thai" // บังคับใช้ Noto Sans Thai เป็นฟอนต์หลักสำหรับการอ่านเนื้อหา
        )}
      >
        {/* Structured Data สำหรับช่วยในการทำ Rich Snippets */}
        <JsonLd data={organizationSchema} />

        {/* Main Application Container */}
        <div className="relative flex min-h-screen flex-col">
          <Header />

          <main className="flex-1">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  )
}
