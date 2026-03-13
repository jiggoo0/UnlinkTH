"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  ShieldAlert,
  Lock,
  Terminal,
  RefreshCw,
  ArrowRight,
} from "lucide-react";
import { getCaseStatus, CaseStatus } from "@/lib/google-sheets";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/**
 * 🛡️ VAULT PROTOCOL v4.2 | Operational Tracking System
 * -------------------------------------------------------------------------
 * ระบบติดตามสถานะเคสภายใต้มาตรฐานความปลอดภัยข้อมูลระดับสูงสุด
 * เชื่อมต่อฐานข้อมูล Google Sheets แบบ Real-time ผ่าน Server-side fetching
 */

export default function StatusTracker() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<CaseStatus | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setStatus(null);

    try {
      // 🛰️ ดึงข้อมูลจาก Google Sheets ผ่านฟังก์ชันที่เตรียมไว้
      const result = await getCaseStatus(query.trim());

      if ("error" in result) {
        setError(
          result.error === "Case ID not found"
            ? `ไม่พบหมายเลขเคสนี้ในระบบ หรือท่านไม่มีสิทธิ์การเข้าถึงข้อมูลดังกล่าว โปรดตรวจสอบรหัสผ่านหรือติดต่อผู้เชี่ยวชาญของ ${query.toUpperCase()}`
            : "เกิดข้อผิดพลาดในการเชื่อมต่อฐานข้อมูลปฏิบัติการ กรุณาลองใหม่อีกครั้ง",
        );
      } else {
        setStatus(result);
      }
    } catch (_err) {
      setError("การสื่อสารกับระบบรักษาความปลอดภัยขัดข้อง");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setQuery("");
    setStatus(null);
    setError(null);
  };

  return (
    <section className="py-24 px-4 bg-black text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.03),transparent)] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-6 border-primary/30 text-primary px-4 py-1 font-mono text-[10px] tracking-[0.3em] uppercase"
          >
            Vault Protocol v4.2
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            Case Command <span className="text-primary">Center</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            ระบุรหัสประจำเคสเพื่อเข้าถึงฐานข้อมูลปฏิบัติการ
            <span className="text-primary/60 block mt-1">
              ข้อมูลทั้งหมดจะถูกทำลายทิ้งทันทีหลังปิดภารกิจเพื่อความปลอดภัยสูงสุด
            </span>
          </p>
        </div>

        {/* 🔍 Secure Input Terminal */}
        <div className="max-w-2xl mx-auto mb-20">
          <form onSubmit={handleSearch} className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />

            <div className="relative flex flex-col md:flex-row gap-3 bg-zinc-900/80 border border-white/5 backdrop-blur-xl p-2 rounded-2xl shadow-2xl">
              <div className="flex-1 flex items-center px-4 gap-3 border border-transparent focus-within:border-primary/20 rounded-xl transition-all bg-black/40">
                <Terminal className="text-primary/50 w-5 h-5 shrink-0" />
                <input
                  type="text"
                  placeholder="ENTER CASE ID (e.g., CASE-0001)"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  disabled={loading}
                  className="w-full py-4 bg-transparent border-none text-white placeholder:text-zinc-700 font-mono tracking-widest text-sm focus:ring-0 uppercase"
                />
              </div>
              <Button
                type="submit"
                disabled={loading || !query}
                className="h-auto py-4 md:py-0 px-8 rounded-xl font-bold tracking-[0.2em] uppercase group/btn transition-all"
              >
                {loading ? (
                  <RefreshCw className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <Lock className="w-4 h-4 mr-2" />
                    Access Vault
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Quick Support Note */}
          <p className="text-[10px] text-zinc-600 font-mono uppercase tracking-[0.2em] mt-6 text-center">
            Security Clearance Required • Private Network Only
          </p>
        </div>

        {/* 📊 High-Intelligence Status Display */}
        <div className="min-h-[300px] flex items-center justify-center">
          {loading ? (
            <div className="flex flex-col items-center gap-6 animate-pulse">
              <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
              <div className="space-y-2 text-center">
                <p className="text-primary font-mono text-xs tracking-widest uppercase">
                  Decryption in Progress...
                </p>
                <p className="text-zinc-500 text-[10px] font-mono uppercase">
                  Scanning Secure Database
                </p>
              </div>
            </div>
          ) : status ? (
            <div className="w-full bg-zinc-900/30 border border-white/5 rounded-[3rem] p-8 md:p-16 relative overflow-hidden animate-in fade-in zoom-in duration-500">
              <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
                <ShieldAlert className="w-64 h-64 text-primary" />
              </div>

              <div className="relative z-10">
                {/* Header Info */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.3em] uppercase px-3 py-1 rounded-full">
                        {status.mainStatus}
                      </div>
                      <span className="text-zinc-600 font-mono text-xs tracking-widest uppercase">
                        Case Verified
                      </span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                      {status.customerName || "Classified Target"}
                    </h3>
                    <div className="flex items-center gap-3 text-zinc-500 font-mono text-[10px] tracking-widest uppercase">
                      <Terminal className="w-3 h-3" />
                      ID: {status.caseId}
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl px-10 py-6 text-center backdrop-blur-sm">
                    <span className="text-6xl font-black text-primary leading-none">
                      {status.progress}%
                    </span>
                    <p className="text-[9px] text-zinc-500 mt-2 uppercase tracking-[0.3em] font-bold">
                      Mission Completion
                    </p>
                  </div>
                </div>

                {/* Live Action Progress */}
                <div className="space-y-12">
                  <div className="space-y-3">
                    <div className="flex justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500">
                      <span>Analyzing Point</span>
                      <span className="text-primary font-bold">
                        Operational Phase: {status.currentPhase}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-zinc-800/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-primary/40 transition-all duration-1500 ease-out shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                        style={{ width: `${status.progress}%` }}
                      />
                    </div>
                  </div>

                  {/* Milestones Grid */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <Milestone
                      label="Initial Assessment"
                      status={
                        status.step1 === "SUCCESS" ? "completed" : "active"
                      }
                      desc="ตรวจสอบฐานข้อมูลและจุดบกพร่องทางดิจิทัล"
                      index={1}
                    />
                    <Milestone
                      label="Counter Operation"
                      status={
                        status.step1 === "SUCCESS"
                          ? status.step2 === "SUCCESS"
                            ? "completed"
                            : "active"
                          : "pending"
                      }
                      desc="ดำเนินการแทรกแซงและจัดการข้อมูลเชิงเทคนิค"
                      index={2}
                    />
                    <Milestone
                      label="Final Verification"
                      status={
                        status.step2 === "SUCCESS"
                          ? status.step3 === "SUCCESS"
                            ? "completed"
                            : "active"
                          : "pending"
                      }
                      desc="ยืนยันผลลัพธ์ถาวรและส่งมอบรายงานความลับ"
                      index={3}
                    />
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="mt-16 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                  <p className="text-[10px] text-zinc-500 font-mono italic">
                    บันทึกปฏิบัติการล่าสุด:{" "}
                    <span className="text-white not-italic">
                      {new Date().toLocaleString()}
                    </span>
                  </p>

                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      onClick={handleReset}
                      className="border-white/10 hover:bg-white/5 text-[10px] font-bold tracking-widest uppercase rounded-full px-6"
                    >
                      <RefreshCw className="w-3 h-3 mr-2" />
                      เริ่มต้นใหม่
                    </Button>
                    <Button
                      asChild
                      className="text-[10px] font-bold tracking-widest uppercase rounded-full px-8 h-12"
                    >
                      <a
                        href="https://line.me/ti/p/~@unlink-th"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ติดต่อเจ้าหน้าที่เจ้าของเคส
                        <ArrowRight className="ml-2 w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ) : error ? (
            <div className="text-center p-12 md:p-20 bg-red-500/5 border border-red-500/20 rounded-[3rem] max-w-2xl w-full animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="bg-red-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-red-500/20">
                <ShieldAlert className="text-red-500 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-tight">
                Access Denied
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-10 font-light">
                {error}
              </p>
              <Button
                variant="outline"
                onClick={handleReset}
                className="border-red-500/20 hover:bg-red-500/10 text-red-500 text-[10px] font-bold tracking-widest uppercase rounded-full px-10 h-12 transition-all"
              >
                <RefreshCw className="w-3 h-3 mr-2" />
                รีเซ็ตระบบการเข้าถึง
              </Button>
            </div>
          ) : (
            <div className="text-center space-y-8 animate-in fade-in duration-1000">
              <div className="w-20 h-20 bg-zinc-900 rounded-3xl flex items-center justify-center mx-auto border border-white/5 shadow-inner">
                <Terminal className="text-zinc-700 w-8 h-8" />
              </div>
              <div className="space-y-2">
                <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.4em]">
                  System Ready
                </p>
                <p className="text-zinc-500 text-xs font-light">
                  Awaiting Case ID Input for Protocol Execution
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Milestone({
  label,
  status,
  desc,
  index,
}: {
  label: string;
  status: "completed" | "active" | "pending";
  desc: string;
  index: number;
}) {
  return (
    <div
      className={`p-6 rounded-2xl border transition-all duration-500 ${
        status === "active"
          ? "border-primary/50 bg-primary/5 shadow-2xl shadow-primary/10"
          : "border-white/5 bg-black/40"
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold ${
            status === "completed"
              ? "bg-primary text-black"
              : status === "active"
                ? "bg-primary/20 text-primary animate-pulse"
                : "bg-zinc-800 text-zinc-600"
          }`}
        >
          {status === "completed" ? (
            <CheckCircle2 className="w-4 h-4" />
          ) : (
            index
          )}
        </div>
        <span
          className={`text-[10px] font-bold tracking-widest uppercase ${
            status === "pending" ? "text-zinc-600" : "text-white"
          }`}
        >
          {label}
        </span>
      </div>
      <p
        className={`text-[11px] leading-relaxed ${
          status === "pending" ? "text-zinc-700" : "text-zinc-400"
        }`}
      >
        {desc}
      </p>
    </div>
  );
}
