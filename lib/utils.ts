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

  // Normalize Path: ลบ / ที่ขึ้นต้นออก
  let cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // หากเป็นการใช้ Blob Store ให้ลบ "images/" ออก (ถ้ามี) เพราะใน Blob Store ของผู้ใช้ไม่มีโฟลเดอร์นี้
  if (blobBaseUrl && cleanPath.startsWith("images/")) {
    cleanPath = cleanPath.replace("images/", "");
  }

  // หากไม่มี base url ให้คืนค่าเป็นพาธที่ขึ้นต้นด้วย / เพื่อให้ดึงจาก local public/
  if (!blobBaseUrl) return `/${path.startsWith("/") ? path.slice(1) : path}`;

  // หากมี base url ให้ต่อพาธเข้าไป
  const base = blobBaseUrl.endsWith("/") ? blobBaseUrl : `${blobBaseUrl}/`;
  return `${base}${cleanPath}`;
}
