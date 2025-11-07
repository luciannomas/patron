export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8 border-t-4 border-orange-400">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-3xl font-black mb-4 text-orange-400">EL PATRÓN</h3>
            <p className="text-gray-400 font-semibold">Hamburguesas artesanales hechas con fuego y pasión</p>
          </div>

          <div>
            <h4 className="font-black mb-4 text-lg text-orange-400">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#menu" className="hover:text-orange-400 transition font-semibold">
                  Menú
                </a>
              </li>
              <li>
                <a href="#branches" className="hover:text-orange-400 transition font-semibold">
                  Sucursales
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-400 transition font-semibold">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-4 text-lg text-orange-400">Sucursales</h4>
            <ul className="space-y-2 text-gray-400 font-semibold">
              <li>Marina</li>
              <li>Ramos</li>
              <li>Atalaya</li>
              <li>Morón</li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-4 text-lg text-orange-400">Síguenos</h4>
            <div className="space-y-2 text-gray-400 font-semibold">
              <p>📱 Instagram</p>
              <p>👍 Facebook</p>
              <p>🐦 Twitter</p>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-400 pt-8 text-center text-gray-400">
          <p className="font-bold">&copy; 2025 EL PATRÓN del Truck. Todos los derechos reservados.</p>
          <p className="text-sm mt-2 font-semibold">Hecho con fuego para los amantes de las hamburguesas</p>
        </div>
      </div>
    </footer>
  )
}
