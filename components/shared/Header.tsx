import { Typography } from "@/components/ui/typography"

interface HeaderProps {
  title: string
  description?: string
  /** * เพิ่ม optional prop สำหรับปรับขนาดความสูงหากต้องการใช้ในหน้าที่เนื้อหาต่างกัน
   */
  variant?: "default" | "compact"
}

/**
 * Header: คอมโพเนนต์หัวเรื่องสำหรับหน้าภายใน (Inner Pages)
 * ออกแบบมาเพื่อสร้างความชัดเจนและ Hierarchy ที่ดีของเนื้อหา
 */
export default function Header({
  title,
  description,
  variant = "default",
}: HeaderProps) {
  return (
    <section
      className={`relative overflow-hidden bg-slate-950 ${
        variant === "compact" ? "py-12" : "py-16 md:py-24"
      }`}
    >
      {/* Background Subtle Gradient & Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.1),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          {/* Main Title - ใช้ H1 Individual Component จาก Typography */}
          <Typography
            variant="h1"
            className="border-none pb-0 text-3xl tracking-tight text-white md:text-5xl"
          >
            {title}
          </Typography>

          {/* Description - ใช้ Lead variant เพื่อความอ่านง่าย */}
          {description && (
            <Typography
              variant="lead"
              className="mt-6 max-w-2xl text-lg text-slate-400 md:text-xl"
            >
              {description}
            </Typography>
          )}
        </div>
      </div>
    </section>
  )
}
