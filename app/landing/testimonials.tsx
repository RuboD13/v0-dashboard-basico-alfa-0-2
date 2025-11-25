export default function Testimonials() {
  const testimonials = [
    {
      text: "RentAFlow ha transformado nuestra agencia. Antes tardábamos horas en responder leads, ahora todo es automático. Hemos aumentado nuestra conversión un 40%.",
      author: "Laura Fernández",
      role: "CEO, Inmobiliaria Fernández",
      initials: "LF",
    },
    {
      text: "La validación con IA es increíble. Ya no perdemos tiempo con inquilinos que no cumplen requisitos. El ROI fue inmediato desde el primer mes.",
      author: "Miguel Santos",
      role: "Director, Grupo Alquileres BCN",
      initials: "MS",
    },
    {
      text: "Gestionamos 200+ propiedades y RentAFlow nos ahorra más de 20 horas semanales. La integración con nuestro calendario y la gestión documental son perfectas.",
      author: "Carmen Ruiz",
      role: "Operaciones, Madrid Rent",
      initials: "CR",
    },
  ]

  return (
    <section id="testimonios" className="testimonials">
      <div className="section-header">
        <span className="section-label">Testimonios</span>
        <h2 className="section-title text-balance">Lo que dicen nuestros clientes</h2>
        <p className="section-subtitle text-pretty">
          Más de 1,200 agencias confían en RentAFlow para automatizar su gestión de alquileres.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">{testimonial.initials}</div>
              <div className="testimonial-info">
                <span className="testimonial-name">{testimonial.author}</span>
                <span className="testimonial-role">{testimonial.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
