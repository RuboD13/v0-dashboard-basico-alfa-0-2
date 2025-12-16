import { MessageSquare, UserCheck, CalendarCheck, Bell, FileSignature } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Lead Entra",
    description:
      "Captura automática desde portales (Idealista, Fotocasa), WhatsApp, email o tu web. Todo centralizado.",
    visual: {
      type: "inbox",
      items: ["Idealista: Nuevo interesado", "WhatsApp: Consulta piso", "Web: Formulario completado"],
    },
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Filtro IA",
    description: "Validación automática de requisitos: ingresos mínimos, documentación, perfil de riesgo.",
    visual: {
      type: "checklist",
      items: ["Ingresos: 3x renta", "DNI verificado", "Sin incidencias"],
    },
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Agenda Visita",
    description: "El inquilino elige horario disponible. Se sincroniza con tu calendario automáticamente.",
    visual: {
      type: "calendar",
      items: ["Lun 10:00 - Disponible", "Mar 16:00 - Disponible", "Mié 11:00 - Ocupado"],
    },
  },
  {
    number: "04",
    icon: Bell,
    title: "Recordatorios",
    description: "Notificaciones automáticas 24h y 2h antes. Feedback post-visita para inquilino y agente.",
    visual: {
      type: "notifications",
      items: ["Recordatorio visita mañana", "¿Qué tal la visita?", "Valoración: 5 estrellas"],
    },
  },
  {
    number: "05",
    icon: FileSignature,
    title: "Documentación",
    description: "Recogida segura de documentos sensibles. Generación automática de contrato listo para firma.",
    visual: {
      type: "documents",
      items: ["Nóminas 3 meses", "Contrato laboral", "Fianza recibida"],
    },
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 lg:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            De lead a contrato en <span className="text-primary">5 pasos automáticos</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Sin intervención manual hasta que realmente lo necesites. Tú supervisas, la IA ejecuta.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative">
                {/* Connector Line (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border z-0">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
                  </div>
                )}

                <div className="bg-card rounded-2xl border border-border p-5 hover:border-primary/30 hover:shadow-md transition-all h-full">
                  {/* Step Number & Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{step.description}</p>

                  {/* Visual Preview */}
                  <div className="bg-secondary/50 rounded-lg p-3 space-y-2">
                    {step.visual.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
