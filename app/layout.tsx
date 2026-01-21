import type { Metadata, Viewport } from "next"
import { Inter, Noto_Sans_Thai, JetBrains_Mono } from "next/font/google"
import { siteConfig } from "@/constants/site-config"
import JsonLd from "@/components/seo/JsonLd"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { cn } from "@/lib/utils"
import "./globals.css"

/**
 * Font Configuration:
 * 1. ลดจำนวน Weights ของ Noto Sans Thai เพื่อประหยัด Bandwidth และลดขนาดไฟล์ Glyphs
 * 2. ใช้ font-display: optional สำหรับ Mono เพื่อไม่ให้แย่ง Bandwidth ช่วงแรก
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
  weight: ["400", "700"], // 🛑 ปรับลดเหลือเฉพาะ Regular และ Bold เพื่อเพิ่มความเร็วในการโหลด
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "optional", // ⚡ ป้องกัน Layout Shift และประหยัดทรัพยากรบนมือถือ
})

export const viewport: Viewport = {
  themeColor: "#05070a", // Obsidian Black จาก Brand DNA
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
  authors: [{ name: "UNLINK-TH Specialist", url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
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
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Ultimate Privacy & Data Erasure`,
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
   * Organization Schema: ปรับเป็น ProfessionalService + LocalBusiness
   * เพื่อสร้าง Rich Snippets และเสริมสร้าง E-E-A-T ผ่านการเชื่อมโยง Entity (sameAs)
   */
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/Logo.jpg`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    priceRange: "$$$", // สื่อถึงบริการระดับ Premium/Specialist
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    sameAs: [
      siteConfig.links.facebook,
      siteConfig.links.twitter,
      siteConfig.links.line,
    ],
    serviceType: [
      "Digital Reputation Management",
      "Data Privacy Solutions",
      "Content Suppression",
      "De-indexing Service",
      "Online Crisis Management",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangkok",
      addressCountry: "TH",
    },
    knowsAbout: [
      "PDPA Thailand",
      "SEO Suppression",
      "Right to Erasure",
      "Right to be Forgotten",
      "Digital Forensic Cleanup",
    ],
  }

  return (
    <html
      lang={siteConfig.language}
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
          "bg-background text-foreground min-h-screen font-sans antialiased",
          "font-thai" // 🛡️ บังคับใช้ Noto Sans Thai เป็นฟอนต์หลักสำหรับการอ่านเนื้อหาภาษาไทย
        )}
      >
        {/* Structured Data สำหรับส่งสัญญาณความน่าเชื่อถือให้ Google Search Console */}
        <JsonLd data={organizationSchema} />

        {/* Tactical Layout Container */}
        <div className="relative flex min-h-screen flex-col">
          <Header />

          <main className="flex-1">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  )
}
