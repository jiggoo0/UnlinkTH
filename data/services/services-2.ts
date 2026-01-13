/** @format */

import type { ServiceItem } from '@/types/service'

/**
 * [STRATEGY: THE SERVICE ARCHITECTURE v2.1]
 * - Taxonomy: ใช้ระบบ ID (SVC-PROF/SVC-ENTP) เพื่อการทำ Inventory Mapping
 * - Precision: เปลี่ยนคำจาก 'Delete' เป็น 'Suppression' และ 'Mitigation' เพื่อความถูกต้องทางเทคนิค
 * - Value Prop: เน้นที่ "โอกาสในอนาคต" และ "ความเป็นส่วนตัวที่ได้คืนมา"
 */

export const servicesGroupTwo: ServiceItem[] = [
  {
    id: 'SVC-PROF-04',
    slug: 'basic-reputation-management',
    iconName: 'shield',
    title: 'จัดการชื่อเสียงขั้นพื้นฐาน',
    subtitle: 'Standard Reputation Care',
    tagline: 'สำหรับผู้ที่ต้องการล้างประวัติออนไลน์เพื่อโอกาสในอนาคต',
    description:
      'วิเคราะห์และจัดการ Digital Footprint เบื้องต้นที่อาจขัดขวางการรับสมัครงานหรือการทำธุรกรรมทั่วไป โดยเน้นแหล่งข้อมูลความเสี่ยงต่ำ',
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
    caution: ['เหมาะสำหรับข้อมูลที่ไม่ได้เป็นคดีความรุนแรงหรือซับซ้อน'],
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'SVC-ADV-05',
    slug: 'advanced-identity-management',
    iconName: 'lock',
    title: 'จัดการตัวตนระดับมืออาชีพ',
    subtitle: 'Professional Identity Control',
    tagline: 'ควบคุมภาพลักษณ์เชิงลึกบนหลายแพลตฟอร์มพร้อมกัน',
    description:
      'เหมาะสำหรับผู้ที่มีข้อมูลส่วนตัวกระจายอยู่เป็นจำนวนมาก และต้องการใช้สิทธิ "Right to be Forgotten" เพื่อทวงคืนความเป็นส่วนตัวระดับสูง',
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
    id: 'SVC-ENTP-06',
    slug: 'high-risk-cases',
    iconName: 'shield-alert',
    title: 'เคสซับซ้อนและความเสี่ยงสูง',
    subtitle: 'High-Complexity Case Management',
    tagline: 'ประเมินและจัดการเคสที่มีความละเอียดอ่อนทางเทคนิคและกฎหมาย',
    description:
      'การจัดการข้อมูลที่เกี่ยวข้องกับประวัติในอดีตที่ซับซ้อน หรือข้อมูลที่ต้องใช้ขั้นตอนพิเศษและการยื่นคำร้องผ่านทีมกฎหมายของแพลตฟอร์มโดยตรง',
    features: [
      'Deep-web Technical Audit (ประเมินเชิงลึก)',
      'Custom Suppression Strategy (แผนงานเฉพาะบุคคล)',
      'Direct Platform Liaison (ประสานงานทีมเทคนิคแพลตฟอร์ม)',
      'Weekly Confidential Reporting (รายงานความลับระดับสูง)',
    ],
    outcome: 'Risk Mitigated',
    price: {
      min: 49000,
      max: 0,
      note: 'ประเมินราคาตามความซับซ้อนรายเคสเท่านั้น',
      currency: 'THB',
    },
    caution: [
      'ต้องผ่านกระบวนการ Audit ก่อนประเมินรับงาน',
      'ดำเนินการภายใต้กรอบสิทธิ Digital Right และ PDPA เท่านั้น',
    ],
    updatedAt: new Date().toISOString(),
  },
]
