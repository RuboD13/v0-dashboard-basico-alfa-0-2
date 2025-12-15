import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "María González",
      role: "Directora, Inmobiliaria Mediterráneo",
      content:
        "RentAFlow ha transformado nuestra agencia. Cerramos 3 veces más contratos y nuestro equipo está mucho menos estresado.",
      rating: 5,
    },
    {
      name: "Carlos Ruiz",
      role: "Fundador, PropTech Madrid",
      content:
        "La automatización de documentación nos ahorra 15 horas semanales. El ROI fue evidente en el primer mes.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      role: "Gerente, Alquileres Barcelona",
      content: "Los inquilinos adoran la rapidez de respuesta. Nuestra reputación online ha mejorado notablemente.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Amado por Agencias en Toda España</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Testimonios reales de profesionales que transformaron su negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{testimonial.content}</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
