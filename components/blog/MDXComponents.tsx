/**
 * @REBRANDED: JP-VISUAL & DOCS
 * - Executive MDX Components
 * - Luxury Dark/Gold Tier
 */

import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Info,
  AlertTriangle,
  CheckCircle2,
  Shield,
  Lock,
  AlertCircle,
  Wrench,
  Search,
  BarChart,
  Lightbulb,
  CheckCircle,
  ShieldAlert,
  Fingerprint,
  ClipboardList,
  FileText,
  Zap,
  Globe,
  Activity,
  ArrowRight,
  Target,
} from "lucide-react";
import { siteConfig } from "@/constants/site-config";

export const MDXComponents = {
  Target: (props: React.ComponentProps<"svg">) => (
    <Target className="text-primary mr-2 inline-block h-5 w-5" {...props} />
  ),
  AlertCircle: (props: React.ComponentProps<"svg">) => (
    <AlertCircle
      className="text-primary mr-2 inline-block h-5 w-5"
      {...props}
    />
  ),
  AlertTriangle: (props: React.ComponentProps<"svg">) => (
    <AlertTriangle
      className="text-primary mr-2 inline-block h-5 w-5"
      {...props}
    />
  ),
  Wrench: (props: React.ComponentProps<"svg">) => (
    <Wrench className="text-primary mr-2 inline-block h-5 w-5" {...props} />
  ),
  Shield: (props: React.ComponentProps<"svg">) => (
    <Shield className="text-primary mr-2 inline-block h-5 w-5" {...props} />
  ),
  Lock: (props: React.ComponentProps<"svg">) => (
    <Lock className="text-primary mr-2 inline-block h-5 w-5" {...props} />
  ),
  Search: (props: React.ComponentProps<"svg">) => (
    <Search className="text-primary mr-2 inline-block h-5 w-5" {...props} />
  ),
  BarChart: (props: React.ComponentProps<"svg">) => (
    <BarChart className="text-primary mr-2 inline-block h-5 w-5" {...props} />
  ),
  Lightbulb: (props: React.ComponentProps<"svg">) => (
    <Lightbulb className="text-primary mr-2 inline-block h-5 w-5" {...props} />
  ),
  CheckCircle: (props: React.ComponentProps<"svg">) => (
    <CheckCircle
      className="text-primary mr-2 inline-block h-5 w-5"
      {...props}
    />
  ),
  CheckCircle2: (props: React.ComponentProps<"svg">) => (
    <CheckCircle2
      className="text-primary mr-2 inline-block h-5 w-5"
      {...props}
    />
  ),
  ShieldAlert: (props: React.ComponentProps<"svg">) => (
    <ShieldAlert
      className="text-primary mr-2 inline-block h-5 w-5"
      {...props}
    />
  ),
  Fingerprint: (props: React.ComponentProps<"svg">) => (
    <Fingerprint
      className="text-primary mr-2 inline-block h-5 w-5"
      {...props}
    />
  ),
  ClipboardList: (props: React.ComponentProps<"svg">) => (
    <ClipboardList
      className="text-primary mr-2 inline-block h-5 w-5"
      {...props}
    />
  ),
  FileText: (props: React.ComponentProps<"svg">) => (
    <FileText className="text-primary mr-2 inline-block h-5 w-5" {...props} />
  ),
  Zap: (props: React.ComponentProps<"svg">) => (
    <Zap className="text-primary mr-2 inline-block h-5 w-5" {...props} />
  ),
  Globe: (props: React.ComponentProps<"svg">) => (
    <Globe className="text-primary mr-2 inline-block h-5 w-5" {...props} />
  ),
  Activity: (props: React.ComponentProps<"svg">) => (
    <Activity className="text-primary mr-2 inline-block h-5 w-5" {...props} />
  ),
  ArrowRight: (props: React.ComponentProps<"svg">) => (
    <ArrowRight className="text-primary ml-2 inline-block h-4 w-4" {...props} />
  ),
  h1: ({ className, ...props }: React.ComponentPropsWithoutRef<"h1">) => (
    <h1
      className={cn(
        "mt-12 mb-8 text-4xl font-black tracking-tighter text-white uppercase md:text-5xl",
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.ComponentPropsWithoutRef<"h2">) => (
    <h2
      className={cn(
        "mt-16 mb-6 border-b border-slate-900 pb-4 text-2xl font-black tracking-tight text-white uppercase md:text-3xl",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.ComponentPropsWithoutRef<"h3">) => (
    <h3
      className={cn(
        "text-accent mt-10 mb-4 text-xl font-bold tracking-widest uppercase",
        className,
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.ComponentPropsWithoutRef<"p">) => (
    <p
      className={cn(
        "mb-8 text-base leading-loose font-light tracking-wide text-slate-400 md:text-lg",
        className,
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.ComponentPropsWithoutRef<"ul">) => (
    <ul className={cn("my-8 ml-4 list-none space-y-4", className)} {...props} />
  ),
  li: ({ className, ...props }: React.ComponentPropsWithoutRef<"li">) => (
    <li
      className={cn(
        "before:bg-accent relative pl-8 font-light tracking-wide text-slate-300 before:absolute before:top-3 before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:shadow-[0_0_8px_rgba(180,140,40,0.5)]",
        className,
      )}
      {...props}
    />
  ),
  blockquote: ({
    className,
    ...props
  }: React.ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className={cn(
        "border-accent bg-accent/5 my-12 rounded-sm border-l-2 p-10 text-xl font-light text-slate-200 italic backdrop-blur-sm",
        className,
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: React.ComponentPropsWithoutRef<"code">) => (
    <code
      className={cn(
        "text-accent-light rounded-sm border border-slate-800 bg-slate-900 px-2 py-1 font-mono text-sm",
        className,
      )}
      {...props}
    />
  ),
  hr: ({ className, ...props }: React.ComponentPropsWithoutRef<"hr">) => (
    <hr className={cn("my-16 border-slate-900", className)} {...props} />
  ),
  Callout: ({
    children,
    type = "info",
  }: {
    children: React.ReactNode;
    type?: "info" | "warning" | "success" | "secure";
  }) => {
    const icons = {
      info: <Info className="h-5 w-5 text-blue-400" />,
      warning: <AlertTriangle className="text-accent h-5 w-5" />,
      success: <CheckCircle2 className="h-5 w-5 text-emerald-400" />,
      secure: <Lock className="text-accent h-5 w-5" />,
    };
    return (
      <div
        className={cn(
          "my-10 flex gap-6 rounded-sm border border-white/5 p-8 backdrop-blur-xl",
          type === "info" && "border-blue-500/20 bg-blue-500/5",
          type === "warning" && "border-accent/20 bg-accent/5",
          type === "success" && "border-emerald-500/20 bg-emerald-500/5",
          type === "secure" &&
            "border-accent/30 bg-accent/10 shadow-[inner_0_0_20px_rgba(180,140,40,0.05)]",
        )}
      >
        <div className="mt-1 shrink-0">{icons[type]}</div>
        <div className="text-sm leading-relaxed font-light tracking-wide text-slate-300 uppercase md:text-base">
          {children}
        </div>
      </div>
    );
  },
  Image: (props: React.ComponentPropsWithoutRef<typeof Image>) => {
    // 🛡️ Hierarchy Level 2: Architectural Integrity
    // ต้องแยก width และ height ออกเพื่อป้องกันความขัดแย้งกับ 'fill' property ของ Next.js
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { width, height, src, alt, ...rest } = props;
    return (
      <figure className="my-16">
        <div className="group relative aspect-video overflow-hidden rounded-sm border border-slate-900 bg-[#0c1122] p-3 shadow-2xl">
          <Image
            src={src || ""}
            alt={alt || "Strategic Document Image"}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="scale-[1.01] object-cover opacity-80 transition-all duration-1000 group-hover:scale-100 group-hover:opacity-100"
            {...rest}
          />
        </div>
        {alt && (
          <figcaption className="mt-6 text-center text-[10px] font-black tracking-[0.5em] text-slate-600 uppercase">
            {alt}
          </figcaption>
        )}
      </figure>
    );
  },
  ProtocolCTA: () => {
    return (
      <div className="border-accent/20 my-20 rounded-sm border bg-gradient-to-br from-slate-900 to-slate-950 p-12 text-center">
        <Shield className="text-accent mx-auto mb-6 h-10 w-10" />
        <h4 className="mb-4 text-xl font-black tracking-widest text-white uppercase">
          ต้องการเริ่มต้นวางยุทธศาสตร์ทันที?
        </h4>
        <p className="mb-8 text-sm font-light tracking-widest text-slate-400 uppercase">
          ติดต่อฝ่ายวิเคราะห์เชิงกลยุทธ์เพื่อขอรับการประเมินเบื้องต้นได้ทันที
        </p>
        <a
          href={siteConfig.links.line}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent hover:bg-accent-light inline-block rounded-sm px-10 py-4 text-[10px] font-black tracking-[0.3em] text-slate-950 uppercase transition-all hover:scale-105"
        >
          CONTACT VIA LINE OFFICIAL
        </a>
      </div>
    );
  },
};
