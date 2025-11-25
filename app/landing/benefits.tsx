export default function Benefits() {
  const benefits = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Captura Automática de Leads",
      description:
        "Recibe y responde automáticamente a cada consulta de los portales inmobiliarios en segundos, no en horas.",
      featured: true,
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: "Validación Inteligente",
      description:
        "Filtra y califica leads automáticamente según tus criterios: solvencia, documentación y requisitos específicos.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
      title: "Programación de Visitas",
      description:
        "Sincroniza con Google Calendar y permite a los inquilinos agendar visitas en horarios disponibles automáticamente.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      title: "Gestión Documental",
      description: "Recopila DNI, nóminas, contratos y toda la documentación necesaria de forma segura y automatizada.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      title: "Comunicación Omnicanal",
      description: "Email, WhatsApp y SMS integrados. Mantén a tus leads informados en su canal preferido.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      title: "Analytics y Reporting",
      description:
        "Dashboard con métricas en tiempo real: conversiones, tiempos de respuesta y rendimiento por anuncio.",
    },
  ]

  return (
    <section id="benefits" className="benefits">
      <div className="landing-container">
        <div className="section-header">
          <span className="section-label">Beneficios</span>
          <h2 className="section-title">Todo lo que necesitas para gestionar alquileres</h2>
          <p className="section-subtitle">
            Reduce el tiempo de gestión un 75% y aumenta tu tasa de cierre con automatizaciones inteligentes.
          </p>
        </div>

        <div className="bento-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className={`bento-card ${benefit.featured ? "featured" : ""}`}>
              <div className="bento-icon">{benefit.icon}</div>
              <h3 className="bento-title">{benefit.title}</h3>
              <p className="bento-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
