"use client"

import Image from "next/image"

interface RecentItemProps {
  name: string
  icon: string
  description: string
  onClick: () => void
}

export function RecentItem({ name, icon, description, onClick }: RecentItemProps) {
  return (
    <button
      className="flex items-center gap-3 p-2 rounded-md hover:bg-white/10 transition-all w-full"
      onClick={onClick}
    >
      <Image src={icon || "/placeholder.svg"} alt={name} width={24} height={24} className="w-6 h-6" />
      <div className="text-left">
        <div className="text-white text-sm">{name}</div>
        <div className="text-white/70 text-xs">{description}</div>
      </div>
    </button>
  )
}
