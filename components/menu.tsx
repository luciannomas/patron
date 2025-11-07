"use client"
import { useState, useEffect } from "react"
import { MessageCircle, Zap, ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { toast } from "sonner"

const BRANCHES = [
  { name: "Marina", whatsapp: "5491125293394" },
  { name: "Ramos", whatsapp: "5491130437839" },
  { name: "Atalaya", whatsapp: "5491153100824" },
  { name: "Morón", whatsapp: "5491132048804" },
]

const PROMOS = [
  {
    id: "promo1",
    name: "PROMO ABUELITA",
    description: "Hamburguesa simple con cheddar y bacon acompañada con papas fritas (SOLO SE ABONA EN EFECTIVO)",
    price: "$9.500",
    badge: "OFERTA",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-06%20at%207.28.35%20PM%20%282%29-yXNv1o28f4koRagHlni254WgjFbGx4.jpeg",
  },
  {
    id: "promo2",
    name: "PROMO ABUELITA DOBLE",
    description: "Hamburguesa doble con doble cheddar y bacon acompañada con papas fritas (SOLO SE ABONA EN EFECTIVO)",
    price: "$11.000",
    badge: "OFERTA",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-06%20at%207.28.35%20PM-DNy68E9N7FJdfjokOIUvJZk8crCxDn.jpeg",
  },
]

const BURGERS = [
  {
    id: 1,
    name: "Napoles",
    description: "Doble carne, doble cheddar, huevo, cebolla caramelizada",
    price: "$12.800",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-06%20at%207.28.35%20PM%20%281%29-vrSV4RDNApw87oZQ36GHFaGYwmRjPB.jpeg",
  },
  {
    id: 2,
    name: "Berraca",
    description: "Carne, cheddar, tomate, lechuga, salsa barbacoa",
    price: "$11.700",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-06%20at%207.28.35%20PM%20%281%29-vrSV4RDNApw87oZQ36GHFaGYwmRjPB.jpeg",
  },
  {
    id: 3,
    name: "Gaviria",
    description: "Carne, mozzarella, tomates asados, alioli",
    price: "$11.700",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-06%20at%207.28.35%20PM%20%281%29-vrSV4RDNApw87oZQ36GHFaGYwmRjPB.jpeg",
  },
  {
    id: 4,
    name: "Popeye",
    description: "Carne, cheddar, aros de cebolla, barbacoa",
    price: "$11.900",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-06%20at%207.28.35%20PM%20%281%29-vrSV4RDNApw87oZQ36GHFaGYwmRjPB.jpeg",
  },
  {
    id: 5,
    name: "La Narco",
    description: "Carne, cheddar, pepinos, cebolla crispy, salsa ahumada",
    price: "$12.700",
    image: "/burger-premium.jpg",
  },
  {
    id: 6,
    name: "Medellín",
    description: "Doble carne, cheddar, jalapeños, salsa picante",
    price: "$13.200",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-06%20at%207.28.35%20PM%20%281%29-vrSV4RDNApw87oZQ36GHFaGYwmRjPB.jpeg",
  },
  {
    id: 7,
    name: "Triple Abuelita",
    description: "Triple carne, triple cheddar, bacon, cebolla caramelizada",
    price: "$18.500",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-06%20at%207.28.35%20PM%20%281%29-vrSV4RDNApw87oZQ36GHFaGYwmRjPB.jpeg",
  },
]

const VEGGIE = [
  {
    id: 1,
    name: "NOT CHEESE",
    description:
      "Hamburguesa Not, con cheddar acompañada estuche de Papas Fritas PROMOCION VALIDA UNICAMENTE EN EFECTIVO",
    price: "$9.300",
    image: "/veggie-burger.jpg",
  },
  {
    id: 2,
    name: "Not Dea",
    description: "Hamburguesa NOT con cheddar, cebolla en cubos, ketchup y mostaza. Acompañada con Papas Fritas",
    price: "$11.100",
    image: "/veggie-burger.jpg",
  },
  {
    id: 3,
    name: "Not Berraca",
    description: "Hamburguesa NOTCO, cheddar, tomate, lechuga y salsa barbacoa, acompañada con Papas Fritas",
    price: "$11.700",
    image: "/veggie-burger.jpg",
  },
  {
    id: 4,
    name: "Not Popeye",
    description: "Hamburguesa Notco con cheddar, aros de cebolla y barbacoa. acompañada con papas fritas",
    price: "$11.900",
    image: "/veggie-burger.jpg",
  },
  {
    id: 5,
    name: "Not Gaviria",
    description: "Hamburguesa Notco, con mozzarella, tomates asados y alioli. acompañada de papas fritas",
    price: "$11.700",
    image: "/veggie-burger.jpg",
  },
  {
    id: 6,
    name: "Not Plata o plomo",
    description: "Hamburguesa Notco, con cheddar, huevo, ají asado y cebolla caramelizada. acompañada con papas fritas",
    price: "$12.700",
    image: "/veggie-burger.jpg",
  },
  {
    id: 7,
    name: "Nuggets NOT CHICKEN",
    description: "nuggets veggies con dip de cheddar y papas fritas",
    price: "$9.300",
    image: "/nuggets.jpg",
  },
  {
    id: 8,
    name: "Picada caliente Veggie",
    description:
      "Trae, bastones de muza, tequeños, aros de cebolla, nuggets NOTCHICKEN, papas fritas y dips con salsas",
    price: "$15.400",
    image: "/picada.jpg",
  },
]

const MINUTAS = [
  {
    id: 1,
    name: "Pablo Jr",
    description: "Pechugitas rebozadas acompañadas de papas fritas incluye 1 dip de barbacoa y 1 dip de cheddar",
    price: "$10.000",
    image: "/pechuga-rebozada.jpg",
  },
  {
    id: 2,
    name: "P. papas solas",
    description: "Porcion de papas solas",
    price: "$7.100",
    image: "/papas-fritas.jpg",
  },
  {
    id: 3,
    name: "P. papas Ch",
    description: "Porcion de papas con cheddar",
    price: "$7.700",
    image: "/papas-cheddar.jpg",
  },
  {
    id: 4,
    name: "P. papas CH y B",
    description: "Porcion de papas con cheddar y bacon.",
    price: "$8.300",
    image: "/papas-bacon.jpg",
  },
  {
    id: 5,
    name: "Tequeños",
    description: "6 tequeños grandes acompañados con salsa alioli y barbacoa",
    price: "$9.000",
    image: "/tequenos.jpg",
  },
  {
    id: 6,
    name: "P. Aros",
    description: "14 aros de cebolla acompañados con dip de cheddar y barbacoa",
    price: "$9.000",
    image: "/aros-cebolla.jpg",
  },
  {
    id: 7,
    name: "P. Bastones",
    description: "Porción con dips de alioli y barbacoa",
    price: "$9.000",
    image: "/bastones.jpg",
  },
  {
    id: 8,
    name: "Picada caliente",
    description:
      "Para 2 personas, trae: bastones de muza, tequeños, aros de cebolla, nuggets de pollo, papas fritas y dips con salsas",
    price: "$15.400",
    image: "/picada.jpg",
  },
]

const BEBIDAS = [
  { id: 1, name: "Coca-cola 500", price: "$3.000", image: "/classic-coca-cola.png" },
  { id: 2, name: "Agua mineral 500 ml", price: "$3.000", image: "/agua-mineral.jpg" },
  { id: 3, name: "Coca cola 1,75lts", price: "$4.300", image: "/coca-cola-grande.jpg" },
  { id: 4, name: "Sprite 1,75 ml", price: "$4.300", image: "/sparkling-sprite.png" },
]

const EXTRAS = [
  {
    id: 1,
    name: "Cheddar en feta",
    description: "Dip de cheddar",
    price: "$1.700",
    image: "/dip-cheddar.jpg",
  },
  { id: 2, name: "Dip de cheddar", price: "$1.700", image: "/dip-cheddar.jpg" },
  { id: 3, name: "Dip Alioli", price: "$1.000", image: "/dip-alioli.jpg" },
  { id: 4, name: "Dip Barbacoa", price: "$1.000", image: "/dip-barbacoa.jpg" },
  { id: 5, name: "Dip de bacón", description: "Bacón en cubos", price: "$1.700", image: "/dip-bacon.jpg" },
]

const MenuCard = ({ item, onAddToCart }: any) => (
  <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition flex flex-col h-full">
    <div className="h-40 overflow-hidden">
      <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
    </div>
    <div className="p-4 flex flex-col flex-1">
      <h4 className="text-lg font-black text-orange-400 mb-2">{item.name}</h4>
      {item.description && <p className="text-sm text-gray-400 mb-4 line-clamp-2">{item.description}</p>}
      <div className="mt-auto flex items-center justify-between gap-3 pt-3 border-t border-gray-700">
        <span className="text-xl font-black text-orange-400">{item.price}</span>
        <button
          onClick={() => onAddToCart(item)}
          className="bg-orange-400 text-black px-3 py-2 rounded font-bold hover:bg-orange-500 transition flex items-center gap-2 whitespace-nowrap text-sm"
        >
          <ShoppingCart size={14} />
          Agregar
        </button>
      </div>
    </div>
  </div>
)

const Menu = () => {
  const { addItem, selectedBranch, setSelectedBranch } = useCart()

  useEffect(() => {
    // Set initial branch if not set
    if (!selectedBranch) {
      setSelectedBranch(BRANCHES[0])
    }
  }, [selectedBranch, setSelectedBranch])

  const handleBranchChange = (branch: any) => {
    setSelectedBranch(branch)
  }

  const handleAddToCart = (item: any) => {
    // Extract numeric price from string like "$3.000"
    const priceNumber = parseFloat(item.price.replace(/[$.]/g, "").replace(",", "."))
    
    addItem({
      id: `${item.id}-${item.name}`,
      name: item.name,
      price: item.price,
      priceNumber: priceNumber,
      image: item.image,
      description: item.description,
    })

    // Show toast notification
    toast.success(`${item.name} agregado al carrito`, {
      description: `Precio: ${item.price}`,
      duration: 2000,
    })
  }

  return (
    <section id="menu" className="py-20 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black mb-4 text-center text-orange-400">NUESTRO MENÚ</h2>
        <p className="text-xl text-gray-400 text-center mb-12 font-semibold">
          Selecciona tu sucursal y haz tu pedido por WhatsApp
        </p>

        {/* Branch Selector */}
        <div className="flex gap-3 justify-center mb-16 flex-wrap">
          {BRANCHES.map((branch) => (
            <button
              key={branch.name}
              onClick={() => handleBranchChange(branch)}
              className={`px-6 py-3 rounded-full font-black transition ${
                selectedBranch?.name === branch.name
                  ? "bg-orange-400 text-black"
                  : "bg-green-700 text-white hover:bg-green-600"
              }`}
            >
              {branch.name}
            </button>
          ))}
        </div>

        {/* Promotions Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Zap className="text-orange-400" size={32} />
            <h3 className="text-4xl font-black text-orange-400">PROMOCIONES</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROMOS.map((promo) => (
              <div
                key={promo.id}
                className="bg-orange-400 rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition flex"
              >
                <div className="flex-1 p-4 text-black flex flex-col">
                  <div className="relative mb-2">
                    <span className="inline-block bg-red-600 text-white px-2 py-1 rounded-full font-black text-xs mb-2">
                      {promo.badge}
                    </span>
                  </div>
                  <h4 className="text-lg font-black mb-2 leading-tight">{promo.name}</h4>
                  <p className="text-sm font-semibold mb-auto leading-snug">{promo.description}</p>
                  <div className="flex items-center justify-between gap-3 pt-4 mt-4 border-t-2 border-orange-500">
                    <span className="text-2xl font-black">{promo.price}</span>
                    <button
                      onClick={() => handleAddToCart(promo)}
                      className="bg-black text-orange-400 px-3 py-2 rounded font-bold hover:bg-gray-900 transition flex items-center gap-2 whitespace-nowrap"
                    >
                      <ShoppingCart size={16} />
                      Agregar
                    </button>
                  </div>
                </div>
                <div className="w-40 h-auto bg-gray-200">
                  <img
                    src={promo.image || "/placeholder.svg"}
                    alt={promo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hamburguesas Section */}
        <div className="mb-12">
          <h3 className="text-4xl font-black text-orange-400 mb-6">HAMBURGUESAS</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {BURGERS.map((burger) => (
              <MenuCard key={burger.id} item={burger} onAddToCart={handleAddToCart} />
            ))}
          </div>
        </div>

        {/* Veggie Section */}
        <div className="mb-12">
          <h3 className="text-4xl font-black text-orange-400 mb-6">VEGGIE</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {VEGGIE.map((item) => (
              <MenuCard key={item.id} item={item} onAddToCart={handleAddToCart} />
            ))}
          </div>
        </div>

        {/* Minutas Section */}
        <div className="mb-12">
          <h3 className="text-4xl font-black text-orange-400 mb-6">MINUTAS</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {MINUTAS.map((item) => (
              <MenuCard key={item.id} item={item} onAddToCart={handleAddToCart} />
            ))}
          </div>
        </div>

        {/* Bebidas Section */}
        <div className="mb-12">
          <h3 className="text-4xl font-black text-orange-400 mb-6">BEBIDAS</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {BEBIDAS.map((item) => (
              <MenuCard key={item.id} item={item} onAddToCart={handleAddToCart} />
            ))}
          </div>
        </div>

        {/* Extras Section */}
        <div className="mb-12">
          <h3 className="text-4xl font-black text-orange-400 mb-6">EXTRAS</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {EXTRAS.map((item) => (
              <MenuCard key={item.id} item={item} onAddToCart={handleAddToCart} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
