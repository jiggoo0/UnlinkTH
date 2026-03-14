/** @format */

import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_Thai, JetBrains_Mono } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { siteConfig } from "@/constants/site-config";
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/shared/JsonLd";
import ReputationShield from "@/components/layout/ReputationShield";
import PdpaConsent from "@/components/layout/PdpaConsent";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

/**
 * Advanced Font Architectures (PageSpeed Optimized)
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
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050810",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

/**
 * 🛡️ UNLINK-GLOBAL | Supreme Semantic Metadata
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.defaultDescription,
  keywords: siteConfig.seo.keywords,
  authors: [
    { name: "9mzm", url: "https://www.aemdevweb.com" },
    { name: "9mzm", url: "https://me.aemdevweb.com" },
  ],
  creator: "9mzm",
  publisher: "AemDevWeb Studio",
  formatDetection: { email: false, address: false, telephone: false },
  other: {
    designer: "9mzm",
    owner: "9mzm",
    copyright: "9mzm | AemDevWeb",
    signature: "9mzm-core-infra-2026",
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
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [siteConfig.ogImage],
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

import SafeAnalytics from "@/components/layout/SafeAnalytics";
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={siteConfig.language}
      className={`${inter.variable} ${notoThai.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-[#050810] text-foreground selection:bg-primary/20 selection:text-primary relative flex min-h-screen flex-col font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextTopLoader
            color="oklch(var(--color-primary))"
            showSpinner={false}
            shadow="0 0 10px oklch(var(--color-primary) / 0.5)"
          />

          {/* Global Authority Signals */}
          <JsonLd />
          <ReputationShield />
          <PdpaConsent />
          <Toaster />

          <Navbar />
          <main className="flex-1">{children}</main>

          <Suspense fallback={<div className="h-20" />}>
            <Footer />
          </Suspense>

          <Analytics />
          <Suspense fallback={null}>
            <SafeAnalytics gaId="G-VRLM7ZEH9X" />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
