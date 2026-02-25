/** @format */

import type { Metadata, Viewport } from "next"
import { Inter, Noto_Sans_Thai, JetBrains_Mono } from "next/font/google"
import NextTopLoader from "nextjs-toploader"
import { siteConfig } from "@/constants/site-config"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import JsonLd from "@/components/seo/JsonLd"
import { Toaster } from "@/components/ui/sonner"
import "./globals.css"

/**
 * Font Architectures
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const notoThai = Noto_Sans_Thai({
  subsets: ["thai"],
  variable: "--font-noto-thai",
  display: "swap",
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

/**
 * Viewport Optimization
 */
export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

/**
 * Metadata Framework (Enhanced for Entity Linking & Attribution)
 */
export const metadata: Metadata = {
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate ?? `%s | ${siteConfig.name}`,
  },
  description: siteConfig.seo.defaultDescription,
  keywords: siteConfig.seo.keywords,
  metadataBase: new URL(siteConfig.url),
  alternates: { canonical: "/" },

  // Developer Attribution Protocol
  authors: [
    {
      name: "นาย อลงกรณ์ ยมเกิด (นายเอ็มซ่ามากส์)",
      url: "https://me.aemdevweb.com",
    },
    { name: "AemDevWeb Studio", url: "https://www.aemdevweb.com" },
  ],
  creator: "AemDevWeb Studio (www.aemdevweb.com)",
  publisher: siteConfig.name,
  generator: "Alongkorl Yomkerd (me.aemdevweb.com)",

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
        alt: siteConfig.name,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "G-XXXXXXXXXX", // Replace with actual Google Search Console verification key
  },
}

/**
 * Root Layout Protocol
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang={siteConfig.language}
      className={`${inter.variable} ${notoThai.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground selection:bg-primary/20 selection:text-primary relative flex min-h-screen flex-col font-sans antialiased">
        {/* Navigation Loading Indicator */}
        <NextTopLoader
          color="hsl(var(--color-primary))"
          showSpinner={false}
          shadow="0 0 10px hsl(var(--color-primary) / 0.5)"
        />

        {/* Global Brand Identity (Schema.org) */}
        <JsonLd />
        <Toaster />

        <Navbar />
        <main className="flex-1 overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
