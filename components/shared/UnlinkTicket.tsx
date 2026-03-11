"use client";

import React, { useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Printer, Share2, ShieldCheck, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

interface UnlinkTicketProps {
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
  serviceName?: string;
  className?: string;
}

export const UnlinkTicket: React.FC<UnlinkTicketProps> = ({
  data,
  serviceName = "Premium Bus Protocol",
  className,
}) => {
  const ticketRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className={cn("w-full flex flex-col gap-6 print:p-0", className)}>
      {/* Action Bar */}
      <div className="flex justify-end gap-3 print:hidden">
        <Button
          onClick={handlePrint}
          variant="outline"
          className="border-primary/20 text-muted-foreground font-mono text-[10px] tracking-widest uppercase hover:text-primary"
        >
          <Printer className="w-3 h-3 mr-2" />
          PDF / Print
        </Button>
        <Button
          variant="outline"
          className="border-primary/20 text-muted-foreground font-mono text-[10px] tracking-widest uppercase hover:text-primary"
        >
          <Share2 className="w-3 h-3 mr-2" />
          Share Ticket
        </Button>
      </div>

      {/* Ticket Container */}
      <div
        ref={ticketRef}
        className="w-full max-w-[850px] mx-auto bg-[#0a0c10] border border-primary/20 shadow-2xl overflow-hidden relative group print:shadow-none print:border-black"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row min-h-[400px]">
          {/* Main Content (Left) */}
          <div className="flex-1 p-8 md:p-12 relative flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-start mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20">
                  <Ticket className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-white font-bold tracking-tighter text-xl">
                    UNLINK-GLOBAL
                  </h2>
                  <p className="text-primary/60 font-mono text-[10px] tracking-[0.2em] uppercase">
                    {serviceName}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-muted-foreground font-mono text-[9px] tracking-widest uppercase mb-1">
                  Ticket ID
                </p>
                <p className="text-white font-black text-2xl tracking-tighter">
                  #{data.ticket_number}
                </p>
              </div>
            </div>

            {/* Passenger Info */}
            <div className="grid gap-12 mb-12">
              <div>
                <p className="text-muted-foreground font-mono text-[9px] tracking-widest uppercase mb-2">
                  Primary Passenger
                </p>
                <p className="text-3xl font-black text-white tracking-tight uppercase leading-none">
                  {data.passenger_name}
                </p>
              </div>

              {/* Journey Logic */}
              <div className="flex items-center gap-8 md:gap-16">
                <div>
                  <p className="text-muted-foreground font-mono text-[9px] tracking-widest uppercase mb-2">
                    Origin
                  </p>
                  <p className="text-2xl font-bold text-white uppercase">
                    {data.origin}
                  </p>
                </div>
                <div className="flex-1 h-px bg-primary/20 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
                </div>
                <div className="text-right">
                  <p className="text-muted-foreground font-mono text-[9px] tracking-widest uppercase mb-2">
                    Destination
                  </p>
                  <p className="text-2xl font-bold text-white uppercase">
                    {data.destination}
                  </p>
                </div>
              </div>
            </div>

            {/* Metadata Footer */}
            <div className="mt-auto pt-8 border-t border-primary/10 grid grid-cols-4 gap-4">
              <div>
                <p className="text-muted-foreground font-mono text-[8px] tracking-widest uppercase mb-1">
                  Date
                </p>
                <p className="text-white font-bold text-xs">{dept.date}</p>
              </div>
              <div>
                <p className="text-muted-foreground font-mono text-[8px] tracking-widest uppercase mb-1">
                  Time
                </p>
                <p className="text-white font-bold text-xs">{dept.time}</p>
              </div>
              <div>
                <p className="text-muted-foreground font-mono text-[8px] tracking-widest uppercase mb-1">
                  Seat
                </p>
                <p className="text-primary font-black text-sm uppercase">
                  {data.seat_number}
                </p>
              </div>
              <div className="text-right">
                <p className="text-muted-foreground font-mono text-[8px] tracking-widest uppercase mb-1">
                  Status
                </p>
                <div className="flex items-center justify-end gap-1 text-[10px] text-emerald-400 font-bold uppercase">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stub (Right) */}
          <div className="w-full md:w-[280px] bg-primary/[0.03] border-t md:border-t-0 md:border-l border-primary/10 p-8 flex flex-col items-center justify-between text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05),transparent)]" />

            <div className="relative z-10 w-full">
              <p className="text-primary/60 font-mono text-[10px] tracking-widest uppercase mb-6">
                Security Stub
              </p>
              <div className="p-4 bg-white rounded-xl shadow-2xl mb-6 flex justify-center">
                <QRCodeSVG
                  value={`${typeof window !== "undefined" ? window.location.origin : ""}/verify-ticket?ticket=${data.ticket_number}&id=${data.id_card_last_4}`}
                  size={140}
                  level="M"
                />
              </div>
              <p className="text-white/40 text-[9px] font-mono leading-relaxed px-4">
                Scan with any device to verify ticket authenticity. Reference:
                ****{data.id_card_last_4}
              </p>
            </div>

            <div className="relative z-10 pt-8 mt-8 border-t border-primary/10 w-full text-left">
              <p className="text-muted-foreground font-mono text-[8px] tracking-widest uppercase mb-1">
                Carrier Protocol
              </p>
              <p className="text-white font-bold text-[10px] uppercase">
                UNLINK-TH STANDARD EXECUTION
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print-ticket,
          .print-ticket * {
            visibility: visible;
          }
          .print-ticket {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};
