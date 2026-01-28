/** @format */

import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_Thai, JetBrains_Mono } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { siteConfig } from "@/constants/site-config";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import JsonLd from "@/components/seo/JsonLd";
import "./globals.css";

/**
 * Font Architectures
 * กำหนดค่า Font Variables สำหรับใช้ในระบบ Tailwind CSS
 */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoThai = Noto_Sans_Thai({
  subsets: ["thai"],
  variable: "--font-noto-thai",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

/**
 * Viewport Optimization
 */
export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/**
 * Intelligence Metadata
 * แก้ไขปัญหา Type 'string | undefined' ด้วยการใช้ Nullish Coalescing
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang={siteConfig.language}
      className={`${inter.variable} ${notoThai.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground selection:bg-primary/20 selection:text-primary font-sans antialiased">
        {/* Loading Protocol */}
        <NextTopLoader
          color="hsl(142 71% 45%)"
          showSpinner={false}
          shadow="0 0 10px hsl(var(--color-primary) / 0.5)"
        />

        {/* Structured Data Intelligence - แก้ไขการส่ง Props data */}
        <JsonLd data={siteConfig} />

        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 overflow-hidden">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
