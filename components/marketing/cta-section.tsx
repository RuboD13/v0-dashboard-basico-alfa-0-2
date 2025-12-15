import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-br from-primary via-accent to-primary rounded-3xl p-12 md:p-16 text-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Comienza gratis hoy</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">
              ¿Listo para Automatizar tu Gestión de Alquileres?
            </h2>

            <p className="text-lg md:text-xl text-white/90 mb-8 text-pretty">
              Únete a más de 200 agencias que ya están ahorrando tiempo y cerrando más contratos con RentAFlow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                Comenzar Prueba Gratuita
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 bg-transparent"
              >
                Agendar Demo
              </Button>
            </div>

            <p className="text-sm text-white/80 mt-6">
              14 días gratis • Sin tarjeta de crédito • Configuración en 30 minutos
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
