export default function JoinTeam() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-green-700 to-green-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl font-black mb-6 text-orange-400">TRABAJA CON NOSOTROS</h2>
        <p className="text-xl text-white mb-8 font-semibold">
          Estamos buscando gente apasionada por ofrecer el mejor servicio. Si eres entusiasta, responsable y te encanta
          el trabajo en equipo, ¡queremos conocerte!
        </p>

        <div className="bg-black/30 backdrop-blur rounded-lg p-8 mb-8 border-2 border-orange-400">
          <h3 className="text-3xl font-black text-orange-400 mb-6">POSICIONES DISPONIBLES</h3>
          <ul className="text-left text-white space-y-4 mb-8">
            <li className="flex items-center gap-3 text-lg font-semibold">
              <span className="text-3xl">👨‍🍳</span>
              <span>Cocineros/as de Hamburguesas</span>
            </li>
            <li className="flex items-center gap-3 text-lg font-semibold">
              <span className="text-3xl">🏍️</span>
              <span>Repartidores en Moto</span>
            </li>
            <li className="flex items-center gap-3 text-lg font-semibold">
              <span className="text-3xl">🤝</span>
              <span>Atención al Cliente</span>
            </li>
            <li className="flex items-center gap-3 text-lg font-semibold">
              <span className="text-3xl">📦</span>
              <span>Embaladores/as</span>
            </li>
          </ul>
        </div>

        <a
          href="#contact"
          className="bg-orange-400 text-black px-8 py-4 rounded-full font-black text-lg hover:bg-orange-500 transition inline-block"
        >
          ENVÍA TU CV
        </a>
      </div>
    </section>
  )
}
