"use client";

import { useState, useEffect, Suspense } from "react";
import {
  ShieldCheck,
  Lock,
  FileDown,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

/**
 * 🔐 SECURE DOWNLOAD VAULT (v2.0 - Stable Native)
 * ---------------------------------------------------------
 * ปรับปรุงใหม่เพื่อแก้ปัญหา Connection Failure บน Edge Runtime
 * โดยการใช้ Client-side fetching เพื่อความเสถียรสูงสุด
 */

interface CaseData {
  id: string;
  customer_name: string;
  email: string;
  status: string;
  file_url: string;
  service: string;
}

function VaultContent() {
  const searchParams = useSearchParams();
  const caseId = searchParams.get("caseId");

  const [caseData, setCaseData] = useState<CaseData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (caseId) {
      fetchCaseData(caseId);
    }
  }, [caseId]);

  const fetchCaseData = async (id: string) => {
    setIsLoading(true);
    setError(null);
    try {
      // เรียกผ่าน API เพื่อความปลอดภัยและเสถียรภาพ
      const res = await fetch(`/api/services/verify?caseId=${id}`);
      const data = await res.json();

      if (res.ok) {
        setCaseData(data.caseData);
      } else {
        setError(data.error || "ไม่พบข้อมูลในระบบ");
      }
    } catch (err) {
      setError("ไม่สามารถเชื่อมต่อระบบรักษาความปลอดภัยได้ โปรดลองอีกครั้ง");
    } finally {
      setIsLoading(false);
    }
  };

  if (!caseId) {
    return (
      <div className="space-y-8 text-center py-10">
        <Lock className="h-12 w-12 text-zinc-700 mx-auto" />
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white uppercase">
            Authentication Required
          </h3>
          <p className="text-xs text-zinc-500 font-mono tracking-widest leading-relaxed">
            โปรดใช้ลิงก์จากอีเมลแจ้งเตือนของคุณ <br />
            เพื่อเข้าถึงไฟล์ความลับส่วนบุคคล
          </p>
        </div>
        <Button asChild className="w-full h-14 rounded-2xl bg-white text-black font-bold uppercase tracking-widest">
          <Link href="/">กลับหน้าหลัก</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {isLoading ? (
        <div className="py-20 text-center space-y-4">
          <RefreshCw className="h-10 w-10 text-primary animate-spin mx-auto" />
          <p className="text-[10px] text-primary font-mono animate-pulse uppercase tracking-[0.3em]">Decrypting Data...</p>
        </div>
      ) : error ? (
        <div className="space-y-8 text-center py-10">
          <AlertTriangle className="h-12 w-12 text-red-500 mx-auto" />
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white uppercase italic">Access Denied</h3>
            <p className="text-xs text-red-400/70 font-mono leading-relaxed">{error}</p>
          </div>
          <Button onClick={() => window.location.reload()} variant="outline" className="w-full h-14 rounded-2xl border-white/10 text-white font-bold uppercase tracking-widest hover:bg-white/5">
            ลองใหม่อีกครั้ง
          </Button>
        </div>
      ) : caseData ? (
        <div className="space-y-10 animate-in fade-in zoom-in duration-700">
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-emerald-500 flex items-center justify-center shrink-0">
              <ShieldCheck className="text-white h-6 w-6" />
            </div>
            <div>
              <h4 className="text-emerald-400 font-bold text-sm uppercase">Identity Verified</h4>
              <p className="text-emerald-400/60 text-[10px] font-mono tracking-widest">Case: {caseData.id}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <p className="text-[8px] text-zinc-500 uppercase font-black mb-1">Customer</p>
                <p className="text-xs font-bold text-white truncate">{caseData.customer_name}</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <p className="text-[8px] text-zinc-500 uppercase font-black mb-1">Service Type</p>
                <p className="text-xs font-bold text-primary truncate uppercase">{caseData.service}</p>
              </div>
            </div>

            <div className="bg-primary p-1 rounded-[1.5rem]">
              <Button asChild className="w-full h-20 rounded-[1.2rem] bg-[#050810] text-white hover:bg-zinc-900 flex flex-col gap-1">
                <a href={caseData.file_url} target="_blank" rel="noopener noreferrer">
                  <span className="flex items-center gap-2 font-black text-sm uppercase tracking-widest">
                    <FileDown className="h-5 w-5" /> Download Document
                  </span>
                  <span className="text-[8px] opacity-40 font-mono uppercase tracking-[0.2em]">High-Resolution PDF (Secured)</span>
                </a>
              </Button>
            </div>
          </div>

          <p className="text-center text-[9px] text-zinc-600 font-light leading-relaxed px-10 italic">
            * เพื่อความปลอดภัย ไฟล์นี้จะถูกลบออกจากระบบภายใน 24 ชม. โปรดจัดเก็บในที่ปลอดภัยทันทีครับ
          </p>
        </div>
      ) : null}
    </div>
  );
}

export default function DownloadVaultPage() {
  return (
    <div className="min-h-screen bg-[#050810] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-xl">
        <header className="text-center mb-12">
          <div className="mx-auto h-20 w-20 rounded-[2rem] bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
            <ShieldCheck className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl font-black tracking-tighter uppercase italic mb-2">
            Secure <span className="text-primary italic font-light lowercase">Download Vault</span>
          </h1>
          <p className="text-zinc-500 font-mono text-[9px] tracking-[0.4em] uppercase">Encrypted Document Access Protocol</p>
        </header>

        <main className="bg-[#0a0f1d] border border-white/5 rounded-[2.5rem] p-10 shadow-2xl min-h-[400px]">
          <Suspense fallback={
            <div className="py-20 text-center space-y-4">
              <RefreshCw className="h-10 w-10 text-primary animate-spin mx-auto" />
              <p className="text-[10px] text-primary font-mono animate-pulse uppercase tracking-[0.3em]">Initializing Secure Node...</p>
            </div>
          }>
            <VaultContent />
          </Suspense>
        </main>

        <footer className="mt-12 text-center">
          <p className="text-zinc-700 font-mono text-[8px] uppercase tracking-[0.5em]">UNLINK-GLOBAL SECURED NETWORK</p>
        </footer>
      </div>
    </div>
  );
}
