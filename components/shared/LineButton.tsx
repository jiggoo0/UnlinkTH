"use client"

import { MessageCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { siteConfig } from "@/constants/site-config"
import { useState, useEffect } from "react"

/**
 * LineButton: ปุ่มติดต่อทาง Line แบบลอย (Floating Action Button)
 * แสดงผลคงที่ที่มุมขวาล่างของหน้าจอ พร้อม Animation เพื่อดึงดูดสายตา
 */
export default function LineButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // แสดงปุ่มหลังจาก Scroll ลงมาเล็กน้อย หรือ Delay เพื่อความนุ่มนวล
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          whileHover={{ scale: 1.05 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="fixed right-6 bottom-6 z-[60] flex items-center gap-3"
        >
          {/* Label Tooltip ที่จะแสดงเมื่อ Hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 10, opacity: 0 }}
                className="hidden rounded-full border border-slate-100 bg-white px-4 py-2 text-sm font-bold text-slate-900 shadow-xl md:block"
              >
                ปรึกษาเคสฟรีทาง Line
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href={siteConfig.contact.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-[#06C755] text-white shadow-[0_8px_30px_rgb(6,199,85,0.4)] transition-all hover:bg-[#05b34c]"
            aria-label="ติดต่อเราทาง Line"
          >
            {/* Main Icon */}
            <MessageCircle
              size={32}
              className="fill-white transition-transform group-hover:rotate-12"
            />

            {/* Notification Badge with Pulse Effect */}
            <span className="absolute -top-1 -right-1 flex h-5 w-5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-5 w-5 rounded-full border-2 border-white bg-green-500 shadow-sm"></span>
            </span>

            {/* Shine Effect Animation */}
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]" />
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
