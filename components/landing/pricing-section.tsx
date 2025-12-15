import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "49",
      description: "Ideal para agentes independientes",
      features: [
        "Hasta 50 leads/mes",
        "1 usuario",
        "Respuestas automáticas",
        "Integración básica portales",
        "Soporte por email",
      ],
      cta: "Empezar Gratis",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "149",
      description: "Para agencias en crecimiento",
      features: [
        "Hasta 200 leads/mes",
        "5 usuarios",
        "Todo en Starter, más:",
        "Validación IA avanzada",
        "Calendario sincronizado",
        "Panel de métricas",
        "White-label básico",
        "Soporte prioritario",
      ],
      cta: "Empezar Prueba Gratis",
      highlighted: true,
      badge: "Más Popular",
    },
    {
      name: "Enterprise",
      price: "349",
      description: "Solución completa para grandes agencias",
      features: [
        "Leads ilimitados",
        "Usuarios ilimitados",
        "Todo en Pro, más:",
        "API completa",
        "White-label completo",
        "Integraciones custom",
        "Manager dedicado",
        "SLA garantizado",
      ],
      cta: "Contactar Ventas",
      highlighted: false,
    },
  ]

  return (
    <section id="precios" className="py-20 lg:py-28 bg-porcelain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary text-balance">Planes que escalan contigo</h2>
          <p className="mt-4 text-lg text-secondary/60 max-w-2xl mx-auto">
            Sin compromisos. Prueba gratis 14 días. Cancela cuando quieras.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 lg:p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-secondary text-white shadow-2xl scale-105 z-10"
                  : "bg-white border border-base hover:shadow-lg"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-semibold ${plan.highlighted ? "text-white" : "text-secondary"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mt-1 ${plan.highlighted ? "text-white/70" : "text-secondary/60"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-secondary"}`}>
                  €{plan.price}
                </span>
                <span className={`text-sm ${plan.highlighted ? "text-white/70" : "text-secondary/60"}`}>/mes</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? "text-primary" : "text-green-500"}`}
                    />
                    <span className={`text-sm ${plan.highlighted ? "text-white/90" : "text-secondary/70"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.highlighted
                    ? "bg-white text-secondary hover:bg-white/90"
                    : "bg-primary text-white hover:bg-primary-hover"
                }`}
                size="lg"
                asChild
              >
                <Link href="#contacto">{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
