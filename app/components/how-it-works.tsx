import { Link, Zap, TrendingUp } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Link,
      title: "Conecta tus portales",
      description: "Integración con Idealista, Fotocasa y más en solo 2 minutos. Sin código, sin complicaciones.",
      step: "01",
    },
    {
      icon: Zap,
      title: "Configura tu flujo",
      description: "Define tus criterios de validación, horarios de visita y requisitos de documentación.",
      step: "02",
    },
    {
      icon: TrendingUp,
      title: "Gestiona y cierra",
      description: "Supervisa leads cualificados, asiste a visitas programadas y firma contratos más rápido.",
      step: "03",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-porcelain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4 text-balance">Cómo funciona</h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto text-pretty">
            En 3 simples pasos, automatiza todo tu proceso de gestión de alquileres
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-silk" />
              )}
              <div className="relative bg-chalk p-8 rounded-2xl border border-silk shadow-sm hover:shadow-lg transition-shadow">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-chalk rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.step}
                </div>
                <div className="w-16 h-16 bg-unohana rounded-xl flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-text-dark mb-4">{step.title}</h3>
                <p className="text-text-muted leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
