/** @format */

import { db } from "@/lib/db";
import {
  ShieldCheck,
  Lock,
  FileDown,
  AlertTriangle,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface DownloadPageProps {
  searchParams: Promise<{ caseId?: string }>;
}

/**
 * 🔐 SECURE DOWNLOAD VAULT (v1.0)
 * ---------------------------------------------------------
 * หน้าดาวน์โหลดเอกสารสำหรับลูกค้าที่ได้รับการอนุมัติแล้ว
 */

interface CaseData {
  id: string;
  customer_name: string;
  email: string;
  status: string;
  file_url: string;
}

export default async function DownloadVaultPage({
  searchParams,
}: DownloadPageProps) {
  const { caseId } = await searchParams;

  let caseData: CaseData | null = null;
  let error = null;

  if (caseId) {
    try {
      const result = await db.execute({
        sql: "SELECT * FROM cases WHERE id = ? LIMIT 1",
        args: [caseId],
      });

      if (result.rows.length > 0) {
        caseData = result.rows[0] as unknown as CaseData;
      } else {
        error = "ไม่พบรหัสเคสนี้ในระบบฐานข้อมูล";
      }
    } catch {
      error = "เกิดข้อผิดพลาดในการเชื่อมต่อฐานข้อมูลความลับ";
    }
  }

  return (
    <div className="min-h-screen bg-[#050810] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-xl">
        <header className="text-center mb-12">
          <div className="mx-auto h-20 w-20 rounded-[2rem] bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
            <ShieldCheck className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl font-black tracking-tighter uppercase italic mb-2">
            Secure{" "}
            <span className="text-primary italic font-light lowercase">
              Download Vault
            </span>
          </h1>
          <p className="text-zinc-500 font-mono text-[9px] tracking-[0.4em] uppercase">
            Encrypted Document Access Protocol
          </p>
        </header>

        <main className="bg-[#0a0f1d] border border-white/5 rounded-[2.5rem] p-10 shadow-2xl">
          {!caseId ? (
            <div className="space-y-8 text-center py-10">
              <Lock className="h-12 w-12 text-zinc-700 mx-auto" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white uppercase">
                  Authentication Required
                </h3>
                <p className="text-xs text-zinc-500 font-mono tracking-widest leading-relaxed">
                  โปรดใช้ลิงก์จากอีเมลแจ้งเตือนของคุณ <br />{" "}
                  เพื่อเข้าถึงไฟล์ความลับส่วนบุคคล
                </p>
              </div>
              <Button
                asChild
                className="w-full h-14 rounded-2xl bg-white text-black font-bold uppercase tracking-widest"
              >
                <Link href="/">กลับหน้าหลัก</Link>
              </Button>
            </div>
          ) : error ? (
            <div className="space-y-8 text-center py-10">
              <AlertTriangle className="h-12 w-12 text-red-500 mx-auto" />
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white uppercase italic">
                  Access Denied
                </h3>
                <p className="text-sm text-red-400/80 font-medium">{error}</p>
              </div>
              <Button
                asChild
                variant="outline"
                className="w-full h-14 rounded-2xl border-white/5 hover:bg-white/5 text-zinc-400"
              >
                <Link href="/">แจ้งปัญหาการใช้งาน</Link>
              </Button>
            </div>
          ) : caseData ? (
            <div className="space-y-8">
              <div className="bg-black/40 rounded-2xl p-6 border border-white/5 space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
                    Case Reference
                  </span>
                  <span className="text-xs font-bold text-primary">
                    {caseData.id}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
                    Client Identity
                  </span>
                  <span className="text-xs font-bold text-white uppercase">
                    {caseData.customer_name}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
                    Security Status
                  </span>
                  <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-tighter flex items-center gap-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Verified & Ready
                  </span>
                </div>
              </div>

              {caseData.status === "approved" && caseData.file_url ? (
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 text-center">
                    <p className="text-xs text-emerald-500/80 mb-6 font-medium leading-relaxed">
                      เอกสารของคุณพร้อมให้ดาวน์โหลดแล้ว <br />{" "}
                      ไฟล์นี้จะถูกทำลายทิ้งหลังจากดาวน์โหลดสำเร็จ
                    </p>
                    <Button
                      asChild
                      className="w-full h-16 rounded-2xl bg-emerald-500 text-white hover:bg-emerald-600 font-black text-sm tracking-[0.2em] uppercase shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                    >
                      <a href={caseData.file_url} target="_blank" download>
                        ดาวน์โหลดเอกสารทันที{" "}
                        <FileDown className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="p-8 rounded-2xl bg-amber-500/5 border border-amber-500/10 text-center space-y-4">
                  <div className="h-10 w-10 text-amber-500/40 mx-auto flex justify-center items-center">
                    <Lock className="h-full w-full" />
                  </div>
                  <p className="text-xs text-amber-500/80 font-medium leading-relaxed uppercase tracking-widest">
                    เคสของคุณกำลังอยู่ระหว่าง <br />{" "}
                    การจัดเตรียมเอกสารขั้นสุดท้าย
                  </p>
                  <p className="text-[9px] text-zinc-500 italic">
                    * ท่านจะได้รับอีเมลแจ้งเตือนอีกครั้งเมื่อไฟล์พร้อมใช้งาน
                  </p>
                </div>
              )}

              <div className="pt-6 border-t border-white/5 text-center">
                <div className="flex items-center justify-center gap-2 text-primary/40 font-mono text-[8px] tracking-[0.3em] uppercase">
                  <Terminal className="h-3 w-3" />
                  <span>Terminal Secured v4.0.2</span>
                </div>
              </div>
            </div>
          ) : null}
        </main>

        <footer className="mt-12 text-center opacity-20">
          <p className="text-[8px] font-mono uppercase tracking-[0.5em]">
            Digital Architecture by AEMDEVWEB | 0x_INFRA_STABLE_2026
          </p>
        </footer>
      </div>
    </div>
  );
}
