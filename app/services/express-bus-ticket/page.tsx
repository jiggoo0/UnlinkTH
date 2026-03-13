"use client";

import React, { useState } from "react";
import {
  BusFront,
  ShieldCheck,
  Mail,
  QrCode,
  Lock,
  RefreshCw,
  Receipt,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
            Corporate Reimbursement
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Express Bus Ticket <span className="text-primary">Generator</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            ระบบสร้างตั๋วโดยสารรถทัวร์ / บขส. 999 (E-Ticket) รูปแบบมาตรฐาน{" "}
            <br className="hidden md:block" />
            ใช้เป็นหลักฐานประกอบการเบิกจ่ายค่าเดินทางบริษัท รวดเร็ว ทันใจ ใน 1
            นาที
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-10">
          {/* Left Column: Form & Features */}
          <div className="md:col-span-5 space-y-8">
            <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Receipt className="text-primary w-5 h-5" />
                Ticket Details
              </h3>

              <form onSubmit={handleGenerate} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-xs text-gray-400 uppercase tracking-wider">
                    ชื่อ-นามสกุล ผู้เดินทาง
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="เช่น สมชาย ใจดี"
                    value={formData.passengerName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        passengerName: e.target.value,
                      })
                    }
                    className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-gray-400 uppercase tracking-wider">
                    สถานีต้นทาง
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="กรุงเทพฯ (หมอชิต 2)"
                    value={formData.departureStation}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        departureStation: e.target.value,
                      })
                    }
                    className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-gray-400 uppercase tracking-wider">
                    สถานีปลายทาง
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="เชียงใหม่"
                    value={formData.arrivalStation}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        arrivalStation: e.target.value,
                      })
                    }
                    className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 uppercase tracking-wider">
                      วันที่เดินทาง
                    </label>
                    <input
                      required
                      type="date"
                      value={formData.travelDate}
                      onChange={(e) =>
                        setFormData({ ...formData, travelDate: e.target.value })
                      }
                      className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-primary text-sm transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-gray-400 uppercase tracking-wider">
                      ราคาตั๋ว (บาท)
                    </label>
                    <input
                      required
                      type="number"
                      placeholder="850"
                      value={formData.price}
                      onChange={(e) =>
                        setFormData({ ...formData, price: e.target.value })
                      }
                      className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-gray-400 uppercase tracking-wider flex items-center gap-2">
                    <Mail className="w-3 h-3" /> ส่งไฟล์ไปยังอีเมล
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
                    ไฟล์ภาพตั๋วความละเอียดสูงจะถูกส่งไปยังอีเมลนี้
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
                      สร้างเอกสาร...
                    </>
                  ) : (
                    <>
                      <BusFront className="w-5 h-5 mr-2" /> ดูตัวอย่างตั๋ว
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
                  HR Accepted
                </span>
              </div>
              <div className="bg-zinc-900/30 p-4 rounded-xl border border-white/5 flex flex-col items-center text-center gap-2">
                <QrCode className="w-6 h-6 text-primary" />
                <span className="text-[10px] font-mono text-gray-400 uppercase">
                  Valid QR Format
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Preview & Payment */}
          <div className="md:col-span-7">
            {step === "form" && (
              <div className="h-full flex flex-col items-center justify-center p-10 border-2 border-dashed border-zinc-800 rounded-[2.5rem] bg-zinc-950/50 text-center">
                <BusFront className="w-16 h-16 text-zinc-800 mb-6" />
                <h3 className="text-xl font-bold text-gray-400 mb-2">
                  พร้อมสร้างเอกสาร
                </h3>
                <p className="text-sm text-zinc-600 max-w-sm">
                  กรอกข้อมูลการเดินทางด้านซ้าย ระบบจะทำการออกตั๋ว E-Ticket
                  ในรูปแบบที่ใช้แนบเบิกบริษัทได้ทันที
                </p>
              </div>
            )}

            {step === "preview" && (
              <div className="h-full bg-slate-50 rounded-[2.5rem] p-8 text-black relative overflow-hidden animate-in fade-in zoom-in duration-500 shadow-2xl">
                {/* Watermark Overlay (60% Visibility restriction) */}
                <div className="absolute inset-0 z-20 bg-black/70 backdrop-blur-[2px] flex flex-col items-center justify-center p-8">
                  <div className="bg-black/90 border border-primary/30 p-8 rounded-3xl text-center max-w-md w-full shadow-2xl">
                    <Lock className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-white text-2xl font-bold mb-2 uppercase tracking-tight">
                      ตัวอย่างตั๋วของคุณ
                    </h3>
                    <p className="text-gray-400 text-sm mb-8">
                      เอกสารพร้อมใช้งานแล้ว
                      ชำระเงินเพื่อลบลายน้ำและส่งไฟล์ภาพความละเอียดสูงเข้าอีเมล{" "}
                      <span className="text-white font-bold">
                        {formData.email}
                      </span>
                    </p>

                    <div className="bg-zinc-900 rounded-xl p-4 mb-6 flex justify-between items-center border border-white/10">
                      <span className="text-gray-400 text-sm">
                        ค่าธรรมเนียมออกตั๋ว
                      </span>
                      <span className="text-primary font-bold text-xl">
                        ฿99
                      </span>
                    </div>

                    <Button
                      onClick={() => setStep("payment")}
                      className="w-full h-14 bg-primary hover:bg-primary/90 text-black font-bold tracking-widest uppercase rounded-xl"
                    >
                      <QrCode className="w-5 h-5 mr-2" /> ชำระเงินด้วย SlipOK
                    </Button>
                  </div>
                </div>

                {/* Mock Ticket Preview Behind Watermark */}
                <div className="relative z-10 opacity-30 select-none max-w-sm mx-auto bg-white shadow-lg border-t-8 border-[#1a365d] rounded-b-lg">
                  <div className="p-4 text-center border-b border-dashed border-gray-300">
                    <h2 className="text-lg font-bold text-[#1a365d]">
                      บริษัท ขนส่ง จำกัด (บขส.)
                    </h2>
                    <p className="text-xs text-gray-500">
                      THE TRANSPORT CO., LTD.
                    </p>
                    <p className="text-[10px] text-gray-400 mt-1">
                      ใบรับเงิน / ตั๋วโดยสาร E-TICKET
                    </p>
                  </div>

                  <div className="p-5 space-y-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">รหัสอ้างอิง:</span>
                      <span className="font-bold">
                        TC{Math.floor(Math.random() * 90000) + 10000}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">ชื่อผู้โดยสาร:</span>
                      <span className="font-bold">
                        {formData.passengerName || "สมชาย ใจดี"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">เส้นทาง:</span>
                      <span className="font-bold text-right">
                        {formData.departureStation}
                        <br />➔ {formData.arrivalStation}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">วันที่เดินทาง:</span>
                      <span className="font-bold">
                        {formData.travelDate || "12/10/2026"}
                      </span>
                    </div>
                    <div className="flex justify-between border-t border-gray-200 pt-3 mt-2">
                      <span className="text-gray-500 font-bold">
                        ยอดชำระสุทธิ:
                      </span>
                      <span className="font-bold text-lg text-[#1a365d]">
                        {formData.price || "850"} บาท
                      </span>
                    </div>
                  </div>

                  <div className="bg-gray-100 p-4 text-center rounded-b-lg flex flex-col items-center">
                    <QrCode className="w-20 h-20 text-gray-800 mb-2" />
                    <p className="text-[9px] text-gray-500">
                      สแกนเพื่อตรวจสอบข้อมูลการเดินทาง
                    </p>
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
                <h3 className="text-2xl font-bold mb-2">สแกนชำระเงิน ฿99</h3>
                <p className="text-gray-400 text-sm mb-8 max-w-sm">
                  ระบบ SlipOK จะตรวจสอบสลิปอัตโนมัติ และส่งไฟล์รูปภาพตั๋วโดยสาร
                  เข้าอีเมลของคุณภายใน 5 วินาที
                </p>

                <div className="flex gap-4 w-full max-w-xs">
                  <Button
                    variant="outline"
                    onClick={() => setStep("preview")}
                    className="flex-1 rounded-xl"
                  >
                    ยกเลิก
                  </Button>
                  <Button
                    onClick={() => setStep("success")}
                    className="flex-1 bg-primary text-black hover:bg-primary/90 rounded-xl"
                  >
                    จำลองการจ่ายเงิน
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
                  ชำระเงินสำเร็จ!
                </h3>
                <p className="text-gray-400 text-sm mb-8 max-w-md leading-relaxed">
                  ระบบได้สร้างเอกสารตั๋วรถทัวร์เรียบร้อยแล้ว
                  <br />
                  และจัดส่งไปยัง{" "}
                  <span className="text-white font-bold">{formData.email}</span>
                </p>
                <div className="bg-zinc-900/80 p-6 rounded-xl border border-white/5 mb-8 w-full max-w-sm">
                  <p className="text-sm text-gray-400 mb-2">
                    หากไม่ได้รับอีเมล คุณสามารถรับไฟล์ผ่าน LINE ได้
                  </p>
                  <Button className="w-full bg-[#00B900] hover:bg-[#009900] text-white font-bold">
                    แจ้งรับไฟล์ผ่าน LINE OA
                  </Button>
                </div>
                <Button
                  onClick={() => setStep("form")}
                  variant="outline"
                  className="rounded-xl tracking-widest uppercase text-xs"
                >
                  สร้างเอกสารใหม่
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
