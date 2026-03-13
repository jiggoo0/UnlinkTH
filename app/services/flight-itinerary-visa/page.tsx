"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
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

/**
 * 🛫 OFFICIAL ITINERARY ALIGNMENT v1.0
 * -------------------------------------------------------------------------
 * ระบบสร้างแบบร่างเอกสารยืนยันแผนการเดินทางมาตรฐาน GDS (97%+ Similarity)
 */

export default function FlightItineraryGenerator() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    airline: "MAS", // MAS or THAI
    departureCity: "BANGKOK (BKK)",
    arrivalCity: "KUALA LUMPUR (KUL)",
    departureDate: "",
    returnDate: "",
    email: "",
  });

  const [step, setStep] = useState<"form" | "preview" | "payment" | "success">(
    "form",
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [exactAmount, setExactAmount] = useState<number>(299);

  useEffect(() => {
    if (step === "payment") {
      setExactAmount(calculateSafeAmount(299));
    }
  }, [step]);

  const paymentData = getPaymentConfig(exactAmount);

  const airlines: Record<string, { name: string; logo: string; code: string }> =
    {
      MAS: {
        name: "Malaysia Airlines",
        logo: "/images/assets/branding/malaysia-airlines.png",
        code: "MH",
      },
      THAI: {
        name: "Thai Airways",
        logo: "/images/assets/branding/thai-airways.png",
        code: "TG",
      },
    };

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
            Global Compliance Standard
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase italic">
            Flight <span className="text-primary">Itinerary</span> Receipt
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            ระบบจัดทำแบบร่างเอกสารยืนยันแผนการเดินทาง (Confirmed Format){" "}
            <br className="hidden md:block" />
            ผ่านสถาปัตยกรรม GDS รองรับสายการบินหลักในภูมิภาค ข้อมูลถูกต้อง 100%
            ตามระเบียบสากล
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Configuration Form */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-zinc-900/80 border border-white/5 p-8 rounded-[2rem] backdrop-blur-xl shadow-2xl">
              <h3 className="text-lg font-bold mb-8 flex items-center gap-3 border-b border-white/5 pb-4">
                <Globe className="text-primary w-5 h-5" />
                System Config
              </h3>

              <form onSubmit={handleGenerate} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                    Select Provider
                  </label>
                  <select
                    value={formData.airline}
                    onChange={(e) =>
                      setFormData({ ...formData, airline: e.target.value })
                    }
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 focus:outline-none focus:border-primary transition-all text-sm font-medium"
                  >
                    <option value="MAS">Malaysia Airlines</option>
                    <option value="THAI">Thai Airways International</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                      Given Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="NAME"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-4 focus:outline-none focus:border-primary uppercase font-mono text-xs tracking-tighter"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                      Surname
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

                <div className="space-y-2">
                  <label className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                    Departure City
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. BANGKOK (BKK)"
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
                    Arrival City
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. LONDON (LHR)"
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
                      Travel Date
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
                      Return Date
                    </label>
                    <input
                      required
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
                    System Notification Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="CLIENT@EMAIL.COM"
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
                    "Execute Alignment"
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
                  Awaiting Parameters
                </h3>
                <p className="text-zinc-600 max-w-sm text-sm font-light leading-relaxed">
                  ระบุข้อมูลแผนการเดินทางของคุณเพื่อเริ่มต้นระบบสร้างเอกสารมาตรฐาน
                  (Standard Re-construction)
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
                      เอกสารมาตรฐานของคุณถูกสร้างขึ้นเรียบร้อย
                      ชำระค่าธรรมเนียมเพื่อลบลายน้ำและรับไฟล์ PDF (High-Res)
                      ทางอีเมลทันที
                    </p>

                    <div className="bg-black/50 border border-white/5 rounded-2xl p-6 mb-10 flex justify-between items-center">
                      <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest">
                        Protocol Fee
                      </span>
                      <span className="text-primary font-black text-3xl">
                        ฿199
                      </span>
                    </div>

                    <Button
                      onClick={() => setStep("payment")}
                      className="w-full h-16 bg-primary hover:bg-primary/90 text-black font-black tracking-[0.2em] uppercase rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                    >
                      Unlock Full Document
                    </Button>
                  </div>
                </div>

                {/* 🖨️ THE DOCUMENT (97%+ Fidelity) */}
                <div className="bg-white p-8 md:p-12 relative z-10 opacity-30 select-none font-mono">
                  {/* Header */}
                  <div className="flex justify-between items-start border-b-4 border-black pb-8 mb-10">
                    <div className="space-y-4">
                      <div className="relative w-48 h-16">
                        <Image
                          src={airlines[formData.airline].logo}
                          alt="Airline Logo"
                          fill
                          className="object-contain object-left"
                        />
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
                        BOOKING REF: X7K92P
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
                            {formData.departureDate || "2026-10-15"} | 01:20 AM
                          </p>
                          <div className="h-4 border-l-2 border-dashed border-zinc-300 ml-2" />
                          <p className="font-black text-sm">
                            {formData.arrivalCity || "LONDON (LHR)"}
                          </p>
                          <p className="text-zinc-500 text-[10px]">
                            {formData.departureDate || "2026-10-15"} | 07:35 AM
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

                      {/* Inbound (If return date) */}
                      {formData.returnDate && (
                        <div className="grid grid-cols-5 gap-4 p-6 text-xs items-center bg-zinc-50/30">
                          <div className="font-black text-blue-600">
                            {airlines[formData.airline].code} 911
                          </div>
                          <div className="col-span-2 space-y-1">
                            <p className="font-black text-sm">
                              {formData.arrivalCity || "LONDON (LHR)"}
                            </p>
                            <p className="text-zinc-500 text-[10px]">
                              {formData.returnDate} | 09:15 PM
                            </p>
                            <div className="h-4 border-l-2 border-dashed border-zinc-300 ml-2" />
                            <p className="font-black text-sm">
                              {formData.departureCity || "BANGKOK (BKK)"}
                            </p>
                            <p className="text-zinc-500 text-[10px]">
                              {formData.returnDate} | 03:40 PM (+1)
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
                      )}
                    </div>
                  </div>

                  {/* Footnote */}
                  <div className="mt-12 pt-8 border-t border-zinc-100 grid md:grid-cols-2 gap-8 text-[8px] leading-relaxed text-zinc-400 uppercase font-bold">
                    <div className="space-y-2">
                      <p>
                        * Carriage and other services provided by the carrier
                        are subject to conditions of contract.
                      </p>
                      <p>
                        * Check-in closes 60 minutes prior to departure. Valid
                        photo ID required.
                      </p>
                    </div>
                    <div className="md:text-right space-y-2">
                      <p>Payment: CC VI XXXX XXXX XXXX 4920</p>
                      <p>
                        IATA Agent: 35209421 • Authorized Global Distribution
                        System
                      </p>
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
                      onError={(e) => {
                        // Fallback if image not uploaded yet
                        e.currentTarget.src =
                          "https://placehold.co/400x400/000000/FFFFFF/png?text=UPLOAD+QR+HERE";
                      }}
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
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter italic">
                  Transfer Exact Amount
                </h3>
                <p className="text-zinc-500 text-sm mb-12 max-w-sm font-light leading-relaxed">
                  รบกวนโอนให้ตรงเศษสตางค์{" "}
                  <span className="text-white font-bold text-lg">
                    ฿{exactAmount.toFixed(2)}
                  </span>
                  <br />
                  ยอดเงินที่มีเศษสตางค์จะช่วยให้เจัาหน้าที่ของเรายืนยันและออกตั๋วให้คุณได้ทันทีผ่านระบบ{" "}
                  <span className="text-primary font-bold">UNLINK-SECURE</span>
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
                    Simulate Paid
                  </Button>
                </div>
              </div>
            )}

            {step === "success" && (
              <div className="h-full bg-primary/5 border border-primary/20 rounded-[3rem] p-16 flex flex-col items-center justify-center text-center animate-in zoom-in duration-700">
                <div className="w-24 h-24 bg-primary rounded-[2rem] flex items-center justify-center mb-10 shadow-[0_0_50px_rgba(16,185,129,0.4)] rotate-12">
                  <CheckCircle2 className="w-12 h-12 text-black" />
                </div>
                <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">
                  Mission Accomplished
                </h3>
                <p className="text-zinc-400 text-sm mb-12 max-w-md leading-relaxed font-light">
                  ระบบได้ดำเนินการจัดส่งไฟล์เอกสาร (PDF/High-Res) เรียบร้อยแล้ว
                  <br />
                  โปรดตรวจสอบในกล่องข้อความของ{" "}
                  <span className="text-white font-bold">
                    {formData.email}
                  </span>{" "}
                  ภายใน 1-2 นาทีนี้ครับ
                </p>

                <div className="grid md:grid-cols-2 gap-4 w-full max-w-md">
                  <div className="bg-zinc-900/80 p-6 rounded-2xl border border-white/5">
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2 font-bold">
                      Booking Ref
                    </p>
                    <p className="text-2xl font-mono text-primary font-black">
                      X7K92P
                    </p>
                  </div>
                  <div className="bg-zinc-900/80 p-6 rounded-2xl border border-white/5 flex flex-col justify-center items-center gap-2">
                    <Image
                      src="/branding/icon.webp"
                      alt="Logo"
                      width={24}
                      height={24}
                      className="opacity-50"
                    />
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest italic">
                      UNLINK-TH Verified
                    </span>
                  </div>
                </div>

                <Button
                  onClick={() => setStep("form")}
                  variant="ghost"
                  className="mt-12 text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-500 hover:text-white transition-colors"
                >
                  Create Another Document
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
