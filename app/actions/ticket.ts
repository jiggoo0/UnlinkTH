"use server";

import { getSupabaseAdmin } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

// กำหนด Type ให้ชัดเจนเพื่อป้องกันข้อมูลผิดพลาด
type TicketData = {
  ticket_number: string;
  passenger_name: string;
  id_card_last_4: string;
  origin: string;
  destination: string;
  departure_time: string;
  seat_number: string;
};

export async function createTicketAction(formData: TicketData) {
  try {
    // ใช้ getSupabaseAdmin() เพราะทำงานฝั่ง Server ที่มีความปลอดภัยสูง
    const supabase = getSupabaseAdmin();

    const { data, error } = await supabase
      .from("tickets")
      .insert([
        {
          ...formData,
          ticket_number: formData.ticket_number.toUpperCase(),
        },
      ])
      .select()
      .single();

    if (error) {
      throw new Error(error.message);
    }

    // ล้างแคชหน้านี้เพื่อให้ดึงข้อมูลใหม่ทันที (ถ้ามี)
    revalidatePath("/admin/tickets");

    return { success: true, data };
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error("Unknown error");
    console.error("Server Action Error (createTicket):", error);
    return {
      success: false,
      error: error.message || "เกิดข้อผิดพลาดในการบันทึกข้อมูล",
    };
  }
}
