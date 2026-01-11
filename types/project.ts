/** @format */

/**
 * [STRATEGY: RIGID DATA STRUCTURE v2.0]
 * - Authority: กำหนดสถานะโครงการให้ครอบคลุม Lifecycle จริง
 * - Precision: รองรับทั้งข้อมูลแบบ Static (Data files) และ Dynamic (Database)
 */

export type ProjectStatus =
  | 'Completed'
  | 'In Progress'
  | 'Pending'
  | 'On Hold'
  | 'Archived'

export interface Project {
  /** รหัสอ้างอิงภายใน (Internal Protocol ID) e.g., 'PJ-001' */
  id: string

  /** URL Slug สำหรับ Dynamic Routing */
  slug: string

  /** ชื่อโครงการ (Tactical Title) */
  title: string

  /** หมวดหมู่บริการ (e.g., Privacy, Reputation) */
  category: string

  /** คำอธิบายสรุปโครงการ (Executive Summary) */
  description: string

  /** ระยะเวลาดำเนินการรวม */
  duration: string

  /** สถานะการดำเนินงานปัจจุบัน */
  status: ProjectStatus

  /** ผลลัพธ์ที่เป็นรูปธรรม (Strategic Outcome) */
  outcome: string

  /** ขั้นตอนการปฏิบัติงาน (Operation Logs) */
  steps: string[]

  /** วันที่สำหรับการแสดงผล (ISO Format: YYYY-MM-DD) */
  date: string

  /** วันที่สร้างและอัปเดตสำหรับระบบ (Sitemap & Database) */
  createdAt?: string | Date
  updatedAt?: string | Date

  /** ข้อมูลเพิ่มเติม (Optional) */
  tags?: string[]

  /** Path รูปภาพประกอบหลัก (แนะนำ: 1200x630px สำหรับ OG) */
  image?: string

  /** บทสรุปสำหรับ SEO (ถ้าต่างจาก description) */
  metaDescription?: string
}
