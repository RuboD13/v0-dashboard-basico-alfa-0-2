export default function Hero() {
  return (
    <section className="hero">
      <div className="landing-container hero-inner">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          +1,200 agencias inmobiliarias automatizan con nosotros
        </div>

        <h1 className="hero-title">Automatiza tu gestión de alquileres de principio a fin</h1>

        <p className="hero-subtitle">
          Desde la captación del lead hasta la firma del contrato. RentAFlow conecta portales inmobiliarios, valida
          inquilinos, programa visitas y gestiona documentación automáticamente.
        </p>

        <div className="hero-actions">
          <a href="/register" className="btn btn-primary btn-lg">
            Comenzar Gratis
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#demo" className="btn btn-secondary btn-lg">
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
            <span className="hero-stat-label">Tiempo de gestión</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">24/7</span>
            <span className="hero-stat-label">Atención automática</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-value">3.5h</span>
            <span className="hero-stat-label">Ahorro diario</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-icons">
            <div className="floating-icon">
              <img src="/idealista-logo.jpg" alt="Idealista" />
            </div>
            <div className="floating-icon">
              <img src="/fotocasa-logo.jpg" alt="Fotocasa" />
            </div>
            <div className="floating-icon">
              <img src="/google-calendar-icon.png" alt="Google Calendar" />
            </div>
            <div className="floating-icon">
              <img src="/whatsapp-icon-green.jpg" alt="WhatsApp" />
            </div>
            <div className="floating-icon">
              <img src="/email-envelope-icon.jpg" alt="Email" />
            </div>
            <div className="floating-icon">
              <img src="/document-contract-icon.png" alt="Contratos" />
            </div>
            <div className="floating-icon">
              <img src="/habitaclia-logo.jpg" alt="Habitaclia" />
            </div>
          </div>

          <div className="hero-visual-main">
            <div className="hero-visual-header">
              <span className="hero-visual-dot red"></span>
              <span className="hero-visual-dot yellow"></span>
              <span className="hero-visual-dot green"></span>
            </div>
            <div className="hero-visual-content">
              <WorkflowDiagram />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WorkflowDiagram() {
  return (
    <svg width="100%" height="280" viewBox="0 0 800 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Central Hub */}
      <circle cx="400" cy="140" r="50" fill="#4A6741" fillOpacity="0.1" stroke="#4A6741" strokeWidth="2" />
      <circle cx="400" cy="140" r="35" fill="#4A6741" fillOpacity="0.2" />
      <circle cx="400" cy="140" r="20" fill="#4A6741" />
      <text x="400" y="145" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">
        RF
      </text>

      {/* Input Nodes - Left */}
      <g>
        <rect x="50" y="40" width="120" height="50" rx="8" fill="white" stroke="#E5E4E6" strokeWidth="1" />
        <text x="110" y="60" textAnchor="middle" fill="#6B7280" fontSize="10">
          Portal
        </text>
        <text x="110" y="75" textAnchor="middle" fill="#1A1A1A" fontSize="12" fontWeight="600">
          Idealista
        </text>
        <line x1="170" y1="65" x2="350" y2="120" stroke="#4A6741" strokeWidth="1.5" strokeDasharray="4 4" />
      </g>

      <g>
        <rect x="50" y="115" width="120" height="50" rx="8" fill="white" stroke="#E5E4E6" strokeWidth="1" />
        <text x="110" y="135" textAnchor="middle" fill="#6B7280" fontSize="10">
          Portal
        </text>
        <text x="110" y="150" textAnchor="middle" fill="#1A1A1A" fontSize="12" fontWeight="600">
          Fotocasa
        </text>
        <line x1="170" y1="140" x2="350" y2="140" stroke="#4A6741" strokeWidth="1.5" strokeDasharray="4 4" />
      </g>

      <g>
        <rect x="50" y="190" width="120" height="50" rx="8" fill="white" stroke="#E5E4E6" strokeWidth="1" />
        <text x="110" y="210" textAnchor="middle" fill="#6B7280" fontSize="10">
          Portal
        </text>
        <text x="110" y="225" textAnchor="middle" fill="#1A1A1A" fontSize="12" fontWeight="600">
          Habitaclia
        </text>
        <line x1="170" y1="215" x2="350" y2="160" stroke="#4A6741" strokeWidth="1.5" strokeDasharray="4 4" />
      </g>

      {/* Output Nodes - Right */}
      <g>
        <rect
          x="530"
          y="25"
          width="140"
          height="55"
          rx="8"
          fill="#4A6741"
          fillOpacity="0.05"
          stroke="#4A6741"
          strokeWidth="1"
        />
        <text x="600" y="45" textAnchor="middle" fill="#4A6741" fontSize="10" fontWeight="600">
          Respuesta Automática
        </text>
        <text x="600" y="62" textAnchor="middle" fill="#6B7280" fontSize="11">
          Email + WhatsApp
        </text>
        <line x1="450" y1="120" x2="530" y2="52" stroke="#4A6741" strokeWidth="1.5" />
        <circle cx="530" cy="52" r="4" fill="#4A6741" />
      </g>

      <g>
        <rect
          x="530"
          y="95"
          width="140"
          height="55"
          rx="8"
          fill="#4A6741"
          fillOpacity="0.05"
          stroke="#4A6741"
          strokeWidth="1"
        />
        <text x="600" y="115" textAnchor="middle" fill="#4A6741" fontSize="10" fontWeight="600">
          Validación Lead
        </text>
        <text x="600" y="132" textAnchor="middle" fill="#6B7280" fontSize="11">
          Scoring + Filtros
        </text>
        <line x1="450" y1="140" x2="530" y2="122" stroke="#4A6741" strokeWidth="1.5" />
        <circle cx="530" cy="122" r="4" fill="#4A6741" />
      </g>

      <g>
        <rect
          x="530"
          y="165"
          width="140"
          height="55"
          rx="8"
          fill="#4A6741"
          fillOpacity="0.05"
          stroke="#4A6741"
          strokeWidth="1"
        />
        <text x="600" y="185" textAnchor="middle" fill="#4A6741" fontSize="10" fontWeight="600">
          Agenda Visita
        </text>
        <text x="600" y="202" textAnchor="middle" fill="#6B7280" fontSize="11">
          Sync Calendario
        </text>
        <line x1="450" y1="150" x2="530" y2="192" stroke="#4A6741" strokeWidth="1.5" />
        <circle cx="530" cy="192" r="4" fill="#4A6741" />
      </g>

      <g>
        <rect
          x="530"
          y="235"
          width="140"
          height="55"
          rx="8"
          fill="#4A6741"
          fillOpacity="0.05"
          stroke="#4A6741"
          strokeWidth="1"
        />
        <text x="600" y="255" textAnchor="middle" fill="#4A6741" fontSize="10" fontWeight="600">
          Documentación
        </text>
        <text x="600" y="272" textAnchor="middle" fill="#6B7280" fontSize="11">
          Contrato + Firma
        </text>
        <line x1="450" y1="160" x2="530" y2="262" stroke="#4A6741" strokeWidth="1.5" />
        <circle cx="530" cy="262" r="4" fill="#4A6741" />
      </g>

      {/* Status Indicators */}
      <g>
        <circle cx="700" cy="52" r="6" fill="#10B981" />
        <circle cx="700" cy="122" r="6" fill="#10B981" />
        <circle cx="700" cy="192" r="6" fill="#F59E0B" />
        <circle cx="700" cy="262" r="6" fill="#3B82F6" />
      </g>
    </svg>
  )
}
