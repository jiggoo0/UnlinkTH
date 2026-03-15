"use client";

import React, { useState, useEffect } from "react";
import {
  PlaneTakeoff,
  Lock,
  RefreshCw,
  CheckCircle2,
  Globe,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getPaymentConfig, calculateSafeAmount } from "@/lib/utils";
import { toast } from "sonner";

/**
 * 🛫 OFFICIAL ITINERARY ALIGNMENT v2.1 (Lead Capture / Thai UI)
 * -------------------------------------------------------------------------
 * ระบบสร้างแบบร่างเอกสารยืนยันแผนการเดินทางมาตรฐาน GDS (97%+ Similarity)
 */

export default function FlightItineraryGenerator() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    airline: "THAI",
    priority: "standard",
    departureCity: "BANGKOK (BKK)",
    arrivalCity: "LONDON (LHR)",
    departureDate: "",
    returnDate: "",
    email: "",
    website_url: "", // 🛡️ Honeypot Field
  });

  const [step, setStep] = useState<"form" | "preview" | "payment" | "success">(
    "form",
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [exactAmount, setExactAmount] = useState<number>(490);
  const [caseId, setCaseId] = useState<string>("");

  useEffect(() => {
    const basePrice = formData.priority === "express" ? 890 : 490;
    if (step === "payment") {
      setExactAmount(calculateSafeAmount(basePrice));
    }
  }, [step, formData.priority]);

  const paymentData = getPaymentConfig(exactAmount);

  const airlines: Record<
    string,
    { name: string; logo: string; code: string; color: string }
  > = {
    THAI: {
      name: "Thai Airways International",
      logo: "https://logos-world.net/wp-content/uploads/2023/01/Thai-Airways-Logo.png",
      code: "TG",
      color: "#4a154b",
    },
    EMIRATES: {
      name: "Emirates",
      logo: "https://logos-world.net/wp-content/uploads/2020/03/Emirates-Logo.png",
      code: "EK",
      color: "#d71921",
    },
    QATAR: {
      name: "Qatar Airways",
      logo: "https://logos-world.net/wp-content/uploads/2023/03/Qatar-Airways-Logo.png",
      code: "QR",
      color: "#8a1538",
    },
    LUFTHANSA: {
      name: "Lufthansa",
      logo: "https://logos-world.net/wp-content/uploads/2020/11/Lufthansa-Logo.png",
      code: "LH",
      color: "#000745",
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
          service_type: "flight-itinerary",
          is_draft: true,
          website_url: formData.website_url, // ส่ง Honeypot ไปตรวจสอบ
          metadata: {
            ...formData,
            provider:
              formData.airline === "THAI"
                ? "tg-airways"
                : formData.airline.toLowerCase(),
            amount: formData.priority === "express" ? 890 : 490,
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
      console.error("Submission error:", err);
      toast.error("การเชื่อมต่อล้มเหลว");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSubmitPayment = () => {
    setStep("payment");
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
            Global Compliance GDS Standard
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase italic">
            Flight <span className="text-primary">Itinerary</span> Alignment
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            ระบบจัดทำแบบร่างเอกสารยืนยันแผนการเดินทางรูปแบบสากล (Confirmed
            Format) <br className="hidden md:block" />
            ผ่านสถาปัตยกรรม GDS รองรับสายการบินหลักทั่วโลก ข้อมูลสมจริง 97%+
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Configuration Form */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-zinc-900/80 border border-white/5 p-8 rounded-[2rem] backdrop-blur-xl shadow-2xl">
              <h3 className="text-lg font-bold mb-8 flex items-center gap-3 border-b border-white/5 pb-4">
                <Globe className="text-primary w-5 h-5" />
                ระบุข้อมูลการเดินทาง (ภาษาไทย)
              </h3>

              <form onSubmit={handleGenerate} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                    สายการบินที่ต้องการ
                  </label>
                  <select
                    value={formData.airline}
                    onChange={(e) =>
                      setFormData({ ...formData, airline: e.target.value })
                    }
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 focus:outline-none focus:border-primary transition-all text-sm font-medium"
                  >
                    {Object.entries(airlines).map(([id, a]) => (
                      <option key={id} value={id}>
                        {a.name}
                      </option>
                    ))}
                  </select>
                  <p className="text-[9px] text-zinc-600 italic">
                    เลือกสายการบินเพื่อใช้รูปแบบเอกสาร GDS ที่ถูกต้อง
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                      ชื่อจริง (ภาษาอังกฤษ)
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="GIVEN NAME"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 focus:outline-none focus:border-primary uppercase font-mono text-xs tracking-tighter"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                      นามสกุล (ภาษาอังกฤษ)
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="SURNAME"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 focus:outline-none focus:border-primary uppercase font-mono text-xs tracking-tighter"
                    />
                  </div>
                </div>
                <p className="text-[9px] text-zinc-600 italic -mt-4">
                  กรอกชื่อ-นามสกุล เป็นภาษาอังกฤษตามหน้าพาสปอร์ต
                </p>

                <div className="space-y-2">
                  <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                    เมืองต้นทาง (ภาษาอังกฤษ)
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="เช่น BANGKOK (BKK)"
                    value={formData.departureCity}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        departureCity: e.target.value,
                      })
                    }
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 focus:outline-none focus:border-primary uppercase font-medium text-xs"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                    เมืองปลายทาง (ภาษาอังกฤษ)
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="เช่น LONDON (LHR)"
                    value={formData.arrivalCity}
                    onChange={(e) =>
                      setFormData({ ...formData, arrivalCity: e.target.value })
                    }
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 focus:outline-none focus:border-primary uppercase font-medium text-xs"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                      วันที่เดินทางไป
                    </label>
                    <input
                      required
                      type="date"
                      value={formData.departureDate}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          departureDate: e.target.value,
                        })
                      }
                      className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 focus:outline-none focus:border-primary text-xs"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                      วันที่เดินทางกลับ
                    </label>
                    <input
                      type="date"
                      value={formData.returnDate}
                      onChange={(e) =>
                        setFormData({ ...formData, returnDate: e.target.value })
                      }
                      className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 focus:outline-none focus:border-primary text-xs"
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
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 focus:outline-none focus:border-primary text-xs"
                  />
                  <p className="text-[9px] text-zinc-600 italic">
                    ไฟล์ PDF แผนการเดินทางจริงจะถูกจัดส่งไปยังอีเมลนี้
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={isGenerating || step !== "form"}
                  className="w-full h-16 mt-4 bg-primary hover:bg-primary/90 text-black font-black tracking-[0.2em] uppercase rounded-2xl transition-all"
                >
                  {isGenerating ? (
                    <RefreshCw className="w-5 h-5 animate-spin" />
                  ) : (
                    "สร้างแบบร่างแผนการเดินทาง"
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* High-Fidelity Preview / Payment / Success */}
          <div className="lg:col-span-8 space-y-6">
            {step === "form" && (
              <div className="h-full min-h-[600px] flex flex-col items-center justify-center p-12 border border-white/5 rounded-[3rem] bg-zinc-950/30 text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                <PlaneTakeoff className="w-20 h-20 text-zinc-800 mb-8 animate-bounce" />
                <h3 className="text-2xl font-bold text-zinc-500 mb-4 tracking-tighter uppercase">
                  Awaiting Global Parameters
                </h3>
                <p className="text-zinc-600 max-w-sm text-sm font-light leading-relaxed">
                  ระบุข้อมูลแผนการเดินทางของคุณเพื่อเริ่มต้นระบบสร้างเอกสารมาตรฐาน
                  (GDS Re-construction)
                </p>
              </div>
            )}

            {step === "preview" && (
              <div className="bg-white rounded-[2rem] shadow-2xl p-1 md:p-4 text-black relative overflow-hidden animate-in fade-in zoom-in duration-700">
                {/* 🔒 Watermark Strategy (60% coverage) */}
                <div className="absolute inset-0 z-30 bg-black/60 backdrop-blur-[3px] flex flex-col items-center justify-center p-6 text-center select-none">
                  <div className="bg-zinc-900 border border-primary/20 p-10 rounded-[3rem] shadow-2xl max-w-md w-full border-t-4 border-t-primary">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Lock className="text-primary w-8 h-8" />
                    </div>
                    <h3 className="text-white text-2xl font-bold mb-2 uppercase tracking-tight">
                      Preview Restricted
                    </h3>
                    <p className="text-zinc-500 text-sm mb-10 leading-relaxed px-4">
                      เอกสารแผนการเดินทางของคุณถูกสร้างขึ้นเรียบร้อย
                      ชำระค่าธรรมเนียมเพื่อลบลายน้ำและรับไฟล์ PDF (High-Res)
                      ทางอีเมลทันที
                    </p>

                    <div className="bg-black/50 border border-white/5 rounded-2xl p-6 mb-10 flex justify-between items-center">
                      <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest">
                        Issuance Fee
                      </span>
                      <span className="text-primary font-black text-3xl">
                        ฿{formData.priority === "express" ? "890" : "490"}
                      </span>
                    </div>

                    <Button
                      onClick={handleSubmitPayment}
                      className="w-full h-16 bg-primary hover:bg-primary/90 text-black font-black tracking-[0.2em] uppercase rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                    >
                      สร้างตั๋วอิเล็กทรอนิกส์
                    </Button>
                  </div>
                </div>

                {/* 🖨️ THE DOCUMENTS (Elite Fidelity) */}
                <div className="space-y-12 opacity-30 select-none font-mono">
                  {/* DOCUMENT 1: ITINERARY */}
                  <div className="bg-white p-8 md:p-12 border-b-2 border-dashed border-zinc-200">
                    {/* Header */}
                    <div className="flex justify-between items-start border-b-4 border-black pb-8 mb-10">
                      <div className="space-y-4">
                        <div className="relative w-48 h-16 flex items-center">
                          <div
                            className="text-2xl font-black italic tracking-tighter"
                            style={{ color: airlines[formData.airline].color }}
                          >
                            {airlines[formData.airline].name.toUpperCase()}
                          </div>
                        </div>
                        <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                          Electronic Ticket Itinerary / Receipt
                        </p>
                      </div>
                      <div className="text-right">
                        <h2 className="text-3xl font-black tracking-tighter mb-1">
                          CONFIRMED
                        </h2>
                        <p className="text-xs font-bold bg-black text-white px-3 py-1 inline-block">
                          BOOKING REF: {caseId.slice(-6) || "X7K92P"}
                        </p>
                        <p className="text-[10px] text-zinc-400 mt-2 uppercase font-bold">
                          Issued: {new Date().toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    {/* Passenger Info */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12 border-b border-zinc-100 pb-10">
                      <div>
                        <p className="text-[10px] text-zinc-400 uppercase font-black mb-2">
                          Passenger Name
                        </p>
                        <p className="text-xl font-black">
                          {formData.lastName?.toUpperCase()} /{" "}
                          {formData.firstName?.toUpperCase()} MR
                        </p>
                      </div>
                      <div className="md:text-right">
                        <p className="text-[10px] text-zinc-400 uppercase font-black mb-2">
                          Ticket Number
                        </p>
                        <p className="text-lg font-bold">
                          232{" "}
                          {Math.floor(Math.random() * 9000000000) + 1000000000}
                        </p>
                      </div>
                    </div>

                    {/* Flight Details Table */}
                    <div className="space-y-6">
                      <p className="text-[10px] text-zinc-400 uppercase font-black tracking-widest">
                        Travel Itinerary Details
                      </p>

                      <div className="border border-zinc-200 rounded-xl overflow-hidden">
                        <div className="bg-zinc-50 grid grid-cols-5 gap-4 p-4 border-b border-zinc-200 text-[9px] font-black uppercase text-zinc-500">
                          <div>Flight</div>
                          <div className="col-span-2">Departure / Arrival</div>
                          <div>Class / Status</div>
                          <div className="text-right">Allowance</div>
                        </div>

                        {/* Outbound */}
                        <div className="grid grid-cols-5 gap-4 p-6 border-b border-zinc-100 text-xs items-center">
                          <div className="font-black text-blue-600">
                            {airlines[formData.airline].code} 910
                          </div>
                          <div className="col-span-2 space-y-1">
                            <p className="font-black text-sm">
                              {formData.departureCity || "BANGKOK (BKK)"}
                            </p>
                            <p className="text-zinc-500 text-[10px]">
                              {formData.departureDate || "2026-10-15"} | 01:20
                              AM
                            </p>
                            <div className="h-4 border-l-2 border-dashed border-zinc-300 ml-2" />
                            <p className="font-black text-sm">
                              {formData.arrivalCity || "LONDON (LHR)"}
                            </p>
                            <p className="text-zinc-500 text-[10px]">
                              {formData.departureDate || "2026-10-15"} | 07:35
                              AM
                            </p>
                          </div>
                          <div>
                            <p className="font-bold uppercase">Economy (Y)</p>
                            <p className="text-green-600 font-black text-[9px] uppercase tracking-widest">
                              Confirmed
                            </p>
                          </div>
                          <div className="text-right font-bold text-zinc-500 uppercase">
                            30 KG
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* DOCUMENT 2: PAYMENT RECEIPT / TAX INVOICE */}
                  <div className="bg-white p-8 md:p-12 pt-0">
                    <div className="flex justify-between items-start border-b-2 border-zinc-800 pb-6 mb-8">
                      <div>
                        <h3 className="text-xl font-black uppercase italic tracking-tighter">
                          Tax Invoice / Receipt
                        </h3>
                        <p className="text-[9px] text-zinc-400 font-bold uppercase mt-1">
                          Official Payment Record
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-bold">
                          INV-{Math.floor(Math.random() * 900000) + 100000}
                        </p>
                        <p className="text-[8px] text-zinc-400 uppercase">
                          Date: {new Date().toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 mb-10">
                      <div>
                        <p className="text-[8px] text-zinc-400 uppercase font-black mb-1">
                          Billing To
                        </p>
                        <p className="text-xs font-bold uppercase">
                          {formData.lastName} / {formData.firstName}
                        </p>
                        <p className="text-[8px] text-zinc-500 mt-1 max-w-[150px]">
                          Passenger & Payer
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-[8px] text-zinc-400 uppercase font-black mb-1">
                          Payment Method
                        </p>
                        <p className="text-xs font-bold uppercase">
                          Credit Card (Visa/Master)
                        </p>
                        <p className="text-[8px] text-zinc-500 mt-1 italic">
                          Verified Online Transaction
                        </p>
                      </div>
                    </div>

                    <div className="border border-zinc-200 rounded-lg overflow-hidden mb-8">
                      <div className="bg-zinc-50 grid grid-cols-4 gap-4 p-3 border-b border-zinc-200 text-[8px] font-black uppercase">
                        <div className="col-span-2">Description</div>
                        <div className="text-right">Qty</div>
                        <div className="text-right">Amount</div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 p-4 text-[9px] border-b border-zinc-100">
                        <div className="col-span-2 font-bold">
                          Air Transportation Service (
                          {airlines[formData.airline].code})
                        </div>
                        <div className="text-right">1</div>
                        <div className="text-right">
                          ฿{Math.floor(Math.random() * 15000) + 15000}.00
                        </div>
                      </div>
                      <div className="grid grid-cols-4 gap-4 p-4 text-[9px] border-b border-zinc-100 bg-zinc-50/20">
                        <div className="col-span-2 font-bold">
                          Taxes, Fees and Surcharges
                        </div>
                        <div className="text-right">1</div>
                        <div className="text-right">
                          ฿{Math.floor(Math.random() * 3000) + 2000}.00
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="w-1/2 space-y-2">
                        <div className="flex justify-between text-[9px]">
                          <span className="text-zinc-400 uppercase font-bold">
                            Subtotal
                          </span>
                          <span className="font-black">
                            ฿{(Math.random() * 20000 + 15000).toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between text-[9px] border-t border-zinc-100 pt-2">
                          <span className="text-zinc-800 uppercase font-black">
                            Total Paid (THB)
                          </span>
                          <span className="text-lg font-black italic">
                            ฿{(Math.random() * 25000 + 18000).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-12 text-center">
                      <div className="inline-block border-2 border-emerald-600 px-6 py-2 rounded-lg rotate-[-5deg] opacity-60">
                        <p className="text-emerald-600 text-xl font-black uppercase tracking-widest">
                          PAID
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
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter italic text-primary">
                  Secure Alignment
                </h3>
                <p className="text-zinc-500 text-sm mb-12 max-w-sm font-light leading-relaxed">
                  รบกวนโอนให้ตรงเศษสตางค์{" "}
                  <span className="text-white font-bold text-lg">
                    ฿{exactAmount.toFixed(2)}
                  </span>
                  <br />
                  ยอดเงินนี้ใช้สำหรับยืนยันรายการอัตโนมัติ
                  เจ้าหน้าที่จะออกเอกสารตัวจริงให้ภายใน 15-30 นาทีหลังชำระเงิน
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
                    Confirm Paid
                  </Button>
                </div>
              </div>
            )}

            {step === "success" && (
              <div className="h-full bg-white text-slate-900 rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in duration-700 font-sans border-4 border-emerald-500/20">
                <div className="bg-[#1a365d] p-6 text-white flex justify-between items-center border-b-4 border-amber-400">
                  <div className="flex items-center gap-4">
                    <div className="bg-white p-1.5 rounded-lg">
                      <div className="w-10 h-10 bg-slate-100 flex items-center justify-center text-black font-bold text-[6px] uppercase">
                        GDS Hub
                      </div>
                    </div>
                    <div>
                      <h2 className="text-sm font-bold leading-tight uppercase tracking-tighter">
                        Global Distribution System
                      </h2>
                      <p className="text-[8px] opacity-70 font-mono tracking-widest uppercase">
                        Itinerary Verification Node
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 rounded-full flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-tighter">
                        Status: Processing
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
                      Payment Received
                    </h3>
                    <p className="text-emerald-600 font-bold text-xs uppercase tracking-[0.2em]">
                      เจ้าหน้าที่ได้รับยอดเงินและกำลังออกเอกสาร
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden mb-10">
                    <div className="bg-slate-100 px-6 py-3 border-b border-slate-200 flex justify-between items-center">
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                        Itinerary Request Summary
                      </span>
                      <span className="text-[9px] font-mono text-slate-400 italic">
                        Ref: {caseId}
                      </span>
                    </div>
                    <div className="p-6 text-center">
                      <p className="text-xs text-slate-600 leading-relaxed">
                        ระบบกำลังจัดเตรียมเอกสารยืนยันแผนการเดินทาง (High-Res
                        PDF) <br />
                        กรุณารอรับทางอีเมล <strong>
                          {formData.email}
                        </strong>{" "}
                        ภายในเร็วๆ นี้
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Button
                      onClick={() => setStep("form")}
                      className="w-full h-16 bg-[#1a365d] hover:bg-[#122a4a] text-white font-bold rounded-xl uppercase tracking-widest text-sm"
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
