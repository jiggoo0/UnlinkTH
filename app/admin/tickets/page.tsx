"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { createTicketAction, TicketData } from "@/app/actions/ticket";

import { Badge } from "@/components/ui/badge";
import { SombatTicket } from "@/components/shared/SombatTicket";

export default function AdminTicketPage() {
  const [loading, setLoading] = useState(false);
  const [lastTicket, setLastTicket] = useState<TicketData | null>(null);
  const [formData, setFormData] = useState<TicketData>({
    ticket_number: "",
    passenger_name: "",
    id_card_last_4: "",
    origin: "กรุงเทพฯ",
    destination: "เชียงใหม่",
    departure_time: "",
    seat_number: "1A",
  });

  const generateRandomTicket = () => {
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    setFormData({ ...formData, ticket_number: `SB${randomNum}` });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await createTicketAction(formData);

      if (!result.success || !result.data) {
        throw new Error(result.error || "ไม่ได้รับข้อมูลตั๋วกลับมา");
      }

      // ตรวจสอบและแปลง Type ให้ถูกต้องตาม TicketData
      const ticketResult = result.data as unknown as TicketData;
      setLastTicket(ticketResult);

      toast.success(`ออกตั๋วสำเร็จ: ${formData.ticket_number}`);
      setFormData({
        ...formData,
        ticket_number: "",
        passenger_name: "",
        id_card_last_4: "",
        origin: "กรุงเทพฯ",
        destination: "เชียงใหม่",
        departure_time: "",
        seat_number: "1A",
      });
    } catch (err: unknown) {
      const error = err instanceof Error ? err : new Error("Unknown error");
      toast.error(`ข้อผิดพลาด: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4 flex flex-col items-center text-slate-900">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* ส่วนฟอร์มออกตั๋ว */}
        <Card className="lg:col-span-2 p-8 shadow-xl bg-white border-0">
          <div className="flex items-center gap-3 mb-6 border-b pb-4">
            <img
              src="/branding/icon.webp"
              className="w-10 h-10 object-contain"
              alt="Logo"
            />
            <h1 className="text-xl font-black text-blue-900">
              ระบบออกตั๋วโดยสาร
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-slate-900">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                  เลขที่ตั๋ว
                </label>
                <div className="flex gap-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-slate-50 px-3 py-2 text-sm uppercase font-bold text-blue-900"
                    value={formData.ticket_number}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        ticket_number: e.target.value,
                      })
                    }
                    required
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={generateRandomTicket}
                  >
                    สุ่ม
                  </Button>
                </div>
              </div>
              <div className="col-span-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                  บัตรฯ (4 ตัวท้าย)
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-slate-50 px-3 py-2 text-sm text-slate-900 font-bold"
                  value={formData.id_card_last_4}
                  onChange={(e) =>
                    setFormData({ ...formData, id_card_last_4: e.target.value })
                  }
                  maxLength={4}
                  required
                />
              </div>
              <div className="col-span-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                  ชื่อผู้โดยสาร
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-slate-50 px-3 py-2 text-sm text-slate-900"
                  value={formData.passenger_name}
                  onChange={(e) =>
                    setFormData({ ...formData, passenger_name: e.target.value })
                  }
                  placeholder="ระบุชื่อ-นามสกุล"
                  required
                />
              </div>
              <div className="col-span-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                  ต้นทาง
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-slate-50 px-3 py-2 text-sm text-slate-900"
                  value={formData.origin}
                  onChange={(e) =>
                    setFormData({ ...formData, origin: e.target.value })
                  }
                  required
                />
              </div>
              <div className="col-span-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                  ปลายทาง
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-slate-50 px-3 py-2 text-sm text-slate-900"
                  value={formData.destination}
                  onChange={(e) =>
                    setFormData({ ...formData, destination: e.target.value })
                  }
                  required
                />
              </div>
              <div className="col-span-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                  ที่นั่ง
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-slate-50 px-3 py-2 text-sm text-slate-900 font-bold"
                  value={formData.seat_number}
                  onChange={(e) =>
                    setFormData({ ...formData, seat_number: e.target.value })
                  }
                  required
                />
              </div>
              <div className="col-span-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                  เวลาเดินทาง
                </label>
                <input
                  type="datetime-local"
                  className="flex h-10 w-full rounded-md border border-input bg-slate-50 px-3 py-2 text-sm text-slate-900"
                  value={formData.departure_time}
                  onChange={(e) =>
                    setFormData({ ...formData, departure_time: e.target.value })
                  }
                  required
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-[#003399] hover:bg-blue-800 py-6 text-lg font-black text-white shadow-lg"
              disabled={loading}
            >
              {loading ? "กำลังบันทึก..." : "พิมพ์และบันทึกตั๋ว"}
            </Button>
          </form>
        </Card>

        {/* Preview Ticket Section */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
            <h2 className="font-bold text-slate-500 uppercase text-xs tracking-widest">
              Live Ticket Preview
            </h2>
            <Badge
              variant="outline"
              className="text-green-600 border-green-200 bg-green-50"
            >
              System Active
            </Badge>
          </div>

          {lastTicket ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <SombatTicket data={lastTicket} />
              <div className="mt-6 flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => window.print()}
                >
                  🖨️ สั่งพิมพ์ตั๋ว
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => (window.location.href = "/verify-ticket")}
                >
                  🔍 ตรวจสอบตั๋ว
                </Button>
              </div>
            </div>
          ) : (
            <div className="aspect-[4/3] border-4 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center p-12 text-slate-300 text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-20"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
              </div>
              <p className="italic font-medium text-lg">
                กรอกข้อมูลและกดปุ่มด้านซ้าย
                <br />
                เพื่อสร้างตั๋วสมบัติทัวร์จำลอง
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
