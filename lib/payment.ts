export type SlipOkResponse = {
  success: boolean;
  data?: {
    amount: number;
    ref_number: string;
    sender: string;
    receiver: string;
    trans_date: string;
    trans_time: string;
  };
  error?: string;
};

/**
 * Verify Slip using SlipOK API (High-Precision)
 */
export async function verifySlip(logPayload: string): Promise<SlipOkResponse> {
  const apiKey = process.env.SLIPOK_API_KEY;
  const branchId = process.env.SLIPOK_BRANCH_ID;

  if (!apiKey || !branchId) {
    throw new Error("Missing SlipOK API configuration");
  }

  try {
    const response = await fetch(
      `https://api.slipok.com/api/v1/main/check/${branchId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-lib-apikey": apiKey,
        },
        body: JSON.stringify({
          data: logPayload,
        }),
      },
    );

    const result = await response.json();

    if (result.success) {
      return {
        success: true,
        data: {
          amount: result.data.amount,
          ref_number: result.data.transRef,
          sender: result.data.sender.name,
          receiver: result.data.receiver.name,
          trans_date: result.data.transDate,
          trans_time: result.data.transTime,
        },
      };
    }

    return {
      success: false,
      error: result.message || "Invalid Slip",
    };
  } catch (error) {
    console.error("SlipOK Verification Error:", error);
    return {
      success: false,
      error: "Service temporarily unavailable",
    };
  }
}
