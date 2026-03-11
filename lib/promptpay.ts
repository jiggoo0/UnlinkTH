/**
 * PromptPay QR Code Payload Generator (EMVCo Standard)
 * @author UNLINK-TH
 */

/**
 * CRC16-CCITT (XModem) calculation for PromptPay
 */
function crc16(data: string): string {
  let crc = 0xffff;
  for (let i = 0; i < data.length; i++) {
    let x = ((crc >> 8) ^ data.charCodeAt(i)) & 0xff;
    x ^= x >> 4;
    crc = ((crc << 8) ^ (x << 12) ^ (x << 5) ^ x) & 0xffff;
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

/**
 * Format string as [ID][Length][Value]
 */
function f(id: string, value: string): string {
  const len = value.length.toString().padStart(2, "0");
  return `${id}${len}${value}`;
}

/**
 * Generate PromptPay Payload String
 * @param target Mobile number or Tax ID (Proxy)
 * @param amount Amount in THB
 */
export function generatePromptPayPayload(
  target: string,
  amount: number,
): string {
  // Normalize target
  let proxy = target.replace(/[^0-9]/g, "");
  if (proxy.length === 10) {
    // Mobile number format for PromptPay: 0066 + 9 digits (remove leading 0)
    proxy = `0066${proxy.slice(1)}`;
  }

  // 1. Static/Dynamic Identifier (010212 = Dynamic, 010211 = Static)
  // Since we have an amount, we use dynamic format.
  const payload = [
    f("00", "01"), // Version
    f("01", "12"), // Method (Dynamic)
    f(
      "29",
      [
        f("00", "A000000677010111"), // AID
        f("01", proxy.length === 13 ? `02${proxy}` : `01${proxy}`), // Proxy ID
      ].join(""),
    ),
    f("58", "TH"), // Country
    f("53", "764"), // Currency (THB)
    f("54", amount.toFixed(2)), // Amount
    "6304", // CRC Tag
  ].join("");

  return `${payload}${crc16(payload)}`;
}
