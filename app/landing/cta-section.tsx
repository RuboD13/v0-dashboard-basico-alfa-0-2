import "./landing.css"

export function CTASection() {
  return (
    <section className="cta-section" id="demo">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Empieza a automatizar tu gestión de alquileres hoy</h2>
          <p className="cta-subtitle">
            Únete a más de 1,200 agencias que ya ahorran tiempo y cierran más contratos con RentAFlow.
          </p>
          <div className="cta-actions">
            <button className="cta-btn-primary">Prueba gratis 14 días</button>
            <button className="cta-btn-secondary">Solicitar demo</button>
          </div>
          <p className="cta-note">Sin tarjeta de crédito. Configuración en 5 minutos.</p>
        </div>
      </div>
    </section>
  )
}
