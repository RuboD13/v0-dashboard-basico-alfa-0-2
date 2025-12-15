import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RentAFlow - Automatiza tu Gestión de Alquileres con IA",
  description:
    "Convierte leads de alquiler en contratos automáticamente. Respuesta 24/7, validación IA, gestión de visitas y documentación centralizada para agencias inmobiliarias.",
  generator: "v0.app",
  keywords: [
    "gestión alquileres",
    "automatización inmobiliaria",
    "IA para inmobiliarias",
    "CRM alquileres",
    "software inmobiliario",
  ],
  authors: [{ name: "RentAFlow" }],
  openGraph: {
    title: "RentAFlow - Automatiza tu Gestión de Alquileres",
    description:
      "Software de automatización inteligente para agencias inmobiliarias. Ahorra 3h/día y aumenta conversión 15%.",
    type: "website",
    locale: "es_ES",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
