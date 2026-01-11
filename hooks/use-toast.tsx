import { toast as sonnerToast } from 'sonner'
import { CheckCircle2, AlertCircle, Info, ShieldAlert } from 'lucide-react'

/**
 * ZYNC STORE - Toast System (v2.2)
 * Refactored to .tsx to support JSX icons and Modern Sharp styling
 */
export const toast = {
  success: (message: string, description?: string) => {
    sonnerToast.success(message, {
      description,
      icon: <CheckCircle2 className="h-4 w-4 text-emerald-500" />,
      // ปรับจาก rounded-[1.5rem] เป็น rounded-md เพื่อความเฉียบคม (Sharp)
      className:
        'rounded-md bg-white/90 backdrop-blur-xl border-slate-200 shadow-2xl py-4 border-l-4 border-l-emerald-500',
    })
  },

  error: (message: string, description?: string) => {
    sonnerToast.error(message, {
      description,
      icon: <ShieldAlert className="h-4 w-4 text-rose-500" />,
      className:
        'rounded-md bg-white/90 backdrop-blur-xl border-slate-200 shadow-2xl py-4 border-l-4 border-l-rose-500',
    })
  },

  info: (message: string, description?: string) => {
    sonnerToast.info(message, {
      description,
      icon: <Info className="h-4 w-4 text-blue-500" />,
      className:
        'rounded-md bg-white/90 backdrop-blur-xl border-slate-200 shadow-2xl py-4 border-l-4 border-l-blue-500',
    })
  },

  warning: (message: string, description?: string) => {
    sonnerToast.warning(message, {
      description,
      icon: <AlertCircle className="h-4 w-4 text-amber-500" />,
      className:
        'rounded-md bg-white/90 backdrop-blur-xl border-slate-200 shadow-2xl py-4 border-l-4 border-l-amber-500',
    })
  },
}
