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
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
})

const kanit = Kanit({
  subsets: ['thai'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-kanit',
  display: 'swap',
  preload: true,
  fallback: ['Tahoma', 'sans-serif'],
})

/**
 * [STRATEGY: CANONICAL AUTHORITY]
 * - ปรับ metadataBase ให้ตรงกับโดเมนที่ใช้งานจริงเพื่อความถูกต้องของ Social Graph
 * - ใช้ URL: https://unlink-th.vercel.app
 */
export const metadata: Metadata = {
  title: {
    default:
      'UnlinkTH | ที่ปรึกษาจัดการข้อมูลออนไลน์และสิทธิ์ในการถูกลืม (PDPA)',
    template: '%s | UnlinkTH Reputation Management',
  },
  description:
    'เราช่วยคุณควบคุมผลการค้นหาและจัดการชื่อเสียงออนไลน์ (ORM) ภายใต้กฎหมาย PDPA เพื่อปกป้องความเป็นส่วนตัวและกู้คืนโอกาสทางธุรกิจ ข้อมูลของคุณเป็นความลับสูงสุด (NDA Standard)',
  keywords: [
    'วิธีจัดการชื่อเสียในกูเกิล',
    'ลบประวัติเสียออนไลน์',
    'Right to be forgotten Thailand',
    'ที่ปรึกษาจัดการชื่อเสียงออนไลน์',
    'PDPA ลบข้อมูลส่วนบุคคล',
    'SEO Displacement Service',
  ],
  authors: [{ name: 'UnlinkTH Professional Team' }],
  // ✅ อัปเดต metadataBase เป็น Vercel Domain ตามคำสั่ง
  metadataBase: new URL('https://unlink-th.vercel.app'),
  alternates: {
    canonical: 'https://unlink-th.vercel.app',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: 'https://unlink-th.vercel.app',
    title: 'UnlinkTH | จัดการตัวตนดิจิทัลของคุณให้ถูกต้องตามกฎหมาย',
    description:
      'ปกป้องชื่อเสียงออนไลน์ด้วยทีมผู้เชี่ยวชาญด้านกฎหมายและเทคโนโลยีการจัดการข้อมูล',
    siteName: 'UnlinkTH',
    images: [
      {
        url: '/images/og-main.jpg',
        width: 1200,
        height: 630,
        alt: 'UnlinkTH Reputation Protocol',
      },
    ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={cn(
          'bg-background font-thai min-h-screen antialiased transition-colors duration-300',
          inter.variable,
          kanit.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Suspense fallback={<div className="bg-background min-h-screen" />}>
            <MainLayout>{children}</MainLayout>
          </Suspense>

          <LineFloat />

          <Toaster
            position="bottom-right"
            expand={false}
            richColors
            closeButton
            theme="light"
            style={{ zIndex: 9999 }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
