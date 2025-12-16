"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Users, Calendar, BarChart3, FileText, ChevronRight } from "lucide-react"

const tabs = [
  {
    id: "pipeline",
    label: "Pipeline de Leads",
    icon: Users,
    description: "Vista Kanban de todos tus leads organizados por etapa del proceso.",
  },
  {
    id: "calendario",
    label: "Calendario",
    icon: Calendar,
    description: "Todas tus visitas programadas sincronizadas con tu calendario.",
  },
  {
    id: "metricas",
    label: "Métricas",
    icon: BarChart3,
    description: "KPIs en tiempo real: conversión, tiempos, ocupación.",
  },
  {
    id: "documentos",
    label: "Documentos",
    icon: FileText,
    description: "Gestión centralizada de documentos sensibles con cifrado.",
  },
]

export function DashboardPreview() {
  const [activeTab, setActiveTab] = useState("pipeline")

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

        {/* Dashboard Preview */}
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

          {/* Dashboard Content */}
          <div className="p-6 lg:p-8 min-h-[400px]">
            {activeTab === "pipeline" && <PipelineView />}
            {activeTab === "calendario" && <CalendarView />}
            {activeTab === "metricas" && <MetricsView />}
            {activeTab === "documentos" && <DocumentsView />}
          </div>
        </div>

        {/* Tab Description */}
        <p className="text-center text-muted-foreground mt-6">{tabs.find((t) => t.id === activeTab)?.description}</p>
      </div>
    </section>
  )
}

function PipelineView() {
  const columns = [
    { name: "Nuevo", color: "bg-muted", count: 12 },
    { name: "Validado", color: "bg-primary/20", count: 8 },
    { name: "Visita Agendada", color: "bg-accent/20", count: 5 },
    { name: "Documentación", color: "bg-chart-4/20", count: 3 },
    { name: "Firmado", color: "bg-success/20", count: 2 },
  ]

  const leads = [
    { name: "María G.", property: "Piso Centro", status: "verified" },
    { name: "Carlos R.", property: "Ático Norte", status: "pending" },
    { name: "Ana L.", property: "Estudio Sur", status: "verified" },
  ]

  return (
    <div className="grid grid-cols-5 gap-3">
      {columns.map((col, colIndex) => (
        <div key={col.name} className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">{col.name}</span>
            <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">{col.count}</span>
          </div>
          <div className={`rounded-lg p-2 ${col.color} min-h-[200px] space-y-2`}>
            {colIndex < 3 &&
              leads.slice(0, 3 - colIndex).map((lead, i) => (
                <div key={i} className="bg-card rounded-lg p-3 shadow-sm border border-border">
                  <p className="text-sm font-medium text-foreground">{lead.name}</p>
                  <p className="text-xs text-muted-foreground">{lead.property}</p>
                  {lead.status === "verified" && (
                    <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-success/10 text-success">
                      Verificado
                    </span>
                  )}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function CalendarView() {
  const days = ["Lun", "Mar", "Mié", "Jue", "Vie"]
  const hours = ["09:00", "10:00", "11:00", "12:00", "16:00", "17:00"]
  const appointments = [
    { day: 0, hour: 1, name: "María G.", property: "Piso Centro" },
    { day: 1, hour: 4, name: "Carlos R.", property: "Ático Norte" },
    { day: 2, hour: 2, name: "Ana L.", property: "Estudio Sur" },
    { day: 4, hour: 0, name: "Pedro M.", property: "Dúplex Este" },
  ]

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[500px]">
        <div className="grid grid-cols-6 gap-2 mb-2">
          <div />
          {days.map((day) => (
            <div key={day} className="text-center text-sm font-medium text-foreground">
              {day}
            </div>
          ))}
        </div>
        {hours.map((hour, hourIndex) => (
          <div key={hour} className="grid grid-cols-6 gap-2 mb-2">
            <div className="text-xs text-muted-foreground text-right pr-2">{hour}</div>
            {days.map((_, dayIndex) => {
              const apt = appointments.find((a) => a.day === dayIndex && a.hour === hourIndex)
              return (
                <div
                  key={dayIndex}
                  className={`h-12 rounded-lg border ${
                    apt ? "bg-primary/10 border-primary/30" : "bg-secondary/30 border-transparent"
                  }`}
                >
                  {apt && (
                    <div className="p-1">
                      <p className="text-xs font-medium text-foreground truncate">{apt.name}</p>
                      <p className="text-[10px] text-muted-foreground truncate">{apt.property}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

function MetricsView() {
  const metrics = [
    { label: "Leads este mes", value: "156", change: "+23%", positive: true },
    { label: "Tasa conversión", value: "34%", change: "+5%", positive: true },
    { label: "Tiempo respuesta", value: "28s", change: "-12s", positive: true },
    { label: "Visitas agendadas", value: "45", change: "+8", positive: true },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="bg-secondary/30 rounded-xl p-4">
            <p className="text-sm text-muted-foreground">{metric.label}</p>
            <p className="text-2xl font-bold text-foreground mt-1">{metric.value}</p>
            <p className={`text-xs mt-1 ${metric.positive ? "text-success" : "text-destructive"}`}>
              {metric.change} vs mes anterior
            </p>
          </div>
        ))}
      </div>

      {/* Simple Chart Representation */}
      <div className="bg-secondary/30 rounded-xl p-4">
        <p className="text-sm font-medium text-foreground mb-4">Conversión por etapa</p>
        <div className="space-y-3">
          {[
            { stage: "Lead → Validado", pct: 65 },
            { stage: "Validado → Visita", pct: 78 },
            { stage: "Visita → Documentación", pct: 45 },
            { stage: "Documentación → Firmado", pct: 82 },
          ].map((item) => (
            <div key={item.stage} className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">{item.stage}</span>
                <span className="text-foreground font-medium">{item.pct}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: `${item.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function DocumentsView() {
  const documents = [
    { name: "Nóminas María G.", type: "PDF", status: "Verificado", date: "Hoy" },
    { name: "DNI Carlos R.", type: "IMG", status: "Pendiente", date: "Ayer" },
    { name: "Contrato laboral Ana L.", type: "PDF", status: "Verificado", date: "Hace 2 días" },
    { name: "Aval bancario Pedro M.", type: "PDF", status: "En revisión", date: "Hace 3 días" },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-foreground">Documentos recientes</p>
        <Button variant="outline" size="sm" className="text-xs bg-transparent">
          Ver todos
          <ChevronRight className="w-3 h-3 ml-1" />
        </Button>
      </div>

      <div className="space-y-2">
        {documents.map((doc, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{doc.name}</p>
                <p className="text-xs text-muted-foreground">
                  {doc.type} • {doc.date}
                </p>
              </div>
            </div>
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                doc.status === "Verificado"
                  ? "bg-success/10 text-success"
                  : doc.status === "Pendiente"
                    ? "bg-chart-4/10 text-chart-4"
                    : "bg-primary/10 text-primary"
              }`}
            >
              {doc.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
