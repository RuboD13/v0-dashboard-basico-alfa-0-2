import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "RentAFlow nos ha permitido gestionar el triple de leads sin aumentar el equipo. La respuesta automática es impecable.",
      author: "María González",
      role: "Directora, Inmobiliaria Madrid Centro",
      rating: 5,
    },
    {
      quote:
        "El ahorro de tiempo es brutal. Antes pasaba 3 horas diarias respondiendo emails, ahora solo reviso los leads cualificados.",
      author: "Carlos Ruiz",
      role: "Agente Independiente, Barcelona",
      rating: 5,
    },
    {
      quote:
        "La función de white-label es perfecta. Nuestros clientes ni saben que usamos RentAFlow y el servicio parece 100% nuestro.",
      author: "Ana Martínez",
      role: "CEO, Alquileres Premium Valencia",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-chalk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary text-balance">Lo que dicen nuestros clientes</h2>
          <p className="mt-4 text-lg text-secondary/60 max-w-2xl mx-auto">
            Más de 500 agencias ya confían en RentAFlow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-white rounded-2xl p-6 lg:p-8 border border-base hover:shadow-lg transition-shadow"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-secondary/80 leading-relaxed mb-6">"{testimonial.quote}"</blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">{testimonial.author[0]}</span>
                </div>
                <div>
                  <div className="font-semibold text-secondary text-sm">{testimonial.author}</div>
                  <div className="text-xs text-secondary/50">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
