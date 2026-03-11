import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Helper to get Local Asset URL (Public Folder)
 */
export function getImageUrl(path: string): string {
  if (!path) return "/images/services/default.webp";
  if (path.startsWith("http")) return path;

  // เติม / ข้างหน้าถ้าไม่มี เพื่อดึงจากโฟลเดอร์ public
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  
  return cleanPath;
}
