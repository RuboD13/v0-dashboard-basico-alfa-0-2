import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Users,
  Home,
  Calendar,
  FileText,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  MoreHorizontal,
} from "lucide-react"

export function DashboardPreview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Vista Interior
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Todo tu negocio en un solo panel
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Métricas en tiempo real, gestión de leads y control total de tu pipeline de alquileres.
          </p>
        </div>

        {/* Dashboard Mock */}
        <div className="relative">
          {/* Browser Chrome */}
          <div className="bg-card rounded-t-xl border border-border border-b-0 p-3 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-secondary rounded-lg px-4 py-1 text-xs text-muted-foreground flex items-center gap-2">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
                app.rentaflow.es/dashboard
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="bg-card border border-border rounded-b-xl overflow-hidden shadow-2xl">
            <div className="flex">
              {/* Sidebar */}
              <div className="hidden lg:block w-64 bg-secondary/30 border-r border-border p-4">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-primary-foreground"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">RentAFlow</p>
                    <p className="text-xs text-muted-foreground">Tu Agencia</p>
                  </div>
                </div>

                <nav className="space-y-1">
                  {[
                    { icon: Home, label: "Dashboard", active: true },
                    { icon: Users, label: "Leads", active: false },
                    { icon: Calendar, label: "Visitas", active: false },
                    { icon: FileText, label: "Documentos", active: false },
                    { icon: TrendingUp, label: "Métricas", active: false },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                        item.active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary"
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.label}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Dashboard</h3>
                    <p className="text-sm text-muted-foreground">Resumen de hoy, 25 Nov 2025</p>
                  </div>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                    <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                    Sistema Activo
                  </Badge>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: "Leads Hoy", value: "23", change: "+12%", icon: Users, color: "blue" },
                    { label: "Visitas Programadas", value: "8", change: "+5%", icon: Calendar, color: "green" },
                    { label: "Docs. Pendientes", value: "4", change: "-2", icon: FileText, color: "yellow" },
                    { label: "Tasa Conversión", value: "34%", change: "+8%", icon: TrendingUp, color: "primary" },
                  ].map((stat, i) => (
                    <Card key={i} className="border-border/50">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <stat.icon className={`w-5 h-5 text-${stat.color}-500`} />
                          <span className="text-xs text-green-500 flex items-center">
                            {stat.change}
                            <ArrowUpRight className="w-3 h-3 ml-0.5" />
                          </span>
                        </div>
                        <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Recent Leads */}
                  <Card className="border-border/50">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-foreground">Leads Recientes</h4>
                        <button className="text-muted-foreground hover:text-foreground">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="space-y-3">
                        {[
                          {
                            name: "María García",
                            property: "Piso Calle Mayor 12",
                            status: "qualified",
                            time: "Hace 5 min",
                          },
                          { name: "Juan López", property: "Ático Gran Vía", status: "pending", time: "Hace 12 min" },
                          {
                            name: "Ana Martínez",
                            property: "Estudio Centro",
                            status: "qualified",
                            time: "Hace 25 min",
                          },
                        ].map((lead, i) => (
                          <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/50">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                              <span className="text-xs font-medium text-primary">
                                {lead.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-foreground truncate">{lead.name}</p>
                              <p className="text-xs text-muted-foreground truncate">{lead.property}</p>
                            </div>
                            <div className="text-right">
                              <Badge
                                variant="outline"
                                className={`text-xs ${
                                  lead.status === "qualified"
                                    ? "text-green-600 border-green-200"
                                    : "text-yellow-600 border-yellow-200"
                                }`}
                              >
                                {lead.status === "qualified" ? "Cualificado" : "Pendiente"}
                              </Badge>
                              <p className="text-xs text-muted-foreground mt-1">{lead.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Pipeline Status */}
                  <Card className="border-border/50">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-foreground">Estado del Pipeline</h4>
                        <button className="text-muted-foreground hover:text-foreground">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="space-y-4">
                        {[
                          { stage: "Nuevos Leads", count: 45, percentage: 100, color: "bg-blue-500" },
                          { stage: "En Validación", count: 32, percentage: 71, color: "bg-yellow-500" },
                          { stage: "Visita Agendada", count: 18, percentage: 40, color: "bg-green-500" },
                          { stage: "Documentación", count: 8, percentage: 18, color: "bg-primary" },
                          { stage: "Contrato", count: 3, percentage: 7, color: "bg-purple-500" },
                        ].map((stage, i) => (
                          <div key={i}>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm text-foreground">{stage.stage}</span>
                              <span className="text-sm font-medium text-foreground">{stage.count}</span>
                            </div>
                            <div className="h-2 bg-secondary rounded-full overflow-hidden">
                              <div
                                className={`h-full ${stage.color} rounded-full transition-all duration-500`}
                                style={{ width: `${stage.percentage}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Activity Timeline */}
                <Card className="border-border/50 mt-6">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-4">Actividad Automática de Hoy</h4>
                    <div className="space-y-4">
                      {[
                        {
                          icon: CheckCircle2,
                          color: "green",
                          text: "Lead cualificado: María García cumple requisitos",
                          time: "10:32",
                        },
                        {
                          icon: Calendar,
                          color: "blue",
                          text: "Visita agendada: Juan López - Mañana 11:00",
                          time: "10:15",
                        },
                        {
                          icon: FileText,
                          color: "yellow",
                          text: "Documentos recibidos: 3/4 de Ana Martínez",
                          time: "09:48",
                        },
                        {
                          icon: AlertCircle,
                          color: "orange",
                          text: "Recordatorio enviado: Visita de Carlos en 2h",
                          time: "09:30",
                        },
                        {
                          icon: Clock,
                          color: "gray",
                          text: "Respuesta automática enviada a 5 nuevos leads",
                          time: "09:00",
                        },
                      ].map((activity, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div
                            className={`flex-shrink-0 w-8 h-8 rounded-full bg-${activity.color}-100 dark:bg-${activity.color}-900 flex items-center justify-center`}
                          >
                            <activity.icon
                              className={`w-4 h-4 text-${activity.color}-600 dark:text-${activity.color}-400`}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-foreground">{activity.text}</p>
                            <p className="text-xs text-muted-foreground">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
