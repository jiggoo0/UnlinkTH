/** @format */

import { siteConfig } from "@/constants/site-config"
import { MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface LineButtonProps {
  className?: string
  isFloating?: boolean
}

export default function LineButton({
  className,
  isFloating = false,
}: LineButtonProps) {
  return (
    <a
      href={siteConfig.contact.lineUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex transform items-center gap-2 bg-[#06C755] font-bold text-white transition-all hover:scale-105 hover:bg-[#05b14c] active:scale-95",
        isFloating
          ? "fixed right-8 bottom-8 z-50 rounded-full p-4 shadow-2xl shadow-green-500/20"
          : "rounded-lg px-6 py-3 text-sm",
        className
      )}
    >
      <MessageCircle className={cn(isFloating ? "h-8 w-8" : "h-5 w-5")} />
      {!isFloating && (
        <span>ปรึกษาผ่าน LINE ({siteConfig.contact.lineId})</span>
      )}
      {isFloating && (
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex h-4 w-4 rounded-full bg-white"></span>
        </span>
      )}
    </a>
  )
}
