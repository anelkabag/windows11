"use client"

import { motion } from "framer-motion"
import {
  ChevronUp,
  ChevronRight,
  Sun,
  Volume2,
  X,
  Wifi,
  Bluetooth,
  Plane,
  Battery,
  Moon,
  Accessibility,
  Smartphone,
} from "lucide-react"
import Image from "next/image"
import { QuickSettingTile } from "./quick-setting-tile"

interface QuickSettingsPanelProps {
  brightness: number
  setBrightness: (value: number) => void
  volume: number
  setVolume: (value: number) => void
  currentMedia: { title: string; author: string; isPlaying: boolean }
  toggleMediaPlayback: () => void
}

export function QuickSettingsPanel({
  brightness,
  setBrightness,
  volume,
  setVolume,
  currentMedia,
  toggleMediaPlayback,
}: QuickSettingsPanelProps) {
  return (
    <motion.div
      className="absolute bottom-14 right-0 w-[380px] bg-black/80 backdrop-blur-xl rounded-lg overflow-hidden z-30 border border-white/10 p-0"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.2 }}
    >

      <div className="p-3 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0">
            <Image src="/images/arc-logo.png" alt="Arc" width={24} height={24} className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className="text-white text-sm font-medium">Arc</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 min-w-0">
                <p className="text-white text-xs truncate">{currentMedia.title}</p>
                <p className="text-white/70 text-xs">{currentMedia.author}</p>
              </div>
              <Image src="/images/thumbnail.png" alt="Thumbnail" width={40} height={40} className="w-10 h-10 rounded" />
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-8 mt-3">
          <button className="text-white hover:bg-white/10 p-2 rounded-full transition-all">
            <ChevronUp className="w-5 h-5 rotate-90" />
          </button>
          <button
            className="text-white hover:bg-white/10 p-2 rounded-full transition-all"
            onClick={toggleMediaPlayback}
          >
            {currentMedia.isPlaying ? (
              <div className="w-5 h-5 flex items-center justify-center">
                <div className="w-1 h-4 bg-white mx-0.5"></div>
                <div className="w-1 h-4 bg-white mx-0.5"></div>
              </div>
            ) : (
              <div className="w-5 h-5 flex items-center justify-center">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
              </div>
            )}
          </button>
          <button className="text-white hover:bg-white/10 p-2 rounded-full transition-all">
            <ChevronUp className="w-5 h-5 -rotate-90" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-1 p-1">
        <QuickSettingTile icon={<Wifi className="w-5 h-5" />} label="Fsociety-2G" active={true} hasDetails={true} />
        <QuickSettingTile
          icon={<Bluetooth className="w-5 h-5" />}
          label="Non connecté"
          active={false}
          hasDetails={true}
        />
        <QuickSettingTile icon={<Plane className="w-5 h-5" />} label="Mode Avion" active={false} hasDetails={false} />
        <QuickSettingTile
          icon={<Battery className="w-5 h-5" />}
          label="Économiseur de batterie"
          active={false}
          hasDetails={false}
        />
        <QuickSettingTile
          icon={<Moon className="w-5 h-5" />}
          label="Éclairage nocturne"
          active={false}
          hasDetails={false}
        />
        <QuickSettingTile
          icon={<Accessibility className="w-5 h-5" />}
          label="Accessibilité"
          active={false}
          hasDetails={true}
        />
        <QuickSettingTile
          icon={<Smartphone className="w-5 h-5" />}
          label="Point d'accès sans fil mobile"
          active={false}
          hasDetails={false}
        />
      </div>

      <div className="px-4 py-3 flex items-center gap-3">
        <Sun className="w-5 h-5 text-white flex-shrink-0" />
        <input
          type="range"
          min="0"
          max="100"
          value={brightness}
          onChange={(e) => setBrightness(Number.parseInt(e.target.value))}
          className="w-full h-1 bg-white/30 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
        />
      </div>

      <div className="px-4 py-3 flex items-center gap-3">
        <Volume2 className="w-5 h-5 text-white flex-shrink-0" />
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(Number.parseInt(e.target.value))}
          className="w-full h-1 bg-white/30 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
        />
        <button className="text-white hover:bg-white/10 p-1 rounded-full transition-all">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="p-4 border-t border-white/10">
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 flex items-center justify-center">
              <Battery className="w-4 h-4 text-white"/>
            </div>
            <span className="text-white text-xs">21%</span>
          </div>
          <button className="text-white hover:bg-white/10 p-1 rounded-full transition-all">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
