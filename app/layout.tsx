import type React from "react"
import type { Metadata } from "next"
import { Bebas_Neue, Oswald, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
})

const oswald = Oswald({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "El Patrón del Truck - Las Mejores Hamburguesas",
  description:
    "Hamburguesas artesanales deliciosas en 4 sucursales. Marina, Ramos, Atalaya y Morón. ¡Ordena por WhatsApp!",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${bebasNeue.variable} ${oswald.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
