export default function Pricing() {
  const plans = [
    {
      name: "Mini",
      price: "49",
      description: "Para propietarios individuales",
      features: [
        "1 usuario",
        "200 ejecuciones/mes",
        "Sin anuncios activos",
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
        "3 anuncios activos",
        "Soporte por email",
        "Todas las integraciones",
        "Validación con IA",
      ],
      popular: false,
    },
    {
      name: "Agency",
      price: "249",
      description: "Para agencias en crecimiento",
      features: [
        "3 usuarios",
        "500 ejecuciones/mes",
        "10 anuncios activos",
        "Soporte prioritario",
        "API completa",
        "Analytics avanzado",
        "Webhooks personalizados",
      ],
      popular: true,
    },
    {
      name: "Profesional",
      price: "499",
      description: "Para grandes operaciones",
      features: [
        "10 usuarios",
        "Ejecuciones ilimitadas",
        "Anuncios ilimitados",
        "Soporte 24/7",
        "API sin límites",
        "Onboarding dedicado",
        "SLA garantizado",
        "Integraciones custom",
      ],
      popular: false,
    },
  ]

  return (
    <section id="precios" className="pricing">
      <div className="section-header">
        <span className="section-label">Precios</span>
        <h2 className="section-title text-balance">Planes que escalan contigo</h2>
        <p className="section-subtitle text-pretty">
          Sin compromisos. Cancela cuando quieras. Prueba gratis durante 14 días.
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
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="pricing-cta">{plan.popular ? "Comenzar Ahora" : "Elegir Plan"}</button>
          </div>
        ))}
      </div>
    </section>
  )
}
