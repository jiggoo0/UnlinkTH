"use client";

import { AnimatedSection, AnimatedCard } from "@/components/animated-section";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/constants/site-config";

export function PortfolioSection() {
  const { portfolio } = siteConfig;

  return (
    <section id="portfolio" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-primary font-mono text-xs tracking-[0.2em] uppercase">
            {portfolio.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-4 mb-4 tracking-tight">
            {portfolio.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {portfolio.description}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {portfolio.items.map((project, index) => (
            <AnimatedCard
              key={project.title}
              delay={index * 0.08}
              className={project.span}
            >
              <div className="relative overflow-hidden rounded-xl group h-full glass">
                <div className={`relative ${project.aspect} min-h-[220px]`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <div className="flex items-end justify-between">
                      <div>
                        <span className="text-accent text-xs font-mono tracking-widest uppercase block mb-1.5">
                          {project.category}
                        </span>
                        <h3 className="text-foreground font-bold text-base sm:text-lg tracking-tight">
                          {project.title}
                        </h3>
                      </div>
                      <div className="w-8 h-8 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4 text-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
