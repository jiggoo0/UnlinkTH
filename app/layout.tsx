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
import { generateOrganizationSchema } from '@/lib/seo/schema-helper'

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

/**
 * [STRATEGY: HUMAN-CENTRIC SEO FOUNDATION]
 * - ปรับเปลี่ยน Metadata ให้เน้นปัญหาของลูกค้า (Long-tail Intent)
 * - กำหนดความปลอดภัยด้วย Robots tags เพื่อสร้าง Technical Authority
 */

export const metadata: Metadata = {
  title: {
    default:
      'UnlinkTH | ที่ปรึกษาจัดการชื่อเสียงและลบข้อมูลออนไลน์เพื่อโอกาสใหม่ในชีวิต',
    template: '%s | UnlinkTH Management',
  },
  description:
    'จัดการข้อมูลออนไลน์ที่กระทบชื่อเสียงและโอกาสในชีวิตของคุณอย่างมืออาชีพ ด้วยเทคนิค SEO Displacement และสิทธิ์ตามกฎหมาย PDPA เพื่อการเริ่มต้นใหม่ที่ปลอดภัยและเป็นความลับ',
  keywords: [
    'วิธีลบชื่อออกจาก Google',
    'ลบประวัติเสียออนไลน์',
    'จัดการชื่อเสียงออนไลน์ (ORM)',
    'ที่ปรึกษาลบข่าวเสียหาย',
    'กู้คืนภาพลักษณ์ดิจิทัล',
    'กฎหมาย PDPA ลบข้อมูล',
  ],
  authors: [{ name: 'UnlinkTH Team' }],
  metadataBase: new URL('https://unlink-th.vercel.app'),
  alternates: {
    canonical: 'https://unlink-th.vercel.app', // ✅ บังคับให้ Google สนใจโดเมนนี้เป็นหลัก
  },
  // ✅ เพิ่มการจัดการ Icons ให้ครบถ้วน
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: 'https://unlink-th.vercel.app',
    title: 'UnlinkTH | คืนสิทธิ์ในการถูกจดจำ ในแบบที่คุณต้องการ',
    description:
      'ที่ปรึกษาเฉพาะทางด้านการจัดการชื่อเสียงออนไลน์ จัดการข่าวเสียและปกป้องความเป็นส่วนตัว',
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
          <Suspense fallback={null}>
            <MainLayout>{children}</MainLayout>
          </Suspense>

          <LineFloat />

          <Toaster
            position="bottom-right" // ✅ ปรับตำแหน่งให้ไม่บัง Navigation ในมือถือ
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
