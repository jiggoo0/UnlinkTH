"use server";

import { db } from "@/lib/db";
import { verifySlip } from "@/lib/payment";
import { sendTicketConfirmationEmail } from "@/lib/email";
import { revalidatePath } from "next/cache";
import { v4 as uuidv4 } from "uuid";

// กำหนด Type ให้ชัดเจน
export type TicketData = {
  id?: string;
  created_at?: string;
  ticket_number: string;
  passenger_name: string;
  id_card_last_4: string;
  origin: string;
  destination: string;
  departure_time: string;
  seat_number: string;
  email?: string; // เพิ่มฟิลด์เมล
  slip_payload?: string; // ข้อมูลจาก QR Code สลิป
};

/**
 * สร้างตั๋วใหม่ (พร้อมตรวจสอบการชำระเงิน)
 */
export async function createTicketAction(formData: TicketData) {
  try {
    // 1. ตรวจสอบสลิป (ถ้ามีการส่งมา)
    if (formData.slip_payload) {
      const verification = await verifySlip(formData.slip_payload);
      if (!verification.success) {
        return {
          success: false,
          error: "สลิปไม่ถูกต้องหรือถูกใช้ไปแล้ว: " + verification.error,
        };
      }
      // ตรวจสอบยอดเงินเพิ่มเติมได้ที่นี่ (ถ้าจำเป็น)
    }

    const id = formData.id || uuidv4();
    const ticket_number = formData.ticket_number.toUpperCase();

    // 2. บันทึกข้อมูลลง Turso (SQLite)
    await db.execute({
      sql: `
        INSERT INTO tickets (
          id, ticket_number, passenger_name, id_card_last_4, 
          origin, destination, departure_time, seat_number
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `,
      args: [
        id,
        ticket_number,
        formData.passenger_name,
        formData.id_card_last_4,
        formData.origin,
        formData.destination,
        formData.departure_time,
        formData.seat_number,
      ],
    });

    // 3. ส่งอีเมลยืนยัน (ถ้ามีอีเมล)
    if (formData.email) {
      await sendTicketConfirmationEmail(formData.email, {
        ...formData,
        ticket_number,
      });
    }

    revalidatePath("/admin/tickets");
    revalidatePath("/verify-ticket");

    return { success: true, data: { id, ticket_number } };
  } catch (err: unknown) {
    const error = err instanceof Error ? err : new Error("Unknown error");
    console.error("Turso DB Error (createTicket):", error);
    return {
      success: false,
      error: "เกิดข้อผิดพลาดในการบันทึกข้อมูลเข้าระบบ Turso",
    };
  }
}

/**
 * ตรวจสอบตั๋วจากหมายเลขตั๋วและเลขบัตรประชาชน
 */
export async function verifyTicketAction(
  ticketNumber: string,
  idCardLast4: string,
) {
  try {
    const result = await db.execute({
      sql: "SELECT * FROM tickets WHERE ticket_number = ? AND id_card_last_4 = ? LIMIT 1",
      args: [ticketNumber.toUpperCase(), idCardLast4],
    });

    if (result.rows.length === 0) {
      return { success: false, error: "ไม่พบข้อมูลตั๋ว หรือข้อมูลไม่ถูกต้อง" };
    }

    return { success: true, data: result.rows[0] };
  } catch (err) {
    console.error("Verify Ticket Error:", err);
    return { success: false, error: "เกิดข้อผิดพลาดในการตรวจสอบข้อมูล" };
  }
}
