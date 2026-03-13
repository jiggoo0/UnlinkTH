"use client";

import { useState } from "react";
import { generatePromptPayQR } from "@/lib/utils";
import { ShieldCheck, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PaymentVerifyPage() {
  const [testAmount, setTestAmount] = useState<number>(1.0);
  const paymentData = generatePromptPayQR(testAmount);
  const mainAccount = paymentData.accounts[0];

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center justify-center font-sans">
      <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 rounded-[3rem] p-10 shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Landmark size={120} />
        </div>

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="bg-primary/20 p-4 rounded-2xl mb-4">
            <ShieldCheck className="text-primary w-8 h-8" />
          </div>
          <h1 className="text-2xl font-black tracking-tighter uppercase italic">
            Payment Verification
          </h1>
          <p className="text-zinc-500 text-xs font-bold tracking-widest uppercase mt-2">
            UNLINK-GLOBAL Strategy Unit
          </p>
        </div>

        {/* QR Section */}
        <div className="bg-white p-6 rounded-[2.5rem] mb-6 shadow-[0_0_50px_rgba(255,255,255,0.05)] flex flex-col items-center">
          <div className="w-full aspect-square bg-zinc-100 rounded-3xl flex items-center justify-center border-2 border-zinc-200 border-dashed mb-4 overflow-hidden">
            {paymentData.qrUrl ? (
              <img
                src={paymentData.qrUrl}
                alt="Thai QR PromptPay"
                className="w-full h-full object-contain p-2"
                key={paymentData.payload} // force re-render on amount change
              />
            ) : (
              <p className="text-black text-xs">Generating QR...</p>
            )}
          </div>
          <div className="flex items-center gap-2 mb-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c5/PromptPay_logo.png"
              alt="PromptPay"
              className="h-4 grayscale"
            />
          </div>
          <p className="text-black font-black text-2xl tracking-tighter">
            ฿{testAmount.toFixed(2)}
          </p>
        </div>

        {/* Payload Debug (Small) */}
        <div className="mb-8 px-4 py-2 bg-black/50 rounded-xl border border-white/5 overflow-hidden">
          <p className="text-[6px] font-mono text-zinc-600 break-all leading-tight">
            Payload: {paymentData.payload}
          </p>
        </div>

        {/* Account Info */}
        <div className="space-y-4 mb-10 bg-black/40 p-6 rounded-3xl border border-white/5">
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">
              Account Name
            </span>
            <span className="text-xs font-bold text-white">
              {paymentData.accountName}
            </span>
          </div>
          <div className="flex justify-between items-center border-t border-white/5 pt-4">
            <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">
              Bank
            </span>
            <span className="text-xs font-bold text-zinc-300">
              {mainAccount.type}
            </span>
          </div>
          <div className="flex justify-between items-center border-t border-white/5 pt-4">
            <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">
              Account No.
            </span>
            <span className="text-xs font-mono font-black text-primary">
              {mainAccount.no}
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[8px] text-zinc-500 uppercase font-bold tracking-widest ml-2">
              Test Amount
            </label>
            <input
              type="number"
              value={testAmount}
              onChange={(e) => setTestAmount(parseFloat(e.target.value) || 0)}
              className="w-full h-12 bg-black border border-white/10 rounded-2xl px-4 text-xs font-bold focus:border-primary outline-none"
            />
          </div>
          <div className="flex items-end">
            <Button
              className="w-full h-12 bg-primary text-black font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-primary/90"
              onClick={() =>
                alert(
                  "ระบบกำลังรอการยืนยันยอดเงินจากเจ้าหน้าที่ (Manual Verification) ทันทีที่คุณส่งสลิปครับ",
                )
              }
            >
              Verify System
            </Button>
          </div>
        </div>

        {/* Security Footnote */}
        <div className="mt-8 text-center">
          <p className="text-[8px] text-zinc-600 uppercase font-medium leading-relaxed tracking-wider">
            * ระบบใช้มาตรฐาน EMVCo QR Payment ประมวลผลโดยธนาคารแห่งประเทศไทย
            <br />
            ข้อมูลการโอนเงินจะถูกตรวจสอบโดยเจ้าหน้าที่ผ่านระบบ UNLINK-SECURE
          </p>
        </div>
      </div>
    </div>
  );
}
