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
 */
export default function StatusTracker() {
  return (
    <div className="lab-card overflow-hidden">
      <div className="border-b border-white/5 bg-white/[0.02] p-4">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-white">
          <CheckCircle2 className="text-primary h-4 w-4" />
          ระบบติดตามสถานะการจัดการเนื้อหา
        </h3>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {statusItems.map((item, index) => (
            <div key={index} className="relative flex items-center gap-4">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                  item.status === "completed"
                    ? "bg-primary/20 text-primary"
                    : item.status === "processing"
                      ? "animate-pulse bg-amber-500/20 text-amber-500"
                      : "bg-slate-800 text-slate-500"
                }`}
              >
                <item.icon size={20} />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-white">{item.label}</p>
                <Badge
                  variant={item.status === "completed" ? "default" : "outline"}
                  className="h-5 text-[10px] tracking-wider uppercase"
                >
                  {item.status}
                </Badge>
              </div>
              {index < statusItems.length - 1 && (
                <div className="absolute top-1/2 -right-3 hidden h-[1px] w-6 -translate-y-1/2 bg-white/10 md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
