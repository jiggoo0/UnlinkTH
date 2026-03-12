"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, X } from "lucide-react";
import Link from "next/link";

/**
 * PDPA Consent Protocol (UnlinkTH Standard)
 * บังคับใช้ตามกฎหมายคุ้มครองข้อมูลส่วนบุคคล มาตรฐานปี 2026
 * ปรับปรุงประสิทธิภาพเพื่อรองรับ React 19 & Next.js 16
 */
export default function PdpaConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // ตรวจสอบ Consent หลังจาก Component Mounted แล้วเท่านั้น
    let timer: NodeJS.Timeout;
    try {
      const consent = localStorage.getItem("unlink-pdpa-consent");
      if (!consent) {
        timer = setTimeout(() => setIsVisible(true), 2500);
      }
    } catch (e) {
      console.error("PDPA Consent Storage Access Error:", e);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  const handleAccept = useCallback(() => {
    try {
      localStorage.setItem("unlink-pdpa-consent", "accepted");
      setIsVisible(false);
    } catch (e) {
      console.error("Failed to save PDPA Consent:", e);
    }
  }, []);

  // ไม่ Render อะไรเลยถ้ายังไม่ Mount หรือถูกปิดไปแล้ว
  if (!mounted || !isVisible) return null;

  return (
    <div className="animate-in fade-in slide-in-from-bottom-10 fixed bottom-6 left-1/2 z-50 w-[90%] max-w-2xl -translate-x-1/2 duration-500">
      <div className="lab-card flex flex-col items-center gap-4 p-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/20">
            <ShieldCheck className="text-primary h-5 w-5" />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-white uppercase italic">
              Data Protection Protocol
            </h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              เราใช้คุกกี้เพื่อเพิ่มประสิทธิภาพในการใช้งานตามนโยบาย PDPA มาตรฐานปี 2026
            </p>
          </div>
        </div>
        <div className="flex w-full items-center gap-3 md:w-auto">
          <Button onClick={handleAccept} size="sm" className="h-10 w-full px-8 italic md:w-auto">
            ยินยอม
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="border-white/10 h-10 w-full px-6 text-xs md:w-auto" 
            asChild
          >
            <Link href="/privacy">นโยบาย</Link>
          </Button>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-muted-foreground hover:text-white ml-2 hidden md:block"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
