export default function Pricing() {
  const plans = [
    {
      name: "Mini",
      price: 49,
      description: "Para empezar",
      features: ["1 usuario", "200 ejecuciones/mes", "0 anuncios activos", "Soporte Básico", "Integraciones básicas"],
      popular: false,
    },
    {
      name: "Starter",
      price: 99,
      description: "Para pequeñas agencias",
      features: [
        "2 usuarios",
        "400 ejecuciones/mes",
        "3 anuncios activos",
        "Soporte Email",
        "Todas las integraciones",
        "Validación IA básica",
      ],
      popular: true,
    },
    {
      name: "Agency",
      price: 249,
      description: "Para agencias en crecimiento",
      features: [
        "3 usuarios",
        "500 ejecuciones/mes",
        "10 anuncios activos",
        "Soporte Prioritario",
        "Validación IA avanzada",
        "API access",
        "Webhooks",
      ],
      popular: false,
    },
    {
      name: "Profesional",
      price: 499,
      description: "Para grandes operaciones",
      features: [
        "10 usuarios",
        "Ejecuciones ilimitadas",
        "Anuncios ilimitados",
        "Soporte 24/7",
        "Validación IA premium",
        "API completa",
        "Webhooks avanzados",
        "Onboarding personalizado",
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="pricing section">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-lg">Planes que crecen contigo</h2>
          <p>Sin compromisos. Cancela cuando quieras.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div key={plan.name} className={`pricing-card ${plan.popular ? "popular" : ""}`}>
              {plan.popular && <span className="pricing-popular-badge">Más Popular</span>}

              <div className="pricing-header">
                <h3 className="pricing-name">{plan.name}</h3>
                <div className="pricing-price">
                  <span className="pricing-currency">€</span>
                  <span className="pricing-amount">{plan.price}</span>
                  <span className="pricing-period">/mes</span>
                </div>
                <p className="pricing-description">{plan.description}</p>
              </div>

              <ul className="pricing-features">
                {plan.features.map((feature, index) => (
                  <li key={index} className="pricing-feature">
                    <span className="pricing-feature-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`btn pricing-cta ${plan.popular ? "btn-primary" : "btn-outline"}`}>
                {plan.name === "Profesional" ? "Contactar Ventas" : "Comenzar Ahora"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
