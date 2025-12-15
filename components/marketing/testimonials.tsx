import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Fernández",
    role: "Director",
    company: "Inmobiliaria Madrid Centro",
    content:
      "RentAFlow nos ha ahorrado 3 horas diarias en gestión manual. La validación IA de inquilinos es increíblemente precisa.",
    avatar: "/diverse-businessman.png",
    rating: 5,
  },
  {
    name: "Ana Rodríguez",
    role: "Agente Inmobiliaria",
    company: "Barcelona Properties",
    content:
      "Desde que usamos RentAFlow, nuestra tasa de conversión aumentó un 15%. Los leads llegan mejor calificados.",
    avatar: "/confident-businesswoman.png",
    rating: 5,
  },
  {
    name: "Miguel Sánchez",
    role: "Propietario",
    company: "Gestión de Alquileres Premium",
    content: "La automatización de visitas y recordatorios es fantástica. Ya no perdemos tiempo con no-shows.",
    avatar: "/property-owner.jpg",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Amado por Agencias Inmobiliarias en Toda España
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Más de 200 agencias confían en RentAFlow para automatizar sus procesos de alquiler.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 bg-card rounded-2xl border border-border hover:shadow-lg transition-shadow">
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-foreground mb-6 text-pretty">"{testimonial.content}"</p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full bg-muted"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
