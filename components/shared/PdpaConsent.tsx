"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ShieldCheck } from "lucide-react"

/**
 * PDPA Consent Protocol (UnlinkTH Standard)
 * บังคับใช้ตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล มาตรฐานปี 2026
 */
export default function PdpaConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const consent = localStorage.getItem("unlink-pdpa-consent")
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [])

  const handleAccept = () => {
    localStorage.setItem("unlink-pdpa-consent", "accepted")
    setIsVisible(false)
  }

  if (!mounted || !isVisible) return null

  return (
    <div className="animate-in fade-in slide-in-from-bottom-10 fixed bottom-6 left-1/2 z-50 w-[90%] max-w-2xl -translate-x-1/2 duration-500">
      <div className="lab-card flex flex-col items-center gap-4 p-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
            <ShieldCheck className="text-primary h-6 w-6" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-white">
              การคุ้มครองข้อมูลส่วนบุคคล (PDPA)
            </h4>
            <p className="text-xs leading-relaxed text-slate-400">
              เราใช้คุกกี้เพื่อเพิ่มประสิทธิภาพการทำงานและรักษาความปลอดภัยของข้อมูลคุณ
              ตามมาตรฐานการจัดการชื่อเสียงออนไลน์ของ UnlinkTH
            </p>
          </div>
        </div>
        <div className="flex w-full shrink-0 gap-2 md:w-auto">
          <Button
            variant="outline"
            size="sm"
            className="w-full text-xs"
            onClick={() => setIsVisible(false)}
          >
            รายละเอียด
          </Button>
          <Button size="sm" className="w-full text-xs" onClick={handleAccept}>
            ยินยอมใช้งาน
          </Button>
        </div>
      </div>
    </div>
  )
}
