"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { verifyTicketAction, TicketData } from "@/app/actions/ticketAction";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Html5QrcodeScanner } from "html5-qrcode";
import { UnlinkTicket } from "@/components/shared/UnlinkTicket";

function VerifyContent() {
  const searchParams = useSearchParams();
  const [ticketNumber, setTicketNumber] = useState("");
  const [idLast4, setIdLast4] = useState("");
  const [loading, setLoading] = useState(false);
  const [ticketData, setTicketData] = useState<TicketData | null>(null);
  const [showScanner, setShowScanner] = useState(false);

  // ตรวจสอบข้อมูลจาก URL เมื่อโหลดหน้า (กรณีสแกนมา)
  useEffect(() => {
    const t = searchParams.get("ticket");
    const id = searchParams.get("id");
    if (t && id) {
      setTicketNumber(t);
      setIdLast4(id);

      const autoVerify = async () => {
        setLoading(true);
        try {
          const result = await verifyTicketAction(t, id);
          if (result.success && result.data) {
            setTicketData(result.data as unknown as TicketData);
            toast.success("ตรวจสอบข้อมูลสำเร็จ");
          } else {
            toast.error(result.error || "ไม่พบข้อมูลที่ระบุ");
          }
        } catch {
          toast.error("เกิดข้อผิดพลาดในการตรวจสอบ");
        } finally {
          setLoading(false);
        }
      };
      autoVerify();
    }
  }, [searchParams]);

  // จัดการกล้องสแกน
  useEffect(() => {
    let scanner: Html5QrcodeScanner | null = null;
    if (showScanner) {
      scanner = new Html5QrcodeScanner(
        "reader",
        { fps: 10, qrbox: { width: 250, height: 250 } },
        /* verbose= */ false,
      );

      scanner.render(
        (decodedText) => {
          try {
            const url = new URL(decodedText);
            const t = url.searchParams.get("ticket");
            const id = url.searchParams.get("id");
            if (t && id) {
              setTicketNumber(t);
              setIdLast4(id);
              setShowScanner(false);
              scanner?.clear();
              toast.info("ดึงข้อมูลจาก QR Code สำเร็จ");
            }
          } catch {
            toast.error("QR Code ไม่ถูกต้อง");
          }
        },
        () => {},
      );
    }

    return () => {
      if (scanner) {
        scanner.clear().catch(console.error);
      }
    };
  }, [showScanner]);

  const handleVerify = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);
    setTicketData(null);

    try {
      const result = await verifyTicketAction(ticketNumber, idLast4);
      if (result.success && result.data) {
        setTicketData(result.data as unknown as TicketData);
        toast.success("ตรวจสอบสำเร็จ");
      } else {
        toast.error(
          result.error || "ไม่พบข้อมูล กรุณาตรวจสอบหมายเลขและเลขท้ายบัตร",
        );
      }
    } catch {
      toast.error("ไม่พบข้อมูลรายการนี้ในระบบ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050810] flex flex-col items-center py-24 px-4 text-white">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center mb-8 space-y-4">
          <div className="inline-block p-5 bg-primary/10 rounded-full border border-primary/20 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
            <img
              src="/branding/icon.webp"
              className="w-16 h-16 object-contain"
              alt="Logo"
            />
          </div>
          <h1 className="text-4xl font-black text-white tracking-tighter uppercase">
            ตรวจสอบข้อมูล
          </h1>
          <p className="text-primary/60 font-mono text-[10px] tracking-[0.3em] uppercase">
            UNLINK-GLOBAL Verification System
          </p>
        </div>

        <Button
          variant={showScanner ? "destructive" : "default"}
          className={`w-full py-8 text-sm font-bold tracking-widest uppercase shadow-lg transition-all ${!showScanner ? "bg-primary text-black hover:bg-primary/90" : ""}`}
          onClick={() => setShowScanner(!showScanner)}
        >
          {showScanner ? "✖ ปิดกล้องสแกน" : "📷 สแกน QR Code ตรวจสอบ"}
        </Button>

        {showScanner && (
          <div
            id="reader"
            className="overflow-hidden rounded-2xl border-2 border-white/5 shadow-2xl bg-black"
          ></div>
        )}

        {!ticketData && (
          <Card className="p-10 shadow-2xl border-white/5 bg-zinc-900/50 backdrop-blur-3xl">
            <form onSubmit={handleVerify} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-primary/60 uppercase tracking-widest ml-1">
                  หมายเลขตั๋ว (Ticket No.)
                </label>
                <Input
                  placeholder="เช่น UL123456"
                  value={ticketNumber}
                  onChange={(e) =>
                    setTicketNumber(e.target.value.toUpperCase())
                  }
                  required
                  className="bg-black/40 border-white/5 font-bold text-white h-14 rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-primary/60 uppercase tracking-widest ml-1">
                  รหัสยืนยัน (เลขท้ายบัตร 4 ตัว)
                </label>
                <Input
                  placeholder="XXXX"
                  maxLength={4}
                  value={idLast4}
                  onChange={(e) => setIdLast4(e.target.value)}
                  required
                  className="bg-black/40 border-white/5 font-bold text-white h-14 rounded-xl"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-white/90 py-8 text-sm font-bold tracking-widest uppercase rounded-xl shadow-xl"
                disabled={loading}
              >
                {loading ? "กำลังตรวจสอบระบบ..." : "ยืนยันการตรวจสอบ"}
              </Button>
            </form>
          </Card>
        )}

        {ticketData && (
          <div className="animate-in zoom-in-95 duration-500 mt-8 space-y-6">
            <div className="bg-primary/10 text-primary border border-primary/20 text-center py-3 rounded-xl font-mono text-xs tracking-widest uppercase">
              Verification Successful ✅
            </div>
            <UnlinkTicket data={ticketData} />
            <Button
              variant="outline"
              className="w-full border-white/10 text-slate-400 font-bold h-14 rounded-xl hover:bg-white/5 hover:text-white"
              onClick={() => setTicketData(null)}
            >
              ตรวจสอบรายการอื่น ↺
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function VerifyTicketPage() {
  return (
    <Suspense
      fallback={
        <div className="p-20 text-center text-primary font-mono text-xs animate-pulse">
          SYNCHRONIZING SYSTEM...
        </div>
      }
    >
      <VerifyContent />
    </Suspense>
  );
}
