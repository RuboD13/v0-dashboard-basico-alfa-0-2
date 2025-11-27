import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-12 md:p-16 text-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-chalk mb-6 text-balance">
              Empieza a automatizar hoy mismo
            </h2>
            <p className="text-xl text-chalk/90 mb-8 max-w-2xl mx-auto text-pretty">
              Únete a más de 1,200 agencias que ya gestionan sus alquileres en piloto automático
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-chalk text-primary rounded-lg hover:bg-unohana transition-all font-medium flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl">
                Prueba Gratis 14 Días
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-transparent text-chalk rounded-lg hover:bg-white/10 transition-colors font-medium border-2 border-chalk">
                Hablar con Ventas
              </button>
            </div>
            <p className="text-chalk/75 text-sm mt-6">
              Sin tarjeta de crédito • Cancelación inmediata • Soporte en español
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
