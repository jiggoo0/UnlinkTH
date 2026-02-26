# 🖼️ Unlink-th: Visual Assets Production Guide

เอกสารฉบับนี้สรุปรายการภาพประกอบที่จำเป็นต้องมีเพื่อให้เว็บไซต์สมบูรณ์ตามมาตรฐาน Senior Architect โดยเน้นสไตล์ **Sophisticated Cyber-Intelligence**

## 🎨 Visual Style Guide

- **Primary Colors:** #b48c28 (Gold), #10b981 (Emerald Green), #020617 (Obsidian Black)
- **Concept:** "Dark to Bright" - การเปลี่ยนผ่านจากปัญหา (ความมืด) ไปสู่ทางออก (แสงสว่างและความสะอาด)
- **Elements:** Glassmorphism, Abstract Data Streams, 3D Metallic Textures, Macro Hardware.

---

## 🛠️ Section 1: Service Thumbnails (public/images/service/)

_ใช้สำหรับหน้า Services และ Service Card_

| Service Slug              | Filename                    | Prompt (English)                                                                                                                                                                                                                                         |
| :------------------------ | :-------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **digital-detox-jobbers** | `jobbers-clean.webp`        | A professional office desk with a transparent holographic screen showing social media posts being dissolved into clean data particles. High-end cinematic lighting, minimalist aesthetic, emerald green and gold accents. 8k resolution, photorealistic. |
| **ex-partner-eraser**     | `ex-eraser.webp`            | Abstract 3D representation of two glass-textured shapes being elegantly separated. Soft glowing light between them, deep obsidian background, representing "moving on" and "privacy". Minimalist, sophisticated.                                         |
| **crisis-cleanup**        | `crisis-radar.webp`         | A futuristic digital radar interface monitoring "red alerts" which are being turned into "green success" signals by a golden pulse. Cyber-intelligence operations room style, blurred background.                                                        |
| **blacklist-remover**     | `shield-id.webp`            | A metallic 3D shield protecting a translucent digital ID card. Floating golden particles, high-security atmosphere, sharp focus, cinematic dark mode.                                                                                                    |
| **sme-reputation-rescue** | `sme-rescue.webp`           | Macro shot of a glass trophy with five glowing golden stars inside. Reflection of a clean, modern store environment. Luxury retail aesthetic, crisp and professional.                                                                                    |
| **extreme-intervention**  | `extreme-intervention.webp` | A dark, intense close-up of a high-tech circuit board being struck by a powerful golden lightning bolt. Cinematic sparks, deep shadows, representing ultimate power and technical superiority.                                                           |

---

## 📁 Section 2: Case Study Featured Images (public/images/cases/)

_ใช้สำหรับหน้าบันทึกปฏิบัติการจริง (Case Studies)_

| Case Slug                              | Filename                  | Prompt (English)                                                                                                                                                                 |
| :------------------------------------- | :------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **remove-leaked-content-silent-angel** | `silent-angel.webp`       | An abstract 3D angel wing made of glowing fiber-optic cables, protecting a core of pure white light. Dark industrial background, high contrast, representing digital protection. |
| **online-drama-negotiation**           | `negotiation.webp`        | Two hands made of golden light shaking in a digital space filled with floating code and data. Elegant, calm, and professional atmosphere.                                        |
| **seo-push-negative-news**             | `seo-push.webp`           | A series of dark monoliths (news) being pushed down into the fog by bright, golden glowing pillars of information rising up. Epic scale, cinematic lighting.                     |
| **clear-blacklist-misunderstand**      | `clear-blacklist.webp`    | A fingerprint scanner interface turning from red "unauthorized" to green "verified" with a smooth glass texture. High-tech security aesthetic.                                   |
| **remove-defamation-post**             | `defamation-cleanup.webp` | A digital eraser scrubbing away dark, distorted text from a glowing holographic wall, revealing a clean, mirror-like surface behind it. High-tech, cinematic.                    |
| **remove-defamation-gambling-network** | `gambling-intervene.webp` | A complex web of dark, neon-lit connections being systematically severed by sharp emerald light beams. Cyber-security intervention style.                                        |

---

## 🏛️ Section 3: Static Pages & UI Assets (public/images/)

_ใช้สำหรับหน้าเนื้อหาหลักและส่วนต่างๆ ของ UI_

| Purpose                     | Filename                    | Prompt (English)                                                                                                                                                                                               |
| :-------------------------- | :-------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Hero Dualism**            | `og-main.png`               | A wide cinematic shot split in the middle: Left side is dark, glitchy, and chaotic data (The Past). Right side is organized, golden, and clean geometric structures (The Future). Professional branding style. |
| **About: Methodology**      | `methodology-abstract.webp` | Abstract 3D architecture of translucent glass blocks being built into a stable structure. Golden light illuminating the core, deep obsidian background. Represents "Architecting Trust".                       |
| **About: Operational Core** | `operational-core.webp`     | A high-tech laboratory server rack glowing with emerald and gold lights. Sleek, industrial, and highly advanced atmosphere. Depth of field, bokeh effects.                                                     |
| **Identity Monogram**       | `favicon.png`               | 3D Golden metallic monogram 'U' on a black marble texture, sharp edges, luxury finish.                                                                                                                         |

---

## 📄 Section 4: Blog Post Illustrations (public/images/blog/)

_ใช้สำหรับบทความให้ความรู้ (Educational Blog)_

| Blog Slug                        | Filename              | Prompt (English)                                                                                                                                                                                        |
| :------------------------------- | :-------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **dangers-of-digital-footprint** | `digital-ghost.webp`  | A shadowy silhouette of a person standing in front of a giant glowing search engine bar that is casting a distorted, glitchy shadow behind them. Cinematic, moody, representation of a "haunting past". |
| **sme-reputation-warfare**       | `sme-review-war.webp` | A stylized 3D map of a city block with one shop glowing bright gold while surrounded by dark, digital storm clouds representing negative reviews. High-tech defense atmosphere.                         |

---

## 📍 Instructions for Deployment

1. **Generation:** นำ Prompt ไปสร้างใน AI Image Generator (แนะนำ Midjourney `--ar 16:9` สำหรับ Cases/Blog และ `--ar 1:1` สำหรับ Services)
2. **Naming:** ตั้งชื่อไฟล์ตามคอลัมน์ `Filename` (ใช้นามสกุล `.webp` เพื่อ Performance)
3. **Placement:** นำภาพไปวางตาม Path ที่ระบุในหัวข้อ
4. **Implementation:** ตรวจสอบไฟล์ `.mdx` ใน `content/` และ `constants/services-data.ts` เพื่อให้แน่ใจว่าค่า `thumbnail` หรือ `featuredImage` ตรงกับชื่อไฟล์ที่สร้าง

## ✅ Asset Checklist & Sync Status

### Services (public/images/service/)

- [x] `jobbers-clean.webp` (Digital Detox)
- [x] `ex-eraser.webp` (Ex-Partner Eraser)
- [x] `crisis-radar.webp` (Crisis Clean-up)
- [x] `shield-id.webp` (Blacklist Remover)
- [x] `sme-rescue.webp` (SME Rescue)
- [x] `extreme-intervention.webp` (Extreme Intervention)

### Case Studies (public/images/cases/)

- [x] `silent-angel.webp` (Silent Angel Case)
- [x] `negotiation.webp` (Online Drama Case)
- [x] `seo-push.webp` (SEO Push Case)
- [x] `clear-blacklist.webp` (Misunderstood Case)
- [x] `defamation-cleanup.webp` (Defamation Case)
- [x] `gambling-intervene.webp` (Gambling Network Case)

### Blog (public/images/blog/)

- [x] `digital-ghost.webp` (Digital Footprint Blog)
- [x] `sme-review-war.webp` (SME Warfare Blog)
- [ ] `executive-reputation.webp` (High-Profile Defamation Blog)

### Static & Global (public/images/)

- [x] `og-main.png` (Main OG)
- [x] `methodology-abstract.webp` (About Page)
- [x] `operational-core.webp` (About Page)
- [x] `favicon.png` (Site Icon)

---

_Operational Protocol Note: All files must be optimized via WebP/AVIF before deployment._
