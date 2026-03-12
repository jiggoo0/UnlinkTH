"use client";

import { Badge } from "@/components/ui/badge";
import { Search, Trash2, Globe, CheckCircle2 } from "lucide-react";

const statusItems = [
  { label: "วิเคราะห์ข้อมูล", icon: Search, status: "completed" },
  { label: "De-indexing", icon: Globe, status: "processing" },
  { label: "Content Removal", icon: Trash2, status: "pending" },
];

/**
 * Industrial Status Tracker (Reputation Architecture)
 * แสดงความเป็นมืออาชีพและขั้นตอนการจัดการเนื้อหาที่ชัดเจน
 * ออกแบบมาเพื่อสร้าง Trust ให้เห็นว่ามีกระบวนการทำงานจริง
 */
export default function StatusTracker() {
  return (
    <div className="lab-card overflow-hidden border-primary/20 bg-primary/5 shadow-2xl">
      <div className="border-b border-white/5 bg-white/[0.02] p-4 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-sm font-bold text-white tracking-widest uppercase italic">
          <CheckCircle2 className="text-primary h-4 w-4" />
          Real-time Operational Protocol
        </h3>
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="font-mono text-[9px] text-primary/60 tracking-widest uppercase">System Active</span>
        </div>
      </div>
      <div className="p-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            { label: "วิเคราะห์โครงสร้างข้อมูล", icon: Search, status: "สำเร็จ", sub: "Data Integrity Verified" },
            { label: "ปฏิบัติการระงับการเข้าถึง", icon: Globe, status: "กำลังดำเนินการ", sub: "De-indexing Active" },
            { label: "ถอนรากถอนโคนเนื้อหาเสีย", icon: Trash2, status: "รอเข้าคิว", sub: "Cleanup Sequence" },
          ].map((item, index) => (
            <div key={index} className="relative flex flex-col items-center md:items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl border ${
                  item.status === "สำเร็จ"
                    ? "bg-primary/10 border-primary/30 text-primary"
                    : item.status === "กำลังดำเนินการ"
                      ? "animate-pulse bg-amber-500/10 border-amber-500/30 text-amber-500"
                      : "bg-slate-800/50 border-white/5 text-slate-500"
                }`}
              >
                <item.icon size={24} />
              </div>
              <div className="space-y-1 text-center md:text-left">
                <p className="text-xs font-bold text-white uppercase">{item.label}</p>
                <p className="font-mono text-[8px] text-slate-500 tracking-widest uppercase">{item.sub}</p>
                <Badge
                  variant={item.status === "สำเร็จ" ? "default" : "outline"}
                  className="mt-2 h-5 text-[9px] tracking-widest uppercase font-black italic"
                >
                  {item.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
