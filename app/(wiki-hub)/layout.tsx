/** @format */
import '@/app/globals.css'

export const metadata = {
  title: 'ศูนย์เรียนรู้และคลังข้อมูลดิจิทัล | Unlink Thailand',
  description:
    'รวบรวมความรู้เรื่องกฎหมายและวิธีจัดการข้อมูลส่วนบุคคลแบบเข้าใจง่าย สำหรับทุกคน',
}

export default function WikiHubRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-700">
      {children}
    </div>
  )
}
