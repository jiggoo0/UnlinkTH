/** @format */

import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_Thai, JetBrains_Mono } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { siteConfig } from "@/constants/site-config";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import JsonLd from "@/components/seo/JsonLd";
import ReputationShield from "@/components/seo/ReputationShield";
import PdpaConsent from "@/components/shared/PdpaConsent";
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
  authors: [{ name: siteConfig.founder.nameTh, url: siteConfig.founder.url }],
  creator: `UNLINK-GLOBAL Infrastructure Team`,
  publisher: siteConfig.name,
  formatDetection: { email: false, address: false, telephone: false },

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

import { GoogleAnalytics } from "@next/third-parties/google";
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
          <GoogleAnalytics gaId="G-VRLM7ZEH9X" />
        </ThemeProvider>
      </body>
    </html>
  );
}
