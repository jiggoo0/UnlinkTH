"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Html5QrcodeScanner } from "html5-qrcode";
import { SombatTicket } from "@/components/shared/SombatTicket";

function VerifyContent() {
  const searchParams = useSearchParams();
  const [ticketNumber, setTicketNumber] = useState("");
  const [idLast4, setIdLast4] = useState("");
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [ticketData, setTicketData] = useState<any>(null);
  const [showScanner, setShowScanner] = useState(false);

  // ตรวจสอบข้อมูลจาก URL เมื่อโหลดหน้า (กรณีสแกนมา)
  useEffect(() => {
    const t = searchParams.get("ticket");
    const id = searchParams.get("id");
    if (t && id) {
      setTicketNumber(t);
      setIdLast4(id);
      // Auto-verify if both exist
      const autoVerify = async () => {
        setLoading(true);
        try {
          const { data, error } = await supabase
            .from("tickets")
            .select("*")
            .eq("ticket_number", t)
            .eq("id_card_last_4", id)
            .single();

          if (error) throw error;
          if (data) {
            setTicketData(data);
            toast.success("ตรวจสอบตั๋วสำเร็จ");
          } else {
            toast.error("ไม่พบข้อมูลตั๋วที่ระบุ");
          }
        } catch (err: unknown) {
          const error = err instanceof Error ? err : new Error("Unknown error");
          toast.error(error.message || "เกิดข้อผิดพลาดในการตรวจสอบ");
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
        () => {
          // ignore error
        },
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
      const { data, error } = await supabase
        .from("tickets")
        .select("*")
        .eq("ticket_number", ticketNumber.toUpperCase())
        .eq("id_card_last_4", idLast4)
        .single();

      if (error) throw error;
      if (data) {
        setTicketData(data);
        toast.success("ตรวจสอบตั๋วสำเร็จ");
      } else {
        toast.error("ไม่พบข้อมูลตั๋ว กรุณาตรวจสอบเลขตั๋วและเลขท้ายบัตร");
      }
    } catch (err: unknown) {
      const error = err instanceof Error ? err : new Error("Unknown error");
      console.error(error);
      toast.error("ไม่พบข้อมูลตั๋วใบนี้ในระบบ");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center py-12 px-4 text-slate-900">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-white rounded-full shadow-xl mb-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv86BlfL2W8MXb8JvZfkzWV1-Wzm5WNp81fOqpA6seGA&s=10"
              className="w-16 h-16 object-contain"
              alt="Logo"
            />
          </div>
          <h1 className="text-3xl font-black text-blue-900 tracking-tight">
            ตรวจสอบตั๋วโดยสาร
          </h1>
          <p className="text-slate-500 font-bold text-xs uppercase tracking-widest mt-2">
            Sombat Tour Verification System
          </p>
        </div>

        <Button
          variant={showScanner ? "destructive" : "default"}
          className={`w-full py-8 text-lg font-black shadow-lg transition-all ${!showScanner ? "bg-[#003399] hover:bg-blue-800" : ""}`}
          onClick={() => setShowScanner(!showScanner)}
        >
          {showScanner ? "✖ ปิดกล้องสแกน" : "📷 สแกน QR Code ตั๋ว"}
        </Button>

        {showScanner && (
          <div
            id="reader"
            className="overflow-hidden rounded-2xl border-4 border-white shadow-2xl bg-white"
          ></div>
        )}

        {!ticketData && (
          <Card className="p-8 shadow-2xl border-0 bg-white/90 backdrop-blur-md">
            <form onSubmit={handleVerify} className="space-y-5">
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block">
                  เลขที่ตั๋ว (Ticket No.)
                </label>
                <Input
                  placeholder="เช่น SB123456"
                  value={ticketNumber}
                  onChange={(e) => setTicketNumber(e.target.value)}
                  required
                  className="bg-slate-50 border-slate-200 uppercase font-black text-blue-900 text-lg h-12"
                />
              </div>
              <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block">
                  รหัสยืนยัน (บัตร 4 ตัวท้าย)
                </label>
                <Input
                  placeholder="XXXX"
                  maxLength={4}
                  value={idLast4}
                  onChange={(e) => setIdLast4(e.target.value)}
                  required
                  className="bg-slate-50 border-slate-200 text-lg h-12 font-bold"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#003399] hover:bg-blue-800 py-7 text-lg font-black text-white shadow-lg"
                disabled={loading}
              >
                {loading ? "กำลังตรวจสอบ..." : "ยืนยันข้อมูลตั๋ว"}
              </Button>
            </form>
          </Card>
        )}

        {ticketData && (
          <div className="animate-in zoom-in-95 duration-500 mt-8 space-y-4">
            <div className="bg-green-600 text-white text-center py-2 rounded-xl font-black text-sm uppercase tracking-widest shadow-lg">
              Verified Successful ✅
            </div>
            <SombatTicket data={ticketData} showQr={false} />
            <Button
              variant="outline"
              className="w-full border-blue-900 text-blue-900 font-black h-12"
              onClick={() => setTicketData(null)}
            >
              ตรวจสอบใบอื่น ↺
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
      fallback={<div className="p-20 text-center">กำลังโหลดระบบตรวจสอบ...</div>}
    >
      <VerifyContent />
    </Suspense>
  );
}
