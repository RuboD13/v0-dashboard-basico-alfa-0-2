import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
})

export const metadata: Metadata = {
  title: "RentAFlow | Automatiza la gestión de alquileres",
  description:
    "La plataforma de automatización líder para agencias inmobiliarias. Desde la captación de leads hasta la firma del contrato. Ahorra tiempo, cierra más contratos.",
  keywords: [
    "alquiler",
    "inmobiliaria",
    "automatización",
    "leads",
    "gestión de propiedades",
    "agencia inmobiliaria",
    "SaaS",
    "B2B",
  ],
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
    title: "RentAFlow | Automatiza la gestión de alquileres",
    description: "La plataforma de automatización líder para agencias inmobiliarias.",
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
    <html lang="es">
      <body className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
