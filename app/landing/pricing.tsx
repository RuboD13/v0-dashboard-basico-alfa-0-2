"use client"

import { useState } from "react"
import "./landing.css"

const plans = [
  {
    name: "Mini",
    monthlyPrice: 49,
    yearlyPrice: 39,
    description: "Para agentes independientes",
    features: [
      { text: "1 usuario", included: true },
      { text: "200 ejecuciones/mes", included: true },
      { text: "0 anuncios activos", included: true },
      { text: "Soporte básico por email", included: true },
      { text: "Integraciones básicas", included: true },
      { text: "Validación IA", included: false },
      { text: "API access", included: false },
    ],
    popular: false,
  },
  {
    name: "Starter",
    monthlyPrice: 99,
    yearlyPrice: 79,
    description: "Para pequeñas agencias",
    features: [
      { text: "2 usuarios", included: true },
      { text: "400 ejecuciones/mes", included: true },
      { text: "3 anuncios activos", included: true },
      { text: "Soporte por email", included: true },
      { text: "Todas las integraciones", included: true },
      { text: "Validación IA básica", included: true },
      { text: "API access", included: false },
    ],
    popular: false,
  },
  {
    name: "Agency",
    monthlyPrice: 249,
    yearlyPrice: 199,
    description: "Para agencias en crecimiento",
    features: [
      { text: "3 usuarios", included: true },
      { text: "500 ejecuciones/mes", included: true },
      { text: "10 anuncios activos", included: true },
      { text: "Soporte prioritario", included: true },
      { text: "Todas las integraciones", included: true },
      { text: "Validación IA avanzada", included: true },
      { text: "API access completo", included: true },
    ],
    popular: true,
  },
  {
    name: "Profesional",
    monthlyPrice: 499,
    yearlyPrice: 399,
    description: "Para grandes operaciones",
    features: [
      { text: "10 usuarios", included: true },
      { text: "Ejecuciones ilimitadas", included: true },
      { text: "Anuncios ilimitados", included: true },
      { text: "Soporte 24/7", included: true },
      { text: "Todas las integraciones", included: true },
      { text: "Validación IA premium", included: true },
      { text: "API + Webhooks + SDK", included: true },
    ],
    popular: false,
  },
]

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className="pricing section" id="precios">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Precios</span>
          <h2 className="section-title">Planes transparentes sin sorpresas</h2>
          <p className="section-subtitle">
            Elige el plan que mejor se adapte a tu negocio. Todos incluyen 14 días de prueba gratis.
          </p>
        </div>

        <div className="pricing-toggle">
          <span className={`pricing-toggle-label ${!isYearly ? "active" : ""}`}>Mensual</span>
          <button
            className={`pricing-toggle-switch ${isYearly ? "active" : ""}`}
            onClick={() => setIsYearly(!isYearly)}
            aria-label="Toggle yearly pricing"
          />
          <span className={`pricing-toggle-label ${isYearly ? "active" : ""}`}>Anual</span>
          <span className="pricing-save-badge">-20%</span>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <div key={plan.name} className={`pricing-card ${plan.popular ? "popular" : ""}`}>
              {plan.popular && <span className="pricing-popular-badge">Más Popular</span>}

              <div className="pricing-header">
                <h3 className="pricing-name">{plan.name}</h3>
                <div className="pricing-price">
                  <span className="pricing-currency">€</span>
                  <span className="pricing-amount">{isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                  <span className="pricing-period">/mes</span>
                </div>
                <p className="pricing-description">{plan.description}</p>
              </div>

              <ul className="pricing-features">
                {plan.features.map((feature, index) => (
                  <li key={index} className={`pricing-feature ${!feature.included ? "disabled" : ""}`}>
                    <svg
                      className={`pricing-feature-icon ${!feature.included ? "disabled" : ""}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {feature.included ? <polyline points="20 6 9 17 4 12" /> : <line x1="18" y1="6" x2="6" y2="18" />}
                    </svg>
                    {feature.text}
                  </li>
                ))}
              </ul>

              <button className={`btn pricing-cta ${plan.popular ? "btn-primary" : "btn-secondary"}`}>
                {plan.popular ? "Comenzar ahora" : "Empezar prueba"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
