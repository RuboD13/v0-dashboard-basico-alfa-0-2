export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Conecta tus Portales",
      description:
        "Integra Idealista, Fotocasa, Habitaclia y más en minutos. Los leads llegarán automáticamente a tu panel.",
    },
    {
      number: 2,
      title: "Configura tu Flujo",
      description:
        "Define requisitos de validación, plantillas de respuesta y reglas de programación según tus necesidades.",
    },
    {
      number: 3,
      title: "Gestiona y Cierra",
      description: "Revisa leads validados, confirma visitas y gestiona documentación. Todo desde un único dashboard.",
    },
  ]

  return (
    <section className="how-it-works" id="how-it-works" aria-labelledby="how-it-works-title">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Cómo Funciona</span>
          <h2 id="how-it-works-title" className="section-title text-balance">
            Empieza a automatizar en 3 simples pasos
          </h2>
          <p className="section-subtitle">
            Sin complicaciones técnicas. Configura tu cuenta y comienza a recibir leads cualificados hoy mismo.
          </p>
        </div>

        <div className="steps">
          {steps.map((step, index) => (
            <div key={step.number} className="step">
              <div className="step__number">{step.number}</div>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__description">{step.description}</p>
              {index < steps.length - 1 && <div className="step__connector" aria-hidden="true"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
