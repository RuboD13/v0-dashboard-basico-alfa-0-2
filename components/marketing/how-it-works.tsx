import { MessageSquare, UserCheck, CalendarCheck, Bell, FileSignature } from "lucide-react"
import Image from "next/image"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Lead Entra",
    description:
      "Captura automática desde portales (Idealista, Fotocasa), WhatsApp, email o tu web. Todo centralizado.",
    image: "/images/image.png",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Filtro IA",
    description:
      "Validación automática de requisitos: ingresos mínimos, documentación, perfil de riesgo y análisis de aval.",
    image: "/images/image.png",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Agenda Visita",
    description:
      "El inquilino elige horario disponible. Reprograma con un clic y sincroniza con el calendario del agente.",
    image: "/images/image.png",
  },
  {
    number: "04",
    icon: Bell,
    title: "Recordatorios",
    description: "Notificaciones automáticas por WhatsApp y email. Feedback post-visita para inquilino y agente.",
    image: "/images/image.png",
  },
  {
    number: "05",
    icon: FileSignature,
    title: "Documentación",
    description:
      "Solicitud automática de documentos adicionales cuando se requiere información del inquilino o avalista.",
    image: "/images/image.png",
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

        {/* Steps with Real Screenshots */}
        <div className="space-y-16 lg:space-y-24">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 0

            return (
              <div
                key={step.number}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
              >
                {/* Content */}
                <div className={`space-y-4 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                      Paso {step.number}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground">{step.title}</h3>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">{step.description}</p>
                </div>

                {/* Screenshot */}
                <div className={`relative ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
                    {/* Browser Chrome */}
                    <div className="flex items-center gap-2 px-3 py-2 bg-secondary/50 border-b border-border">
                      <div className="flex gap-1">
                        <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-chart-4/60" />
                        <div className="w-2.5 h-2.5 rounded-full bg-success/60" />
                      </div>
                      <div className="flex-1 flex justify-center">
                        <div className="px-3 py-0.5 bg-background rounded text-[10px] text-muted-foreground">
                          app.rentaflow.com
                        </div>
                      </div>
                    </div>

                    {/* Screenshot */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={step.image || "/placeholder.svg"}
                        alt={step.title}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* Decorative gradient */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl -z-10" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
