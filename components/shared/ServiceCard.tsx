"use client";

import Link from "next/link";
import Image from "next/image";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";
import { Service } from "@/types";
import { ArrowRight, ShieldCheck } from "lucide-react";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  if (!service) return null;

  const IconComponent = (LucideIcons[
    service.iconName as keyof typeof LucideIcons
  ] || ShieldCheck) as LucideIcons.LucideIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-[480px] flex-col overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#0a0f1d] transition-all duration-500 hover:border-primary/30"
    >
      {/* 1. Image & Overlay Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {service.image && (
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover opacity-20 saturate-0 transition-all duration-700 group-hover:scale-110 group-hover:opacity-30 group-hover:saturate-50"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.05),transparent)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      </div>

      {/* 2. Content Layer */}
      <div className="relative z-10 flex h-full flex-col justify-between p-10">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="bg-primary/5 border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 flex h-14 w-14 items-center justify-center rounded-2xl border backdrop-blur-sm transition-all duration-500">
              <IconComponent className="text-primary glow-gold h-7 w-7" />
            </div>
            <div className="text-primary/40 font-mono text-[9px] tracking-[0.3em] uppercase">
              ID: {service.id}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-bold tracking-tighter text-white transition-colors group-hover:text-primary md:text-3xl">
              {service.title}
            </h3>
            <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed font-light">
              {service.shortDescription}
            </p>
          </div>

          {/* Core Specs Modules */}
          {service.features && service.features.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {service.features.slice(0, 3).map((feature, idx) => (
                <span
                  key={idx}
                  className="bg-white/5 border-white/10 rounded-full border px-3 py-1 font-mono text-[9px] tracking-wider text-slate-400 uppercase backdrop-blur-md"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* 3. Footer Action */}
        <div className="flex items-end justify-between border-t border-white/5 pt-8">
          <div className="space-y-1">
            <p className="text-muted-foreground/30 font-mono text-[9px] tracking-[0.3em] uppercase">
              Operational Category
            </p>
            <p className="text-primary/60 font-mono text-[10px] font-bold tracking-widest uppercase">
              {service.category}
            </p>
          </div>

          <Link
            href={`/services/${service.slug}`}
            className="bg-primary/10 hover:bg-primary group/btn flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 hover:w-32 hover:px-4"
          >
            <span className="hidden w-0 text-[10px] font-bold tracking-widest text-black uppercase opacity-0 transition-all group-hover/btn:block group-hover/btn:w-auto group-hover/btn:opacity-100">
              Specs
            </span>
            <ArrowRight className="text-primary h-4 w-4 transition-colors group-hover/btn:text-black" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
