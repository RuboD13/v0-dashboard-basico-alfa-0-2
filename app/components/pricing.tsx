import { Check } from "lucide-react"

export function Pricing() {
  const plans = [
    {
      name: "Mini",
      price: "49",
      description: "Perfecto para agencias pequeñas",
      features: [
        "1 usuario",
        "200 ejecuciones/mes",
        "Soporte: Básico",
        "0 anuncios incluidos",
        "Integraciones básicas",
      ],
      cta: "Comenzar",
      highlighted: false,
    },
    {
      name: "Starter",
      price: "99",
      description: "Ideal para agencias en crecimiento",
      features: [
        "2 usuarios",
        "400 ejecuciones/mes",
        "Soporte: Email",
        "3 anuncios incluidos",
        "Todas las integraciones",
        "API acceso básico",
      ],
      cta: "Comenzar",
      highlighted: false,
    },
    {
      name: "Agency",
      price: "249",
      description: "Para agencias profesionales",
      features: [
        "3 usuarios",
        "500 ejecuciones/mes",
        "Soporte: Prioritario",
        "10 anuncios incluidos",
        "Todas las integraciones",
        "API acceso completo",
        "Automatizaciones avanzadas",
        "Webhooks personalizados",
      ],
      cta: "Comenzar",
      highlighted: true,
    },
    {
      name: "Profesional",
      price: "499",
      description: "Para empresas grandes",
      features: [
        "10 usuarios",
        "Ejecuciones ilimitadas",
        "Soporte: 24/7",
        "Anuncios ilimitados",
        "Todas las integraciones",
        "API acceso completo",
        "White-label disponible",
        "Gestor de cuenta dedicado",
        "SLA garantizado",
      ],
      cta: "Contactar Ventas",
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 md:py-32 bg-porcelain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4 text-balance">
            Planes que escalan contigo
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto text-pretty">
            Desde startups hasta grandes agencias. Sin tarifas ocultas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-chalk rounded-2xl border ${
                plan.highlighted ? "border-primary shadow-2xl scale-105" : "border-silk shadow-sm"
              } p-8 flex flex-col`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-chalk text-sm font-medium rounded-full">
                  Más Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-text-dark mb-2">{plan.name}</h3>
                <p className="text-sm text-text-muted mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-primary">€{plan.price}</span>
                  <span className="text-text-muted">/mes</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-text-muted text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-medium transition-all ${
                  plan.highlighted
                    ? "bg-primary text-chalk hover:bg-primary-dark shadow-lg hover:shadow-xl"
                    : "bg-porcelain text-text-dark hover:bg-silk border border-silk"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-text-muted">
            ¿Necesitas un plan personalizado?{" "}
            <a href="#contact" className="text-primary font-medium hover:underline">
              Contacta con ventas
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
