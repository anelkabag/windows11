"use client"

import { useState } from "react"
import Image from "next/image"
import {
    Search,
    ChevronLeft,
    ChevronRight,
    ArrowUp,
    RefreshCw,
    Plus,
    Scissors,
    Copy,
    Clipboard,
    Trash2,
    ArrowDownUp,
    Grid,
    MoreHorizontal,
    ChevronDown,
    X,
    Maximize2,
    Minus,
    Check,
    List,
} from "lucide-react"

export function FileExplorerApp() {
    const [selectedFile, setSelectedFile] = useState<string | null>("History of Skating")
    const [viewMode, setViewMode] = useState<"grid" | "details">("grid")

    return (
        <div className="flex flex-col h-full bg-[#0c0c0c] text-white">

            <div className="flex items-center justify-between p-1 px-2 bg-[#191919] border-b border-[#333]">
                <div className="flex items-center">
                    <div className="flex items-center gap-1 bg-[#0c0c0c] px-3 py-1 rounded-t-md border-t border-l border-r border-[#333]">
                        <Image src="/images/IconFoldeF.png" alt="Documents" width={16} height={16} className="w-4 h-4" />
                        <span className="text-sm">Documents</span>
                        <button className="ml-2 hover:bg-[#333] rounded-sm">
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                    <button className="p-1 hover:bg-[#333] rounded-sm ml-1">
                        <Plus className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="flex items-center p-1 px-2 bg-[#191919] border-b border-[#333]">
                <div className="flex items-center gap-1">
                    <button className="p-1 hover:bg-[#333] rounded-sm">
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button className="p-1 hover:bg-[#333] rounded-sm">
                        <ChevronRight className="w-5 h-5" />
                    </button>
                    <button className="p-1 hover:bg-[#333] rounded-sm">
                        <ArrowUp className="w-5 h-5" />
                    </button>
                    <button className="p-1 hover:bg-[#333] rounded-sm">
                        <RefreshCw className="w-5 h-5" />
                    </button>
                    <button className="p-1 hover:bg-[#333] rounded-sm">
                        <Image src="/images/IconFoldeDesk.png" alt="This PC" width={20} height={20} className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex items-center ml-2 text-sm">
                    <button className="px-2 py-1 hover:bg-[#333] rounded-sm flex items-center">
                        This PC
                        <ChevronRight className="w-4 h-4 mx-1" />
                    </button>
                    <button className="px-2 py-1 hover:bg-[#333] rounded-sm flex items-center">
                        Documents
                        <ChevronRight className="w-4 h-4 mx-1" />
                    </button>
                    <span className="px-2 py-1">Trip Planning</span>
                </div>

                <div className="ml-auto relative">
                    <input
                        type="text"
                        placeholder="Search Documents"
                        className="bg-[#333] border border-[#444] rounded-sm py-1 pl-8 pr-2 text-sm w-64 focus:outline-none focus:border-blue-500"
                    />
                    <Search className="absolute left-2 top-1.5 w-4 h-4 text-gray-400" />
                </div>
            </div>

            <div className="flex items-center justify-between p-1 px-2 bg-[#191919] border-b border-[#333]">
                <div className="flex items-center gap-1">
                    <button className="p-1 hover:bg-[#333] rounded-sm flex items-center">
                        <Plus className="w-4 h-4 mr-1" />
                        New
                        <ChevronDown className="w-3 h-3 ml-1" />
                    </button>
                    <button className="p-1 hover:bg-[#333] rounded-sm">
                        <Scissors className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:bg-[#333] rounded-sm">
                        <Copy className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:bg-[#333] rounded-sm">
                        <Clipboard className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:bg-[#333] rounded-sm">
                        <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="h-4 mx-1 border-r border-[#444]"></div>
                    <button className="p-1 hover:bg-[#333] rounded-sm flex items-center">
                        <ArrowDownUp className="w-4 h-4 mr-1" />
                        Sort
                        <ChevronDown className="w-3 h-3 ml-1" />
                    </button>
                    <button className="p-1 hover:bg-[#333] rounded-sm flex items-center">
                        <Grid className="w-4 h-4 mr-1" />
                        View
                        <ChevronDown className="w-3 h-3 ml-1" />
                    </button>
                    <button className="p-1 hover:bg-[#333] rounded-sm">
                        <MoreHorizontal className="w-4 h-4" />
                    </button>
                </div>
                <button className="p-1 hover:bg-[#333] rounded-sm flex items-center">
                    <List className="w-4 h-4 mr-1" />
                    Details
                </button>
            </div>


            <div className="flex flex-1 overflow-hidden">
                <div className="w-[200px] bg-[#191919] overflow-y-auto border-r border-[#333]">
                    <div className="p-2">
                        <div className="mb-4">
                            <SidebarItem icon="/images/IconFoldeHome.png" label="Home" />
                            <SidebarItem icon="/images/IconFoldePhotos.png" label="Gallery" />
                            <SidebarItem icon="/images/IconFoldeOneD.png" label="OneDrive - Personal" expandable />
                        </div>

                        <div className="mb-4">
                            <SidebarItem icon="/images/IconFoldeDesk.png" label="Desktop" pinned />
                            <SidebarItem icon="/images/IconFoldeDoc.png" label="Documents" pinned active />
                            <SidebarItem icon="/images/IconFoldeDownload.png" label="Downloads" pinned />
                            <SidebarItem icon="/images/IconFoldeMusique.png" label="Music" pinned />
                            <SidebarItem icon="/images/IconFoldePhotos.png" label="Pictures" pinned />
                            <SidebarItem icon="/images/IconFoldeVideo.png" label="Videos" pinned />
                            <SidebarItem icon="/images/IconFoldeF.png" label="Projects" />
                            <SidebarItem icon="/images/IconFoldeF.png" label="Kivu Event V2" />
                        </div>

                        <div>
                            <SidebarItem icon="/images/IconFoldePC.png" label="This PC" expandable expanded />
                            <div className="pl-6">
                                <SidebarItem icon="/images/IconFoldeDC.png" label="Local Disk (C:)" expandable />
                                <SidebarItem icon="/images/IconFoldeDD.png" label="Dev Drive (D:)" expandable />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4">
                    <div className="grid grid-cols-6 gap-4">
                        <FileItem
                            type="folder"
                            name="G-SoluTech"
                            icon="/images/IconFoldeF1.png"
                            selected={selectedFile === "G-SoluTech"}
                            onClick={() => setSelectedFile("Adobe")}
                        />
                        <FileItem
                            type="folder"
                            name="Design"
                            icon="/images/IconFoldeF1.png"
                            selected={selectedFile === "Design"}
                            onClick={() => setSelectedFile("Design")}
                        />
                        <FileItem
                            type="folder"
                            name="ISIG LIC3"
                            icon="/images/IconFoldeF1.png"
                            selected={selectedFile === "ISIG LIC3"}
                            onClick={() => setSelectedFile("Fonts")}
                        />
                        <FileItem
                            type="file"
                            name="New Text Document"
                            icon="/images/IconText.png"
                            selected={selectedFile === "New Text Document"}
                            onClick={() => setSelectedFile("New Text Document")}
                        />
                        <FileItem
                            type="file"
                            name="license.txt"
                            icon="/images/IconText.png"
                            selected={selectedFile === "license.txt"}
                            onClick={() => setSelectedFile("license.txt")}
                        />
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between p-1 px-3 bg-[#191919] border-t border-[#333] text-xs text-gray-400">
                <div>5 items</div>
                <div className="flex items-center gap-2">
                    <button className="p-1 hover:bg-[#333] rounded-sm">
                        <List className="w-4 h-4" />
                    </button>
                    <button className="p-1 hover:bg-[#333] rounded-sm">
                        <Grid className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    )
}

interface SidebarItemProps {
    icon: string
    label: string
    expandable?: boolean
    expanded?: boolean
    pinned?: boolean
    active?: boolean
}

function SidebarItem({
                         icon,
                         label,
                         expandable = false,
                         expanded = false,
                         pinned = false,
                         active = false,
                     }: SidebarItemProps) {
    return (
        <div className={`flex items-center p-1 rounded-sm ${active ? "bg-[#333]" : "hover:bg-[#333]"} mb-1 group`}>
            {expandable && (
                <div className="w-4 h-4 flex items-center justify-center mr-1">
                    <ChevronDown className={`w-3 h-3 ${expanded ? "transform rotate-0" : "transform -rotate-90"}`} />
                </div>
            )}
            {!expandable && <div className="w-4 mr-1"></div>}
            <div className="mr-2 w-4 h-4 flex items-center justify-center">
                <Image
                    src={icon || "/placeholder.svg"}
                    alt={label}
                    width={16}
                    height={16}
                    className={`w-4 h-4 ${active ? "text-blue-400" : ""}`}
                    onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/placeholder.svg?height=16&width=16"
                    }}
                />
            </div>
            <span className="text-sm flex-1">{label}</span>
            {pinned && (
                <div className="opacity-0 group-hover:opacity-100">
                    <div className="w-4 h-4 flex items-center justify-center">
                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                </div>
            )}
        </div>
    )
}

interface FileItemProps {
    type: "file" | "folder"
    name: string
    icon: string
    selected: boolean
    onClick: () => void
}

function FileItem({ type, name, icon, selected, onClick }: FileItemProps) {
    return (
        <div
            className={`flex flex-col items-center p-2 rounded-md ${
                selected ? "bg-blue-900/30 border border-blue-500" : "hover:bg-[#333] border border-transparent"
            } cursor-pointer relative`}
            onClick={onClick}
        >
            <div className="w-16 h-16 flex items-center justify-center mb-1">
                <Image
                    src={icon || "/placeholder.svg"}
                    alt={name}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-contain"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src =
                            type === "folder" ? "/placeholder.svg?height=64&width=64" : "/placeholder.svg?height=64&width=64"
                    }}
                />
            </div>
            <span className="text-xs text-center w-full truncate">{name}</span>
            {selected && (
                <div className="absolute top-1 right-1 bg-blue-500 rounded-sm w-5 h-5 flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                </div>
            )}
        </div>
    )
}