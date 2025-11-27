export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Empieza a automatizar hoy</h2>
          <p className="cta-description">14 días de prueba gratis. Sin tarjeta de crédito. Sin compromisos.</p>
          <div className="cta-buttons">
            <a href="/register" className="btn btn-primary btn-lg">
              Comenzar Prueba Gratis
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="/contact" className="btn btn-secondary btn-lg">
              Hablar con Ventas
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
