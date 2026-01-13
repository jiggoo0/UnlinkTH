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
