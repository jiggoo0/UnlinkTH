import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Helper to get Local Asset URL (Public Folder)
 * รองรับทั้งแบบระบุ /images/ มาแล้ว หรือระบุแค่หมวดหมู่
 */
export function getImageUrl(path: string): string {
  if (!path) return "/images/services/default.webp";
  if (path.startsWith("http")) return path;

  // หากเป็นพาธที่ขึ้นต้นด้วย images/ หรือ /images/ อยู่แล้ว
  if (path.includes("images/")) {
    return path.startsWith("/") ? path : `/${path}`;
  }

  // หากระบุมาแค่หมวดหมู่ เช่น "services/abc.webp" ให้เติม /images/ นำหน้า
  return `/images/${path.startsWith("/") ? path.slice(1) : path}`;
}
