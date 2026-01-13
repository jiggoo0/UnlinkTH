/** @format */

import { WikiIconName } from './articles'

/**
 * [STRATEGY: LEGAL COMPLIANCE ARCHITECTURE v4.5]
 * - Structure: อ้างอิงโครงสร้างตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล (PDPA)
 * - Mapping: ใช้ 'section' เป็น Key หลักในการเชื่อมโยงกับบทความ Wiki
 * - Display: รองรับการแสดงผลแบบ "Legal Card" ที่มีระดับความสำคัญ (Priority)
 */

export interface LegalArticle {
  readonly id: string
  readonly section: string // มาตราที่อ้างอิง เช่น "Section 33"
  readonly title: string // ชื่อหัวข้อมาตรา
  readonly description: string // รายละเอียดโดยย่อ
  readonly fullText?: string // ตัวบทกฎหมายฉบับเต็ม
  readonly category: 'PDPA' | 'Cybercrime' | 'CivilCode'
  readonly iconName: WikiIconName
  readonly severity: 'low' | 'medium' | 'high' // ระดับความสำคัญ/โทษ
}

export const legalFrameworks: readonly LegalArticle[] = [
  {
    id: 'law-33',
    section: 'Section 33',
    category: 'PDPA',
    iconName: 'Scale',
    title: 'สิทธิในการขอให้ลบหรือทำลายข้อมูล',
    description:
      'เจ้าของข้อมูลมีสิทธิขอให้ผู้ควบคุมข้อมูลดำเนินการลบ หรือทำลาย หรือทำให้ข้อมูลส่วนบุคคลเป็นข้อมูลที่ไม่สามารถระบุตัวบุคคลได้',
    severity: 'high',
    fullText:
      'ในกรณีที่ผู้ควบคุมข้อมูลส่วนบุคคลประมวลผลข้อมูลโดยปราศจากฐานทางกฎหมาย หรือข้อมูลหมดความจำเป็น...',
  },
  {
    id: 'law-27',
    section: 'Section 27',
    category: 'PDPA',
    iconName: 'Lock',
    title: 'การห้ามมิให้ใช้หรือเปิดเผยข้อมูลโดยไม่ได้รับอนุญาต',
    description:
      'ห้ามมิให้ผู้ควบคุมข้อมูลส่วนบุคคลใช้หรือเปิดเผยข้อมูลส่วนบุคคล โดยปราศจากความยินยอมของเจ้าของข้อมูล',
    severity: 'high',
  },
  {
    id: 'cyber-14',
    section: 'Section 14',
    category: 'Cybercrime',
    iconName: 'Gavel',
    title: 'การนำเข้าข้อมูลเท็จสู่ระบบคอมพิวเตอร์',
    description:
      'การนำเข้าข้อมูลที่บิดเบือน หรือข้อมูลอันเป็นเท็จที่น่าจะเกิดความเสียหายแก่ประชาชน หรือความมั่นคง',
    severity: 'high',
  },
  {
    id: 'civil-420',
    section: 'Section 420',
    category: 'CivilCode',
    iconName: 'Scale',
    title: 'การทำละเมิดต่อผู้อื่น',
    description:
      'ผู้ใดจงใจหรือประมาทเลินเล่อ ทำต่อบุคคลอื่นโดยผิดกฎหมายให้เขาเสียหายถึงแก่ชีวิต ร่างกาย อนามัย หรือสิทธิอย่างใดอย่างหนึ่ง',
    severity: 'medium',
  },
  {
    id: 'law-30',
    section: 'Section 30',
    category: 'PDPA',
    iconName: 'Fingerprint',
    title: 'สิทธิในการขอเข้าถึงข้อมูลส่วนบุคคล',
    description:
      'เจ้าของข้อมูลมีสิทธิขอเข้าถึงและขอรับสำเนาข้อมูลส่วนบุคคลที่เกี่ยวกับตน ซึ่งอยู่ในความรับผิดชอบของผู้ควบคุมข้อมูล',
    severity: 'low',
  },
] as const
