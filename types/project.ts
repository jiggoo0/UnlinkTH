/** @format */

export type ProjectStatus = 'In Progress' | 'Completed' | 'Monitoring'

export interface Project {
  id: string
  slug: string
  title: string
  category: string
  description: string
  duration: string
  status: ProjectStatus
  outcome: string
  tags: string[]
  image: string
  steps: string[]
  date: string
  /** * [ARCHITECT NOTE]
   * เพิ่มส่วนวิเคราะห์เชิงเทคนิคเพื่อรองรับการทำ SEO Schema
   * และสร้างความเชื่อมั่นในระดับ Expert Level
   */
  analysis?: {
    impactLevel: 'High' | 'Medium' | 'Low'
    methodology: string
    legalBasis: string // อ้างอิงข้อกฎหมาย เช่น PDPA Section 33
  }
}
