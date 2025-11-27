import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Rodríguez",
      role: "Director, Inmobiliaria Madrid Centro",
      content:
        "RentAFlow nos ha permitido gestionar 3x más propiedades con el mismo equipo. La automatización de respuestas y validación de leads es increíble.",
      rating: 5,
      avatar: "/man.jpg",
    },
    {
      name: "Laura Martínez",
      role: "CEO, PropTech Barcelona",
      content:
        "Antes tardábamos horas en responder leads. Ahora es automático y nuestra tasa de conversión subió un 40%. Imprescindible.",
      rating: 5,
      avatar: "/diverse-woman-portrait.png",
    },
    {
      name: "Miguel Ángel Torres",
      role: "Agente Inmobiliario",
      content:
        "La programación automática de visitas y la gestión documental me ahorran al menos 10 horas semanales. Puedo centrarme en cerrar contratos.",
      rating: 5,
      avatar: "/man-suit.jpg",
    },
  ]

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4 text-balance">
            Confiado por agencias líderes
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto text-pretty">
            Miles de profesionales ya automatizan sus procesos con RentAFlow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-chalk p-8 rounded-2xl border border-silk shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-text-muted leading-relaxed mb-6">{testimonial.content}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-unohana rounded-full flex items-center justify-center text-primary font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-text-dark">{testimonial.name}</div>
                  <div className="text-sm text-text-muted">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
