"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, TrendingUp, MoreHorizontal, X } from "lucide-react"
import Image from "next/image"

export function SearchPanel() {
    const [searchQuery, setSearchQuery] = useState("")
    const [isFocused, setIsFocused] = useState(false)

    const today = new Date()
    const options: Intl.DateTimeFormatOptions = { month: "long", day: "numeric" }
    const formattedDate = today.toLocaleDateString("en-US", options)

    const handleClearSearch = () => {
        setSearchQuery("")
    }

    return (
        <motion.div
            className="absolute bottom-14 left-0 w-[650px] bg-black/10 backdrop-blur-xl rounded-lg overflow-hidden z-30 border border-[#2d3646]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
        >
            <div className="p-4 border-b border-[#2d3646]">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Type here to search"
                        className={`w-full bg-[#1c2333] border ${
                            isFocused ? "border-[#4d5666] ring-1 ring-[#4d5666]" : "border-[#2d3646]"
                        } rounded-lg py-2.5 pl-10 pr-10 text-white outline-none transition-all duration-200`}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        autoFocus
                    />
                    <Search className="absolute left-3 top-2.5 w-5 h-5 text-white/70" />
                    {searchQuery && (
                        <button
                            onClick={handleClearSearch}
                            className="absolute right-3 top-2.5 text-white/70 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    )}
                </div>
            </div>

            <div className="flex h-full">

                <div className="w-[200px] p-4 border-r border-[#2d3646]">
                    <h3 className="text-white text-base font-medium mb-4">Recent</h3>

                    <div className="space-y-3">
                        <RecentApp name="Get Started" icon="/images/get-started.png" />
                        <RecentApp name="Photos" icon="/images/IconPhotos.png" />
                        <RecentApp name="Microsoft Edge" icon="/images/edge.png" />
                        <RecentApp name="April Reading Book Club" icon="/images/IconWord.png" />
                        <RecentApp name="Microsoft Store" icon="/images/IconStore.png" />
                        <RecentApp name="Settings" icon="/images/IconSetting.png" />
                        <RecentApp name="Family Reunion" icon="/images/IconPowerP.png" />
                        <RecentApp name="Word" icon="/images/IconWord.png" />
                        <RecentApp name="Paint" icon="/images/paint.png" />
                    </div>
                </div>

                <div className="flex-1 p-4">
                    <div className="flex justify-between items-center mb-4">
                        <div className="text-white/70 text-sm">Today • {formattedDate}</div>
                        <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-[#3d4656] flex items-center justify-center">
                                <Search className="w-4 h-4 text-white/70" />
                            </div>
                            <button className="p-1 hover:bg-[#3d4656] rounded-full transition-all">
                                <MoreHorizontal className="w-5 h-5 text-white/70" />
                            </button>
                            <div className="w-7 h-7 rounded-full overflow-hidden">
                                <Image
                                    src="/images/profil.WEBP"
                                    alt="User"
                                    width={28}
                                    height={28}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement
                                        target.src = "/placeholder.svg?height=28&width=28"
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    {searchQuery ? (

                        <div className="py-4">
                            <h3 className="text-white text-lg font-medium mb-4">Search results for "{searchQuery}"</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-[#1c2333] rounded-lg p-4 flex items-center gap-3">
                                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                                        <Image src="/images/IconSetting.png" alt="Settings" width={40} height={40} className="w-10 h-10" />
                                    </div>
                                    <div>
                                        <div className="text-white text-sm font-medium">Settings</div>
                                        <div className="text-white/70 text-xs">System settings</div>
                                    </div>
                                </div>

                                <div className="bg-[#1c2333] rounded-lg p-4 flex items-center gap-3">
                                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
                                        <Image src="/images/IconWord.png" alt="Word" width={40} height={40} className="w-10 h-10" />
                                    </div>
                                    <div>
                                        <div className="text-white text-sm font-medium">Word</div>
                                        <div className="text-white/70 text-xs">Microsoft Office</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="mb-4 relative rounded-lg overflow-hidden">
                                <div className="aspect-[16/9] relative">
                                    <Image
                                        src="/images/earth-day.jpg"
                                        alt="Earth Day"
                                        fill
                                        className="object-cover"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement
                                            target.src = "/placeholder.svg?height=300&width=500"
                                        }}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                        <h2 className="text-3xl font-bold text-white">Earth Day</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-3 mb-6">
                                <FeatureCard title="Outdoors activities nearby" image="/images/outdoors.jpg" />
                                <FeatureCard title="On this day: 1970" image="/images/history.jpg" />
                                <FeatureCard title="Give with Bing" image="/images/bing.jpg" />
                            </div>

                            <div className="bg-[#1c2333] rounded-lg p-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <TrendingUp className="w-4 h-4 text-white/70" />
                                    <h3 className="text-white text-sm font-medium">Trending searches</h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    <TrendingTag text="soccer games" />
                                    <TrendingTag text="largest flier fossil" />
                                    <TrendingTag text="april showers" />
                                    <TrendingTag text="mother's day" />
                                    <TrendingTag text="flight delays" />
                                    <TrendingTag text="earth day facts" />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

function RecentApp({ name, icon }: { name: string; icon: string }) {
    return (
        <button className="flex items-center gap-3 p-2 rounded-md hover:bg-[#2d3646] transition-all w-full">
            <div className="w-6 h-6 flex-shrink-0">
                <Image
                    src={icon || "/placeholder.svg"}
                    alt={name}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/placeholder.svg?height=24&width=24"
                    }}
                />
            </div>
            <span className="text-white text-sm truncate">{name}</span>
        </button>
    )
}

function FeatureCard({ title, image }: { title: string; image: string }) {
    return (
        <div className="relative rounded-lg overflow-hidden group cursor-pointer">
            <div className="aspect-[4/3] relative">
                <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/placeholder.svg?height=150&width=200"
                    }}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white text-sm">{title}</p>
                </div>
            </div>
        </div>
    )
}

function TrendingTag({ text }: { text: string }) {
    return (
        <button className="bg-[#2d3646] hover:bg-[#3d4656] transition-all rounded-full px-3 py-1 text-white text-xs">
            {text}
        </button>
    )
}