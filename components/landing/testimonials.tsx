import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "María López",
    role: "Directora Comercial",
    company: "Inmobiliaria Castellana",
    image: "/professional-woman-portrait.png",
    content:
      "RentAFlow ha transformado nuestra gestión de alquileres. Antes tardábamos días en responder a leads, ahora es instantáneo. Hemos aumentado nuestras conversiones un 40%.",
    rating: 5,
  },
  {
    name: "Carlos Martínez",
    role: "CEO",
    company: "Alquiler Express",
    image: "/professional-man-portrait.png",
    content:
      "El ahorro de tiempo es brutal. Mi equipo de 3 agentes gestiona ahora el doble de leads sin aumentar horas. La validación automática de documentos es oro puro.",
    rating: 5,
  },
  {
    name: "Ana García",
    role: "Fundadora",
    company: "Urban Rent",
    image: "/professional-woman-entrepreneur.png",
    content:
      "Lo que más me gusta es el white-label. Nuestros clientes no saben que usamos RentAFlow, solo ven nuestra marca. Y el soporte es excepcional.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Agencias que ya confían en RentAFlow
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Más de 500 agencias inmobiliarias están automatizando sus alquileres con nosotros.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/30 transition-colors bg-card">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 text-pretty">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
