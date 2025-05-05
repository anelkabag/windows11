"use client"

import { useState } from "react"
import Image from "next/image"
import {
    Search,
    ChevronLeft,
    ChevronRight,
    Shield,
    List,
    Monitor,
    Cloud,
    Bluetooth,
    Check,
    Info,
    Wifi,
} from "lucide-react"

export function SettingsApp() {
    const [activeCategory, setActiveCategory] = useState("Accueil")
    const [searchQuery, setSearchQuery] = useState("")

    const categories = [
        { id: "Accueil", icon: "home", color: "#0078D7" },
        { id: "Système", icon: "system", color: "#0078D7" },
        { id: "Bluetooth et appareils", icon: "bluetooth", color: "#0078D7" },
        { id: "Réseau et Internet", icon: "network", color: "#0078D7" },
        { id: "Personnalisation", icon: "personalization", color: "#0078D7" },
        { id: "Applications", icon: "apps", color: "#0078D7" },
        { id: "Comptes", icon: "accounts", color: "#0078D7" },
        { id: "Heure et langue", icon: "time", color: "#0078D7" },
        { id: "Jeux", icon: "games", color: "#0078D7" },
        { id: "Accessibilité", icon: "accessibility", color: "#0078D7" },
        { id: "Confidentialité et sécurité", icon: "privacy", color: "#0078D7" },
        { id: "Windows Update", icon: "update", color: "#0078D7" },
    ]

    const recommendedSettings = [
        {
            id: "security",
            title: "Sécurité Windows",
            icon: <Shield className="w-5 h-5 text-blue-500" />,
        },
        {
            id: "apps",
            title: "Applications installées",
            icon: <List className="w-5 h-5 text-blue-500" />,
        },
        {
            id: "lockscreen",
            title: "Écran de verrouillage",
            icon: <Monitor className="w-5 h-5 text-blue-500" />,
        },
    ]

    return (
        <div className="flex flex-col h-full bg-[#191919] text-white">

            <div className="flex items-center p-2 px-4 gap-4 bg-[#191919]">
                <button className="p-1 rounded-full hover:bg-[#3D3D3D] transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="font-medium">Paramètres</span>
            </div>

            <div className="flex flex-1 overflow-hidden">

                <div className="w-[250px] bg-[#191919] overflow-y-auto">

                    <div className="p-4 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gray-400 overflow-hidden">
                            <Image src="/images/profil.WEBP" alt="User" width={48} height={48} className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <div className="font-medium">Anelka MD</div>
                            <div className="text-sm text-gray-400">anelkadevs@gmail.com</div>
                        </div>
                    </div>

                    <div className="px-4 pb-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Rechercher un paramètre"
                                className="w-full bg-[#3B3B3B] rounded-sm py-2 px-3 pr-8 text-sm outline-none border-none"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <Search className="absolute right-2 top-2 w-4 h-4 text-gray-400" />
                        </div>
                    </div>

                    <div className="px-2">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`flex items-center gap-3 p-2 rounded-md w-full text-left ${
                                    activeCategory === category.id ? "bg-[#0078D7]/20 border-l-2 border-[#0078D7]" : "hover:bg-[#3D3D3D]"
                                } transition-colors`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                <div className="w-6 h-6 flex items-center justify-center">
                                    <CategoryIcon category={category.id} color={activeCategory === category.id ? "#0078D7" : "#FFFFFF"} />
                                </div>
                                <span>{category.id}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                    <h1 className="text-2xl font-semibold mb-6">Accueil</h1>

                    <div className="grid grid-cols-3 gap-4 mb-6">

                        <div className="bg-[#333333] rounded-lg p-4 flex items-center gap-4">
                            <div className="w-16 h-16 rounded-md flex items-center justify-center">
                                <Image
                                    src="/images/IconfoldePC.png"
                                    alt="Computer"
                                    width={40}
                                    height={40}
                                    className="w-10 h-10"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement
                                        target.src = "/placeholder.svg?height=40&width=40"
                                    }}
                                />
                            </div>
                            <div>
                                <div className="font-medium">The-Geek</div>
                                <div className="text-sm text-gray-400">20FMS20U00</div>
                                <button className="text-sm text-[#0078D7] hover:underline">Renommer</button>
                            </div>
                        </div>

                        <div className="bg-[#333333] rounded-lg p-4 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#444444] flex items-center justify-center">
                                <Wifi className="w-5 h-5 text-[#0078D7]" />
                            </div>
                            <div>
                                <div className="font-medium">Feociety-2G</div>
                                <div className="text-sm text-gray-400">Connecté, sécurisé</div>
                            </div>
                        </div>

                        <div className="bg-[#333333] rounded-lg p-4 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#444444] flex items-center justify-center">
                                <div className="w-5 h-5 text-[#0078D7] flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <div className="font-medium">Windows Update</div>
                                <div className="text-sm text-gray-400">Votre attention est requise</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#333333] rounded-lg p-4 mb-6 flex items-center gap-3">
                        <Info className="w-5 h-5 text-[#0078D7]" />
                        <div className="flex-1">Vous devez activer Windows pour pouvoir personnaliser votre PC.</div>
                        <button className="px-3 py-1 bg-[#0078D7] rounded-sm hover:bg-[#0067B8] transition-colors">
                            Activer maintenant
                        </button>
                    </div>

                    <div className="bg-[#333333] rounded-lg p-4 mb-6">
                        <h2 className="text-lg font-medium mb-1">Paramètres recommandés</h2>
                        <p className="text-sm text-gray-400 mb-4">Paramètres récents et couramment utilisés</p>

                        {recommendedSettings.map((setting) => (
                            <div
                                key={setting.id}
                                className="flex items-center justify-between py-3 border-t border-[#444444] hover:bg-[#3D3D3D] px-2 rounded-sm transition-colors cursor-pointer"
                            >
                                <div className="flex items-center gap-3">
                                    {setting.icon}
                                    <span>{setting.title}</span>
                                </div>
                                <ChevronRight className="w-5 h-5 text-gray-400" />
                            </div>
                        ))}
                    </div>

                    <div className="bg-[#333333] rounded-lg p-4 mb-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Cloud className="w-5 h-5 text-[#0078D7]" />
                            <h2 className="text-lg font-medium">Stockage cloud</h2>
                        </div>

                        <p className="text-sm mb-4">
                            Assurez-vous d'être connecté avec <span className="text-white">anelkadevs@gmail.com</span> pour afficher
                            les détails de votre stockage ici.
                        </p>

                        <button className="px-3 py-1 bg-[#444444] rounded-sm hover:bg-[#555555] transition-colors">
                            Se connecter à OneDrive
                        </button>
                    </div>

                    <div className="bg-[#333333] rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Bluetooth className="w-5 h-5 text-[#0078D7]" />
                            <h2 className="text-lg font-medium">Appareils Bluetooth</h2>
                        </div>

                        <p className="text-sm mb-4">Gérer, ajouter et supprimer des appareils</p>

                        <div className="flex items-center justify-between py-3 border-t border-[#444444]">
                            <div className="flex items-center gap-3">
                                <Bluetooth className="w-5 h-5 text-[#0078D7]" />
                                <div>
                                    <div>Bluetooth</div>
                                    <div className="text-sm text-gray-400">Détectable sous le nom « THE-GEEK »</div>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#0078D7]"></div>
                            </label>
                        </div>

                        <div className="flex items-center justify-between py-3 border-t border-[#444444]">
                            <div className="flex items-center gap-3">
                                <div className="w-5 h-5 flex items-center justify-center">
                                    <Image
                                        src="/images/airpods.png"
                                        alt="AirPods"
                                        width={20}
                                        height={20}
                                        className="w-5 h-5"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement
                                            target.src = "/placeholder.svg?height=20&width=20"
                                        }}
                                    />
                                </div>
                                <div>
                                    <div>AirPods Pro de MD</div>
                                    <div className="text-sm text-gray-400">Couplé</div>
                                </div>
                            </div>
                            <button className="px-3 py-1 bg-[#444444] rounded-sm hover:bg-[#555555] transition-colors">
                                Connecter
                            </button>
                        </div>
                    </div>

                    <div className="bg-[#333333] rounded-lg p-4 mt-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Check className="w-5 h-5 text-[#0078D7]" />
                            <h2 className="text-lg font-medium">Ne perdez jamais l'accès à votre compte</h2>
                        </div>

                        <p className="text-sm mb-2">
                            Ajoutez un numéro de téléphone de récupération pour vous assurer que vous pouvez toujours accéder à votre
                            compte.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function CategoryIcon({ category, color = "#FFFFFF" }: { category: string; color?: string }) {
    switch (category) {
        case "Accueil":
            return (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                        stroke={color}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M9 22V12h6v10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case "Système":
            return (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect
                        x="2"
                        y="3"
                        width="20"
                        height="14"
                        rx="2"
                        stroke={color}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M8 21h8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 17v4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case "Bluetooth et appareils":
            return (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.5 6.5l11 11L12 23V1l5.5 5.5-11 11"
                        stroke={color}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        case "Réseau et Internet":
            return (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5 12.55a11 11 0 0 1 14.08 0"
                        stroke={color}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M1.42 9a16 16 0 0 1 21.16 0"
                        stroke={color}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M8.53 16.11a6 6 0 0 1 6.95 0"
                        stroke={color}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path d="M12 20h.01" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        case "Personnalisation":
            return (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        stroke={color}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        case "Applications":
            return (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect
                        x="3"
                        y="3"
                        width="7"
                        height="7"
                        stroke={color}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <rect
                        x="14"
                        y="3"
                        width="7"
                        height="7"
                        stroke={color}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <rect
                        x="14"
                        y="14"
                        width="7"
                        height="7"
                        stroke={color}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <rect
                        x="3"
                        y="14"
                        width="7"
                        height="7"
                        stroke={color}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )
        default:
            return (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
    }
}
