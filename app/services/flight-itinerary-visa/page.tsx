"use client";

import React, { useState } from "react";
import {
  PlaneTakeoff,
  ShieldCheck,
  Mail,
  QrCode,
  Lock,
  RefreshCw,
  FileText,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function FlightItineraryGenerator() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    departureCity: "BKK",
    arrivalCity: "LHR",
    departureDate: "",
    returnDate: "",
    email: "",
  });

  const [step, setStep] = useState<"form" | "preview" | "payment" | "success">(
    "form",
  );
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    // Simulate generation delay
    setTimeout(() => {
      setIsGenerating(false);
      setStep("preview");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white py-24 px-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.05),transparent)] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 text-primary px-4 py-1 font-mono text-[10px] tracking-[0.2em] uppercase"
          >
            Automated Visa Document
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Flight Itinerary <span className="text-primary">Generator</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            ระบบออกใบจองตั๋วเครื่องบิน (Dummy Ticket) มาตรฐาน GDS
            (Amadeus/Galileo) <br className="hidden md:block" />
            สำหรับใช้ประกอบการยื่นขอวีซ่าเชงเก้น, อเมริกา, ออสเตรเลีย รับไฟล์
            PDF ผ่านอีเมลทันที 24 ชม.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-10">
          {/* Left Column: Form & Features */}
          <div className="md:col-span-5 space-y-8">
            <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <FileText className="text-primary w-5 h-5" />
                Passenger Details
              </h3>

              <form onSubmit={handleGenerate} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 uppercase tracking-wider">
                      First Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. SOMCHAI"
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-primary uppercase transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 uppercase tracking-wider">
                      Last Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. JAIDEE"
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-primary uppercase transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 uppercase tracking-wider">
                      From (Airport)
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="BKK"
                      value={formData.departureCity}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          departureCity: e.target.value,
                        })
                      }
                      className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-primary uppercase font-mono transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 uppercase tracking-wider">
                      To (Airport)
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="LHR"
                      value={formData.arrivalCity}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          arrivalCity: e.target.value,
                        })
                      }
                      className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-primary uppercase font-mono transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 uppercase tracking-wider">
                      Departure Date
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
                      className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-primary text-sm transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 uppercase tracking-wider">
                      Return Date
                    </label>
                    <input
                      required
                      type="date"
                      value={formData.returnDate}
                      onChange={(e) =>
                        setFormData({ ...formData, returnDate: e.target.value })
                      }
                      className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-primary text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-gray-400 uppercase tracking-wider flex items-center gap-2">
                    <Mail className="w-3 h-3" /> Delivery Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  />
                  <p className="text-[10px] text-primary/60 mt-1">
                    ไฟล์ PDF ที่สมบูรณ์แบบจะถูกส่งไปยังอีเมลนี้ทันทีหลังชำระเงิน
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={isGenerating || step !== "form"}
                  className="w-full h-14 mt-4 bg-primary hover:bg-primary/90 text-black font-bold tracking-widest uppercase rounded-xl transition-all"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />{" "}
                      GENERATING...
                    </>
                  ) : (
                    <>
                      <PlaneTakeoff className="w-5 h-5 mr-2" /> GENERATE PREVIEW
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-900/30 p-4 rounded-xl border border-white/5 flex flex-col items-center text-center gap-2">
                <ShieldCheck className="w-6 h-6 text-primary" />
                <span className="text-[10px] font-mono text-gray-400 uppercase">
                  Embassy Validated
                </span>
              </div>
              <div className="bg-zinc-900/30 p-4 rounded-xl border border-white/5 flex flex-col items-center text-center gap-2">
                <Clock className="w-6 h-6 text-primary" />
                <span className="text-[10px] font-mono text-gray-400 uppercase">
                  Instant Delivery
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Preview & Payment */}
          <div className="md:col-span-7">
            {step === "form" && (
              <div className="h-full flex flex-col items-center justify-center p-10 border-2 border-dashed border-zinc-800 rounded-[2.5rem] bg-zinc-950/50 text-center">
                <PlaneTakeoff className="w-16 h-16 text-zinc-800 mb-6" />
                <h3 className="text-xl font-bold text-gray-400 mb-2">
                  Ready to Generate
                </h3>
                <p className="text-sm text-zinc-600 max-w-sm">
                  กรอกข้อมูลด้านซ้ายเพื่อสร้างตัวอย่างใบจองตั๋วเครื่องบิน (PNR)
                  ของคุณ ระบบใช้เวลาประมวลผลเพียง 2 วินาที
                </p>
              </div>
            )}

            {step === "preview" && (
              <div className="h-full bg-white rounded-[2.5rem] p-8 text-black relative overflow-hidden animate-in fade-in zoom-in duration-500 shadow-2xl">
                {/* Watermark Overlay (60% Visibility restriction) */}
                <div className="absolute inset-0 z-20 bg-black/60 backdrop-blur-[2px] flex flex-col items-center justify-center p-8">
                  <div className="bg-black/80 border border-primary/30 p-8 rounded-3xl text-center max-w-md w-full shadow-2xl">
                    <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-white text-2xl font-bold mb-2 uppercase tracking-tight">
                      Preview Generated
                    </h3>
                    <p className="text-gray-400 text-sm mb-8">
                      เอกสารของคุณพร้อมแล้ว ชำระเงินเพื่อปลดล็อกลายน้ำและรับไฟล์
                      PDF ฉบับเต็มผ่านอีเมล{" "}
                      <span className="text-white font-bold">
                        {formData.email}
                      </span>
                    </p>

                    <div className="bg-zinc-900 rounded-xl p-4 mb-6 flex justify-between items-center border border-white/10">
                      <span className="text-gray-400 text-sm">
                        ค่าบริการออกเอกสาร
                      </span>
                      <span className="text-primary font-bold text-xl">
                        ฿199
                      </span>
                    </div>

                    <Button
                      onClick={() => setStep("payment")}
                      className="w-full h-14 bg-primary hover:bg-primary/90 text-black font-bold tracking-widest uppercase rounded-xl"
                    >
                      <QrCode className="w-5 h-5 mr-2" /> Pay via SlipOK
                    </Button>
                  </div>
                </div>

                {/* Mock Ticket Preview Behind Watermark */}
                <div className="relative z-10 opacity-40 select-none">
                  <div className="border-b-2 border-black pb-4 mb-6 flex justify-between items-end">
                    <div>
                      <h2 className="text-2xl font-black tracking-tighter">
                        ELECTRONIC TICKET
                      </h2>
                      <p className="text-xs text-gray-500 uppercase">
                        Passenger Itinerary Receipt
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold">
                        BOOKING REF:{" "}
                        <span className="text-blue-600">X7K92P</span>
                      </p>
                      <p className="text-xs text-gray-500">
                        DATE: {new Date().toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs text-gray-500 uppercase mb-1">
                      Passenger Name
                    </p>
                    <p className="font-bold text-lg">
                      {formData.lastName?.toUpperCase()}/
                      {formData.firstName?.toUpperCase()} MR
                    </p>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-lg mb-4 font-mono text-sm">
                    <div className="grid grid-cols-4 gap-4 mb-2 font-bold text-xs text-gray-500 border-b border-gray-300 pb-2">
                      <div>FLIGHT</div>
                      <div>DEPART</div>
                      <div>ARRIVE</div>
                      <div>CLASS</div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 py-2">
                      <div>TG 910</div>
                      <div>
                        {formData.departureCity?.toUpperCase() || "BKK"}
                        <br />
                        <span className="text-xs text-gray-500">
                          {formData.departureDate || "01 OCT"} 01:20
                        </span>
                      </div>
                      <div>
                        {formData.arrivalCity?.toUpperCase() || "LHR"}
                        <br />
                        <span className="text-xs text-gray-500">
                          {formData.departureDate || "01 OCT"} 07:30
                        </span>
                      </div>
                      <div>
                        ECONOMY (Y)
                        <br />
                        <span className="text-green-600 text-xs">
                          CONFIRMED
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-[10px] text-gray-400 mt-10">
                    * This is a computer generated itinerary. Valid for visa
                    application purposes.
                    <br />* Notice: Carriage and other services provided by the
                    carrier are subject to conditions of contract.
                  </div>
                </div>
              </div>
            )}

            {step === "payment" && (
              <div className="h-full bg-zinc-900/50 border border-primary/20 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center animate-in fade-in slide-in-from-right-8 duration-500">
                <div className="bg-white p-4 rounded-2xl mb-8">
                  {/* Mock QR Code */}
                  <div className="w-48 h-48 bg-gray-200 rounded-xl flex items-center justify-center flex-col gap-2">
                    <QrCode className="w-12 h-12 text-black" />
                    <span className="text-black font-bold">
                      THAI QR PAYMENT
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Scan to Pay ฿199</h3>
                <p className="text-gray-400 text-sm mb-8 max-w-sm">
                  สแกนผ่านแอปธนาคาร ระบบ SlipOK จะตรวจสอบสลิปอัตโนมัติ
                  และส่งไฟล์ PDF เข้าอีเมลของคุณภายใน 5 วินาที
                </p>

                <div className="flex gap-4 w-full max-w-xs">
                  <Button
                    variant="outline"
                    onClick={() => setStep("preview")}
                    className="flex-1 rounded-xl"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => setStep("success")}
                    className="flex-1 bg-primary text-black hover:bg-primary/90 rounded-xl"
                  >
                    Simulate Paid
                  </Button>
                </div>
              </div>
            )}

            {step === "success" && (
              <div className="h-full bg-primary/5 border border-primary/20 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-10 h-10 text-black" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Payment Successful!
                </h3>
                <p className="text-gray-400 text-sm mb-8 max-w-md leading-relaxed">
                  ระบบได้สร้างเอกสารใบจองตั๋วเครื่องบิน (PDF) เรียบร้อยแล้ว
                  <br />
                  และจัดส่งไปยัง{" "}
                  <span className="text-white font-bold">
                    {formData.email}
                  </span>{" "}
                  ผ่านระบบ Resend
                </p>
                <div className="bg-zinc-900/80 p-4 rounded-xl border border-white/5 mb-8 w-full max-w-xs">
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">
                    Your Booking Reference
                  </p>
                  <p className="text-2xl font-mono text-primary font-bold">
                    X7K92P
                  </p>
                </div>
                <Button
                  onClick={() => setStep("form")}
                  variant="outline"
                  className="rounded-xl tracking-widest uppercase text-xs"
                >
                  Create Another Ticket
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
