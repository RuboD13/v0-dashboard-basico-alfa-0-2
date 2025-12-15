"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState("pipeline")

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Explora el Interior del Dashboard
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Una plataforma intuitiva y poderosa diseñada para gestionar todo tu flujo de alquileres.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="pipeline" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 md:grid-cols-4 mb-12">
            <TabsTrigger value="pipeline">Pipeline</TabsTrigger>
            <TabsTrigger value="calendario">Calendario</TabsTrigger>
            <TabsTrigger value="metricas">Métricas</TabsTrigger>
            <TabsTrigger value="documentos">Documentos</TabsTrigger>
          </TabsList>

          {/* Pipeline View */}
          <TabsContent value="pipeline">
            <div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {["Nuevo", "Validado", "Visita", "Documentación", "Firmado"].map((stage, idx) => (
                  <div key={idx} className="bg-muted/50 rounded-xl p-4 min-h-[300px]">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-sm font-semibold text-foreground">{stage}</h4>
                      <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                        {idx === 0 ? "8" : idx === 1 ? "5" : idx === 2 ? "3" : idx === 3 ? "2" : "12"}
                      </span>
                    </div>
                    <div className="space-y-2">
                      {idx === 0 && (
                        <>
                          <div className="bg-card p-3 rounded-lg border border-border">
                            <div className="text-xs font-medium text-foreground">Maria García</div>
                            <div className="text-xs text-muted-foreground">Piso Gran Vía</div>
                          </div>
                          <div className="bg-card p-3 rounded-lg border border-border">
                            <div className="text-xs font-medium text-foreground">Juan Pérez</div>
                            <div className="text-xs text-muted-foreground">Ático Centro</div>
                          </div>
                        </>
                      )}
                      {idx === 1 && (
                        <div className="bg-card p-3 rounded-lg border border-border">
                          <div className="text-xs font-medium text-foreground">Laura Martín</div>
                          <div className="text-xs text-muted-foreground">Piso Malasaña</div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Calendario View */}
          <TabsContent value="calendario">
            <div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
              <div className="grid grid-cols-7 gap-2 mb-4">
                {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map((day) => (
                  <div key={day} className="text-center text-xs font-semibold text-muted-foreground p-2">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 35 }).map((_, idx) => (
                  <div
                    key={idx}
                    className={`aspect-square rounded-lg border border-border p-2 ${
                      idx === 10 || idx === 15 || idx === 22 ? "bg-primary/10 border-primary/30" : "bg-muted/30"
                    }`}
                  >
                    <div className="text-xs font-medium text-foreground">{idx + 1}</div>
                    {idx === 10 && <div className="text-xs text-primary mt-1">3 visitas</div>}
                    {idx === 15 && <div className="text-xs text-primary mt-1">2 visitas</div>}
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Métricas View */}
          <TabsContent value="metricas">
            <div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-muted/50 rounded-xl">
                  <div className="text-sm text-muted-foreground mb-1">Tasa de Conversión</div>
                  <div className="text-3xl font-bold text-foreground">47%</div>
                  <div className="text-xs text-success mt-1">+12% vs mes anterior</div>
                </div>
                <div className="p-6 bg-muted/50 rounded-xl">
                  <div className="text-sm text-muted-foreground mb-1">Tiempo Respuesta</div>
                  <div className="text-3xl font-bold text-foreground">28s</div>
                  <div className="text-xs text-success mt-1">-65% vs manual</div>
                </div>
                <div className="p-6 bg-muted/50 rounded-xl">
                  <div className="text-sm text-muted-foreground mb-1">Contratos/Mes</div>
                  <div className="text-3xl font-bold text-foreground">23</div>
                  <div className="text-xs text-success mt-1">+8 vs mes anterior</div>
                </div>
              </div>
              {/* Mock Chart */}
              <div className="h-64 bg-muted/30 rounded-xl flex items-end justify-around p-4 gap-2">
                {[40, 65, 45, 80, 55, 90, 70, 85, 95, 75, 100, 90].map((height, idx) => (
                  <div
                    key={idx}
                    className="flex-1 bg-gradient-to-t from-primary to-accent rounded-t-lg"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Documentos View */}
          <TabsContent value="documentos">
            <div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-lg">📄</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">Contrato_MariaPiso_GranVia.pdf</div>
                      <div className="text-xs text-muted-foreground">Subido hace 2 horas • 1.2 MB</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-success/10 rounded-full">
                    <span className="text-xs font-medium text-success">Firmado</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <span className="text-lg">🆔</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">DNI_Juan_Perez_frontal.jpg</div>
                      <div className="text-xs text-muted-foreground">Subido hace 5 horas • 856 KB</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-accent/10 rounded-full">
                    <span className="text-xs font-medium text-accent">Validado</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <span className="text-lg">💰</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">Nomina_Laura_Martin_Marzo.pdf</div>
                      <div className="text-xs text-muted-foreground">Subido ayer • 432 KB</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-muted/10 rounded-full">
                    <span className="text-xs font-medium text-muted-foreground">Pendiente</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
