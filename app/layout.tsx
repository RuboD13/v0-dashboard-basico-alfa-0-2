import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "RentAFlow - Automatiza tu Gestión de Alquileres",
  description:
    "Desde la captación del lead hasta la firma del contrato. RentAFlow conecta portales inmobiliarios, valida inquilinos, programa visitas y gestiona documentación automáticamente.",
  generator: "v0.app",
  keywords: ["alquileres", "inmobiliaria", "automatización", "gestión de propiedades", "leads inmobiliarios"],
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
    description: "Automatiza tu gestión de alquileres de principio a fin",
    type: "website",
    locale: "es_ES",
  },
}

export const viewport: Viewport = {
  themeColor: "#4A6741",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
