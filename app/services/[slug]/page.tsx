/** @format */

import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getServiceBySlug } from "@/lib/mdx";
import { SERVICES } from "@/constants/services-registry";
import { MDXRemote } from "next-mdx-remote/rsc";
import { useMDXComponents } from "@/mdx-components";
import { Cpu } from "lucide-react";
import { ServiceLayout } from "@/components/layout/ServiceLayout";
import { ExpressBusForm } from "@/components/services/forms/ExpressBusForm";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

/**
 * UNLINK-TH | Dynamic Metadata Protocol
 */
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) return { title: "Protocol Not Found" };

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
 */
export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default async function SingleServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const serviceRegistry = SERVICES.find((s) => s.slug === slug);

  if (!serviceRegistry) notFound();

  // สำหรับบริการที่เป็น content: ดึงข้อมูล MDX เพิ่มเติม
  let service = serviceRegistry;
  if (serviceRegistry.type === "content") {
    const mdxData = await getServiceBySlug(slug);
    if (mdxData) {
      service = { ...serviceRegistry, description: mdxData.description };
    }
  }

  const mdxComponents = useMDXComponents({});

  return (
    <ServiceLayout service={service}>
      {/* Dynamic Content Router */}
      {service.type === "interactive" ? (
        <>
          {service.slug === "express-bus-ticket" ? (
            <ExpressBusForm />
          ) : (
            <section className="relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#0a0f1d] p-12 md:p-20 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent)]" />
              <div className="relative z-10 space-y-8">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                  <Cpu className="h-10 w-10 animate-pulse" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter text-white md:text-4xl">
                    Interactive Module <br />
                    <span className="text-primary italic font-serif">
                      Initializing...
                    </span>
                  </h2>
                  <p className="mx-auto max-w-lg text-slate-400 font-light leading-relaxed">
                    ระบบกำลังเชื่อมโยงโปรโตคอลการทำงานแบบ Hybrid
                    สำหรับบริการนี้โดยเฉพาะ
                    ท่านสามารถเข้าใช้งานโมดูลแบบโต้ตอบได้ในเวอร์ชันถัดไป
                    ภายใต้การรักษาความปลอดภัยระดับสูงสุดครับ
                  </p>
                </div>
                <div className="flex justify-center gap-4">
                  <div className="h-1 w-12 rounded-full bg-primary/20" />
                  <div className="h-1 w-12 rounded-full bg-primary/40 animate-pulse" />
                  <div className="h-1 w-12 rounded-full bg-primary/20" />
                </div>
              </div>
            </section>
          )}
        </>
      ) : (
        <div className="prose prose-invert prose-headings:tracking-tighter prose-p:leading-relaxed prose-p:text-muted-foreground/90 prose-strong:text-primary prose-a:text-primary prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-primary/80 prose-img:rounded-2xl max-w-4xl mx-auto w-full break-words">
          <MDXRemote
            source={service.description || ""}
            components={mdxComponents}
          />
        </div>
      )}
    </ServiceLayout>
  );
}
