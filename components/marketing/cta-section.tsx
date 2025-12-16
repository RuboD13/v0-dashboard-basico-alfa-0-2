import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function CTASection() {
  return (
    <section id="contacto" className="py-16 lg:py-24 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground text-balance">
          ¿Listo para automatizar tu gestión de alquileres?
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto text-pretty">
          Únete a las +500 agencias que ya usan RentAFlow. Primer mes gratis, sin tarjeta de crédito.
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {["Sin tarjeta requerida", "Configuración en 30 min", "Cancela cuando quieras"].map((benefit) => (
            <div key={benefit} className="flex items-center gap-2 text-sm text-primary-foreground/90">
              <CheckCircle2 className="w-4 h-4" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Button size="lg" variant="secondary" className="text-base px-8" asChild>
            <Link href="mailto:demo@rentaflow.com">
              Reservar Demo Gratuita
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base px-8 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            asChild
          >
            <Link href="#precios">Ver Planes y Precios</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
