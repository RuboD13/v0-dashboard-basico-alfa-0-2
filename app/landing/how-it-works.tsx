export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Conecta tus portales",
      description:
        "Integra Idealista, Fotocasa, Habitaclia y otros portales en minutos. Los leads llegan automáticamente a tu dashboard.",
    },
    {
      number: 2,
      title: "Configura tu flujo",
      description:
        "Define tus requisitos, mensajes automáticos y criterios de validación. La IA filtra y responde por ti 24/7.",
    },
    {
      number: 3,
      title: "Gestiona y cierra",
      description:
        "Programa visitas, recoge documentos y prepara contratos. Todo organizado en un solo lugar para cerrar más rápido.",
    },
  ]

  return (
    <section id="como-funciona" className="how-it-works">
      <div className="section-header">
        <span className="section-label">Cómo Funciona</span>
        <h2 className="section-title text-balance">Empieza a automatizar en 3 pasos</h2>
        <p className="section-subtitle text-pretty">
          Sin configuraciones complicadas. Conecta, configura y deja que RentAFlow trabaje por ti.
        </p>
      </div>

      <div className="steps-container">
        {steps.map((step) => (
          <div key={step.number} className="step-card">
            <div className="step-number">{step.number}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
