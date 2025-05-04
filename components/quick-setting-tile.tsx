import { ChevronRight } from "lucide-react"
import type { ReactNode } from "react"

interface QuickSettingTileProps {
  icon: ReactNode
  label: string
  active: boolean
  hasDetails: boolean
}

export function QuickSettingTile({ icon, label, active, hasDetails }: QuickSettingTileProps) {
  return (
    <button
      className={`flex flex-col items-center justify-center p-3 rounded-md transition-all ${
        active ? "bg-blue-500/30" : "hover:bg-white/10"
      }`}
    >
      <div className="flex items-center justify-between w-full">
        <div className={`${active ? "text-blue-400" : "text-white"}`}>{icon}</div>
        {hasDetails && <ChevronRight className={`w-3 h-3 ${active ? "text-blue-400" : "text-white"}`} />}
      </div>
      <span className={`text-xs mt-1 ${active ? "text-blue-400" : "text-white"} text-center w-full truncate`}>
        {label}
      </span>
    </button>
  )
}
