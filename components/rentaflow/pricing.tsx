import { Icons } from "./icons"

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "49",
      description: "Perfecto para agencias pequeñas",
      features: [
        "Hasta 100 leads/mes",
        "1 usuario",
        "Integración email",
        "Respuesta automática",
        "Dashboard básico",
        "Soporte email",
      ],
      featured: false,
      cta: "Empezar Gratis",
    },
    {
      name: "Pro",
      price: "149",
      description: "Para agencias en crecimiento",
      features: [
        "Hasta 500 leads/mes",
        "5 usuarios",
        "Integraciones portales",
        "Validación IA completa",
        "WhatsApp Business",
        "Analytics avanzado",
        "Soporte prioritario",
        "API access",
      ],
      featured: true,
      cta: "Prueba 14 días gratis",
      badge: "Más Popular",
    },
    {
      name: "Enterprise",
      price: "399",
      description: "Solución completa white-label",
      features: [
        "Leads ilimitados",
        "Usuarios ilimitados",
        "White-label completo",
        "Firma electrónica",
        "Scoring crediticio",
        "Multi-idioma",
        "SLA garantizado",
        "Account Manager dedicado",
      ],
      featured: false,
      cta: "Contactar Ventas",
    },
  ]

  return (
    <section className="rf-pricing" id="pricing">
      <div className="rf-container">
        <div className="rf-section-header">
          <span className="rf-section-label">Precios</span>
          <h2 className="rf-section-title">Planes transparentes, sin sorpresas</h2>
          <p className="rf-section-description">Primer mes gratis para early-adopters. Cancela cuando quieras.</p>
        </div>

        <div className="rf-pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`rf-pricing-card ${plan.featured ? "featured" : ""}`}>
              {plan.badge && <span className="rf-pricing-badge">{plan.badge}</span>}

              <div className="rf-pricing-header">
                <h4 className="rf-pricing-name">{plan.name}</h4>
                <div className="rf-pricing-price">
                  <span className="rf-pricing-currency">€</span>
                  <span className="rf-pricing-amount">{plan.price}</span>
                  <span className="rf-pricing-period">/mes</span>
                </div>
                <p className="rf-pricing-description">{plan.description}</p>
              </div>

              <ul className="rf-pricing-features">
                {plan.features.map((feature, i) => (
                  <li key={i} className="rf-pricing-feature">
                    <span className="rf-pricing-feature-icon">
                      <Icons.Check />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="rf-pricing-cta">
                <a href="#" className={`rf-btn ${plan.featured ? "rf-btn-primary" : "rf-btn-secondary"}`}>
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
