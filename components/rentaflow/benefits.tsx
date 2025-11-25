import { Icons } from "./icons"

export function Benefits() {
  const benefits = [
    {
      icon: <Icons.Zap />,
      title: "Respuesta Instantánea 24/7",
      description:
        "Cada lead recibe respuesta automática en segundos, no en horas. Aumenta tu conversión un 35% con atención inmediata.",
      stat: { value: "90%", label: "menos emails manuales" },
      large: true,
    },
    {
      icon: <Icons.Shield />,
      title: "Validación con IA",
      description:
        "Verifica automáticamente DNI, ingresos y requisitos antes de agendar visitas. Solo leads cualificados.",
      stat: { value: "< 2min", label: "tiempo de verificación" },
    },
    {
      icon: <Icons.Calendar />,
      title: "Agenda Automática",
      description:
        "Sincronización bidireccional con Google Calendar y Outlook. Propone, confirma y reprograma visitas sin intervención.",
      stat: { value: "4h", label: "ahorradas por 50 leads" },
    },
    {
      icon: <Icons.FileText />,
      title: "Documentación Centralizada",
      description: "Recopila DNI, nóminas, contratos y toda la documentación legal en un solo lugar. Cumple con RGPD.",
      stat: { value: "100%", label: "compliant RGPD" },
    },
    {
      icon: <Icons.MessageSquare />,
      title: "Notificaciones Multi-canal",
      description: "Email y WhatsApp automatizados para leads, inquilinos y agentes. Feedback post-visita incluido.",
      stat: { value: "+15%", label: "conversión" },
    },
    {
      icon: <Icons.BarChart />,
      title: "Analytics en Tiempo Real",
      description: "Dashboard con métricas de conversión, tiempos de respuesta y rendimiento por propiedad.",
      stat: { value: "360°", label: "visibilidad" },
    },
  ]

  return (
    <section className="rf-benefits" id="features">
      <div className="rf-container">
        <div className="rf-section-header">
          <span className="rf-section-label">Funcionalidades</span>
          <h2 className="rf-section-title">Todo lo que necesitas para automatizar tus alquileres</h2>
          <p className="rf-section-description">
            De la recogida de datos al contrato firmado. Sin trabajo manual, sin errores, sin esperas.
          </p>
        </div>

        <div className="rf-bento-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className={`rf-bento-card ${benefit.large ? "large" : ""}`}>
              <div className="rf-bento-icon">{benefit.icon}</div>
              <h4>{benefit.title}</h4>
              <p>{benefit.description}</p>
              {benefit.stat && (
                <div className="rf-bento-stat">
                  <span className="rf-bento-stat-value">{benefit.stat.value}</span>
                  <span className="rf-bento-stat-label">{benefit.stat.label}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
