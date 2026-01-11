/** @format */

import type { ServiceItem } from '@/types/service'

/**
 * [STRATEGY: THE ENTRY PROTOCOL]
 * - แนวคิด: "Professional Diagnosis before Surgery"
 * - การสื่อสาร: เน้นคำว่า "สิทธิ", "นโยบาย", และ "ตรวจสอบ"
 */

export const servicesGroupOne: ServiceItem[] = [
  {
    id: '01',
    slug: 'name-risk-audit',
    iconName: 'search',
    title: 'ตรวจสอบชื่อและข้อมูลที่กระทบชีวิต',
    subtitle: 'Digital Reputation Audit',
    tagline: 'วินิจฉัยสุขภาพชื่อเสียงดิจิทัลก่อนเริ่มการจัดการ',
    description:
      'ตรวจสอบความเชื่อมโยงของชื่อคุณบนโลกออนไลน์ วิเคราะห์แหล่งข้อมูลที่อาจเป็นอุปสรรคต่ออนาคต พร้อมประเมินความเป็นไปได้ในการจัดการอย่างตรงไปตรงมา',
    features: [
      'Comprehensive Deep Search (Surface & Deep Web)',
      'Individual Risk Assessment (รายงานวิเคราะห์ความเสี่ยง)',
      'Management Feasibility Study (สรุปทางเลือกที่ทำได้จริง)',
      'Data Privacy Recommendations (แนวทางป้องกันระยะยาว)',
    ],
    outcome: 'Risk Identified',
    price: {
      min: 1500,
      max: 3000,
      note: 'ค่าธรรมเนียมการวิเคราะห์เชิงลึกรายเคส',
      currency: 'THB',
    },
    caution: [
      'ขั้นตอนนี้ไม่มีการลบข้อมูล',
      'เพื่อใช้เป็นฐานข้อมูลในการตัดสินใจ',
    ],
    updatedAt: new Date().toISOString(),
  },
  {
    id: '02',
    slug: 'single-link-management',
    iconName: 'file-text',
    title: 'จัดการข้อมูลออนไลน์เฉพาะจุด',
    subtitle: 'Specific Link Removal Strategy',
    tagline: 'ลบข้อมูลหรือลิ้งก์ที่ผิดเงื่อนไขการใช้งานของแพลตฟอร์ม',
    description:
      'เน้นการจัดการข้อมูลเสียในรูปแบบ URL เฉพาะจุด เช่น ข่าวเก่าในอดีตหรือกระทู้ที่ละเมิดความเป็นส่วนตัว โดยใช้ช่องทางติดต่อฝ่ายกฎหมายของเว็บต้นทาง',
    features: [
      'URL Structure & Policy Analysis',
      'Right to be Forgotten Request (ยื่นคำร้องตามสิทธิ)',
      'Direct Liaison with Webmaster/Platform',
      'Removal Status Tracking (อัปเดตสถานะรายสัปดาห์)',
    ],
    outcome: 'Link Suppressed',
    suitableFor: ['เจ้าของธุรกิจ', 'ผู้ที่ถูกพาดพิงข้อมูลเก่า'],
    price: {
      min: 3500,
      max: 7500,
      unit: 'ต่อ URL',
      currency: 'THB',
    },
    updatedAt: new Date().toISOString(),
  },
  {
    id: '03',
    slug: 'impersonation-account',
    iconName: 'user-check',
    title: 'จัดการการแอบอ้างตัวตน',
    subtitle: 'Identity Theft Response',
    tagline: 'ทวงคืนอำนาจและปกป้องผู้ติดตามของคุณจากบัญชีปลอม',
    description:
      'ระบุและแจ้งลบบัญชีโซเชียลมีเดียที่แอบอ้างชื่อหรือภาพถ่ายของคุณ เพื่อป้องกันความเสียหายต่อชื่อเสียงและการหลอกลวงผู้อื่น',
    features: [
      'Identity Verification Protocol (ยืนยันตัวตนเจ้าของจริง)',
      'Platform Violation Reporting (แจ้งระงับบัญชีปลอม)',
      'Account Security Hardening (ตั้งค่าความปลอดภัยขั้นสูง)',
      'Persistent Takedown Monitoring (ติดตามผลจนกว่าจะปิด)',
    ],
    outcome: 'Identity Secured',
    price: {
      min: 5000,
      max: 9500,
      unit: 'ต่อแพลตฟอร์ม',
      currency: 'THB',
    },
    updatedAt: new Date().toISOString(),
  },
]
