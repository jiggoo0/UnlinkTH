import React, { useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Printer, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface SombatTicketProps {
  data: {
    ticket_number: string;
    passenger_name: string;
    id_card_last_4: string;
    origin: string;
    destination: string;
    departure_time: string;
    seat_number: string;
    status?: string;
  };
  showQr?: boolean;
}

export const SombatTicket: React.FC<SombatTicketProps> = ({
  data,
  showQr = true,
}) => {
  const ticketRef = useRef<HTMLDivElement>(null);

  const mockData = {
    tripNo: `TRP${Math.floor(Math.random() * 9000) + 1000}`,
    coachType: "SUPREME (15 M)",
    platform: Math.floor(Math.random() * 10) + 1,
    price: "850.00",
    issueDate: new Date().toLocaleString("th-TH", {
      dateStyle: "short",
      timeStyle: "short",
    }),
    cashier: "SYSTEM_AUTO",
  };

  const formatDisplayDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      return {
        date: d
          .toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })
          .toUpperCase(),
        time: d.toLocaleTimeString("th-TH", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
    } catch {
      return { date: "DD-MMM-YYYY", time: "00:00" };
    }
  };

  const dept = formatDisplayDate(data.departure_time);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Sombat Tour Ticket - ${data.ticket_number}`,
          text: `ตั๋วโดยสารสมบัติทัวร์: ${data.origin} - ${data.destination} (ที่นั่ง ${data.seat_number})`,
          url: window.location.href,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      toast.info("เบราว์เซอร์ของคุณไม่รองรับการแชร์โดยตรง");
    }
  };

  return (
    <div className="w-full flex flex-col gap-4 print:p-0">
      {/* Action Buttons - Hidden when printing */}
      <div className="flex justify-center gap-3 print:hidden">
        <Button
          onClick={handlePrint}
          className="bg-blue-700 hover:bg-blue-800 text-white font-black flex items-center gap-2 px-6"
        >
          <Printer className="w-4 h-4" />
          บันทึกเป็น PDF / พิมพ์
        </Button>
        <Button
          onClick={handleShare}
          variant="outline"
          className="border-blue-700 text-blue-700 font-black flex items-center gap-2"
        >
          <Share2 className="w-4 h-4" />
          แชร์ตั๋ว
        </Button>
      </div>

      <div
        ref={ticketRef}
        className="w-full max-w-[800px] mx-auto bg-white flex flex-col md:flex-row shadow-2xl overflow-hidden font-sans border border-gray-300 relative group print:shadow-none print:border-gray-200 print:max-w-none"
      >
        {/* ---------------- LEFT SECTION (MAIN TICKET) ---------------- */}
        <div className="w-full md:w-[70%] bg-white p-0 flex flex-col relative z-10">
          {/* Header - Blue Bar */}
          <div className="bg-[#003399] text-white px-6 py-4 flex justify-between items-center h-[90px]">
            <div className="flex items-center gap-4">
              <div className="bg-white p-1 rounded">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv86BlfL2W8MXb8JvZfkzWV1-Wzm5WNp81fOqpA6seGA&s=10"
                  alt="Sombat Tour Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-black tracking-widest uppercase">
                  SOMBAT TOUR
                </h1>
                <p className="text-xs font-bold text-blue-200 tracking-[0.2em] uppercase">
                  บริษัท สมบัติทัวร์ จำกัด
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-blue-200 uppercase tracking-widest font-bold mb-1">
                Boarding Pass
              </p>
              <div className="bg-white text-[#003399] px-3 py-1 text-sm font-black tracking-widest rounded-sm inline-block">
                {data.ticket_number}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-6 relative bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-opacity-10">
            {/* Sombat Watermark (Faded) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv86BlfL2W8MXb8JvZfkzWV1-Wzm5WNp81fOqpA6seGA&s=10"
                alt="watermark"
                className="w-64 grayscale grayscale-100"
              />
            </div>

            <div className="flex justify-between items-end mb-6 border-b-2 border-gray-800 pb-2">
              <div>
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1">
                  Name of Passenger
                </p>
                <p className="text-2xl font-black text-gray-900 uppercase leading-none">
                  {data.passenger_name}
                </p>
              </div>
              <div className="text-right">
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1">
                  Class
                </p>
                <p className="text-lg font-black text-gray-900 uppercase leading-none">
                  {mockData.coachType}
                </p>
              </div>
            </div>

            {/* Route Info */}
            <div className="flex items-center justify-between mb-8">
              <div className="w-[40%]">
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1">
                  From
                </p>
                <p className="text-3xl font-black text-[#003399] leading-none uppercase">
                  {data.origin}
                </p>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#003399"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mb-1"
                >
                  <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                  <circle cx="7" cy="17" r="2" />
                  <path d="M9 17h6" />
                  <circle cx="17" cy="17" r="2" />
                </svg>
                <div className="w-full h-[2px] bg-gray-300 relative">
                  <div className="absolute right-0 top-[-4px] w-2 h-2 rounded-full bg-[#003399]"></div>
                </div>
                <p className="text-[10px] font-bold text-gray-500 mt-1 uppercase tracking-widest">
                  Trip: {mockData.tripNo}
                </p>
              </div>

              <div className="w-[40%] text-right">
                <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1">
                  To
                </p>
                <p className="text-3xl font-black text-[#003399] leading-none uppercase">
                  {data.destination}
                </p>
              </div>
            </div>

            {/* Core Metrics Grid */}
            <div className="grid grid-cols-4 gap-4 bg-gray-50 p-4 rounded-md border border-gray-200">
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">
                  Date
                </p>
                <p className="text-lg font-black text-gray-900 font-mono">
                  {dept.date}
                </p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">
                  Time
                </p>
                <p className="text-lg font-black text-gray-900 font-mono">
                  {dept.time}
                </p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">
                  Gate/Platform
                </p>
                <p className="text-lg font-black text-gray-900 font-mono">
                  {mockData.platform}
                </p>
              </div>
              <div className="bg-yellow-100 -m-4 p-4 border-l-2 border-yellow-400 flex flex-col justify-center items-center">
                <p className="text-[10px] font-bold text-yellow-800 uppercase tracking-widest mb-1">
                  Seat
                </p>
                <p className="text-3xl font-black text-[#003399] leading-none font-mono">
                  {data.seat_number}
                </p>
              </div>
            </div>
          </div>

          {/* Footer info */}
          <div className="px-6 py-2 border-t border-gray-200 text-[10px] text-gray-500 flex justify-between font-mono">
            <span>
              ISSUED: {mockData.issueDate} / {mockData.cashier}
            </span>
            <span>ID REF: ****{data.id_card_last_4}</span>
          </div>
        </div>

        {/* ---------------- PERFORATION LINE ---------------- */}
        <div className="hidden md:flex flex-col justify-between items-center w-6 relative bg-white z-20">
          <div className="absolute top-0 bottom-0 left-1/2 w-0 border-l-2 border-dashed border-gray-300 transform -translate-x-1/2"></div>
          <div className="w-6 h-6 bg-gray-100 rounded-full -mt-3 shadow-inner"></div>
          <div className="w-6 h-6 bg-gray-100 rounded-full -mb-3 shadow-inner"></div>
        </div>
        {/* Mobile Perforation */}
        <div className="md:hidden flex justify-between items-center h-6 relative bg-white z-20 overflow-hidden">
          <div className="absolute left-0 right-0 top-1/2 h-0 border-t-2 border-dashed border-gray-300 transform -translate-y-1/2"></div>
          <div className="w-6 h-6 bg-gray-100 rounded-full -ml-3 shadow-inner"></div>
          <div className="w-6 h-6 bg-gray-100 rounded-full -mr-3 shadow-inner"></div>
        </div>

        {/* ---------------- RIGHT SECTION (STUB / QR) ---------------- */}
        <div className="w-full md:w-[30%] bg-gray-50 p-0 flex flex-col border-l border-gray-200 md:border-l-0">
          <div className="bg-[#003399] text-white px-4 py-4 h-[90px] flex flex-col justify-center">
            <p className="text-[10px] text-blue-200 uppercase tracking-widest font-bold">
              Passenger Stub
            </p>
            <p className="text-lg font-black tracking-widest">
              {data.ticket_number}
            </p>
          </div>

          <div className="p-6 flex-1 flex flex-col justify-between items-center text-center">
            <div className="w-full space-y-3 mb-4">
              <div>
                <p className="text-[9px] font-bold text-gray-400 uppercase">
                  Passenger
                </p>
                <p className="text-sm font-black text-gray-800 uppercase truncate">
                  {data.passenger_name}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 border-t border-b border-gray-200 py-2">
                <div>
                  <p className="text-[9px] font-bold text-gray-400 uppercase">
                    Time
                  </p>
                  <p className="font-bold font-mono text-gray-800">
                    {dept.time}
                  </p>
                </div>
                <div>
                  <p className="text-[9px] font-bold text-gray-400 uppercase">
                    Seat
                  </p>
                  <p className="font-black font-mono text-[#003399] text-lg leading-none">
                    {data.seat_number}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-[9px] font-bold text-gray-400 uppercase">
                  Fare (THB)
                </p>
                <p className="text-sm font-black text-gray-800">
                  {mockData.price}
                </p>
              </div>
            </div>

            {showQr && (
              <div className="mt-auto">
                <div className="p-1.5 bg-white border-2 border-gray-200 rounded">
                  <QRCodeSVG
                    value={
                      typeof window !== "undefined"
                        ? `${window.location.origin}/verify-ticket?ticket=${data.ticket_number}&id=${data.id_card_last_4}`
                        : ""
                    }
                    size={90}
                    level="M"
                  />
                </div>
                <p className="text-[8px] font-bold text-gray-400 uppercase mt-2 tracking-widest">
                  Scan to Verify
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print\\:block,
          .print\\:block * {
            visibility: visible;
          }
          /* Ensure the ticket is visible */
          .w-full.max-w-\\[800px\\].mx-auto,
          .w-full.max-w-\\[800px\\].mx-auto * {
            visibility: visible;
          }
          .w-full.max-w-\\[800px\\].mx-auto {
            position: absolute;
            left: 0;
            top: 0;
            margin: 0;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};
