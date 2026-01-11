/** @format */
import type { Project } from '@/types/project' // ต้องสร้างไฟล์ Type นี้เพื่อแก้ TS2339

export const case1: Project = {
  id: 'PJ-001',
  slug: 'financial-reputation-recovery',
  title: 'จัดการข้อมูลประวัติทางการเงินที่คลาดเคลื่อนบนระบบดิจิทัล',
  category: 'Reputation Management',
  description:
    'ดำเนินการบริหารจัดการข้อมูลประวัติทางการเงินในอดีตที่ได้รับการแก้ไขแล้ว แต่ยังคงปรากฏอยู่ในระบบการค้นหาหรือฐานข้อมูลสาธารณะ ซึ่งส่งผลกระทบต่อการพิจารณาสินเชื่อและการทำธุรกรรมทางธุรกิจ',
  duration: '14 - 30 วัน',
  status: 'Completed',
  outcome: 'Financial Trust Restored', // ปรับให้กระชับสำหรับแสดงผลบน Badge หรือ Card
  tags: ['Financial Risk', 'De-indexing', 'Privacy Rights'], // เพิ่มเพื่อความสวยงามใน UI
  image: '/images/projects/case-financial.jpg', // เพิ่ม Path รูปภาพ
  steps: [
    'ตรวจสอบและระบุแหล่งที่มาของข้อมูล (Data Source) ที่ส่งผลกระทบต่อชื่อเสียงทางการเงิน',
    'ประเมินสิทธิความเป็นส่วนตัวและรวบรวมหลักฐานเพื่อยืนยันสถานะปัจจุบัน',
    'ดำเนินการยื่นคำร้องตามนโยบาย Right to be Forgotten',
    'ประสานงานลบดัชนี (De-indexing) ข้อมูลที่ไม่อัปเดต',
    'ตรวจสอบผลการแสดงผลซ้ำในทุกช่องทางเพื่อให้มั่นใจว่าข้อมูลถูกควบคุมเบ็ดเสร็จ',
  ],
  date: '2025-11-12',
}
