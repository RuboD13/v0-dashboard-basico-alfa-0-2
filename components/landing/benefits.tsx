import { Card, CardContent } from "@/components/ui/card"
import { Zap, Clock, Shield, BarChart3, Building2, FileCheck } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Respuesta Instantánea 24/7",
    description:
      "Cada lead recibe respuesta automática en segundos. Nunca más pierdas una oportunidad por tardar en contestar.",
    highlight: "x10 más rápido",
  },
  {
    icon: Clock,
    title: "Ahorra 4h por cada 50 Leads",
    description: "Automatiza el filtrado, validación y agendado de visitas. Tu equipo se centra en cerrar contratos.",
    highlight: "90% menos emails",
  },
  {
    icon: Shield,
    title: "Validación IA de Documentos",
    description: "Verifica DNI, ingresos y perfil de riesgo automáticamente. Filtra inquilinos antes de la visita.",
    highlight: "Seguridad RGPD",
  },
  {
    icon: BarChart3,
    title: "Métricas en Tiempo Real",
    description:
      "Panel con ratio de conversión, tiempo de respuesta y estado de cada lead. Toma decisiones basadas en datos.",
    highlight: "Dashboard completo",
  },
  {
    icon: Building2,
    title: "100% Marca Blanca",
    description: "Tu logo, tu dominio, tu correo. Los inquilinos solo ven tu marca, nunca la nuestra.",
    highlight: "Tu marca siempre",
  },
  {
    icon: FileCheck,
    title: "Documentación Centralizada",
    description:
      "Recopila todos los documentos necesarios para el contrato en un solo lugar, listos para tu equipo legal.",
    highlight: "Todo organizado",
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Todo lo que necesitas para cerrar más alquileres
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            RentAFlow automatiza las tareas repetitivas para que tu equipo se centre en lo importante: cerrar contratos.
          </p>
        </div>

        {/* Benefits Grid - Bento Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 bg-card"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-foreground text-lg">{benefit.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">{benefit.description}</p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {benefit.highlight}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
