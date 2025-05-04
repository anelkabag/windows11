"use client"

import Image from "next/image"

interface TaskbarIconProps {
  icon: string
  active: boolean
  onClick: () => void
}

export function TaskbarIcon({ icon, active, onClick }: TaskbarIconProps) {
  return (
    <button
      className={`p-2 rounded-md transition-all duration-200 relative ${active ? "bg-white/20" : "hover:bg-white/10"}`}
      onClick={onClick}
    >
      <Image src={icon || "/placeholder.svg"} alt="App" width={24} height={24} className="w-6 h-6" />
      {active && (
        <div className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
      )}
    </button>
  )
}
