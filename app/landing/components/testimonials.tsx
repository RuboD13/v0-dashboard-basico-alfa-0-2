export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "RentAFlow ha transformado completamente nuestra operación. Ahora respondemos a todos los leads en segundos y nuestras conversiones han aumentado un 60%.",
      author: "María González",
      role: "Directora, Inmobiliaria Madrid Centro",
      rating: 5,
    },
    {
      quote:
        "La validación automática nos ahorra horas cada día. Solo programamos visitas con inquilinos realmente calificados.",
      author: "Carlos Ruiz",
      role: "Agente, Barcelona Properties",
      rating: 5,
    },
    {
      quote: "El mejor ROI que hemos tenido en tecnología. Se pagó solo en el primer mes por el tiempo que nos ahorra.",
      author: "Ana Martínez",
      role: "CEO, Valencia Alquileres",
      rating: 5,
    },
  ]

  return (
    <section id="testimonios" className="py-24 bg-porcelain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-dark mb-4 text-balance">
            Más de 1,200 agencias confían en nosotros
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto text-pretty">
            Lee lo que dicen nuestros clientes sobre cómo RentAFlow ha transformado su negocio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-silk hover:shadow-lg transition-all">
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-text-muted mb-6 leading-relaxed italic">"{testimonial.quote}"</blockquote>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">
                  {testimonial.author[0]}
                </div>
                <div>
                  <div className="font-bold text-text-dark">{testimonial.author}</div>
                  <div className="text-sm text-text-muted">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-text-muted">
            ¿Quieres ver más casos de éxito?{" "}
            <a href="/casos-exito" className="text-primary font-medium hover:underline">
              Lee todos los testimonios →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
