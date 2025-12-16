import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Mini",
    description: "Para agentes independientes",
    price: "49",
    period: "/mes",
    features: [
      "1 usuario",
      "200 leads/mes",
      "3 anuncios",
      "Respuestas automáticas",
      "Sincronización calendario",
      "WhatsApp: No incluida",
    ],
    cta: "Seleccionar",
    popular: false,
  },
  {
    name: "Starter",
    description: "Para pequeños equipos",
    price: "99",
    period: "/mes",
    features: [
      "2 usuarios",
      "400 leads/mes",
      "6 anuncios",
      "Todo en Mini +",
      "Configuración WhatsApp incluida",
      "Soporte prioritario",
    ],
    cta: "Comenzar Ahora",
    popular: true,
  },
  {
    name: "Agency",
    description: "Para agencias en crecimiento",
    price: "249",
    period: "/mes",
    features: [
      "6 usuarios",
      "500 leads/mes",
      "10 anuncios",
      "Todo en Starter +",
      "Configuración WhatsApp incluida",
      "Métricas avanzadas",
    ],
    cta: "Seleccionar",
    popular: false,
  },
  {
    name: "Profesional",
    description: "Para grandes operaciones",
    price: "499",
    period: "/mes",
    features: [
      "10 usuarios",
      "Leads ilimitados",
      "Anuncios ilimitados",
      "Todo en Agency +",
      "Configuración WhatsApp incluida",
      "Soporte 24/7",
    ],
    cta: "Contactar Ventas",
    popular: false,
  },
]

export function PricingCards() {
  return (
    <section id="precios" className="py-16 lg:py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-4">
            Primer mes gratis para early-adopters
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Precios transparentes, <span className="text-primary">sin sorpresas</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Elige el plan que mejor se adapte a tu volumen. Todos incluyen automatizaciones y soporte.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl border p-6 flex flex-col ${
                plan.popular ? "border-primary shadow-lg ring-2 ring-primary/20" : "border-border"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">Recomendado</Badge>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-4">
                <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant={plan.popular ? "default" : "outline"} className="w-full" asChild>
                <Link href="#contacto">{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          Todos los precios en EUR. IVA no incluido. Cancela cuando quieras.
        </p>
      </div>
    </section>
  )
}
