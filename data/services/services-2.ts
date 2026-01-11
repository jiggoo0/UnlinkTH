/** @format */

import type { ServiceItem } from '@/types/service'

/**
 * [STRATEGY: THE SERVICE ARCHITECTURE v2]
 * - Clarity: แยกแยะความแตกต่างระหว่าง Tier ด้วยผลลัพธ์ (Outcome)
 * - Trust: ใช้คำว่า "ประเมิน" และ "ติดตามผล" เพื่อสร้างความเชื่อมั่น
 * - Pricing: ระบุขอบเขตราคาชัดเจนเพื่อคัดกรองกลุ่มเป้าหมาย (High-intent leads)
 */

export const servicesGroupTwo: ServiceItem[] = [
  {
    id: '04',
    slug: 'basic-reputation-management',
    iconName: 'shield',
    title: 'จัดการชื่อเสียงขั้นพื้นฐาน',
    subtitle: 'Standard Reputation Care',
    tagline: 'สำหรับผู้ที่ต้องการล้างประวัติออนไลน์เพื่อโอกาสในอนาคต',
    description:
      'วิเคราะห์และจัดการ Digital Footprint เบื้องต้นที่อาจขัดขวางการรับสมัครงานหรือการทำธุรกรรมทั่วไป',
    features: [
      'Digital Footprint Audit (ตรวจสอบชื่อ-นามสกุล)',
      'จัดการแหล่งข้อมูลความเสี่ยงต่ำ 1-3 จุด',
      'Monitoring ติดตามผลหลังดำเนินการ 30 วัน',
      'Personal Risk Plan (คู่มือป้องกันข้อมูลรั่วไหล)',
    ],
    outcome: 'Profile Refined',
    price: {
      min: 9900,
      max: 14900,
      currency: 'THB',
    },
    popular: true,
    caution: ['เหมาะสำหรับข้อมูลที่ไม่ได้เป็นคดีความรุนแรง'],
    updatedAt: new Date().toISOString(),
  },
  {
    id: '05',
    slug: 'advanced-identity-management',
    iconName: 'lock',
    title: 'จัดการตัวตนระดับมืออาชีพ',
    subtitle: 'Professional Identity Control',
    tagline: 'ควบคุมภาพลักษณ์เชิงลึกบนหลายแพลตฟอร์มพร้อมกัน',
    description:
      'เหมาะสำหรับผู้ที่มีข้อมูลส่วนตัวกระจายอยู่เป็นจำนวนมาก และต้องการความเป็นส่วนตัวระดับสูงคืนมา',
    features: [
      'Multi-platform Risk Analysis (วิเคราะห์รอบด้าน)',
      'Priority-based Removal (จัดการตามความสำคัญ)',
      'Content Suppression (เทคนิคลดการมองเห็นข้อมูล)',
      'Privacy Guard Monitoring (60 วัน)',
    ],
    outcome: 'Identity Controlled',
    suitableFor: [
      'เจ้าของธุรกิจ',
      'บุคคลที่มีชื่อเสียง',
      'ครอบครัวที่ถูกคุกคามความเป็นส่วนตัว',
    ],
    price: {
      min: 19000,
      max: 35000,
      currency: 'THB',
    },
    updatedAt: new Date().toISOString(),
  },
  {
    id: '06',
    slug: 'high-risk-cases',
    iconName: 'shield-alert',
    title: 'เคสซับซ้อนและความเสี่ยงสูง',
    subtitle: 'High-Complexity Case Management',
    tagline: 'ประเมินและจัดการเคสที่มีความละเอียดอ่อนทางเทคนิคและกฎหมาย',
    description:
      'การจัดการข้อมูลที่เกี่ยวข้องกับประวัติความผิดพลาดในอดีต หรือข้อมูลที่ต้องใช้ขั้นตอนพิเศษจากทีมกฎหมายแพลตฟอร์ม',
    features: [
      'Deep-web Technical Audit (ประเมินเชิงลึก)',
      'Custom Strategy (แผนงานเฉพาะบุคคล)',
      'Direct Platform Liaison (ประสานงานทีมเทคนิค)',
      'Weekly Confidential Reporting',
    ],
    outcome: 'Risk Mitigated',
    price: {
      min: 49000,
      max: 0,
      note: 'ประเมินราคาตามความซับซ้อนรายเคสเท่านั้น',
      currency: 'THB',
    },
    caution: [
      'ต้องผ่านกระบวนการ Audit ก่อนรับงาน',
      'ดำเนินการภายใต้กรอบสิทธิ Digital Right เท่านั้น',
    ],
    updatedAt: new Date().toISOString(),
  },
]
