import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "49",
      description: "Para agencias pequeñas",
      features: [
        "Hasta 50 leads/mes",
        "Respuesta automática con IA",
        "1 usuario",
        "Integraciones básicas",
        "Soporte por email",
      ],
      highlighted: false,
    },
    {
      name: "Pro",
      price: "149",
      description: "Para agencias en crecimiento",
      features: [
        "Hasta 200 leads/mes",
        "IA avanzada con validación",
        "5 usuarios",
        "Todas las integraciones",
        "White-label completo",
        "Calendario sincronizado",
        "Soporte prioritario",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "349",
      description: "Para grandes agencias",
      features: [
        "Leads ilimitados",
        "IA personalizada",
        "Usuarios ilimitados",
        "API de acceso",
        "Gestor de cuenta dedicado",
        "SLA garantizado",
        "Personalización completa",
      ],
      highlighted: false,
    },
  ]

  return (
    <section id="precios" className="py-20 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Precios - Por Qué Comprar y Cómo Ayuda</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Planes transparentes sin costes ocultos. Todas las funciones en cada plan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.highlighted ? "border-primary shadow-xl scale-105" : ""}`}>
              {plan.highlighted && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Más Popular</Badge>}
              <CardHeader className="text-center pb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/mes</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.highlighted ? "default" : "outline"} size="lg">
                  Empezar Prueba Gratis
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Todos los planes incluyen 14 días de prueba gratuita. Sin tarjeta de crédito requerida.
        </p>
      </div>
    </section>
  )
}
