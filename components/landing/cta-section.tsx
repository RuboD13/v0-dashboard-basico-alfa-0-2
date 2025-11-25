import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
          ¿Listo para automatizar tu gestión de alquileres?
        </h2>
        <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
          Imagina que cada lead de alquiler se responde al instante, se filtra automáticamente y llega a tu agenda con
          toda la información verificada. Eso es RentAFlow.
        </p>

        {/* Benefits List */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            <span>Sin tarjeta de crédito</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            <span>Setup en 30 minutos</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            <span>Primer mes gratis</span>
          </div>
        </div>

        {/* CTA Button */}
        <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90 px-8">
          Empieza tu Prueba Gratis
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>

        <p className="mt-6 text-sm opacity-75">Únete a más de 500 agencias que ya confían en RentAFlow</p>
      </div>
    </section>
  )
}
