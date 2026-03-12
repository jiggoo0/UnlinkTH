/** @format */

import { NextRequest, NextResponse } from "next/server";
import * as line from "@line/bot-sdk";

const LINE_TOKEN = "BgmQagMZBMPi+FSrt2eXy1Ujw3j+M40bjE5T00pzT2vRTOmKLcbr+mFq6r97hwydTq9REosBk4yXDePckiX+uXQ0KXKiU0MDy3AQrgQz8bnVCQ09m5vUsHUae0FBUL+43He2CSgxIuv6XCXIboHJIQdB04t89/1O/w1cDnyilFU=";
const ADMIN_ID = "U40a4a0d00ff4a7bffc0aeae5902955a0";

const client = new line.messagingApi.MessagingApiClient({
  channelAccessToken: LINE_TOKEN,
});

/**
 * LINE WEBHOOK HANDLER - HIGH CONTRAST EDITION
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const events: any[] = body.events;

    const results = await Promise.all(
      events.map(async (event) => {
        if (event.type === "follow") return handleFollowEvent(event);
        if (event.type === "message" && event.message.type === "text") return handleTextEvent(event);
        return null;
      })
    );

    return NextResponse.json({ status: "success", results });
  } catch (err) {
    return NextResponse.json({ status: "error" }, { status: 500 });
  }
}

async function handleFollowEvent(event: any) {
  return client.replyMessage({
    replyToken: event.replyToken,
    messages: [getMainMenuFlex()]
  });
}

async function handleTextEvent(event: line.MessageEvent & { message: line.TextMessageContent }) {
  const input = event.message.text.trim();
  const replyToken = event.replyToken;
  const userId = event.source.userId;
  const normalizedInput = input.toLowerCase().replace(/\s+/g, ''); // ตัดช่องว่างและทำเป็นพิมพ์เล็กเพื่อการค้นหาที่แม่นยำ

  // 🚨 1. ตรวจสอบการเรียกแอดมินด่วนก่อนเสมอ
  const adminKeywords = ["5", "ด่วน", "แอดมิน", "เจ้าหน้าที่", "คนจริง", "คุยกับคน", "ติดต่อพนักงาน"];
  if (adminKeywords.some(k => normalizedInput.includes(k))) {
    await client.pushMessage({
      to: ADMIN_ID,
      messages: [{ type: "text", text: `🚨 [URGENT] มีลูกค้าต้องการคุยด่วน!\nUser ID: ${userId}\nข้อความ: ${input}` }],
    });
    return client.replyMessage({ 
      replyToken, 
      messages: [{ type: "text", text: "✅ รับทราบครับ! ผมได้ส่งสัญญาณแจ้งเตือนไปที่มือถือของเจ้าหน้าที่โดยตรงแล้วครับ รบกวนรอสักครู่นะครับ \n\n(พิมพ์ '0' เพื่อดูเมนูอื่นๆ ระหว่างรอ)" }] 
    });
  }

  // 🔍 2. ระบบ Routing ตามหมายเลขและ Keyword
  switch (input) {
    /* --- กลุ่มที่ 1: ล้างประวัติ --- */
    case "1":
      return client.replyMessage({ replyToken, messages: [getReputationFlexCard()] });
    case "11":
      return client.replyMessage({ replyToken, messages: [{ type: "text", text: "🔒 บริการลบโพสต์ประจาน/ข่าวเสีย\n\nเรามีทีมเจรจาและใช้กฎหมาย PDPA เพื่อนำข้อมูลลงอย่างเด็ดขาดครับ\n👉 รบกวนส่ง 'ลิงก์ที่ต้องการให้ลบ' มาให้เราประเมินความยากง่ายได้เลยครับ (ฟรี)" }] });
    case "12":
      return client.replyMessage({ replyToken, messages: [{ type: "text", text: "🛡️ บริการล้างชื่อจากเว็บคนโกง (Blacklist)\n\nไม่ว่าจะเป็นเรื่องเข้าใจผิด หรือเคลียร์จบแล้วแต่ชื่อยังอยู่ เราจัดการให้หายไปจาก Google ได้ครับ\n👉 รบกวนส่ง 'ชื่อ-นามสกุล' หรือ 'ลิงก์แบล็คลิสต์' มาให้เราเช็กได้เลยครับ" }] });

    /* --- กลุ่มที่ 2: การเงิน --- */
    case "2":
      return client.replyMessage({ replyToken, messages: [getFinancialFlexCard()] });
    case "21":
      return client.replyMessage({ replyToken, messages: [{ type: "text", text: "🏦 บริการแก้ไขเครดิตบูโร\n\nการติดบูโรไม่ใช่จุดจบครับ เราช่วยวิเคราะห์จุดตายและวางโครงสร้างหนี้ใหม่ให้ธนาคารยอมรับได้\n👉 รบกวนแจ้ง 'ยอดหนี้รวม' และ 'สถานะปัจจุบัน' ให้ทีมงานวิเคราะห์หน่อยนะครับ" }] });
    case "22":
      return client.replyMessage({ replyToken, messages: [{ type: "text", text: "📈 บริการปั้นสเตทเม้นท์ (Statement Optimization)\n\nเราช่วยออกแบบรายการเดินบัญชีให้ดูสวยงาม มีวินัย และน่าเชื่อถือที่สุดสำหรับยื่นกู้หรือขอวีซ่า\n👉 อาชีพปัจจุบันของคุณคืออะไรครับ? พิมพ์บอกเราได้เลยครับ" }] });

    /* --- กลุ่มที่ 3: วีซ่า & พี่น้องสายบิน --- */
    case "3":
      return client.replyMessage({ replyToken, messages: [getOverseasFlexCard()] });
    case "31":
      return client.replyMessage({ replyToken, messages: [{ type: "text", text: "🏠 บริการปั้นเอกสารกู้บ้าน (สำหรับพี่น้องสายบิน)\n\nทำงานต่างประเทศแต่อยากมีบ้านในไทย? เราช่วยจัดระเบียบสเตทเม้นท์และเตรียมเอกสารรายได้ให้ธนาคารยอมรับ 100% แม้ไม่มีสลิปเงินเดือนครับ\n👉 รบกวนแจ้ง 'ประเทศที่ทำงาน' และ 'ราคาบ้านที่อยากได้' ให้เราหน่อยครับ" }] });
    case "32":
      return client.replyMessage({ replyToken, messages: [{ type: "text", text: "✈️ วางแผนขอวีซ่าพำนักยาว (DTV / Schengen / Dubai)\n\nเราช่วยอุดรอยรั่วสเตทเม้นท์และเตรียมพอร์ตงานให้เข้าเกณฑ์วีซ่าใหม่ปี 2569 เพื่อให้คุณเดินทางและพำนักได้ยาวๆ แบบไม่ต้องกังวล ตม. ครับ\n👉 คุณอยากเดินทางไปประเทศไหนครับ?" }] });
    case "33":
      return client.replyMessage({ replyToken, messages: [{ type: "text", text: "💰 จัดระเบียบการเงิน & การโอนเงินกลับไทย\n\nโอนเงินกลับไทยอย่างไรให้ปลอดภัย ตรวจสอบได้ และไม่โดนเรื่องภาษีหรือธนาคารระงับบัญชี? เรามีแผนผังเส้นทางการเงินแนะนำให้ครับ\n👉 สอบถามรายละเอียดเพิ่มเติมพิมพ์ทิ้งไว้ได้เลยครับ" }] });
    case "34":
      return client.replyMessage({ replyToken, messages: [{ type: "text", text: "🔒 ปฏิบัติการ Digital Detox (ล้างประวัติก่อนกลับไทย)\n\nลบรูปภาพที่ไม่ต้องการ โพสต์ที่สุ่มเสี่ยง หรือข้อมูลในอดีตที่ไม่อยากให้ใครเห็น เพื่อเริ่มต้นชีวิตใหม่ในไทยอย่างสง่างามครับ\n👉 ส่งลิงก์หรือข้อมูลที่กังวลมาให้เราเช็กได้เลยครับ" }] });

    /* --- กลุ่มที่ 4: รีวิว --- */
    case "4":
    case "รีวิว":
      return client.replyMessage({ 
        replyToken, 
        messages: [{ type: "text", text: "⭐ ตรวจสอบความสำเร็จและมาตรฐานการทำงานของเราได้ที่นี่ครับ: https://www.unlink-th.com/case-studies \n\n(พิมพ์ '0' เพื่อกลับสู่เมนูหลัก)" }] 
      });

    /* --- กลับเมนูหลัก --- */
    case "0":
    case "เมนูหลัก":
    case "เมนู":
      return client.replyMessage({ replyToken, messages: [getMainMenuFlex()] });

    /* --- วิเคราะห์ Keyword ทั่วไป (Smart Fallback) --- */
    default:
      if (["ลบ", "ประจาน", "แบล็คลิสต์", "ประวัติเน่า", "รูปหลุด", "pdpa"].some(k => normalizedInput.includes(k))) {
        return client.replyMessage({ replyToken, messages: [getReputationFlexCard()] });
      }
      if (["กู้", "บ้าน", "บูโร", "เงิน", "สเตทเม้น", "สินเชื่อ", "หนี้"].some(k => normalizedInput.includes(k))) {
        return client.replyMessage({ replyToken, messages: [getFinancialFlexCard()] });
      }
      if (["วีซ่า", "ตม", "บิน", "พาสปอร์ต", "ต่างประเทศ"].some(k => normalizedInput.includes(k))) {
        return client.replyMessage({ 
          replyToken, 
          messages: [{ type: "text", text: "✈️ หากเป็นเรื่องการเดินทางหรือวีซ่า ทีมงานเรามีผู้เชี่ยวชาญเฉพาะทางคอยดูแลครับ พิมพ์จุดหมายปลายทางหรือปัญหาของคุณทิ้งไว้ได้เลยครับ" }] 
        });
      }
      
      // ถ้าไม่ตรงกับอะไรเลย ให้ส่งเมนูหลัก
      return client.replyMessage({ replyToken, messages: [getMainMenuFlex()] });
  }
}

/**
 * [Design] เมนูหลัก - เพิ่มบริการให้ครบถ้วน
 */
function getMainMenuFlex(): any {
  return {
    type: "flex",
    altText: "เมนูหลัก UNLINK-TH",
    contents: {
      type: "bubble",
      hero: {
        type: "image",
        url: "https://www.unlink-th.com/images/og/og-main.webp",
        size: "full",
        aspectRatio: "20:13",
        aspectMode: "cover"
      },
      body: {
        type: "box",
        layout: "vertical",
        backgroundColor: "#000000",
        contents: [
          { type: "text", text: "ยินดีต้อนรับสู่ UNLINK-TH", weight: "bold", color: "#D4AF37", size: "lg" },
          { type: "text", text: "กรุณากดหมายเลข หรือคลิกปุ่มเพื่อเลือกบริการครับ", size: "xs", color: "#aaaaaa", margin: "sm" },
          { type: "box", layout: "vertical", margin: "xl", spacing: "sm", contents: [
            { type: "button", action: { type: "message", label: "1. ล้างประวัติเน่า / แบล็คลิสต์", text: "1" }, style: "secondary", color: "#222222" },
            { type: "button", action: { type: "message", label: "2. ปั้นสเตทเม้นท์ / กู้บ้าน", text: "2" }, style: "secondary", color: "#222222" },
            { type: "button", action: { type: "message", label: "3. บริการเอกสารวีซ่า", text: "3" }, style: "secondary", color: "#222222" },
            { type: "button", action: { type: "message", label: "4. ดูรีวิวความสำเร็จ", text: "4" }, style: "secondary", color: "#222222" },
            { type: "button", action: { type: "message", label: "5. ติดต่อเจ้าหน้าที่ (ด่วน)", text: "5" }, style: "primary", color: "#D4AF37", margin: "md" }
          ]}
        ]
      }
    }
  };
}

function getReputationFlexCard(): any {
  return {
    type: "flex",
    altText: "บริการล้างประวัติ - UNLINK-TH",
    contents: {
      type: "bubble",
      body: {
        type: "box",
        layout: "vertical",
        backgroundColor: "#000000",
        spacing: "md",
        contents: [
          { type: "text", text: "ล้างประวัติ & ทวงคืนชื่อเสียง", weight: "bold", size: "xl", color: "#D4AF37" },
          { type: "text", text: "เลือกระบุความต้องการของคุณครับ:", wrap: true, size: "sm", color: "#FFFFFF" },
          { type: "box", layout: "vertical", margin: "md", spacing: "sm", contents: [
            { type: "button", action: { type: "message", label: "กด 11 : ลบรูปประจาน/ข่าวเสีย", text: "11" }, style: "secondary", color: "#222222" },
            { type: "button", action: { type: "message", label: "กด 12 : ล้างชื่อจากเว็บคนโกง", text: "12" }, style: "secondary", color: "#222222" }
          ]},
          { type: "button", style: "primary", color: "#D4AF37", margin: "lg", action: { type: "message", label: "ให้แอดมินวิเคราะห์เคส", text: "5" } },
          { type: "text", text: "พิมพ์ '0' กลับสู่เมนูหลัก", size: "xs", color: "#aaaaaa", align: "center", margin: "md" }
        ]
      }
    }
  };
}

function getFinancialFlexCard(): any {
  return {
    type: "flex",
    altText: "บริการกู้บ้าน - UNLINK-TH",
    contents: {
      type: "bubble",
      body: {
        type: "box",
        layout: "vertical",
        backgroundColor: "#000000",
        spacing: "md",
        contents: [
          { type: "text", text: "ฟื้นฟูเครดิต & ปั้นสเตทเม้นท์", weight: "bold", size: "xl", color: "#D4AF37" },
          { type: "text", text: "จัดระเบียบการเงินให้ธนาคารยอมรับ แม้เคยติดบูโรหรือยื่นกู้ไม่ผ่าน", wrap: true, size: "sm", color: "#FFFFFF" },
          { type: "box", layout: "vertical", margin: "md", spacing: "sm", contents: [
            { type: "button", action: { type: "message", label: "กด 21 : แก้บูโร / ประวัติเสีย", text: "21" }, style: "secondary", color: "#222222" },
            { type: "button", action: { type: "message", label: "กด 22 : ปั้นสเตทเม้นท์", text: "22" }, style: "secondary", color: "#222222" }
          ]},
          { type: "button", style: "primary", color: "#D4AF37", margin: "lg", action: { type: "message", label: "ปรึกษาแผนกู้บ้านฟรี", text: "5" } },
          { type: "text", text: "พิมพ์ '0' กลับสู่เมนูหลัก", size: "xs", color: "#aaaaaa", align: "center", margin: "md" }
        ]
      }
    }
  };
}

function getOverseasFlexCard(): any {
  return {
    type: "flex",
    altText: "บริการสำหรับพี่น้องสายบิน - UNLINK-TH",
    contents: {
      type: "bubble",
      body: {
        type: "box",
        layout: "vertical",
        backgroundColor: "#000000",
        spacing: "md",
        contents: [
          { type: "text", text: "ยุทธศาสตร์พี่น้องสายบิน ✈️", weight: "bold", size: "xl", color: "#D4AF37" },
          { type: "text", text: "เข้าใจทุกความเสี่ยง พร้อมเปลี่ยนรายได้ต่างแดนให้เป็นทรัพย์สินที่มั่นคงในไทยครับ", wrap: true, size: "sm", color: "#FFFFFF" },
          { type: "box", layout: "vertical", margin: "md", spacing: "sm", contents: [
            { type: "button", action: { type: "message", label: "กด 31 : ปั้นเอกสารกู้บ้านในไทย", text: "31" }, style: "secondary", color: "#222222" },
            { type: "button", action: { type: "message", label: "กด 32 : วางแผนสเตทเม้นท์ขอวีซ่า", text: "32" }, style: "secondary", color: "#222222" },
            { type: "button", action: { type: "message", label: "กด 33 : จัดระเบียบการเงินโอนกลับ", text: "33" }, style: "secondary", color: "#222222" },
            { type: "button", action: { type: "message", label: "กด 34 : ล้างประวัติเน่าก่อนกลับไทย", text: "34" }, style: "secondary", color: "#222222" }
          ]},
          { type: "button", style: "primary", color: "#D4AF37", margin: "lg", action: { type: "message", label: "ปรึกษาผู้เชี่ยวชาญลับด่วน", text: "5" } },
          { type: "text", text: "พิมพ์ '0' กลับสู่เมนูหลัก", size: "xs", color: "#aaaaaa", align: "center", margin: "md" }
        ]
      }
    }
  };
}
