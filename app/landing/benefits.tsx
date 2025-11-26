import "./landing.css"

const benefits = [
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Captura Automática de Leads",
    description:
      "Recibe y responde automáticamente a cada consulta desde Idealista, Fotocasa, Habitaclia y más. Sin perder ni una oportunidad.",
    featured: false,
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Validación Inteligente",
    description:
      "IA que analiza solvencia, documentación y requisitos antes de aprobar visitas. Filtra inquilinos cualificados automáticamente.",
    featured: false,
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="m9 16 2 2 4-4" />
      </svg>
    ),
    title: "Programación de Visitas",
    description:
      "Sincronización con Google Calendar, envío de recordatorios y reprogramación automática. Feedback post-visita incluido.",
    featured: false,
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Gestión Documental Segura",
    description:
      "Recoge DNI, nóminas, contratos y todos los documentos necesarios en un solo lugar con verificación automática y cumplimiento GDPR.",
    featured: true,
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h8" />
        <path d="M8 14h4" />
      </svg>
    ),
    title: "Comunicación Omnicanal",
    description:
      "Email, WhatsApp, SMS integrados. Respuestas automáticas personalizadas y seguimiento completo de cada conversación.",
    featured: false,
  },
  {
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <path d="M2 20h20" />
      </svg>
    ),
    title: "Analytics & Reporting",
    description:
      "Dashboards en tiempo real con métricas de conversión, tiempos de respuesta y rendimiento por anuncio. Datos para decisiones.",
    featured: false,
  },
]

export function Benefits() {
  return (
    <section className="benefits section" id="servicios">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Beneficios</span>
          <h2 className="section-title">Todo lo que necesitas para automatizar tu gestión</h2>
          <p className="section-subtitle">
            Enfócate en lo que importa: cerrar contratos. Nosotros nos encargamos del resto.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className={`benefit-card ${benefit.featured ? "featured" : ""}`}>
              <div className="benefit-icon">{benefit.icon}</div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
