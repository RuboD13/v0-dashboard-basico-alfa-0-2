export function Benefits() {
  const benefits = [
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Captura Automática de Leads",
      description:
        "Recibe y responde automáticamente a cada consulta de portales inmobiliarios. Sin perder ni un lead, 24 horas al día, 7 días a la semana.",
      featured: false,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      title: "Validación Inteligente con IA",
      description:
        "Análisis automático de solvencia y requisitos. La IA evalúa cada lead según tus criterios antes de pasar a la fase de visita.",
      featured: true,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <path d="M8 14h.01" />
          <path d="M12 14h.01" />
          <path d="M16 14h.01" />
          <path d="M8 18h.01" />
          <path d="M12 18h.01" />
        </svg>
      ),
      title: "Programación de Visitas",
      description:
        "Sincronización automática con calendarios de agentes. Notificaciones, confirmaciones y reprogramaciones sin intervención manual.",
      featured: false,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      title: "Gestión Documental Completa",
      description:
        "Recogida automatizada de documentos fehacientes: nóminas, contratos, avales. Todo centralizado y listo para formalizar el contrato.",
      featured: false,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
      title: "Comunicación Omnicanal",
      description:
        "WhatsApp, email, SMS desde una única plataforma. Historial completo de conversaciones y plantillas personalizables para cada etapa.",
      featured: false,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <rect x="2" y="20" width="20" height="2" rx="1" />
        </svg>
      ),
      title: "Analytics y Reporting",
      description:
        "Panel de métricas en tiempo real: leads, conversiones, tiempos de respuesta. Informes automáticos y seguimiento de KPIs del equipo.",
      featured: false,
    },
  ]

  return (
    <section className="benefits" id="benefits" aria-labelledby="benefits-title">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Beneficios</span>
          <h2 id="benefits-title" className="section-title text-balance">
            Todo lo que necesitas para gestionar alquileres eficientemente
          </h2>
          <p className="section-subtitle">
            Una plataforma completa que automatiza cada paso del proceso de arrendamiento, desde la primera consulta
            hasta la firma del contrato.
          </p>
        </div>

        <div className="bento-grid">
          {benefits.map((benefit, index) => (
            <article
              key={index}
              className={`bento-card ${benefit.featured ? "bento-card--featured" : ""} ${index === 0 ? "bento-card--large" : ""}`}
            >
              <div className="bento-card__icon" aria-hidden="true">
                {benefit.icon}
              </div>
              <h3 className="bento-card__title">{benefit.title}</h3>
              <p className="bento-card__description">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
