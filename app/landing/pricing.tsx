export default function Pricing() {
  const plans = [
    {
      name: "Mini",
      price: "49",
      description: "Para propietarios individuales",
      features: [
        "1 usuario",
        "200 ejecuciones/mes",
        "Sin límite de anuncios",
        "Soporte básico por email",
        "Integraciones básicas",
      ],
      popular: false,
    },
    {
      name: "Starter",
      price: "99",
      description: "Para pequeñas agencias",
      features: [
        "2 usuarios",
        "400 ejecuciones/mes",
        "Hasta 3 anuncios activos",
        "Soporte por email prioritario",
        "Todas las integraciones",
        "Analytics básico",
      ],
      popular: true,
    },
    {
      name: "Agency",
      price: "249",
      description: "Para agencias en crecimiento",
      features: [
        "3 usuarios",
        "500 ejecuciones/mes",
        "Hasta 10 anuncios activos",
        "Soporte prioritario",
        "API completa",
        "Analytics avanzado",
        "Webhooks personalizados",
      ],
      popular: false,
    },
    {
      name: "Profesional",
      price: "499",
      description: "Para grandes operaciones",
      features: [
        "10 usuarios",
        "Ejecuciones ilimitadas",
        "Anuncios ilimitados",
        "Soporte 24/7 dedicado",
        "API sin límites",
        "White-label disponible",
        "Onboarding personalizado",
        "SLA garantizado",
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="pricing">
      <div className="landing-container">
        <div className="section-header">
          <span className="section-label">Precios</span>
          <h2 className="section-title">Planes transparentes para cada necesidad</h2>
          <p className="section-subtitle">
            Sin costes ocultos. Cancela cuando quieras. 14 días de prueba gratis en todos los planes.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div key={plan.name} className={`pricing-card ${plan.popular ? "popular" : ""}`}>
              {plan.popular && <span className="pricing-badge">Más Popular</span>}
              <h3 className="pricing-name">{plan.name}</h3>
              <div className="pricing-price">
                <span className="pricing-amount">€{plan.price}</span>
                <span className="pricing-period">/mes</span>
              </div>
              <p className="pricing-description">{plan.description}</p>
              <ul className="pricing-features">
                {plan.features.map((feature, index) => (
                  <li key={index} className="pricing-feature">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="/register" className={`btn ${plan.popular ? "btn-primary" : "btn-secondary"}`}>
                Empezar Prueba Gratis
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
