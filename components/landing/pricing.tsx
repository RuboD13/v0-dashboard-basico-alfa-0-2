import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "49",
    period: "/mes",
    description: "Para agencias pequeñas que empiezan a automatizar.",
    features: [
      { text: "Hasta 100 leads/mes", included: true },
      { text: "1 usuario", included: true },
      { text: "Integración email básica", included: true },
      { text: "Respuestas automáticas", included: true },
      { text: "Panel de métricas básico", included: true },
      { text: "Soporte por email", included: true },
      { text: "White-label", included: false },
      { text: "Integraciones avanzadas", included: false },
    ],
    cta: "Empezar Gratis",
    popular: false,
  },
  {
    name: "Pro",
    price: "149",
    period: "/mes",
    description: "Para agencias en crecimiento con múltiples agentes.",
    features: [
      { text: "Hasta 500 leads/mes", included: true },
      { text: "5 usuarios", included: true },
      { text: "Integración Idealista + Fotocasa", included: true },
      { text: "Validación IA de documentos", included: true },
      { text: "Agendado automático de visitas", included: true },
      { text: "White-label completo", included: true },
      { text: "Soporte prioritario", included: true },
      { text: "API acceso", included: false },
    ],
    cta: "Empezar Gratis",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "399",
    period: "/mes",
    description: "Para grandes agencias y franquicias inmobiliarias.",
    features: [
      { text: "Leads ilimitados", included: true },
      { text: "Usuarios ilimitados", included: true },
      { text: "Todas las integraciones", included: true },
      { text: "Scoring crediticio automático", included: true },
      { text: "WhatsApp multilingüe", included: true },
      { text: "Firma electrónica integrada", included: true },
      { text: "API acceso completo", included: true },
      { text: "Account manager dedicado", included: true },
    ],
    cta: "Contactar Ventas",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="precios" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Precios Transparentes
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Invierte menos de lo que cuesta un café al día
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Planes flexibles que crecen contigo. Sin permanencia, cancela cuando quieras.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 ${
                plan.popular ? "border-primary shadow-xl scale-105 z-10" : "border-border/50 hover:border-primary/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <Badge className="rounded-none rounded-bl-lg bg-primary text-primary-foreground">Más Popular</Badge>
                </div>
              )}
              <CardHeader className="pb-4">
                <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-4xl font-bold text-foreground">{plan.price}€</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground/50 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${feature.included ? "text-foreground" : "text-muted-foreground/50"}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badge */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          Primer mes gratis para early-adopters • Sin tarjeta de crédito necesaria
        </p>
      </div>
    </section>
  )
}
