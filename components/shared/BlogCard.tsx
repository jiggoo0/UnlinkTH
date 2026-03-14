/** @format */

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { BlogPostFrontmatter } from "@/types";
import { AnimatedCard } from "@/components/animated-section";
import { getImageUrl } from "@/lib/utils";
import { ArrowRight, BookOpen, LucideProps, LucideIcon } from "lucide-react";

interface BlogCardProps {
  post: BlogPostFrontmatter;
}

/**
 * DynamicIcon Loader Protocol
 */
const DynamicIcon = dynamic(
  () =>
    import("lucide-react").then((mod) => {
      return (props: LucideProps & { name: string }) => {
        const { name, ...rest } = props;
        const Icon =
          (mod as unknown as Record<string, LucideIcon>)[name] || BookOpen;
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

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <AnimatedCard className="group relative flex h-full min-h-[500px] cursor-pointer flex-col overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#0a0f1d] transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 active:scale-[0.98]">
        {/* 1. Header Image Section */}
        <div className="relative h-56 w-full overflow-hidden">
          {post.image && (
            <Image
              src={getImageUrl(post.image)}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-all duration-700 group-hover:scale-110"
            />
          )}
          {/* Badge Category */}
          <div className="absolute top-6 left-6 z-20">
            <span className="bg-zinc-900/80 backdrop-blur-md text-primary text-[9px] font-black px-4 py-2 rounded-xl shadow-lg border border-primary/20 uppercase tracking-widest">
              {post.category}
            </span>
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] to-transparent opacity-60" />
        </div>

        {/* 2. Content Section */}
        <div className="relative z-10 flex flex-1 flex-col p-8">
          <div className="mb-4 flex items-center justify-between">
            <div className="text-zinc-500 font-mono text-[9px] tracking-[0.2em] uppercase">
              Insights & Intel
            </div>
            <div className="text-zinc-600 font-mono text-[9px] tracking-[0.2em] uppercase">
              ID: {post.id || post.slug.toUpperCase()}
            </div>
          </div>

          <div className="space-y-4 flex-1">
            <h3 className="text-2xl font-bold tracking-tighter text-white transition-colors group-hover:text-primary line-clamp-2">
              {post.title}
            </h3>
            <p className="text-zinc-400 line-clamp-3 text-sm leading-relaxed font-light">
              {post.shortDescription || post.description}
            </p>
          </div>

          {/* 3. Footer Action */}
          <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-6">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 flex h-8 w-8 items-center justify-center rounded-lg border border-primary/20">
                <DynamicIcon
                  name={post.iconName || "BookOpen"}
                  className="text-primary h-4 w-4"
                />
              </div>
              <span className="text-zinc-500 text-[10px] font-bold tracking-widest uppercase">
                Read Intelligence
              </span>
            </div>
            <div className="bg-primary/10 group-hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300">
              <ArrowRight className="text-primary h-4 w-4 transition-colors group-hover:text-black" />
            </div>
          </div>
        </div>

        {/* Hover Gradient Effect */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.05),transparent)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      </AnimatedCard>
    </Link>
  );
}
