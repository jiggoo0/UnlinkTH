"use client";

import React, { useState, useEffect } from "react";
import { BusFront, Lock, RefreshCw, Receipt, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { getPaymentConfig, calculateSafeAmount } from "@/lib/utils";

/**
 * 🚌 EXPRESS BUS FORM COMPONENT v2.0 (Elite Fidelity)
 * -------------------------------------------------------------------------
 * ระบบฟอร์ม Interactive สำหรับบริการออกตั๋วรถทัวร์ บขส. 99/999
 */

export function ExpressBusForm() {
  const [formData, setFormData] = useState({
    passengerName: "",
    departureStation: "กรุงเทพฯ (หมอชิต 2)",
    arrivalStation: "เชียงใหม่",
    travelDate: "",
    price: "850",
    email: "",
    website_url: "", // 🛡️ Honeypot Field
  });

  const [step, setStep] = useState<"form" | "preview" | "payment" | "success">(
    "form",
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [exactAmount, setExactAmount] = useState<number>(850);
  const [caseId, setCaseId] = useState<string>("");

  useEffect(() => {
    if (step === "payment") {
      setExactAmount(calculateSafeAmount(Number(formData.price) || 850));
    }
  }, [step, formData.price]);

  const paymentData = getPaymentConfig(exactAmount);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/services/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_type: "express-bus-ticket",
          is_draft: true,
          website_url: formData.website_url, // ส่ง Honeypot ไปตรวจสอบ
          metadata: {
            ...formData,
            provider: "transport-co",
            amount: Number(formData.price) || 850,
          },
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error("Failed to submit request");
      }

      setCaseId(data.id);
      toast.success("บันทึกแบบร่างสำเร็จ");
      setStep("preview");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("เกิดข้อผิดพลาดในการส่งข้อมูล โปรดลองอีกครั้ง");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Form Side */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-zinc-900/80 border border-white/5 p-8 rounded-[2rem] backdrop-blur-xl shadow-2xl">
            <h3 className="text-lg font-bold mb-8 flex items-center gap-3 border-b border-white/5 pb-4">
              <Receipt className="text-primary w-5 h-5" />
              กำหนดข้อมูลตั๋วโดยสาร (ภาษาไทย)
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                  ชื่อผู้โดยสาร (ไทย/อังกฤษ)
                </label>
                <input
                  required
                  type="text"
                  placeholder="เช่น นายสมชาย ใจดี"
                  value={formData.passengerName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      passengerName: e.target.value,
                    })
                  }
                  className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 focus:outline-none focus:border-primary transition-all text-sm font-medium text-white"
                />
                <p className="text-[9px] text-zinc-600 italic">
                  ระบุชื่อผู้เดินทางให้ชัดเจนเพื่อพิมพ์ลงบนตั๋ว
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                  สถานีต้นทาง
                </label>
                <input
                  required
                  type="text"
                  placeholder="เช่น กรุงเทพฯ (หมอชิต 2)"
                  value={formData.departureStation}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      departureStation: e.target.value,
                    })
                  }
                  className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 focus:outline-none focus:border-primary text-xs text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                  สถานีปลายทาง
                </label>
                <input
                  required
                  type="text"
                  placeholder="เช่น เชียงใหม่"
                  value={formData.arrivalStation}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      arrivalStation: e.target.value,
                    })
                  }
                  className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 focus:outline-none focus:border-primary text-xs text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                    วันที่เดินทาง
                  </label>
                  <input
                    required
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) =>
                      setFormData({ ...formData, travelDate: e.target.value })
                    }
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 focus:outline-none focus:border-primary text-xs text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                    ราคาหน้าตั๋ว (บาท)
                  </label>
                  <input
                    required
                    type="number"
                    placeholder="850"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 focus:outline-none focus:border-primary text-xs text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                  อีเมลสำหรับรับเอกสาร
                </label>
                <input
                  required
                  type="email"
                  placeholder="your-email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 focus:outline-none focus:border-primary text-xs text-white"
                />
                <p className="text-[9px] text-zinc-600 italic">
                  ตั๋วอิเล็กทรอนิกส์ตัวจริงจะส่งไปที่อีเมลนี้
                </p>
              </div>

              {/* 🛡️ HONEYPOT: Hidden from humans, tempting for bots */}
              <div className="hidden">
                <input
                  type="text"
                  value={formData.website_url}
                  onChange={(e) =>
                    setFormData({ ...formData, website_url: e.target.value })
                  }
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || step !== "form"}
                className="w-full h-16 mt-4 bg-primary hover:bg-primary/90 text-black font-black tracking-[0.2em] uppercase rounded-2xl transition-all"
              >
                {isSubmitting ? (
                  <RefreshCw className="w-5 h-5 animate-spin" />
                ) : (
                  "สร้างแบบร่างตั๋วโดยสาร"
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Preview Side */}
        <div className="lg:col-span-7">
          {step === "form" && (
            <div className="h-full min-h-[500px] flex flex-col items-center justify-center p-12 border border-white/5 rounded-[3rem] bg-zinc-950/30 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <BusFront className="w-20 h-20 text-zinc-800 mb-8 animate-pulse" />
              <h3 className="text-2xl font-bold text-zinc-500 mb-4 tracking-tighter uppercase">
                Standard Template Ready
              </h3>
              <p className="text-zinc-600 max-w-sm text-sm font-light leading-relaxed">
                ระบุรายละเอียดการเดินทางเพื่อขอรับแบบร่างตั๋วโดยสาร บขส. 99/999
                รูปแบบมาตรฐานอิเล็กทรอนิกส์
              </p>
            </div>
          )}

          {step === "preview" && (
            <div className="bg-slate-100 rounded-[2rem] shadow-2xl p-1 text-black relative overflow-hidden animate-in fade-in zoom-in duration-700">
              {/* 🔒 Watermark Strategy (60% Mask) */}
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
                      ฿450
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
              <div className="max-w-md mx-auto my-10 bg-white shadow-xl rounded-xl overflow-hidden opacity-25 select-none font-sans border-2 border-slate-200">
                <div className="bg-[#1a365d] p-6 text-white text-center relative border-b-4 border-amber-400">
                  <div className="bg-white p-2 rounded-lg inline-block mb-3 shadow-inner">
                    <BusFront className="w-10 h-10 text-[#1a365d]" />
                  </div>
                  <h2 className="text-lg font-bold uppercase tracking-tight leading-tight">
                    The Transport Co., Ltd.
                  </h2>
                  <p className="text-[10px] opacity-80 uppercase tracking-widest font-bold">
                    Official E-Itinerary Record
                  </p>
                </div>

                <div className="p-8 space-y-6 text-slate-900">
                  <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                    <span className="text-xs text-gray-400 font-bold uppercase tracking-tighter">
                      Ticket Reference
                    </span>
                    <span className="text-sm font-black font-mono tracking-widest text-[#1a365d]">
                      {caseId.slice(-6) || "TC-928172"}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                      Passenger Information
                    </span>
                    <p className="text-lg font-black text-slate-800">
                      {formData.passengerName.toUpperCase() || "CLIENT NAME"}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-8 py-4 bg-slate-50 rounded-2xl px-6 border border-slate-100">
                    <div className="space-y-1">
                      <span className="text-[9px] text-gray-400 font-bold uppercase">
                        Origin Station
                      </span>
                      <p className="text-xs font-black leading-tight text-slate-800">
                        {formData.departureStation}
                      </p>
                    </div>
                    <div className="space-y-1 text-right">
                      <span className="text-[9px] text-gray-400 font-bold uppercase">
                        Destination
                      </span>
                      <p className="text-xs font-black leading-tight text-slate-800">
                        {formData.arrivalStation}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1 text-left">
                      <span className="text-[9px] text-gray-400 font-bold uppercase">
                        Travel Date
                      </span>
                      <p className="text-sm font-bold text-slate-800">
                        {formData.travelDate || "2026-10-15"}
                      </p>
                    </div>
                    <div className="space-y-1 text-right">
                      <span className="text-[9px] text-gray-400 font-bold uppercase">
                        Departure Time
                      </span>
                      <p className="text-sm font-bold text-slate-800">
                        20:30 PM
                      </p>
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
                        Fare Amount
                      </span>
                      <p className="text-2xl font-black text-[#1a365d]">
                        ฿{formData.price || "850"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === "payment" && (
            <div className="h-full bg-zinc-900/50 border border-primary/20 rounded-[3rem] p-12 flex flex-col items-center justify-center text-center animate-in fade-in slide-in-from-right-12 duration-700 backdrop-blur-xl">
              <div className="bg-white p-6 rounded-[2.5rem] mb-10 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                <div className="w-56 h-56 bg-zinc-100 rounded-3xl flex items-center justify-center flex-col gap-2 border-2 border-zinc-200 border-dashed overflow-hidden relative">
                  <img
                    src={paymentData.qrUrl}
                    alt="Thai QR Payment"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div className="mt-4 flex flex-col items-center justify-center gap-1">
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">
                    ยอดที่ต้องโอนให้ตรง
                  </span>
                  <span className="text-3xl text-black font-black tracking-tighter italic">
                    ฿{exactAmount.toFixed(2)}
                  </span>
                </div>
              </div>
              <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter italic text-white">
                การออก <span className="text-primary">ตั๋วโดยสาร</span>
              </h3>
              <p className="text-zinc-500 text-sm mb-12 max-w-sm font-light leading-relaxed">
                รบกวนโอนยอด{" "}
                <span className="text-white font-bold text-lg">
                  ฿{exactAmount.toFixed(2)}
                </span>{" "}
                (รวมเศษสตางค์ยืนยันตัวตน)
                <br />
                ระบบจะแจ้งเตือนเจ้าหน้าที่อัตโนมัติ
                และส่งตั๋วฉบับเต็มให้ท่านทางอีเมลทันที
              </p>

              <div className="flex gap-4 w-full max-w-sm">
                <Button
                  variant="outline"
                  onClick={() => setStep("preview")}
                  className="flex-1 h-14 rounded-2xl uppercase tracking-widest text-[10px] font-bold border-white/10 text-white"
                >
                  ย้อนกลับ
                </Button>
                <Button
                  onClick={() => setStep("success")}
                  className="flex-1 h-14 bg-primary text-black hover:bg-primary/90 rounded-2xl uppercase tracking-widest text-[10px] font-black"
                >
                  ยืนยันการชำระเงิน
                </Button>
              </div>
            </div>
          )}

          {step === "success" && (
            <div className="h-full bg-white text-slate-900 rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in duration-700 font-sans border-4 border-emerald-500/20">
              <div className="bg-[#1a365d] p-6 text-white flex justify-between items-center border-b-4 border-amber-400">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-1.5 rounded-lg">
                    <BusFront className="w-8 h-8 text-[#1a365d]" />
                  </div>
                  <div className="text-left">
                    <h2 className="text-sm font-bold leading-tight uppercase tracking-tighter">
                      บริษัท ขนส่ง จำกัด
                    </h2>
                    <p className="text-[8px] opacity-70 font-mono tracking-widest uppercase">
                      ระบบตรวจสอบสถานะตั๋ว
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 rounded-full flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-tighter">
                      สถานะ: ปกติ
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="flex flex-col items-center text-center mb-10">
                  <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-6 border-4 border-emerald-100 shadow-inner relative">
                    <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                    <div className="absolute inset-0 rounded-full border-4 border-emerald-500/10 animate-ping" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight mb-1">
                    ได้รับข้อมูลชำระเงินแล้ว
                  </h3>
                  <p className="text-emerald-600 font-bold text-xs uppercase tracking-[0.2em]">
                    กำลังเตรียมตั๋วฉบับจริงส่งให้ท่าน
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-10 text-center">
                  <p className="text-xs text-slate-500 leading-relaxed italic">
                    ขอบคุณสำหรับการเลือกใช้บริการ UNLINK-GLOBAL <br />
                    ตั๋ว บขส. 99/999 (High-Res) จะถูกจัดส่งไปยัง <br />
                    <strong>{formData.email}</strong> ภายใน 15-30 นาที
                  </p>
                </div>

                <div className="space-y-4">
                  <Button
                    onClick={() => setStep("form")}
                    variant="outline"
                    className="w-full h-14 border-slate-200 text-slate-600 font-bold text-[10px] uppercase tracking-widest rounded-xl"
                  >
                    ออกตั๋วใบใหม่
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
