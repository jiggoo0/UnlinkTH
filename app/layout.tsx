/** @format */

import type { Metadata, Viewport } from 'next'
import { Inter, Kanit } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/shared/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { LineFloat } from '@/components/shared/line-float'
import { MainLayout } from '@/components/layout/MainLayout'
import { Suspense } from 'react'

// ✅ FIXED: แก้ไข Path การ Import ให้ชี้ไปยังตำแหน่งที่ถูกต้องของ SEO Schema Helper
import { generateOrganizationSchema } from '@/lib/seo/schema-helper'

/**
 * [STRATEGY: THE STRUCTURAL FOUNDATION]
 * - Next.js 15 & React 19 optimized.
 * - Performance: Font swapping and suppressHydrationWarning for theme transitions.
 * - Stability: Suspense boundary to prevent 'useSearchParams' bailout during build.
 */

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const kanit = Kanit({
  subsets: ['thai'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-kanit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'UnlinkTH | บริการลบลิงก์และจัดการชื่อเสียงออนไลน์มืออาชีพ',
    template: '%s | UnlinkTH',
  },
  description:
    'ที่ปรึกษาเฉพาะทางด้านการกู้คืนชื่อเสียง ลบข้อมูลเสียบน Google และจัดการข้อมูลส่วนตัวรั่วไหล ดำเนินการรวดเร็ว เป็นความลับ และเห็นผลจริง',
  keywords: [
    'ลบประวัติเสีย',
    'ลบลิงก์ Google',
    'จัดการชื่อเสียงออนไลน์',
    'กู้ชื่อเสียงบริษัท',
    'ลบข่าวเสียหาย',
  ],
  authors: [{ name: 'UnlinkTH Team' }],
  metadataBase: new URL('https://unlink-th.vercel.app'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: 'https://unlink-th.vercel.app',
    title: 'UnlinkTH | บริการจัดการชื่อเสียงออนไลน์',
    description: 'ลบลิงก์เสีย แก้ข่าวปลอม ปกป้องความเป็นส่วนตัวของคุณ',
    siteName: 'UnlinkTH',
    images: [{ url: '/images/og-main.jpg', width: 1200, height: 630 }],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = generateOrganizationSchema()

  return (
    <html lang="th" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* 🏢 Organization Schema Injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={cn(
          'bg-background font-thai min-h-screen antialiased',
          'selection:bg-blue-600/10 selection:text-blue-600',
          inter.variable,
          kanit.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* 🏛️ STRATEGY: 
            Suspense is required for components accessing searchParams during static rendering.
          */}
          <Suspense fallback={null}>
            <MainLayout>{children}</MainLayout>
          </Suspense>

          {/* Floating Action UI */}
          <LineFloat />

          {/* Global Feedback System */}
          <Toaster
            position="top-right"
            expand={false}
            richColors
            closeButton
            theme="light"
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
