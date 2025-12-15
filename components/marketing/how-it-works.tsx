import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Lead Entra",
    description: "Sistema captura automáticamente consultas de Idealista, Fotocasa, email y WhatsApp.",
    visual: "📨",
  },
  {
    number: "02",
    title: "Filtro IA",
    description: "Validación inteligente de requisitos, ingresos y elegibilidad del candidato.",
    visual: "🤖",
  },
  {
    number: "03",
    title: "Agenda Visita",
    description: "Sincronización automática con calendario del agente y confirmación al inquilino.",
    visual: "📅",
  },
  {
    number: "04",
    title: "Recordatorios",
    description: "Notificaciones automáticas por email y WhatsApp antes de cada visita.",
    visual: "🔔",
  },
  {
    number: "05",
    title: "Documentación",
    description: "Recopilación de contratos, DNI, nóminas y firma digital centralizada.",
    visual: "✍️",
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Cómo Funciona en 5 Pasos Simples
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Desde el primer contacto hasta el contrato firmado, completamente automatizado.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                {/* Visual Icon */}
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-card border-2 border-primary/20 flex items-center justify-center text-4xl">
                  {step.visual}
                </div>

                {/* Step Number */}
                <div className="text-sm font-bold text-primary mb-2">{step.number}</div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground text-pretty">{step.description}</p>
              </div>

              {/* Arrow (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-4 text-primary/30">
                  <ArrowRight className="w-8 h-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
