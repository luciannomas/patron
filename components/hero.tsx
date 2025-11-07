"use client"

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative w-full min-h-screen md:min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#2d5016] to-[#ff8c00]"></div>

      <div className="absolute inset-0 hidden"></div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 text-balance drop-shadow-2xl">EL PATRÓN</h1>
        <h2 className="text-4xl md:text-6xl text-[#ff8c00] font-black mb-4 text-balance drop-shadow-lg">del Truck</h2>
        <p className="text-2xl md:text-3xl text-white mb-8 text-balance font-black italic drop-shadow-lg tracking-wide">
          Burgers bandidas al mejor precio
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => scrollToSection("menu")}
            className="bg-[#ff8c00] text-black px-8 py-4 rounded-full font-black text-lg hover:bg-[#ff9d1a] transition transform hover:scale-105 shadow-xl"
          >
            VER MENÚ
          </button>
          <button
            onClick={() => scrollToSection("branches")}
            className="bg-black text-white px-8 py-4 rounded-full font-black text-lg hover:bg-gray-900 transition transform hover:scale-105 shadow-xl border-2 border-white"
          >
            SUCURSALES
          </button>
        </div>
      </div>
    </section>
  )
}
