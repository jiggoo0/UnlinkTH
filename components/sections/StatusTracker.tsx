"use client";

import React, { useState } from "react";
import { Search, Clock, CheckCircle2 } from "lucide-react";

interface Step {
  label: string;
  status: "completed" | "active" | "pending";
}

const MOCK_CASES: Record<
  string,
  { service: string; progress: number; phase: string; steps: Step[] }
> = {
  "UL-2025": {
    service: "Reputation Shield (ลบประวัติเสีย)",
    progress: 65,
    phase: "กำลังเจรจาลบข้อมูลรอบที่ 2",
    steps: [
      { label: "ตรวจสอบฐานข้อมูล & URL", status: "completed" },
      { label: "ยื่นคำร้องและเข้าแทรกแซง", status: "active" },
      { label: "ยืนยันผลการลบถาวร", status: "pending" },
    ],
  },
  "UL-7089": {
    service: "Immigration (แผนการเดินทาง)",
    progress: 100,
    phase: "ดำเนินการเสร็จสิ้น (Verified)",
    steps: [
      { label: "จัดเตรียมแผนการเดินทาง", status: "completed" },
      { label: "จองและยืนยันรหัส PNR", status: "completed" },
      { label: "ส่งมอบเอกสารฉบับสมบูรณ์", status: "completed" },
    ],
  },
};

export default function StatusTracker() {
  const [query, setQuery] = useState("");
  const [foundCase, setFoundCase] = useState<
    (typeof MOCK_CASES)["UL-2025"] | null
  >(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const result = MOCK_CASES[query.toUpperCase()];
    setFoundCase(result || null);
  };

  return (
    <section className="py-16 px-4 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
            ระบบตรวจสอบสถานะเคส (Live Tracking)
          </h2>
          <p className="text-gray-400">
            ระบุหมายเลขเคส (Case ID)
            เพื่อติดตามความคืบหน้าของปฏิบัติการภายใต้ความลับสูงสุด
          </p>
        </div>

        {/* 🔍 Search Input */}
        <form onSubmit={handleSearch} className="flex gap-2 mb-12">
          <input
            type="text"
            placeholder="เช่น UL-2025"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 focus:outline-none focus:border-[#D4AF37] transition-colors"
          />
          <button
            type="submit"
            className="bg-[#D4AF37] hover:bg-[#B8962E] text-black font-bold px-6 py-3 rounded-lg flex items-center gap-2 transition-all"
          >
            <Search size={20} />
            ตรวจสอบ
          </button>
        </form>

        {/* 📊 Status Display */}
        {foundCase ? (
          <div className="bg-zinc-900/50 border border-[#D4AF37]/30 rounded-2xl p-6 md:p-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-[#D4AF37] text-xs font-bold tracking-widest uppercase">
                  Vault Protocol Active
                </span>
                <h3 className="text-2xl font-bold mt-1">{foundCase.service}</h3>
                <p className="text-gray-400 text-sm">
                  Case ID: {query.toUpperCase()}
                </p>
              </div>
              <div className="text-right">
                <span className="text-4xl font-black text-[#D4AF37]">
                  {foundCase.progress}%
                </span>
                <p className="text-xs text-gray-500 mt-1 uppercase">
                  Overall Progress
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-3 bg-zinc-800 rounded-full mb-10 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F5E1A4] transition-all duration-1000 ease-out"
                style={{ width: `${foundCase.progress}%` }}
              />
            </div>

            {/* Steps Timeline */}
            <div className="grid md:grid-cols-3 gap-6">
              {foundCase.steps.map((step, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border ${step.status === "active" ? "border-[#D4AF37] bg-[#D4AF37]/5" : "border-zinc-800"}`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    {step.status === "completed" && (
                      <CheckCircle2 className="text-[#D4AF37]" size={20} />
                    )}
                    {step.status === "active" && (
                      <Clock className="text-white animate-pulse" size={20} />
                    )}
                    {step.status === "pending" && (
                      <div className="w-5 h-5 rounded-full border-2 border-zinc-700" />
                    )}
                    <span
                      className={`text-sm font-bold ${step.status === "pending" ? "text-zinc-600" : "text-white"}`}
                    >
                      Step {idx + 1}
                    </span>
                  </div>
                  <p
                    className={`text-sm ${step.status === "pending" ? "text-zinc-600" : "text-gray-300"}`}
                  >
                    {step.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 p-4 bg-zinc-950/50 rounded-lg text-center">
              <p className="text-xs text-zinc-500 italic">
                สถานะปัจจุบัน:{" "}
                <span className="text-white not-italic font-bold">
                  {foundCase.phase}
                </span>
              </p>
            </div>
          </div>
        ) : (
          query && (
            <div className="text-center p-10 bg-zinc-900 rounded-2xl border border-dashed border-zinc-800">
              <p className="text-zinc-500">
                ไม่พบหมายเลขเคสนี้ในระบบ
                หรือข้อมูลกำลังอยู่ระหว่างการเข้ารหัสความลับ
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}
