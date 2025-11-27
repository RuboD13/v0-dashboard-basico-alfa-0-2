export default function Testimonials() {
  const testimonials = [
    {
      content:
        "RentAFlow ha revolucionado nuestra forma de trabajar. Antes tardábamos días en responder a todos los leads, ahora es instantáneo. Hemos aumentado un 40% nuestros cierres.",
      author: "Patricia Ruiz",
      role: "Directora, Inmobiliaria Ruiz & Asociados",
      initials: "PR",
    },
    {
      content:
        "La validación automática de inquilinos nos ahorra horas de trabajo. Ya no programamos visitas con personas que no cumplen los requisitos. Es increíble.",
      author: "Miguel Ángel Torres",
      role: "CEO, Torres Real Estate",
      initials: "MT",
    },
    {
      content:
        "La integración con todos los portales fue inmediata. En 15 minutos teníamos todo conectado y funcionando. El soporte es excepcional.",
      author: "Laura Fernández",
      role: "Gerente, Gestiones Fernández",
      initials: "LF",
    },
  ]

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-lg">Lo que dicen nuestros clientes</h2>
          <p>Más de 1,200 agencias confían en RentAFlow</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="testimonial-star" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="testimonial-content">"{testimonial.content}"</p>

              <div className="testimonial-author">
                <div className="testimonial-avatar">{testimonial.initials}</div>
                <div>
                  <div className="testimonial-name">{testimonial.author}</div>
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
