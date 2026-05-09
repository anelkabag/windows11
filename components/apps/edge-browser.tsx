"use client"

import { useState } from "react"
import {
    Search,
    ChevronLeft,
    ChevronRight,
    RotateCw,
    Plus,
    X,
    Star,
    Share2,
    MoreHorizontal,
    Settings,
    Mic,
    Bell,
    Grid3x3,
    AlertTriangle,
    ChevronUp,
    LayoutList,
    LayoutGrid,
    Menu,
} from "lucide-react"

const MicrosoftLogo = () => (
    <div className="flex items-center gap-3">
        <div className="grid grid-cols-2 gap-0.5 w-8 h-8">
            <div className="bg-[#F25022]" />
            <div className="bg-[#7FBA00]" />
            <div className="bg-[#00A4EF]" />
            <div className="bg-[#FFB900]" />
        </div>
        <span className="text-3xl font-semibold text-gray-700 tracking-tight">Microsoft</span>
    </div>
)

const shortcuts = [
    { name: "Office", color: "#D83B01", letter: "O", bg: "#fff", icon: "office" },
    { name: "AliExpress", color: "#FF4000", letter: "A", bg: "#fff", icon: "ali" },
    { name: "Booking.com", color: "#003580", letter: "B", bg: "#fff", icon: "booking" },
    { name: "Magazines", color: "#00A1C9", letter: "M", bg: "#fff", icon: "mag" },
    { name: "Rentalcars.com", color: "#1E3A5F", letter: "R", bg: "#fff", icon: "rental" },
    { name: "Facebook", color: "#1877F2", letter: "f", bg: "#fff", icon: "fb" },
    { name: "Outlook", color: "#0078D4", letter: "O", bg: "#fff", icon: "outlook" },
    { name: "LinkedIn", color: "#0A66C2", letter: "in", bg: "#fff", icon: "li" },
]

const ShortcutIcon = ({ item }: { item: typeof shortcuts[0] }) => {
    const iconMap: Record<string, JSX.Element> = {
        office: (
            <svg viewBox="0 0 32 32" className="w-8 h-8">
                <rect width="32" height="32" rx="4" fill="#D83B01" />
                <text x="16" y="23" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="Arial">O</text>
            </svg>
        ),
        ali: (
            <svg viewBox="0 0 32 32" className="w-8 h-8">
                <rect width="32" height="32" rx="4" fill="#FF4000" />
                <text x="16" y="22" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="Arial">Ali</text>
            </svg>
        ),
        booking: (
            <svg viewBox="0 0 32 32" className="w-8 h-8">
                <rect width="32" height="32" rx="4" fill="#003580" />
                <text x="16" y="23" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="Arial">B</text>
            </svg>
        ),
        mag: (
            <svg viewBox="0 0 32 32" className="w-8 h-8">
                <rect width="32" height="32" rx="4" fill="#00A1C9" />
                <text x="16" y="21" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold" fontFamily="Arial">W</text>
            </svg>
        ),
        rental: (
            <svg viewBox="0 0 32 32" className="w-8 h-8">
                <rect width="32" height="32" rx="4" fill="#1E3A5F" />
                <text x="16" y="21" textAnchor="middle" fill="white" fontSize="11" fontFamily="Arial">🚗</text>
            </svg>
        ),
        fb: (
            <svg viewBox="0 0 32 32" className="w-8 h-8">
                <rect width="32" height="32" rx="4" fill="#1877F2" />
                <text x="16" y="24" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold" fontFamily="Georgia">f</text>
            </svg>
        ),
        outlook: (
            <svg viewBox="0 0 32 32" className="w-8 h-8">
                <rect width="32" height="32" rx="4" fill="#0078D4" />
                <text x="16" y="21" textAnchor="middle" fill="white" fontSize="11" fontFamily="Arial">📧</text>
            </svg>
        ),
        li: (
            <svg viewBox="0 0 32 32" className="w-8 h-8">
                <rect width="32" height="32" rx="4" fill="#0A66C2" />
                <text x="16" y="23" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="Arial">in</text>
            </svg>
        ),
    }

    return iconMap[item.icon] || (
        <div className="w-8 h-8 rounded flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: item.color }}>
            {item.letter}
        </div>
    )
}

const feedCategories = ["My Feed", "War in Ukraine", "Coronavirus", "Africa", "Asia", "Australasia", "Europe"]

export function EdgeBrowserApp() {
    const [searchQuery, setSearchQuery] = useState("")
    const [activeTab] = useState("New tab")

    return (
        <div className="flex flex-col h-full bg-white text-black font-[Segoe_UI,system-ui,sans-serif] select-none overflow-hidden">

            {/* Chrome-style title bar */}
            <div className="flex items-center bg-[#dee1e6] h-9 px-2 gap-1 shrink-0">
                <div className="flex items-center gap-0.5 mr-1">
                    <button className="p-1 hover:bg-black/10 rounded-sm"><Grid3x3 className="w-4 h-4 text-gray-600" /></button>
                </div>
                {/* Tab */}
                <div className="flex items-center bg-white rounded-t-lg h-9 px-3 gap-2 min-w-[160px] max-w-[240px] border-t border-l border-r border-gray-300 relative -mb-0 z-10">
                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 16 16" fill="none">
                        <path d="M0 8C0 3.6 3.6 0 8 0s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8z" fill="#1EBBFF" />
                        <path d="M8 3C5.2 3 3 5.2 3 8s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z" fill="#1360C4" />
                        <path d="M8 5.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" fill="#1EBBFF" />
                    </svg>
                    <span className="text-xs flex-1 truncate text-gray-700">New tab</span>
                    <button className="p-0.5 hover:bg-gray-200 rounded-sm"><X className="w-3.5 h-3.5 text-gray-500" /></button>
                </div>
                <button className="p-1.5 hover:bg-black/10 rounded-sm ml-1"><Plus className="w-4 h-4 text-gray-600" /></button>
                {/* Window controls */}
                <div className="ml-auto flex items-center gap-0">
                    <button className="w-11 h-9 flex items-center justify-center hover:bg-black/10 text-gray-600 text-sm">─</button>
                    <button className="w-11 h-9 flex items-center justify-center hover:bg-black/10 text-gray-600 text-sm">□</button>
                    <button className="w-11 h-9 flex items-center justify-center hover:bg-red-500 hover:text-white text-gray-600 text-sm">✕</button>
                </div>
            </div>

            {/* Navigation bar */}
            <div className="flex items-center bg-[#f3f3f3] border-b border-[#e0e0e0] h-10 px-2 gap-1 shrink-0">
                <button className="p-1.5 hover:bg-black/10 rounded-sm text-gray-400"><ChevronLeft className="w-4 h-4" /></button>
                <button className="p-1.5 hover:bg-black/10 rounded-sm text-gray-600"><ChevronRight className="w-4 h-4" /></button>
                <button className="p-1.5 hover:bg-black/10 rounded-sm text-gray-600"><RotateCw className="w-4 h-4" /></button>

                {/* Address bar */}
                <div className="flex-1 mx-2 bg-white border border-[#d0d0d0] rounded-full flex items-center px-4 h-7 shadow-sm">
                    <Search className="w-3.5 h-3.5 text-gray-400 mr-2 shrink-0" />
                    <input
                        type="text"
                        placeholder="Search or enter web address"
                        className="bg-transparent border-none outline-none flex-1 text-sm text-gray-700"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {/* Right icons in address bar */}
                    <button className="p-0.5 hover:bg-gray-100 rounded-sm"><span className="text-gray-400 text-xs">🔒</span></button>
                    <button className="p-0.5 hover:bg-gray-100 rounded-sm ml-1">
                        <svg className="w-4 h-4 text-gray-400" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z"/><path d="M8 4a1 1 0 011 1v3.586l2.207 2.207a1 1 0 01-1.414 1.414l-2.5-2.5A1 1 0 017 9V5a1 1 0 011-1z"/></svg>
                    </button>
                    <button className="p-0.5 hover:bg-gray-100 rounded-sm ml-1"><Star className="w-4 h-4 text-gray-400" /></button>
                </div>

                {/* Right toolbar icons */}
                <div className="flex items-center gap-0.5">
                    {/* Copilot icon */}
                    <button className="p-1.5 hover:bg-black/10 rounded-sm relative">
                        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none">
                            <circle cx="10" cy="10" r="9" stroke="#1EBBFF" strokeWidth="1.5" fill="none" />
                            <path d="M6 10.5C6 8.3 7.8 6.5 10 6.5s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" fill="#1360C4" />
                        </svg>
                    </button>
                    <button className="p-1.5 hover:bg-black/10 rounded-sm"><Star className="w-4 h-4 text-gray-600" /></button>
                    <button className="p-1.5 hover:bg-black/10 rounded-sm">
                        <svg className="w-4 h-4 text-gray-600" viewBox="0 0 16 16" fill="currentColor"><path d="M3 2a1 1 0 000 2h10a1 1 0 100-2H3zM2 7a1 1 0 011-1h10a1 1 0 110 2H3a1 1 0 01-1-1zM3 11a1 1 0 100 2h10a1 1 0 100-2H3z"/></svg>
                    </button>
                    <button className="p-1.5 hover:bg-black/10 rounded-sm relative">
                        <Bell className="w-4 h-4 text-gray-600" />
                        <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-red-500 rounded-full text-[9px] text-white flex items-center justify-center font-bold">2</span>
                    </button>
                    <button className="p-1.5 hover:bg-black/10 rounded-sm"><Settings className="w-4 h-4 text-gray-600" /></button>
                    <button className="p-1.5 hover:bg-black/10 rounded-sm">
                        <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">J</div>
                    </button>
                    <button className="p-1.5 hover:bg-black/10 rounded-sm"><MoreHorizontal className="w-4 h-4 text-gray-600" /></button>
                </div>
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col bg-[#f5f5f5] overflow-hidden relative">

                {/* Alert banner */}
                <div className="flex items-center justify-between px-4 py-2 bg-[#f5f5f5] shrink-0">
                    <div className="flex items-center gap-2">
                        <Grid3x3 className="w-4 h-4 text-gray-500" />
                        <AlertTriangle className="w-4 h-4 text-yellow-500 fill-yellow-400" />
                        <span className="text-sm text-gray-700">Extreme high temperature - Yellow</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="relative">
                            <Bell className="w-5 h-5 text-gray-600" />
                            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[9px] text-white flex items-center justify-center font-bold">2</span>
                        </button>
                        <Settings className="w-5 h-5 text-gray-600" />
                    </div>
                </div>

                {/* Center content */}
                <div className="flex-1 flex flex-col items-center justify-start pt-12 px-8">

                    {/* Microsoft logo */}
                    <div className="mb-8">
                        <MicrosoftLogo />
                    </div>

                    {/* Search bar */}
                    <div className="w-full max-w-[680px] flex items-center bg-white border border-gray-200 rounded-full shadow-sm mb-3 overflow-hidden">
                        <input
                            type="text"
                            placeholder="Search the web"
                            className="flex-1 px-5 py-2.5 text-sm text-gray-700 border-none outline-none bg-transparent"
                        />
                        <button className="p-2.5 hover:bg-gray-100 rounded-full mr-1">
                            <Mic className="w-4 h-4 text-[#0078D4]" />
                        </button>
                        <button className="bg-[#0078D4] hover:bg-[#006cc1] m-1 px-4 py-2 rounded-full flex items-center justify-center transition-colors">
                            <Search className="w-4 h-4 text-white" />
                        </button>
                    </div>

                    {/* Quick search suggestions */}
                    <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
                        <button className="hover:text-gray-700 hover:underline">advaced firewall</button>
                        <button className="hover:text-gray-700 hover:underline">duckduckgo</button>
                        <button className="hover:text-gray-700 hover:underline">vlc</button>
                        <button className="hover:text-gray-700 hover:underline">windows insider</button>
                        <button className="hover:text-gray-700 hover:underline">filetype: pdf</button>
                        <button className="hover:text-gray-700"><MoreHorizontal className="w-4 h-4" /></button>
                    </div>

                    {/* Collapse arrow */}
                    <div className="flex justify-end w-full max-w-[680px] mb-2">
                        <button className="hover:bg-gray-200 rounded-full p-1">
                            <ChevronUp className="w-4 h-4 text-gray-500" />
                        </button>
                    </div>

                    {/* Shortcuts */}
                    <div className="flex items-center gap-6">
                        {shortcuts.map((shortcut, index) => (
                            <div key={index} className="flex flex-col items-center gap-2 cursor-pointer group">
                                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow border border-gray-100">
                                    <ShortcutIcon item={shortcut} />
                                </div>
                                <span className="text-xs text-gray-600 text-center max-w-[60px] truncate">{shortcut.name}</span>
                            </div>
                        ))}
                        <div className="flex flex-col items-center gap-2 cursor-pointer group">
                            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow border border-gray-100">
                                <Plus className="w-5 h-5 text-gray-400" />
                            </div>
                            <span className="text-xs text-gray-400 text-center">Add</span>
                        </div>
                    </div>
                </div>

                {/* Bottom feed bar */}
                <div className="shrink-0 bg-[#f3f3f3] border-t border-[#e0e0e0] flex items-center px-4 py-2 gap-3">
                    <button className="p-1 hover:bg-gray-200 rounded-sm">
                        <Menu className="w-4 h-4 text-gray-600" />
                    </button>
                    <div className="flex items-center gap-1">
                        {feedCategories.map((cat, i) => (
                            <button
                                key={i}
                                className={`flex items-center gap-1.5 px-2 py-0.5 text-sm rounded-sm whitespace-nowrap ${
                                    i === 0 ? "font-semibold text-black" : "text-gray-600 hover:bg-gray-200"
                                }`}
                            >
                                {cat === "War in Ukraine" && <span className="text-xs">🇺🇦</span>}
                                {cat}
                            </button>
                        ))}
                        <button className="p-1 hover:bg-gray-200 rounded-sm">
                            <MoreHorizontal className="w-4 h-4 text-gray-500" />
                        </button>
                    </div>
                    <div className="ml-auto flex items-center gap-2">
                        <button className="flex items-center gap-1.5 border border-gray-300 bg-white rounded-full px-3 py-1 text-sm text-gray-600 hover:bg-gray-50">
                            <span className="text-xs">✏️</span> Personalize
                        </button>
                        <button className="flex items-center gap-1.5 border border-gray-300 bg-white rounded px-2 py-1 text-sm text-gray-600 hover:bg-gray-50">
                            Headings only
                            <ChevronUp className="w-3 h-3 rotate-180" />
                        </button>
                        <button className="p-1.5 border border-gray-300 bg-white rounded hover:bg-gray-50">
                            <LayoutGrid className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-1.5 border border-gray-300 bg-white rounded hover:bg-gray-50">
                            <LayoutList className="w-4 h-4 text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}