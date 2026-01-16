import {
  MessageCircle,
  ShieldCheck,
  Trash2,
  Search,
  Scale,
  CheckCircle2,
  ChevronRight,
  Info,
  ArrowRight,
  Mail,
  Phone,
  Calendar,
  ExternalLink,
  ShieldAlert,
  Lock,
  UserCheck,
  Menu,
  X,
} from "lucide-react"

/**
 * Icons Registry: ศูนย์รวมไอคอนที่ใช้ภายในเว็บไซต์
 * ช่วยให้การเปลี่ยน Library ในอนาคตทำได้ง่ายขึ้น และควบคุม Style ของไอคอนให้เป็นไปในทิศทางเดียวกัน
 */
export const Icons = {
  // Brand & Trust
  logo: ShieldCheck,
  shield: ShieldCheck,
  shieldAlert: ShieldAlert,
  lock: Lock,
  verify: UserCheck,

  // Navigation & Actions
  menu: Menu,
  close: X,
  arrowRight: ArrowRight,
  chevronRight: ChevronRight,
  external: ExternalLink,

  // Communication
  line: MessageCircle,
  mail: Mail,
  phone: Phone,

  // Services & Features
  trash: Trash2, // สำหรับ Content Removal
  search: Search, // สำหรับ SEO / Search Results
  scale: Scale, // สำหรับ Legal / PDPA
  check: CheckCircle2,
  info: Info,
  calendar: Calendar,
}

// สร้าง Type เพื่อให้สามารถเรียกใช้ผ่าน Props ได้อย่างแม่นยำ (Type-safe)
export type IconType = keyof typeof Icons
