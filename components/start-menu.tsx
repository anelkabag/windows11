"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Power } from "lucide-react"
import { AppIcon } from "./app-icon"
import { RecentItem } from "./recent-item"

interface StartMenuProps {
  onAppClick: (app: string) => void
}

export function StartMenu({ onAppClick }: StartMenuProps) {
  return (
    <motion.div
      className="absolute bottom-14 left-0 w-[650px] bg-black/10 backdrop-blur-xl rounded-lg overflow-hidden z-30 border border-white/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.2 }}
    >
      <div className="p-6">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-white text-sm font-medium">Pinned</h3>
            <button className="text-white text-xs bg-white/10 px-2 py-1 rounded hover:bg-white/20 transition-all">
              All apps
            </button>
          </div>

          <div className="grid grid-cols-6 gap-4">
            <AppIcon name="Edge" icon="/images/edge.png" onClick={() => onAppClick("Microsoft Edge")} />
            <AppIcon name="Mail" icon="/images/mail.png" onClick={() => onAppClick("Mail")} />
            <AppIcon name="Calendar" icon="/images/calendar.png" onClick={() => onAppClick("Calendar")} />
            <AppIcon name="Store" icon="/images/store.png" onClick={() => onAppClick("Microsoft Store")} />
            <AppIcon name="Photos" icon="/images/photos.png" onClick={() => onAppClick("Photos")} />
            <AppIcon name="Settings" icon="/images/settings.png" onClick={() => onAppClick("Settings")} />
            <AppIcon name="Office" icon="/images/office.png" onClick={() => onAppClick("Office")} />
            <AppIcon name="Xbox" icon="/images/xbox.png" onClick={() => onAppClick("Xbox")} />
            <AppIcon name="Spotify" icon="/images/spotify.png" onClick={() => onAppClick("Spotify")} />
            <AppIcon name="Netflix" icon="/images/netflix.png" onClick={() => onAppClick("Netflix")} />
            <AppIcon name="Twitter" icon="/images/twitter.png" onClick={() => onAppClick("Twitter")} />
            <AppIcon name="Calculator" icon="/images/calculator.png" onClick={() => onAppClick("Calculator")} />
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-white text-sm font-medium">Recommended</h3>
            <button className="text-white text-xs bg-white/10 px-2 py-1 rounded hover:bg-white/20 transition-all">
              More
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <RecentItem
              name="Document.docx"
              icon="/images/word.png"
              description="Modified today"
              onClick={() => onAppClick("Word")}
            />
            <RecentItem
              name="Presentation.pptx"
              icon="/images/powerpoint.png"
              description="Modified yesterday"
              onClick={() => onAppClick("PowerPoint")}
            />
            <RecentItem
              name="Budget.xlsx"
              icon="/images/excel.png"
              description="Modified 3 days ago"
              onClick={() => onAppClick("Excel")}
            />
            <RecentItem
              name="Project.pdf"
              icon="/images/pdf.png"
              description="Modified last week"
              onClick={() => onAppClick("PDF Viewer")}
            />
          </div>
        </div>
      </div>

      <div className="mt-2 p-2 flex justify-between items-center border-t border-white/10">
        <div className="flex items-center gap-2">
          <Image src="/images/user.png" alt="User" width={32} height={32} className="w-8 h-8 rounded-full" />
          <span className="text-white text-sm">User</span>
        </div>

        <button className="text-white hover:bg-white/10 p-2 rounded-full transition-all">
          <Power className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  )
}
