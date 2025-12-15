import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RentAFlow | Automatiza la Gestión de Alquileres con IA",
  description:
    "Transforma leads en contratos automáticamente. Respuestas instantáneas 24/7, validación inteligente, agendamiento de visitas y documentación centralizada para agencias inmobiliarias.",
  generator: "v0.app",
  keywords: ["alquiler", "inmobiliaria", "automatización", "IA", "leads", "gestión de alquileres", "SaaS"],
  authors: [{ name: "RentAFlow" }],
  openGraph: {
    title: "RentAFlow | Automatiza la Gestión de Alquileres con IA",
    description:
      "Transforma leads en contratos automáticamente. La plataforma de automatización para agencias inmobiliarias modernas.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "RentAFlow | Automatiza la Gestión de Alquileres con IA",
    description: "Transforma leads en contratos automáticamente.",
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
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
