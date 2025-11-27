import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-chalk to-porcelain pt-20 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-silk shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-text-muted">Más de 1,200 agencias confían en RentAFlow</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-text-dark leading-tight text-balance">
                Automatiza tu gestión de alquileres de principio a fin
              </h1>
              <p className="text-xl text-text-muted leading-relaxed text-pretty">
                Captura leads automáticamente, programa visitas, valida inquilinos y gestiona documentación. Todo en una
                sola plataforma inteligente.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/demo"
                className="bg-text-dark text-white px-8 py-4 rounded-full hover:bg-primary transition-all font-medium text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Comenzar Gratis
              </Link>
              <Link
                href="#demo-video"
                className="bg-white text-text-dark px-8 py-4 rounded-full hover:bg-porcelain transition-colors font-medium text-center border border-silk"
              >
                Ver Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-silk">
              <div>
                <div className="text-3xl font-bold text-text-dark">98%</div>
                <div className="text-sm text-text-muted mt-1">Tasa de respuesta</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-text-dark">-75%</div>
                <div className="text-sm text-text-muted mt-1">Tiempo invertido</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-text-dark">24/7</div>
                <div className="text-sm text-text-muted mt-1">Disponibilidad</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl border border-silk p-8">
              {/* Automation Flow Illustration */}
              <div className="space-y-6">
                {/* Lead Capture */}
                <div className="flex items-center space-x-4 p-4 bg-porcelain rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-text-dark">Lead Capturado</div>
                    <div className="text-xs text-text-muted">Respuesta automática enviada</div>
                  </div>
                  <div className="text-green-500">✓</div>
                </div>

                {/* Validation */}
                <div className="flex items-center space-x-4 p-4 bg-porcelain rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-text-dark">Validación IA</div>
                    <div className="text-xs text-text-muted">Requisitos verificados</div>
                  </div>
                  <div className="text-green-500">✓</div>
                </div>

                {/* Visit Scheduled */}
                <div className="flex items-center space-x-4 p-4 bg-porcelain rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-text-dark">Visita Programada</div>
                    <div className="text-xs text-text-muted">Calendario sincronizado</div>
                  </div>
                  <div className="text-green-500">✓</div>
                </div>

                {/* Documents */}
                <div className="flex items-center space-x-4 p-4 bg-primary/5 rounded-xl border-2 border-primary/20">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 animate-pulse">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-text-dark">Documentos en Proceso</div>
                    <div className="text-xs text-text-muted">Recopilando información...</div>
                  </div>
                  <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
              </div>

              {/* Integration Icons */}
              <div className="mt-8 pt-6 border-t border-silk">
                <div className="text-xs text-text-muted text-center mb-4">Integrado con</div>
                <div className="flex items-center justify-center space-x-4 opacity-60">
                  <div className="w-8 h-8 bg-base rounded flex items-center justify-center">
                    <span className="text-xs font-bold">I</span>
                  </div>
                  <div className="w-8 h-8 bg-base rounded flex items-center justify-center">
                    <span className="text-xs font-bold">F</span>
                  </div>
                  <div className="w-8 h-8 bg-base rounded flex items-center justify-center">
                    <span className="text-xs font-bold">H</span>
                  </div>
                  <div className="w-8 h-8 bg-base rounded flex items-center justify-center">
                    <span className="text-xs font-bold">P</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
