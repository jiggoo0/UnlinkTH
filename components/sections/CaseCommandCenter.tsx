"use client";

import React, { useState } from "react";
import {
  Shield,
  Search,
  Lock,
  Zap,
  CheckCircle,
  ChevronRight,
  Loader2,
} from "lucide-react";

// 🏆 MOCK DATA: ปรับปรุงให้ดูเป็นทางการขึ้น
const CASE_REPORTS = {
  "UL-9902": {
    category: "REPUTATION SHIELD",
    client: "Executive Profile (Restricted)",
    status: "IN OPERATION",
    progress: 78,
    lastUpdate: "12 Mar 2026 | 14:30 GMT+7",
    milestones: [
      {
        id: 1,
        label: "Intelligence Gathering",
        desc: "รวบรวมข้อมูลและระบุตัวตนแหล่งที่มา",
        state: "done",
      },
      {
        id: 2,
        label: "Strategic Intervention",
        desc: "เริ่มกระบวนการแทรกแซงและเจรจาลบข้อมูล",
        state: "active",
      },
      {
        id: 3,
        label: "Digital Erasure Confirm",
        desc: "ยืนยันการลบถาวรและทำลายประวัติ",
        state: "wait",
      },
    ],
  },
  "UL-7741": {
    category: "FINANCIAL ENGINEERING",
    client: "Corporate Credit (Protected)",
    status: "ARCHIVED",
    progress: 100,
    lastUpdate: "10 Mar 2026 | 09:15 GMT+7",
    milestones: [
      {
        id: 1,
        label: "Credit Analysis",
        desc: "วิเคราะห์จุดบกพร่องของสเตทเม้นท์",
        state: "done",
      },
      {
        id: 2,
        label: "Portfolio Realignment",
        desc: "ปรับโครงสร้างการเงินใหม่ทั้งหมด",
        state: "done",
      },
      {
        id: 3,
        label: "Institutional Approval",
        desc: "สถาบันการเงินยืนยันความน่าเชื่อถือ",
        state: "done",
      },
    ],
  },
};

export default function CaseCommandCenter() {
  const [caseId, setCaseId] = useState("");
  const [isDecrypting, setIsDecrypting] = useState(false);
  const [activeCase, setActiveCase] = useState<
    (typeof CASE_REPORTS)["UL-9902"] | null
  >(null);

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDecrypting(true);
    // Simulate Decryption
    setTimeout(() => {
      setActiveCase(
        CASE_REPORTS[caseId.toUpperCase() as keyof typeof CASE_REPORTS] || null,
      );
      setIsDecrypting(false);
    }, 1200);
  };

  return (
    <section className="py-24 px-6 bg-[#050505] text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-[#D4AF37]/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-[#D4AF37] text-[10px] font-bold tracking-[0.2em] mb-6">
            <Lock size={12} /> VAULT PROTOCOL v4.2
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Case <span className="text-[#D4AF37]">Command Center</span>
          </h2>
          <p className="text-zinc-500 max-w-lg text-sm md:text-base">
            ระบุรหัสประจำเคสเพื่อเข้าถึงฐานข้อมูลปฏิบัติการ
            ข้อมูลทั้งหมดจะถูกทำลายทิ้งทันทีหลังปิดภารกิจ
          </p>
        </div>

        {/* 🔍 Decryption Input */}
        <form
          onSubmit={handleLookup}
          className="relative max-w-2xl mx-auto mb-20 group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/0 rounded-2xl blur opacity-25 group-focus-within:opacity-100 transition duration-500" />
          <div className="relative flex items-center bg-[#0a0a0a] border border-zinc-800 rounded-xl p-2 focus-within:border-[#D4AF37]/50 transition-all">
            <Search className="ml-4 text-zinc-600" size={20} />
            <input
              type="text"
              placeholder="ENTER ENCRYPTED CASE ID (e.g. UL-9902)"
              value={caseId}
              onChange={(e) => setCaseId(e.target.value)}
              className="flex-1 bg-transparent border-none px-4 py-3 text-sm focus:ring-0 uppercase tracking-widest font-mono"
            />
            <button
              disabled={isDecrypting}
              className="bg-[#D4AF37] hover:bg-[#B8962E] text-black text-xs font-black px-8 py-3 rounded-lg transition-all flex items-center gap-2 disabled:opacity-50"
            >
              {isDecrypting ? (
                <Loader2 className="animate-spin" size={16} />
              ) : (
                <Zap size={16} />
              )}
              {isDecrypting ? "DECRYPTING..." : "ACCESS VAULT"}
            </button>
          </div>
        </form>

        {/* 📁 Dossier Result */}
        {activeCase ? (
          <div className="animate-in fade-in zoom-in-95 duration-700">
            <div className="grid lg:grid-cols-3 gap-1 bg-zinc-900/30 border border-zinc-800 rounded-2xl overflow-hidden backdrop-blur-sm">
              {/* Left Panel: Primary Info */}
              <div className="lg:col-span-1 p-8 bg-[#0a0a0a]/80 border-r border-zinc-800">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
                    <Shield className="text-[#D4AF37]" size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] text-[#D4AF37] font-black tracking-widest">
                      {activeCase.category}
                    </h4>
                    <p className="text-white text-lg font-bold">
                      {caseId.toUpperCase()}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] text-zinc-500 font-bold uppercase mb-1">
                      Current Status
                    </p>
                    <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[10px] font-bold border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {activeCase.status}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 font-bold uppercase mb-1">
                      Operational Progress
                    </p>
                    <div className="text-5xl font-black text-white italic">
                      {activeCase.progress}
                      <span className="text-[#D4AF37] text-2xl">%</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-500 font-bold uppercase mb-1">
                      Last System Update
                    </p>
                    <p className="text-xs text-zinc-300 font-mono">
                      {activeCase.lastUpdate}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Panel: Milestones Timeline */}
              <div className="lg:col-span-2 p-8 md:p-12 relative">
                <div className="flex items-center justify-between mb-10">
                  <h5 className="text-sm font-bold tracking-widest text-zinc-400 uppercase">
                    Operational Milestones
                  </h5>
                  <div className="h-[1px] flex-1 bg-zinc-800 mx-6 hidden md:block" />
                </div>

                <div className="space-y-10">
                  {activeCase.milestones.map((step) => (
                    <div key={step.id} className="flex gap-6 group">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                            step.state === "done"
                              ? "bg-[#D4AF37] border-[#D4AF37] text-black"
                              : step.state === "active"
                                ? "border-[#D4AF37] text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                                : "border-zinc-800 text-zinc-800"
                          }`}
                        >
                          {step.state === "done" ? (
                            <CheckCircle size={16} strokeWidth={3} />
                          ) : (
                            <span className="text-xs font-black">
                              {step.id}
                            </span>
                          )}
                        </div>
                        {step.id !== 3 && (
                          <div
                            className={`w-[2px] h-12 mt-2 ${step.state === "done" ? "bg-[#D4AF37]" : "bg-zinc-800"}`}
                          />
                        )}
                      </div>
                      <div className="pt-0.5">
                        <h6
                          className={`font-bold transition-colors ${step.state === "wait" ? "text-zinc-600" : "text-white"}`}
                        >
                          {step.label}
                        </h6>
                        <p
                          className={`text-xs mt-1 leading-relaxed ${step.state === "wait" ? "text-zinc-700" : "text-zinc-400"}`}
                        >
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-4 bg-zinc-900/20 rounded-xl border border-zinc-800/50">
              <p className="text-[10px] text-zinc-500 italic">
                🔒
                ข้อมูลที่แสดงผลถูกจำกัดสิทธิ์การเข้าถึงภายใต้กฎหมายคุ้มครองข้อมูลส่วนบุคคลและระเบียบของ
                UNLINK-GLOBAL
              </p>
              <button className="text-[10px] font-black text-[#D4AF37] hover:text-white transition-colors flex items-center gap-1 tracking-widest uppercase">
                Report Discrepancy <ChevronRight size={12} />
              </button>
            </div>
          </div>
        ) : (
          caseId &&
          !isDecrypting && (
            <div className="text-center p-20 rounded-2xl border border-dashed border-zinc-800/50 animate-in fade-in slide-in-from-top-4">
              <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="text-red-500/50" size={24} />
              </div>
              <h4 className="text-xl font-bold text-zinc-300 mb-2">
                ACCESS DENIED
              </h4>
              <p className="text-sm text-zinc-600 max-w-sm mx-auto">
                ไม่พบหมายเลขเคสนี้ในระบบ
                หรือท่านไม่มีสิทธิ์การเข้าถึงข้อมูลดังกล่าว
                โปรดตรวจสอบรหัสผ่านหรือติดต่อผู้เชี่ยวชาญของท่าน
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}
