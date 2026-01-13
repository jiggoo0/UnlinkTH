/** @format */

import {
  Scale,
  ShieldCheck,
  Zap,
  Lock,
  Fingerprint,
  RefreshCcw,
  EyeOff,
  Gavel,
  type LucideIcon,
} from 'lucide-react'

/**
 * [STRATEGY: TYPE DEFINITION ARCHITECTURE v5.3]
 * - Fix TS2339: เพิ่ม 'description' ใน wikiCategories เพื่อใช้ในหน้าหมวดหมู่
 * - Immutability: คงการใช้ 'as const' เพื่อความเข้มงวดของ Type
 */

export type WikiIconName =
  | 'Scale'
  | 'ShieldCheck'
  | 'Zap'
  | 'Lock'
  | 'Fingerprint'
  | 'RefreshCcw'
  | 'EyeOff'
  | 'Gavel'

export const IconRegistry: Record<WikiIconName, LucideIcon> = {
  Scale,
  ShieldCheck,
  Zap,
  Lock,
  Fingerprint,
  RefreshCcw,
  EyeOff,
  Gavel,
}

export interface WikiArticle {
  readonly id: string
  readonly slug: string
  readonly title: string
  readonly excerpt: string
  readonly content: string
  readonly category: string
  readonly author: string
  readonly date: string
  readonly readTime: string
  readonly iconName: WikiIconName
}

/**
 * [FIXED]: เพิ่มข้อมูล description สำหรับแต่ละหมวดหมู่
 * เพื่อแก้ปัญหา Property 'description' does not exist ในหน้า Category
 */
export const wikiCategories = [
  {
    id: 'legal',
    title: 'กฎหมายและสิทธิ PDPA',
    iconName: 'Scale',
    description:
      'รอบรู้เรื่องกฎหมายคุ้มครองข้อมูลส่วนบุคคล สิทธิพื้นฐานของคุณ และขั้นตอนการรักษาสิทธิ์ตามมาตรฐานกฎหมายไทย',
  },
  {
    id: 'technical',
    title: 'เทคนิคการลบข้อมูล',
    iconName: 'ShieldCheck',
    description:
      'เจาะลึกวิธีการลบข้อมูลออกจากระบบ Search Engine, โซเชียลมีเดีย และเทคนิคการจัดการร่องรอยดิจิทัลอย่างมืออาชีพ',
  },
] as const

export type WikiCategory = (typeof wikiCategories)[number]

export const allWikiArticles: readonly WikiArticle[] = [
  {
    id: 'w1',
    slug: 'pdpa-right-to-erasure',
    category: 'legal',
    title: 'สิทธิในการขอให้ลบข้อมูล (Right to Erasure) ตาม PDPA',
    excerpt:
      'ทำความเข้าใจกฎหมายที่คุณสามารถสั่งให้ผู้เก็บข้อมูลลบข้อมูลส่วนตัวของคุณได้...',
    author: 'ทีมกฎหมาย Unlink',
    date: '2026-01-05',
    readTime: 'อ่าน 10 นาที',
    iconName: 'Scale',
    content: `
      <p>สิทธิในการขอให้ลบหรือทำลายข้อมูลส่วนบุคคล (Right to Erasure) หรือที่เรียกว่า "Right to be Forgotten" เป็นหนึ่งในสิทธิพื้นฐานที่สำคัญที่สุดภายใต้กฎหมาย PDPA ของประเทศไทย</p>
      <h2>ใครบ้างที่มีสิทธิขอให้ลบ?</h2>
      <p>เจ้าของข้อมูลสามารถใช้สิทธินี้ได้ในกรณีที่ข้อมูลหมดความจำเป็นในการเก็บรักษา หรือมีการถอนความยินยอมในการประมวลผลข้อมูลนั้นๆ</p>
    `,
  },
  {
    id: 'w2',
    slug: 'google-de-indexing',
    category: 'technical',
    title: 'ขั้นตอนการแจ้งลบลิงก์ที่ล้าสมัยออกจาก Google',
    excerpt: 'คู่มือการส่งคำร้อง Outdated Content Removal อย่างถูกวิธี...',
    author: 'Technical SEO',
    date: '2026-01-10',
    readTime: 'อ่าน 15 นาที',
    iconName: 'ShieldCheck',
    content: `
      <p>การแจ้งลบลิงก์ (De-indexing) ช่วยให้ข้อมูลส่วนตัวที่ถูกลบออกจากต้นทางไปแล้ว ไม่ปรากฏอยู่ในผลการค้นหาของ Search Engine อีกต่อไป</p>
    `,
  },
] as const
