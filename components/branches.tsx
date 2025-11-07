"use client"

import { MessageCircle, MapPin, Phone } from "lucide-react"

const BRANCHES_INFO = [
  {
    name: "Marina",
    address: "Barrio Marina y alrededores, Buenos Aires",
    phone: "+54 11 2529-3394",
    whatsapp: "5491125293394",
  },
  {
    name: "Ramos",
    address: "Barrio Ramos y alrededores, Buenos Aires",
    phone: "+54 11 3043-7839",
    whatsapp: "5491130437839",
  },
  {
    name: "Atalaya",
    address: "Barrio Atalaya y alrededores, Buenos Aires",
    phone: "+54 11 5310-0824",
    whatsapp: "5491153100824",
  },
  {
    name: "Morón",
    address: "Barrio Morón y alrededores, Buenos Aires",
    phone: "+54 11 3204-8804",
    whatsapp: "5491132048804",
  },
]

export default function Branches() {
  return (
    <section id="branches" className="py-20 px-4 md:px-8 bg-gradient-to-b from-black to-green-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black mb-12 text-center text-orange-400">NUESTRAS SUCURSALES</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRANCHES_INFO.map((branch) => (
            <div
              key={branch.name}
              className="bg-gray-900 rounded-lg shadow-xl p-6 hover:shadow-2xl transition border-4 border-orange-400"
            >
              <h3 className="text-3xl font-black text-orange-400 mb-4">📍 {branch.name}</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="text-green-400 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-300">{branch.address}</p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="text-green-400" size={20} />
                  <a
                    href={`tel:${branch.phone}`}
                    className="text-gray-300 hover:text-orange-400 transition font-semibold"
                  >
                    {branch.phone}
                  </a>
                </div>
              </div>

              <a
                href={`https://wa.me/${branch.whatsapp}?text=Hola! Quiero hacer un pedido en ${branch.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-orange-400 text-black py-3 rounded-lg font-black flex items-center justify-center gap-2 hover:bg-orange-500 transition"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
