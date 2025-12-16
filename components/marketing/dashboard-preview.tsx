"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Users, BarChart3, MessageSquare, CheckCircle2, Clock, Building2 } from "lucide-react"

const tabs = [
  {
    id: "leads",
    label: "Gestión de Leads",
    icon: Users,
    description: "Lista completa de leads con estado, ingresos y origen. Filtra por anuncio y estado.",
  },
  {
    id: "anuncios",
    label: "Centro de Anuncios",
    icon: Building2,
    description: "Control de todos tus inmuebles activos con métricas de rendimiento y consumo del plan.",
  },
  {
    id: "metricas",
    label: "Estadísticas",
    icon: BarChart3,
    description: "Análisis detallado: leads totales, tasa de conversión, tiempo ahorrado y calidad de datos.",
  },
  {
    id: "comunicaciones",
    label: "Comunicaciones",
    icon: MessageSquare,
    description: "Historial de WhatsApps y emails enviados automáticamente a cada candidato.",
  },
]

function LeadsMockup() {
  const leads = [
    { name: "María García", status: "Datos Completos", score: "98%", income: "3.200 EUR", property: "Piso Centro" },
    { name: "Carlos López", status: "Incompleto", score: "45%", income: "- EUR", property: "Río Corrientes" },
    { name: "Ana Martínez", status: "Datos Completos", score: "100%", income: "2.800 EUR", property: "José María" },
    { name: "Pedro Sánchez", status: "Pendiente", score: "72%", income: "2.100 EUR", property: "Piso Centro" },
  ]

  return (
    <div className="p-4 lg:p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-foreground">Leads</h3>
          <p className="text-xs text-muted-foreground">Gestión de clientes potenciales</p>
        </div>
        <div className="flex gap-2">
          <div className="text-xs bg-secondary px-3 py-1.5 rounded-lg">
            Total: <span className="font-semibold">376</span>
          </div>
          <div className="text-xs bg-success/10 text-success px-3 py-1.5 rounded-lg">
            Conversión: <span className="font-semibold">27%</span>
          </div>
        </div>
      </div>
      <div className="space-y-2">
        {leads.map((lead, i) => (
          <div key={i} className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{lead.name}</p>
                <p className="text-xs text-muted-foreground">{lead.property}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-muted-foreground">{lead.income}</span>
              <span
                className={`text-xs px-2 py-1 rounded ${
                  lead.status === "Datos Completos"
                    ? "bg-success/10 text-success"
                    : lead.status === "Incompleto"
                      ? "bg-chart-4/10 text-chart-4"
                      : "bg-secondary text-muted-foreground"
                }`}
              >
                {lead.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function AnunciosMockup() {
  const anuncios = [
    { name: "Río Corrientes", leads: 115, emails: 9, whatsapps: 10, completos: 2, time: "00:43h" },
    { name: "José María de Pereda 3", leads: 109, emails: 1, whatsapps: 1, completos: 0, time: "00:04h" },
    { name: "Hab Doble - Ascao 55", leads: 146, emails: 0, whatsapps: 0, completos: 0, time: "00:00h" },
  ]

  return (
    <div className="p-4 lg:p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-foreground">Centro de Anuncios</h3>
          <p className="text-xs text-muted-foreground">Control operativo y económico por anuncio</p>
        </div>
        <div className="text-xs bg-secondary px-3 py-1.5 rounded-lg">320 leads usados</div>
      </div>
      <div className="space-y-3">
        {anuncios.map((anuncio, i) => (
          <div key={i} className="p-4 border border-border rounded-lg bg-card">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm text-foreground">{anuncio.name}</span>
                <span className="text-xs bg-success/10 text-success px-2 py-0.5 rounded">Activo</span>
              </div>
              <Button size="sm" variant="outline" className="text-xs h-7 bg-transparent">
                Programar
              </Button>
            </div>
            <div className="grid grid-cols-6 gap-2 text-center">
              {[
                { label: "Nuevos", value: anuncio.leads },
                { label: "Emails", value: anuncio.emails },
                { label: "WhatsApps", value: anuncio.whatsapps },
                { label: "Completos", value: anuncio.completos },
                { label: "A la espera", value: Math.floor(anuncio.leads * 0.9) },
                { label: "Tiempo", value: anuncio.time },
              ].map((stat, j) => (
                <div key={j}>
                  <p className={`text-sm font-semibold ${j === 0 ? "text-primary" : "text-foreground"}`}>
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MetricasMockup() {
  return (
    <div className="p-4 lg:p-6">
      <div className="mb-4">
        <h3 className="font-semibold text-foreground">Estadísticas - Río Corrientes</h3>
        <p className="text-xs text-muted-foreground">Análisis detallado del rendimiento</p>
      </div>

      <div className="grid grid-cols-4 gap-3 mb-6">
        {[
          { label: "Leads Totales", value: "116", color: "text-foreground" },
          { label: "Datos Completos", value: "40", color: "text-success" },
          { label: "Tasa Conversión", value: "34.5%", color: "text-primary" },
          { label: "Descartados", value: "0", color: "text-destructive" },
        ].map((stat, i) => (
          <div key={i} className="bg-secondary/30 rounded-lg p-3 text-center">
            <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-secondary/30 rounded-lg p-4">
          <p className="text-xs font-medium text-muted-foreground mb-3">Leads por día</p>
          <div className="flex items-end gap-1 h-20">
            {[2, 5, 3, 8, 12, 28, 45, 58, 110].map((val, i) => (
              <div key={i} className="flex-1 bg-primary/60 rounded-t" style={{ height: `${(val / 110) * 100}%` }} />
            ))}
          </div>
        </div>
        <div className="bg-secondary/30 rounded-lg p-4">
          <p className="text-xs font-medium text-muted-foreground mb-3">Análisis de Calidad</p>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Leads Rebotados</span>
              <span className="font-medium text-foreground">6</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Datos Incompletos</span>
              <span className="font-medium text-chart-4">40</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Necesidad de Aval</span>
              <span className="font-medium text-foreground">0</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between p-3 bg-success/10 rounded-lg">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-success" />
          <span className="text-sm text-foreground">Tiempo ahorrado</span>
        </div>
        <span className="font-bold text-success">00:49h</span>
      </div>
    </div>
  )
}

function ComunicacionesMockup() {
  const messages = [
    {
      type: "whatsapp",
      date: "11/12/2025",
      preview: "Hola Juan, tu perfil ha sido aprobado. Revisaremos tu candidatura...",
    },
    {
      type: "email",
      date: "10/12/2025",
      preview: "Te damos la bienvenida - Proceso de alquiler de San Dimas",
    },
    {
      type: "whatsapp",
      date: "09/12/2025",
      preview: "Tu solicitud necesita una pequeña actualización. Para continuar...",
    },
  ]

  return (
    <div className="p-4 lg:p-6">
      <div className="mb-4">
        <h3 className="font-semibold text-foreground">Comunicaciones</h3>
        <p className="text-xs text-muted-foreground">Historial de mensajes automáticos</p>
      </div>

      <div className="space-y-3">
        {messages.map((msg, i) => (
          <div key={i} className="p-3 border border-border rounded-lg bg-card">
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`text-xs px-2 py-1 rounded ${
                  msg.type === "whatsapp" ? "bg-success text-white" : "bg-primary text-primary-foreground"
                }`}
              >
                {msg.type === "whatsapp" ? "WhatsApp" : "Email"}
              </span>
              <span className="text-xs text-muted-foreground">{msg.date}</span>
            </div>
            <p className="text-sm text-foreground">{msg.preview}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 p-4 bg-success/5 border border-success/20 rounded-lg">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4 text-success" />
          </div>
          <div className="bg-success/10 rounded-lg p-3 flex-1">
            <p className="text-sm text-foreground">
              Hola María, tu perfil ha sido <strong>aprobado</strong>
            </p>
            <p className="text-xs text-muted-foreground mt-1">Revisaremos tu candidatura junto al propietario...</p>
            <p className="text-xs text-muted-foreground mt-2 italic">Powered by RentAFlow</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function DashboardPreview() {
  const [activeTab, setActiveTab] = useState("leads")
  const activeTabData = tabs.find((t) => t.id === activeTab)

  const renderMockup = () => {
    switch (activeTab) {
      case "leads":
        return <LeadsMockup />
      case "anuncios":
        return <AnunciosMockup />
      case "metricas":
        return <MetricasMockup />
      case "comunicaciones":
        return <ComunicacionesMockup />
      default:
        return <LeadsMockup />
    }
  }

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

        {/* Dashboard Preview with React Mockups */}
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

          <div className="flex min-h-[400px]">
            {/* Sidebar mockup */}
            <div className="w-48 bg-secondary/20 border-r border-border p-4 hidden lg:block">
              <div className="font-semibold text-sm text-foreground mb-4">RentAFlow</div>
              <div className="space-y-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-2 text-xs px-3 py-2 rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:bg-secondary"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1">{renderMockup()}</div>
          </div>
        </div>

        {/* Tab Description */}
        <p className="text-center text-muted-foreground mt-6">{activeTabData?.description}</p>
      </div>
    </section>
  )
}
