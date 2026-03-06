import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import { MDXComponents as RichComponents } from "@/components/blog/MDXComponents";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),
    ...RichComponents,
    ...components,
  };
}
