"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion }  from "framer-motion"
import { Minus, Maximize2, X } from "lucide-react"
import Image from "next/image"

interface AppWindowProps {
  title: string
  onClose: () => void
  children?: React.ReactNode
  initialWidth?: number
  initialHeight?: number
}

export function AppWindow({ title, onClose, children, initialWidth = 800, initialHeight = 600 }: AppWindowProps) {
  const [isMaximized, setIsMaximized] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const constraintsRef = useRef(null)

  const handleMinimize = () => {
    setIsMinimized(true)
  }

  const handleMaximize = () => {
    setIsMaximized(!isMaximized)
    if (isMaximized) {
      setPosition({ x: 0, y: 0 })
    }
  }

  if (isMinimized) {
    return null
  }

  return (
    <>
      <div ref={constraintsRef} className="absolute inset-0 pointer-events-none" />

      <motion.div
        className={`absolute z-20 bg-black/10 backdrop-blur-xl rounded-lg overflow-hidden border border-white/20 ${
          isMaximized ? "inset-0 rounded-none" : ""
        }`}
        style={
          !isMaximized
            ? {
                width: initialWidth,
                height: initialHeight,
                top: "50%",
                left: "50%",
                x: position.x,
                y: position.y,
                transform: "translate(-50%, -50%)",
              }
            : {}
        }
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        drag={!isMaximized}
        dragConstraints={constraintsRef}
        dragElastic={0}
        dragMomentum={false}
        onDragEnd={(_, info) => {
          setPosition({
            x: position.x + info.offset.x,
            y: position.y + info.offset.y,
          })
        }}
      >
        <div className="flex items-center justify-between p-2 bg-black/20 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Image
              src={`/images/${title.toLowerCase().replace(/\s+/g, "-")}.png`}
              alt={title}
              width={16}
              height={16}
              className="w-4 h-4"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = "/images/file-explorer.png"
              }}
            />
            <span className="text-white text-sm">{title}</span>
          </div>

          <div className="flex items-center">
            <button className="p-1.5 hover:bg-white/10 rounded-md transition-all" onClick={handleMinimize}>
              <Minus className="w-3.5 h-3.5 text-white" />
            </button>
            <button className="p-1.5 hover:bg-white/10 rounded-md transition-all" onClick={handleMaximize}>
              <Maximize2 className="w-3.5 h-3.5 text-white" />
            </button>
            <button className="p-1.5 hover:bg-red-500 rounded-md transition-all" onClick={onClose}>
              <X className="w-3.5 h-3.5 text-white" />
            </button>
          </div>
        </div>

        <div className="h-[calc(100%-40px)] overflow-auto">
          {children || (
            <div className="p-4 h-full flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="text-xl font-medium mb-2">{title}</h3>
                <p className="text-white/70">Application content would appear here.</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </>
  )
}
