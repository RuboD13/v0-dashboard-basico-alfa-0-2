import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section id="contacto" className="py-20 lg:py-28 bg-chalk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-secondary rounded-3xl p-8 lg:p-16 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
          </div>

          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-white/80">Oferta: 14 días gratis + Setup guiado</span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold text-white text-balance mb-4">Empieza a automatizar hoy</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Únete a más de 500 agencias que ya están ahorrando tiempo y cerrando más contratos con RentAFlow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-secondary hover:bg-white/90 px-8 h-12" asChild>
                <Link href="#precios">
                  Empezar Prueba Gratis
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 h-12 bg-transparent"
                asChild
              >
                <Link href="#demo">Agendar Demo</Link>
              </Button>
            </div>

            <p className="mt-6 text-sm text-white/50">
              Sin tarjeta de crédito · Configuración en 5 minutos · Cancela cuando quieras
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
