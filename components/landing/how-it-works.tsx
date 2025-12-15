export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Conecta Tus Portales",
      description: "Integra Idealista, Fotocasa y otros portales. RentAFlow captura todos los leads automáticamente.",
    },
    {
      number: "02",
      title: "IA Filtra y Valida",
      description: "La inteligencia artificial verifica requisitos y agenda visitas automáticamente con tu calendario.",
    },
    {
      number: "03",
      title: "Cierra Contratos Más Rápido",
      description: "Recoge documentación digital, genera contratos y mantén todo organizado hasta el cierre.",
    },
  ]

  return (
    <section id="como-funciona" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Cómo Empezar en 3 Simples Pasos</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            De lead a contrato firmado sin intervención manual
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-border -translate-x-1/2" />
              )}
              <div className="relative">
                <div className="flex items-center justify-center w-24 h-24 rounded-2xl bg-primary/10 mb-6 mx-auto">
                  <span className="text-4xl font-bold text-primary">{step.number}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-center">{step.title}</h3>
                <p className="text-muted-foreground text-center leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
