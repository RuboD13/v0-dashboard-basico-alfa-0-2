export default function CTASection() {
  return (
    <section id="contacto" className="cta-section">
      <div className="cta-container">
        <div className="cta-box">
          <h2 className="cta-title text-balance">¿Listo para automatizar tu agencia?</h2>
          <p className="cta-subtitle text-pretty">
            Únete a más de 1,200 agencias que ya ahorran +20 horas semanales con RentAFlow.
          </p>
          <div className="cta-buttons">
            <a href="#precios" className="cta-btn-primary">
              Empezar Prueba Gratis
              <svg
                width="20"
                height="20"
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
            <a href="#producto" className="cta-btn-secondary">
              Hablar con Ventas
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
