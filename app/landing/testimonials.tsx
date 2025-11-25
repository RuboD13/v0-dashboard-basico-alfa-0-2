export default function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Mendoza",
      role: "Director, Inmobiliaria Mendoza",
      avatar: "CM",
      text: "RentAFlow nos ha permitido gestionar el triple de propiedades con el mismo equipo. La automatización de respuestas y la validación de leads nos ahorra más de 4 horas diarias.",
      rating: 5,
    },
    {
      name: "Ana Belén Torres",
      role: "Propietaria, Torres Properties",
      avatar: "AT",
      text: "Antes perdía leads por no responder a tiempo. Ahora cada consulta recibe respuesta inmediata y solo me ocupo de los inquilinos realmente interesados y cualificados.",
      rating: 5,
    },
    {
      name: "Roberto Sánchez",
      role: "CEO, Grupo Alquiler Plus",
      avatar: "RS",
      text: "La integración con los portales es impecable. Hemos reducido el tiempo de cierre de contratos de 3 semanas a 5 días. El ROI fue inmediato.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="testimonials">
      <div className="landing-container">
        <div className="section-header">
          <span className="section-label">Testimonios</span>
          <h2 className="section-title">Lo que dicen nuestros clientes</h2>
          <p className="section-subtitle">
            Más de 1,200 agencias confían en RentAFlow para automatizar su gestión de alquileres.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{testimonial.avatar}</div>
                <div className="testimonial-info">
                  <div className="testimonial-name">{testimonial.name}</div>
                  <div className="testimonial-role">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
