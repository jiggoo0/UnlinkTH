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
  className?: string;
}

/**
 * UNLINK-TH | Case Study Intelligence Card
 * -------------------------------------------------------------------------
 * แสดงผลบันทึกการปฏิบัติการในรูปแบบแฟ้มข้อมูลเทคนิค
 * รองรับ Image Fallback และ Hover Animation ระดับพรีเมียม
 */

const FALLBACK_IMAGE = "/images/unlink-th.webp";

export default function CaseStudyCard({ study, className }: CaseStudyCardProps) {
  // 🛡️ Data Integrity Check
  const imageSrc = study.thumbnail && study.thumbnail.trim() !== "" 
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
      <Link href={`/case-studies/${study.slug}`} className="group block h-full">
        <div className="lab-card flex h-full flex-col overflow-hidden border-border/40 transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-2xl group-hover:shadow-primary/5">
          
          {/* 1. Visual Evidence Header */}
          <div className="relative aspect-[16/10] overflow-hidden bg-muted/30 border-b border-border/10 flex items-center justify-center">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={study.title || "Case Study Thumbnail"}
                fill
                className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="text-muted-foreground/20 flex flex-col items-center gap-3">
                <ImageOff className="h-10 w-10" />
                <span className="font-mono text-[10px] tracking-widest uppercase">No Visual Signal</span>
              </div>
            )}

            {/* Visual Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-20" />

            {/* Category Tag */}
            <div className="absolute top-4 left-4">
              <Badge className="bg-background/90 text-primary border-primary/20 font-mono text-[9px] tracking-[0.2em] uppercase backdrop-blur-md px-3 py-1">
                {study.category}
              </Badge>
            </div>
          </div>

          {/* 2. Briefing Content */}
          <div className="flex flex-1 flex-col justify-between p-7 space-y-6">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl md:text-2xl font-bold tracking-tighter leading-tight group-hover:text-primary transition-colors duration-300">
                  {study.title || "Untitled Operation"}
                </h3>
                <div className="bg-primary/5 text-primary rounded-full p-2 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 shrink-0">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed font-light">
                {study.excerpt || "บันทึกรายละเอียดปฏิบัติการอยู่ภายใต้มาตรการปกปิดข้อมูลชั่วคราว"}
              </p>
            </div>

            {/* 3. Operational Footer */}
            <div className="pt-5 border-t border-border/10 flex items-center justify-between">
              <div className="flex items-center text-primary/60 font-mono text-[9px] tracking-[0.25em] uppercase">
                <ShieldCheck className="h-3.5 w-3.5 mr-2 animate-pulse text-primary" />
                Verified Outcome
              </div>
              {study.date && (
                <span className="text-muted-foreground/30 font-mono text-[9px] tracking-tighter">
                  REF: {study.date}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
