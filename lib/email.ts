import { Resend } from "resend";

/**
 * 📧 UNLINK-GLOBAL: EMAIL AUTOMATION SYSTEM (V1.1)
 * Powered by Resend.com
 * ปรับปรุง: รองรับการ Build โดยไม่มี API Key ในเครื่อง Local
 */

const getResend = () => {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
};

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
  const resend = getResend();

  if (!resend) {
    console.error("Missing RESEND_API_KEY in environment variables.");
    return { success: false, error: "Configuration Error" };
  }

  try {
    const result = await resend.emails.send({
      from: "UNLINK-GLOBAL <support@unlink-th.com>", // ต้อง Verify Domain ใน Resend ก่อน
      to: [to],
      subject: `ข้อมูลการดำเนินการเคสของคุณเรียบร้อยแล้ว - ${data.caseId}`,
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f7f6; padding: 30px; color: #2c3e50;">
          <div style="max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e1e8ed;">
            <div style="background: #ffffff; padding: 30px; text-align: left; border-bottom: 1px solid #f0f0f0;">
              <h2 style="color: #10B981; margin: 0; font-size: 18px; letter-spacing: 1px;">UNLINK-GLOBAL</h2>
            </div>
            
            <div style="padding: 35px;">
              <p style="font-size: 15px; color: #2c3e50; font-weight: 600;">เรียนคุณ ${data.customerName},</p>
              <p style="line-height: 1.6; color: #515d6a; font-size: 14px;">
                ขอแจ้งความคืบหน้าการดำเนินการสำหรับบริการ <strong>${data.serviceTitle}</strong> 
                ขณะนี้ขั้นตอนการตรวจสอบและจัดเตรียมเอกสารเสร็จสมบูรณ์แล้ว คุณสามารถตรวจสอบและรับเอกสารฉบับจริงได้ผ่านระบบจัดการข้อมูลส่วนบุคคล (Secure Access) ตามรายละเอียดด้านล่างนี้ครับ
              </p>
              
              <div style="background: #f8fafc; border: 1px solid #edf2f7; border-radius: 10px; padding: 20px; margin: 25px 0;">
                <table style="width: 100%; font-size: 13px; color: #4a5568;">
                  <tr>
                    <td style="padding-bottom: 8px;">รหัสอ้างอิงเคส:</td>
                    <td style="text-align: right; font-weight: bold; color: #1a202c;">${data.caseId}</td>
                  </tr>
                  <tr>
                    <td style="padding-bottom: 8px;">สถานะการดำเนินการ:</td>
                    <td style="text-align: right; color: #10B981; font-weight: bold;">สมบูรณ์ (Verified)</td>
                  </tr>
                  <tr>
                    <td>บริการ:</td>
                    <td style="text-align: right; font-weight: bold;">${data.serviceTitle}</td>
                  </tr>
                </table>
              </div>
              
              <div style="text-align: center; margin: 35px 0;">
                <a href="https://www.unlink-th.com/download-vault?caseId=${data.caseId}&name=${encodeURIComponent(data.customerName)}" style="background: #10B981; color: #ffffff; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 15px; display: inline-block;">รับเอกสารของคุณได้ที่นี่</a>
              </div>
              
              <p style="font-size: 11px; color: #a0aec0; text-align: center; margin-top: 30px; line-height: 1.5;">
                อีเมลฉบับนี้เป็นการแจ้งเตือนอัตโนมัติจากระบบรักษาความปลอดภัย <br>
                หากท่านมีข้อสงสัยเพิ่มเติม สามารถปรึกษาเจ้าหน้าที่ผ่านช่องทาง LINE OA ได้ตลอดเวลาครับ
              </p>
            </div>
            
            <div style="background: #f8fafc; padding: 20px; text-align: center; font-size: 10px; color: #718096; border-top: 1px solid #edf2f7;">
              © 2026 UNLINK-GLOBAL PRIVATE INTELLIGENCE
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
