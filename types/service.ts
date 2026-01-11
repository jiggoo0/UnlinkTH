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
