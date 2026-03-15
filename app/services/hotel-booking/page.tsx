"use client";

import React, { useState, useEffect } from "react";
import { Hotel, Lock, RefreshCw, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getPaymentConfig, calculateSafeAmount } from "@/lib/utils";
import { toast } from "sonner";

/**
 * 🏨 LUXURY HOTEL ALIGNMENT v1.1
 * -------------------------------------------------------------------------
 * ระบบสร้างแบบร่างเอกสารยืนยันการจองโรงแรมหรู (Thai Interface / Elite Fidelity)
 */

export default function HotelBookingGenerator() {
  const [formData, setFormData] = useState({
    guestName: "",
    hotel: "RITZ_PARIS",
    checkIn: "",
    checkOut: "",
    roomType: "Deluxe Suite",
    guests: "2 Adults",
    email: "",
    website_url: "", // 🛡️ Honeypot Field
  });

  const [step, setStep] = useState<"form" | "preview" | "payment" | "success">(
    "form",
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [exactAmount, setExactAmount] = useState<number>(590);
  const [caseId, setCaseId] = useState<string>("");

  useEffect(() => {
    // 60% Visibility Strategy: Calculate a unique price
    const basePrice = 590;
    if (step === "payment") {
      setExactAmount(calculateSafeAmount(basePrice));
    }
  }, [step]);

  const paymentData = getPaymentConfig(exactAmount);

  const hotels: Record<
    string,
    { name: string; logo: string; location: string; stars: number }
  > = {
    RITZ_PARIS: {
      name: "Ritz Paris",
      logo: "https://www.ritzparis.com/sites/default/files/logo_ritz_paris_0.png",
      location: "15 Pl. Vendôme, 75001 Paris, France",
      stars: 5,
    },
    SAVOY_LONDON: {
      name: "The Savoy",
      logo: "https://logos-world.net/wp-content/uploads/2023/02/The-Savoy-Logo.png",
      location: "Strand, London WC2R 0EZ, United Kingdom",
      stars: 5,
    },
    ADLON_BERLIN: {
      name: "Hotel Adlon Kempinski Berlin",
      logo: "https://logos-world.net/wp-content/uploads/2023/03/Kempinski-Logo.png",
      location: "Unter den Linden 77, 10117 Berlin, Germany",
      stars: 5,
    },
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    // 🛡️ [LEAD CAPTURE]: บันทึกข้อมูลเป็น Draft ทันที
    try {
      const res = await fetch("/api/services/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_type: "hotel-booking",
          is_draft: true,
          website_url: formData.website_url, // ส่ง Honeypot ไปตรวจสอบ
          metadata: {
            ...formData,
            hotelName: hotels[formData.hotel].name,
            provider: formData.hotel,
          },
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setCaseId(data.id);
        setStep("preview");
      } else {
        toast.error("ขออภัย ระบบขัดข้องโปรดลองใหม่");
      }
    } catch (err: unknown) {
      console.error("Booking error:", err);
      toast.error("การเชื่อมต่อล้มเหลว");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSubmitPayment = () => {
    setStep("payment");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-24 px-4 relative overflow-hidden font-sans">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-amber-500/30 text-amber-500 px-4 py-1 font-mono text-[10px] tracking-[0.2em] uppercase"
          >
            Luxury Hospitality Standards
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase italic">
            Hotel <span className="text-amber-500">Booking</span> Confirmation
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            ระบบจัดทำแบบร่างใบยืนยันการจองโรงแรมหรูระดับสากล (Luxury Alignment){" "}
            <br className="hidden md:block" />
            รูปแบบสมจริง 97%+ รองรับโรงแรมชั้นนำในยุโรปและทั่วโลก
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Form Side */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-zinc-900/80 border border-white/5 p-8 rounded-[2rem] backdrop-blur-xl shadow-2xl">
              <h3 className="text-lg font-bold mb-8 flex items-center gap-3 border-b border-white/5 pb-4">
                <Hotel className="text-amber-500 w-5 h-5" />
                ระบุข้อมูลการจอง (ภาษาไทย)
              </h3>

              <form onSubmit={handleGenerate} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                    เลือกโรงแรมที่ต้องการ
                  </label>
                  <select
                    value={formData.hotel}
                    onChange={(e) =>
                      setFormData({ ...formData, hotel: e.target.value })
                    }
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 focus:outline-none focus:border-amber-500 transition-all text-sm font-medium"
                  >
                    {Object.entries(hotels).map(([id, h]) => (
                      <option key={id} value={id}>
                        {h.name}
                      </option>
                    ))}
                  </select>
                  <p className="text-[9px] text-zinc-600 italic">
                    เลือกโรงแรมหรูที่คุณต้องการสร้างใบยืนยันการจอง
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                    ชื่อ-นามสกุล ผู้เข้าพัก (อังกฤษ)
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="เช่น MR. SOMCHAI JAIDEE"
                    value={formData.guestName}
                    onChange={(e) =>
                      setFormData({ ...formData, guestName: e.target.value })
                    }
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 focus:outline-none focus:border-amber-500 uppercase font-medium text-xs tracking-tight"
                  />
                  <p className="text-[9px] text-zinc-600 italic">
                    กรอกชื่อเป็นภาษาอังกฤษตามหน้าพาสปอร์ตเพื่อความสมจริง
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                      วันที่เข้าพัก (Check-In)
                    </label>
                    <input
                      required
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) =>
                        setFormData({ ...formData, checkIn: e.target.value })
                      }
                      className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 focus:outline-none focus:border-amber-500 text-xs"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                      วันที่ออก (Check-Out)
                    </label>
                    <input
                      required
                      type="date"
                      value={formData.checkOut}
                      onChange={(e) =>
                        setFormData({ ...formData, checkOut: e.target.value })
                      }
                      className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 focus:outline-none focus:border-amber-500 text-xs"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                    ประเภทห้องพัก
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="เช่น Deluxe Suite / Suite with View"
                    value={formData.roomType}
                    onChange={(e) =>
                      setFormData({ ...formData, roomType: e.target.value })
                    }
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 focus:outline-none focus:border-amber-500 text-xs"
                  />
                  <p className="text-[9px] text-zinc-600 italic">
                    ระบุประเภทห้องพักที่ต้องการให้แสดงในใบจอง
                  </p>
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
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 focus:outline-none focus:border-amber-500 text-xs"
                  />
                  <p className="text-[9px] text-zinc-600 italic">
                    ไฟล์ PDF ตัวจริงจะส่งไปที่อีเมลนี้หลังการยืนยัน
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
                  disabled={isGenerating || step !== "form"}
                  className="w-full h-16 mt-4 bg-amber-500 hover:bg-amber-600 text-black font-black tracking-[0.2em] uppercase rounded-2xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                >
                  {isGenerating ? (
                    <RefreshCw className="w-5 h-5 animate-spin" />
                  ) : (
                    "สร้างแบบร่างใบจอง"
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Preview Side */}
          <div className="lg:col-span-8 space-y-6">
            {step === "form" && (
              <div className="h-full min-h-[600px] flex flex-col items-center justify-center p-12 border border-white/5 rounded-[3rem] bg-zinc-950/30 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <Hotel className="w-20 h-20 text-zinc-800 mb-8 animate-bounce" />
                <h3 className="text-2xl font-bold text-zinc-500 mb-4 tracking-tighter uppercase">
                  เลือกข้อมูลที่ต้องการ
                </h3>
                <p className="text-zinc-600 max-w-sm text-sm font-light leading-relaxed">
                  เลือกโรงแรมและระบุรายละเอียดการเข้าพักเพื่อสร้างแบบร่างใบยืนยัน
                  (Luxury Reconstruction)
                </p>
              </div>
            )}

            {step === "preview" && (
              <div className="bg-white rounded-[2rem] shadow-2xl p-1 md:p-4 text-black relative overflow-hidden animate-in fade-in zoom-in duration-700">
                {/* 🔒 Watermark Strategy (60% coverage) */}
                <div className="absolute inset-0 z-30 bg-black/70 backdrop-blur-[4px] flex flex-col items-center justify-center p-6 text-center select-none">
                  <div className="bg-zinc-900 border border-amber-500/20 p-10 rounded-[3rem] shadow-2xl max-w-md w-full border-t-4 border-t-amber-500">
                    <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Lock className="text-amber-500 w-8 h-8" />
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-2 uppercase tracking-tight">
                      แบบร่างถูกล็อคไว้
                    </h3>
                    <p className="text-zinc-500 text-sm mb-10 leading-relaxed px-4">
                      เอกสารยืนยันการจองโรงแรมหรูของคุณถูกสร้างขึ้นเรียบร้อย
                      ชำระค่าธรรมเนียมเพื่อลบลายน้ำและรับไฟล์ PDF (High-Res)
                      ทางอีเมลทันที
                    </p>

                    <div className="bg-black/50 border border-white/5 rounded-2xl p-6 mb-10 flex justify-between items-center">
                      <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest">
                        ค่าธรรมเนียมออกตั๋ว
                      </span>
                      <span className="text-amber-500 font-black text-3xl">
                        ฿{exactAmount.toFixed(0)}
                      </span>
                    </div>

                    <Button
                      onClick={handleSubmitPayment}
                      className="w-full h-16 bg-amber-500 hover:bg-amber-600 text-black font-black tracking-[0.2em] uppercase rounded-2xl shadow-[0_0_30px_rgba(245,158,11,0.3)]"
                    >
                      ปลดล็อคเอกสารฉบับเต็ม
                    </Button>
                  </div>
                </div>

                {/* 🏨 THE DOCUMENT (High Fidelity) */}
                <div className="bg-white p-8 md:p-12 relative z-10 opacity-20 select-none font-serif">
                  {/* Header */}
                  <div className="flex justify-between items-start border-b border-zinc-200 pb-10 mb-10">
                    <div className="space-y-6">
                      <div className="relative w-40 h-20">
                        {/* Placeholder for Logo */}
                        <div className="w-full h-full bg-slate-100 flex items-center justify-center text-zinc-400 text-[10px] font-bold uppercase tracking-widest border border-dashed border-zinc-300">
                          {hotels[formData.hotel].name}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                          Booking Confirmation
                        </p>
                        <h2 className="text-2xl font-black tracking-tighter uppercase italic">
                          Reservation Details
                        </h2>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-amber-100 text-amber-700 px-4 py-2 rounded-lg font-bold text-xs inline-block mb-4 uppercase tracking-widest">
                        Confirmed
                      </div>
                      <p className="text-[10px] text-zinc-400 uppercase font-bold mb-1">
                        Confirmation Number
                      </p>
                      <p className="text-xl font-black text-zinc-800 tracking-widest">
                        {caseId.slice(-8) || "RX-928172"}
                      </p>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="grid md:grid-cols-2 gap-12 mb-12">
                    <div className="space-y-6">
                      <div>
                        <p className="text-[10px] text-zinc-400 uppercase font-black mb-2">
                          Guest Details
                        </p>
                        <p className="text-xl font-bold text-zinc-800">
                          {formData.guestName.toUpperCase() || "MR. GUEST NAME"}
                        </p>
                        <p className="text-xs text-zinc-500 mt-1">
                          Reservation for {formData.guests}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] text-zinc-400 uppercase font-black mb-2">
                          Property Location
                        </p>
                        <p className="text-sm font-bold text-zinc-800">
                          {hotels[formData.hotel].name}
                        </p>
                        <p className="text-xs text-zinc-500 leading-relaxed max-w-xs">
                          {hotels[formData.hotel].location}
                        </p>
                      </div>
                    </div>

                    <div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100">
                      <div className="grid grid-cols-2 gap-8 mb-8">
                        <div>
                          <p className="text-[9px] text-zinc-400 uppercase font-black mb-1">
                            Arrival
                          </p>
                          <p className="text-sm font-black text-zinc-800">
                            {formData.checkIn || "2026-10-15"}
                          </p>
                          <p className="text-[9px] text-zinc-400 uppercase mt-1">
                            From 3:00 PM
                          </p>
                        </div>
                        <div>
                          <p className="text-[9px] text-zinc-400 uppercase font-black mb-1">
                            Departure
                          </p>
                          <p className="text-sm font-black text-zinc-800">
                            {formData.checkOut || "2026-10-20"}
                          </p>
                          <p className="text-[9px] text-zinc-400 uppercase mt-1">
                            Until 12:00 PM
                          </p>
                        </div>
                      </div>
                      <div className="pt-6 border-t border-zinc-200">
                        <p className="text-[9px] text-zinc-400 uppercase font-black mb-1">
                          Accommodation Type
                        </p>
                        <p className="text-sm font-black text-amber-700">
                          {formData.roomType}
                        </p>
                        <p className="text-[9px] text-zinc-400 uppercase mt-1">
                          Breakfast Included • Free Wi-Fi
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Payment Summary */}
                  <div className="border-t-2 border-zinc-800 pt-8 mt-8 flex justify-between items-end">
                    <div className="space-y-4">
                      <p className="text-[10px] text-zinc-400 uppercase font-black">
                        Policy & Guidelines
                      </p>
                      <div className="space-y-1 text-[9px] text-zinc-500 uppercase leading-relaxed max-w-md">
                        <p>
                          * Cancellation must be made 48 hours prior to arrival.
                        </p>
                        <p>
                          * A valid credit card and government ID are required
                          upon check-in.
                        </p>
                        <p>
                          * Total amount includes all taxes and service fees.
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-zinc-400 uppercase font-black mb-1">
                        Total Charges
                      </p>
                      <p className="text-4xl font-black text-zinc-800 italic">
                        €{Math.floor(Math.random() * 2000) + 500}.00
                      </p>
                      <p className="text-[9px] text-zinc-400 uppercase mt-1">
                        Prepaid / Guaranteed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === "payment" && (
              <div className="h-full bg-zinc-900/50 border border-amber-500/20 rounded-[3rem] p-12 flex flex-col items-center justify-center text-center animate-in fade-in slide-in-from-right-12 duration-700 backdrop-blur-xl">
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
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter italic text-amber-500">
                  Liaison Verification
                </h3>
                <p className="text-zinc-500 text-sm mb-12 max-w-sm font-light leading-relaxed">
                  รบกวนโอนยอด{" "}
                  <span className="text-white font-bold text-lg">
                    ฿{exactAmount.toFixed(2)}
                  </span>{" "}
                  เพื่อยืนยันคำขอ
                  เจ้าหน้าที่จะทำการตรวจสอบและออกใบยืนยันการจองตัวจริงให้ทางอีเมลภายใน
                  15 นาที
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
                    className="flex-1 h-14 bg-amber-500 text-black hover:bg-amber-600 rounded-2xl uppercase tracking-widest text-[10px] font-black"
                  >
                    Confirm Paid
                  </Button>
                </div>
              </div>
            )}

            {step === "success" && (
              <div className="h-full bg-white text-slate-900 rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in duration-700 font-sans border-4 border-amber-500/20">
                <div className="bg-[#1a1a1a] p-6 text-white flex justify-between items-center border-b-4 border-amber-500">
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-1.5 rounded-lg">
                      <Hotel className="w-8 h-8 text-[#1a1a1a]" />
                    </div>
                    <div className="text-left">
                      <h2 className="text-sm font-bold leading-tight uppercase tracking-tighter">
                        UNLINK LUXURY HUB
                      </h2>
                      <p className="text-[8px] opacity-70 font-mono tracking-widest uppercase">
                        ระบบตรวจสอบข้อมูลการจองโรงแรม
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-amber-500/20 border border-amber-500/40 px-3 py-1 rounded-full flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      <span className="text-[10px] font-bold text-amber-400 uppercase tracking-tighter">
                        ได้รับคำขอแล้ว
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <div className="flex flex-col items-center text-center mb-10">
                    <div className="w-24 h-24 bg-amber-50 rounded-full flex items-center justify-center mb-6 border-4 border-amber-100 shadow-inner relative">
                      <CheckCircle2 className="w-12 h-12 text-amber-500" />
                      <div className="absolute inset-0 rounded-full border-4 border-amber-500/10 animate-ping" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tight mb-1">
                      กำลังดำเนินการ
                    </h3>
                    <p className="text-amber-600 font-bold text-xs uppercase tracking-[0.2em]">
                      เจ้าหน้าที่กำลังตรวจสอบยอดชำระและออกใบจอง
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden mb-10">
                    <div className="bg-slate-100 px-6 py-3 border-b border-slate-200 flex justify-between items-center">
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                        สรุปรายการจอง
                      </span>
                      <span className="text-[9px] font-mono text-slate-400 italic">
                        โหนด: LUX-HUB-2026
                      </span>
                    </div>
                    <div className="p-6 text-center space-y-4">
                      <p className="text-xs text-slate-600 leading-relaxed">
                        ขอบคุณสำหรับการชำระเงิน ระบบได้รับข้อมูลเรียบร้อยแล้ว{" "}
                        <br />
                        ใบจองตัวจริงจาก{" "}
                        <strong>{hotels[formData.hotel].name}</strong>{" "}
                        จะถูกส่งไปยังอีเมล <strong>{formData.email}</strong>{" "}
                        ภายใน 15-30 นาที
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button
                      onClick={() => setStep("form")}
                      className="w-full h-16 bg-[#1a1a1a] hover:bg-black text-white font-bold rounded-xl uppercase tracking-widest text-sm"
                    >
                      สร้างรายการใหม่
                    </Button>
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
