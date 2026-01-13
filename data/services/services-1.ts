/** @format */

import type { ServiceItem } from '@/types/service'

/**
 * [STRATEGY: THE ENTRY PROTOCOL v1.1]
 * - Added: Google De-indexing to resolve 404 routing error.
 */

export const servicesGroupOne: ServiceItem[] = [
  {
    id: 'SVC-AUDIT-01',
    slug: 'name-risk-audit',
    iconName: 'search',
    title: 'ตรวจสอบชื่อและข้อมูลที่กระทบชีวิต',
    subtitle: 'Digital Reputation Audit',
    tagline: 'วินิจฉัยสุขภาพชื่อเสียงดิจิทัลก่อนเริ่มการจัดการ',
    description:
      'ตรวจสอบความเชื่อมโยงของชื่อคุณบนโลกออนไลน์ วิเคราะห์แหล่งข้อมูลที่อาจเป็นอุปสรรคต่ออนาคต',
    features: [
      'Comprehensive Deep Search',
      'Individual Risk Assessment',
      'Management Feasibility Study',
    ],
    outcome: 'Risk Identified',
    price: { min: 1500, max: 3000, currency: 'THB' },
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'SVC-REMV-02',
    slug: 'google-de-indexing', // 🏛️ FIXED: เพิ่ม Slug เพื่อแก้ 404
    iconName: 'globe',
    title: 'นำข้อมูลออกจาก Google Search',
    subtitle: 'Search Engine De-indexing',
    tagline: 'ยุติการแสดงผลข้อมูลที่ละเมิดสิทธิบนผลการค้นหา',
    description:
      'ดำเนินการนำข้อมูลออกจากระบบการค้นหา (De-indexing) โดยใช้สิทธิ Right to be Forgotten ตามมาตรฐาน PDPA/GDPR',
    features: [
      'Google Search Console Request',
      'Removal of Outdated Content',
      'Cache & Snippet Cleansing',
    ],
    outcome: 'Search Results Suppressed',
    price: { min: 8500, max: 15000, unit: 'ต่อเคส', currency: 'THB' },
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'SVC-IDEN-03',
    slug: 'impersonation-account',
    iconName: 'user-check',
    title: 'จัดการการแอบอ้างตัวตน',
    subtitle: 'Identity Theft Response',
    tagline: 'ทวงคืนอำนาจและปกป้องชื่อเสียงจากบัญชีปลอม',
    description:
      'ระบุและแจ้งระงับบัญชีโซเชียลมีเดียที่แอบอ้างชื่อหรือภาพถ่ายของคุณ',
    features: [
      'Identity Verification Protocol',
      'Platform Violation Reporting',
      'Account Security Hardening',
    ],
    outcome: 'Identity Secured',
    price: { min: 5000, max: 9500, currency: 'THB' },
    updatedAt: new Date().toISOString(),
  },
]
