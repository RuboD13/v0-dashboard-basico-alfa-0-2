import "./landing.css"

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            <strong>+1,200</strong> agencias automatizan con nosotros
          </div>

          <h1 className="hero-title">
            Automatiza la gestión de <span className="hero-title-highlight">alquileres</span>
          </h1>

          <p className="hero-subtitle">
            Desde la captación de leads hasta la firma del contrato. RentAFlow automatiza cada paso del proceso de
            arrendamiento con inteligencia artificial y flujos de trabajo inteligentes.
          </p>

          <div className="hero-actions">
            <a href="#demo" className="btn btn-primary btn-lg">
              Comenzar Gratis
              <svg
                width="16"
                height="16"
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
            <a href="#demo" className="btn btn-secondary btn-lg">
              <svg
                width="16"
                height="16"
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
              <div className="hero-stat-value">98%</div>
              <div className="hero-stat-label">Tasa de respuesta</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">-75%</div>
              <div className="hero-stat-label">Tiempo de gestión</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">24/7</div>
              <div className="hero-stat-label">Atención automática</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          {/* Central Hub */}
          <div className="hero-hub">
            <div className="hero-hub-inner">
              <svg
                className="hero-hub-icon"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
          </div>

          {/* Floating Integration Icons */}
          <div className="hero-integrations">
            <div className="hero-integration">
              <img src="/idealista-real-estate-logo.jpg" alt="Idealista" />
            </div>
            <div className="hero-integration">
              <img src="/fotocasa-real-estate-logo.jpg" alt="Fotocasa" />
            </div>
            <div className="hero-integration">
              <img src="/habitaclia-real-estate-logo.jpg" alt="Habitaclia" />
            </div>
            <div className="hero-integration">
              <img src="/google-calendar-icon.png" alt="Google Calendar" />
            </div>
            <div className="hero-integration">
              <img src="/whatsapp-green-icon.jpg" alt="WhatsApp" />
            </div>
            <div className="hero-integration">
              <img src="/email-envelope-icon-blue.jpg" alt="Email" />
            </div>
            <div className="hero-integration">
              <img src="/document-contract-icon.png" alt="Contratos" />
            </div>
            <div className="hero-integration">
              <img src="/pisos-com-real-estate-logo.jpg" alt="Pisos.com" />
            </div>
          </div>

          {/* Flow Cards */}
          <div className="hero-flow-card hero-flow-card-1">
            <div className="hero-flow-card-header">
              <span className="hero-flow-card-dot"></span>
              Automatización Activa
            </div>
            <div className="hero-flow-card-items">
              <div className="hero-flow-card-item">
                <span className="hero-flow-card-check">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                Lead capturado
              </div>
              <div className="hero-flow-card-item">
                <span className="hero-flow-card-check">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                Respuesta enviada
              </div>
              <div className="hero-flow-card-item">
                <span className="hero-flow-card-check">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                Visita programada
              </div>
            </div>
          </div>

          <div className="hero-flow-card hero-flow-card-2">
            <div className="hero-flow-card-header">
              <span className="hero-flow-card-dot"></span>
              Validación IA
            </div>
            <div className="hero-flow-card-items">
              <div className="hero-flow-card-item">
                <span className="hero-flow-card-check">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                Documentos verificados
              </div>
              <div className="hero-flow-card-item">
                <span className="hero-flow-card-check">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                Solvencia aprobada
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
