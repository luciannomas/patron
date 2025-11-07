"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulario enviado:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-black">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-5xl font-black mb-4 text-center text-orange-400">CONTACTO</h2>
        <p className="text-xl text-gray-400 text-center mb-12 font-semibold">
          ¿Preguntas o sugerencias? Nos encantaría escucharte
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-900 rounded-lg shadow-2xl p-8 border-2 border-orange-400"
        >
          <div>
            <label htmlFor="name" className="block text-lg font-black text-white mb-2">
              Nombre *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-orange-400 rounded-lg focus:outline-none focus:border-green-400 bg-black text-white"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-black text-white mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-orange-400 rounded-lg focus:outline-none focus:border-green-400 bg-black text-white"
              placeholder="tu.email@ejemplo.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-lg font-black text-white mb-2">
              Asunto *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border-2 border-orange-400 rounded-lg focus:outline-none focus:border-green-400 bg-black text-white"
              placeholder="¿Cuál es tu consulta?"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-black text-white mb-2">
              Mensaje *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border-2 border-orange-400 rounded-lg focus:outline-none focus:border-green-400 bg-black text-white resize-none"
              placeholder="Cuéntanos más..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-400 text-black py-3 rounded-lg font-black text-lg hover:bg-orange-500 transition"
          >
            {submitted ? "✓ Mensaje Enviado" : "Enviar Mensaje"}
          </button>
        </form>

        <div className="flex gap-8 justify-center mt-12 flex-wrap">
          <a
            href="tel:+5491125293394"
            className="flex items-center gap-3 text-orange-400 hover:text-green-400 transition font-bold"
          >
            <Phone size={24} />
            <span>+54 11 2529-3394</span>
          </a>
          <a
            href="mailto:elpatrondeltruck@gmail.com"
            className="flex items-center gap-3 text-orange-400 hover:text-green-400 transition font-bold"
          >
            <Mail size={24} />
            <span>elpatrondeltruck@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  )
}
