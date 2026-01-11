import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * ฟังก์ชัน cn ช่วยรวม Tailwind classes และจัดการคลาสที่ซ้ำซ้อน
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
