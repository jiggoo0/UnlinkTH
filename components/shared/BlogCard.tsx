/** @format */

import Link from "next/link";
import Image from "next/image";
import { Calendar, ChevronRight } from "lucide-react";
import { BlogPostFrontmatter } from "@/types";
import { AnimatedCard } from "@/components/animated-section";
import { getImageUrl } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPostFrontmatter;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <AnimatedCard className="lab-card group border-border/40 bg-muted/5 flex flex-col overflow-hidden transition-all duration-300 active:scale-[0.98] h-full">
        <div className="bg-muted/20 relative aspect-video overflow-hidden">
          {post.image && (
            <Image
              src={getImageUrl(post.image)}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
            />
          )}
          <div className="bg-primary/10 absolute inset-0 flex items-center justify-center font-mono text-[10px] tracking-widest uppercase opacity-20 transition-opacity group-hover:opacity-0">
            Data Stream Active
          </div>
        </div>

        <div className="flex flex-1 flex-col space-y-4 p-8">
          <div className="flex items-center gap-4 font-mono text-[10px] tracking-widest uppercase">
            <span className="text-primary">{post.category}</span>
            <span className="text-muted-foreground/40 flex items-center gap-1.5">
              <Calendar className="h-3 w-3" /> {post.date}
            </span>
          </div>

          <h3 className="group-hover:text-primary text-xl leading-tight font-bold transition-colors">
            {post.title}
          </h3>

          <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed font-light">
            {post.description}
          </p>

          <div className="border-border/5 mt-auto border-t pt-4">
            <span className="text-primary/60 flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest uppercase">
              Read Intelligence Report <ChevronRight className="h-3 w-3" />
            </span>
          </div>
        </div>
      </AnimatedCard>
    </Link>
  );
}
