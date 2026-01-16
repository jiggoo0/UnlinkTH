import { Typography } from "@/components/ui/typography"

export const metadata = {
  title: "นโยบายความเป็นส่วนตัว | Unlink-TH",
}

export default function PrivacyPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-20">
      <header className="mb-12 border-b pb-8">
        <Typography
          variant="h1"
          className="mb-4 text-3xl font-bold text-slate-900"
        >
          นโยบายความเป็นส่วนตัว (Privacy Policy)
        </Typography>
        <Typography variant="p" className="text-slate-500">
          แก้ไขล่าสุดเมื่อ: 16 มกราคม 2026
        </Typography>
      </header>

      <div className="prose prose-slate max-w-none space-y-8">
        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-800">
            1. ข้อมูลที่เราจัดเก็บ
          </h2>
          <p>
            เราจัดเก็บข้อมูลเฉพาะที่จำเป็นเพื่อใช้ในการดำเนินงานตามที่คุณร้องขอเท่านั้น
            ได้แก่:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>ข้อมูลติดต่อ (ชื่อ, เบอร์โทรศัพท์, อีเมล)</li>
            <li>รายละเอียดปัญหาที่เกี่ยวข้องกับข้อมูลออนไลน์ของคุณ</li>
            <li>
              หลักฐานแสดงตัวตน
              (เฉพาะในกรณีที่ต้องใช้ยื่นเรื่องทางกฎหมายต่อแพลตฟอร์ม)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-800">
            2. การรักษาความปลอดภัยของข้อมูล
          </h2>
          <p>
            ข้อมูลของคุณจะถูกเก็บรักษาไว้ในระบบที่มีการรักษาความปลอดภัยสูงสุด
            และจะถูกทำลายทิ้งทันทีเมื่อภารกิจสิ้นสุดลง หรือตามคำร้องขอของลูกค้า
            โดยจะไม่มีการส่งต่อข้อมูลให้กับบุคคลที่สามโดยไม่ได้รับอนุญาต
          </p>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold text-slate-800">
            3. สิทธิตามกฎหมาย PDPA
          </h2>
          <p>
            คุณมีสิทธิในการเข้าถึง แก้ไข คัดค้าน
            หรือขอให้ระงับการใช้ข้อมูลส่วนบุคคลของคุณได้ตลอดเวลา
            ผ่านช่องทางติดต่อทางการของเรา
          </p>
        </section>

        <div className="mt-12 rounded-xl border border-blue-100 bg-blue-50 p-6">
          <p className="font-semibold text-blue-800">
            ติดต่อเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล (DPO)
          </p>
          <p className="text-blue-700">
            Email: dpo@unlink-th.com | LINE: @unlink-th
          </p>
        </div>
      </div>
    </main>
  )
}
