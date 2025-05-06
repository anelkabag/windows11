"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
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
    const [isDragging, setIsDragging] = useState(false)
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const handleMinimize = () => {
        setIsMinimized(true)
    }

    const handleMaximize = () => {
        setIsMaximized(!isMaximized)
        if (isMaximized) {
            setPosition({ x: 0, y: 0 })
        }
    }

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isMaximized && isMounted) {
            setIsDragging(true)
            setDragStart({
                x: e.clientX - position.x,
                y: e.clientY - position.y,
            })
        }
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isDragging && !isMaximized && isMounted) {
            setPosition({
                x: e.clientX - dragStart.x,
                y: e.clientY - dragStart.y,
            })
        }
    }

    const handleMouseUp = () => {
        setIsDragging(false)
    }

    if (isMinimized) {
        return null
    }

    const windowStyle = !isMaximized
        ? {
            width: initialWidth,
            height: initialHeight,
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px)`,
        }
        : {}

    return (
        <div
            className={`fixed z-20 bg-black/10 backdrop-blur-xl rounded-lg overflow-hidden border border-white/20 ${
                isMaximized ? "inset-0 rounded-none" : ""
            }`}
            style={windowStyle}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="h-full w-full"
            >
                <div
                    className="flex items-center justify-between p-2 bg-black/20 border-b border-white/10 cursor-move"
                    onMouseDown={handleMouseDown}
                >
                    <div className="flex items-center gap-2">
                        <Image
                            src={`/images/${title.toLowerCase().replace(/\s+/g, "-")}.png`}
                            alt={title}
                            width={16}
                            height={16}
                            className="w-4 h-4"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement
                                target.src = "/images/IconWindows.png"
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
        </div>
    )
}
