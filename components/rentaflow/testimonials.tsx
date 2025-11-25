import { Icons } from "./icons"

export function Testimonials() {
  const testimonials = [
    {
      text: "RentAFlow ha transformado nuestra gestión de alquileres. Antes tardábamos días en responder leads, ahora es instantáneo. Hemos aumentado nuestra conversión un 40%.",
      author: "Carlos Martínez",
      role: "Director, Inmobiliaria Martínez",
      avatar: "/professional-man-headshot.png",
    },
    {
      text: "La validación automática de inquilinos nos ahorra horas de trabajo. Solo recibimos visitas de leads cualificados. El ROI fue inmediato.",
      author: "Ana García",
      role: "CEO, Fincas García",
      avatar: "/professional-woman-headshot.png",
    },
    {
      text: "Como agencia especializada en venta, los alquileres nos quitaban tiempo. RentAFlow nos permite ofrecer este servicio sin ampliar plantilla.",
      author: "Miguel Torres",
      role: "Socio Fundador, Torres & Asociados",
      avatar: "/images/testimonial-2.png",
    },
  ]

  return (
    <section className="rf-testimonials" id="testimonials">
      <div className="rf-container">
        <div className="rf-section-header">
          <span className="rf-section-label">Testimonios</span>
          <h2 className="rf-section-title">Lo que dicen nuestros clientes</h2>
          <p className="rf-section-description">Más de 500 agencias ya confían en RentAFlow</p>
        </div>

        <div className="rf-testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rf-testimonial-card">
              <div className="rf-testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Icons.Star key={i} />
                ))}
              </div>
              <p className="rf-testimonial-text">"{testimonial.text}"</p>
              <div className="rf-testimonial-author">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="rf-testimonial-avatar"
                />
                <div className="rf-testimonial-info">
                  <h5>{testimonial.author}</h5>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
