/** @format */
import { Project } from '@/types/project'

export const case2: Project = {
  id: 'PJ-002',
  slug: 'identity-protection-cleansing',
  title: 'Identity Recovery: การจัดการข้อมูลแอบอ้างและบัญชีปลอม',
  category: 'Digital Identity / Reputation',
  description:
    'ดำเนินการระบุและจัดการข้อมูลที่มีการแอบอ้างตัวตน (Impersonation) เพื่อแยกตัวตนจริงออกจากข้อมูลเท็จ และหยุดยั้งความเสียหายต่อชื่อเสียงในระดับสาธารณะ',
  duration: '7 - 21 วัน',
  status: 'Completed',
  outcome:
    'บัญชีแอบอ้างถูกระงับการแสดงผลโดยสมบูรณ์ พร้อมกู้คืนบริบทตัวตนที่ถูกต้องให้กลับมาอยู่ภายใต้การควบคุมของเจ้าของข้อมูล',
  steps: [
    'Intelligence Scan: ตรวจสอบ Digital Footprint ทั้งหมดที่เข้าข่ายการละเมิดสิทธิ์และแอบอ้าง',
    'Policy Analysis: วิเคราะห์เงื่อนไขการละเมิดนโยบายของแพลตฟอร์มเพื่อหาช่องทางจัดการที่เร็วที่สุด',
    'Legal & Identity Verification: ยื่นเอกสารยืนยันสิทธิ์ความเป็นเจ้าของข้อมูลตามมาตรฐานสากล',
    'Resolution Execution: ประสานงานลบเนื้อหาและระงับบัญชีที่สร้างความเสียหายโดยตรง',
    'Official Presence Setup: วางรากฐานตัวตนหลักให้เข้มแข็งเพื่อป้องกันการแอบอ้างซ้ำในอนาคต',
  ],
  date: '2025-12-05',
  // เพิ่มข้อมูลภาพประกอบ (ถ้ามี)
  image: '/images/projects/case-identity-protection.jpg',
}
