"use client";

import { useState } from "react";
import { generatePromptPayQR } from "@/lib/utils";
import { ShieldCheck, Landmark, FileUp, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { submitSlipAction } from "@/lib/actions";
import { toast } from "sonner";

export default function PaymentVerifyPage() {
  const [testAmount, setTestAmount] = useState<number>(299.0);
  const [caseId, setCaseId] = useState<string>("");
  const [isUploading, setIsUploading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const paymentData = generatePromptPayQR(testAmount);
  const mainAccount = paymentData.accounts[0];

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!caseId) {
      toast.error("กรุณาระบุ Case ID ของคุณครับ");
      return;
    }

    setIsUploading(true);
    const formData = new FormData(e.currentTarget);
    
    try {
      const result = await submitSlipAction(caseId, formData);
      if (result.success) {
        setIsSuccess(true);
        toast.success("อัปโหลดสลิปเรียบร้อยแล้วครับ ระบบจะตรวจสอบภายใน 15-30 นาที");
      } else {
        toast.error(result.error || "เกิดข้อผิดพลาดในการอัปโหลด");
      }
    } catch (error) {
      toast.error("ระบบขัดข้อง กรุณาลองใหม่อีกครั้งครับ");
    } finally {
      setIsUploading(false);
    }
  };

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

        {isSuccess ? (
          <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
            <div className="bg-emerald-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/30">
              <CheckCircle2 className="text-emerald-500 w-10 h-10" />
            </div>
            <h2 className="text-xl font-bold mb-2">ส่งสลิปสำเร็จ!</h2>
            <p className="text-zinc-500 text-sm leading-relaxed px-4">
              เจ้าหน้าที่กำลังตรวจสอบข้อมูลการโอนเงินของท่าน 
              เราจะส่งอีเมลแจ้งเตือนเมื่อดำเนินการเสร็จสิ้นครับ
            </p>
            <Button 
              variant="outline" 
              className="mt-8 rounded-2xl border-white/5 hover:bg-white/10"
              onClick={() => setIsSuccess(false)}
            >
              ส่งสลิปอื่นเพิ่ม
            </Button>
          </div>
        ) : (
          <>
            {/* QR Section */}
            <div className="bg-white p-6 rounded-[2.5rem] mb-6 shadow-[0_0_50px_rgba(255,255,255,0.05)] flex flex-col items-center">
              <div className="w-full aspect-square bg-zinc-100 rounded-3xl flex items-center justify-center border-2 border-zinc-200 border-dashed mb-4 overflow-hidden">
                {paymentData.qrUrl ? (
                  <img
                    src={paymentData.qrUrl}
                    alt="Thai QR PromptPay"
                    className="w-full h-full object-contain p-2"
                    key={paymentData.payload}
                  />
                ) : (
                  <p className="text-black text-xs">Generating QR...</p>
                )}
              </div>
              <p className="text-black font-black text-2xl tracking-tighter">
                ฿{testAmount.toFixed(2)}
              </p>
            </div>

            {/* Account Info */}
            <div className="space-y-4 mb-8 bg-black/40 p-6 rounded-3xl border border-white/5">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">
                  Account No.
                </span>
                <span className="text-xs font-mono font-black text-primary">
                  {mainAccount.no}
                </span>
              </div>
              <div className="flex justify-between items-center border-t border-white/5 pt-4">
                <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">
                  Name
                </span>
                <span className="text-xs font-bold text-white">
                  {paymentData.accountName}
                </span>
              </div>
            </div>

            {/* Submit Form */}
            <form onSubmit={handleUpload} className="space-y-4">
              <div className="space-y-2">
                <label className="text-[9px] text-zinc-500 uppercase font-bold tracking-[0.2em] ml-2">
                  Case ID (จากอีเมลแจ้งชำระเงิน)
                </label>
                <input
                  type="text"
                  placeholder="EX: LN-XXXXXX"
                  value={caseId}
                  onChange={(e) => setCaseId(e.target.value.toUpperCase())}
                  className="w-full h-12 bg-black border border-white/10 rounded-2xl px-4 text-xs font-bold focus:border-primary outline-none transition-all"
                  required
                />
              </div>

              <div className="relative group">
                <input
                  type="file"
                  name="file"
                  id="slip-upload"
                  className="hidden"
                  accept="image/*,application/pdf"
                  required
                />
                <label
                  htmlFor="slip-upload"
                  className="flex flex-col items-center justify-center w-full py-8 border-2 border-dashed border-white/10 rounded-[2rem] hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer group-hover:bg-primary/5"
                >
                  <FileUp className="text-zinc-600 group-hover:text-primary mb-2 h-6 w-6" />
                  <span className="text-[10px] text-zinc-500 group-hover:text-primary font-bold uppercase tracking-widest">
                    เลือกสลิปหลักฐานการโอน
                  </span>
                </label>
              </div>

              <Button
                type="submit"
                disabled={isUploading}
                className="w-full h-14 bg-white text-black font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-primary transition-all flex items-center justify-center gap-3 shadow-xl"
              >
                {isUploading ? (
                  <>
                    <Loader2 className="animate-spin h-4 w-4" /> Processing...
                  </>
                ) : (
                  <>
                    Submit Verification <ShieldCheck className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </>
        )}

        {/* Security Footnote */}
        <div className="mt-8 text-center">
          <p className="text-[8px] text-zinc-600 uppercase font-medium leading-relaxed tracking-wider">
            ข้อมูลการโอนเงินจะถูกตรวจสอบโดยเจ้าหน้าที่ผ่านระบบ UNLINK-SECURE
            <br />
            สลิปต้องระบุวันและเวลาที่โอนชัดเจน
          </p>
        </div>
      </div>
    </div>
  );
}
