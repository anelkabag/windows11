"use client"

import Image from "next/image"

interface DesktopIconProps {
  name: string
  icon: string
  onClick: () => void
}

export function DesktopIcon({ name, icon, onClick }: DesktopIconProps) {
  return (
    <div className="flex flex-col items-center w-20 group cursor-pointer" onClick={onClick}>
      <div className="p-2 rounded-md group-hover:bg-white/10 transition-all duration-200">
        <Image src={icon || "/placeholder.svg"} alt={name} width={40} height={40} className="w-10 h-10" />
      </div>
      <span className="text-white text-xs mt-1 text-center px-1 py-0.5 rounded group-hover:bg-blue-500/80">{name}</span>
    </div>
  )
}
