"use client"

import { motion } from "framer-motion"
import { Notification } from "./notification"

export function NotificationsPanel() {
  return (
    <motion.div
      className="absolute bottom-14 right-0 w-[400px] bg-black/10 backdrop-blur-xl rounded-lg overflow-hidden z-30 border border-white/20 p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white font-medium">Notifications</h3>
        <button className="text-white text-xs bg-white/10 px-2 py-1 rounded hover:bg-white/20 transition-all">
          Clear all
        </button>
      </div>

      <div className="space-y-3">
        <Notification
          app="Microsoft Edge"
          icon="/images/edge.png"
          message="Your download has completed"
          time="Just now"
        />
        <Notification app="Mail" icon="/images/mail.png" message="New email from John Doe" time="5 minutes ago" />
        <Notification
          app="Calendar"
          icon="/images/calendar.png"
          message="Meeting in 15 minutes"
          time="10 minutes ago"
        />
      </div>
    </motion.div>
  )
}
