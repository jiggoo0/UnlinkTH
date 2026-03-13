/** @format */

"use client";

import { useSearchParams } from "next/navigation";
import {
  ShieldCheck,
  Download,
  Lock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Suspense } from "react";

/**
 * 🔒 UNLINK-GLOBAL: SECURE DOCUMENT VAULT (V1.0)
 * ---------------------------------------------------------
 * หน้าสำหรับดาวน์โหลดตั๋วและเอกสารที่ได้รับอนุมัติแล้ว
 */

function VaultContent() {
  const searchParams = useSearchParams();
  const caseId = searchParams.get("caseId") || "UK-PENDING";
  const customerName = searchParams.get("name") || "Valued Client";

  return (
    <div className="min-h-screen bg-[#050810] text-white flex items-center justify-center p-6">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 max-w-xl w-full bg-[#0a0f1d] border border-white/5 rounded-[3rem] p-12 shadow-2xl overflow-hidden"
      >
        <div className="bg-primary/10 absolute top-0 right-0 h-40 w-40 rounded-full blur-[60px] -mr-20 -mt-20" />

        <div className="flex flex-col items-center text-center mb-10 space-y-4">
          <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
            <ShieldCheck className="h-10 w-10 text-primary" />
          </div>
          <div>
            <h1 className="text-3xl font-black tracking-tighter uppercase italic">
              SECURE DOCUMENT{" "}
              <span className="text-primary italic font-light lowercase">
                vault
              </span>
            </h1>
            <p className="text-zinc-500 font-mono text-[10px] tracking-[0.4em] uppercase mt-2">
              Official Verification Success
            </p>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-10 space-y-6">
          <div className="flex items-center gap-4 border-b border-white/5 pb-4">
            <div className="h-10 w-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
            </div>
            <div>
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                Case ID Status
              </p>
              <p className="text-sm font-bold">{caseId} - Approved</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Lock className="h-5 w-5 text-blue-500" />
            </div>
            <div>
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                Security Level
              </p>
              <p className="text-sm font-bold uppercase italic">
                Encrypted Access
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 text-center">
          <p className="text-sm text-zinc-400 leading-relaxed px-4">
            ยินดีด้วยคุณ{" "}
            <span className="text-white font-bold">{customerName}</span>{" "}
            เอกสารของคุณได้รับการอนุมัติแล้วครับ
          </p>

          <Button
            className="w-full h-20 rounded-2xl bg-primary text-black hover:bg-primary/90 font-black text-xl tracking-[0.1em] uppercase transition-all hover:scale-[1.02] flex items-center justify-center gap-3"
            onClick={() =>
              alert(
                "ระบบกำลังดึงไฟล์เอกสาร (PDF) จากฐานข้อมูล... กรุณารอสักครู่ครับ",
              )
            }
          >
            <Download className="h-6 w-6" />
            DOWNLOAD NOW
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <a
            href="https://line.me"
            className="inline-flex items-center gap-2 text-[10px] text-primary/60 hover:text-primary transition-colors font-mono tracking-widest uppercase"
          >
            สอบถามข้อมูลเพิ่มเติมผ่าน LINE <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default function DownloadVaultPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center text-white">
          ACCESSING...
        </div>
      }
    >
      <VaultContent />
    </Suspense>
  );
}
