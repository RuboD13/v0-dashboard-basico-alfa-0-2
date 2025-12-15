import { ArrowRight } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Conecta tus portales",
      description: "Integra Idealista, Fotocasa y otros portales. RentAFlow captura cada lead automáticamente.",
      visual: (
        <div className="bg-porcelain rounded-xl p-4 mt-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-xs font-bold border border-base">
              I
            </div>
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-xs font-bold border border-base">
              F
            </div>
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-xs font-bold border border-base">
              H
            </div>
            <ArrowRight className="w-4 h-4 text-primary" />
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
            </div>
          </div>
          <div className="h-2 bg-base rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-primary rounded-full" />
          </div>
          <p className="text-xs text-secondary/50 mt-2">23 leads capturados hoy</p>
        </div>
      ),
    },
    {
      number: "02",
      title: "IA filtra y agenda",
      description: "Validación automática de requisitos. Los leads cualificados reciben propuestas de visita.",
      visual: (
        <div className="bg-porcelain rounded-xl p-4 mt-4">
          <div className="space-y-2">
            {[
              { name: "María G.", status: "Validado", color: "bg-green-100 text-green-700" },
              { name: "Carlos P.", status: "Pendiente", color: "bg-amber-100 text-amber-700" },
              { name: "Ana R.", status: "Visita 15:00", color: "bg-blue-100 text-blue-700" },
            ].map((lead) => (
              <div
                key={lead.name}
                className="flex items-center justify-between bg-white rounded-lg p-2 border border-base"
              >
                <span className="text-sm font-medium text-secondary">{lead.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${lead.color}`}>{lead.status}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      number: "03",
      title: "Cierra contratos",
      description: "Documentación digital, firmas electrónicas y seguimiento automático hasta el cierre.",
      visual: (
        <div className="bg-porcelain rounded-xl p-4 mt-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex-1">
              <div className="text-2xl font-bold text-primary">87%</div>
              <div className="text-xs text-secondary/50">Tasa de conversión</div>
            </div>
            <div className="flex-1">
              <div className="text-2xl font-bold text-green-600">2.4h</div>
              <div className="text-xs text-secondary/50">Tiempo respuesta</div>
            </div>
          </div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={`flex-1 h-8 rounded ${i <= 4 ? "bg-primary" : "bg-base"}`} />
            ))}
          </div>
          <p className="text-xs text-secondary/50 mt-2">4 de 5 contratos cerrados este mes</p>
        </div>
      ),
    },
  ]

  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-porcelain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary text-balance">Cómo funciona RentAFlow</h2>
          <p className="mt-4 text-lg text-secondary/60 max-w-2xl mx-auto">De lead a contrato en 3 simples pasos</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative bg-white rounded-2xl p-6 lg:p-8 border border-base">
              {/* Step number */}
              <div className="text-5xl font-bold text-primary/10 mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold text-secondary mb-2">{step.title}</h3>
              <p className="text-secondary/60">{step.description}</p>
              {step.visual}

              {/* Connector arrow (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
