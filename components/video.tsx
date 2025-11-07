export default function Video() {
  return (
    <section id="video" className="py-20 px-4 md:px-8 bg-gradient-to-b from-green-700 to-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-black mb-12 text-center text-orange-400">MIRA CÓMO LO HACEMOS</h2>

        <div className="relative w-full pb-[56.25%] rounded-lg overflow-hidden shadow-2xl border-4 border-orange-400">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/9ANQYGrPqA0"
            title="Preparación de hamburguesas"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}
