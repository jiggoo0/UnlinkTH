/** @format */

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ImageOff, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface CaseStudyCardProps {
  study: {
    slug: string;
    title: string;
    category: string;
    thumbnail: string;
    excerpt: string;
    date?: string;
  };
  priority?: boolean;
  className?: string;
}

/**
 * UNLINK-TH | Case Study Operational Card
 * -------------------------------------------------------------------------
 * แสดงผลบันทึกการปฏิบัติการในรูปแบบแฟ้มข้อมูลทางเทคนิค
 * ออกแบบเพื่อสะท้อนถึงผลลัพธ์เชิงประจักษ์ (Verified Outcomes)
 */

const FALLBACK_IMAGE =
  "https://biwruclmzuaemlbrnbvu.supabase.co/storage/v1/object/public/UNLINK-TH/images/unlink-th.webp";

export default function CaseStudyCard({
  study,
  priority = false,
  className,
}: CaseStudyCardProps) {
  // ตรวจสอบความถูกต้องของเส้นทางรูปภาพ
  const imageSrc =
    study.thumbnail && study.thumbnail.trim() !== ""
      ? study.thumbnail
      : FALLBACK_IMAGE;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("h-full", className)}
    >
      <Link
        href={`/case-studies/${study.slug}`}
        className="group block h-full cursor-pointer transition-transform duration-200 active:scale-[0.98]"
      >
        <div className="lab-card border-border/40 group-hover:border-primary/40 group-hover:shadow-primary/5 flex h-full flex-col overflow-hidden transition-all duration-500 group-hover:shadow-2xl">
          {/* 1. Operational Evidence Header */}
          <div className="bg-muted/30 border-border/10 relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={`บันทึกการปฏิบัติการ: ${study.title || "Classified Operation"}`}
                fill
                priority={priority}
                className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="text-muted-foreground/20 flex flex-col items-center gap-3">
                <ImageOff className="h-10 w-10" />
                <span className="font-mono text-[10px] tracking-widest uppercase">
                  No Signal Detected
                </span>
              </div>
            )}

            {/* Visual Overlay Control */}
            <div className="from-background/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-20" />

            {/* Classification Tag */}
            <div className="absolute top-4 left-4">
              <Badge className="bg-background/90 text-primary border-primary/20 px-3 py-1 font-mono text-[9px] tracking-[0.2em] uppercase backdrop-blur-md">
                {study.category}
              </Badge>
            </div>
          </div>

          {/* 2. Intelligence Briefing Content */}
          <div className="flex flex-1 flex-col justify-between space-y-6 p-7">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <h3 className="group-hover:text-primary text-xl leading-tight font-bold tracking-tighter transition-colors duration-300 md:text-2xl">
                  {study.title || "Classified Operation"}
                </h3>
                <div className="bg-primary/5 text-primary shrink-0 -translate-x-2 rounded-full p-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed font-light">
                {study.excerpt ||
                  "รายละเอียดปฏิบัติการถูกจำกัดสิทธิ์การเข้าถึงชั่วคราวตามนโยบายรักษาความลับ"}
              </p>
            </div>

            {/* 3. Authentication Footer */}
            <div className="border-border/10 flex items-center justify-between border-t pt-5">
              <div className="text-primary/60 flex items-center font-mono text-[9px] tracking-[0.25em] uppercase">
                <ShieldCheck className="text-primary mr-2 h-3.5 w-3.5 animate-pulse" />
                Verified Outcome
              </div>
              {study.date && (
                <span className="text-muted-foreground/30 font-mono text-[9px] tracking-tighter">
                  ID: {study.date}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
