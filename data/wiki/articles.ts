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
 * [STRATEGY: ZERO-WARNING DATA ARCHITECTURE v4.5]
 * - Fix: Converted iconName (string) to icon (LucideIcon) to resolve 48+ lint warnings.
 * - Performance: Applied 'readonly' for static data integrity.
 */

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
  readonly icon: LucideIcon // เปลี่ยนจาก string เป็น Component
}

export interface WikiCategory {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly icon: LucideIcon // เปลี่ยนจาก string เป็น Component
}

export const wikiCategories: readonly WikiCategory[] = [
  {
    id: 'legal',
    title: 'กฎหมายและสิทธิ PDPA',
    description:
      'สิทธิพื้นฐานที่คุณควรรู้เกี่ยวกับการคุ้มครองข้อมูลส่วนบุคคลในไทย',
    icon: Scale,
  },
  {
    id: 'technical',
    title: 'เทคนิคการลบข้อมูล',
    description: 'ขั้นตอนการนำข้อมูลและรูปภาพออกจากระบบการค้นหาอย่างถูกวิธี',
    icon: ShieldCheck,
  },
  {
    id: 'orm',
    title: 'การกู้คืนชื่อเสียงออนไลน์',
    description: 'วิธีรับมือและสร้างภาพลักษณ์ใหม่เมื่อถูกโจมตีทางอินเทอร์เน็ต',
    icon: Zap,
  },
  {
    id: 'privacy',
    title: 'การป้องกันความเป็นส่วนตัว',
    description:
      'มาตรการรักษาความลับและป้องกันข้อมูลรั่วไหลสำหรับบุคคลและองค์กร',
    icon: Lock,
  },
] as const

export const allWikiArticles: readonly WikiArticle[] = [
  {
    id: 'w1',
    slug: 'pdpa-right-to-erasure',
    category: 'legal',
    title: 'สิทธิในการขอให้ลบหรือทำลายข้อมูล (Right to Erasure) ตาม PDPA',
    excerpt:
      'ทำความเข้าใจกฎหมายที่คุณสามารถสั่งให้ผู้เก็บข้อมูลลบข้อมูลส่วนตัวของคุณได้...',
    author: 'ทีมกฎหมาย Unlink',
    date: '2026-01-05',
    readTime: 'อ่าน 10 นาที',
    icon: Scale,
    content: `สิทธิในการขอให้ลบหรือทำลายข้อมูลส่วนบุคคล...`,
  },
  {
    id: 'w2',
    slug: 'legal-action-against-defamation',
    category: 'legal',
    title: 'การใช้กฎหมายรับมือการหมิ่นประมาททางออนไลน์ในยุค 2026',
    excerpt: 'ขั้นตอนการรวบรวมหลักฐานดิจิทัลเพื่อดำเนินคดีหมิ่นประมาท...',
    author: 'Digital Litigator',
    date: '2026-01-07',
    readTime: 'อ่าน 12 นาที',
    icon: Gavel,
    content: `การหมิ่นประมาทบนโลกออนไลน์ไม่ใช่เรื่องเล่นๆ...`,
  },
  {
    id: 'w3',
    slug: 'google-de-indexing-process',
    category: 'technical',
    title: 'ขั้นตอนการแจ้งลบลิงก์ที่ล้าสมัยออกจากผลการค้นหา Google',
    excerpt: 'คู่มือเชิงลึกการส่งคำร้อง Outdated Content Removal...',
    author: 'Technical SEO Specialist',
    date: '2026-01-10',
    readTime: 'อ่าน 15 นาที',
    icon: ShieldCheck,
    content: `การ De-indexing คือกระบวนการที่ทำให้ Search Engine...`,
  },
  {
    id: 'w4',
    slug: 'remove-private-images-from-web',
    category: 'technical',
    title: 'วิธีลบรูปภาพส่วนตัวและข้อมูลส่วนตัวที่หลุดสู่สาธารณะ',
    excerpt:
      'เมื่อรูปภาพที่คุณไม่ต้องการให้ใครเห็นหลุดออกไป มีขั้นตอนอย่างไร...',
    author: 'Cyber Security Lead',
    date: '2026-01-12',
    readTime: 'อ่าน 8 นาที',
    icon: EyeOff,
    content: `ความเสี่ยงจากการถูก Doxing หรือรูปหลุดส่วนตัว...`,
  },
  {
    id: 'w5',
    slug: 'orm-strategy-for-executives',
    category: 'orm',
    title: 'ยุทธศาสตร์ ORM: การกู้คืนชื่อเสียงดิจิทัลสำหรับผู้บริหารและแบรนด์',
    excerpt:
      'ทำไมการลบข้อมูลอย่างเดียวไม่พอ? เรียนรู้การสร้างเนื้อหาเชิงบวก...',
    author: 'Brand Strategist',
    date: '2026-01-13',
    readTime: 'อ่าน 20 นาที',
    icon: RefreshCcw,
    content: `Online Reputation Management (ORM) คือศิลปะของการควบคุม...`,
  },
  {
    id: 'w6',
    slug: 'handling-negative-viral-content',
    category: 'orm',
    title: 'รับมือวิกฤตไวรัล: เปลี่ยนกระแสลบให้กลายเป็นโอกาส',
    excerpt: '5 ขั้นตอนในการหยุดยั้งข่าวปลอมและกระแสไวรัล...',
    author: 'Crisis Manager',
    date: '2026-01-14',
    readTime: 'อ่าน 11 นาที',
    icon: Zap,
    content: `เมื่อข่าวลบกลายเป็นไวรัล ความเงียบอาจไม่ใช่คำตอบที่ดีที่สุดเสมอไป...`,
  },
  {
    id: 'w7',
    slug: 'prevent-data-leakage-2026',
    category: 'privacy',
    title: 'มาตรการป้องกันข้อมูลรั่วไหลสำหรับบุคคลสำคัญ (VIP Privacy)',
    excerpt:
      'การตั้งค่าความเป็นส่วนตัวขั้นสูงและการใช้อุปกรณ์สื่อสารที่ปลอดภัย...',
    author: 'Privacy Consultant',
    date: '2026-01-11',
    readTime: 'อ่าน 14 นาที',
    icon: Lock,
    content: `ความเป็นส่วนตัวคือความหรูหราใหม่ในยุคดิจิทัล...`,
  },
  {
    id: 'w8',
    slug: 'digital-footprint-audit',
    category: 'privacy',
    title: 'การตรวจสอบร่องรอยดิจิทัล: คุณทิ้งอะไรไว้บนอินเทอร์เน็ตบ้าง?',
    excerpt:
      'คู่มือการตรวจสอบตัวเองบนอินเทอร์เน็ตและวิธีกำจัดข้อมูลค้างเก่า...',
    author: 'OSINT Expert',
    date: '2026-01-15',
    readTime: 'อ่าน 10 นาที',
    icon: Fingerprint,
    content: `คุณอาจลืมไปแล้วว่า 10 ปีที่แล้วคุณโพสต์อะไรไว้...`,
  },
  {
    id: 'w9',
    slug: 'why-choose-unlink-thailand',
    category: 'general',
    title: 'ทำไม Unlink ถึงเป็นเบอร์ 1 ด้านการลบข้อมูลและกู้คืนชื่อเสียงในไทย',
    excerpt: 'เจาะลึกความสำเร็จและมาตรฐานความปลอดภัยที่เรามอบให้กับลูกค้า...',
    author: 'CEO of Unlink',
    date: '2026-01-16',
    readTime: 'อ่าน 5 นาที',
    icon: ShieldCheck,
    content: `Unlink ไม่ใช่แค่บริษัทเทคโนโลยี แต่เราคือพันธมิตร...`,
  },
  {
    id: 'w10',
    slug: 'how-to-start-removal-service',
    category: 'general',
    title: 'เริ่มต้นการลบข้อมูลกับ Unlink: ขั้นตอนง่ายๆ เพื่ออิสรภาพดิจิทัล',
    excerpt: 'ขั้นตอนการประเมินงานฟรี และระยะเวลาการดำเนินการที่คุณควรรู้...',
    author: 'Customer Success Team',
    date: '2026-01-17',
    readTime: 'อ่าน 6 นาที',
    icon: RefreshCcw,
    content: `การเริ่มต้นกับ Unlink ง่ายและไม่มีความเสี่ยง...`,
  },
] as const
