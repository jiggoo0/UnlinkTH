"use client";

import React from "react";
import { QRCodeSVG } from "qrcode.react";
import { generatePromptPayPayload } from "@/lib/promptpay";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Info } from "lucide-react";

interface PromptPayQRProps {
  amount: number;
  target?: string; // Mobile or Tax ID
  accountName?: string;
}

export const PromptPayQR: React.FC<PromptPayQRProps> = ({
  amount,
  target = "0612345678", // Default placeholder,ควรดึงจาก .env ในการใช้งานจริง
  accountName = "UNLINK-TH SERVICES",
}) => {
  const payload = generatePromptPayPayload(target, amount);

  return (
    <Card className="p-8 flex flex-col items-center gap-6 bg-white border-2 border-primary/10 shadow-xl">
      <div className="flex flex-col items-center gap-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c5/PromptPay-logo.png"
          alt="PromptPay Logo"
          className="h-10 w-auto"
        />
        <p className="text-sm font-bold text-blue-900 uppercase tracking-widest">
          {accountName}
        </p>
      </div>

      <div className="p-4 bg-white border-4 border-gray-100 rounded-2xl shadow-inner relative group">
        <QRCodeSVG value={payload} size={220} level="M" includeMargin={true} />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/10 backdrop-blur-[1px] pointer-events-none">
          <Badge className="bg-primary text-[10px] uppercase font-mono">
            Scan to Pay
          </Badge>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs text-muted-foreground uppercase tracking-widest font-bold">
          Amount to Pay
        </span>
        <span className="text-4xl font-black text-primary tracking-tighter">
          ฿{amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </span>
      </div>

      <div className="w-full grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-mono uppercase tracking-wider">
          <Smartphone className="w-3 h-3 text-primary/60" />
          <span>Auto-Verify Active</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-mono uppercase tracking-wider justify-end text-right">
          <Info className="w-3 h-3 text-primary/60" />
          <span>Secured Transaction</span>
        </div>
      </div>
    </Card>
  );
};
