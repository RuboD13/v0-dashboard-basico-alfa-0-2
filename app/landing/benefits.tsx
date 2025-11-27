export default function Benefits() {
  const benefits = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
      title: "Captura Automática de Leads",
      description:
        "Recibe leads de Idealista, Fotocasa, Habitaclia y más. Respuesta instantánea 24/7 sin intervención manual.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      title: "Validación con IA",
      description:
        "Verifica requisitos de solvencia, garantías y documentación automáticamente antes de programar visitas.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
          <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
        </svg>
      ),
      title: "Programación Inteligente",
      description:
        "Sincronización automática con Google Calendar. Reprogramaciones, recordatorios y feedback post-visita.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <path d="M14 2v6h6M12 18v-6M9 15h6" />
        </svg>
      ),
      title: "Gestión Documental",
      description:
        "Recopila DNI, nóminas, contratos y garantías de forma segura. Todo listo para formalizar el contrato.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          <path d="M8 10h.01M12 10h.01M16 10h.01" />
        </svg>
      ),
      title: "Comunicación Omnicanal",
      description: "WhatsApp, Email, SMS y Telegram. Mantén a todos informados en su canal preferido.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          <path d="M10 7v6M7 10h6" />
        </svg>
      ),
      title: "Analytics Avanzado",
      description: "Métricas en tiempo real: conversión, tiempo de respuesta, rendimiento por anuncio y agente.",
    },
  ]

  return (
    <section id="benefits" className="benefits section">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-lg">Todo lo que necesitas para alquilar más rápido</h2>
          <p>Automatiza cada paso del proceso, desde el primer contacto hasta la firma del contrato</p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
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
