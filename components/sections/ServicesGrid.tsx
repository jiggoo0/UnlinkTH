/** @format */

import { getAllServices } from "@/lib/mdx";
import ServiceCard from "@/components/shared/ServiceCard";
import { ShieldAlert } from "lucide-react";

/**
 * UNLINK-GLOBAL | Services Grid Section
 * ดึงข้อมูลบริการล่าสุดมาแสดงผลในรูปแบบ Grid
 */
export default async function ServicesGrid() {
  const servicesData = await getAllServices();

  if (!servicesData || servicesData.length === 0) {
    return (
      <div className="border-border/10 bg-white/5 col-span-2 rounded-[2.5rem] border border-dashed py-24 text-center backdrop-blur-sm">
        <div className="mx-auto max-w-xs space-y-4">
          <ShieldAlert className="text-primary/20 w-10 h-10 mx-auto" />
          <p className="text-slate-500 font-mono text-[10px] tracking-[0.4em] uppercase">
            Matrix Modules Offline
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">
      {servicesData.slice(0, 6).map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
}
