import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "RentAFlow - Automatiza tu Gestión de Alquileres con IA",
  description:
    "Desde el primer contacto hasta la firma del contrato. RentAFlow responde, filtra, agenda visitas y recopila documentación automáticamente. Todo con tu marca.",
  keywords: ["gestión alquileres", "inmobiliaria", "automatización", "IA", "leads", "SaaS", "white-label"],
  authors: [{ name: "RentAFlow" }],
  openGraph: {
    title: "RentAFlow - Automatiza tu Gestión de Alquileres con IA",
    description:
      "Desde el primer contacto hasta la firma del contrato. Automatización completa para agencias inmobiliarias.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "RentAFlow - Automatiza tu Gestión de Alquileres con IA",
    description: "Desde el primer contacto hasta la firma del contrato.",
  },
    generator: 'v0.app'
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4F46E5",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
