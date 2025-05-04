"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"

export function MicrosoftStoreApp() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")

  const slides = [
    {
      title: "Roblox",
      subtitle: "Discover new adventures and play today",
      tag: "Free",
      image: "/images/store/roblox-banner.jpg",
    },
    {
      title: "Microsoft 365",
      subtitle: "Boost your productivity",
      tag: "Subscription",
      image: "/images/store/microsoft-365-banner.jpg",
    },
  ]

  const games = [
    {
      title: "Microsoft Flight Simulator",
      image: "/images/store/flight-simulator.jpg",
      tag: "Included with Game Pass",
    },
    {
      title: "Minecraft Java & Bedrock",
      image: "/images/store/minecraft.jpg",
      tag: "Included with Game Pass",
    },
    {
      title: "Cooking Diary",
      image: "/images/store/cooking-diary.jpg",
      tag: "Cooking Game",
    },
    {
      title: "Roblox",
      image: "/images/store/roblox.jpg",
      tag: "",
    },
    {
      title: "Death Stranding",
      image: "/images/store/death-stranding.jpg",
      tag: "",
    },
    {
      title: "Age of Empires IV",
      image: "/images/store/age-of-empires.jpg",
      tag: "Included with Game Pass",
    },
    {
      title: "Little Kitty, Big City",
      image: "/images/store/little-kitty.jpg",
      tag: "Included with Game Pass",
    },
    {
      title: "Age of Empires IV: Anniversary",
      image: "/images/store/age-of-empires-2.jpg",
      tag: "Included with Game Pass",
    },
  ]

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="flex flex-col h-full bg-[#202020] text-white">
      {/* Header with search */}
      <div className="flex items-center p-2 px-4 gap-4 bg-[#2D2D2D]">
        <Image src="/images/store.png" alt="Microsoft Store" width={24} height={24} className="w-6 h-6" />
        <span className="font-medium">Microsoft Store</span>
        <div className="relative flex-1 mx-4">
          <input
            type="text"
            placeholder="Search apps, games, movies, and more"
            className="w-full bg-[#3B3B3B] rounded-sm py-1.5 px-3 pr-8 text-sm outline-none border-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute right-2 top-1.5 w-4 h-4 text-gray-400" />
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-400 flex-shrink-0"></div>
      </div>

      {/* Sidebar and content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-16 bg-[#2D2D2D] flex flex-col items-center py-2">
          <SidebarItem icon="/images/store/home-icon.png" label="Home" active />
          <SidebarItem icon="/images/store/gaming-icon.png" label="Gaming" />
          <SidebarItem icon="/images/store/apps-icon.png" label="Apps" />
          <SidebarItem icon="/images/store/new-icon.png" label="What's New" />
          <SidebarItem icon="/images/store/downloads-icon.png" label="Downloads" />
          <SidebarItem icon="/images/store/library-icon.png" label="Library" />
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Featured carousel */}
          <div className="relative mb-8">
            <div className="flex gap-4">
              {/* Main featured item */}
              <div className="relative flex-1 h-72 rounded-lg overflow-hidden">
                <Image
                  src={slides[activeSlide].image || "/placeholder.svg"}
                  alt={slides[activeSlide].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  {slides[activeSlide].tag && (
                    <span className="inline-block bg-[#333333] text-white text-xs px-2 py-1 rounded mb-2">
                      {slides[activeSlide].tag}
                    </span>
                  )}
                  <h2 className="text-3xl font-bold mb-1">{slides[activeSlide].title}</h2>
                  <p className="text-sm text-gray-200">{slides[activeSlide].subtitle}</p>
                  <button className="mt-3 flex items-center gap-1 bg-[#333333] hover:bg-[#444444] transition-colors px-3 py-1 rounded text-sm">
                    See details
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Side featured items */}
              <div className="w-80 flex flex-col gap-4">
                <div className="h-[140px] bg-blue-900 rounded-lg relative overflow-hidden">
                  <Image
                    src="/images/store/microsoft-365-banner.jpg"
                    alt="Microsoft 365"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-xl font-bold">Microsoft 365</h3>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1 h-[140px] bg-purple-900 rounded-lg relative overflow-hidden">
                    <Image
                      src="/images/store/raid-shadow-legends.jpg"
                      alt="RAID: Shadow Legends"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-xs">RAID: Shadow Legends</p>
                    </div>
                  </div>
                  <div className="flex-1 h-[140px] bg-orange-900 rounded-lg relative overflow-hidden">
                    <Image src="/images/store/cooking-fever.jpg" alt="Cooking Fever" fill className="object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-xs">Cooking Fever</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel controls */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center"
              onClick={nextSlide}
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === activeSlide ? "bg-white" : "bg-white/50"}`}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
          </div>

          {/* Best selling games */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center">
                Best selling games
                <ChevronRight className="w-5 h-5 ml-1" />
              </h2>
              <div className="flex gap-2">
                <button className="w-8 h-8 bg-[#333333] rounded-full flex items-center justify-center">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className="w-8 h-8 bg-[#333333] rounded-full flex items-center justify-center">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-8 gap-4">
              {games.map((game, index) => (
                <div key={index} className="flex flex-col">
                  <div className="relative aspect-[3/4] rounded-md overflow-hidden mb-2">
                    <Image src={game.image || "/placeholder.svg"} alt={game.title} fill className="object-cover" />
                    {game.tag && (
                      <div className="absolute top-0 left-0 right-0 bg-green-700 text-[10px] py-0.5 px-1">
                        {game.tag}
                      </div>
                    )}
                  </div>
                  <h3 className="text-xs font-medium line-clamp-2">{game.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SidebarItem({ icon, label, active = false }: { icon: string; label: string; active?: boolean }) {
  return (
    <div className="flex flex-col items-center mb-6 relative">
      <div
        className={`w-10 h-10 flex items-center justify-center rounded-md ${
          active ? "bg-[#0078D7]" : "hover:bg-[#3D3D3D] transition-colors"
        }`}
      >
        <Image src={icon || "/placeholder.svg"} alt={label} width={20} height={20} className="w-5 h-5" />
      </div>
      <span className="text-[10px] mt-1">{label}</span>
      {active && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#0078D7] rounded-r-full" />}
    </div>
  )
}
