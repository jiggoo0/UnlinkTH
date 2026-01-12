# 📑 รายงานสรุปโปรเจกต์และบริบท AI (Full Context)

_สร้างเมื่อ: 2026-01-12 06:24:27_

> **Status:** Fresh Scan | รวมข้อมูลวิเคราะห์ Route & Code

## 🔴 1. สถานะสุขภาพโปรเจกต์ล่าสุด

✅ **READY FOR DEPLOY** (ผ่านการตรวจสอบทุกขั้นตอน)

### 📍 Production Route Map

````text
```text
Route (app)                                         Size  First Load JS
┌ ○ /                                            8.68 kB         174 kB
├ ○ /_not-found                                    138 B         101 kB
├ ○ /about                                       5.42 kB         151 kB
├ ƒ /api/contact                                   138 B         101 kB
├ ƒ /api/line-notify                               138 B         101 kB
├ ƒ /api/send-mail                                 138 B         101 kB
├ ○ /cases                                       7.69 kB         156 kB
├ ● /cases/[slug]                                9.36 kB         121 kB
├   ├ /cases/financial-reputation-recovery
├   ├ /cases/identity-protection-cleansing
├   ├ /cases/personal-data-privacy-recovery
├   └ /cases/contextual-information-rebalancing
├ ○ /contact                                     4.31 kB         123 kB
├ ○ /faq                                         3.91 kB         160 kB
├ ○ /privacy                                     5.45 kB         144 kB
├ ○ /robots.txt                                    138 B         101 kB
├ ○ /services                                    3.15 kB         169 kB
├ ● /services/[slug]                             2.38 kB         151 kB
├   ├ /services/name-risk-audit
├   ├ /services/single-link-management
├   ├ /services/impersonation-account
├   └ [+3 more paths]
├ ○ /sitemap.xml                                   138 B         101 kB
└ ○ /terms                                       3.68 kB         105 kB
+ First Load JS shared by all                     101 kB
  ├ chunks/0044af8c-d6052738d8f188a8.js          54.2 kB
  ├ chunks/532-abc5cdace1c14129.js               45.2 kB
  └ other shared chunks (total)                  1.93 kB
○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
ƒ  (Dynamic)  server-rendered on demand
````

````

## 📊 2. สถิติไฟล์แบ่งตามนามสกุล
```text
     56 tsx
     23 ts
      5 sh
      5 jpg
      1 txt
      1 svg
      1 ico
      1 css
````

## 📁 3. โครงสร้างโฟลเดอร์ (Tree)

```text
📂 app
  📄 favicon.ico
  📄 layout.tsx
  📄 globals.css
  📂 (main)
    📂 services
      📄 page.tsx
      📂 [slug]
        📄 page.tsx
    📂 cases
      📄 page.tsx
      📂 [slug]
        📄 page.tsx
    📂 contact
      📄 page.tsx
    📄 page.tsx
    📂 terms
      📄 page.tsx
    📂 about
      📄 page.tsx
    📂 faq
      📄 page.tsx
    📂 privacy
      📄 page.tsx
  📂 api
    📂 send-mail
      📄 route.ts
    📂 line-notify
      📄 route.ts
    📂 contact
      📄 route.ts
  📄 sitemap.ts
  📄 error.tsx
  📄 robots.ts
  📄 not-found.tsx
📂 components
  📂 ui
    📄 button.tsx
    📄 badge.tsx
    📄 dialog.tsx
    📄 card.tsx
    📄 input.tsx
    📄 sonner.tsx
    📄 skeleton.tsx
    📄 table.tsx
    📄 select.tsx
    📄 sheet.tsx
    📄 accordion.tsx
    📄 label.tsx
    📄 textarea.tsx
    📄 separator.tsx
    📄 tooltip.tsx
    📄 switch.tsx
    📄 form.tsx
  📂 layout
    📄 MainLayout.tsx
  📂 shared
    📄 trust-badge.tsx
    📄 StatsCounter.tsx
    📄 line-float.tsx
    📄 before-after-slider.tsx
    📄 theme-provider.tsx
    📄 logo.tsx
    📄 whatsapp-float.tsx
    📄 google-analytics.tsx
    📄 elements.tsx
    📄 section-heading.tsx
    📄 Footer.tsx
    📄 Navbar.tsx
  📂 cases
    📄 ProjectCard.tsx
    📄 ProjectFilter.tsx
    📄 ServiceStatus.tsx
  📂 contact
    📄 ContactForm.tsx
  📂 home
    📄 HeroSection.tsx
    📄 FaqSection.tsx
  📂 seo
    📄 Seo.tsx
  📂 service
    📄 PricingSection.tsx
    📄 ServiceCard.tsx
    📄 ServiceGrid.tsx
    📄 ServiceListRow.tsx
    📄 PricingTier.tsx
📂 lib
  📄 supabase.ts
  📄 utils.ts
  📂 seo
    📄 seo-helper.ts
    📄 schema-helper.ts
  📂 constants
    📄 links.ts
📂 hooks
  📄 use-toast.tsx
📂 types
  📄 service.ts
  📄 database.types.ts
  📄 project.ts
📂 scripts
  📄 clean-project.sh
  📂 dev
    📄 backup-project.sh
    📄 project-summary.sh
    📄 tree-projects.sh
  📄 pre-deploy-check.sh
📂 public
  📄 robots.txt
  📂 images
    📄 grid-pattern.svg
    📄 og-main.jpg
    📂 projects
      📄 case-financial.jpg
      📄 case-identity-protection.jpg
      📄 case-privacy-recovery.jpg
      📄 case-rebalancing.jpg
📂 data
  📂 case
    📄 case-1.ts
    📄 case-2.ts
    📄 case-3.ts
    📄 all-cases.ts
    📄 case-4.ts
  📄 faq.ts
  📂 services
    📄 all-services.ts
    📄 service-map.ts
    📄 services-1.ts
    📄 services-2.ts
```

## 📄 4. เนื้อหาโค้ดและบริบททางเทคนิค

#### 🔍 Path: ai-context.md

```markdown
# 🧠 AI_CONTEXT — UNLINKTH

_(Human‑Centric + Technical Authority | Updated: 2026)_

## 🎯 วัตถุประสงค์สูงสุด (Core Objective)

สร้างระบบและเนื้อหาที่ "เปลี่ยนความกังวลเป็นความเชื่อมั่น" AI ต้องสื่อสารเหมือนที่ปรึกษามืออาชีพที่กุมความลับของลูกค้าไว้ และเสนอทางออกที่มี "จุดจบชัดเจน" (Clear Outcome) โดยยึดถือความเป็นธรรมตามกฎหมายและเทคนิค SEO ระดับสูง

---

## 0️⃣ นิยามธุรกิจ (Core Business Definition)

**UNLINKTH** = ที่ปรึกษาเชิงเทคนิคในการจัดการและจัดระเบียบข้อมูลออนไลน์ (Online Reputation Management - ORM)

- **วิกฤตของลูกค้า:** ข้อมูลในอดีต, ข่าวลบ, การถูกแอบอ้าง หรือข้อมูลที่ละเมิดความเป็นส่วนตัว (PDPA) ที่ขัดขวางโอกาสในอนาคต
- **ทางแก้:** ผสานพลังระหว่าง "กฎหมายดิจิทัล" (สิทธิ์ในการถูกลืม) และ "เทคนิค SEO" (การแทนที่ข้อมูล)
- **ผลลัพธ์:** คืนหน้าแรกของ Google ให้เป็นพื้นที่สีขาวเพื่อให้ลูกค้าเริ่มต้นใหม่ได้จริง

---

## 1️⃣ กฎการสื่อสารและการเขียนเนื้อหา (Messaging Rules)

- **The "Responsible Delete" Framework:** - ห้ามการันตีเกินจริง (No 100% Guarantee): ห้ามใช้คำว่า "ลบได้ทุกอย่าง" หรือ "ลบถาวรทุกกรณี"
  - ให้ใช้คำว่า "จัดการ" และ "ควบคุม": เช่น "จัดการข้อมูลที่ไม่เป็นธรรม" หรือ "ควบคุมผลการค้นหาเพื่อคืนภาพลักษณ์ใหม่"
- **Authority Logic:** อธิบายด้วยเหตุผลเสมอ เช่น "เราใช้เทคนิค SEO Displacement เพื่อดันลิงก์ดีทับลิงก์เสียตามกลไกของ Google"
- **Long-tail Focus:** เน้นการตอบโจทย์ปัญหาจริง เช่น _"วิธีจัดการเมื่อโดนแฉออนไลน์"_ หรือ _"ลบชื่อออกจากผลการค้นหา Google"_
- **Tone & Voice:** - **Empathy First:** เข้าใจความทุกข์ของลูกค้า
  - **Authority Second:** เด็ดขาดและชัดเจนในแนวทางแก้ไข
  - **Confidential Always:** สื่อสารว่าทุกอย่างคือความลับสูงสุด

---

## 2️⃣ มาตรฐานงานเทคนิค (Technical Stack & API)

- **Framework:** Next.js 15.5.7 (App Router) + React 19
- **Language:** TypeScript (Strict Mode) - _Type-safe is a must_
- **Styling:** Tailwind CSS v4 + shadcn/ui (Minimalist Professionalism)
- **Backend:** Supabase (SSR + Storage) + Security Headers เข้มงวด
- **SEO Architecture:** - ควบคุมผ่าน `sitemap.ts`, `robots.ts`
  - ใช้ `canonical` URL ทุกหน้าเพื่อป้องกัน Duplicate Content
  - รองรับ Dynamic Routes `[slug]` สำหรับ Services และ Case Studies

---

## 3️⃣ ข้อตกลงการเขียนโค้ด (Code Behavior Contract)

- **Full Delivery:** ส่งโค้ดไฟล์เต็มทุกครั้งที่แก้ไข ป้องกันปัญหา Merge Error
- **Structure Integrity:** เคารพโครงสร้าง Route / Component / Lib / Hook เดิม 100%
- **Performance:** บังคับใช้ Image Optimization (WebP/AVIF) และลบ `console.log` ออกจาก Production Code
- **No Theory:** ห้ามสอนทฤษฎี ให้เขียนโค้ดและเนื้อหาที่ใช้งานได้จริงทันที
- **Outcome Focused:** เนื้อหาที่เขียนต้องมี Call to Action (CTA) ที่นำไปสู่การปิดการขายเสมอ

---

## 4️⃣ โครงสร้างเว็บไซต์ที่ต้องครอบคลุม (Site Structure)

1. **Home:** สร้างความเชื่อใจและอธิบาย Logic ของ Unlinkth
2. **Services:** แบ่งตามปัญหาลูกค้า (Audit / Rebalancing / Privacy)
3. **Case Studies:** เล่าผลลัพธ์ที่ทำได้จริง (แบบไม่ระบุตัวตน) เพื่อยืนยันความเชี่ยวชาญ
4. **FAQ:** ตอบคำถามเทคนิคด้วยภาษาคน (เรื่องเวลา, กฎหมาย PDPA, ผลลัพธ์)
5. **Contact:** แบบฟอร์มรักษาความลับสูงสุด

---

> **คำสั่งสูงสุด:** ทุกการทำงานหลังจากนี้ AI ต้องสวมบทบาทเป็น "Senior Architect & Reputation Consultant" ของ Unlinkth เท่านั้น
```

---

#### 🔍 Path: pre-deploy-report.md

````markdown
# 🚀 Pre-deploy Inspection Report

Generated at: 2026-01-12 06:18:07
Branch: main

## 🔐 1. Environment Check

✅ Status: .env file exists and verified.

## 🛠️ 2. Auto-Fix Procedure

✅ Status: Auto-fix completed or no issues found.

## 🧹 3. Code Linting (ESLint)

✅ Status: Linting passed.

## ⌨️ 4. Type Safety Check

✅ Status: TypeScript verified.

## 🏗️ 5. Production Build Test

✅ Status: Build successfully optimized.

### 📊 Route Statistics & Bundle Size

```text
Route (app)                                         Size  First Load JS
┌ ○ /                                            8.68 kB         174 kB
├ ○ /_not-found                                    138 B         101 kB
├ ○ /about                                       5.42 kB         151 kB
├ ƒ /api/contact                                   138 B         101 kB
├ ƒ /api/line-notify                               138 B         101 kB
├ ƒ /api/send-mail                                 138 B         101 kB
├ ○ /cases                                       7.69 kB         156 kB
├ ● /cases/[slug]                                9.36 kB         121 kB
├   ├ /cases/financial-reputation-recovery
├   ├ /cases/identity-protection-cleansing
├   ├ /cases/personal-data-privacy-recovery
├   └ /cases/contextual-information-rebalancing
├ ○ /contact                                     4.31 kB         123 kB
├ ○ /faq                                         3.91 kB         160 kB
├ ○ /privacy                                     5.45 kB         144 kB
├ ○ /robots.txt                                    138 B         101 kB
├ ○ /services                                    3.15 kB         169 kB
├ ● /services/[slug]                             2.38 kB         151 kB
├   ├ /services/name-risk-audit
├   ├ /services/single-link-management
├   ├ /services/impersonation-account
├   └ [+3 more paths]
├ ○ /sitemap.xml                                   138 B         101 kB
└ ○ /terms                                       3.68 kB         105 kB
+ First Load JS shared by all                     101 kB
  ├ chunks/0044af8c-d6052738d8f188a8.js          54.2 kB
  ├ chunks/532-abc5cdace1c14129.js               45.2 kB
  └ other shared chunks (total)                  1.93 kB


○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
ƒ  (Dynamic)  server-rendered on demand
```
````

---

## 🏆 Summary Result

### ✅ READY FOR DEPLOY

All protocols verified: Lint passed, Types safe, and Build successful. Deployment is highly recommended.

````
---

#### 🔍 Path: app/globals.css
```css
@import 'tailwindcss';

/* ==========================================================================
   ⚡ Structural Minimalist Design System - Tailwind 4 + CSS Variables
   - Precision radius, transition, color mapping
   - Full Dark/Light support
   ========================================================================== */

/* ================================
   1. Custom Variant for Dark
   ================================ */
@custom-variant dark (&:is(.dark *));

/* ================================
   2. Theme Tokens
   ================================ */
@theme {
  /* Typography */
  --font-sans: var(--font-kanit), var(--font-inter), ui-sans-serif, system-ui;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Color Mapping */
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);

  /* Brand / Feedback */
  --color-brand-accent: oklch(0.6 0.18 250);
  --color-success: oklch(0.62 0.17 145);

  /* Structural Radius */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 6px;

  /* Transitions */
  --transition-fast: 150ms;
  --transition-timing: cubic-bezier(0.4, 0, 0.2, 1);
}

/* ================================
   3. Base Variables
   ================================ */
@layer base {
  :root {
    --background: oklch(0.99 0 0);
    --foreground: oklch(0.25 0.02 260);
    --primary: oklch(0.25 0.02 260);
    --primary-foreground: oklch(0.99 0 0);
    --muted: oklch(0.97 0 0);
    --muted-foreground: oklch(0.5 0.02 260);
    --border: oklch(0.92 0 0);
    --input: oklch(0.92 0 0);
    --ring: oklch(0.25 0.02 260);
  }

  .dark {
    --background: oklch(0.18 0.01 260);
    --foreground: oklch(0.98 0 0);
    --primary: oklch(0.98 0 0);
    --primary-foreground: oklch(0.18 0.01 260);
    --muted: oklch(0.25 0.02 260);
    --muted-foreground: oklch(0.7 0 0);
    --border: oklch(1 0 0 / 12%);
    --input: oklch(1 0 0 / 12%);
    --ring: oklch(0.98 0 0);
  }

  /* Reset & Globals */
  * {
    border-color: var(--border);
    @apply outline-ring/30;
  }

  body {
    @apply bg-background text-foreground font-sans antialiased;
    line-height: 1.6;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  ::selection {
    background-color: var(--primary);
    color: var(--primary-foreground);
  }
}

/* ================================
   4. Components
   ================================ */
@layer components {
  /* Card - Structural */
  .card-structural {
    @apply bg-background border-border rounded-sm border p-8 transition-all duration-[var(--transition-fast)];
  }
  .card-structural:hover {
    border-color: var(--brand-accent);
    background-color: oklch(from var(--muted) l c h / 0.3);
  }

  /* Buttons */
  .btn-primary {
    @apply bg-primary text-primary-foreground hover:bg-brand-accent inline-flex h-14 items-center justify-center rounded-sm px-10 text-[11px] font-black tracking-[0.2em] uppercase transition-all duration-[var(--transition-fast)] ease-[var(--transition-timing)] active:scale-[0.98];
  }

  .btn-outline {
    @apply border-primary text-primary hover:bg-primary hover:text-primary-foreground inline-flex h-14 items-center justify-center rounded-sm border-2 bg-transparent px-10 text-[11px] font-black tracking-[0.2em] uppercase transition-all duration-[var(--transition-fast)] ease-[var(--transition-timing)] active:scale-[0.98];
  }

  /* Input - Dossier Style */
  .input-dossier {
    @apply border-border focus:border-brand-accent placeholder:text-muted-foreground/50 w-full border-b bg-transparent py-3 text-sm transition-colors outline-none;
  }
}

/* ================================
   5. Utilities
   ================================ */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
````

---

#### 🔍 Path: app/layout.tsx

```typescript
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
```

---

#### 🔍 Path: app/not-found.tsx

```typescript
/** @format */

'use client'

import React, { Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ArrowLeft, ShieldAlert, Search, Terminal } from 'lucide-react'
import { Button } from '@/components/ui/button'

/**
 * [STRATEGY: THE RESILIENT 404]
 * - Next.js 15 Fix: หุ้ม useSearchParams ด้วย Suspense เพื่อป้องกัน Build Error
 * - UI: ใช้ธีม Institutional Terror/Tech เพื่อรักษา Branding แม้ในหน้า Error
 */

// 1. Component ย่อยสำหรับแสดงผลที่ต้องใช้ SearchParams
function NotFoundContent() {
  const searchParams = useSearchParams()
  const attemptedPath = searchParams.get('path') // ตัวอย่างการดึงค่ามาแสดง (ถ้ามี)

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-8xl font-black tracking-tighter text-slate-950 uppercase md:text-9xl dark:text-white">
          404<span className="text-blue-600">.</span>
        </h1>
        <h2 className="text-xl font-black tracking-widest text-slate-400 uppercase">
          Protocol Breach: Page Not Found
        </h2>
      </div>

      <div className="max-w-md border-l-2 border-red-500 bg-slate-50 p-6 dark:bg-slate-900/50">
        <p className="font-thai text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          ไม่พบหน้าที่คุณกำลังเรียกใช้ในฐานข้อมูลระบบ
          {attemptedPath && (
            <span className="ml-2 font-mono text-red-500">
              [Attempted: {attemptedPath}]
            </span>
          )}
          <br />
          ข้อมูลดังกล่าวอาจถูกลบ ย้าย
          หรือจำกัดการเข้าถึงตามนโยบายความเป็นส่วนตัว
        </p>
      </div>
    </div>
  )
}

// 2. Component หลัก (Default Export)
export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white selection:bg-blue-100 dark:bg-slate-950">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 opacity-[0.03] dark:opacity-[0.05]">
        <ShieldAlert size={600} />
      </div>

      <div className="relative z-10 container mx-auto flex min-h-screen flex-col justify-center px-6">
        {/* หุ้มด้วย Suspense เพื่อแก้ปัญหา Prerendering Error */}
        <Suspense
          fallback={
            <div className="animate-pulse space-y-8">
              <div className="h-32 w-64 bg-slate-100 dark:bg-slate-800" />
              <div className="h-20 w-full bg-slate-50 dark:bg-slate-900" />
            </div>
          }
        >
          <NotFoundContent />
        </Suspense>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Button
            asChild
            variant="default"
            className="h-14 rounded-none bg-slate-950 px-8 text-[11px] font-black tracking-[0.2em] uppercase transition-all hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-white dark:hover:text-slate-950"
          >
            <Link href="/" className="flex items-center gap-3">
              <ArrowLeft size={16} />
              Return to Core
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="h-14 rounded-none border-2 border-slate-950 px-8 text-[11px] font-black tracking-[0.2em] uppercase dark:border-slate-800"
          >
            <Link href="/services" className="flex items-center gap-3">
              <Search size={16} />
              Search Protocols
            </Link>
          </Button>
        </div>

        {/* Footer Info */}
        <div className="mt-20 flex items-center gap-4 text-slate-300 dark:text-slate-800">
          <Terminal size={14} />
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase">
            System Integrity Verified // UnlinkTH
          </span>
        </div>
      </div>
    </main>
  )
}
```

---

#### 🔍 Path: data/services/service-map.ts

```typescript
/** @format */

import { servicesGroupOne } from './services-1'
import { servicesGroupTwo } from './services-2'
import type { ServiceItem } from '@/types/service'

/**
 * [STRATEGY: CENTRALIZED SERVICE REGISTRY]
 * รวมบริการจากทุกกลุ่มเข้าด้วยกัน เพื่อเป็นแหล่งข้อมูลชุดเดียว (Single Source of Truth)
 */
const allServices: ServiceItem[] = [...servicesGroupOne, ...servicesGroupTwo]

/**
 * 1) 🏛️ Service Index Map
 * ประสิทธิภาพการเข้าถึง O(1) โดยใช้ slug เป็นคีย์
 */
export const serviceMap: Record<string, ServiceItem> = allServices.reduce(
  (acc, service) => {
    if (service.slug) {
      acc[service.slug] = service
    }
    return acc
  },
  {} as Record<string, ServiceItem>,
)

/**
 * 2) 🔍 Search by Slug
 */
export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return serviceMap[slug]
}

/**
 * 3) 🚀 Static Params Generator (Next.js 15 optimization)
 * ✅ FIXED: แก้ไขให้คืนค่าเป็น string[] บริสุทธิ์
 * เพื่อป้องกัน Error [object Object] ในขั้นตอนการ Build
 */
export function getAllServiceSlugs(): string[] {
  return allServices.map((service) => service.slug)
}

/**
 * 4) 🔗 Intelligent Related Services
 * ยุทธศาสตร์: ดึงบริการที่อยู่ในกลุ่มเดียวกัน (Hierarchy) มาแสดงก่อน
 */
export function getRelatedServices(
  currentSlug: string,
  limit = 2,
): ServiceItem[] {
  const currentService = serviceMap[currentSlug]

  return allServices
    .filter((s) => s.slug !== currentSlug)
    .sort((a, b) => {
      // Logic: แนะนำบริการที่มีช่วงราคา (Price Range) ใกล้เคียงกัน
      const diffA = Math.abs(
        (a.price?.min || 0) - (currentService?.price?.min || 0),
      )
      const diffB = Math.abs(
        (b.price?.min || 0) - (currentService?.price?.min || 0),
      )
      return diffA - diffB
    })
    .slice(0, limit)
}
```

---

#### 🔍 Path: app/(main)/services/[slug]/page.tsx

```typescript
/** @format */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Activity,
} from 'lucide-react'

// Data Layer
import {
  getServiceBySlug,
  getAllServiceSlugs,
} from '@/data/services/service-map'

// UI Components
import { SectionHeading } from '@/components/shared/section-heading'
import { Button } from '@/components/ui/button'
import { Seo } from '@/components/seo/Seo'

/**
 * [STRATEGY: HIGH-CONVERSION SERVICE PROTOCOL]
 * - Next.js 15 Compliance: ใช้ Async Params สำหรับ Server Component
 * - Static Generation Fix: แก้ไขการส่งค่า slug ให้เป็น String ที่ชัดเจน ป้องกัน [object Object]
 */

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

/* 🏛️ SEO Engine */
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) return { title: 'Service Not Found | UnlinkTH' }

  return {
    title: `${service.title} | Managed Digital Intelligence | UnlinkTH`,
    description: service.description,
  }
}

/* 🏛️ Static Generation Fix: ป้องกัน Error [object Object] */
export async function generateStaticParams() {
  // ดึงค่า slugs มาเป็น string[] (เช่น ['reputation-repair', 'data-removal'])
  const slugs = getAllServiceSlugs()

  // ✅ คืนค่าเป็น Array ของ Object ที่มี property slug เป็น string เท่านั้น
  return slugs.map((slug) => ({
    slug: String(slug),
  }))
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  // ✅ Next.js 15 ต้อง await params ก่อนนำค่ามาใช้
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) notFound()

  return (
    <>
      <Seo
        title={service.title}
        description={service.description}
        isService={true}
      />

      <main className="min-h-screen bg-white pt-32 pb-24 selection:bg-blue-100 dark:bg-slate-950">
        <div className="container mx-auto max-w-6xl px-6">
          {/* Navigation */}
          <nav className="mb-12">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase transition-colors hover:text-blue-600 dark:hover:text-blue-400"
            >
              <ArrowLeft
                size={14}
                className="transition-transform group-hover:-translate-x-2"
              />
              Return to Protocol Directory
            </Link>
          </nav>

          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
            {/* Content Column */}
            <div className="space-y-16 lg:col-span-8">
              <header>
                <SectionHeading
                  badge={`Operational ID: ${service.id}`}
                  title={service.title}
                  subtitle="Managed Digital Intelligence"
                  description={service.description}
                  align="left"
                  className="mb-0"
                />
              </header>

              {/* Capability Card */}
              <div className="overflow-hidden border border-slate-100 shadow-sm dark:border-slate-800">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="border-b border-slate-100 bg-white p-10 md:border-r md:border-b-0 lg:p-12 dark:border-slate-800 dark:bg-slate-900">
                    <h4 className="mb-8 flex items-center gap-3 text-[11px] font-black tracking-[0.2em] text-blue-600 uppercase">
                      <ShieldCheck size={18} strokeWidth={2.5} /> Core
                      Capabilities
                    </h4>
                    <ul className="space-y-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-4">
                          <CheckCircle2
                            size={12}
                            className="mt-1 shrink-0 text-blue-600"
                          />
                          <span className="font-thai text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative flex flex-col justify-between bg-slate-950 p-10 text-white lg:p-12">
                    <div className="relative z-10">
                      <h4 className="mb-8 flex items-center gap-3 text-[11px] font-black tracking-[0.2em] text-blue-400 uppercase">
                        <Activity size={18} strokeWidth={2.5} /> Strategic
                        Outcome
                      </h4>
                      <div className="mb-6 text-4xl font-black tracking-tighter uppercase lg:text-5xl">
                        {service.outcome}
                      </div>
                    </div>
                    <p className="font-thai relative z-10 text-[11px] text-slate-500 italic">
                      *
                      ปฏิบัติการภายใต้กรอบกฎหมายดิจิทัลและมาตรฐานความปลอดภัยสูงสุด
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <aside className="lg:sticky lg:top-32 lg:col-span-4">
              <div className="border-2 border-slate-950 bg-white p-8 shadow-[20px_20px_0px_0px_rgba(0,0,0,0.05)] dark:border-white dark:bg-slate-950">
                <div className="mb-8 flex items-center gap-3 bg-slate-50 px-4 py-3 dark:bg-slate-900">
                  <Lock size={16} className="text-blue-600" />
                  <span className="text-[9px] font-black tracking-[0.2em] uppercase">
                    Encrypted Data Handling
                  </span>
                </div>
                <h3 className="mb-4 text-2xl font-black tracking-tighter uppercase">
                  Initiate Inquiry
                </h3>
                <p className="font-thai mb-10 text-[14px] text-slate-500">
                  รับการวิเคราะห์เคสรายบุคคลภายใต้นโยบายรักษาความลับสูงสุด
                  (Strict NDA)
                </p>
                <Button
                  asChild
                  className="h-16 w-full rounded-none bg-blue-600 text-[11px] font-black tracking-[0.2em] uppercase transition-all hover:bg-slate-900 dark:hover:bg-white dark:hover:text-slate-950"
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-4"
                  >
                    Start Consultation <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  )
}
```

---

#### 🔍 Path: package.json

```json
{
  "name": "unlinkth",
  "version": "0.1.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "format": "prettier --write .",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {
    "@hookform/resolvers": "^4.0.0",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-dialog": "^1.1.5",
    "@radix-ui/react-label": "^2.1.1",
    "@radix-ui/react-select": "^2.1.4",
    "@radix-ui/react-separator": "^1.1.1",
    "@radix-ui/react-slot": "^1.1.1",
    "@radix-ui/react-switch": "^1.1.2",
    "@radix-ui/react-tooltip": "^1.1.6",
    "@supabase/ssr": "^0.5.2",
    "@supabase/supabase-js": "^2.47.10",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "date-fns": "^4.1.0",
    "framer-motion": "^12.24.11",
    "lucide-react": "^0.562.0",
    "next": "15.5.7",
    "next-themes": "^0.4.4",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-hook-form": "^7.54.2",
    "sonner": "^1.7.1",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.24.1",
    "zustand": "^5.0.3"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.0.0",
    "@types/node": "^22.10.5",
    "@types/react": "^19.0.4",
    "@types/react-dom": "^19.0.2",
    "eslint": "^9.17.0",
    "eslint-config-next": "16.1.1",
    "prettier": "^3.4.2",
    "prettier-plugin-tailwindcss": "^0.6.9",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.7.2"
  }
}
```

---

#### 🔍 Path: next.config.ts

```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* 1. การจัดการรูปภาพ (Image Optimization) */
  images: {
    formats: ['image/avif', 'image/webp'], // ใช้ฟอร์แมตสมัยใหม่เพื่อลดขนาดไฟล์ < 150KB
    deviceSizes: [640, 750, 828, 1080, 1200], // กำหนดขนาดรูปตามอุปกรณ์
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co', // รองรับรูปภาพ Case Study จาก Supabase Storage
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // รองรับรูปโปรไฟล์ Google (ถ้ามีระบบรีวิว)
      },
    ],
  },

  /* 2. ความปลอดภัย (Security Headers) */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY', // ป้องกันการถูกนำเว็บไปใส่ใน iframe (Clickjacking)
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', // ป้องกันการเดาประเภทไฟล์
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()', // ปิดการเข้าถึงฮาร์ดแวร์ที่ไม่จำเป็น
          },
        ],
      },
    ]
  },

  /* 3. ประสิทธิภาพและการตั้งค่า Build */
  experimental: {
    // ปรับปรุงการจัดการสแต็ก Server Actions
    serverActions: {
      bodySizeLimit: '2mb', // จำกัดขนาดการอัปโหลดไฟล์หลักฐาน (สลิป/รูปภาพแบล็กลิสต์)
    },
  },

  // ข้ามขั้นตอนการเช็คบางอย่างตอน Build เพื่อความรวดเร็ว (แต่ควรเช็คผ่าน CI/CD)
  typescript: {
    ignoreBuildErrors: false, // แนะนำให้เปิดไว้เป็น false เพื่อความเป๊ะของ Type
  },
  eslint: {
    ignoreDuringBuilds: true, // ช่วยให้ Deploy บน Vercel ได้เร็วขึ้น
  },

  /* 4. การจัดการ Redirects (ถ้ามี) */
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true, // ทำ SEO Redirect จากหน้า /home ไปที่ root
      },
    ]
  },

  // ปรับปรุงการทำงานของ Compiler
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // ลบ console.log ออกในโปรดักชัน
  },
}

export default nextConfig
```

---

#### 🔍 Path: lib/supabase.ts

```typescript
/** @format */

import { createClient } from '@supabase/supabase-js'
import { createBrowserClient } from '@supabase/ssr'
import { Database } from '@/types/database.types'

/**
 * [STRATEGY: SUPABASE INSTANCE MANAGEMENT]
 * - แยกการใช้งานระหว่าง Browser และ Server Environment
 * - ใช้ Type-safety จาก database.types.ts เพื่อป้องกัน Runtime Error
 */

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// 1. 🌐 Singleton Client สำหรับ Client-side Components (Standard)
// เหมาะสำหรับกรณีทั่วไปที่ไม่ได้ใช้ SSR แบบซับซ้อน
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

// 2. 🛡️ Browser Client สำหรับ Next.js Auth & SSR (@supabase/ssr)
// แนะนำให้ใช้ตัวนี้ใน "use client" components เพื่อให้รองรับ Cookie-based Auth
export const createClientComponentClient = () =>
  createBrowserClient<Database>(supabaseUrl, supabaseAnonKey)

/**
 * หมายเหตุ:
 * สำหรับ Server Components (app/(main)/services/page.tsx ฯลฯ)
 * ควรสร้างไฟล์แยกไว้ใน lib/supabase/server.ts
 * เนื่องจากต้องมีการจัดการ Cookies ที่ฝั่ง Server
 */
```

---

#### 🔍 Path: types/service.ts

```typescript
/** @format */

/**
 * [STRATEGY: TYPE DEFINITION ARCHITECTURE]
 * - ใช้ Interface เพื่อความชัดเจนในการขยายต่อ (Extensibility)
 * - รองรับระบบ Pricing แบบ Dynamic (Min-Max/Notes)
 * - เชื่อมโยงกับ Icon Map และ SEO Meta
 */

export interface ServicePrice {
  min: number
  max: number
  unit?: string // เช่น 'ต่อจุด', 'ต่อบัญชี'
  currency?: string // เช่น 'THB'
  note?: string // หมายเหตุเพิ่มเติมสำหรับเคสซับซ้อน
}

export interface ServiceItem {
  id: string // เช่น '01', '02' เพื่อใช้เรียงลำดับ
  slug: string // URL Path (e.g., 'name-risk-audit')
  iconName: string // ชื่อไอคอนสำหรับแมปกับ Lucide Icons
  title: string // ชื่อบริการหลัก
  subtitle: string // ชื่อภาษาอังกฤษหรือสโลแกนสั้นๆ
  tagline?: string // ประโยคสรุปความสำคัญของบริการ
  description: string // คำอธิบายรายละเอียดบริการ
  features: string[] // รายการสิ่งที่จะได้รับ
  outcome: string // ผลลัพธ์ที่คาดหวังได้
  suitableFor?: string[] // กลุ่มลูกค้าที่เหมาะสม
  price: ServicePrice
  popular?: boolean // แสดงป้ายแนะนำ (Recommended)
  caution?: string[] // ข้อควรระวังหรือขอบเขตที่ไม่ครอบคลุม
  updatedAt: string // ISO Date สำหรับ SEO และ Cache
}

/**
 * สำหรับหน้า Service Detail ที่ต้องการข้อมูลเข้มข้นขึ้น
 * สามารถสืบทอดจาก ServiceItem ได้
 */
export interface ServiceDetail extends ServiceItem {
  process?: {
    step: number
    title: string
    description: string
  }[]
  faqs?: {
    question: string
    answer: string
  }[]
}
```

---

#### 🔍 Path: .env

```text

```

---

## 📝 บทสรุป

การสแกนเสร็จสิ้น ข้อมูลถูกจัดรูปแบบให้ AI ประมวลผลได้ทันที
. Format code in: Optimized
