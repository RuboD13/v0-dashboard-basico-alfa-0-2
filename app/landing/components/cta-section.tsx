export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-text-dark via-primary-dark to-text-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            Empieza a automatizar tus alquileres hoy
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto text-pretty">
            Únete a más de 1,200 agencias que ya están ahorrando tiempo y cerrando más contratos con RentAFlow
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="/demo"
              className="bg-white text-text-dark px-8 py-4 rounded-full hover:bg-porcelain transition-all font-medium shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
            >
              Probar gratis por 14 días
            </a>
            <a
              href="/contacto"
              className="bg-transparent text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all font-medium border-2 border-white"
            >
              Hablar con ventas
            </a>
          </div>

          <div className="pt-8 flex items-center justify-center space-x-8 text-white/60 text-sm">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Sin tarjeta de crédito</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Cancela cuando quieras</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
