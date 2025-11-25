import Link from "next/link"

export function Pricing() {
  const plans = [
    {
      name: "Mini",
      price: 49,
      description: "Perfecto para empezar a automatizar",
      features: [
        "1 usuario",
        "200 ejecuciones/mes",
        "0 anuncios activos",
        "Soporte básico por email",
        "Integraciones básicas",
      ],
      cta: "Comenzar",
      ctaVariant: "secondary" as const,
      featured: false,
    },
    {
      name: "Starter",
      price: 99,
      description: "Para agencias en crecimiento",
      features: [
        "2 usuarios",
        "400 ejecuciones/mes",
        "3 anuncios activos",
        "Soporte por email prioritario",
        "Todas las integraciones",
        "Analytics básico",
      ],
      cta: "Más Popular",
      ctaVariant: "primary" as const,
      featured: true,
      badge: "Más Popular",
    },
    {
      name: "Agency",
      price: 249,
      description: "Para equipos profesionales",
      features: [
        "3 usuarios",
        "500 ejecuciones/mes",
        "10 anuncios activos",
        "Soporte prioritario",
        "Todas las integraciones",
        "Analytics avanzado",
        "API completa",
      ],
      cta: "Elegir Agency",
      ctaVariant: "secondary" as const,
      featured: false,
    },
    {
      name: "Profesional",
      price: 499,
      description: "Para grandes operaciones",
      features: [
        "10 usuarios",
        "Ejecuciones ilimitadas",
        "Anuncios ilimitados",
        "Soporte 24/7 dedicado",
        "Todas las integraciones",
        "Analytics completo",
        "API completa",
        "Onboarding personalizado",
      ],
      cta: "Contactar Ventas",
      ctaVariant: "secondary" as const,
      featured: false,
    },
  ]

  return (
    <section className="pricing" id="pricing" aria-labelledby="pricing-title">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Precios</span>
          <h2 id="pricing-title" className="section-title text-balance">
            Planes adaptados a tu negocio
          </h2>
          <p className="section-subtitle">Sin costes ocultos. Escala según crezcas. Cancela cuando quieras.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article key={plan.name} className={`pricing-card ${plan.featured ? "pricing-card--featured" : ""}`}>
              {plan.badge && <span className="pricing-card__badge">{plan.badge}</span>}

              <h3 className="pricing-card__name">{plan.name}</h3>

              <div className="pricing-card__price">
                <span className="pricing-card__currency">€</span>
                <span className="pricing-card__amount">{plan.price}</span>
                <span className="pricing-card__period">/mes</span>
              </div>

              <p className="pricing-card__description">{plan.description}</p>

              <ul className="pricing-card__features">
                {plan.features.map((feature, index) => (
                  <li key={index} className="pricing-card__feature">
                    <span className="pricing-card__feature-icon" aria-hidden="true">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="#" className={`pricing-card__cta pricing-card__cta--${plan.ctaVariant}`}>
                {plan.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
