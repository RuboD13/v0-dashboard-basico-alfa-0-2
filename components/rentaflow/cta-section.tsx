import { Icons } from "./icons"

export function CTASection() {
  return (
    <section className="rf-cta-section">
      <div className="rf-container rf-cta-content">
        <h2>¿Listo para automatizar tus alquileres?</h2>
        <p>
          Únete a las 500+ agencias que ya ahorran tiempo y cierran más contratos con RentAFlow. Primer mes
          completamente gratis, sin tarjeta de crédito.
        </p>
        <div className="rf-cta-actions">
          <a href="#" className="rf-btn rf-btn-primary rf-btn-lg">
            Empezar Gratis
            <Icons.ArrowRight />
          </a>
          <a href="#" className="rf-btn rf-btn-secondary rf-btn-lg">
            Solicitar Demo
          </a>
        </div>
      </div>
    </section>
  )
}
