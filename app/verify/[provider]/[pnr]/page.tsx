/** @format */

import { CheckCircle2, Plane, AlertTriangle, Clock, Bus } from "lucide-react";
import { db } from "@/lib/db";

interface VerifyPageProps {
  params: Promise<{ provider: string; pnr: string }>;
}

/**
 * 🔍 DYNAMIC VERIFICATION SYSTEM (Elite High-Fidelity)
 * ---------------------------------------------------------
 * ระบบตรวจสอบสถานะที่เชื่อมต่อกับฐานข้อมูล Turso จริง 100%
 * ออกแบบมาเพื่อให้ความสมจริงระดับ GDS และมาตรฐานสากล
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
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50 font-sans">
        <AlertTriangle className="w-16 h-16 text-amber-500 mb-4" />
        <h1 className="text-2xl font-bold text-slate-800 uppercase tracking-tight">
          Access Denied
        </h1>
        <p className="text-slate-500 text-center mt-2 max-w-xs text-sm">
          The reference number <strong>{pnr.toUpperCase()}</strong> was not
          found in our global synchronization hub.
        </p>
        <div className="mt-8 pt-8 border-t border-slate-200 w-full max-w-xs text-center">
          <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">
            Security Node: UNLINK-AUTH-FAIL
          </p>
        </div>
      </div>
    );
  }

  const caseData = result.rows[0];
  const passengerName = String(caseData.customer_name).toUpperCase();
  const status = String(caseData.status).toUpperCase();
  const travelDate = new Date(String(caseData.created_at)).toLocaleDateString(
    "en-GB",
    { day: "2-digit", month: "long", year: "numeric" },
  );

  const metadata = caseData.metadata
    ? JSON.parse(String(caseData.metadata))
    : {};

  // 🏛️ STATUS COLORS & LABELS
  const isApproved =
    status === "APPROVED" || status === "CONFIRMED" || status === "SUCCESS";
  const statusLabel = isApproved
    ? "ยืนยันแล้ว / ตรวจสอบพบข้อมูล"
    : "รอการยืนยันการชำระเงิน";
  const statusColor = isApproved ? "bg-emerald-600" : "bg-amber-500";

  // 🚌 TEMPLATE: TRANSPORT CO (บขส.)
  if (provider === "transport-co") {
    return (
      <div className="min-h-screen bg-[#f0f4f8] font-sans text-slate-800 pb-12">
        <div className="bg-[#1a365d] px-6 py-4 flex items-center justify-between shadow-lg border-b-4 border-amber-400">
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-lg shadow-inner">
              <Bus className="w-6 h-6 text-[#1a365d]" />
            </div>
            <div>
              <h1 className="text-white text-base font-black tracking-tight uppercase leading-tight">
                บริษัท ขนส่ง จำกัด
              </h1>
              <p className="text-blue-200 text-[9px] font-bold uppercase tracking-widest">
                ระบบตรวจสอบตั๋วอิเล็กทรอนิกส์
              </p>
            </div>
          </div>
          <div className="hidden sm:block text-right">
            <p className="text-white/40 text-[8px] font-mono uppercase">
              Node ตรวจสอบ
            </p>
            <p className="text-white text-[10px] font-bold tracking-tighter uppercase">
              {pnr.toUpperCase()}
            </p>
          </div>
        </div>

        <div className="max-w-md mx-auto mt-10 px-4">
          <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-200">
            <div
              className={`px-6 py-4 flex items-center gap-3 text-white ${statusColor} transition-colors duration-500`}
            >
              {isApproved ? (
                <CheckCircle2 className="w-6 h-6" />
              ) : (
                <Clock className="w-6 h-6 animate-pulse" />
              )}
              <span className="font-black text-sm uppercase tracking-tight">
                {statusLabel}
              </span>
            </div>

            <div className="p-8 space-y-8">
              <div className="text-center pb-6 border-b border-slate-100 relative">
                <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">
                  หมายเลขอ้างอิงตั๋ว
                </p>
                <p className="text-3xl font-black text-[#1a365d] tracking-[0.2em]">
                  {pnr.toUpperCase()}
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2">
                    <p className="text-[9px] text-slate-400 uppercase font-bold mb-1">
                      ชื่อผู้โดยสาร
                    </p>
                    <p className="text-lg font-black text-slate-800 border-b border-slate-100 pb-2">
                      {passengerName}
                    </p>
                  </div>
                  <div>
                    <p className="text-[9px] text-slate-400 uppercase font-bold mb-1">
                      วันที่เดินทาง
                    </p>
                    <p className="text-sm font-bold text-slate-700">
                      {metadata.travelDate || travelDate}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] text-slate-400 uppercase font-bold mb-1">
                      ชั้นที่นั่ง
                    </p>
                    <p className="text-sm font-black text-blue-600 uppercase">
                      VIP 24 (พรีเมียม)
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[8px] text-slate-400 uppercase font-bold">
                        ต้นทาง
                      </p>
                      <p className="text-xs font-black">
                        {metadata.departureStation || "กรุงเทพฯ (หมอชิต 2)"}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[8px] text-slate-400 uppercase font-bold">
                        ปลายทาง
                      </p>
                      <p className="text-xs font-black">
                        {metadata.arrivalStation || "เชียงใหม่"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col items-center gap-2">
                <div className="w-full h-px bg-slate-100" />
                <p className="text-[8px] text-slate-400 uppercase font-bold italic">
                  รับรองความถูกต้องโดย UNLINK GLOBAL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ✈️ TEMPLATE: AIRLINES (GDS Style)
  if (
    provider === "tg-airways" ||
    provider === "emirates" ||
    provider === "airline"
  ) {
    const isThai = provider === "tg-airways";
    const brandColor = isThai ? "#4a154b" : "#d71921";
    const brandName = isThai ? "THAI AIRWAYS" : "EMIRATES";

    return (
      <div className="min-h-screen bg-slate-100 font-sans text-slate-900 pb-12">
        <div
          className={`bg-[${brandColor}] px-6 py-6 flex items-center justify-between shadow-xl border-b-2 border-yellow-500`}
          style={{ backgroundColor: brandColor }}
        >
          <h1 className="text-white text-xl font-serif italic tracking-[0.1em] font-bold">
            {brandName}
          </h1>
          <div className="flex items-center gap-2">
            <Plane className="w-5 h-5 text-yellow-400" />
            <span className="text-white text-[10px] font-bold uppercase tracking-widest">
              การตรวจสอบสากล
            </span>
          </div>
        </div>

        <div className="max-w-md mx-auto mt-8 px-4">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200">
            <div
              className={`p-6 flex items-center justify-between border-b border-slate-100 ${isApproved ? "bg-emerald-50" : "bg-amber-50"}`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-2 h-2 rounded-full ${isApproved ? "bg-emerald-500 animate-pulse" : "bg-amber-500"}`}
                />
                <span
                  className={`text-[11px] font-black uppercase tracking-tighter ${isApproved ? "text-emerald-700" : "text-amber-700"}`}
                >
                  {statusLabel}
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">
                GDS-RECORD-ACTIVE
              </span>
            </div>

            <div className="p-8 space-y-10">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest mb-1">
                    รหัสการจอง (PNR)
                  </p>
                  <p className="text-3xl font-black text-slate-900 font-mono tracking-widest">
                    {pnr.toUpperCase()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest mb-1">
                    ชั้นโดยสาร
                  </p>
                  <p className="text-sm font-bold text-slate-600">
                    ECONOMY (Y)
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div
                  className="border-l-4 pl-4"
                  style={{ borderColor: brandColor }}
                >
                  <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest mb-1">
                    ข้อมูลผู้โดยสาร
                  </p>
                  <p className="text-xl font-black text-slate-800">
                    {passengerName}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest mb-1">
                      วันที่ออกตั๋ว
                    </p>
                    <p className="text-sm font-bold text-slate-700">
                      {travelDate}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest mb-1">
                      สถานะตั๋ว
                    </p>
                    <p
                      className={`text-sm font-black ${isApproved ? "text-emerald-600" : "text-amber-600"}`}
                    >
                      {status}
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl space-y-4 border border-slate-100">
                  <div className="flex justify-between items-center text-xs">
                    <div className="space-y-1">
                      <p className="text-[8px] text-slate-400 uppercase font-bold">
                        ต้นทาง
                      </p>
                      <p className="font-black uppercase">
                        {metadata.departureCity || "BANGKOK (BKK)"}
                      </p>
                    </div>
                    <div className="flex-1 border-t border-dashed border-slate-300 mx-4" />
                    <div className="space-y-1 text-right">
                      <p className="text-[8px] text-slate-400 uppercase font-bold">
                        ปลายทาง
                      </p>
                      <p className="font-black uppercase">
                        {metadata.arrivalCity || "LONDON (LHR)"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center pt-4">
                <p className="text-[7px] text-slate-400 uppercase tracking-[0.3em] font-bold">
                  Certified Global Distribution System Verification
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 🏨 TEMPLATE: HOTEL BOOKING
  if (
    provider === "ritz-paris" ||
    provider === "savoy-london" ||
    provider === "hotel" ||
    provider.includes("RITZ") ||
    provider.includes("SAVOY")
  ) {
    const hotelName =
      metadata.hotelName ||
      (provider.includes("RITZ") ? "Ritz Paris" : "The Savoy London");

    return (
      <div className="min-h-screen bg-[#faf9f6] font-serif text-[#1a1a1a] pb-12">
        <div className="bg-[#1a1a1a] px-8 py-8 flex flex-col items-center text-center border-b-4 border-[#c5a059]">
          <h1 className="text-white text-2xl tracking-[0.2em] font-light uppercase">
            ตรวจสอบข้อมูลการจอง
          </h1>
          <p className="text-[#c5a059] text-[10px] mt-2 font-sans font-bold uppercase tracking-[0.4em]">
            Luxury Hospitality Global Registry
          </p>
        </div>

        <div className="max-w-md mx-auto mt-12 px-4 font-sans">
          <div className="bg-white shadow-2xl overflow-hidden border border-slate-100 rounded-sm">
            <div
              className={`py-4 px-6 text-center text-white font-bold text-xs tracking-widest uppercase ${statusColor}`}
            >
              {statusLabel}
            </div>

            <div className="p-10 space-y-10">
              <div className="text-center space-y-2">
                <p className="text-[10px] text-slate-400 uppercase font-black tracking-[0.2em]">
                  ชื่อผู้เข้าพัก
                </p>
                <p className="text-2xl font-serif italic text-slate-900 border-b border-slate-100 pb-4 inline-block px-4">
                  {passengerName}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 border-y border-slate-50 py-8">
                <div>
                  <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest mb-1">
                    วันที่เช็คอิน
                  </p>
                  <p className="text-sm font-bold text-slate-800">
                    {metadata.checkIn || "รอดำเนินการ"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest mb-1">
                    วันที่เช็คเอาท์
                  </p>
                  <p className="text-sm font-bold text-slate-800">
                    {metadata.checkOut || "รอดำเนินการ"}
                  </p>
                </div>
                <div className="col-span-2 text-center pt-4">
                  <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest mb-1">
                    ชื่อโรงแรม
                  </p>
                  <p className="text-base font-serif italic text-[#c5a059]">
                    {hotelName}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 uppercase font-bold tracking-tighter">
                    หมายเลขยืนยัน
                  </span>
                  <span className="font-black text-slate-900 tracking-widest">
                    {pnr.toUpperCase()}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 uppercase font-bold tracking-tighter">
                    ประเภทห้อง
                  </span>
                  <span className="font-bold text-slate-700">
                    {metadata.roomType || "Luxury Suite"}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 uppercase font-bold tracking-tighter">
                    สถานะการจอง
                  </span>
                  <span
                    className={`font-black uppercase ${isApproved ? "text-emerald-600" : "text-amber-600"}`}
                  >
                    {status}
                  </span>
                </div>
              </div>

              <div className="pt-10 text-center border-t border-slate-50">
                <p className="text-[7px] text-slate-300 uppercase font-bold tracking-[0.4em]">
                  Elite Registry Authenticated
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 🛡️ DEFAULT FALLBACK (Simplified Verification)
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-sans">
      <div className="bg-white p-12 rounded-[3rem] shadow-2xl max-w-sm w-full border border-slate-100 text-center">
        <div
          className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 ${isApproved ? "bg-emerald-50 text-emerald-500" : "bg-amber-50 text-amber-500"}`}
        >
          {isApproved ? (
            <CheckCircle2 className="w-10 h-10" />
          ) : (
            <Clock className="w-10 h-10 animate-pulse" />
          )}
        </div>
        <h1 className="text-2xl font-black text-slate-800 uppercase tracking-tighter mb-2">
          {status}
        </h1>
        <p className="text-slate-500 text-sm mb-10 leading-relaxed uppercase font-bold tracking-widest">
          {statusLabel}
        </p>

        <div className="space-y-4 text-left bg-slate-50 p-6 rounded-2xl border border-slate-100">
          <div>
            <p className="text-[8px] text-slate-400 uppercase font-black mb-1">
              Client Name
            </p>
            <p className="text-xs font-bold text-slate-800">{passengerName}</p>
          </div>
          <div>
            <p className="text-[8px] text-slate-400 uppercase font-black mb-1">
              Reference ID
            </p>
            <p className="text-xs font-mono font-bold text-slate-800">
              {pnr.toUpperCase()}
            </p>
          </div>
          <div>
            <p className="text-[8px] text-slate-400 uppercase font-black mb-1">
              Issue Date
            </p>
            <p className="text-xs font-bold text-slate-800">{travelDate}</p>
          </div>
        </div>

        <p className="mt-10 text-[8px] text-slate-300 font-bold uppercase tracking-[0.2em]">
          Verified by UNLINK-GLOBAL Hub
        </p>
      </div>
    </div>
  );
}
