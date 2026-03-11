import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Helper to get Proxy URL or Blob URL
 */
export function getImageUrl(path: string): string {
  if (!path) return "/images/services/default.webp";
  if (path.startsWith("http")) return path;

  const blobBaseUrl = process.env.NEXT_PUBLIC_BLOB_BASE_URL || "";
  return `${blobBaseUrl}${path.startsWith("/") ? "" : "/"}${path}`;
}
