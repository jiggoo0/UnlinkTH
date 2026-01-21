"use client"

import Link from "next/link"
import { siteConfig } from "@/constants/site-config"
import { cn } from "@/lib/utils"
import { MessageCircle } from "lucide-react"

interface LineButtonProps {
  /** ขนาดของปุ่ม: sm (กะทัดรัด), md (มาตรฐาน), lg (เน้นย้ำ) */
  size?: "sm" | "md" | "lg"
  /** แสดงเฉพาะไอคอน (สำหรับพื้นที่จำกัด) */
  iconOnly?: boolean
  className?: string
  /** ข้อความบนปุ่ม (Default: ปรึกษาผ่าน LINE) */
  label?: string
}

/**
 * LineButton: คอมโพเนนต์การติดต่อสื่อสารหลัก (Primary Conversion Point)
 * เชื่อมโยงกับ Line Official Account โดยใช้ยุทธศาสตร์ Direct Deep Linking
 */
export function LineButton({
  size = "md",
  iconOnly = false,
  className,
  label = "ปรึกษาผ่าน LINE",
}: LineButtonProps) {
  /**
   * ยุทธศาสตร์การเชื่อมต่อ:
   * ใช้ lineUrl จาก siteConfig โดยตรง (เช่น https://lin.ee/...)
   * เพื่อประสิทธิภาพสูงสุดในการ Redirect เข้าสู่แอป LINE บนโทรศัพท์มือถือ
   */
  const lineLink = siteConfig.contact.lineUrl

  return (
    <Link
      href={lineLink}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-300 ease-in-out",
        "bg-[#00B900] text-white shadow-lg shadow-green-500/20 hover:scale-[1.02] hover:bg-[#00A000] active:scale-[0.95]",
        {
          "h-9 px-4 text-[10px] tracking-wider uppercase": size === "sm",
          "h-12 px-8 text-xs tracking-widest uppercase": size === "md",
          "h-16 px-12 text-sm tracking-[0.2em] uppercase": size === "lg",
          "w-12 px-0": iconOnly && size === "md",
        },
        className
      )}
    >
      <MessageCircle
        className={cn(
          "fill-current transition-transform duration-500 group-hover:rotate-12",
          {
            "h-4 w-4": size === "sm",
            "h-5 w-5": size === "md",
            "h-6 w-6": size === "lg",
          }
        )}
      />

      {!iconOnly && <span className="tracking-tight">{label}</span>}
    </Link>
  )
}
