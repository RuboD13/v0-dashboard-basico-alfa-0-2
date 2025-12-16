import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Starter",
    description: "Para agentes independientes",
    price: "99",
    period: "/mes",
    features: [
      "Hasta 50 leads/mes",
      "1 usuario",
      "Respuestas automáticas IA",
      "Sincronización calendario",
      "Soporte email",
      "Integraciones básicas",
    ],
    cta: "Comenzar Gratis",
    popular: false,
  },
  {
    name: "Professional",
    description: "Para agencias en crecimiento",
    price: "199",
    period: "/mes",
    features: [
      "Hasta 200 leads/mes",
      "5 usuarios",
      "Todo en Starter +",
      "Validación IA avanzada",
      "Gestión documentos",
      "White-label emails",
      "API access",
      "Soporte prioritario",
    ],
    cta: "Comenzar Prueba",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Para grandes operaciones",
    price: "399",
    period: "/mes",
    features: [
      "Leads ilimitados",
      "Usuarios ilimitados",
      "Todo en Professional +",
      "SSO / SAML",
      "SLA garantizado",
      "Account manager dedicado",
      "Onboarding personalizado",
      "Integraciones custom",
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
            Elige el plan que mejor se adapte a tu volumen. Todos incluyen IA, automatizaciones y soporte.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-2xl border p-6 lg:p-8 flex flex-col ${
                plan.popular ? "border-primary shadow-lg scale-105" : "border-border"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">Más Popular</Badge>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">€{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant={plan.popular ? "default" : "outline"} size="lg" className="w-full" asChild>
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
