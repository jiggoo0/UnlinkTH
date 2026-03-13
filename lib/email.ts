import { Resend } from "resend";

/**
 * 📧 UNLINK-GLOBAL: EMAIL AUTOMATION SYSTEM (V1.0)
 * Powered by Resend.com
 */

const resend = new Resend(process.env.RESEND_API_KEY);

interface TicketEmailData {
  customerName: string;
  caseId: string;
  amount: number;
  ticketUrl?: string;
  serviceTitle: string;
}

/**
 * ส่งอีเมลยืนยันการชำระเงินและไฟล์ตั๋ว/เอกสารหาลูกค้า
 */
export async function sendTicketEmail(to: string, data: TicketEmailData) {
  if (!process.env.RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY in environment variables.");
    return { success: false, error: "Configuration Error" };
  }

  try {
    const result = await resend.emails.send({
      from: "UNLINK-GLOBAL <support@unlink-th.com>", // ต้อง Verify Domain ใน Resend ก่อน
      to: [to],
      subject: `[CONFIRMED] เอกสารของคุณได้รับการอนุมัติเรียบร้อย - ${data.caseId}`,
      html: `
        <div style="font-family: sans-serif; background-color: #f9f9f9; padding: 40px; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; background: white; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
            <div style="background: #000; padding: 40px; text-align: center;">
              <h1 style="color: #D4AF37; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">UNLINK-GLOBAL</h1>
              <p style="color: #888; margin-top: 5px; font-size: 10px; text-transform: uppercase;">Official Document Alignment System</p>
            </div>
            
            <div style="padding: 40px;">
              <h2 style="font-size: 20px; font-weight: 800; margin-bottom: 20px;">เรียนคุณ ${data.customerName},</h2>
              <p style="line-height: 1.6; color: #666; font-size: 14px;">
                เราได้รับข้อมูลการชำระเงินสำหรับบริการ <strong>${data.serviceTitle}</strong> เรียบร้อยแล้ว 
                ขณะนี้ระบบได้ดำเนินการออกเอกสารและยืนยันสถานะใน Vault Protocol ให้คุณโดยสมบูรณ์
              </p>
              
              <div style="background: #f4f4f4; border-radius: 16px; padding: 25px; margin: 30px 0;">
                <table style="width: 100%; font-size: 13px;">
                  <tr>
                    <td style="color: #999; padding-bottom: 8px;">Case ID:</td>
                    <td style="text-align: right; font-weight: bold;">${data.caseId}</td>
                  </tr>
                  <tr>
                    <td style="color: #999; padding-bottom: 8px;">สถานะการชำระเงิน:</td>
                    <td style="text-align: right; color: #10B981; font-weight: bold;">Verified Success</td>
                  </tr>
                  <tr>
                    <td style="color: #999;">ยอดเงินที่ชำระ:</td>
                    <td style="text-align: right; font-weight: bold;">฿${data.amount.toFixed(2)}</td>
                  </tr>
                </table>
              </div>
              
              <div style="text-align: center; margin: 40px 0;">
                <a href="${data.ticketUrl || "#"}" style="background: #000; color: #D4AF37; padding: 18px 35px; border-radius: 12px; text-decoration: none; font-weight: bold; font-size: 14px; display: inline-block;">ดาวน์โหลดเอกสารของคุณ (PDF)</a>
              </div>
              
              <p style="font-size: 12px; color: #999; text-align: center; margin-top: 40px;">
                หากมีข้อสงสัยประการใด คุณสามารถติดต่อผู้เชี่ยวชาญของเราได้ทาง LINE OA ตลอด 24 ชั่วโมง
              </p>
            </div>
            
            <div style="background: #eee; padding: 20px; text-align: center; font-size: 10px; color: #888;">
              &copy; 2026 UNLINK-GLOBAL | Private Intelligence & Financial Strategy
            </div>
          </div>
        </div>
      `,
    });

    return { success: true, id: result.data?.id };
  } catch (error) {
    console.error("Resend Email Error:", error);
    return { success: false, error: "Failed to send email" };
  }
}
