import { Bot, Shield, Calendar, FileText, MessageSquare, BarChart3 } from "lucide-react"

export function Benefits() {
  const benefits = [
    {
      icon: Bot,
      title: "Captura Automática de Leads",
      description:
        "IA que responde automáticamente a cada consulta en menos de 60 segundos, 24/7 en todos tus portales.",
      color: "from-primary/10 to-primary/5",
    },
    {
      icon: Shield,
      title: "Validación Inteligente",
      description: "Análisis automático de garantías y requisitos antes de programar visitas. Solo leads cualificados.",
      color: "from-blue-500/10 to-blue-500/5",
    },
    {
      icon: Calendar,
      title: "Programación de Visitas",
      description: "Sincronización automática con calendarios, recordatorios y reprogramación sin intervención manual.",
      color: "from-purple-500/10 to-purple-500/5",
    },
    {
      icon: FileText,
      title: "Gestión Documental",
      description: "Recopilación automática de documentos necesarios para contratos de arrendamiento y aseguradoras.",
      color: "from-orange-500/10 to-orange-500/5",
    },
    {
      icon: MessageSquare,
      title: "Comunicación Omnicanal",
      description: "Centraliza WhatsApp, email y llamadas en un solo lugar. Feedback automático post-visita.",
      color: "from-green-500/10 to-green-500/5",
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description:
        "Dashboard en tiempo real con métricas de conversión, tiempo de respuesta y rendimiento por anuncio.",
      color: "from-pink-500/10 to-pink-500/5",
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4 text-balance">
            Todo lo que necesitas en un solo lugar
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto text-pretty">
            Automatiza cada paso del proceso de alquiler y cierra más contratos con menos esfuerzo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group p-8 bg-chalk rounded-2xl border border-silk hover:border-primary/20 hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-3">{benefit.title}</h3>
              <p className="text-text-muted leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
