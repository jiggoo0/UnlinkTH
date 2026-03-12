"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Trash2,
  Globe,
  CheckCircle2,
  ShieldCheck,
  Loader2,
  ArrowRight,
  User,
  Zap,
} from "lucide-react";
import { searchCaseAction } from "@/lib/actions";
import { motion, AnimatePresence } from "framer-motion";
import type { CaseStatus, CaseStatusError } from "@/lib/google-sheets";

/**
 * 👑 VIP STATUS TRACKER (CONCIERGE EDITION)
 * ดึงข้อมูลจริงจาก Google Sheets แบบ 100% Managed
 */
export default function StatusTracker() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CaseStatus | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData(e.currentTarget);
    const data = await searchCaseAction(formData);

    if ("error" in data) {
      setError(
        data.error === "Case ID not found"
          ? "ไม่พบข้อมูลหมายเลขเคสนี้ในระบบ"
          : (data as CaseStatusError).error,
      );
    } else {
      setResult(data as CaseStatus);
    }
    setLoading(false);
  }

  return (
    <div className="lab-card overflow-hidden border-primary/20 bg-primary/5 shadow-2xl transition-all duration-500">
      {/* 📡 System Header */}
      <div className="border-b border-white/5 bg-white/[0.02] p-4 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-[10px] font-bold text-white tracking-[0.2em] uppercase italic">
          <Zap className="text-primary h-3 w-3 animate-pulse" />
          Vault Protocol Status Engine
        </h3>
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="font-mono text-[9px] text-primary/60 tracking-widest uppercase">
            Live Connection: Active
          </span>
        </div>
      </div>

      <div className="p-6 md:p-10">
        <AnimatePresence mode="wait">
          {!result ? (
            /* 🔍 SEARCH VIEW */
            <motion.div
              key="search"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-xl mx-auto space-y-8 text-center"
            >
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-white tracking-tight">
                  ตรวจสอบสถานะการปฏิบัติการ
                </h4>
                <p className="text-sm text-slate-400">
                  กรอกหมายเลข Case ID ของคุณเพื่อดูความคืบหน้าแบบ Real-time
                </p>
              </div>

              <form onSubmit={handleSearch} className="relative group">
                <input
                  name="caseId"
                  type="text"
                  placeholder="เช่น UL-0001"
                  required
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-xl font-mono text-white placeholder:text-slate-600 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all shadow-inner uppercase"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="absolute right-3 top-3 bottom-3 px-6 bg-primary text-black rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-primary/80 transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      วิเคราะห์ข้อมูล
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>

              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-rose-500 text-xs font-medium"
                >
                  ⚠ {error}
                </motion.p>
              )}

              <div className="pt-4 flex flex-wrap justify-center gap-6 opacity-40 grayscale">
                <div className="flex items-center gap-2 text-[10px] font-mono text-white tracking-tighter uppercase">
                  <ShieldCheck className="h-3 w-3" /> Data Secured
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-white tracking-tighter uppercase">
                  <Globe className="h-3 w-3" /> Global Network
                </div>
              </div>
            </motion.div>
          ) : (
            /* 📊 RESULTS VIEW (VIP DASHBOARD) */
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              {/* Client Info & Main Status */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-primary font-mono text-xs font-bold tracking-widest uppercase">
                    <User className="h-3 w-3" /> Case Protocol: {result.caseId}
                  </div>
                  <h4 className="text-xl font-bold text-white uppercase italic tracking-tight">
                    {result.customerName || "VIP CLIENT"}
                  </h4>
                </div>
                <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-1 text-[10px] font-black italic uppercase tracking-[0.2em]">
                  {result.mainStatus || "Active Operation"}
                </Badge>
              </div>

              {/* Progress Engine */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                      Current Operation
                    </span>
                    <p className="text-sm font-bold text-white uppercase italic">
                      {result.currentPhase}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-primary italic">
                      {result.progress}%
                    </span>
                    <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">
                      Efficiency
                    </p>
                  </div>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-[1px]">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${result.progress}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-primary rounded-full shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                  />
                </div>
              </div>

              {/* Strategic Steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: "Data Integrity", step: result.step1, icon: Search },
                  { label: "De-indexing", step: result.step2, icon: Globe },
                  { label: "Final Cleanup", step: result.step3, icon: Trash2 },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <item.icon className="h-4 w-4" />
                      </div>
                      {item.step.includes("สำเร็จ") ? (
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      ) : (
                        <Loader2 className="h-4 w-4 text-slate-700 animate-spin" />
                      )}
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mb-1">
                        {item.label}
                      </p>
                      <p className="text-xs font-bold text-white uppercase">
                        {item.step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 text-center">
                <button
                  onClick={() => setResult(null)}
                  className="text-[10px] font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-[0.2em] italic border-b border-transparent hover:border-primary pb-1"
                >
                  ← New Inquiry
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
