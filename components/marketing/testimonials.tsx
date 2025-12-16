import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "RentAFlow nos ha permitido gestionar el triple de leads con el mismo equipo. La IA responde en segundos y los inquilinos llegan ya filtrados.",
    author: "Laura Martínez",
    role: "Directora de Operaciones",
    company: "Inmobiliaria Sol",
    rating: 5,
    avatar: "LM",
  },
  {
    quote:
      "Antes perdíamos horas coordinando visitas. Ahora el sistema lo hace todo: agenda, recuerda y hasta pide feedback. Increíble.",
    author: "Carlos Ruiz",
    role: "Agente Senior",
    company: "Fincas Barcelona",
    rating: 5,
    avatar: "CR",
  },
  {
    quote:
      "La gestión de documentos era un caos. Con RentAFlow tenemos todo centralizado, cifrado y listo para firmar. Cumplimos RGPD sin esfuerzo.",
    author: "Ana López",
    role: "CEO",
    company: "AlquilaYa",
    rating: 5,
    avatar: "AL",
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Lo que dicen nuestros <span className="text-primary">clientes</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Más de 500 agencias ya confían en RentAFlow para automatizar su gestión de alquileres.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="bg-card rounded-2xl border border-border p-6 lg:p-8 flex flex-col">
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-chart-4 text-chart-4" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-6 flex-grow">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
