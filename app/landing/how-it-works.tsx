export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Conecta tus portales",
      description:
        "Integra Idealista, Fotocasa, Habitaclia y más en minutos. Los leads llegarán automáticamente a RentAFlow.",
    },
    {
      number: 2,
      title: "Configura tu flujo",
      description:
        "Define requisitos de validación, mensajes automáticos y disponibilidad para visitas según tus necesidades.",
    },
    {
      number: 3,
      title: "Gestiona y cierra",
      description:
        "Recibe leads validados, programa visitas con un clic y recopila documentos para cerrar contratos rápidamente.",
    },
  ]

  return (
    <section id="how-it-works" className="how-it-works section">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-lg">Cómo funciona</h2>
          <p>Tres simples pasos para transformar tu gestión de alquileres</p>
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.number} className="step-card">
              <div className="step-number">
                <span>{step.number}</span>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
