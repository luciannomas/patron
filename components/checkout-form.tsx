"use client"

import { useState } from "react"
import { useCart } from "@/lib/cart-context"
import { X, User, CreditCard, Home, MessageCircle } from "lucide-react"

interface CheckoutFormProps {
  onClose: () => void
  onBack: () => void
}

export default function CheckoutForm({ onClose, onBack }: CheckoutFormProps) {
  const { items, getTotalPrice, selectedBranch, clearCart } = useCart()
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    street: "",
    apartment: "",
    comments: "",
    paymentMethod: "efectivo" as "efectivo" | "transferencia",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedBranch) {
      alert("Por favor selecciona una sucursal primero")
      return
    }

    // Construir mensaje para WhatsApp
    let message = `🍔 *NUEVO PEDIDO - EL PATRÓN DEL TRUCK*\n\n`
    message += `📍 *Sucursal:* ${selectedBranch.name}\n\n`
    message += `👤 *DATOS DEL CLIENTE*\n`
    message += `Nombre: ${formData.name}\n`
    message += `Email: ${formData.email}\n`
    message += `Teléfono: ${formData.phone}\n\n`
    message += `🏠 *DIRECCIÓN DE ENTREGA*\n`
    message += `Calle: ${formData.street}\n`
    if (formData.apartment) message += `Piso/Depto: ${formData.apartment}\n`
    if (formData.comments) message += `Comentarios: ${formData.comments}\n`
    message += `\n🛒 *DETALLE DEL PEDIDO*\n\n`

    items.forEach((item) => {
      message += `▪️ ${item.name} x${item.quantity} — ${item.price}\n`
    })

    message += `\n💰 *RESUMEN*\n`
    message += `Subtotal: $${getTotalPrice().toLocaleString("es-AR", { minimumFractionDigits: 2 })}\n`
    message += `Envío: $0,00\n`
    message += `*Total: $${getTotalPrice().toLocaleString("es-AR", { minimumFractionDigits: 2 })}*\n\n`
    message += `💳 *Forma de pago:* ${formData.paymentMethod === "efectivo" ? "Efectivo" : "Transferencia"}\n\n`
    message += `✅ Pedido confirmado y listo para preparar!`

    const whatsappUrl = `https://wa.me/${selectedBranch.whatsapp}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    // Limpiar carrito y cerrar
    clearCart()
    onClose()
  }

  const totalPrice = getTotalPrice()

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center bg-black/80 overflow-y-auto py-4 md:py-8">
      <div className="relative bg-white w-full max-w-6xl mx-2 md:mx-4 rounded-lg shadow-2xl flex flex-col md:flex-row min-h-[95vh] md:min-h-0">
        {/* Left Side - Form */}
        <div className="flex-1 p-4 md:p-8 overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-4 md:mb-6 sticky top-0 bg-white z-10 py-2">
            <h2 className="text-xl md:text-2xl font-black text-gray-800">Confirmar Pedido</h2>
            <button onClick={onClose} className="text-gray-600 hover:text-gray-800 transition">
              <X size={24} className="md:hidden" />
              <X size={28} className="hidden md:block" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Datos Generales */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <User className="text-orange-600" size={20} />
                <h3 className="text-lg font-bold text-orange-600">Datos generales</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-orange-600 mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ejemplo@gmail.com"
                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-orange-400 outline-none transition text-gray-800"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-orange-600 mb-2">
                      Nombre y apellido <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-orange-400 outline-none transition text-gray-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-orange-600 mb-2">
                      Número de teléfono <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <span className="px-3 py-2 bg-gray-100 border-b-2 border-gray-300 text-sm">🇦🇷</span>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="011 15-2345-6789"
                        className="flex-1 px-4 py-2 border-b-2 border-gray-300 focus:border-orange-400 outline-none transition text-gray-800"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dirección */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Home className="text-orange-600" size={20} />
                <h3 className="text-lg font-bold text-orange-600">Dirección</h3>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-orange-600 mb-2">
                      Calle y número <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.street}
                      onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                      placeholder="Av. Argentina 1234"
                      className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-orange-400 outline-none transition text-gray-800"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-orange-600 mb-2">
                      Piso y departamento
                    </label>
                    <input
                      type="text"
                      value={formData.apartment}
                      onChange={(e) => setFormData({ ...formData, apartment: e.target.value })}
                      placeholder="Por ejemplo: 1B"
                      className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-orange-400 outline-none transition text-gray-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-orange-600 mb-2">Comentarios</label>
                  <textarea
                    value={formData.comments}
                    onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2 border-b-2 border-gray-300 focus:border-orange-400 outline-none transition resize-none text-gray-800"
                  />
                </div>
              </div>
            </div>

            {/* Forma de Pago */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CreditCard className="text-orange-600" size={20} />
                <h3 className="text-lg font-bold text-orange-600">
                  Forma de pago <span className="text-red-500">*</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition hover:border-orange-400 bg-white">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="efectivo"
                    checked={formData.paymentMethod === "efectivo"}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value as any })}
                    className="w-5 h-5 text-orange-400"
                  />
                  <span className="font-bold text-gray-800">Efectivo</span>
                </label>
                <label className="flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition hover:border-orange-400 bg-white">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="transferencia"
                    checked={formData.paymentMethod === "transferencia"}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value as any })}
                    className="w-5 h-5 text-orange-400"
                  />
                  <span className="font-bold text-gray-800">Transferencia</span>
                </label>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onBack}
                className="flex-1 px-6 py-3 border-2 border-orange-400 text-orange-400 rounded-lg font-bold hover:bg-orange-50 transition"
              >
                Atrás
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-orange-400 text-black rounded-lg font-black hover:bg-orange-500 transition flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                Confirmar pedido
              </button>
            </div>
          </form>
        </div>

        {/* Right Side - Order Summary */}
        <div className="w-full md:w-96 bg-gray-50 p-4 md:p-8 border-t md:border-t-0 md:border-l overflow-y-auto">
          <h3 className="text-lg md:text-xl font-black text-gray-800 mb-4 md:mb-6">Mi pedido</h3>

          <div className="space-y-4 mb-6">
            {items.map((item) => (
              <div key={item.id} className="pb-4 border-b border-gray-300">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-gray-800">{item.name}</h4>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">(x{item.quantity})</span>
                  <span className="font-bold text-orange-500">{item.price}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-2 pt-4 border-t-2 border-gray-300">
            <div className="flex justify-between text-gray-700">
              <span>Subtotal</span>
              <span className="font-bold">$ {totalPrice.toLocaleString("es-AR")}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Costo de envío</span>
              <span className="font-bold">$ 0,00</span>
            </div>
            <div className="flex justify-between text-xl font-black text-gray-800 pt-2 border-t border-gray-300">
              <span>Total</span>
              <span className="text-orange-500">$ {totalPrice.toLocaleString("es-AR")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

