import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "99",
    description: "Para agencias pequeñas empezando a automatizar",
    features: [
      "50 leads/mes incluidos",
      "Respuesta automática 24/7",
      "Validación IA básica",
      "Gestión de visitas",
      "2 usuarios",
      "Soporte email",
    ],
    cta: "Comenzar Prueba",
    highlighted: false,
  },
  {
    name: "Professional",
    price: "199",
    description: "El más popular para agencias en crecimiento",
    features: [
      "200 leads/mes incluidos",
      "Todo de Starter +",
      "Documentación centralizada",
      "Panel de métricas avanzadas",
      "White-label personalizado",
      "5 usuarios",
      "Integraciones premium",
      "Soporte prioritario",
    ],
    cta: "Comenzar Prueba",
    highlighted: true,
    badge: "MÁS POPULAR",
  },
  {
    name: "Enterprise",
    price: "399",
    description: "Para grandes agencias con volumen alto",
    features: [
      "Leads ilimitados",
      "Todo de Professional +",
      "API personalizada",
      "Flujos de trabajo custom",
      "Usuarios ilimitados",
      "Gestor de cuenta dedicado",
      "SLA garantizado",
      "Onboarding personalizado",
    ],
    cta: "Contactar Ventas",
    highlighted: false,
  },
]

export default function PricingCards() {
  return (
    <section id="precios" className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Planes que Crecen Contigo
          </h2>
          <p className="text-lg text-muted-foreground text-pretty mb-6">
            Todos los planes incluyen 14 días de prueba gratuita. Sin tarjeta de crédito requerida.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full border border-success/20">
            <span className="text-sm font-medium text-success">🎉 Primer mes gratis para early-adopters</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 bg-card rounded-2xl border-2 transition-all duration-300 ${
                plan.highlighted
                  ? "border-primary shadow-2xl scale-105"
                  : "border-border hover:border-primary/30 hover:shadow-lg"
              }`}
            >
              {/* Badge for highlighted plan */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-4 py-1 bg-accent text-white rounded-full text-xs font-bold">{plan.badge}</div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">€/mes</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                className={`w-full mb-6 ${plan.highlighted ? "bg-accent hover:bg-accent/90" : ""}`}
                variant={plan.highlighted ? "default" : "outline"}
              >
                {plan.cta}
              </Button>

              {/* Features List */}
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            ¿Necesitas más de 400 leads/mes?{" "}
            <a href="#" className="text-primary font-medium hover:underline">
              Contacta con nuestro equipo
            </a>{" "}
            para un plan personalizado.
          </p>
        </div>
      </div>
    </section>
  )
}
