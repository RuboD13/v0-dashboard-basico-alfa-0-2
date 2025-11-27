import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "RentAFlow - Automatiza tu Gestión de Alquileres",
  description:
    "Convierte leads de portales inmobiliarios en contratos firmados. Respuestas automáticas, validación inteligente, programación de visitas y gestión documental en una sola plataforma.",
  keywords: [
    "automatización inmobiliaria",
    "gestión alquileres",
    "leads inmobiliarios",
    "CRM inmobiliario",
    "proptech",
  ],
  authors: [{ name: "RentAFlow" }],
  generator: "v0.app",
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
  openGraph: {
    title: "RentAFlow - Automatiza tu Gestión de Alquileres",
    description:
      "La plataforma de automatización para agencias inmobiliarias. Convierte leads en contratos de manera eficiente.",
    type: "website",
    locale: "es_ES",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2D5A27",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
