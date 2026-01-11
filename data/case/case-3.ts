/** @format */
import { Project } from '@/types/project'

export const case3: Project = {
  id: 'PJ-003',
  slug: 'personal-data-privacy-recovery',
  title: 'Privacy Recovery: การจัดการข้อมูลส่วนบุคคลเพื่อโอกาสทางอาชีพ',
  category: 'Privacy / Reputation',
  description:
    'ดำเนินการลบและลดการมองเห็นข้อมูลในอดีตที่ส่งผลกระทบต่อการใช้ชีวิต เพื่อคืนสิทธิ์ความเป็นส่วนตัวและสร้างพื้นที่ปลอดภัยในการเริ่มต้นชีวิตดิจิทัลใหม่',
  duration: '30 - 45 วัน',
  status: 'Completed',
  outcome:
    'ดัชนีข้อมูลเชิงลบถูกถอดถอนออกจากระบบการค้นหาหลัก (De-indexed) ส่งผลให้ประวัติการสืบค้นกลับมาอยู่ในสภาวะปกติและพร้อมสำหรับการดำเนินธุรกิจหรือสมัครงาน',
  steps: [
    'Privacy Audit: ประเมินขอบเขตข้อมูลตามหลักสิทธิที่จะถูกลืม (Right to be Forgotten) และกฎหมายคุ้มครองข้อมูลส่วนบุคคล',
    'Impact Analysis: วิเคราะห์ความเชื่อมโยงของข้อมูลที่ส่งผลกระทบต่อความเชื่อมั่นในอาชีพและธุรกิจ',
    'De-indexing Execution: ยื่นคำร้องทางเทคนิคต่อ Search Engine เพื่อถอดถอนลิงก์ที่ละเมิดสิทธิ์ความเป็นส่วนตัว',
    'Deep Search Clearance: ติดตามและตรวจสอบช่องโหว่ของข้อมูลที่อาจหลงเหลือในระบบสืบค้นเชิงลึก',
    'Final Privacy Report: จัดทำรายงานสรุปสถานะความปลอดภัยของข้อมูลหลังเสร็จสิ้นกระบวนการรักษาความลับ',
  ],
  date: '2026-01-05',
  image: '/images/projects/case-privacy-recovery.jpg',
}
