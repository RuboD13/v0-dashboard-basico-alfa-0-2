export default function Pricing() {
  const plans = [
    {
      name: "Mini",
      price: "49",
      description: "Perfecto para agentes individuales",
      features: ["1 usuario", "200 ejecuciones/mes", "0 anuncios", "Soporte: Básico"],
      cta: "Comenzar",
      popular: false,
    },
    {
      name: "Starter",
      price: "99",
      description: "Para pequeñas agencias",
      features: ["2 usuarios", "400 ejecuciones/mes", "3 anuncios", "Soporte: Email"],
      cta: "Comenzar",
      popular: true,
    },
    {
      name: "Agency",
      price: "249",
      description: "Agencias en crecimiento",
      features: ["3 usuarios", "500 ejecuciones/mes", "10 anuncios", "Soporte: Prioritario"],
      cta: "Comenzar",
      popular: false,
    },
    {
      name: "Profesional",
      price: "499",
      description: "Agencias establecidas",
      features: ["10 usuarios", "Ejecuciones ilimitadas", "Anuncios ilimitados", "Soporte: 24/7"],
      cta: "Contactar",
      popular: false,
    },
  ]

  return (
    <section id="precios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-dark mb-4 text-balance">Precios transparentes y escalables</h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto text-pretty">
            Elige el plan perfecto para tu agencia. Actualiza o cancela cuando quieras.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl border-2 p-8 transition-all hover:shadow-xl ${
                plan.popular ? "border-primary shadow-lg scale-105" : "border-silk"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">Más Popular</span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-text-dark mb-2">{plan.name}</h3>
                <p className="text-sm text-text-muted mb-4">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-text-dark">€{plan.price}</span>
                  <span className="text-text-muted ml-2">/mes</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <svg
                      className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-medium transition-all ${
                  plan.popular
                    ? "bg-primary text-white hover:bg-primary-dark shadow-lg"
                    : "bg-porcelain text-text-dark hover:bg-silk"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-text-muted mb-4">¿Necesitas un plan personalizado para tu empresa?</p>
          <a href="/contacto" className="text-primary font-medium hover:underline">
            Habla con nuestro equipo →
          </a>
        </div>
      </div>
    </section>
  )
}
