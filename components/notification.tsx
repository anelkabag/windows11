import Image from "next/image"

interface NotificationProps {
  app: string
  icon: string
  message: string
  time: string
}

export function Notification({ app, icon, message, time }: NotificationProps) {
  return (
    <div className="bg-white/5 rounded-md p-3 hover:bg-white/10 transition-all">
      <div className="flex items-center gap-3">
        <Image src={icon || "/placeholder.svg"} alt={app} width={20} height={20} className="w-5 h-5" />
        <div className="flex-1">
          <div className="flex justify-between">
            <span className="text-white text-sm font-medium">{app}</span>
            <span className="text-white/70 text-xs">{time}</span>
          </div>
          <p className="text-white/90 text-sm">{message}</p>
        </div>
      </div>
    </div>
  )
}
