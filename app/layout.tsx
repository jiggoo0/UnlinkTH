/** @format */

import type { Metadata, Viewport } from 'next'
import { Inter, Anuphan } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/shared/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { generateOrganizationSchema } from '@/lib/seo/schema-helper'

/** * [STRATEGY: FONT OPTIMIZATION]
 * รองรับการแสดงผลภาษาไทยที่คมชัดและสบายตาสำหรับผู้ใช้ทุกวัย
 */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const anuphan = Anuphan({
  subsets: ['thai'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-anuphan',
  display: 'swap',
  preload: true,
})

/**
 * [STRATEGY: SEO & METADATA]
 * แก้ไขปัญหา metadataBase Warning และตั้งค่า Domain หลัก
 */
export const metadata: Metadata = {
  metadataBase: new URL('https://www.unlink-th.com'),
  title: {
    default:
      'UnlinkTH | ที่ปรึกษาจัดการชื่อเสียงดิจิทัลและการใช้สิทธิถูกลืม (RTBF)',
    template: '%s | UnlinkTH Reputation Intelligence',
  },
  description:
    'บริการจัดการข้อมูลออนไลน์เชิงลบอย่างถูกวิธีตามกฎหมาย PDPA และหลักการลบข้อมูลถาวร (De-indexing) ปกป้องสิทธิส่วนบุคคลด้วยมาตรฐานความปลอดภัยระดับสถาบัน',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: 'https://www.unlink-th.com',
    siteName: 'UnlinkTH',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
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
          'bg-background text-foreground min-h-screen font-sans antialiased',
          inter.variable,
          anuphan.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* ✅ จุดสำคัญ: {children} จะถูกหุ้มโดย Layout ย่อยในแต่ละ Route Group 
              - กลุ่ม (main) จะหุ้มด้วย MainLayout (มี Navbar หลัก)
              - กลุ่ม (wiki-hub) จะหุ้มด้วย WikiLayout (มี Navbar Wiki)
              ทำให้ไม่มีการซ้อนทับกันที่ Root
          */}
          {children}

          <Toaster
            position="bottom-right"
            richColors
            closeButton
            className="font-sans"
            style={{ zIndex: 9999 }}
            toastOptions={{
              style: { borderRadius: '12px' },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  )
}
