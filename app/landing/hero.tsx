export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            +1,200 agencias automatizan con nosotros
          </div>

          <h1 className="hero-title text-balance">Automatiza tu gestión de alquileres</h1>

          <p className="hero-subtitle text-pretty">
            Captura leads de todos los portales, valida inquilinos con IA, programa visitas y gestiona documentos. Todo
            en una sola plataforma diseñada para agencias inmobiliarias.
          </p>

          <div className="hero-ctas">
            <a href="#precios" className="btn-primary">
              Comenzar Gratis
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#producto" className="btn-secondary">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Ver Demo
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">98%</span>
              <span className="hero-stat-label">Tasa de respuesta</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">-75%</span>
              <span className="hero-stat-label">Tiempo ahorrado</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">24/7</span>
              <span className="hero-stat-label">Automatización</span>
            </div>
          </div>
        </div>

        <div className="hero-illustration">
          <div className="hero-hub">
            <div className="hero-hub-ring hero-hub-ring-1"></div>
            <div className="hero-hub-ring hero-hub-ring-2"></div>

            <div className="hero-hub-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>

            {/* Integration Icons */}
            <div className="hero-integration-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#FF6B35">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
                  ID
                </text>
              </svg>
            </div>
            <div className="hero-integration-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#00A651">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">
                  FC
                </text>
              </svg>
            </div>
            <div className="hero-integration-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#E4002B">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">
                  HB
                </text>
              </svg>
            </div>
            <div className="hero-integration-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#0066CC">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">
                  PS
                </text>
              </svg>
            </div>
            <div className="hero-integration-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#4285F4">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">
                  GC
                </text>
              </svg>
            </div>
            <div className="hero-integration-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">
                  WA
                </text>
              </svg>
            </div>
          </div>

          {/* Workflow Cards */}
          <div className="hero-workflow-cards">
            <div className="workflow-card">
              <span className="workflow-card-dot green"></span>
              Lead Validado
            </div>
            <div className="workflow-card">
              <span className="workflow-card-dot blue"></span>
              Visita Programada
            </div>
            <div className="workflow-card">
              <span className="workflow-card-dot orange"></span>
              Docs Pendientes
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
