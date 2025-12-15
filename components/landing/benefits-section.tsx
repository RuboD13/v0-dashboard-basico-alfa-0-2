import { Zap, Clock, BarChart3, Palette, CalendarCheck, FolderOpen } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: Zap,
      title: "90% menos emails manuales",
      description: "La IA responde automáticamente a cada lead con información personalizada del inmueble.",
      color: "bg-amber-50 text-amber-600",
      size: "large",
    },
    {
      icon: Clock,
      title: "Respuesta instantánea 24/7",
      description: "Nunca pierdas un lead. Respuestas automáticas incluso fuera de horario laboral.",
      color: "bg-blue-50 text-blue-600",
      size: "medium",
    },
    {
      icon: BarChart3,
      title: "Panel de métricas en tiempo real",
      description: "Visualiza conversiones, tiempos de respuesta y rendimiento de cada inmueble.",
      color: "bg-green-50 text-green-600",
      size: "medium",
    },
    {
      icon: Palette,
      title: "100% White-label",
      description: "Tu marca, tu dominio, tus colores. Los inquilinos nunca sabrán que usas RentAFlow.",
      color: "bg-purple-50 text-purple-600",
      size: "medium",
    },
    {
      icon: CalendarCheck,
      title: "Calendario sincronizado",
      description: "Integración directa con Google Calendar. Las visitas se agendan solas.",
      color: "bg-pink-50 text-pink-600",
      size: "medium",
    },
    {
      icon: FolderOpen,
      title: "Documentación centralizada",
      description: "DNI, nóminas, contratos... Todo en un solo lugar, seguro y organizado.",
      color: "bg-emerald-50 text-emerald-600",
      size: "large",
    },
  ]

  return (
    <section id="beneficios" className="py-20 lg:py-28 bg-chalk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary text-balance">
            Beneficios que transforman tu negocio
          </h2>
          <p className="mt-4 text-lg text-secondary/60 max-w-2xl mx-auto">
            Enfócate en cerrar contratos mientras RentAFlow se encarga del resto
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`group relative p-6 lg:p-8 rounded-2xl bg-white border border-base hover:border-primary/20 hover:shadow-lg transition-all duration-300 ${
                benefit.size === "large" ? "lg:col-span-1" : ""
              }`}
            >
              <div className={`w-12 h-12 rounded-xl ${benefit.color} flex items-center justify-center mb-5`}>
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">{benefit.title}</h3>
              <p className="text-secondary/60 leading-relaxed">{benefit.description}</p>
              {/* Hover decoration */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
