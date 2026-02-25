เว็บไซต์ทางการของ **Unlink-TH** ผู้เชี่ยวชาญด้านการจัดการชื่อเสียงออนไลน์ (Online Reputation Management) และการนำข้อมูลออกจากระบบคอมพิวเตอร์ (De-indexing/Content Removal)

[![Next.js 15](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind-4.0-blue?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Content Engine:** [MDX](https://mdxjs.com/) via `next-mdx-remote`
- **UI Components:** Shadcn/UI + Radix UI
- **Animations:** Framer Motion

## 🏗️ Architecture Overview

โปรเจกต์นี้ใช้สถาปัตยกรรม **Static Site Generation (SSG)** และ **Incremental Static Regeneration (ISR)** เพื่อประสิทธิภาพสูงสุดด้าน SEO และความปลอดภัยระดับสูงสุด (Zero-Backend Policy)

### Core Layers:

1. **App Layer (`/app`):** จัดการ Routing, Server Components และ SEO Metadata
2. **Component Layer (`/components`):**
   - `ui/`: อะตอมมิกคอมโพเนนต์พื้นฐาน
   - `shared/`: คอมโพเนนต์ที่ใช้ร่วมกัน เช่น Navbar, Footer
   - `sections/`: ส่วนประกอบต่างๆ ของหน้า Landing Page
3. **Data Layer (`/lib` & `/constants`):**
   - `lib/services.ts` & `lib/case-studies.ts`: Content Engine สำหรับประมวลผลไฟล์ MDX
4. **Content Layer (`/content`):** จัดเก็บ Case Studies และ Service Details ในรูปแบบ `.mdx`

## 🛠️ Getting Started

### Prerequisites

- Node.js 20.x หรือสูงกว่า
- pnpm 9.x หรือสูงกว่า

### Installation

```bash
# Clone the repository
git clone https://github.com/jiggoo0/UnlinkTH.git

# Go to project directory
cd UnlinkTH

# Install dependencies
pnpm install

# Development
pnpm dev

# Production Build
pnpm build
```

🛡️ Policy & Security

- **No Backend:** ระบบไม่มีฐานข้อมูลและไม่มีการเก็บข้อมูลผู้ใช้บน Server
- **No Form Submission:** ไม่มีการส่งข้อมูลผ่านหน้าเว็บเพื่อความปลอดภัยสูงสุด
- **LINE-only Communication:** การปรึกษาและส่งข้อมูลทำผ่าน LINE Official (End-to-End Encryption) เท่านั้น

📄 Content Management (MDX)
การเพิ่มกรณีศึกษา (Case Study) ใหม่:

- สร้างไฟล์ใหม่ที่ content/cases/your-case-name.mdx
- ใส่ Frontmatter ตามโครงสร้างนี้:
<!-- end list -->

---

title: "หัวข้อกรณีศึกษา"
summary: "คำอธิบายย่อสำหรับการแสดงผลบนหน้าแรก"
category: "SEO Push"
date: "2026-01-16"
featuredImage: "/images/cases/your-image.webp"

---

# เนื้อหาบทความ

คุณสามารถเขียน Markdown ได้ที่นี่...

🔍 SEO & Performance

- Dynamic Sitemap: เจนเนอเรตอัตโนมัติที่ /sitemap.xml ครอบคลุมทั้ง Static และ MDX Routes
- Image Optimization: ใช้ Next.js Image พร้อม WebP/AVIF และกำหนดขนาด Priority สำหรับ LCP
- Core Web Vitals: ออกแบบให้มีขนาด First Load JS ต่ำ (< 200kb)
  📁 Directory Structure
  ├── app/ # Routes, Layouts, APIs
  ├── components/ # UI Components (Atomic & Shared)
  ├── content/ # MDX Case Studies
  ├── constants/ # Site Config & Static Data
  ├── lib/ # MDX Parser, Supabase, Utils
  ├── public/ # Assets (Images, WebP)
  └── types/ # TypeScript Definitions

🛡️ License
Copyright © 2026 Unlink-TH. All rights reserved.

```

```
