import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Social Proof Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-unohana rounded-full border border-silk">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-text-muted">+1,200 agencias automatizan con nosotros</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-dark leading-tight text-balance">
                Automatiza tu gestión de alquileres
              </h1>
              <p className="text-xl text-text-muted leading-relaxed text-pretty">
                De lead a contrato firmado en piloto automático. IA que captura, valida, programa visitas y gestiona
                documentación mientras tú cierras más contratos.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-primary text-chalk rounded-lg hover:bg-primary-dark transition-all font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                Comenzar Gratis
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-porcelain text-text-dark rounded-lg hover:bg-silk transition-colors font-medium border border-silk">
                Ver Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-silk">
              <div>
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-text-muted">Tasa respuesta</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">-75%</div>
                <div className="text-sm text-text-muted">Tiempo gestión</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-text-muted">Disponibilidad</div>
              </div>
            </div>
          </div>

          {/* Hero Image - Workflow Visualization */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-unohana to-porcelain p-8 rounded-2xl border border-silk shadow-2xl">
              <Image
                src="/images/image.png"
                alt="RentAFlow automation workflow"
                width={600}
                height={500}
                className="w-full h-auto rounded-lg"
              />
            </div>
            {/* Floating Stats Cards */}
            <div className="absolute -top-4 -right-4 bg-chalk p-4 rounded-xl shadow-lg border border-silk">
              <div className="text-2xl font-bold text-primary">+1.2K</div>
              <div className="text-xs text-text-muted">Agencias activas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
