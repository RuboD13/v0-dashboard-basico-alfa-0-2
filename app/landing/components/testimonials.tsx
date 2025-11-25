export function Testimonials() {
  const testimonials = [
    {
      quote:
        "RentAFlow ha transformado nuestra agencia. Antes perdíamos el 40% de los leads por responder tarde. Ahora respondemos en segundos y hemos aumentado las conversiones un 60%.",
      author: "Laura Fernández",
      role: "Directora de Aces Inmobiliaria",
      initials: "LF",
      rating: 5,
    },
    {
      quote:
        "La validación automática de inquilinos nos ahorra horas de trabajo manual. El sistema verifica documentación y solvencia antes de que programemos la visita. Increíble.",
      author: "Miguel Ángel Torres",
      role: "CEO de Torres Property Management",
      initials: "MT",
      rating: 5,
    },
    {
      quote:
        "Gestionamos 200+ propiedades y RentAFlow nos permite hacerlo con la mitad del equipo. La automatización de visitas y la gestión documental son un game changer.",
      author: "Carmen Ruiz",
      role: "COO de Madrid Homes",
      initials: "CR",
      rating: 5,
    },
  ]

  return (
    <section className="testimonials" id="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Testimonios</span>
          <h2 id="testimonials-title" className="section-title text-balance">
            Lo que dicen nuestros clientes
          </h2>
          <p className="section-subtitle">Más de 1,200 agencias confían en RentAFlow para gestionar sus alquileres</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <article key={index} className="testimonial-card">
              <div className="testimonial-card__stars" aria-label={`${testimonial.rating} de 5 estrellas`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              <blockquote className="testimonial-card__quote">"{testimonial.quote}"</blockquote>

              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar" aria-hidden="true">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="testimonial-card__name">{testimonial.author}</div>
                  <div className="testimonial-card__role">{testimonial.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
