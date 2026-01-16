"use client"

import { Typography } from "@/components/ui/typography"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface HeaderProps {
  title: string
  description?: string
  /**
   * variant: "default" สำหรับหน้าบริการ/เคสศึกษา, "compact" สำหรับหน้าทั่วไป เช่น FAQ/About
   */
  variant?: "default" | "compact"
  className?: string
}

/**
 * Header: ส่วนหัวเรื่องของหน้าภายใน (Page Header)
 * ✅ แก้ไข Syntax motion.div ให้ถูกต้องตามมาตรฐาน Framer Motion
 * ✅ ดีไซน์ Dark Theme พร้อมระบบ Grid Pattern และ Gradient Blur
 */
export default function Header({
  title,
  description,
  variant = "default",
  className,
}: HeaderProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-slate-950 transition-all",
        variant === "compact" ? "py-12 md:py-16" : "py-20 md:py-32",
        className
      )}
    >
      {/* 🌌 Background Layer: Grid Pattern & Soft Glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Soft Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(37,99,235,0.15),transparent_70%)]" />

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Bottom Fade: เชื่อมต่อกับเนื้อหาถัดไป */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 to-transparent opacity-60" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div
          className={cn(
            "max-w-4xl",
            variant === "compact" ? "mx-auto text-center" : "text-left"
          )}
        >
          {/* 🏷️ Page Title - ค่อยๆ ปรากฏขึ้นพร้อมชื่อหน้า */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h1"
              className="border-none pb-0 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {title}
            </Typography>
          </motion.div>

          {/* 📝 Description - แก้ไขจาก motion-div เป็น motion.div */}
          {description && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Typography
                variant="lead"
                className="mt-6 max-w-2xl text-lg leading-relaxed font-medium text-slate-400 md:text-xl lg:text-2xl"
              >
                {description}
              </Typography>
            </motion.div>
          )}

          {/* ⚡ Decorative Line (เฉพาะ Default Variant) */}
          {variant === "default" && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 80, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-8 h-1 rounded-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.5)]"
            />
          )}
        </div>
      </div>
    </section>
  )
}
