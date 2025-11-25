export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="landing-container">
        <div className="cta-inner">
          <h2 className="cta-title">Empieza a automatizar hoy</h2>
          <p className="cta-subtitle">
            Únete a más de 1,200 agencias que ya ahorran tiempo y cierran más contratos con RentAFlow. 14 días de prueba
            gratis, sin tarjeta de crédito.
          </p>
          <div className="cta-actions">
            <a href="/register" className="btn btn-white btn-lg">
              Comenzar Prueba Gratis
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#demo" className="btn btn-outline-white btn-lg">
              Solicitar Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
