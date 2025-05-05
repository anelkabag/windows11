"use client"

import { useState, useEffect, useRef } from "react"
import { Battery, Wifi, Volume2, BellRing, ChevronUp, Search } from "lucide-react"
import { AnimatePresence } from "framer-motion"
import Image from "next/image"

import { DesktopIcon } from "@/components/desktop-icon"
import { TaskbarIcon } from "@/components/taskbar-icon"
import { StartMenu } from "@/components/start-menu"
import { SearchPanel } from "@/components/search-panel"
import { NotificationsPanel } from "@/components/notifications-panel"
import { QuickSettingsPanel } from "@/components/quick-settings-panel"
import { AppWindow } from "@/components/app-window"
import { MicrosoftStoreApp } from "@/components/apps/microsoft-store"
import { SettingsApp } from "@/components/apps/settings-app"
import { FileExplorerApp } from "@/components/apps/file-explorer"

export default function Windows11() {
  const [startMenuOpen, setStartMenuOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState("")
  const [currentDate, setCurrentDate] = useState("")
  const [searchOpen, setSearchOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [quickSettingsOpen, setQuickSettingsOpen] = useState(false)
  const [activeWindow, setActiveWindow] = useState<string | null>(null)
  const [currentMedia, setCurrentMedia] = useState({
    title: "Cloner Windows 11 dans le navigateur...",
    author: "Anelka MD - Software Enginner",
    isPlaying: true,
  })
  const [brightness, setBrightness] = useState(75)
  const [volume, setVolume] = useState(50)

  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }))
      setCurrentDate(now.toLocaleDateString([], { month: "numeric", day: "numeric", year: "numeric" }))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setStartMenuOpen(false)
        setSearchOpen(false)
        setNotificationsOpen(false)
        setQuickSettingsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleStartMenu = () => {
    setStartMenuOpen(!startMenuOpen)
    setSearchOpen(false)
    setNotificationsOpen(false)
    setQuickSettingsOpen(false)
  }

  const toggleSearch = () => {
    setSearchOpen(!searchOpen)
    setStartMenuOpen(false)
    setNotificationsOpen(false)
    setQuickSettingsOpen(false)
  }

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen)
    setStartMenuOpen(false)
    setSearchOpen(false)
    setQuickSettingsOpen(false)
  }

  const toggleQuickSettings = () => {
    setQuickSettingsOpen(!quickSettingsOpen)
    setStartMenuOpen(false)
    setSearchOpen(false)
    setNotificationsOpen(false)
  }

  const openWindow = (app: string) => {
    setActiveWindow(app)
    setStartMenuOpen(false)
    setSearchOpen(false)
  }

  const closeWindow = () => {
    setActiveWindow(null)
  }

  const toggleMediaPlayback = () => {
    setCurrentMedia((prev) => ({ ...prev, isPlaying: !prev.isPlaying }))
  }

  const renderAppContent = () => {
    switch (activeWindow) {
      case "Microsoft Store":
        return <MicrosoftStoreApp />
      case "Settings":
        return <SettingsApp />
      case "File Explorer":
        return <FileExplorerApp />
      default:
        return null
    }
  }

  const getWindowDimensions = () => {
    switch (activeWindow) {
      case "Microsoft Store":
        return { width: 1000, height: 700 }
      case "Settings":
        return { width: 1000, height: 700 }
      case "File Explorer":
        return { width: 1000, height: 700 }
      default:
        return { width: 800, height: 600 }
    }
  }

  const { width: windowWidth, height: windowHeight } = getWindowDimensions()

  return (
      <div className="relative h-screen w-full overflow-hidden bg-[#0078D7] select-none">
        <div className="absolute inset-0 z-0">
          <Image src="/images/background.png" alt="Windows 11 Wallpaper" fill className="object-cover" priority />
        </div>

        <div className="absolute top-4 left-4 z-10 flex flex-col gap-6">
          <DesktopIcon name="Recycle Bin" icon="/images/recycle-bin.png" onClick={() => openWindow("Recycle Bin")} />
          <DesktopIcon name="Microsoft Edge" icon="/images/edge.png" onClick={() => openWindow("Microsoft Edge")} />
          <DesktopIcon name="File Explorer" icon="/images/IconFolder.png" onClick={() => openWindow("File Explorer")} />
          <DesktopIcon name="Settings" icon="/images/IconSetting.png" onClick={() => openWindow("Settings")} />
        </div>

        <AnimatePresence>
          {activeWindow && (
              <AppWindow title={activeWindow} onClose={closeWindow} initialWidth={windowWidth} initialHeight={windowHeight}>
                {renderAppContent()}
              </AppWindow>
          )}
        </AnimatePresence>

        <div className="absolute bottom-0 left-0 right-0 h-12 bg-black/30 backdrop-blur-xl z-20 flex items-center px-3 justify-between border-t border-white/10">
          <div className="flex items-center gap-1">
            <button
                onClick={toggleStartMenu}
                className={`p-2 rounded-md transition-all duration-200 ${startMenuOpen ? "bg-white/20" : "hover:bg-white/10"}`}
            >
              <Image src="/images/IconWindows.png" alt="Start" width={24} height={24} className="w-6 h-6" />
            </button>

            <button
                onClick={toggleSearch}
                className={`p-2 rounded-md transition-all duration-200 ${searchOpen ? "bg-white/20" : "hover:bg-white/10"}`}
            >
              <Search className="w-5 h-5 text-white" />
            </button>

            <div className="h-6 mx-1 border-r border-white/20" />

            <TaskbarIcon
                icon="/images/edge.png"
                active={activeWindow === "Microsoft Edge"}
                onClick={() => openWindow("Microsoft Edge")}
            />
            <TaskbarIcon
                icon="/images/IconFolder.png"
                active={activeWindow === "File Explorer"}
                onClick={() => openWindow("File Explorer")}
            />
            <TaskbarIcon
                icon="/images/IconStore.png"
                active={activeWindow === "Microsoft Store"}
                onClick={() => openWindow("Microsoft Store")}
            />
            <TaskbarIcon
                icon="/images/IconSetting.png"
                active={activeWindow === "Settings"}
                onClick={() => openWindow("Settings")}
            />
          </div>

          <div className="flex items-center gap-1" ref={wrapperRef}>
            <button className="p-1 rounded-md hover:bg-white/10 transition-all duration-200">
              <ChevronUp className="w-4 h-4 text-white" />
            </button>
            <button className="p-1 rounded-md hover:bg-white/10 transition-all duration-200">
              <span className="text-white text-xs ml-1">ENG</span>
            </button>
            <button
                onClick={toggleQuickSettings}
                className={`p-1 rounded-md ${quickSettingsOpen ? "bg-white/20" : "hover:bg-white/10"} transition-all duration-200 flex items-center gap-2`}
            >
              <div className="flex items-center gap-2">
                <Wifi className="w-4 h-4 text-white" />
                <Volume2 className="w-4 h-4 text-white" />
                <div className="flex items-center">
                  <Battery className="w-4 h-4 text-white" />
                </div>
              </div>
            </button>
            <div className="text-white text-xs flex flex-col items-end ml-1">
              <span>{currentTime}</span>
              <span>{currentDate}</span>
            </div>
            <button
                onClick={toggleNotifications}
                className={`p-1 rounded-md ${notificationsOpen ? "bg-white/20" : "hover:bg-white/10"} transition-all duration-200`}
            >
              <BellRing className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        <AnimatePresence>{startMenuOpen && <StartMenu onAppClick={openWindow} />}</AnimatePresence>

        <AnimatePresence>{searchOpen && <SearchPanel />}</AnimatePresence>

        <AnimatePresence>{notificationsOpen && <NotificationsPanel />}</AnimatePresence>

        <AnimatePresence>
          {quickSettingsOpen && (
              <QuickSettingsPanel
                  brightness={brightness}
                  setBrightness={setBrightness}
                  volume={volume}
                  setVolume={setVolume}
                  currentMedia={currentMedia}
                  toggleMediaPlayback={toggleMediaPlayback}
              />
          )}
        </AnimatePresence>
      </div>
  )
}
