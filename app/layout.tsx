import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// <CHANGE> Updated metadata for RentAFlow branding
export const metadata: Metadata = {
  title: "RentAFlow - Automatiza tu Gestión de Alquileres",
  description:
    "Plataforma B2B SaaS de automatización para agencias inmobiliarias. IA que captura leads, valida inquilinos, programa visitas y gestiona documentación.",
  generator: "v0.app",
  keywords: "gestión alquileres, automatización inmobiliaria, CRM inmobiliario, leads inmobiliarios, SaaS inmobiliario",
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
