import { Resend } from "resend";
import { TicketData } from "@/app/actions/ticket";

const resend = new Resend(process.env.RESEND_API_KEY?.trim() || "re_mock_key");

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: "UnlinkTH <no-reply@unlink-global.com>",
      to: [to],
      subject,
      html,
    });

    if (error) {
      console.error("Resend Email Error:", error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (err) {
    console.error("Email Sending Failed:", err);
    return { success: false, error: err };
  }
}

/**
 * ส่งอีเมลยืนยันการจองตั๋ว
 */
export async function sendTicketConfirmationEmail(
  email: string,
  ticketData: TicketData,
) {
  const subject = `ยืนยันการจองตั๋ว - ${ticketData.ticket_number}`;
  const html = `
    <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eaeaea;">
      <h2 style="color: #c5a14d;">UNLINK GLOBAL - ยืนยันการจอง</h2>
      <p>เรียนคุณ ${ticketData.passenger_name},</p>
      <p>เราได้รับข้อมูลการจองของคุณเรียบร้อยแล้ว รายละเอียดมีดังนี้:</p>
      <div style="background: #f9f9f9; padding: 15px; border-radius: 8px;">
        <p><strong>หมายเลขตั๋ว:</strong> ${ticketData.ticket_number}</p>
        <p><strong>เส้นทาง:</strong> ${ticketData.origin} ไป ${ticketData.destination}</p>
        <p><strong>เวลาเดินทาง:</strong> ${ticketData.departure_time}</p>
        <p><strong>เลขที่นั่ง:</strong> ${ticketData.seat_number}</p>
      </div>
      <p style="margin-top: 20px; font-size: 12px; color: #666;">
        ขอบคุณที่ใช้บริการ Unlink Global
      </p>
    </div>
  `;
  return sendEmail({ to: email, subject, html });
}
