"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Typography } from "@/components/ui/typography"
import { Card, CardContent } from "@/components/ui/card"
import LineButton from "@/components/shared/LineButton"
// ✅ แก้ไข: ลบ MapPin ออกเพื่อผ่าน Linting
import { Mail, Phone } from "lucide-react"

/**
 * 1. Schema สำหรับ Validation ข้อมูลฟอร์ม
 */
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "กรุณากรอกชื่อ-นามสกุล" }),
  email: z.string().email({ message: "รูปแบบอีเมลไม่ถูกต้อง" }),
  phone: z.string().min(9, { message: "กรุณากรอกเบอร์โทรศัพท์ที่ถูกต้อง" }),
  subject: z.string().min(5, { message: "กรุณาระบุหัวข้อที่ต้องการปรึกษา" }),
  message: z
    .string()
    .min(10, { message: "กรุณากรอกรายละเอียดปัญหาอย่างน้อย 10 ตัวอักษร" }),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export default function ContactPage() {
  /**
   * 2. Initial React Hook Form
   */
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  /**
   * 3. Submit Handler
   * ✅ แก้ไข: ลบตัวแปร error ออกจาก block catch เพื่อป้องกัน Lint TS6133/TS1339
   */
  async function onSubmit(data: ContactFormValues) {
    try {
      // ตัวอย่าง: await sendContactEmail(data);
      console.log("Form Data Submitted:", data)
      toast.success("ส่งข้อความเรียบร้อยแล้ว ทีมงานจะติดต่อกลับโดยเร็วที่สุด")
      form.reset()
    } catch {
      // ✅ ไม่ต้องระบุ (_error) หากไม่ได้นำมาประมวลผลต่อ
      toast.error("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง หรือติดต่อทาง LINE")
    }
  }

  return (
    <main className="container mx-auto px-4 py-24 sm:px-6">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        {/* Left Side: Contact Information */}
        <div className="animate-in fade-in slide-in-from-left-4 space-y-8 duration-700">
          <div>
            <Typography
              variant="h1"
              className="mb-4 text-4xl font-extrabold tracking-tight"
            >
              ปรึกษาเราฟรี <br />
              <span className="text-blue-600">อย่างเป็นความลับ</span>
            </Typography>
            <Typography
              variant="p"
              className="text-lg leading-relaxed text-slate-600"
            >
              หากคุณพบปัญหาข้อมูลเสียหาย ข้อมูลหลุด หรือข่าวปลอม
              ส่งรายละเอียดให้เราประเมินเบื้องต้นได้ทันที
              ข้อมูลของคุณจะถูกเก็บเป็นความลับสูงสุดตามนโยบาย PDPA
            </Typography>
          </div>

          <div className="space-y-6">
            <div className="group flex items-center gap-4">
              <div className="rounded-full bg-blue-50 p-3 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                <Phone size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-900">Hotline</p>
                <p className="text-slate-600 transition-colors hover:text-blue-600">
                  0XX-XXX-XXXX (เวลาทำการ 09:00 - 18:00)
                </p>
              </div>
            </div>

            <div className="group flex items-center gap-4">
              <div className="rounded-full bg-blue-50 p-3 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                <Mail size={24} />
              </div>
              <div>
                <p className="font-bold text-slate-900">Email</p>
                <p className="text-slate-600 transition-colors hover:text-blue-600">
                  contact@unlink-th.com
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-8">
            <p className="mb-4 text-sm font-bold tracking-widest text-slate-400 uppercase">
              ช่องทางที่รวดเร็วที่สุด:
            </p>
            <LineButton />
          </div>
        </div>

        {/* Right Side: Contact Form Card */}
        <Card className="border-none shadow-2xl ring-1 ring-slate-200/50">
          <CardContent className="p-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold">
                          ชื่อ-นามสกุล
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="สมชาย รักดี"
                            className="bg-slate-50/50 focus-visible:ring-blue-600"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold">
                          เบอร์โทรศัพท์
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="0812345678"
                            className="bg-slate-50/50 focus-visible:ring-blue-600"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">อีเมล</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="example@email.com"
                          className="bg-slate-50/50 focus-visible:ring-blue-600"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">
                        หัวข้อที่ต้องการปรึกษา
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="เช่น ลบชื่อจากเว็บแบล็กลิสต์"
                          className="bg-slate-50/50 focus-visible:ring-blue-600"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">
                        รายละเอียดปัญหา
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          placeholder="อธิบายปัญหาของคุณเบื้องต้น..."
                          className="resize-none bg-slate-50/50 focus-visible:ring-blue-600"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="h-14 w-full bg-blue-600 text-lg font-bold shadow-lg shadow-blue-200 transition-all hover:bg-blue-700 hover:shadow-blue-300 active:scale-95"
                >
                  {form.formState.isSubmitting
                    ? "กำลังส่งข้อมูล..."
                    : "ส่งข้อมูลเพื่อรับคำปรึกษา"}
                </Button>

                <p className="text-center text-xs text-slate-400">
                  โดยการคลิกปุ่มด้านบน คุณยินยอมตามนโยบายความเป็นส่วนตัวของเรา
                </p>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
