import "./landing.css"

const testimonials = [
  {
    quote:
      "RentAFlow ha transformado completamente nuestra gestión de leads. Antes perdíamos oportunidades por no responder a tiempo, ahora nuestro tiempo de respuesta es de menos de 5 minutos automáticamente.",
    author: "Laura Martínez",
    role: "Directora Comercial",
    company: "Inmobiliaria Martínez & Asociados",
    initials: "LM",
    featured: true,
  },
  {
    quote:
      "La validación automática de inquilinos nos ahorra horas de trabajo. El scoring de solvencia es increíblemente preciso.",
    author: "Carlos Fernández",
    role: "CEO",
    company: "Grupo Vivienda BCN",
    initials: "CF",
    featured: false,
  },
  {
    quote:
      "Desde que implementamos RentAFlow, nuestra tasa de conversión de leads a visitas ha aumentado un 65%. El ROI es impresionante.",
    author: "Ana García",
    role: "Property Manager",
    company: "Urban Living Madrid",
    initials: "AG",
    featured: false,
  },
  {
    quote:
      "La sincronización con nuestro calendario y la programación automática de visitas nos ha liberado tiempo para enfocarnos en cerrar contratos.",
    author: "Miguel Sánchez",
    role: "Agente Senior",
    company: "RE/MAX Barcelona",
    initials: "MS",
    featured: false,
  },
]

const stats = [
  { value: "1,200+", label: "Agencias activas" },
  { value: "2.5M", label: "Leads procesados" },
  { value: "98%", label: "Satisfacción" },
  { value: "3.5h", label: "Ahorro diario promedio" },
]

export function Testimonials() {
  return (
    <section className="testimonials section" id="testimonios">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Testimonios</span>
          <h2 className="section-title">Lo que dicen nuestros clientes</h2>
          <p className="section-subtitle">
            Miles de agencias inmobiliarias ya confían en RentAFlow para automatizar sus procesos.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`testimonial-card ${testimonial.featured ? "featured" : ""}`}>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="testimonial-star" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              <p className="testimonial-quote">"{testimonial.quote}"</p>

              <div className="testimonial-author">
                <div className="testimonial-avatar">{testimonial.initials}</div>
                <div className="testimonial-info">
                  <div className="testimonial-name">{testimonial.author}</div>
                  <div className="testimonial-role">{testimonial.role}</div>
                  <div className="testimonial-company">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-stats">
          {stats.map((stat, index) => (
            <div key={index} className="testimonial-stat">
              <div className="testimonial-stat-value">{stat.value}</div>
              <div className="testimonial-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
