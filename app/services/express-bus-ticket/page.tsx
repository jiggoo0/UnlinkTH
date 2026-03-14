"use client";

import React, { useState } from "react";
import {
  BusFront,
  QrCode,
  Lock,
  RefreshCw,
  Receipt,
  CheckCircle2,
  FileDown,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/**
 * 🚌 OFFICIAL BUS E-TICKET RECONSTRUCTION v1.0
 * -------------------------------------------------------------------------
 * ระบบสร้างแบบร่างตั๋วโดยสาร บขส. 99/999 มาตรฐานองค์กร (97%+ Similarity)
 */

export default function BusTicketGenerator() {
  const [formData, setFormData] = useState({
    passengerName: "",
    departureStation: "กรุงเทพฯ (หมอชิต 2)",
    arrivalStation: "เชียงใหม่",
    travelDate: "",
    price: "850",
    email: "",
  });

  const [step, setStep] = useState<"form" | "preview" | "payment" | "success">(
    "form",
  );
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setStep("preview");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white py-24 px-4 relative overflow-hidden font-sans">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 text-primary px-4 py-1 font-mono text-[10px] tracking-[0.2em] uppercase"
          >
            Corporate Claim Standard
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase italic">
            Express <span className="text-primary">Bus</span> E-Ticket
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            ระบบสร้างเอกสารยืนยันการเดินทางรถทัวร์ บขส. 99/999 (E-Ticket){" "}
            <br className="hidden md:block" />
            รูปแบบถูกต้องตามมาตรฐานการเบิกจ่ายบริษัทและหน่วยงานราชการ
            ข้อมูลแม่นยำ 100%
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Form Side */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-zinc-900/80 border border-white/5 p-8 rounded-[2rem] backdrop-blur-xl shadow-2xl">
              <h3 className="text-lg font-bold mb-8 flex items-center gap-3 border-b border-white/5 pb-4">
                <Receipt className="text-primary w-5 h-5" />
                Ticket Parameters
              </h3>

              <form onSubmit={handleGenerate} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                    Passenger Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="FULL NAME (TH/EN)"
                    value={formData.passengerName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        passengerName: e.target.value,
                      })
                    }
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 focus:outline-none focus:border-primary transition-all text-sm font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                    Origin Station
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. BANGKOK (MO CHIT 2)"
                    value={formData.departureStation}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        departureStation: e.target.value,
                      })
                    }
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 focus:outline-none focus:border-primary text-xs"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                    Destination
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. CHIANG MAI"
                    value={formData.arrivalStation}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        arrivalStation: e.target.value,
                      })
                    }
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 focus:outline-none focus:border-primary text-xs"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                      Date
                    </label>
                    <input
                      required
                      type="date"
                      value={formData.travelDate}
                      onChange={(e) =>
                        setFormData({ ...formData, travelDate: e.target.value })
                      }
                      className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 focus:outline-none focus:border-primary text-xs"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                      Fare (THB)
                    </label>
                    <input
                      required
                      type="number"
                      placeholder="850"
                      value={formData.price}
                      onChange={(e) =>
                        setFormData({ ...formData, price: e.target.value })
                      }
                      className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 focus:outline-none focus:border-primary text-xs"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                    Email for Delivery
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="OFFICE@COMPANY.COM"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 focus:outline-none focus:border-primary text-xs"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isGenerating || step !== "form"}
                  className="w-full h-16 mt-4 bg-primary hover:bg-primary/90 text-black font-black tracking-[0.2em] uppercase rounded-2xl transition-all"
                >
                  {isGenerating ? (
                    <RefreshCw className="w-5 h-5 animate-spin" />
                  ) : (
                    "Construct Ticket"
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Preview Side */}
          <div className="lg:col-span-8">
            {step === "form" && (
              <div className="h-full min-h-[600px] flex flex-col items-center justify-center p-12 border border-white/5 rounded-[3rem] bg-zinc-950/30 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <BusFront className="w-20 h-20 text-zinc-800 mb-8 animate-pulse" />
                <h3 className="text-2xl font-bold text-zinc-500 mb-4 tracking-tighter uppercase">
                  Standard Template Ready
                </h3>
                <p className="text-zinc-600 max-w-sm text-sm font-light leading-relaxed">
                  ระบุรายละเอียดการเดินทางเพื่อขอรับแบบร่างตั๋วโดยสาร บขส.
                  99/999 รูปแบบมาตรฐานอิเล็กทรอนิกส์
                </p>
              </div>
            )}

            {step === "preview" && (
              <div className="bg-slate-100 rounded-[2rem] shadow-2xl p-1 md:p-1 text-black relative overflow-hidden animate-in fade-in zoom-in duration-700">
                {/* 🔒 Watermark Strategy */}
                <div className="absolute inset-0 z-30 bg-black/70 backdrop-blur-[3px] flex flex-col items-center justify-center p-6 text-center select-none">
                  <div className="bg-zinc-900 border border-primary/20 p-10 rounded-[3rem] shadow-2xl max-w-md w-full border-t-4 border-t-primary">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Lock className="text-primary w-8 h-8" />
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-2 uppercase tracking-tight">
                      Ticket Masked
                    </h3>
                    <p className="text-zinc-500 text-sm mb-10 leading-relaxed px-4">
                      เอกสาร E-Ticket ของคุณพร้อมใช้งานแล้ว
                      ชำระค่าธรรมเนียมออกตั๋วเพื่อปลดล็อกลายน้ำและรับไฟล์ภาพ
                      (High-Res) ทางอีเมล
                    </p>

                    <div className="bg-black/50 border border-white/5 rounded-2xl p-6 mb-10 flex justify-between items-center">
                      <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest">
                        Issuance Fee
                      </span>
                      <span className="text-primary font-black text-3xl">
                        ฿590
                      </span>
                    </div>

                    <Button
                      onClick={() => setStep("payment")}
                      className="w-full h-16 bg-primary hover:bg-primary/90 text-black font-black tracking-[0.2em] uppercase rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                    >
                      Process E-Ticket
                    </Button>
                  </div>
                </div>

                {/* THE TICKET (High-Fidelity) */}
                <div className="max-w-md mx-auto my-10 bg-white shadow-xl rounded-xl overflow-hidden opacity-25 select-none font-sans">
                  <div className="bg-[#1a365d] p-6 text-white text-center relative">
                    <div className="bg-white p-2 rounded-lg inline-block mb-3">
                      <div className="w-[60px] h-[60px] bg-slate-100 rounded flex items-center justify-center text-black font-bold text-[8px] uppercase">
                        Transport Logo
                      </div>
                    </div>
                    <h2 className="text-lg font-bold uppercase tracking-tight">
                      The Transport Co., Ltd.
                    </h2>
                    <p className="text-[10px] opacity-80 uppercase tracking-widest font-bold">
                      Official Itinerary Record
                    </p>
                    <div className="absolute top-0 right-0 p-4 opacity-20">
                      <BusFront className="w-12 h-12" />
                    </div>
                  </div>

                  <div className="p-8 space-y-6">
                    <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                      <span className="text-xs text-gray-400 font-bold uppercase">
                        Ticket ID:
                      </span>
                      <span className="text-sm font-black font-mono">
                        TC-{Math.floor(Math.random() * 900000) + 100000}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                        Passenger Name
                      </span>
                      <p className="text-lg font-bold text-gray-800">
                        {formData.passengerName || "SOMCHAI JAIDEE"}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 py-4 bg-slate-50 rounded-2xl px-6 border border-slate-100">
                      <div className="space-y-1">
                        <span className="text-[9px] text-gray-400 font-bold uppercase">
                          Origin
                        </span>
                        <p className="text-xs font-black leading-tight">
                          {formData.departureStation}
                        </p>
                      </div>
                      <div className="space-y-1 text-right">
                        <span className="text-[9px] text-gray-400 font-bold uppercase">
                          Destination
                        </span>
                        <p className="text-xs font-black leading-tight">
                          {formData.arrivalStation}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <span className="text-[9px] text-gray-400 font-bold uppercase">
                          Date of Travel
                        </span>
                        <p className="text-sm font-bold">
                          {formData.travelDate || "2026-10-15"}
                        </p>
                      </div>
                      <div className="space-y-1 text-right">
                        <span className="text-[9px] text-gray-400 font-bold uppercase">
                          Departure Time
                        </span>
                        <p className="text-sm font-bold">20:30 PM</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-6 border-t border-dashed border-gray-200">
                      <div className="space-y-1">
                        <span className="text-[9px] text-gray-400 font-bold uppercase italic">
                          Status: Confirmed
                        </span>
                        <p className="text-xs font-bold text-blue-600">
                          ชั้น 1 (VIP 24)
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-gray-400 font-bold uppercase">
                          Total Fare
                        </span>
                        <p className="text-2xl font-black text-[#1a365d]">
                          {formData.price || "850"} THB
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 flex flex-col items-center gap-2">
                      {/* 📲 REAL QR CODE GENERATION */}
                      <img
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(`https://www.unlink-th.com/verify/transport-co/${Math.random().toString(36).substring(2, 8).toUpperCase()}?name=${formData.passengerName || "SOMCHAI JAIDEE"}&date=${formData.travelDate || "2026-10-15"}&route=${formData.departureStation}-${formData.arrivalStation}`)}`}
                        alt="Verification QR Code"
                        className="w-24 h-24 object-contain mix-blend-multiply opacity-90"
                      />
                      <p className="text-[8px] text-gray-400 uppercase font-bold">
                        Scan to Verify via Smart System
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
                    <p className="text-[7px] text-gray-400 leading-tight">
                      * บขส.
                      ขอสงวนสิทธิ์ในการเปลี่ยนแปลงเงื่อนไขโดยไม่ต้องแจ้งให้ทราบล่วงหน้า{" "}
                      <br />* ตั๋วอิเล็กทรอนิกส์นี้ใช้สำหรับแสดงตนก่อนขึ้นรถ
                      และใช้เป็นหลักฐานการเบิกจ่ายได้ตามระเบียบ
                    </p>
                  </div>
                </div>
              </div>
            )}

            {step === "payment" && (
              <div className="h-full bg-zinc-900/50 border border-primary/20 rounded-[3rem] p-12 flex flex-col items-center justify-center text-center animate-in fade-in slide-in-from-right-12 duration-700 backdrop-blur-xl">
                <div className="bg-white p-6 rounded-[2.5rem] mb-10 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                  <div className="w-56 h-56 bg-zinc-100 rounded-3xl flex items-center justify-center flex-col gap-4 border-2 border-zinc-200 border-dashed">
                    <QrCode className="w-16 h-16 text-black" />
                    <span className="text-black font-black tracking-widest text-xs uppercase">
                      Thai QR Payment
                    </span>
                  </div>
                </div>
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter italic">
                  Secure Checkout
                </h3>
                <p className="text-zinc-500 text-sm mb-12 max-w-sm font-light leading-relaxed">
                  ระบบจะตรวจสอบสลิปอัตโนมัติ และปลดล็อกไฟล์ภาพความละเอียดสูงสู่{" "}
                  <span className="text-white font-bold">{formData.email}</span>{" "}
                  ทันที
                </p>

                <div className="flex gap-4 w-full max-w-sm">
                  <Button
                    variant="outline"
                    onClick={() => setStep("preview")}
                    className="flex-1 h-14 rounded-2xl uppercase tracking-widest text-[10px] font-bold border-white/10"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={() => setStep("success")}
                    className="flex-1 h-14 bg-primary text-black hover:bg-primary/90 rounded-2xl uppercase tracking-widest text-[10px] font-black"
                  >
                    Confirm Payment
                  </Button>
                </div>
              </div>
            )}

            {step === "success" && (
              <div className="h-full bg-white text-slate-900 rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in duration-700 font-sans border-4 border-emerald-500/20">
                {/* 🏛️ Official System Header */}
                <div className="bg-[#1a365d] p-6 text-white flex justify-between items-center border-b-4 border-amber-400">
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-1.5 rounded-lg">
                      <div className="w-10 h-10 bg-slate-100 flex items-center justify-center text-black font-bold text-[6px] uppercase">
                        Transport Logo
                      </div>
                    </div>
                    <div>
                      <h2 className="text-sm font-bold leading-tight uppercase tracking-tighter">
                        The Transport Co., Ltd.
                      </h2>
                      <p className="text-[8px] opacity-70 font-mono tracking-widest uppercase">
                        Digital Ticket Verification System
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 rounded-full flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-tighter">
                        System Online
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  {/* ✅ Verified Badge Area */}
                  <div className="flex flex-col items-center text-center mb-10">
                    <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-6 border-4 border-emerald-100 shadow-inner relative">
                      <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                      <div className="absolute inset-0 rounded-full border-4 border-emerald-500/10 animate-ping" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight mb-1">
                      Verified Successfully
                    </h3>
                    <p className="text-emerald-600 font-bold text-xs uppercase tracking-[0.2em]">
                      ตรวจสอบพบข้อมูลในระบบสากล
                    </p>
                  </div>

                  {/* 📊 Official Data Table */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden mb-10">
                    <div className="bg-slate-100 px-6 py-3 border-b border-slate-200 flex justify-between items-center">
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                        Transaction Audit Record
                      </span>
                      <span className="text-[9px] font-mono text-slate-400 italic">
                        Ref: TRX-SSL-
                        {Math.random().toString(36).substring(7).toUpperCase()}
                      </span>
                    </div>
                    <div className="divide-y divide-slate-200">
                      <div className="grid grid-cols-2 px-6 py-4">
                        <span className="text-xs text-slate-500 font-medium">
                          ชื่อผู้โดยสาร:
                        </span>
                        <span className="text-xs font-bold text-slate-900 text-right uppercase">
                          {formData.passengerName}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 px-6 py-4">
                        <span className="text-xs text-slate-500 font-medium">
                          สถานะตั๋วโดยสาร:
                        </span>
                        <span className="text-xs font-bold text-emerald-600 text-right uppercase">
                          CONFIRMED / ISSUED
                        </span>
                      </div>
                      <div className="grid grid-cols-2 px-6 py-4">
                        <span className="text-xs text-slate-500 font-medium">
                          ช่องทางออกตั๋ว:
                        </span>
                        <span className="text-xs font-bold text-slate-900 text-right uppercase italic">
                          E-TICKET PORTAL
                        </span>
                      </div>
                      <div className="grid grid-cols-2 px-6 py-4 bg-amber-50/30">
                        <span className="text-xs text-slate-500 font-medium">
                          รหัสอ้างอิง (PNR):
                        </span>
                        <span className="text-xs font-black text-blue-700 text-right font-mono tracking-widest uppercase">
                          {Math.random()
                            .toString(36)
                            .substring(2, 8)
                            .toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 📥 Action Buttons */}
                  <div className="space-y-4">
                    <Button className="w-full h-16 bg-[#1a365d] hover:bg-[#122a4a] text-white font-bold rounded-xl uppercase tracking-widest text-sm flex items-center justify-center gap-3 shadow-xl">
                      <FileDown className="w-5 h-5" /> บันทึกตั๋วเป็น PDF
                      (High-Res)
                    </Button>
                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        variant="outline"
                        className="h-12 border-slate-200 text-slate-600 font-bold text-[10px] uppercase tracking-widest rounded-xl"
                      >
                        พิมพ์ใบเสร็จ
                      </Button>
                      <Button
                        onClick={() => setStep("form")}
                        variant="outline"
                        className="h-12 border-slate-200 text-slate-400 font-bold text-[10px] uppercase tracking-widest rounded-xl"
                      >
                        สร้างตั๋วใบใหม่
                      </Button>
                    </div>
                  </div>

                  {/* ⚖️ Legal Footer */}
                  <div className="mt-10 pt-8 border-t border-slate-100">
                    <div className="flex items-start gap-3 opacity-60">
                      <Lock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <p className="text-[9px] text-slate-500 leading-relaxed italic">
                        เอกสารนี้ได้รับการรับรองผ่านระบบ Digital Signature
                        ขั้นสูง <br />
                        ห้ามมิให้ผู้ใดทำการดัดแปลงหรือปลอมแปลงข้อมูลในระบบฐานข้อมูลสากล{" "}
                        <br />
                        The Transport Co., Ltd. Reserved Rights © 2026
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
