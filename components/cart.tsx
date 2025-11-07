"use client"

import { ShoppingCart, X, Plus, Minus, Trash2, MapPin } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useState } from "react"
import CheckoutForm from "./checkout-form"

const BRANCHES = [
  { name: "Marina", whatsapp: "5491125293394" },
  { name: "Ramos", whatsapp: "5491130437839" },
  { name: "Atalaya", whatsapp: "5491153100824" },
  { name: "Morón", whatsapp: "5491132048804" },
]

export default function Cart() {
  const { items, getTotalItems, getTotalPrice, updateQuantity, removeItem, selectedBranch, setSelectedBranch } = useCart()
  const [isOpen, setIsOpen] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)

  const totalItems = getTotalItems()

  return (
    <>
      {/* Cart Button - Floating */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-orange-400 text-black p-4 rounded-full shadow-2xl hover:bg-orange-500 transition flex items-center gap-2 font-black"
      >
        <ShoppingCart size={24} />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-black">
            {totalItems}
          </span>
        )}
      </button>

      {/* Cart Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center md:justify-end">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70" onClick={() => setIsOpen(false)} />

          {/* Drawer Content */}
          <div className="relative bg-gray-900 w-full md:w-[500px] h-[90vh] md:h-full md:max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
            {/* Header */}
            <div className="bg-orange-400 p-4">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-2xl font-black text-black flex items-center gap-2">
                  <ShoppingCart size={24} />
                  Mi Pedido
                </h2>
                <button onClick={() => setIsOpen(false)} className="text-black hover:text-gray-800 transition">
                  <X size={28} />
                </button>
              </div>
              
              {/* Branch Selector */}
              <div className="bg-black/20 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={16} className="text-black" />
                  <span className="text-sm font-bold text-black">Sucursal:</span>
                </div>
                <select
                  value={selectedBranch?.name || ""}
                  onChange={(e) => {
                    const branch = BRANCHES.find(b => b.name === e.target.value)
                    if (branch) setSelectedBranch(branch)
                  }}
                  className="w-full px-3 py-2 rounded-md bg-white text-black font-bold border-2 border-black focus:outline-none focus:ring-2 focus:ring-black"
                >
                  {!selectedBranch && <option value="">Selecciona una sucursal</option>}
                  {BRANCHES.map((branch) => (
                    <option key={branch.name} value={branch.name}>
                      {branch.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {items.length === 0 ? (
                <div className="text-center text-gray-400 py-12">
                  <ShoppingCart size={64} className="mx-auto mb-4 opacity-30" />
                  <p className="text-lg">Tu carrito está vacío</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="bg-gray-800 rounded-lg p-4 border-2 border-gray-700">
                      <div className="flex gap-3">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="text-orange-400 font-black mb-1">{item.name}</h4>
                          <p className="text-white font-bold text-lg">{item.price}</p>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-3 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="bg-gray-700 text-white p-1 rounded hover:bg-gray-600 transition"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="text-white font-bold w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="bg-orange-400 text-black p-1 rounded hover:bg-orange-500 transition"
                            >
                              <Plus size={16} />
                            </button>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="ml-auto text-red-500 hover:text-red-400 transition"
                            >
                              <Trash2 size={20} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer - Total and Checkout */}
            {items.length > 0 && (
              <div className="border-t-4 border-orange-400 p-4 bg-gray-800">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal</span>
                    <span className="font-bold">$ {getTotalPrice().toLocaleString("es-AR")}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Costo de envío</span>
                    <span className="font-bold">$ 0,00</span>
                  </div>
                  <div className="flex justify-between text-white text-xl font-black pt-2 border-t border-gray-600">
                    <span>Total</span>
                    <span className="text-orange-400">$ {getTotalPrice().toLocaleString("es-AR")}</span>
                  </div>
                </div>
                <button
                  onClick={() => setShowCheckout(true)}
                  className="w-full bg-orange-400 text-black py-4 rounded-lg font-black text-lg hover:bg-orange-500 transition"
                >
                  Confirmar Pedido
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Checkout Form Modal */}
      {showCheckout && (
        <CheckoutForm
          onClose={() => {
            setShowCheckout(false)
            setIsOpen(false)
          }}
          onBack={() => setShowCheckout(false)}
        />
      )}
    </>
  )
}

