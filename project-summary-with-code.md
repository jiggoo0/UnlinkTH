# 📑 รายงานสรุปโปรเจกต์และบริบท AI (Full Context)

_สร้างเมื่อ: 2026-01-13 07:47:53_

> **Status:** Fresh Scan | รวมข้อมูลวิเคราะห์ Route & Code

## 🔴 1. สถานะสุขภาพโปรเจกต์ล่าสุด

✅ **READY FOR DEPLOY** (ผ่านการตรวจสอบทุกขั้นตอน)

### 📍 Production Route Map

````text
```text
Route (app)                                         Size  First Load JS
┌ ○ /                                            6.02 kB         177 kB
├ ○ /_not-found                                    138 B         102 kB
├ ○ /about                                       5.42 kB         152 kB
├ ƒ /api/contact                                   138 B         102 kB
├ ƒ /api/line-notify                               138 B         102 kB
├ ƒ /api/send-mail                                 138 B         102 kB
├ ○ /cases                                       4.94 kB         159 kB
├ ● /cases/[slug]                                9.37 kB         121 kB
├   ├ /cases/financial-reputation-recovery
├   ├ /cases/second-chance-reputation-protocol
├   ├ /cases/personal-data-privacy-recovery
├   └ /cases/contextual-information-rebalancing
├ ○ /contact                                     4.32 kB         124 kB
├ ○ /faq                                         3.91 kB         161 kB
├ ○ /privacy                                     5.45 kB         145 kB
├ ○ /robots.txt                                    138 B         102 kB
├ ○ /services                                    3.15 kB         170 kB
├ ● /services/[slug]                             2.38 kB         152 kB
├   ├ /services/name-risk-audit
├   ├ /services/single-link-management
├   ├ /services/impersonation-account
├   └ [+3 more paths]
├ ○ /sitemap.xml                                   138 B         102 kB
└ ○ /terms                                       3.68 kB         105 kB
+ First Load JS shared by all                     101 kB
  ├ chunks/0044af8c-d6052738d8f188a8.js          54.2 kB
  ├ chunks/532-d98d5e620fcae01a.js               45.3 kB
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
      4 jpg
      1 webp
      1 txt
      1 svg
      1 ico
      1 html
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
  📄 googleb7d3dce206ee0fb0.html
  📂 images
    📄 grid-pattern.svg
    📄 og-main.jpg
    📂 projects
      📄 case-financial.jpg
      📄 case-privacy-recovery.jpg
      📄 case-second-chance.webp
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

`````markdown
📂 Master AI-Context: Online Reputation Management (ORM) Project 2026

1. Project Overview & Strategic Goals

- Project Name: Unlink TH
- Primary Goal: เสริมสร้างความเชื่อมั่น (Establishing Trust) และเปลี่ยนสถานะผู้เข้าชมที่กำลังเผชิญปัญหา "ข้อมูลเชิงลบในระบบดิจิทัล" ให้เป็นผู้รับคำปรึกษาผ่านกระบวนการที่เป็นมืออาชีพ
- Target Audience: \* Individuals: บุคคลที่ถูกละเมิดความเป็นส่วนตัว หรือต้องการโอกาสครั้งที่สอง (Second Chance) ในสังคม
  - Corporations: องค์กรที่ได้รับความเสียหายจากข้อมูลเท็จหรือการโจมตีทางไซเบอร์

2. Design Philosophy & UI/UX (Enterprise SaaS Standard)

- Core Style: Clean, Minimalist, Systematic และเน้นความน่าเชื่อถือระดับสถาบันการเงิน
- Visual Identity:
  - Color Palette: \* #0A192F (Navy Blue): สื่อถึงความมั่นคงและความเป็นมืออาชีพ
    - #0070F3 (Bright Blue): สื่อถึงความทันสมัยและนวัตกรรม
    - #10B981 (Green): สื่อถึงความปลอดภัยและความสำเร็จ
  - Components: การใช้ Card Design (Soft Shadows), ไอคอนเส้นบาง (Lucide React), และการแสดงผลด้วย Dashboards/Interactive Graphs เพื่อแสดงค่า Reputation Score
- Tech Stack: Next.js 15 (App Router), Tailwind CSS 4.0, Framer Motion (Smooth Transitions), Shadcn/UI

3. Tone, Voice & Anti-AI Content Strategy

- The Persona: "The Empathetic Expert" (ผู้เชี่ยวชาญที่เปี่ยมด้วยความเข้าใจและเห็นใจ)
- Tone Guidelines:
  - Empathetic: ใช้ภาษาที่ปลอบโยน ให้เกียรติ และไม่ตัดสิน (Non-judgmental)
  - Authoritative: อ้างอิงข้อกำหนดทางกฎหมายและเทคนิคเฉพาะทางอย่างแม่นยำ เช่น SEO Suppression, Right to be Forgotten, และ PDPA Compliance
- Anti-AI Pattern (Human-Centric Content): \* No Clichés: ห้ามใช้ประโยคซ้ำซากเช่น "In today's digital age..." หรือ "Reputation is everything..."
  - Hype-free: หลีกเลี่ยงคำโฆษณาที่เกินจริง (No Hyperbole)
  - Rhythmic Prose: ใช้โครงสร้างประโยคสั้น-ยาวสลับกันเพื่อสร้างจังหวะการอ่านที่เป็นธรรมชาติ
  - User-Centric: เน้นการสื่อสารโดยใช้คำว่า "คุณ" (Your future, Your privacy) เป็นหลัก

4. Information Architecture (Sitemap)

- Home: Hero Section (Outcome-driven), Trust Badges (Social Proof), Solution Grid, Process (4-Step Workflow)
- Services: แยกหมวดหมู่ชัดเจน (e.g., De-indexing Service, Review Management, Profile Protection)
- Case Studies: เน้น Success Stories โดยใช้ชื่อโปรเจกต์นามธรรมเพื่อรักษาความลับ (e.g., Case: Financial Reputation Recovery)
- Security & Privacy: เน้นย้ำนโยบาย Confidentiality 100% และการทำ NDA (Non-disclosure Agreement)

5. Technical Implementation & Conversion

- Form System: Multi-step Form (React Hook Form + Zod) เพื่อลด Cognitive Load ของลูกค้า
- Conversion Hooks: Sticky Navbar พร้อม CTA ที่เด่นชัด และ Floating Support Button (Line/WhatsApp)
- SEO Strategy: เน้น Semantic HTML และ Targeting Keywords เช่น "ลบประวัติเสียบน Google", "จัดการชื่อเสียงออนไลน์", "การใช้สิทธิถูกลืม"

6. Prompting Instructions for AI (Strict Compliance)
   6.1 For Content Creation

- "ให้ยึดหลัก Empathetic Expert Tone เสมอ ห้ามนำเสนอเนื้อหาที่ดูเป็นสแปมหรือสัญญาในสิ่งที่ผิดกฎหมาย"
- "เน้นการสื่อสารเรื่องการใช้สิทธิตามกฎหมายความเป็นส่วนตัวและเทคนิค SEO ขั้นสูง (White-hat techniques)"
  6.2 For Technical Development
- "ใช้ shadcn/ui และเน้นการเขียน Code ที่รองรับ Responsive Design เป็นอันดับแรก"
- "โค้ดต้องรองรับ Next.js Optimization (Image priority, Minimal client-side JS) เพื่อผลลัพธ์ Core Web Vitals ที่ดีเยี่ยม"

7. Psychological Triggers & Terminology

- Triggers: \* Security First: ใช้ Visual Cues เช่น ไอคอนแม่กุญแจ และข้อความ Encryption
  - Loss Aversion: ชี้ให้เห็นถึง Opportunity Cost หากไม่จัดการข้อมูลเชิงลบ
- Terminology Table:
  - Use: การบริหารจัดการชื่อเสียงดิจิทัล, การลดระดับการสืบค้น (De-indexing), การขอใช้สิทธิถูกลืม
  - Avoid: รับจ้างลบ, แฮ็กข้อมูล, ทางลัด, รับจ้างด่ากลับ
    ​8. High-Level Developer Protocol (Dev-to-Dev Mode)
    ​No Hand-holding: ไม่ต้องอธิบายพื้นฐาน (No beginner-level explanations) ให้ข้ามส่วนที่อธิบายว่า "Code นี้ทำงานอย่างไร" ในเชิงทฤษฎี แต่เน้นอธิบาย "Architectural Decisions" ว่าทำไมถึงเลือกใช้ Pattern นี้
    ​Production-Ready Standard: ทุกครั้งที่ส่ง Code ต้องเป็นระดับที่ Deploy ได้ทันที (Linted, Typed, Optimized) แม้จะเป็นการแก้ไขเพียงตัวอักษรเดียว (Single-character fix) ก็ต้องส่ง Code Block ที่สมบูรณ์กลับมาเสมอ
    ​Maximized Potential: ห้ามเขียนโค้ดแบบพื้นฐาน (Vanilla approach) หากมี Package ที่ติดตั้งอยู่ (เช่น Framer Motion, Zod, TanStack Query) ให้ดึงศักยภาพสูงสุดของ API เหล่านั้นมาใช้ เช่นการใช้ Compound Components, Custom Hooks หรือ Advanced Animations
    ​Error Correction & Feedback Loop: \* หาก Code ที่ได้รับ ไม่ตรงตามวัตถุประสงค์ (Out of Context) ให้ AI รับทราบและแก้ไขส่งกลับทันทีโดยไม่ต้องรอคำสั่งซ้ำ
    ​แจ้งรายละเอียดปัญหาที่เกิดขึ้น (Bug/Logic mismatch) ในรูปแบบ Technical Log สั้นๆ ก่อนเริ่มส่งโค้ดชุดใหม่
    ​Scalable Ideas: เสนอแนวทางที่ต่อยอดได้จริง (Scalable/Maintainable) เช่นการทำ Dynamic Slots หรือการรองรับ Multi-tenancy ในอนาคต
    ​9. Failure Handling & Instant Correction
    ​Conflict Resolution: หากมีการขัดกันระหว่าง UI Design และ Logic ให้ยึดความปลอดภัยของข้อมูล (Security/Privacy) และ Conversion Rate เป็นลำดับความสำคัญสูงสุด
    ​Code Quality Refusal: หาก AI พบว่าวิธีการที่ผู้ใช้เสนออาจทำให้ประสิทธิภาพลดลง (Sub-optimal) AI ต้องแย้งด้วยเหตุผลทางเทคนิคและเสนอทางเลือกที่ดีกว่าทันที```

---

#### 🔍 Path: pre-deploy-report.md

````markdown
# 🚀 Pre-deploy Inspection Report

Generated at: 2026-01-12 10:25:08
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
┌ ○ /                                            6.02 kB         177 kB
├ ○ /_not-found                                    138 B         102 kB
├ ○ /about                                       5.42 kB         152 kB
├ ƒ /api/contact                                   138 B         102 kB
├ ƒ /api/line-notify                               138 B         102 kB
├ ƒ /api/send-mail                                 138 B         102 kB
├ ○ /cases                                       4.94 kB         159 kB
├ ● /cases/[slug]                                9.37 kB         121 kB
├   ├ /cases/financial-reputation-recovery
├   ├ /cases/second-chance-reputation-protocol
├   ├ /cases/personal-data-privacy-recovery
├   └ /cases/contextual-information-rebalancing
├ ○ /contact                                     4.32 kB         124 kB
├ ○ /faq                                         3.91 kB         161 kB
├ ○ /privacy                                     5.45 kB         145 kB
├ ○ /robots.txt                                    138 B         102 kB
├ ○ /services                                    3.15 kB         170 kB
├ ● /services/[slug]                             2.38 kB         152 kB
├   ├ /services/name-risk-audit
├   ├ /services/single-link-management
├   ├ /services/impersonation-account
├   └ [+3 more paths]
├ ○ /sitemap.xml                                   138 B         102 kB
└ ○ /terms                                       3.68 kB         105 kB
+ First Load JS shared by all                     101 kB
  ├ chunks/0044af8c-d6052738d8f188a8.js          54.2 kB
  ├ chunks/532-d98d5e620fcae01a.js               45.3 kB
  └ other shared chunks (total)                  1.93 kB


○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
ƒ  (Dynamic)  server-rendered on demand
```
````
`````

```

---

## 🏆 Summary Result

### ✅ READY FOR DEPLOY

All protocols verified: Lint passed, Types safe, and Build successful. Deployment is highly recommended.

```

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
```

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
/** @format */

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* 1. การจัดการรูปภาพ (Image Optimization) */
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [375, 640, 750, 828, 1080, 1200], // เพิ่ม 375px สำหรับ Mobile LCP ที่เล็กลง
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
    minimumCacheTTL: 60, // เพิ่มการ Cache รูปภาพเพื่อลดภาระ Server
  },

  /* 2. ความปลอดภัย (Security Headers) */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin', // ปรับให้เข้มงวดขึ้นเพื่อรักษาความลับลูกค้า
          },
          {
            key: 'Permissions-Policy',
            value:
              'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'Content-Security-Policy', // ป้องกัน XSS เบื้องต้น
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: https:; font-src 'self' data:; connect-src 'self' https://*.supabase.co;",
          },
        ],
      },
    ]
  },

  /* 3. ประสิทธิภาพและการตั้งค่า Build */
  experimental: {
    // ปรับปรุงการจัดการ Bundle ขนาดเล็ก
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      '@radix-ui/react-icons',
      'clsx',
      'tailwind-merge',
    ],
    serverActions: {
      bodySizeLimit: '4mb', // ขยับเป็น 4mb สำหรับรูปภาพหลักฐานความละเอียดสูง
      allowedOrigins: ['unlinkth.com', '*.unlinkth.com'], // เพิ่มความปลอดภัยให้ Server Actions
    },
  },

  // มาตรฐานความปลอดภัยของ Code
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false, // แนะนำให้เป็น false เพื่อรักษามาตรฐาน Code Quality ของ Unlinkth
  },

  /* 4. การจัดการ Redirects */
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },

  /* 5. Compiler & Minification */
  compiler: {
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? {
            exclude: ['error', 'warn'], // เก็บ error/warn ไว้สำหรับ Debugging ใน Production
          }
        : false,
  },

  // เปิดใช้การบีบอัดไฟล์สูงสุด
  compress: true,

  // ปิดการแสดงผล Powered By Next.js เพื่อความปลอดภัย (Obscurity)
  poweredByHeader: false,

  // บังคับใช้ React Strict Mode เพื่อความเสถียรของ State
  reactStrictMode: true,
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
