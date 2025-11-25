import Link from "next/link"
import { WorkflowVisualization } from "./workflow-visualization"

export function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero__inner">
          {/* Social Proof Badge */}
          <div className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true"></span>
            <span>+1,200 agencias automatizan con nosotros</span>
          </div>

          {/* Main Heading */}
          <h1 className="hero__title text-balance">
            Automatiza la Gestión de <span className="text-gradient">Alquileres</span> de Principio a Fin
          </h1>

          {/* Subtitle */}
          <p className="hero__subtitle text-balance">
            Captura leads, valida inquilinos, programa visitas y gestiona documentación. Todo en una plataforma con
            inteligencia artificial que trabaja 24/7 por ti.
          </p>

          {/* CTA Buttons */}
          <div className="hero__ctas">
            <Link href="#pricing" className="btn btn--primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Comenzar Gratis
            </Link>
            <Link href="#product-preview" className="btn btn--secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Ver Demo
            </Link>
          </div>

          {/* Workflow Visualization */}
          <div className="hero__visual">
            <WorkflowVisualization />
          </div>

          {/* Stats */}
          <div className="hero__stats">
            <div className="hero__stat">
              <div className="hero__stat-value">98%</div>
              <div className="hero__stat-label">Tasa de respuesta automática</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-value">-75%</div>
              <div className="hero__stat-label">Reducción tiempo gestión</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-value">24/7</div>
              <div className="hero__stat-label">Disponibilidad del sistema</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
