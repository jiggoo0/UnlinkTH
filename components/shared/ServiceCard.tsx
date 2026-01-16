import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Typography } from "@/components/ui/typography"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
// ✅ นำเข้า Icon โดยตรงจาก Lucide
import { Trash2, Scale, Search, ShieldAlert } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  suitableFor: string[]
  iconName: "remove" | "legal" | "seo" | "negotiation" | "default"
  className?: string
}

/**
 * ✅ ย้าย Icon Map ออกมาไว้ด้านนอก Component (Static)
 * เพื่อป้องกัน Error: "Cannot create components during render"
 */
const ICON_MAP = {
  remove: Trash2,
  legal: Scale,
  seo: Search,
  negotiation: Trash2,
  default: ShieldAlert,
}

export default function ServiceCard({
  title,
  description,
  suitableFor,
  iconName,
  className,
}: ServiceCardProps) {
  // ✅ เลือก Icon จาก Map โดยตรง (ESLint จะไม่มองว่าเป็นการสร้าง Component ใหม่)
  const SelectedIcon = ICON_MAP[iconName] || ICON_MAP.default

  return (
    <Card
      className={cn(
        "group relative h-full overflow-hidden border-slate-200 transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5",
        className
      )}
    >
      <div className="h-1.5 w-full bg-blue-600 transition-all group-hover:h-2" />

      <CardHeader className="pb-4">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-all duration-300 group-hover:rotate-3 group-hover:bg-blue-600 group-hover:text-white">
          <SelectedIcon className="h-6 w-6" />
        </div>
        <CardTitle className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <Typography
          variant="p"
          className="mb-6 line-clamp-3 leading-relaxed text-slate-600"
        >
          {description}
        </Typography>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
              เหมาะสำหรับ
            </span>
            <div className="h-px flex-1 bg-slate-100" />
          </div>

          <div className="flex flex-wrap gap-2">
            {suitableFor.map((item) => (
              <Badge
                key={item}
                variant="secondary"
                className="border-none bg-slate-100 font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
