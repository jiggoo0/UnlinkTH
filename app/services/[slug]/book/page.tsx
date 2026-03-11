/** @format */

import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/mdx";
import BookingClient from "@/components/shared/BookingClient";

interface BookingPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Booking Page (Server Component)
 * ดึงข้อมูลบริการจากไฟล์ระบบ (fs) ได้อย่างปลอดภัย
 */
export default async function BookingPage({ params }: BookingPageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <BookingClient service={service} />;
}
