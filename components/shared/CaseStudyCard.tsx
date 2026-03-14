/** @format */

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { CaseStudy } from "@/types";
import { getImageUrl } from "@/lib/utils";
import { ArrowRight, FileText, LucideProps } from "lucide-react";
import { AnimatedCard } from "@/components/animated-section";

interface CaseStudyCardProps {
  study: CaseStudy;
  priority?: boolean;
}

/**
 * DynamicIcon Loader Protocol
 */
const DynamicIcon = dynamic(
  () =>
    import("lucide-react").then((mod) => {
      return (props: LucideProps & { name: string }) => {
        const { name, ...rest } = props;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const Icon = (mod as Record<string, any>)[name] || FileText;
        return <Icon {...rest} />;
      };
    }),
  {
    ssr: true,
    loading: () => (
      <div className="h-7 w-7 animate-pulse bg-primary/10 rounded-lg" />
    ),
  },
);

export default function CaseStudyCard({
  study,
  priority = false,
}: CaseStudyCardProps) {
  if (!study) return null;

  return (
    <Link href={`/case-studies/${study.slug}`} className="block h-full">
      <AnimatedCard className="group relative flex h-[480px] cursor-pointer flex-col overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#0a0f1d] transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 active:scale-[0.98]">
        {/* 1. Image & Overlay Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {study.image && (
            <Image
              src={getImageUrl(study.image)}
              alt={study.title}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover opacity-60 saturate-[0.8] transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:saturate-100"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/40 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.15),transparent)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        </div>

        {/* 2. Content Layer */}
        <div className="relative z-10 flex h-full flex-col justify-between p-10">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="bg-primary/5 border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 flex h-14 w-14 items-center justify-center rounded-2xl border backdrop-blur-sm transition-all duration-500">
                <DynamicIcon
                  name={study.iconName || "FileText"}
                  className="text-primary glow-gold h-7 w-7"
                />
              </div>
              <div className="text-primary/40 font-mono text-[9px] tracking-[0.3em] uppercase">
                ID: {study.id || study.slug.toUpperCase()}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold tracking-tighter text-white transition-colors group-hover:text-primary md:text-3xl">
                {study.title}
              </h3>
              <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed font-light">
                {study.excerpt || study.shortDescription || study.description}
              </p>
            </div>

            {/* Core Specs Modules */}
            {study.features &&
              Array.isArray(study.features) &&
              study.features.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {study.features.slice(0, 3).map((feature, idx) => (
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
                Operational Outcome
              </p>
              <p className="text-primary/60 font-mono text-[10px] font-bold tracking-widest uppercase">
                {study.category}
              </p>
            </div>

            <div className="bg-primary/10 group-hover:bg-primary flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 md:group-hover:w-32 md:group-hover:px-4">
              <span className="hidden w-0 text-[10px] font-bold tracking-widest text-black uppercase opacity-0 transition-all md:group-hover:block md:group-hover:w-auto md:group-hover:opacity-100">
                Evidence
              </span>
              <ArrowRight className="text-primary h-4 w-4 transition-colors group-hover:text-black" />
            </div>
          </div>
        </div>
      </AnimatedCard>
    </Link>
  );
}
