import { Clock, Database, Calendar, FileCheck, BarChart3, MessageSquare } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Ahorra Horas Cada Día",
    description:
      "Automatiza respuestas a leads, recordatorios y seguimientos. Dedica tu tiempo a cerrar operaciones, no a emails.",
    highlight: "00:49h ahorradas por anuncio",
  },
  {
    icon: Database,
    title: "Todos los Datos Centralizados",
    description:
      "Ingresos, documentos, comunicaciones y estado de cada lead en un solo lugar. Accede a todo con un click.",
    highlight: "Un panel, toda la info",
  },
  {
    icon: MessageSquare,
    title: "Solicitud Automática de Datos",
    description:
      "El sistema solicita DNI, justificantes de ingresos y documentación a cada candidato. Tú solo validas.",
    highlight: "Verificación humana final",
  },
  {
    icon: Calendar,
    title: "Gestión de Visitas Sin Esfuerzo",
    description:
      "Programa, reprograma y cancela visitas. Sincronización con tu calendario y notificaciones automáticas.",
    highlight: "Cero llamadas perdidas",
  },
  {
    icon: BarChart3,
    title: "Métricas en Tiempo Real",
    description:
      "Conversión, leads por día, tiempo ahorrado, análisis de calidad. Todo para tomar decisiones informadas.",
    highlight: "34.5% tasa de conversión",
  },
  {
    icon: FileCheck,
    title: "Análisis de Requisitos de Aval",
    description: "Calcula automáticamente si el inquilino necesita aval según ingresos vs precio del alquiler.",
    highlight: "Tasa de esfuerzo calculada",
  },
]

export function BenefitsGrid() {
  return (
    <section id="beneficios" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Todo lo que necesitas para <span className="text-primary">escalar tu agencia</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Automatiza las tareas repetitivas y enfócate en lo que importa: cerrar contratos y hacer crecer tu negocio.
          </p>
        </div>

        {/* Benefits Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon

            return (
              <div
                key={benefit.title}
                className="group relative bg-card rounded-2xl border border-border p-6 lg:p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{benefit.description}</p>

                {/* Highlight Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-sm font-medium text-foreground">
                  {benefit.highlight}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
