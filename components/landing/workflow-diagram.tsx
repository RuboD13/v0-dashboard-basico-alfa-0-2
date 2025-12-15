import { Mail, Bot, UserCheck, Calendar, MessageSquare, FileText, CheckCircle2, ArrowRight } from "lucide-react"

export function WorkflowDiagram() {
  const workflowSteps = [
    {
      icon: Mail,
      title: "Lead Entrante",
      description: "Captura automática desde portales",
      color: "bg-blue-500",
    },
    {
      icon: Bot,
      title: "Respuesta IA",
      description: "Información personalizada 24/7",
      color: "bg-purple-500",
    },
    {
      icon: UserCheck,
      title: "Validación",
      description: "Filtro de requisitos y garantías",
      color: "bg-amber-500",
    },
    {
      icon: Calendar,
      title: "Agenda Visita",
      description: "Sincronización con calendario",
      color: "bg-green-500",
    },
    {
      icon: MessageSquare,
      title: "Feedback",
      description: "Encuestas automáticas post-visita",
      color: "bg-pink-500",
    },
    {
      icon: FileText,
      title: "Documentación",
      description: "Recogida segura de documentos",
      color: "bg-orange-500",
    },
    {
      icon: CheckCircle2,
      title: "Contrato",
      description: "Firma digital y cierre",
      color: "bg-emerald-500",
    },
  ]

  return (
    <section id="demo" className="py-20 lg:py-28 bg-chalk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary text-balance">El flujo completo automatizado</h2>
          <p className="mt-4 text-lg text-secondary/60 max-w-2xl mx-auto">
            Así es como RentAFlow gestiona cada inquilino potencial
          </p>
        </div>

        {/* Workflow visualization */}
        <div className="relative">
          {/* Desktop flow */}
          <div className="hidden lg:flex items-center justify-between">
            {workflowSteps.map((step, index) => (
              <div key={step.title} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-14 h-14 rounded-xl ${step.color} flex items-center justify-center shadow-lg mb-3`}>
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-sm font-semibold text-secondary text-center">{step.title}</h4>
                  <p className="text-xs text-secondary/50 text-center max-w-[100px] mt-1">{step.description}</p>
                </div>
                {index < workflowSteps.length - 1 && <ArrowRight className="w-5 h-5 text-primary mx-2 flex-shrink-0" />}
              </div>
            ))}
          </div>

          {/* Mobile flow */}
          <div className="lg:hidden space-y-4">
            {workflowSteps.map((step, index) => (
              <div key={step.title} className="flex items-start gap-4">
                <div className="relative">
                  <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <div className="absolute left-1/2 top-full w-0.5 h-4 bg-base -translate-x-1/2" />
                  )}
                </div>
                <div className="flex-1 pb-4">
                  <h4 className="font-semibold text-secondary">{step.title}</h4>
                  <p className="text-sm text-secondary/60">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard preview */}
        <div className="mt-16 bg-white rounded-2xl border border-base shadow-xl overflow-hidden">
          <div className="bg-secondary p-4 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-xs text-white/60">app.rentaflow.com/dashboard</span>
            </div>
          </div>
          <div className="p-6 lg:p-8">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Metrics */}
              <div className="space-y-4">
                <h5 className="font-semibold text-secondary text-sm">Métricas del día</h5>
                {[
                  { label: "Nuevos leads", value: "34", change: "+12%" },
                  { label: "Visitas programadas", value: "8", change: "+5%" },
                  { label: "Documentos pendientes", value: "3", change: "-2" },
                ].map((metric) => (
                  <div key={metric.label} className="bg-porcelain rounded-lg p-3 flex items-center justify-between">
                    <span className="text-sm text-secondary/70">{metric.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-secondary">{metric.value}</span>
                      <span className="text-xs text-green-600">{metric.change}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent leads */}
              <div className="space-y-4">
                <h5 className="font-semibold text-secondary text-sm">Leads recientes</h5>
                {[
                  { name: "Laura Martínez", property: "Piso Goya 23", status: "Nuevo" },
                  { name: "Pedro Sánchez", property: "Ático Retiro", status: "Validando" },
                  { name: "Ana García", property: "Estudio Sol", status: "Visita 16:00" },
                ].map((lead) => (
                  <div key={lead.name} className="bg-porcelain rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-secondary">{lead.name}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{lead.status}</span>
                    </div>
                    <span className="text-xs text-secondary/50">{lead.property}</span>
                  </div>
                ))}
              </div>

              {/* Calendar preview */}
              <div className="space-y-4">
                <h5 className="font-semibold text-secondary text-sm">Visitas de hoy</h5>
                <div className="bg-porcelain rounded-lg p-4">
                  <div className="grid grid-cols-7 gap-1 text-center mb-3">
                    {["L", "M", "X", "J", "V", "S", "D"].map((day) => (
                      <div key={day} className="text-xs text-secondary/50">
                        {day}
                      </div>
                    ))}
                    {[14, 15, 16, 17, 18, 19, 20].map((date) => (
                      <div
                        key={date}
                        className={`text-xs py-1 rounded ${
                          date === 16 ? "bg-primary text-white" : "text-secondary/70"
                        }`}
                      >
                        {date}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs bg-white rounded p-2 border-l-2 border-green-500">10:00 - Piso Goya 23</div>
                    <div className="text-xs bg-white rounded p-2 border-l-2 border-blue-500">16:00 - Estudio Sol</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
