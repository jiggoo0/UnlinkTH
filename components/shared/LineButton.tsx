"use client"

import { MessageCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { siteConfig } from "@/constants/site-config"
import { useState, useEffect } from "react"

/**
 * LineButton: ปุ่มติดต่อทาง Line แบบลอย (Floating Action Button)
 * ✅ แสดงผลหลังจากโหลดหน้าเว็บ 1.5 วินาที
 * ✅ มี Pulse Effect และ Shine Effect เพื่อดึงดูดสายตา
 * ✅ มาพร้อม Tooltip ที่รองรับทั้ง Desktop และ Mobile Interaction
 */
export default function LineButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // แสดงปุ่มหลังจากเข้าหน้าเว็บมาสักครู่เพื่อไม่ให้รบกวน LCP เกินไป
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 50, opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.02 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="fixed right-6 bottom-6 z-[60] flex items-center gap-3 md:right-8 md:bottom-8"
        >
          {/* 🏷️ Tooltip Label: แสดงชื่อ ID หรือข้อความเชิญชวน */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: 10, filter: "blur(4px)" }}
                className="hidden rounded-2xl border border-slate-100 bg-white/90 px-5 py-3 text-sm font-black text-slate-900 shadow-2xl backdrop-blur-md md:block"
              >
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-blue-600">ปรึกษาเคสฟรี</span>
                  <span className="text-[10px] tracking-widest uppercase opacity-50">
                    Line ID: {siteConfig.contact.lineId}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 📱 Main Floating Button */}
          <a
            href={siteConfig.contact.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-[#06C755] text-white shadow-[0_15px_40px_-10px_rgba(6,199,85,0.6)] transition-all hover:bg-[#05b34c] active:scale-90"
            aria-label="ติดต่อเราทาง Line"
          >
            {/* 💬 Icon: มีการหมุนเล็กน้อยเมื่อ Hover */}
            <MessageCircle
              size={30}
              className="relative z-10 fill-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[15deg]"
            />

            {/* 🔴 Notification Badge with Pulse Effect */}
            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-5 w-5 rounded-full border-2 border-[#06C755] bg-red-500 shadow-sm"></span>
            </span>

            {/* ✨ Shine Effect Animation: วิ่งผ่านเมื่อ Hover */}
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
            </span>

            {/* Background Glow */}
            <span className="absolute inset-0 -z-10 rounded-full bg-[#06C755] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
