"use client"

import { useEffect, useRef } from "react"
import { ChevronRight, RefreshCw, Plus, Monitor, Paintbrush, Terminal, MoreHorizontal, Grid } from "lucide-react"
import { motion } from "framer-motion"

interface ContextMenuProps {
    x: number
    y: number
    onClose: () => void
}

export function ContextMenu({ x, y, onClose }: ContextMenuProps) {
    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                onClose()
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [onClose])

    const menuItems = [
        { id: "view", label: "View", icon: <Grid className="w-4 h-4" />, hasSubmenu: true },
        { id: "sort", label: "Sort by", icon: <ChevronRight className="w-4 h-4 rotate-90" />, hasSubmenu: true },
        { id: "refresh", label: "Refresh", icon: <RefreshCw className="w-4 h-4" /> },
        { id: "new", label: "New", icon: <Plus className="w-4 h-4" />, hasSubmenu: true },
        { id: "display", label: "Display settings", icon: <Monitor className="w-4 h-4" /> },
        { id: "personalize", label: "Personalize", icon: <Paintbrush className="w-4 h-4" /> },
        { id: "terminal", label: "Open in Terminal", icon: <Terminal className="w-4 h-4" /> },
        { id: "more", label: "Show more options", icon: <MoreHorizontal className="w-4 h-4" />, shortcut: "Shift+F10" },
    ]

    return (
        <motion.div
            ref={menuRef}
            className="absolute z-50 bg-[#10192d] text-white rounded-lg shadow-lg overflow-hidden w-64"
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.1 }}
        >
            <div className="py-1">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        className="flex items-center w-full px-3 py-2.5 hover:bg-white/10 transition-colors text-left"
                    >
                        <div className="w-5 h-5 mr-3 flex items-center justify-center text-white/70">{item.icon}</div>
                        <span className="flex-1">{item.label}</span>
                        {item.hasSubmenu && <ChevronRight className="w-4 h-4 text-white/70" />}
                        {item.shortcut && <span className="text-xs text-white/50 ml-2">{item.shortcut}</span>}
                    </button>
                ))}
            </div>
        </motion.div>
    )
}
