"use client";

import { AnimatedCard } from "@/components/animated-section";
import { Check } from "lucide-react";
import { siteConfig } from "@/constants/site-config";

import SectionHeader from "@/components/shared/SectionHeader";

export function PricingSection() {
  const { pricing } = siteConfig;

  if (!pricing) return null;

  return (
    <section id="pricing" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          align="center"
          badge={pricing.badge}
          title={pricing.title}
          description={pricing.description}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {pricing.tiers.map((tier, index) => (
            <AnimatedCard key={tier.name} delay={index * 0.1}>
              <div
                className={`relative rounded-xl p-8 h-full flex flex-col transition-all duration-500 ${
                  tier.highlighted
                    ? "glass border-primary/30 shadow-lg shadow-primary/5"
                    : "glass glass-hover"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
                      Recommended
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-foreground tracking-tight mb-1">
                    {tier.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {tier.description}
                  </p>
                </div>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-bold text-foreground tracking-tight font-mono">
                    {tier.price}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    {tier.period}
                  </span>
                </div>

                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                    >
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={siteConfig.contact.lineUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glow-border inline-flex items-center justify-center w-full py-3 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 ${
                    tier.highlighted
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-lg hover:shadow-primary/25"
                      : "bg-secondary hover:bg-secondary/80 text-foreground"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
