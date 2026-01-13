/** @format */

import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * [STRATEGY: STYLE ARCHITECTURE]
 * - clsx: ใช้สำหรับจัดการ Conditional Logic (เช่น true/false classes)
 * - twMerge: ใช้สำหรับแก้ปัญหา Tailwind CSS Cascade (คลาสหลังทับคลาสแรกอย่างสมบูรณ์)
 * - Result: ป้องกันความซ้ำซ้อนของ Utility classes ใน DOM
 */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
