import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "RentAFlow - Automatiza la Gestión de Alquileres con IA",
  description:
    "Plataforma de automatización para agencias inmobiliarias. Gestiona leads, visitas, documentación y contratos de alquiler en un solo lugar.",
  keywords: ["gestión alquileres", "automatización inmobiliaria", "CRM propiedades", "IA alquileres"],
  openGraph: {
    title: "RentAFlow - Automatiza la Gestión de Alquileres con IA",
    description: "Reduce 90% de tareas manuales en tu agencia inmobiliaria",
    type: "website",
  },
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
