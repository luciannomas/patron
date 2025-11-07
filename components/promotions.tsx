export default function Promotions() {
  const promos = [
    {
      id: 1,
      title: "COMBO 2x1",
      description: "Compra 2 burgers y lleva la tercera a 50% de descuento",
      icon: "🎉",
    },
    {
      id: 2,
      title: "DÍA DEL CLIENTE",
      description: "Viernes: Todas las burgers deluxe con 20% de descuento",
      icon: "🌟",
    },
    {
      id: 3,
      title: "ENVÍO GRATIS",
      description: "Compras mayores a $1500 reciben envío gratis en zona",
      icon: "🚚",
    },
    {
      id: 4,
      title: "PROGRAMA AMIGOS",
      description: "Referí un amigo y ambos reciben $200 de descuento",
      icon: "👥",
    },
  ]

  return (
    <section id="promos" className="py-20 px-4 md:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black mb-12 text-center text-orange-400">PROMOCIONES ESPECIALES</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promos.map((promo) => (
            <div
              key={promo.id}
              className="flex flex-col bg-gradient-to-b from-green-700 to-green-900 rounded-lg p-8 text-center hover:shadow-2xl transition border-2 border-orange-400"
            >
              <div className="text-6xl mb-4">{promo.icon}</div>
              <h3 className="text-2xl font-black mb-3 text-white">{promo.title}</h3>
              <p className="text-gray-200 flex-1 flex items-center justify-center">{promo.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
