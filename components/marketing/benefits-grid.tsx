import { Bot, Shield, Calendar, FileCheck, BarChart3, Palette } from "lucide-react"

const benefits = [
  {
    icon: Bot,
    title: "Respuesta Instantánea 24/7",
    description:
      "La IA responde a cada lead en segundos, cualquier día y hora. Nunca pierdas una oportunidad por no estar disponible.",
    highlight: "Tiempo de respuesta < 30 seg",
  },
  {
    icon: Shield,
    title: "Validación IA de Inquilinos",
    description:
      "Verificación automática de DNI, ingresos y perfil de riesgo. Filtra candidatos antes de invertir tu tiempo.",
    highlight: "Reduce fraudes un 95%",
  },
  {
    icon: Calendar,
    title: "Gestión Automática de Visitas",
    description:
      "Sincronización bidireccional con Google Calendar y Outlook. Envío automático de recordatorios y confirmaciones.",
    highlight: "Cero no-shows",
  },
  {
    icon: FileCheck,
    title: "Documentación Centralizada",
    description: "Recogida segura de documentos sensibles: nóminas, contratos, avales. Todo en un mismo lugar cifrado.",
    highlight: "Cumple normativa RGPD",
  },
  {
    icon: BarChart3,
    title: "Panel de Métricas en Tiempo Real",
    description: "Dashboard con KPIs de conversión, tiempo de respuesta, ocupación y rentabilidad por propiedad.",
    highlight: "Decisiones data-driven",
  },
  {
    icon: Palette,
    title: "White-Label con tu Marca",
    description: "Personaliza emails, formularios y comunicaciones con tu logo y colores corporativos.",
    highlight: "100% tu identidad",
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
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            const isLarge = index === 0 || index === 3

            return (
              <div
                key={benefit.title}
                className={`group relative bg-card rounded-2xl border border-border p-6 lg:p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300 ${
                  isLarge ? "md:col-span-2 lg:col-span-1" : ""
                }`}
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
