เว็บไซต์ทางการของ **Unlink-TH** ผู้เชี่ยวชาญด้านการจัดการชื่อเสียงออนไลน์ (Online Reputation Management) และการนำข้อมูลออกจากระบบคอมพิวเตอร์ (De-indexing/Content Removal) 

[![Next.js 15](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind-4.0-blue?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

## 🚀 Tech Stack

- **Framework:** [Next.js 15.5](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Content Engine:** [MDX](https://mdxjs.com/) via `next-mdx-remote`
- **Database/Backend:** [Supabase](https://supabase.com/) (PostgreSQL + SSR Auth)
- **UI Components:** Shadcn/UI + Radix UI
- **Animations:** Framer Motion
- **Form Handling:** React Hook Form + Zod

## 🏗️ Architecture Overview

โปรเจกต์นี้ใช้สถาปัตยกรรม **Static Site Generation (SSG)** และ **Incremental Static Regeneration (ISR)** เพื่อประสิทธิภาพสูงสุดด้าน SEO และความเร็วในการโหลด (LCP)

### Core Layers:
1. **App Layer (`/app`):** จัดการ Routing, Server Components และ SEO Metadata
2. **Component Layer (`/components`):** - `ui/`: อะตอมมิกคอมโพเนนต์พื้นฐาน
   - `shared/`: คอมโพเนนต์ที่ใช้ร่วมกัน เช่น Navbar, Footer, CaseStudySection
   - `templates/`: โครงสร้างหน้ามาตรฐาน
3. **Data Layer (`/lib` & `/constants`):**
   - `lib/mdx.ts`: Content Engine สำหรับประมวลผลไฟล์ MDX
   - `lib/supabase/`: ระบบเชื่อมต่อฐานข้อมูลสำหรับการรับเรื่องติดต่อ (Contact Form)
4. **Content Layer (`/content`):** จัดเก็บ Case Studies ในรูปแบบ `.mdx`

## 🛠️ Getting Started

### Prerequisites
- Node.js 20.x หรือสูงกว่า
- pnpm 9.x หรือสูงกว่า

### Installation
```bash
# Clone the repository
git clone [https://github.com/jiggoo0/UnlinkTH.git](https://github.com/jiggoo0/UnlinkTH.git)

# Go to project directory
cd UnlinkTH

# Install dependencies
pnpm install

# Setup Environment Variables
cp .env.example .env.local

Environment Variables (.env.local)
กรุณาตั้งค่า Key จากโครงการ Supabase ของคุณ:
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

Development & Build
# Start development server
pnpm dev

# Production Build
pnpm build

# Type Check
pnpm type-check

📄 Content Management (MDX)
การเพิ่มกรณีศึกษา (Case Study) ใหม่:
 * สร้างไฟล์ใหม่ที่ content/cases/your-case-name.mdx
 * ใส่ Frontmatter ตามโครงสร้างนี้:
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
 * Dynamic Sitemap: เจนเนอเรตอัตโนมัติที่ /sitemap.xml ครอบคลุมทั้ง Static และ MDX Routes
 * Image Optimization: ใช้ Next.js Image พร้อม WebP/AVIF และกำหนดขนาด Priority สำหรับ LCP
 * Core Web Vitals: ออกแบบให้มีขนาด First Load JS ต่ำ (< 200kb)
📁 Directory Structure
├── app/              # Routes, Layouts, APIs
├── components/       # UI Components (Atomic & Shared)
├── content/          # MDX Case Studies
├── constants/        # Site Config & Static Data
├── lib/              # MDX Parser, Supabase, Utils
├── public/           # Assets (Images, WebP)
└── types/            # TypeScript Definitions

🛡️ License
Copyright © 2026 Unlink-TH. All rights reserved.
