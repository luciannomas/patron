"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-[#2d5016] text-white shadow-xl border-b-4 border-[#ff8c00]">
      <nav className="flex items-center justify-between px-4 py-4 md:px-8">
        <div className="flex items-center gap-3">
          <Image src="/icono-patron.png" alt="El Patrón del Truck" width={40} height={40} className="rounded-full bg-[#2d5016]" />
          <div className="text-2xl md:text-3xl font-black text-white">
            EL PATRÓN <span className="text-[#ff8c00]">del Truck</span>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#ff8c00]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8">
          <button onClick={() => scrollToSection("menu")} className="hover:text-[#ff8c00] transition font-semibold">
            Menú
          </button>
          <button onClick={() => scrollToSection("video")} className="hover:text-[#ff8c00] transition font-semibold">
            Video
          </button>
          <button onClick={() => scrollToSection("promos")} className="hover:text-[#ff8c00] transition font-semibold">
            Promos
          </button>
          <button onClick={() => scrollToSection("branches")} className="hover:text-[#ff8c00] transition font-semibold">
            Sucursales
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-[#ff8c00] transition font-semibold">
            Contacto
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#2d5016] text-white flex flex-col gap-4 p-4 md:hidden border-b-4 border-[#ff8c00]">
            <button
              onClick={() => scrollToSection("menu")}
              className="text-left hover:text-[#ff8c00] transition font-semibold"
            >
              Menú
            </button>
            <button
              onClick={() => scrollToSection("video")}
              className="text-left hover:text-[#ff8c00] transition font-semibold"
            >
              Video
            </button>
            <button
              onClick={() => scrollToSection("promos")}
              className="text-left hover:text-[#ff8c00] transition font-semibold"
            >
              Promos
            </button>
            <button
              onClick={() => scrollToSection("branches")}
              className="text-left hover:text-[#ff8c00] transition font-semibold"
            >
              Sucursales
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left hover:text-[#ff8c00] transition font-semibold"
            >
              Contacto
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}
