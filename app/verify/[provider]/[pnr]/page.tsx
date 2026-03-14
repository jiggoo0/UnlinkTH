/** @format */

import { notFound } from "next/navigation";
import { CheckCircle2, Plane } from "lucide-react";

interface VerifyPageProps {
  params: Promise<{ provider: string; pnr: string }>;
  searchParams: Promise<{ name?: string; date?: string; route?: string }>;
}

/**
 * 🔍 DYNAMIC VERIFICATION SYSTEM (High-Fidelity)
 * ---------------------------------------------------------
 * ระบบตรวจสอบสถานะตั๋วที่ถอดแบบ UI ของแต่ละบริษัทมาอย่างแนบเนียน
 */

export default async function VerifyTicketPage({
  params,
  searchParams,
}: VerifyPageProps) {
  const { provider, pnr } = await params;
  const { name, date, route } = await searchParams;

  const passengerName = name || "SOMCHAI JAIDEE";
  const travelDate = date || "2026-10-15";
  const travelRoute = route || "BANGKOK - CHIANG MAI";

  // 🚌 TEMPLATE 1: บริษัท ขนส่ง จำกัด (Transport Co.)
  if (provider === "transport-co") {
    return (
      <div className="min-h-screen bg-[#f4f7f6] font-sans text-slate-800">
        {/* Official Header */}
        <div className="bg-[#1a365d] px-4 py-3 flex items-center gap-3 shadow-md">
          <div className="bg-white p-1 rounded">
            <div className="w-8 h-8 bg-slate-100 flex items-center justify-center text-[5px] font-bold">
              LOGO
            </div>
          </div>
          <div>
            <h1 className="text-white text-sm font-bold">บริษัท ขนส่ง จำกัด</h1>
            <p className="text-blue-200 text-[10px] uppercase">
              The Transport Co., Ltd. E-Ticket Verification
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-md mx-auto mt-8 px-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-green-600 text-white px-4 py-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-bold text-sm">ตรวจสอบพบข้อมูลในระบบ</span>
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
                <div>
                  <p className="text-[10px] text-gray-500 mb-1">
                    ชื่อผู้โดยสาร
                  </p>
                  <p className="font-bold uppercase">{passengerName}</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 mb-1">สถานะ</p>
                  <p className="font-bold text-green-600">CONFIRMED</p>
                </div>
                <div className="col-span-2">
                  <p className="text-[10px] text-gray-500 mb-1">เส้นทาง</p>
                  <p className="font-bold">{travelRoute}</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 mb-1">
                    วันที่เดินทาง
                  </p>
                  <p className="font-bold">{travelDate}</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 mb-1">เวลา</p>
                  <p className="font-bold">20:30</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-5 py-3 text-center text-[9px] text-gray-400">
              <p>
                ข้อมูลนี้ดึงมาจากฐานข้อมูลกลางของบริษัทฯ
                โปรดแสดงหน้านี้ต่อเจ้าหน้าที่หากมีการเรียกตรวจ
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ✈️ TEMPLATE 2: สายการบิน (ตัวอย่าง Thai Airways / GDS)
  if (provider === "tg-airways") {
    return (
      <div className="min-h-screen bg-white font-sans text-[#4a154b]">
        {/* Official Header */}
        <div className="bg-[#4a154b] px-4 py-4 flex items-center justify-between shadow-md">
          <h1 className="text-white text-lg font-serif italic">Thai Airways</h1>
          <Plane className="w-6 h-6 text-yellow-400" />
        </div>

        <div className="max-w-md mx-auto mt-6 px-4">
          <h2 className="text-xl font-bold mb-4">Manage Booking</h2>
          <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-xs text-slate-500 uppercase">
                  Booking Ref (PNR)
                </p>
                <p className="text-2xl font-black text-[#4a154b]">
                  {pnr.toUpperCase()}
                </p>
              </div>
              <div className="bg-green-100 text-green-700 px-3 py-1 rounded font-bold text-xs">
                CONFIRMED
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-[#4a154b] pl-3">
                <p className="text-xs text-slate-500">Passenger</p>
                <p className="font-bold text-slate-800 uppercase">
                  {passengerName}
                </p>
              </div>
              <div className="border-l-4 border-yellow-400 pl-3">
                <p className="text-xs text-slate-500">Flight Status</p>
                <p className="font-bold text-slate-800 uppercase">
                  Ticket Issued (E-TKT)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ❌ Not Found
  return notFound();
}
