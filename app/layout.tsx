import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "RentAFlow - Automatiza tu Gestión de Alquileres",
  description:
    "Captura leads de todos los portales, valida inquilinos con IA, programa visitas y gestiona documentos. La plataforma todo-en-uno para agencias inmobiliarias.",
  generator: "v0.app",
  keywords: [
    "gestión alquileres",
    "automatización inmobiliaria",
    "leads inmobiliarios",
    "software agencias",
    "RentAFlow",
  ],
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
    description: "La plataforma todo-en-uno para agencias inmobiliarias. Automatiza leads, visitas y documentación.",
    type: "website",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5B7FD3",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
