/** @format */

import { notFound } from "next/navigation";
import { CheckCircle2, Plane, AlertTriangle, Clock } from "lucide-react";
import { db } from "@/lib/db";

interface VerifyPageProps {
  params: Promise<{ provider: string; pnr: string }>;
}

/**
 * 🔍 DYNAMIC VERIFICATION SYSTEM (High-Fidelity)
 * ---------------------------------------------------------
 * ระบบตรวจสอบสถานะที่เชื่อมต่อกับฐานข้อมูล Turso จริง 100%
 */

export default async function VerifyTicketPage({ params }: VerifyPageProps) {
  const { provider, pnr } = await params;

  // 🛡️ ดึงข้อมูลจากฐานข้อมูลจริง (ตาราง cases)
  const result = await db.execute({
    sql: "SELECT * FROM cases WHERE id = ?",
    args: [pnr.toUpperCase()],
  });

  if (result.rows.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50">
        <AlertTriangle className="w-16 h-16 text-amber-500 mb-4" />
        <h1 className="text-2xl font-bold text-slate-800">ไม่พบข้อมูลการจอง</h1>
        <p className="text-slate-500 text-center mt-2 max-w-xs">
          หมายเลข {pnr.toUpperCase()} ไม่ปรากฏในระบบตรวจสอบกลาง <br />
          กรุณาติดต่อเจ้าหน้าที่เพื่อขอข้อมูลเพิ่มเติม
        </p>
      </div>
    );
  }

  const caseData = result.rows[0];
  const passengerName = String(caseData.customer_name).toUpperCase();
  const status = String(caseData.status).toUpperCase();
  const serviceName = String(caseData.service).toUpperCase();
  const travelDate = new Date(String(caseData.created_at)).toLocaleDateString(
    "th-TH",
  );

  // 🚌 TEMPLATE 1: บริษัท ขนส่ง จำกัด (Transport Co.)
  if (provider === "transport-co") {
    return (
      <div className="min-h-screen bg-[#f4f7f6] font-sans text-slate-800">
        <div className="bg-[#1a365d] px-4 py-3 flex items-center gap-3 shadow-md">
          <div className="bg-white p-1 rounded font-bold text-blue-900 text-xs">
            UNLINK
          </div>
          <div>
            <h1 className="text-white text-sm font-bold">บริษัท ขนส่ง จำกัด</h1>
            <p className="text-blue-200 text-[10px] uppercase">
              The Transport Co., Ltd. E-Ticket Verification
            </p>
          </div>
        </div>

        <div className="max-w-md mx-auto mt-8 px-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div
              className={`px-4 py-3 flex items-center gap-2 text-white ${status === "CONFIRMED" ? "bg-green-600" : "bg-amber-500"}`}
            >
              {status === "CONFIRMED" ? (
                <CheckCircle2 className="w-5 h-5" />
              ) : (
                <Clock className="w-5 h-5" />
              )}
              <span className="font-bold text-sm">
                {status === "CONFIRMED"
                  ? "ตรวจสอบพบข้อมูลในระบบ"
                  : "กำลังดำเนินการ / IN PROGRESS"}
              </span>
            </div>

            <div className="p-5 space-y-4">
              <div className="text-center pb-4 border-b border-gray-100">
                <p className="text-[10px] text-gray-500 uppercase">
                  หมายเลขตั๋วโดยสาร / Ticket Number
                </p>
                <p className="text-xl font-black text-[#1a365d] tracking-widest mt-1">
                  {pnr.toUpperCase()}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="col-span-2">
                  <p className="text-[10px] text-gray-500 mb-1">
                    ชื่อผู้โดยสาร
                  </p>
                  <p className="font-bold uppercase border-b border-dashed border-gray-200 pb-1">
                    {passengerName}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 mb-1">สถานะตั๋ว</p>
                  <p
                    className={`font-bold ${status === "CONFIRMED" ? "text-green-600" : "text-amber-600"}`}
                  >
                    {status}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 mb-1">
                    บริการที่เลือก
                  </p>
                  <p className="font-bold">{serviceName}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-[10px] text-gray-500 mb-1">
                    วันที่ยืนยันรายการ
                  </p>
                  <p className="font-bold">{travelDate}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-5 py-3 text-center text-[9px] text-gray-400 border-t">
              <p>
                ข้อมูลนี้ดึงมาจากฐานข้อมูลกลางของบริษัทฯ
                ระบบจะแสดงข้อมูลที่อัปเดตล่าสุดเท่านั้น
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ✈️ TEMPLATE 2: สายการบิน (GDS Style)
  if (provider === "tg-airways") {
    return (
      <div className="min-h-screen bg-white font-sans text-[#4a154b]">
        <div className="bg-[#4a154b] px-4 py-4 flex items-center justify-between shadow-md">
          <h1 className="text-white text-lg font-serif italic tracking-wider">
            THAI AIRWAYS
          </h1>
          <Plane className="w-6 h-6 text-yellow-400" />
        </div>

        <div className="max-w-md mx-auto mt-6 px-4">
          <h2 className="text-xl font-bold mb-4 text-slate-800">
            Booking Details
          </h2>
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-tighter">
                  Booking Reference (PNR)
                </p>
                <p className="text-2xl font-black text-[#4a154b]">
                  {pnr.toUpperCase()}
                </p>
              </div>
              <div
                className={`px-3 py-1 rounded font-bold text-xs ${status === "CONFIRMED" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}
              >
                {status}
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-[#4a154b] pl-3">
                <p className="text-[10px] text-slate-500 uppercase">
                  Passenger Name
                </p>
                <p className="font-bold text-slate-800 text-lg">
                  {passengerName}
                </p>
              </div>
              <div className="border-l-4 border-yellow-400 pl-3">
                <p className="text-[10px] text-slate-500 uppercase">
                  Service Description
                </p>
                <p className="font-bold text-slate-800 uppercase">
                  {serviceName}
                </p>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase">
                    Issued Date
                  </p>
                  <p className="font-bold text-slate-700">{travelDate}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-slate-500 uppercase">
                    Verification Status
                  </p>
                  <p className="text-[10px] font-bold text-blue-600 italic">
                    SECURED BY UNLINK-GLOBAL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return notFound();
}
