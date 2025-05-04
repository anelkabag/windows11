"use client"

import Image from "next/image"

interface AppIconProps {
  name: string
  icon: string
  onClick: () => void
}

export function AppIcon({ name, icon, onClick }: AppIconProps) {
  return (
    <button
      className="flex flex-col items-center justify-center p-2 rounded-md hover:bg-white/10 transition-all"
      onClick={onClick}
    >
      <Image src={icon || "/placeholder.svg"} alt={name} width={36} height={36} className="w-9 h-9" />
      <span className="text-white text-xs mt-1">{name}</span>
    </button>
  )
}
