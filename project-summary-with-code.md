# 📑 รายงานสรุปโปรเจกต์และบริบท AI (Full Context)
_สร้างเมื่อ: 2026-01-14 04:28:29_
> **Status:** Fresh Scan | รวมข้อมูลวิเคราะห์ Route & Code

## 🔴 1. สถานะสุขภาพโปรเจกต์ล่าสุด
✅ **READY FOR DEPLOY** (ผ่านการตรวจสอบทุกขั้นตอน)

### 📍 Production Route Map
```text
```text
Route (app)                                         Size  First Load JS
┌ ○ /                                              11 kB         184 kB
├ ○ /_not-found                                    149 B         102 kB
├ ○ /about                                       8.87 kB         158 kB
├ ƒ /api/contact                                   149 B         102 kB
├ ƒ /api/line-notify                               149 B         102 kB
├ ƒ /api/send-mail                                 149 B         102 kB
├ ○ /cases                                       5.54 kB         165 kB
├ ● /cases/[slug]                                10.1 kB         122 kB
├   ├ /cases/financial-reputation-recovery
├   ├ /cases/second-chance-reputation-protocol
├   ├ /cases/personal-data-privacy-recovery
├   └ /cases/contextual-information-rebalancing
├ ○ /contact                                     8.32 kB         164 kB
├ ○ /faq                                         7.92 kB         169 kB
├ ○ /privacy                                     6.13 kB         145 kB
├ ○ /robots.txt                                    149 B         102 kB
├ ○ /services                                    6.46 kB         167 kB
├ ● /services/[slug]                             2.65 kB         152 kB
├   ├ /services/name-risk-audit
├   ├ /services/google-de-indexing
├   ├ /services/impersonation-account
├   └ [+3 more paths]
├ ○ /sitemap.xml                                   149 B         102 kB
├ ○ /terms                                       5.66 kB         145 kB
├ ○ /wiki                                          138 B         160 kB
├ ƒ /wiki/[slug]                                 7.41 kB         157 kB
└ ƒ /wiki/category/[slug]                          138 B         160 kB
+ First Load JS shared by all                     101 kB
  ├ chunks/0044af8c-4ea3504232728e76.js          54.2 kB
  ├ chunks/2532-c613ac8a761eb937.js              45.3 kB
  └ other shared chunks (total)                  1.93 kB
○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
ƒ  (Dynamic)  server-rendered on demand
```
```

## 📊 2. สถิติไฟล์แบ่งตามนามสกุล
```text
     73 tsx
     28 ts
      5 sh
      4 webp
      1 svg
      1 png
      1 jpg
      1 ico
      1 css
```

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
    📄 layout.tsx
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
  📂 (wiki-hub)
    📄 layout.tsx
    📂 wiki
      📂 [slug]
        📄 page.tsx
      📂 category
        📂 [slug]
          📄 page.tsx
      📄 page.tsx
      📄 layout.tsx
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
  📂 wiki
    📄 WikiLayout.tsx
    📄 WikiHero.tsx
    📄 WikiCard.tsx
    📄 WikiSidebar.tsx
    📄 WikiContent.tsx
    📄 WikiTableOfContents.tsx
    📄 WikiRelatedPosts.tsx
    📄 WikiBreadcrumbs.tsx
  📂 shared
    📄 trust-badge.tsx
    📄 StatsCounter.tsx
    📄 line-float.tsx
    📄 before-after-slider.tsx
    📄 theme-provider.tsx
    📄 grid-pattern.tsx
    📄 logo.tsx
    📄 whatsapp-float.tsx
    📄 confidentiality-seal.tsx
    📄 elements.tsx
    📄 section-heading.tsx
    📄 Footer.tsx
    📄 Navbar.tsx
    📄 legal-badge.tsx
    📄 confidentiality-banner.tsx
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
  📄 wiki.ts
📂 hooks
  📄 use-toast.tsx
📂 types
  📄 service.ts
  📄 database.types.ts
  📄 project.ts
  📄 wiki.ts
📂 scripts
  📄 clean-project.sh
  📂 dev
    📄 backup-project.sh
    📄 project-summary.sh
    📄 tree-projects.sh
  📄 pre-deploy-check.sh
📂 public
  📂 images
    📄 grid-pattern.svg
    📄 og-main.jpg
    📂 projects
      📄 case-rebalancing.webp
      📄 case-financial.webp
      📄 case-second-chance.webp
      📄 case-privacy-recovery.webp
    📄 noise.png
📂 data
  📂 case
    📄 case-1.ts
    📄 case-2.ts
    📄 case-3.ts
    📄 all-cases.ts
    📄 case-4.ts
  📂 services
    📄 all-services.ts
    📄 service-map.ts
    📄 services-1.ts
    📄 services-2.ts
  📂 wiki
    📄 articles.ts
    📄 faq-data.ts
    📄 glossary.ts
    📄 legal-framework.ts
```

## 📄 4. เนื้อหาโค้ดและบริบททางเทคนิค
#### 🔍 Path: ai-context.md
```markdown
​📂 Master AI-Context: Unlink TH Project 2026
​1. วิสัยทัศน์และเป้าหมายเชิงกลยุทธ์ (Strategic Goals)
​ชื่อโครงการ: Unlink TH
​พันธกิจหลัก: เปลี่ยน "ความกังวลจากข้อมูลเชิงลบ" ให้เป็น "ความมั่นใจด้วยกระบวนการมืออาชีพ" โดยมุ่งเน้นการสร้างสถาบันที่น่าเชื่อถือระดับสูง (Institutional Trust)
​กลุ่มเป้าหมาย: _ บุคคลธรรมดา: ผู้ที่ถูกละเมิดความเป็นส่วนตัว หรือต้องการโอกาสครั้งที่สองในสังคม
​องค์กร: ธุรกิจที่ได้รับความเสียหายจากข้อมูลเท็จหรือการถูกโจมตีทางไซเบอร์
​2. อัตลักษณ์และการออกแบบ (Design Philosophy - Enterprise SaaS)
​Core Style: Clean, Minimalist, Systematic และเน้นความน่าเชื่อถือระดับสถาบันการเงิน
​Visual Identity:
​Palette: Navy (#0A192F - ความมั่นคง), Bright Blue (#0070F3 - นวัตกรรม), Green (#10B981 - ความปลอดภัย)
​Components: การใช้ Card Design พร้อม Soft Shadows, ไอคอน Lucide React และ Interactive Dashboards เพื่อแสดงค่า Reputation Score
​Tech Stack: Next.js 15 (App Router), Tailwind CSS 4.0, Framer Motion, Shadcn/UI
​3. กลยุทธ์เนื้อหาและการสื่อสาร (Tone, Voice & Anti-AI)
​Persona: "The Empathetic Expert" — ผู้เชี่ยวชาญที่เปี่ยมด้วยความเข้าใจ ให้เกียรติ และไม่ตัดสิน
​Inclusive Content: _ เขียนให้เป็นมิตร เข้าถึงได้ทุกฐานระดับชั้นและทุกช่วงอายุในสังคมไทย
​ภาษาต้องสุภาพ เรียบง่ายแต่มีระดับ (Sophisticated Simplicity) ไม่ลดค่าเว็บไซต์จนดูเหมือนตลาดล่าง
​Anti-AI Pattern:
​ห้ามใช้ AI Clichés (เช่น "In today's digital age...")
​ใช้ Rhythmic Prose (ประโยคสั้น-ยาวสลับกัน) เพื่อความเป็นธรรมชาติ
​เน้นคำว่า "คุณ" (User-centric) เป็นหลัก
​4. สถาปัตยกรรมข้อมูลและระบบเทคนิค (Information & Technical)
​Sitemap: เน้น Hero Section ที่ขับเคลื่อนด้วยผลลัพธ์ (Outcome-driven), บริการแยกหมวดหมู่ชัดเจน (De-indexing, SEO Suppression), และเน้นความลับลูกค้า 100%
​Conversion Hooks: \* Multi-step Form (React Hook Form + Zod) เพื่อลดความล้าในการกรอกข้อมูล
​Sticky Navbar/Footer พร้อม CTA "ปรึกษาด่วน" ที่ปรากฏอยู่เสมอ
​เน้น Mobile First เนื่องจากผู้ใช้มักค้นหาปัญหาเร่งด่วนผ่านมือถือ
​SEO Strategy: ใช้ Semantic HTML และ Targeting Keywords ที่เน้นการใช้สิทธิตามกฎหมาย เช่น "การใช้สิทธิถูกลืม", "จัดการชื่อเสียงออนไลน์"
​5. ระเบียบปฏิบัติสำหรับการพัฒนา (Developer Protocol)
​Dev-to-Dev Mode: ไม่ต้องอธิบายพื้นฐาน เน้นอธิบายการตัดสินใจเชิงสถาปัตยกรรม (Architectural Decisions)
​Production-Ready: โค้ดต้องสมบูรณ์พร้อม Deploy, มี Type-safe, และ Optimized (Core Web Vitals)
​Security First: หากการออกแบบขัดกับความปลอดภัย ให้ยึดความปลอดภัยและความเป็นส่วนตัวของข้อมูลลูกค้าเป็นอันดับหนึ่งเสมอ
​6. ตารางการใช้คำ (Terminology Control)
​✅ ควรใช้: การบริหารจัดการชื่อเสียงดิจิทัล, การลดระดับการสืบค้น (De-indexing), การขอใช้สิทธิถูกลืม, ความเป็นส่วนตัว
​❌ ห้ามใช้: รับจ้างลบ, แฮ็กข้อมูล, ทางลัด, รับจ้างด่ากลับ 7. กลไกทางจิตวิทยาและคำนิยาม (Psychological Triggers & Terminology)
การสื่อสารต้องสร้างความรู้สึกปลอดภัยตั้งแต่แรกเห็น โดยใช้กลไกทางจิตวิทยาในการปรับทัศนคติของผู้ใช้งาน:

- Security First: ใช้ Visual Cues เช่น ไอคอนแม่กุญแจและข้อความยืนยันการเข้ารหัส (Encryption) เพื่อสร้างความอุ่นใจให้กับผู้ที่กำลังกังวลเรื่องความเป็นส่วนตัว
- Loss Aversion: ชี้ให้เห็นถึง "ต้นทุนของโอกาส" (Opportunity Cost) และผลกระทบในระยะยาวหากไม่จัดการข้อมูลเชิงลบในทันที
- Terminology Control:
  - ✅ ใช้: การบริหารจัดการชื่อเสียงดิจิทัล, การลดระดับการสืบค้น (De-indexing), การขอใช้สิทธิถูกลืม, การปกป้องข้อมูลส่วนบุคคล
  - ❌ หลีกเลี่ยง: รับจ้างลบ, แฮ็กข้อมูล, ทางลัด, รับจ้างด่ากลับ (เพื่อรักษามาตรฐานสถาบันมืออาชีพ)

8. ระเบียบปฏิบัติการพัฒนาระดับสูง (High-Level Developer Protocol)
   เน้นการทำงานแบบ Dev-to-Dev เพื่อประสิทธิภาพสูงสุดในระดับ Enterprise SaaS:

- No Hand-holding: ข้ามการอธิบายทฤษฎีพื้นฐาน แต่ให้เน้นอธิบายการตัดสินใจเชิงสถาปัตยกรรม (Architectural Decisions) ว่าทำไมถึงเลือกใช้ Pattern นั้นๆ
- Production-Ready Standard: โค้ดที่ส่งต้องอยู่ในระดับที่ Deploy ได้ทันที (Linted, Typed, Optimized) แม้จะเป็นการแก้ไขจุดเล็กน้อยก็ตาม
- Maximized Potential: ดึงศักยภาพสูงสุดของ Next.js 15 และ Library ที่มีอยู่ (Framer Motion, Zod, TanStack Query) มาใช้ เช่นการทำ Compound Components หรือ Advanced Animations
- Scalable Ideas: นำเสนอแนวทางที่รองรับการขยายตัวในอนาคต เช่น Dynamic Slots หรือโครงสร้างแบบ Multi-tenancy

9. การจัดการกรณีผิดพลาดและการแก้ไขทันที (Failure Handling & Correction)
   ระเบียบเมื่อเกิดข้อขัดแย้งหรือข้อผิดพลาดทางเทคนิค:

- Conflict Resolution: หากการออกแบบ UI และ Logic ขัดแย้งกัน ให้ยึดถือความปลอดภัยของข้อมูล (Security/Privacy) และอัตราการตอบรับ (Conversion Rate) เป็นลำดับความสำคัญสูงสุด
- Code Quality Refusal: หากแนวทางที่ได้รับอาจส่งผลเสียต่อ Performance (Sub-optimal) ผมจะโต้แย้งด้วยเหตุผลทางเทคนิคและเสนอทางเลือกที่ประสิทธิภาพสูงกว่าทันที
- Technical Feedback Loop: หากโค้ดไม่ตรงตามวัตถุประสงค์ ผมจะส่ง Technical Log สั้นๆ เพื่อระบุสาเหตุ (Bug/Logic mismatch) ก่อนส่งโค้ดชุดใหม่ที่สมบูรณ์

10. มาตรฐานการเข้าถึงและจุดเปลี่ยนใจผู้ใช้ (Inclusive Conversion Hooks)
    กลยุทธ์สุดท้ายเพื่อให้ผู้ใช้ตัดสินใจขอรับคำปรึกษา:

- Universal Simplicity: เนื้อหาต้องอ่านง่ายสำหรับคนทุกช่วงวัยและทุกฐานระดับชั้น ไม่ใช้คำศัพท์ที่แบ่งแยกสังคม แต่ใช้ภาษาที่ให้เกียรติและดูแพง (Sophisticated Simplicity)
- Privacy-First Form: ในหน้าฟอร์มติดต่อ (Multi-step Form) ต้องมีข้อความยืนยันความลับ: "เราไม่จัดเก็บข้อมูลส่วนบุคคลของคุณหากไม่มีการตกลงจ้างงาน"
- Always-Available Consultation: ติดตั้ง Sticky Navbar และ Footer พร้อมปุ่ม "ปรึกษาด่วน" ที่โดดเด่น เพื่อให้เข้าถึงความช่วยเหลือได้ในทุกหน้าที่เลื่อนผ่าน
- Mobile-First Optimization: ทุกหน้าต้องทำงานได้อย่างลื่นไหลบนมือถือ เพราะเป็นช่องทางหลักที่ผู้ใช้ที่กำลังเดือดร้อนมักใช้ค้นหาความช่วยเหลือ
```
---

#### 🔍 Path: pre-deploy-report.md
```markdown
# 🚀 Pre-deploy Inspection Report
Generated at: 2026-01-14 04:24:39
Branch: main

## 🔐 1. Environment Check
✅ Status: .env file exists and verified.
## 🛠️  2. Auto-Fix Procedure
✅ Status: Auto-fix completed or no issues found.
## 🧹 3. Code Linting (ESLint)
✅ Status: Linting passed.
## ⌨️ 4. Type Safety Check
✅ Status: TypeScript verified.
## 🏗️  5. Production Build Test
✅ Status: Build successfully optimized.
### 📊 Route Statistics & Bundle Size
```text
Route (app)                                         Size  First Load JS
┌ ○ /                                              11 kB         184 kB
├ ○ /_not-found                                    149 B         102 kB
├ ○ /about                                       8.87 kB         158 kB
├ ƒ /api/contact                                   149 B         102 kB
├ ƒ /api/line-notify                               149 B         102 kB
├ ƒ /api/send-mail                                 149 B         102 kB
├ ○ /cases                                       5.54 kB         165 kB
├ ● /cases/[slug]                                10.1 kB         122 kB
├   ├ /cases/financial-reputation-recovery
├   ├ /cases/second-chance-reputation-protocol
├   ├ /cases/personal-data-privacy-recovery
├   └ /cases/contextual-information-rebalancing
├ ○ /contact                                     8.32 kB         164 kB
├ ○ /faq                                         7.92 kB         169 kB
├ ○ /privacy                                     6.13 kB         145 kB
├ ○ /robots.txt                                    149 B         102 kB
├ ○ /services                                    6.46 kB         167 kB
├ ● /services/[slug]                             2.65 kB         152 kB
├   ├ /services/name-risk-audit
├   ├ /services/google-de-indexing
├   ├ /services/impersonation-account
├   └ [+3 more paths]
├ ○ /sitemap.xml                                   149 B         102 kB
├ ○ /terms                                       5.66 kB         145 kB
├ ○ /wiki                                          138 B         160 kB
├ ƒ /wiki/[slug]                                 7.41 kB         157 kB
└ ƒ /wiki/category/[slug]                          138 B         160 kB
+ First Load JS shared by all                     101 kB
  ├ chunks/0044af8c-4ea3504232728e76.js          54.2 kB
  ├ chunks/2532-c613ac8a761eb937.js              45.3 kB
  └ other shared chunks (total)                  1.93 kB


○  (Static)   prerendered as static content
●  (SSG)      prerendered as static HTML (uses generateStaticParams)
ƒ  (Dynamic)  server-rendered on demand

```

---
## 🏆 Summary Result
### ✅ READY FOR DEPLOY
All protocols verified: Lint passed, Types safe, and Build successful. Deployment is highly recommended.
```
---

#### 🔍 Path: app/globals.css
```css
/** @format */

@import 'tailwindcss';

/* * [STRATEGY: THE INTELLIGENCE CORE v5.0]
 * - Typeface: ผสาน Anuphan (Thai) เข้ากับระบบ Typography เพื่อแก้ปัญหาช่องไฟ (Line-height)
 * - Design System: ใช้ระบบ 8pt Grid ร่วมกับ Radius แบบ Squircle
 * - Visual: เพิ่ม 'Technical Overlays' สำหรับการแสดงผลแบบ High-end Institution
 */

@theme {
  /* 🏛️ Typography Hierarchy */
  --font-sans: 'Inter', 'Anuphan', ui-sans-serif, system-ui;
  --font-mono: 'JetBrains Mono', 'Roboto Mono', monospace;
  --font-thai: 'Anuphan', sans-serif;

  /* 🏛️ Border Radius System: Institutional Consistency */
  --radius-4xl: 3rem; /* 48px - สำหรับ Container ใหญ่พิเศษ */
  --radius-3xl: 2.5rem; /* 40px - สำหรับ Main Cards/Bunkers */
  --radius-2xl: 1.5rem; /* 24px - สำหรับ Inner Modules */
  --radius-xl: 1rem; /* 16px - สำหรับปุ่มหลัก/Input */
  --radius-lg: 0.75rem; /* 12px - สำหรับ Elements ขนาดเล็ก */

  /* 🏛️ Operational Animations: Machine-grade Precision */
  --animate-accordion-down: accordion-down 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  --animate-accordion-up: accordion-up 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  --animate-scanline: scanline 6s linear infinite;
  --animate-float: float 6s ease-in-out infinite;
  --animate-pulse-subtle: pulse-subtle 3s ease-in-out infinite;

  @keyframes scanline {
    from {
      transform: translateY(-100%);
      opacity: 0;
    }
    50% {
      opacity: 0.3;
    }
    to {
      transform: translateY(100%);
      opacity: 0;
    }
  }
  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }
  @keyframes pulse-subtle {
    0%,
    100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.85;
      transform: scale(0.98);
    }
  }

  /* 🛡️ Variable-to-Theme Mapping */
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-border: var(--border);
  --color-ring: var(--ring);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
}

@layer base {
  :root {
    /* 🏛️ Light Mode: Professional Gallery */
    --background: #ffffff;
    --foreground: #020617;
    --primary: #2563eb;
    --primary-foreground: #ffffff;
    --muted: #f8fafc;
    --muted-foreground: #64748b;
    --border: #f1f5f9;
    --input: #f1f5f9;
    --ring: rgba(37, 99, 235, 0.08);
  }

  .dark {
    /* 🏛️ Dark Mode: Deep Tactical Space */
    --background: #020617;
    --foreground: #f8fafc;
    --primary: #3b82f6;
    --primary-foreground: #ffffff;
    --muted: #0f172a;
    --muted-foreground: #94a3b8;
    --border: #1e293b;
    --input: #1e293b;
    --ring: rgba(59, 130, 246, 0.15);
  }
}

@layer base {
  * {
    @apply border-border transition-all duration-300 ease-out outline-none;
  }

  body {
    @apply bg-background text-foreground antialiased;
    font-feature-settings: 'cv11', 'ss01', 'tnum', 'case';
    scroll-behavior: smooth;
  }

  /* 🇹🇭 Thai Typography Optimization */
  .font-thai {
    @apply leading-[1.8] tracking-normal;
    text-underline-offset: 4px;
  }

  /* 🏛️ Heading System */
  h1,
  h2,
  h3,
  h4,
  h5 {
    @apply font-sans font-black tracking-tighter text-balance;
  }
}

@layer utilities {
  /* 🛡️ Strategic Layout Utils */
  .bg-tactical-grid {
    background-image: radial-gradient(
      circle,
      var(--border) 1px,
      transparent 1px
    );
    background-size: 40px 40px;
  }

  /* 🛡️ Glass-morphism v2: Institutional Grade */
  .glass-effect {
    @apply border border-white/10 backdrop-blur-2xl dark:border-white/5;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.01)
    );
  }

  /* 🛡️ Cyber Glow: Active state indicators */
  .glow-primary {
    filter: drop-shadow(0 0 20px rgba(37, 99, 235, 0.25));
  }

  /* 🛡️ Content Masks */
  .mask-fade-out {
    mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
  }
}

/* Custom Scrollbar: Minimalist Technical Style */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  @apply bg-transparent;
}
::-webkit-scrollbar-thumb {
  @apply rounded-full bg-slate-200 transition-colors hover:bg-blue-500/50 dark:bg-slate-800;
}
```
---

#### 🔍 Path: app/layout.tsx
```typescript
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
```
---

#### 🔍 Path: data/services/services-1.ts
```typescript
/** @format */

import type { ServiceItem } from '@/types/service'

/**
 * [STRATEGY: UNIVERSAL ACCESSIBILITY v1.3]
 * - Concept: "ภาษาบ้านๆ ที่น่าเชื่อถือ"
 * - Language: ลดคำศัพท์ภาษาอังกฤษและคำราชาศัพท์/วิชาการที่เข้าใจยาก
 * - Goal: ให้ทุกคนอ่านแล้วรู้ทันทีว่า "เราช่วยอะไร" และ "เขาจะได้อะไร"
 */

export const servicesGroupOne: ServiceItem[] = [
  {
    id: 'SVC-AUDIT-01',
    slug: 'name-risk-audit',
    iconName: 'search',
    title: 'บริการตรวจเช็กชื่อและประวัติออนไลน์',
    subtitle: 'Digital Reputation Audit',
    tagline: 'รู้ก่อนสาย... ว่าชื่อของคุณถูกเอาไปพูดถึงในทางไหนบนอินเทอร์เน็ต',
    description:
      'เราช่วยค้นหาข้อมูลทุกอย่างที่เกี่ยวกับชื่อของคุณในโลกออนไลน์ เพื่อดูว่ามีจุดไหนที่อาจทำให้คุณเสียชื่อเสียง เสียประวัติ หรือเป็นอุปสรรคต่อการสมัครงานและทำธุรกิจ',
    features: [
      'ค้นหาประวัติเชิงลึกทุกช่องทาง',
      'ประเมินความเสี่ยงรายบุคคล',
      'วางแผนวิธีแก้ไขแบบเข้าใจง่าย',
    ],
    outcome: 'สรุปผลตรวจเช็กและแนวทางแก้ไข',
    price: { min: 1500, max: 3000, currency: 'THB' },
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'SVC-REMV-02',
    slug: 'google-de-indexing',
    iconName: 'globe',
    title: 'บริการขอนำข้อมูลออกจากผลการค้นหา Google',
    subtitle: 'Search Engine De-indexing',
    tagline:
      'จัดการข้อมูลเก่า ข้อมูลที่ผิด หรือเรื่องที่ไม่อยากให้คนอื่นค้นเจอ',
    description:
      'หากคุณมีประวัติเก่า ข้อมูลที่หลุดออกมา หรือเรื่องราวในอดีตที่ไม่อยากให้ปรากฏเวลาคนเอาชื่อไปค้นใน Google เราช่วยดำเนินการแจ้งขอเอาข้อมูลนั้นออกอย่างถูกต้องตามกฎหมาย',
    features: [
      'ทำเรื่องแจ้ง Google อย่างมืออาชีพ',
      'ลดการมองเห็นข้อมูลที่ไม่ดี',
      'ล้างข้อมูลเก่าที่ยังค้างในระบบ',
    ],
    outcome: 'คนค้นหาชื่อคุณไม่เจอเรื่องแย่ๆ อีกต่อไป',
    price: { min: 8500, max: 15000, unit: 'ต่อเคส', currency: 'THB' },
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'SVC-IDEN-03',
    slug: 'impersonation-account',
    iconName: 'user-check',
    title: 'บริการจัดการเพจปลอม-เฟซบุ๊กปลอม',
    subtitle: 'Identity Theft Response',
    tagline: 'ป้องกันคนเอารูปหรือชื่อของคุณไปแอบอ้างทำเรื่องเสียหาย',
    description:
      'ช่วยจัดการและแจ้งปิดบัญชีโซเชียลมีเดียที่เอารูปภาพ หรือชื่อของคุณไปใช้โดยไม่ได้รับอนุญาต เพื่อไม่ให้คนอื่นเข้าใจผิดและป้องกันความเสียหายที่อาจเกิดขึ้นกับคุณ',
    features: [
      'แจ้งรายงานปิดบัญชีปลอมทุกช่องทาง',
      'ช่วยยืนยันตัวตนว่าเป็นตัวจริง',
      'แนะนำวิธีป้องกันไม่ให้โดนปลอมอีก',
    ],
    outcome: 'บัญชีปลอมถูกปิดถาวร',
    price: { min: 5000, max: 9500, currency: 'THB' },
    updatedAt: new Date().toISOString(),
  },
]
```
---

#### 🔍 Path: data/services/services-2.ts
```typescript
/** @format */

import type { ServiceItem } from '@/types/service'

/**
 * [STRATEGY: UNIVERSAL ACCESSIBILITY v2.2]
 * - Clarity: เปลี่ยน "Suppression/Mitigation" เป็นภาษาที่คนทั่วไปเข้าใจผลลัพธ์ได้ทันที
 * - Trust: เน้นย้ำเรื่อง "โอกาส" และ "ความเป็นส่วนตัว" ในภาษาที่เรียบง่าย
 * - Mapping: แบ่งระดับบริการตาม "ความหนักของปัญหา" เพื่อให้ลูกค้าเลือกถูกกลุ่ม
 */

export const servicesGroupTwo: ServiceItem[] = [
  {
    id: 'SVC-PROF-04',
    slug: 'basic-reputation-management',
    iconName: 'shield',
    title: 'บริการล้างประวัติออนไลน์ (ชุดเริ่มต้น)',
    subtitle: 'Standard Reputation Care',
    tagline: 'เหมาะสำหรับคนทั่วไปที่ต้องการ "เริ่มชีวิตใหม่" หรือสมัครงานใหม่',
    description:
      'ช่วยเคลียร์ข้อมูลเก่าๆ ในอินเทอร์เน็ตที่อาจดูไม่ดีเวลาสมัครงาน หรือทำธุรกรรมต่างๆ โดยเน้นจัดการข้อมูลพื้นฐานที่ส่งผลกระทบต่อภาพลักษณ์ของคุณ',
    features: [
      'ตรวจเช็กชื่อ-นามสกุล บนโลกออนไลน์ทั้งหมด',
      'ลบหรือแจ้งให้นำข้อมูลออก 1-3 จุดสำคัญ',
      'ติดตามผลต่อเนื่องนาน 30 วัน',
      'รับคู่มือ "วิธีป้องกันไม่ให้ข้อมูลหลุด" เฉพาะคุณ',
    ],
    outcome: 'ภาพลักษณ์ออนไลน์ดูสะอาดและน่าเชื่อถือขึ้น',
    price: {
      min: 9900,
      max: 14900,
      currency: 'THB',
    },
    popular: true,
    caution: ['เหมาะสำหรับข้อมูลทั่วไป ไม่ใช่คดีความรุนแรงหรือเรื่องซับซ้อน'],
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'SVC-ADV-05',
    slug: 'advanced-identity-management',
    iconName: 'lock',
    title: 'บริการจัดการตัวตนระดับมืออาชีพ',
    subtitle: 'Professional Identity Control',
    tagline:
      'ทวงคืนความเป็นส่วนตัวขั้นสูงสุด สำหรับคนที่มีข้อมูลหลุดกระจายหลายที่',
    description:
      'หากคุณมีเรื่องราวหรือข้อมูลส่วนตัวหลุดกระจายอยู่หลายเว็บไซต์ เราจะใช้ "สิทธิในการถูกลืม" เพื่อจัดการข้อมูลในระดับที่ลึกขึ้นและครอบคลุมหลายแพลตฟอร์มพร้อมกัน',
    features: [
      'วิเคราะห์จุดเสี่ยงรอบด้าน (ทั้งเว็บไทยและต่างประเทศ)',
      'เรียงลำดับความสำคัญในการจัดการ (จุดไหนเจ็บที่สุด ทำก่อน)',
      'ใช้เทคนิคพิเศษเพื่อลดการมองเห็นข้อมูลที่ไม่ดี',
      'ระบบเฝ้าระวังความปลอดภัยนาน 60 วัน',
    ],
    outcome: 'ควบคุมข้อมูลตัวเองได้สมบูรณ์แบบ',
    suitableFor: [
      'เจ้าของธุรกิจ / ผู้บริหาร',
      'บุคคลที่มีชื่อเสียง',
      'ครอบครัวที่ต้องการความเป็นส่วนตัวสูง',
    ],
    price: {
      min: 19000,
      max: 35000,
      currency: 'THB',
    },
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'SVC-ENTP-06',
    slug: 'high-risk-cases',
    iconName: 'shield-alert',
    title: 'บริการจัดการเคสยากและเคสความเสี่ยงสูง',
    subtitle: 'High-Complexity Case Management',
    tagline:
      'ดูแลเรื่องที่ละเอียดอ่อน ซับซ้อน และต้องใช้ทีมกฎหมายกับทีมเทคนิคควบคู่กัน',
    description:
      'สำหรับปัญหาที่มีความซับซ้อนสูงมาก เช่น ข้อมูลในอดีตที่เป็นคดีความหรือข่าวใหญ่ ซึ่งต้องมีการประสานงานกับทีมงานเบื้องหลังของแพลตฟอร์มโดยตรง',
    features: [
      'สืบค้นข้อมูลเชิงลึกในส่วนที่คนทั่วไปมองไม่เห็น',
      'วางแผนรับมือเฉพาะรายบุคคล (Case by Case)',
      'ประสานงานตรงกับฝ่ายเทคนิคของเว็บและแพลตฟอร์ม',
      'รายงานความคืบหน้าแบบลับสุดยอดทุกสัปดาห์',
    ],
    outcome: 'ลดความเสี่ยงและจำกัดความเสียหายได้ดีที่สุด',
    price: {
      min: 49000,
      max: 0,
      note: 'ประเมินราคาตามความยากของเคสเท่านั้น',
      currency: 'THB',
    },
    caution: [
      'ต้องตรวจเช็กข้อมูลก่อนเพื่อประเมินโอกาสสำเร็จ',
      'ทำภายใต้ขอบเขตกฎหมายและสิทธิส่วนบุคคลเท่านั้น',
    ],
    updatedAt: new Date().toISOString(),
  },
]
```
---

#### 🔍 Path: tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
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
    "@img/sharp-wasm32": "^0.34.5",
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
    "sharp": "^0.34.5",
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
 * [STRATEGY: TYPE DEFINITION ARCHITECTURE v5.1]
 * - Extensibility: ใช้ Interface เพื่อความชัดเจนในการขยายต่อ
 * - Semantic Alignment: เพิ่ม ServiceArticle เป็น Alias เพื่อรองรับ SEO Schema Helper
 * - Localization: รองรับหน่วยบริการภาษาไทย (Unit/Note)
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
 * [FIXED]: เพิ่ม Alias 'ServiceArticle' เพื่อให้ lib/seo/schema-helper.ts เรียกใช้งานได้
 * โดยอ้างอิงจากโครงสร้างข้อมูลที่เข้มข้นที่สุด
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

// 🏛️ Export Alias สำหรับการใช้งานใน Module อื่นๆ
export type Service = ServiceItem
export type ServiceArticle = ServiceDetail // แก้ปัญหา Error TS2724
```
---

#### 🔍 Path: types/wiki.ts
```typescript
/** @format */

/**
 * [STRATEGY: TYPE DEFINITION ARCHITECTURE v5.1]
 * - Clarity: กำหนดมาตรฐานข้อมูลสำหรับระบบ Knowledge Base
 * - Scalability: รองรับการขยายตัวของ Metadata เช่น Tags หรือระดับความลับ
 */

export type WikiCategoryIcon =
  | 'scale'
  | 'shield-check'
  | 'zap'
  | 'lock'
  | 'fingerprint'
  | 'library'

/**
 * 🏛️ Category Interface
 * นิยามของหมวดหมู่หลักในฐานข้อมูลข่าวกรอง
 */
export interface WikiCategory {
  id: string
  title: string
  description: string
  iconName: WikiCategoryIcon
  articleCount?: number
}

/**
 * 🏛️ Article Interface
 * โครงสร้างข้อมูลของบทความแต่ละชุด (Dossier Record)
 * FIXED: เพิ่มความยืดหยุ่นของ Content และระบุฟิลด์ Tags ให้ชัดเจน
 */
export interface WikiArticle {
  id: string
  slug: string
  title: string
  excerpt: string
  content?: string | React.ReactNode // รองรับทั้ง HTML string และ JSX สำหรับ Rich Content
  category: string // เชื่อมโยงกับ Category ID
  author: string
  date: string // ISO Format
  lastUpdated?: string
  readingTime?: string
  tags?: string[] // สำหรับระบบ Filter และ SEO
  isFeatured?: boolean // สำหรับแสดงในส่วนแนะนำ (Top Protocols)
}

/**
 * 🏛️ Search & Filter Types
 */
export interface WikiSearchParams {
  query?: string
  category?: string
  tag?: string
}

/**
 * 🏛️ Service Result Types
 */
export interface WikiServiceResponse {
  categories: WikiCategory[]
  featuredArticles: WikiArticle[]
  recentArticles: WikiArticle[]
}
```
---

#### 🔍 Path: lib/wiki.ts
```typescript
/** @format */

import {
  allWikiArticles,
  wikiCategories,
  type WikiArticle,
  type WikiCategory,
} from '@/data/wiki/articles'
import { wikiFAQs, type WikiFAQ } from '@/data/wiki/faq-data'
import { wikiGlossary, type GlossaryTerm } from '@/data/wiki/glossary'
import { legalFrameworks, type LegalArticle } from '@/data/wiki/legal-framework'

/**
 * [STRATEGY: IMMUTABLE DATA SERVICE v6.5]
 * - Fix: Ensuring Map initialization is robust for Next.js Server Components.
 * - Fix: Added safety check for 'content' to ensure it's never undefined.
 * - Performance: O(1) Access for Articles, Categories, and Glossary.
 */

// 🏛️ Private Data Indexing
const articleMap = new Map(
  allWikiArticles.map((a) => [a.slug.toLowerCase().trim(), a]),
)
const categoryMap = new Map(
  wikiCategories.map((c) => [c.id.toLowerCase().trim(), c]),
)
const glossaryMap = new Map(
  wikiGlossary.map((g) => [g.term.toLowerCase().trim(), g]),
)

export const WikiService = {
  // 🏛️ 1. Article Retrieval Services
  /**
   * ดึงบทความทั้งหมด หรือกรองตามหมวดหมู่
   */
  getAllArticles: (categoryId?: string): readonly WikiArticle[] => {
    if (!categoryId || categoryId === 'ทั้งหมด') return allWikiArticles
    return allWikiArticles.filter(
      (article) =>
        article.category.toLowerCase().trim() ===
        categoryId.toLowerCase().trim(),
    )
  },

  /**
   * ดึงบทความเดียวจาก Slug (รองรับ Case-insensitive และ Space trimming)
   */
  getArticleBySlug: (slug: string): WikiArticle | undefined => {
    if (!slug) return undefined
    // Normalize slug ก่อนค้นหา
    const normalizedSlug = decodeURIComponent(slug).toLowerCase().trim()
    return articleMap.get(normalizedSlug)
  },

  /**
   * ค้นหาบทความที่เกี่ยวข้องในหมวดหมู่เดียวกัน
   */
  getRelatedArticles: (
    currentSlug: string,
    limit = 3,
  ): readonly WikiArticle[] => {
    const current = WikiService.getArticleBySlug(currentSlug)
    if (!current) return []

    return allWikiArticles
      .filter(
        (a) =>
          a.category.toLowerCase() === current.category.toLowerCase() &&
          a.slug.toLowerCase() !== current.slug.toLowerCase(),
      )
      .slice(0, limit)
  },

  // 🏛️ 2. Category & Taxonomy Services
  getCategories: (): readonly WikiCategory[] => wikiCategories,

  getCategoryById: (id: string): WikiCategory | undefined => {
    if (!id) return undefined
    return categoryMap.get(id.toLowerCase().trim())
  },

  // 🏛️ 3. Intelligence Augmentation
  getGlossaryTerm: (termName: string): GlossaryTerm | undefined => {
    if (!termName) return undefined
    return glossaryMap.get(termName.toLowerCase().trim())
  },

  getLegalReferences: (sections: string[]): readonly LegalArticle[] => {
    const sectionSet = new Set(sections.map((s) => s.toLowerCase().trim()))
    return legalFrameworks.filter((framework) =>
      sectionSet.has(framework.section.toLowerCase().trim()),
    )
  },

  // 🏛️ 4. Knowledge Support
  getFaqsByCategory: (category: WikiFAQ['category']): readonly WikiFAQ[] => {
    return wikiFAQs.filter(
      (faq) =>
        faq.category.toLowerCase().trim() === category.toLowerCase().trim(),
    )
  },

  getRandomFaqs: (limit = 3): readonly WikiFAQ[] => {
    return [...wikiFAQs].sort(() => 0.5 - Math.random()).slice(0, limit)
  },

  // 🏛️ 5. Search & Internal Linking (Advanced Search Logic)
  searchArticles: (query: string): readonly WikiArticle[] => {
    const q = query.toLowerCase().trim()
    if (!q) return []
    return allWikiArticles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.content.toLowerCase().includes(q),
    )
  },

  suggestInternalLinks: (content: string): string[] => {
    if (!content) return []
    const words = content.toLowerCase()
    return Array.from(glossaryMap.keys()).filter((term) =>
      words.includes(term.toLowerCase()),
    )
  },
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
