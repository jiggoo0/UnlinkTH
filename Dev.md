🟢 กลุ่มที่ 1: Critical Logic & Exports (ต้องแก้เพื่อให้โปรเจกต์ Build ผ่าน)

- data/services/service-map.ts
  - Action: เพิ่ม export function getAllServiceSlugs() เพื่อให้ Dynamic Route เข้าถึงข้อมูลได้
  - Root Cause: ฟังก์ชันถูกเรียกใช้ใน [slug]/page.tsx แต่ไม่ได้ถูก Export ไว้
- app/(main)/services/[slug]/page.tsx
  - Action: ระบุ Type ให้พารามิเตอร์ (slug: string) ในฟังก์ชัน Map และเพิ่ม Prop badge ใน <SectionHeading /> ให้ครบถ้วน
- components/wiki/WikiHero.tsx
  - Action: แก้ไข Path การ Import Input จาก @/components/ui/button ให้เป็น @/components/ui/input
- types/wiki.ts
  - Action: ตรวจสอบและเพิ่ม tags?: string[] เข้าไปใน interface WikiArticle
  - Root Cause: มีการเรียกใช้ article.tags ในหน้า Wiki Detail แต่ใน Type Definition อาจจะตกหล่นไป
    🟡 กลุ่มที่ 2: Motion & Prop Validation (แก้ไขความผิดพลาดของ Library)
- components/home/HeroSection.tsx
  - Action: จัดการ Type ของ itemVariants โดยใช้ as const หรือ as Variants และแก้ไขการส่ง size prop ผ่าน cloneElement (เปลี่ยนเป็น Direct Component Injection)
  - Root Cause: Framer Motion 12 เข้มงวดกับ Type ของ Easing Array มากขึ้น
- components/service/ServiceCard.tsx & ServiceListRow.tsx
  - Action: แก้ไขการใช้ React.cloneElement ที่พยายามส่ง size: 32 ไปยัง Lucide Icon ให้เป็นรูปแบบที่ Type-safe
- components/shared/confidentiality-seal.tsx
  - Action: ตรวจสอบโครงสร้างไฟล์ว่ามีการ export default หรือ export const หรือไม่
  - Root Cause: TS แจ้งว่าไฟล์นี้ "is not a module" มักเกิดจากการลืมเขียนคำสั่ง Export
    🔵 กลุ่มที่ 3: Linting & Clean Code (เพื่อความสวยงามและมาตรฐาน SEO)
- app/(main)/about/page.tsx
  - Action: ลบ Unused Imports (เช่น ShieldCheck) และย้าย Comment ใน JSX (บรรทัด 257) เข้าไปอยู่ใน {/_ ... _/}
- app/(main)/[terms/privacy/wiki]/page.tsx (หลายไฟล์)
  - Action: ทำการ Clean-up Unused Icons ตามที่ ESLint แจ้งเตือน (เช่น Shield, Scale, Info)
    🛠️ Next Step Recommendations
    เพื่อให้งานเดินต่อได้อย่างรวดเร็ว ผมแนะนำให้เริ่มที่ กลุ่มที่
