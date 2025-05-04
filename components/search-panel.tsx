"use client"

import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { AppIcon } from "./app-icon"

export function SearchPanel() {
  return (
    <motion.div
      className="absolute bottom-14 left-0 w-[650px] bg-black/10 backdrop-blur-xl rounded-lg overflow-hidden z-30 border border-white/20 p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Type here to search"
          className="w-full bg-white/10 border border-white/20 rounded-md py-2 px-4 text-white outline-none focus:ring-2 focus:ring-blue-500"
          autoFocus
        />
        <Search className="absolute right-3 top-2.5 w-5 h-5 text-white/70" />
      </div>

      <div className="grid grid-cols-6 gap-4">
        <AppIcon name="Edge" icon="/images/edge.png" onClick={() => {}} />
        <AppIcon name="Mail" icon="/images/mail.png" onClick={() => {}} />
        <AppIcon name="Calendar" icon="/images/calendar.png" onClick={() => {}} />
        <AppIcon name="Store" icon="/images/store.png" onClick={() => {}} />
        <AppIcon name="Photos" icon="/images/photos.png" onClick={() => {}} />
        <AppIcon name="Settings" icon="/images/settings.png" onClick={() => {}} />
      </div>
    </motion.div>
  )
}
