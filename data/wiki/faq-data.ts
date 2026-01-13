/** @format */

import { WikiIconName } from './articles'

/**
 * [STRATEGY: SCALABLE FAQ ARCHITECTURE v3.0]
 * - Type Safety: ใช้ WikiIconName เพื่อให้รองรับ IconRegistry ส่วนกลาง
 * - Serialization: เก็บ iconName เป็น string เพื่อป้องกัน Error ใน Next.js Server Components
 * - Categories: เชื่อมโยงกับ Category ID ของ WikiArticles เพื่อความสอดคล้อง
 */

export interface WikiFAQ {
  readonly id: string
  readonly question: string
  readonly answer: string
  readonly category: 'legal' | 'technical' | 'orm' | 'privacy' | 'general'
  readonly iconName: WikiIconName
  readonly tags?: readonly string[]
}

export const wikiFAQs: readonly WikiFAQ[] = [
  {
    id: 'faq-1',
    category: 'legal',
    iconName: 'Scale',
    question: 'PDPA คืออะไร และคุ้มครองสิทธิอะไรเราบ้าง?',
    answer:
      'PDPA คือ พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล ซึ่งมอบสิทธิให้เราควบคุมข้อมูลตัวเองได้ เช่น สิทธิในการขอเข้าถึงข้อมูล, สิทธิในการขอให้ลบ (Right to Erasure), และสิทธิในการคัดค้านการเก็บข้อมูลที่ไม่จำเป็น',
    tags: ['PDPA', 'กฎหมาย'],
  },
  {
    id: 'faq-2',
    category: 'technical',
    iconName: 'ShieldCheck',
    question: 'ถ้าลบข้อมูลจากต้นทางแล้ว ทำไมยังเจอใน Google?',
    answer:
      'เป็นเพราะ Google ยังไม่ได้ทำการ "Re-index" หรืออัปเดตฐานข้อมูลใหม่ (Cache) วิธีแก้คือต้องใช้เครื่องมือ Outdated Content Removal ของ Google เพื่อเร่งการลบผลการค้นหาที่ล้าสมัยออกไป',
    tags: ['Google', 'De-indexing'],
  },
  {
    id: 'faq-3',
    category: 'orm',
    iconName: 'Zap',
    question: 'การจัดการชื่อเสียงออนไลน์ (ORM) ใช้เวลานานแค่ไหน?',
    answer:
      'โดยทั่วไปจะเห็นผลลัพธ์เบื้องต้นใน 2-4 สัปดาห์ แต่การกู้คืนชื่อเสียงอย่างสมบูรณ์อาจใช้เวลา 3-6 เดือน ขึ้นอยู่กับความรุนแรงของเนื้อหาลบและปริมาณเนื้อหาบวกที่เราสร้างขึ้นใหม่',
    tags: ['ORM', 'Reputation'],
  },
  {
    id: 'faq-4',
    category: 'privacy',
    iconName: 'Lock',
    question: 'Unlink รักษาความลับของลูกค้าอย่างไร?',
    answer:
      'เราใช้มาตรฐานการรักษาความลับระดับสูงสุด (Enterprise-grade NDA) ข้อมูลทุกอย่างจะถูกเก็บเป็นความลับและจะมีการทำลายทิ้งทันทีเมื่อสิ้นสุดกระบวนการทำงานตามที่ตกลงไว้',
    tags: ['Security', 'Privacy'],
  },
  {
    id: 'faq-5',
    category: 'general',
    iconName: 'RefreshCcw',
    question: 'คนทั่วไปสามารถแจ้งลบรูปภาพที่หลุดเองได้หรือไม่?',
    answer:
      'ได้ครับ โดยการแจ้ง Report ไปยังแพลตฟอร์มนั้นๆ โดยตรง แต่หากเป็นกรณีที่ซับซ้อนหรือแพลตฟอร์มไม่ดำเนินการให้ Unlink สามารถเข้ามาช่วยประสานงานในเชิงเทคนิคและกฎหมายได้',
    tags: ['Support', 'Images'],
  },
] as const
