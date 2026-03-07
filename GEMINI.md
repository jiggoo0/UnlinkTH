# 👑 UNLINK-GLOBAL | SUPREME ENGINEERING BLUEPRINT (SEO & PERFORMANCE)

> **Mandate:** ไฟล์นี้คือ "เครื่องมือควบคุมคุณภาพ" สูงสุดสำหรับ AI ในการจัดการโปรเจกต์นี้ เพื่อให้ผ่านเกณฑ์ **Google Rich Results** และ **PageSpeed Insights** 90+ คะแนนเสมอ

---

## 🔍 [1] GOOGLE RICH RESULTS (SCHEMA.ORG) PROTOCOL

_AI ต้องตรวจสอบการตั้งค่า JSON-LD ทุกครั้งที่มีการสร้างหรือแก้ไขหน้าเนื้อหา_

### ✅ Mandatory Implementation

1. **Organization & WebSite:** ต้องทำงานผ่าน `<JsonLd />` ใน `RootLayout` (ติดตั้งแล้ว)
2. **Specific Schemas:**
   - **Blog:** ต้องมี `BlogPosting` (Headline, Date, Author, Publisher)
   - **Service:** ต้องมี `Service` (Type, Provider, Offers, AreaServed)
   - **Case Study:** ต้องมี `Article` และ `BreadcrumbList`
3. **Validation Routine:**
   - ห้ามมี "Property is missing" ในสิ่งที่ Google กำหนด (เช่น `image`, `author`)
   - ข้อมูล `sameAs` ต้องเชื่อมโยงกับ Official Social Media เสมอ

---

## 🚀 [2] PAGESPEED INSIGHTS (WEB VITALS) PROTOCOL

_AI ต้องรักษาระดับ Performance ของ Next.js 16 ให้อยู่ในระดับสูงสุด_

### ✅ Performance Constraints

1. **LCP (Largest Contentful Paint) < 2.5s:**
   - รูปภาพ "Above the Fold" (Hero Image) ต้องใส่ Prop `priority` เสมอ
   - ห้ามใช้ `next/image` โดยไม่กำหนด `width` และ `height` (ยกเว้นใช้ `fill`)
2. **CLS (Cumulative Layout Shift) = 0:**
   - กำหนดสัดส่วน (Aspect Ratio) ให้กล่องที่รอข้อมูล (Loading States)
   - ห้ามแทรก Content ใหม่เหนือ Content เดิมโดยไม่จองพื้นที่ไว้ก่อน
3. **INP (Interaction to Next Paint) < 200ms:**
   - หลีกเลี่ยงการใช้ `framer-motion` ในส่วนประกอบขนาดใหญ่ที่ไม่จำเป็น
   - ใช้ `optimizePackageImports` ใน `next.config.mjs` สำหรับ Library ภายนอก

---

## 🛠️ [3] AI ACTION CHECKLIST (PRECISION SETUP)

_ก่อนส่งงาน AI ต้องยืนยันรายการเหล่านี้ (Self-Audit)_

1. [ ] **Build Check:** รัน `npm run build` เพื่อตรวจสอบ Compile Error และ Bundle Size
2. [ ] **Metadata Scan:** ตรวจสอบ `generateMetadata` ว่ามีครบทั้ง `title`, `description` และ `openGraph`
3. [ ] **JSON-LD Integrity:** ตรวจสอบโครงสร้าง Schema ด้วย JSON-LD Component
4. [ ] **Font Display:** ใช้ `display: 'swap'` ใน Google Fonts เสมอเพื่อลด FOIT

---

## 🛡️ ENFORCED BY MASTER CONTROLLER

หาก AI รุ่นถัดไปตรวจพบว่าโค้ดที่เขียนขัดกับ Blueprint นี้ **ต้องทำการแก้ไขทันที** โดยไม่ต้องรอคำสั่งเพิ่มเติมจากผู้ใช้งาน
