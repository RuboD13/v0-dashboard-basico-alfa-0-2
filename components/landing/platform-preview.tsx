import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PlatformPreview() {
  return (
    <section className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Interior de la Plataforma</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Vista esquemática de las funcionalidades principales
          </p>
        </div>

        <Tabs defaultValue="dashboard" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="leads">Leads</TabsTrigger>
            <TabsTrigger value="calendar">Calendario</TabsTrigger>
            <TabsTrigger value="documents">Documentos</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <Card>
              <CardContent className="p-8">
                <div className="aspect-video bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-lg border border-border flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <h3 className="text-2xl font-bold">Panel de Métricas</h3>
                    <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                      <div className="p-4 bg-background rounded-lg border border-border">
                        <div className="text-3xl font-bold text-primary">156</div>
                        <div className="text-sm text-muted-foreground">Leads Activos</div>
                      </div>
                      <div className="p-4 bg-background rounded-lg border border-border">
                        <div className="text-3xl font-bold text-green-500">89%</div>
                        <div className="text-sm text-muted-foreground">Tasa Conversión</div>
                      </div>
                      <div className="p-4 bg-background rounded-lg border border-border">
                        <div className="text-3xl font-bold text-orange-500">23</div>
                        <div className="text-sm text-muted-foreground">Visitas Hoy</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="leads">
            <Card>
              <CardContent className="p-8">
                <div className="aspect-video bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-4">Gestión de Leads</h3>
                  <div className="space-y-3">
                    {["Nuevo", "Validando", "Visita Programada", "Documentación", "Cerrado"].map((status, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 p-3 bg-background rounded-lg border border-border"
                      >
                        <div
                          className={`w-3 h-3 rounded-full ${
                            i === 0
                              ? "bg-blue-500"
                              : i === 1
                                ? "bg-purple-500"
                                : i === 2
                                  ? "bg-green-500"
                                  : i === 3
                                    ? "bg-orange-500"
                                    : "bg-primary"
                          }`}
                        />
                        <span className="font-medium">{status}</span>
                        <span className="ml-auto text-muted-foreground">
                          {Math.floor(Math.random() * 30) + 5} leads
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="calendar">
            <Card>
              <CardContent className="p-8">
                <div className="aspect-video bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-4">Calendario de Visitas</h3>
                  <div className="grid grid-cols-7 gap-2">
                    {Array.from({ length: 28 }).map((_, i) => (
                      <div
                        key={i}
                        className={`aspect-square rounded-lg border border-border flex items-center justify-center text-sm ${
                          i % 7 === 3 || i % 7 === 5 ? "bg-primary/20 font-bold" : "bg-background"
                        }`}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents">
            <Card>
              <CardContent className="p-8">
                <div className="aspect-video bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-lg border border-border p-6">
                  <h3 className="text-xl font-bold mb-4">Centro de Documentación</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {["Nóminas", "DNI/NIE", "Contratos Laborales", "Garantías"].map((doc, i) => (
                      <div key={i} className="p-4 bg-background rounded-lg border border-border">
                        <div className="w-12 h-12 rounded-lg bg-orange-500/10 mb-3 flex items-center justify-center">
                          📄
                        </div>
                        <div className="font-medium">{doc}</div>
                        <div className="text-sm text-muted-foreground">Pendiente de subida</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
