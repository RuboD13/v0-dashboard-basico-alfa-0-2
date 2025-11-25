import Link from "next/link"

export function CTASection() {
  return (
    <section className="cta-section" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta-section__inner">
          <h2 id="cta-title" className="cta-section__title text-balance">
            ¿Listo para automatizar tu gestión de alquileres?
          </h2>
          <p className="cta-section__subtitle">
            Únete a más de 1,200 agencias que ya ahorran tiempo y cierran más contratos con RentAFlow.
          </p>
          <div className="cta-section__buttons">
            <Link href="#pricing" className="btn btn--white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
              Empezar Prueba Gratuita
            </Link>
            <Link href="#" className="btn btn--outline-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              Hablar con Ventas
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
