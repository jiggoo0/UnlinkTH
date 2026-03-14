/** @format */

/**
 * 💳 UNLINK-GLOBAL: PAYMENT & VERIFICATION SYSTEM (v1.0)
 * -------------------------------------------------------------------------
 * มาตรฐานการตรวจสอบสลิปผ่าน SlipOK API ตาม Mandate ใน GEMINI.md
 */

interface SlipOkResponse {
  success: boolean;
  data?: {
    amount: number;
    transTime: string;
    sender: { displayName: string };
    receiver: { displayName: string };
  };
  error?: string;
}

/**
 * 🔍 VERIFY PAYMENT SLIP
 * ตรวจสอบความถูกต้องของสลิปโอนเงินผ่านระบบ SlipOK
 */
export async function verifySlip(payload: { data: string }) {
  const apiKey = process.env.SLIPOK_API_KEY;

  if (!apiKey) {
    console.error("🚨 [PAYMENT_ERROR]: SLIPOK_API_KEY is not configured.");
    return { success: false, error: "Payment verification system is offline." };
  }

  try {
    const response = await fetch(
      "https://api.slipok.com/api/line/apikey/21232",
      {
        method: "POST",
        headers: {
          "x-lib-apikey": apiKey,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    const result: SlipOkResponse = await response.json();
    return result;
  } catch (error) {
    console.error("❌ [PAYMENT_FETCH_ERROR]:", error);
    return { success: false, error: "Unable to reach verification server." };
  }
}
