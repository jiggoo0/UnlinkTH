/** @format */

import { WikiIconName } from './articles'

/**
 * [STRATEGY: KNOWLEDGE GRAPH v4.0]
 * - Schema: ออกแบบให้รองรับการทำ Hover Tooltips ในหน้าบทความ
 * - Categorization: แยกประเภทคำศัพท์ตามโดเมน (Legal, Technical, Privacy)
 * - Mapping: ใช้ term เป็น ID หลักเพื่อทำ O(1) Lookup ใน WikiService
 */

export interface GlossaryTerm {
  readonly id: string
  readonly term: string
  readonly definition: string
  readonly category: 'legal' | 'technical' | 'security' | 'general'
  readonly iconName: WikiIconName
  readonly relatedTerms?: readonly string[]
}

export const wikiGlossary: readonly GlossaryTerm[] = [
  {
    id: 'g1',
    term: 'Right to Erasure',
    definition:
      'สิทธิในการขอให้ผู้ควบคุมข้อมูลส่วนบุคคลลบหรือทำลายข้อมูลส่วนบุคคลของตน หรือทำให้ข้อมูลนั้นไม่สามารถระบุตัวบุคคลได้ เมื่อข้อมูลนั้นหมดความจำเป็น',
    category: 'legal',
    iconName: 'Scale',
    relatedTerms: ['PDPA', 'Right to be Forgotten'],
  },
  {
    id: 'g2',
    term: 'De-indexing',
    definition:
      'กระบวนการนำที่อยู่เว็บไซต์ (URL) ออกจากดัชนีของ Search Engine ทำให้ไม่ปรากฏผลลัพธ์เมื่อมีการค้นหาผ่านคีย์เวิร์ดที่เกี่ยวข้อง',
    category: 'technical',
    iconName: 'ShieldCheck',
    relatedTerms: ['Outdated Content', 'Cache'],
  },
  {
    id: 'g3',
    term: 'Digital Footprint',
    definition:
      'ร่องรอยกิจกรรมต่างๆ ที่ผู้ใช้งานทิ้งไว้บนโลกอินเทอร์เน็ต ทั้งที่ตั้งใจ (โพสต์, คอมเมนต์) และไม่ตั้งใจ (Log files, Cookies)',
    category: 'security',
    iconName: 'Fingerprint',
    relatedTerms: ['OSINT', 'Privacy'],
  },
  {
    id: 'g4',
    term: 'ORM',
    definition:
      'Online Reputation Management: กลยุทธ์การบริหารจัดการและควบควบคุมภาพลักษณ์ของบุคคลหรือองค์กรบนโลกออนไลน์',
    category: 'general',
    iconName: 'RefreshCcw',
    relatedTerms: ['Crisis Management', 'Branding'],
  },
  {
    id: 'g5',
    term: 'Doxing',
    definition:
      'การรวบรวมและนำข้อมูลส่วนตัวของผู้อื่นมาเผยแพร่ต่อสาธารณะโดยไม่ได้รับอนุญาต เพื่อวัตถุประสงค์ในการประจานหรือคุกคาม',
    category: 'security',
    iconName: 'EyeOff',
    relatedTerms: ['Cyberbullying', 'Privacy Leak'],
  },
  {
    id: 'g6',
    term: 'Data Controller',
    definition:
      'บุคคลหรือนิติบุคคลที่มีอำนาจหน้าที่ตัดสินใจเกี่ยวกับการเก็บรวบรวม ใช้ หรือเปิดเผยข้อมูลส่วนบุคคล',
    category: 'legal',
    iconName: 'Gavel',
    relatedTerms: ['Data Processor', 'PDPA'],
  },
] as const
