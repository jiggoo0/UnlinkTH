"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { getServiceBySlug } from "@/lib/mdx";
import { Service } from "@/types";
import { createTicketAction, TicketData } from "@/app/actions/ticketAction";
import { PromptPayQR } from "@/components/shared/PromptPayQR";
import { UnlinkTicket } from "@/components/shared/UnlinkTicket";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  ArrowRight,
  User,
  CheckCircle2,
  Loader2,
  UploadCloud,
} from "lucide-react";
import { Html5Qrcode } from "html5-qrcode";

export default function BookingPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const [service, setService] = useState<Service | null>(null);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [ticketResult, setTicketResult] = useState<TicketData | null>(null);

  const [formData, setFormData] = useState<TicketData>({
    ticket_number: "",
    passenger_name: "",
    id_card_last_4: "",
    origin: "กรุงเทพฯ",
    destination: "เชียงใหม่",
    departure_time: new Date().toISOString().slice(0, 16),
    seat_number: "1A",
    email: "",
    amount: 0,
  });

  useEffect(() => {
    async function loadService() {
      const s = await getServiceBySlug(slug);
      if (s) {
        setService(s as unknown as Service);
        const price = parseInt(s.priceInfo?.startingAt || "0");
        setFormData((prev) => ({
          ...prev,
          amount: price,
          ticket_number: `UL${Math.floor(100000 + Math.random() * 900000)}`,
        }));
      }
    }
    loadService();
  }, [slug]);

  const handleNext = () => setStep((prev) => prev + 1);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    const toastId = toast.loading("กำลังตรวจสอบสลิปชำระเงิน...");

    try {
      // 1. Scan QR Code from Image using html5-qrcode
      const html5QrCode = new Html5Qrcode("qr-reader-hidden");
      const qrCodeData = await html5QrCode.scanFile(file, true);

      // 2. Send to Server Action for SlipOK verification
      const result = await createTicketAction({
        ...formData,
        slip_payload: qrCodeData,
      });

      if (result.success && result.data) {
        setTicketResult({
          ...formData,
          ticket_number: result.data.ticket_number,
        });
        toast.success("ชำระเงินและออกตั๋วสำเร็จ!", { id: toastId });
        setStep(3);
      } else {
        toast.error(result.error || "ตรวจสอบสลิปไม่สำเร็จ", { id: toastId });
      }
    } catch (err) {
      console.error("QR Scan Error:", err);
      toast.error("ไม่พบ QR Code ในสลิป โปรดใช้ภาพที่ชัดเจน", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  if (!service)
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
      </div>
    );

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 px-4">
      <div id="qr-reader-hidden" className="hidden"></div>

      <div className="max-w-4xl mx-auto">
        {/* Step Indicator */}
        <div className="flex justify-between mb-12 relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0" />
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm transition-all duration-500 ${
                step >= s
                  ? "bg-primary text-black shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                  : "bg-zinc-900 text-zinc-500 border border-white/10"
              }`}
            >
              {step > s ? <CheckCircle2 className="w-6 h-6" /> : s}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Card className="bg-zinc-900/50 border-white/5 p-8 md:p-12 backdrop-blur-xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
                    <User className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-white">
                      Passenger Information
                    </h1>
                    <p className="text-muted-foreground text-sm">
                      ระบุข้อมูลผู้เดินทางเพื่อออกตั๋วเข้าระบบ
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary/60">
                      Full Name
                    </label>
                    <Input
                      placeholder="สมชาย ใจดี"
                      className="bg-black/50 border-white/10 h-12 text-white"
                      value={formData.passenger_name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          passenger_name: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary/60">
                      ID / Passport Last 4
                    </label>
                    <Input
                      placeholder="1234"
                      maxLength={4}
                      className="bg-black/50 border-white/10 h-12 text-white"
                      value={formData.id_card_last_4}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          id_card_last_4: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary/60">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="name@example.com"
                      className="bg-black/50 border-white/10 h-12 text-white"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary/60">
                      Departure Time
                    </label>
                    <Input
                      type="datetime-local"
                      className="bg-black/50 border-white/10 h-12 text-white"
                      value={formData.departure_time}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          departure_time: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <Button
                  onClick={handleNext}
                  disabled={
                    !formData.passenger_name || !formData.id_card_last_4
                  }
                  className="w-full mt-10 h-14 bg-primary hover:bg-primary/90 text-black font-bold text-lg group"
                >
                  ดำเนินการชำระเงิน
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <div className="space-y-6">
                <PromptPayQR amount={formData.amount || 0} />
                <div className="bg-zinc-900/50 border border-white/5 p-6 rounded-2xl flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white mb-1">
                      ระบบตรวจสอบอัตโนมัติ
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      เมื่อชำระเงินแล้ว โปรดอัปโหลดสลิปที่มี QR Code
                      ระบบจะออกตั๋วให้ท่านทันที
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <Card className="bg-zinc-900/50 border-white/5 p-8 flex flex-col items-center justify-center flex-1 border-dashed border-2 relative group overflow-hidden">
                  {loading ? (
                    <div className="flex flex-col items-center gap-4">
                      <Loader2 className="w-12 h-12 text-primary animate-spin" />
                      <p className="text-primary font-mono text-xs tracking-widest animate-pulse">
                        VERIFYING PAYMENT...
                      </p>
                    </div>
                  ) : (
                    <>
                      <UploadCloud className="w-16 h-16 text-zinc-700 group-hover:text-primary transition-colors mb-4" />
                      <p className="text-white font-bold mb-2">
                        อัปโหลดสลิปชำระเงิน
                      </p>
                      <p className="text-zinc-500 text-xs text-center px-8">
                        รองรับไฟล์ JPG, PNG ที่มี QR Code ชัดเจน
                      </p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                    </>
                  )}
                </Card>

                <Button
                  variant="outline"
                  onClick={() => setStep(1)}
                  className="border-white/10 text-zinc-400 hover:text-white"
                >
                  ย้อนกลับไปแก้ไขข้อมูล
                </Button>
              </div>
            </motion.div>
          )}

          {step === 3 && ticketResult && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              <div className="text-center space-y-4 mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/20 mb-4">
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </div>
                <h1 className="text-4xl font-black text-white tracking-tighter">
                  Issue Success!
                </h1>
                <p className="text-muted-foreground">
                  ตั๋วของคุณได้รับการยืนยันและออกรหัสอย่างถูกต้องเรียบร้อยแล้วครับ
                </p>
              </div>

              <UnlinkTicket data={ticketResult} serviceName={service.title} />

              <div className="flex justify-center pt-8">
                <Button
                  variant="link"
                  onClick={() => router.push("/")}
                  className="text-primary hover:text-primary/80"
                >
                  กลับสู่หน้าหลัก
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
