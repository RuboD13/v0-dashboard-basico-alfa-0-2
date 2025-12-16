"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Users, Calendar, BarChart3, FileText, MessageSquare, Mail } from "lucide-react"
import Image from "next/image"

const tabs = [
  {
    id: "leads",
    label: "Gestión de Leads",
    icon: Users,
    description: "Panel completo de leads con filtros por anuncio, estados y tasa de conversión en tiempo real.",
    image: "/images/image.png",
  },
  {
    id: "anuncios",
    label: "Centro de Anuncios",
    icon: BarChart3,
    description: "Métricas por propiedad: leads nuevos, emails enviados, WhatsApps, tiempo ahorrado y más.",
    image: "/images/image.png",
  },
  {
    id: "validacion",
    label: "Validación IA",
    icon: FileText,
    description: "Análisis automático de requisitos de aval, ingresos y tasa de esfuerzo para cada candidato.",
    image: "/images/image.png",
  },
  {
    id: "visitas",
    label: "Programar Visitas",
    icon: Calendar,
    description: "Reprograma visitas con un clic, selecciona agente y sincroniza con tu calendario.",
    image: "/images/image.png",
  },
  {
    id: "whatsapp",
    label: "WhatsApp Auto",
    icon: MessageSquare,
    description: "Mensajes automáticos personalizados por WhatsApp con seguimiento de entregas.",
    image: "/images/image.png",
  },
  {
    id: "email",
    label: "Emails Automáticos",
    icon: Mail,
    description: "Emails de bienvenida, seguimiento y solicitud de documentación con diseño profesional.",
    image: "/images/image.png",
  },
]

export function DashboardPreview() {
  const [activeTab, setActiveTab] = useState("leads")
  const activeTabData = tabs.find((t) => t.id === activeTab)

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Un dashboard diseñado para <span className="text-primary">agentes inmobiliarios</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Interfaz intuitiva que te permite supervisar todo el flujo de alquileres desde un solo lugar.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTab(tab.id)}
                className="gap-2"
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </Button>
            )
          })}
        </div>

        {/* Dashboard Preview with Real Screenshots */}
        <div className="relative bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
          {/* Browser Chrome */}
          <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-chart-4/60" />
              <div className="w-3 h-3 rounded-full bg-success/60" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="px-4 py-1 bg-background rounded text-xs text-muted-foreground">
                app.rentaflow.com/dashboard
              </div>
            </div>
          </div>

          {/* Real Screenshot Image */}
          <div className="relative w-full aspect-[16/10] overflow-hidden">
            {activeTabData && (
              <Image
                src={activeTabData.image || "/placeholder.svg"}
                alt={activeTabData.label}
                fill
                className="object-cover object-top transition-opacity duration-300"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            )}
          </div>
        </div>

        {/* Tab Description */}
        <p className="text-center text-muted-foreground mt-6 max-w-2xl mx-auto">{activeTabData?.description}</p>
      </div>
    </section>
  )
}
