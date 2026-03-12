/** @format */

import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getServiceBySlug, getAllServices } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, ArrowRight, Terminal } from "lucide-react";
import { SecureChannel } from "@/components/sections/SecureChannel";
import { getImageUrl } from "@/lib/utils";
import JsonLd from "@/components/shared/JsonLd";
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/seo-schemas";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

/**
 * UNLINK-TH | Dynamic Metadata Protocol
 * จัดการข้อมูลสำหรับการสืบค้นเชิงลึกเพื่อให้เกิดความน่าเชื่อถือในผลการค้นหา
 */
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service || !service.metadata) return { title: "Protocol Not Found" };

  return {
    title: service.metadata.defaultTitle ?? service.title,
    description:
      service.metadata.defaultDescription ?? service.shortDescription,
    keywords: service.metadata.keywords,
    alternates: {
      canonical: `/services/${slug}/`,
    },
  };
}

/**
 * Static Generation Interface
 * เพิ่มประสิทธิภาพการโหลดข้อมูลด้วยการสร้างหน้าแบบ Static ล่วงหน้า
 */
export async function generateStaticParams() {
  const services = await getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import Image from "next/image";

export default async function SingleServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  const mdxComponents = useMDXComponents({});

  if (!service) notFound();

  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Services", item: "/services" },
    { name: service.title, item: `/services/${service.slug}` },
  ];

  return (
    <article className="pb-24">
      <JsonLd data={getServiceSchema(service)} />
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />

      {/* 0. Breadcrumb Navigation */}
      <div className="container pt-8">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/services">Services</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{service.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* 1. Protocol Intelligence Header */}
      <header className="border-border/50 bg-muted/10 relative mb-20 overflow-hidden border-b py-24 min-h-[400px] flex items-center">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          {service.image && (
            <Image
              src={getImageUrl(service.image)}
              alt={service.title}
              fill
              priority
              className="object-cover opacity-40 saturate-[0.3]"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1),transparent)]" />
        </div>

        <div className="relative z-10 container">
          <div className="flex max-w-5xl flex-col gap-8">
            <div className="flex flex-wrap items-center gap-4">
              <Badge
                variant="outline"
                className="border-primary/30 text-primary px-4 py-1 font-mono text-[10px] tracking-[0.2em] uppercase"
              >
                {service.category} Protocol Active
              </Badge>
              <span className="text-muted-foreground/60 font-mono text-[10px] tracking-widest uppercase">
                Service-ID: {service.id}
              </span>
            </div>

            <h1 className="text-5xl leading-[1.1] font-bold tracking-tighter text-balance md:text-7xl text-white">
              {service.title}
            </h1>

            <div className="border-border/10 grid gap-8 border-t pt-8 md:grid-cols-3">
              <div className="flex items-center gap-3">
                <div className="bg-primary/5 rounded-lg p-2">
                  <ShieldCheck className="text-primary/70 h-5 w-5" />
                </div>
                <span className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
                  Verified Execution Model
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/5 rounded-lg p-2">
                  <Lock className="text-primary/70 h-5 w-5" />
                </div>
                <span className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
                  {service.priceInfo?.model || "Operational Standard"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Technical Execution Area */}
      <div className="container grid gap-20 lg:grid-cols-12">
        <main className="lg:col-span-8">
          <div className="prose prose-invert prose-headings:tracking-tighter prose-p:leading-relaxed prose-p:text-muted-foreground/90 prose-strong:text-primary max-w-none">
            <MDXRemote
              source={service.description || ""}
              components={mdxComponents}
            />
          </div>
        </main>

        {/* 3. Secure Side Interface */}
        <aside className="lg:col-span-4">
          <div className="sticky top-28 space-y-8">
            <div className="lab-card border-primary/10 bg-muted/5 shadow-primary/5 border p-10 shadow-2xl">
              <div className="space-y-4">
                <div className="text-primary/60 flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase">
                  <Terminal className="h-3 w-3" />
                  <span>Consultation Protocol</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight">
                  Expert Liaison
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">
                  ปรึกษาผู้เชี่ยวชาญเพื่อประเมินแนวทางการจัดการข้อมูลเชิงลึกภายใต้มาตรฐานความปลอดภัยสูงสุด
                </p>
              </div>

              <div className="space-y-4 pt-6">
                <p className="text-primary/60 font-mono text-[10px] tracking-widest uppercase">
                  Service Specifications
                </p>
                <ul className="space-y-4">
                  {service.features?.map((feature: string, i: number) => (
                    <li
                      key={i}
                      className="group text-muted-foreground flex items-start gap-3 text-xs leading-relaxed"
                    >
                      <ShieldCheck className="text-primary/40 group-hover:text-primary mt-0.5 h-4 w-4 shrink-0 transition-colors" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-10">
                <Button
                  asChild
                  className="w-full h-14 bg-primary hover:bg-primary/90 text-black font-bold text-sm tracking-widest uppercase group"
                >
                  <Link href="https://line.me/ti/p/@unlinkth" target="_blank">
                    Contact Specialist
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <p className="text-[10px] text-muted-foreground text-center mt-4 font-mono uppercase tracking-widest">
                  Secure Private Channel
                </p>
              </div>

              <div className="border-border/10 space-y-6 border-t pt-8 text-center">
                <div className="text-muted-foreground/60 text-[10px] leading-relaxed font-mono uppercase tracking-[0.2em]">
                  End-to-End Encryption <br />
                  Data Privacy Verified
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-40">
        <SecureChannel />
      </div>
    </article>
  );
}
