/** @format */

import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getServiceBySlug, getAllServices } from "@/lib/services";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Lock, ArrowRight, Terminal } from "lucide-react";
import ContactCTA from "@/components/sections/ContactCTA";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

/**
 * UNLINK-TH | Dynamic Metadata Protocol
 * จัดการข้อมูลสำหรับการสืบค้นเชิงลึก (SEO Authority)
 */
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  
  if (!service || !service.metadata) return { title: "Protocol Not Found" };

  return {
    title: service.metadata.defaultTitle ?? service.title,
    description: service.metadata.defaultDescription,
    keywords: service.metadata.keywords,
  };
}

/**
 * Static Generation Interface
 */
export async function generateStaticParams() {
  const services = await getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function SingleServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  const mdxComponents = useMDXComponents({});

  if (!service) notFound();

  return (
    <article className="pb-24">
      {/* 1. Protocol Intelligence Header */}
      <header className="relative mb-20 overflow-hidden border-b border-border/50 bg-muted/10 py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,rgba(16,185,129,0.05),transparent)]" />
        
        <div className="container relative z-10">
          <div className="flex max-w-5xl flex-col gap-8">
            <div className="flex flex-wrap items-center gap-4">
              <Badge 
                variant="outline" 
                className="border-primary/30 px-4 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary"
              >
                {service.category} Protocol Active
              </Badge>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
                Service-ID: {service.id}
              </span>
            </div>

            <h1 className="text-balance text-5xl font-bold leading-[1.1] tracking-tighter md:text-7xl">
              {service.title}
            </h1>

            <div className="grid gap-8 border-t border-border/10 pt-8 md:grid-cols-3">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/5 p-2">
                  <ShieldCheck className="h-5 w-5 text-primary/70" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Verified Success Model</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/5 p-2">
                  <Lock className="h-5 w-5 text-primary/70" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {service.priceInfo?.model || "Standard Operating Procedure"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Technical Execution Area */}
      
      <div className="container grid gap-20 lg:grid-cols-12">
        <main className="lg:col-span-8">
          <div className="prose prose-invert max-w-none prose-headings:tracking-tighter prose-p:leading-relaxed prose-p:text-muted-foreground/90 prose-strong:text-primary">
            <MDXRemote 
              source={service.description || ""} 
              components={mdxComponents} 
            />
          </div>
        </main>

        {/* 3. Secure Side Interface */}
        <aside className="lg:col-span-4">
          <div className="sticky top-28 space-y-8">
            <div className="lab-card border-primary/10 bg-muted/5 p-10 shadow-2xl shadow-primary/5">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-primary/60">
                  <Terminal className="h-3 w-3" />
                  <span>Initiate Protocol</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Technical Request</h3>
                <p className="font-light leading-relaxed text-muted-foreground text-sm">
                  ส่งรายละเอียดข้อมูลเชิงลึกเพื่อให้วิศวกรวิเคราะห์ภายใต้มาตรฐานความปลอดภัยระดับสูง
                </p>
              </div>

              <div className="space-y-4 pt-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-primary/60">Included Specs</p>
                <ul className="space-y-4">
                  {service.features?.map((feature: string, i: number) => (
                    <li key={i} className="group flex items-start gap-3 text-xs text-muted-foreground leading-relaxed">
                      <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary/40 transition-colors group-hover:text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6 border-t border-border/10 pt-8 text-center">
                <div className="space-y-1">
                  <p className="font-mono text-[10px] uppercase tracking-tighter text-muted-foreground/40">Budget Allocation</p>
                  <div className="text-4xl font-bold tracking-tighter">
                    ฿{service.priceInfo?.startingAt || "TBD"}
                    <span className="ml-2 font-mono text-xs font-normal lowercase text-muted-foreground">
                      / {service.priceInfo?.unit || "unit"}
                    </span>
                  </div>
                </div>

                <button className="group flex h-14 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-bold uppercase tracking-widest text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90">
                  Contact VIP Liaison
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-40">
        <ContactCTA />
      </div>
    </article>
  );
}
