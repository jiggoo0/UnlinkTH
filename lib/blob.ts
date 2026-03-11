import { put, del, list } from "@vercel/blob";

/**
 * Upload Image to Vercel Blob
 */
export async function uploadImage(file: File | Buffer, filename: string) {
  try {
    const blob = await put(filename, file, {
      access: "public",
    });
    return { success: true, url: blob.url };
  } catch (error) {
    console.error("Vercel Blob Upload Error:", error);
    return { success: false, error: "Upload failed" };
  }
}

/**
 * Get All Blobs (List)
 */
export async function listBlobs() {
  const { blobs } = await list();
  return blobs;
}

/**
 * Delete Blob by URL
 */
export async function deleteBlob(url: string) {
  try {
    await del(url);
    return { success: true };
  } catch (error) {
    console.error("Vercel Blob Delete Error:", error);
    return { success: false, error: "Delete failed" };
  }
}

/**
 * Helper to get Proxy URL or Blob URL
 * ในกรณีที่ต้องการจัดการ Path รูปภาพในโปรเจกต์ให้ถูกต้อง
 */
export function getImageUrl(path: string): string {
  if (path.startsWith("http")) return path;

  // ในอนาคตสามารถใช้ Base URL ของ Blob ที่เก็บไว้ใน Env ได้
  const blobBaseUrl = process.env.NEXT_PUBLIC_BLOB_BASE_URL || "";
  return `${blobBaseUrl}${path.startsWith("/") ? "" : "/"}${path}`;
}
