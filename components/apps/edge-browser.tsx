"use client"

import { useState } from "react"
import Image from "next/image"
import {
    Search,
    ChevronLeft,
    ChevronRight,
    RotateCw,
    Plus,
    X,
    Star,
    Share,
    MoreHorizontal,
    Settings,
    Mic,
} from "lucide-react"

export function EdgeBrowserApp() {
    const [activeTab, setActiveTab] = useState("New Tab")
    const [searchQuery, setSearchQuery] = useState("")

    const tabs = [
        { id: "excel", name: "Excel", icon: "/images/IconExel.png" },
        { id: "newtab", name: "New Tab", icon: "/images/IconEdge.png", active: true },
        { id: "powerpoint", name: "PowerPoint", icon: "/images/IconPowerP.png" },
        { id: "buy", name: "Buy in a Fly", icon: "/images/IconEdge.png" },
        { id: "glance", name: "Windows Glance", icon: "/images/IconWindows.png" },
        { id: "word", name: "Word", icon: "/images/IconWord.png" },
    ]

    const shortcuts = [
        { name: "Facebook", icon: "/images/edge/facebook.png", color: "#1877F2" },
        { name: "Notebook", icon: "/images/edge/notebook.png", color: "#00A82D" },
        { name: "Type files", icon: "/images/edge/typefiles.png", color: "#0078D4" },
        { name: "Wikipedia", icon: "/images/edge/wikipedia.png", color: "#000000" },
        { name: "Walmart", icon: "/images/edge/walmart.png", color: "#0071DC" },
        { name: "AutoZip", icon: "/images/edge/autozip.png", color: "#FF4D4D" },
        { name: "Spotify", icon: "/images/edge/spotify.png", color: "#1DB954" },
        { name: "Add shortcut", icon: "/images/edge/add.png", color: "#CCCCCC" },
    ]

    const categories = ["My feed", "Coronavirus", "News", "Sports", "Money", "Weather", "Traffic", "Shopping"]

    return (
        <div className="flex flex-col h-full bg-white text-black">
            {/* Top navigation bar */}
            <div className="flex items-center p-1 px-2 bg-[#f3f3f3] border-b border-[#e0e0e0]">
                <div className="flex items-center gap-1">
                    <button className="p-1 hover:bg-[#e0e0e0] rounded-sm">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button className="p-1 hover:bg-[#e0e0e0] rounded-sm">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                    <button className="p-1 hover:bg-[#e0e0e0] rounded-sm">
                        <RotateCw className="w-5 h-5" />
                    </button>
                </div>

                {/* Address bar */}
                <div className="flex-1 mx-2 relative">
                    <div className="flex items-center bg-[#f3f3f3] border border-[#e0e0e0] rounded-md px-2 py-1">
                        <Search className="w-4 h-4 text-gray-500 mr-2" />
                        <input
                            type="text"
                            placeholder="Search or enter web address"
                            className="bg-transparent border-none outline-none flex-1 text-sm"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Right controls */}
                <div className="flex items-center gap-1">
                    <button className="p-1 hover:bg-[#e0e0e0] rounded-sm">
                        <Star className="w-5 h-5" />
                    </button>
                    <button className="p-1 hover:bg-[#e0e0e0] rounded-sm">
                        <Share className="w-5 h-5" />
                    </button>
                    <button className="p-1 hover:bg-[#e0e0e0] rounded-sm">
                        <MoreHorizontal className="w-5 h-5" />
                    </button>
                </div>

                {/* Window controls - these would be handled by the AppWindow component */}
            </div>

            {/* Main content area */}
            <div className="flex flex-1 overflow-hidden">
                {/* Left sidebar with tabs */}
                <div className="w-[200px] bg-[#f9f9f9] border-r border-[#e0e0e0] flex flex-col">
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            className={`flex items-center p-2 ${
                                tab.active ? "bg-[#e6e6e6]" : "hover:bg-[#f0f0f0]"
                            } border-b border-[#e0e0e0] group`}
                        >
                            <div className="w-5 h-5 mr-2">
                                <Image
                                    src={tab.icon || "/placeholder.svg"}
                                    alt={tab.name}
                                    width={20}
                                    height={20}
                                    className="w-5 h-5"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement
                                        target.src = "/placeholder.svg?height=20&width=20"
                                    }}
                                />
                            </div>
                            <span className="text-sm flex-1 truncate">{tab.name}</span>
                            <button className="opacity-0 group-hover:opacity-100 p-0.5 hover:bg-[#e0e0e0] rounded-sm">
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    ))}

                    {/* New tab button */}
                    <div className="flex items-center p-2 hover:bg-[#f0f0f0] border-b border-[#e0e0e0]">
                        <Plus className="w-5 h-5 mr-2" />
                        <span className="text-sm">New Tab</span>
                        <span className="ml-auto text-xs text-gray-500">Ctrl+T</span>
                    </div>
                </div>

                {/* Main content */}
                <div className="flex-1 flex flex-col relative">
                    {/* Background image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/edge/edge-background.jpg"
                            alt="Edge Background"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Content overlay */}
                    <div className="relative z-10 flex flex-col items-center pt-16 h-full">
                        {/* Microsoft logo */}
                        <div className="flex items-center mb-6">
                            <Image
                                src="/images/microsoft-logo.png"
                                alt="Microsoft"
                                width={120}
                                height={25}
                                className="h-6"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement
                                    target.src = "/placeholder.svg?height=25&width=120"
                                }}
                            />
                        </div>

                        {/* Search bar */}
                        <div className="w-[550px] bg-white rounded-full shadow-md mb-16 flex items-center p-1 pl-4">
                            <input type="text" placeholder="Search the web" className="flex-1 border-none outline-none text-sm" />
                            <button className="p-2 hover:bg-[#f0f0f0] rounded-full">
                                <Mic className="w-4 h-4 text-gray-500" />
                            </button>
                            <button className="p-2 hover:bg-[#f0f0f0] rounded-full">
                                <Settings className="w-4 h-4 text-gray-500" />
                            </button>
                            <div className="mx-1 h-5 border-r border-[#e0e0e0]"></div>
                            <button className="p-2 hover:bg-[#f0f0f0] rounded-full">
                                <Image
                                    src="/images/edge/bing.png"
                                    alt="Bing"
                                    width={16}
                                    height={16}
                                    className="w-4 h-4"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement
                                        target.src = "/placeholder.svg?height=16&width=16"
                                    }}
                                />
                            </button>
                            <button className="p-2 bg-[#f3f3f3] rounded-full">
                                <Search className="w-4 h-4 text-gray-500" />
                            </button>
                        </div>

                        {/* Edge logo */}
                        <div className="mb-16">
                            <Image
                                src="/images/edge/edge-logo.png"
                                alt="Edge"
                                width={120}
                                height={120}
                                className="w-28 h-28"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement
                                    target.src = "/placeholder.svg?height=120&width=120"
                                }}
                            />
                        </div>

                        {/* Shortcuts */}
                        <div className="grid grid-cols-8 gap-4 mb-auto">
                            {shortcuts.map((shortcut, index) => (
                                <div key={index} className="flex flex-col items-center">
                                    <div
                                        className="w-12 h-12 rounded-md flex items-center justify-center mb-2"
                                        style={{ backgroundColor: shortcut.name === "Add shortcut" ? "#f3f3f3" : "white" }}
                                    >
                                        <Image
                                            src={shortcut.icon || "/placeholder.svg"}
                                            alt={shortcut.name}
                                            width={24}
                                            height={24}
                                            className="w-6 h-6"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement
                                                target.src = "/placeholder.svg?height=24&width=24"
                                            }}
                                        />
                                    </div>
                                    <span className="text-xs text-center">{shortcut.name}</span>
                                </div>
                            ))}
                        </div>

                        {/* Bottom navigation */}
                        <div className="w-full mt-auto bg-[#f3f3f3] p-2 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                {categories.map((category, index) => (
                                    <button key={index} className="text-sm hover:underline">
                                        {category}
                                    </button>
                                ))}
                                <button className="text-sm">
                                    <MoreHorizontal className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="flex items-center text-sm bg-[#e6e6e6] px-2 py-1 rounded-sm">
                                    <Settings className="w-4 h-4 mr-1" />
                                    Personalize
                                </button>
                                <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs">
                                    J
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}