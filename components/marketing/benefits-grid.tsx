import { Clock, Shield, Calendar, FileText, TrendingUp, Palette } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Respuesta Instantánea 24/7",
    description:
      "IA responde automáticamente a cada consulta de inquilino en menos de 30 segundos, cualquier hora del día.",
  },
  {
    icon: Shield,
    title: "Validación IA de Inquilinos",
    description: "Analiza DNI, ingresos y perfil de riesgo automáticamente para filtrar candidatos antes de la visita.",
  },
  {
    icon: Calendar,
    title: "Gestión Automática de Visitas",
    description: "Agenda, confirma y reprograma visitas con sincronización bidireccional con tu calendario.",
  },
  {
    icon: FileText,
    title: "Documentación Centralizada",
    description: "Recopila contratos, DNI, nóminas y documentos requeridos en un único lugar seguro y organizado.",
  },
  {
    icon: TrendingUp,
    title: "Panel de Métricas en Tiempo Real",
    description: "Dashboard con KPIs de conversión, tiempo de respuesta y rendimiento de cada propiedad.",
  },
  {
    icon: Palette,
    title: "White-Label con tu Marca",
    description: "Personaliza colores, logo y dominio para que la experiencia sea 100% tu agencia.",
  },
]

export default function BenefitsGrid() {
  return (
    <section id="beneficios" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Todo lo que Necesitas para Automatizar tus Alquileres
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Gestiona todo el proceso desde la captación del lead hasta el contrato firmado, sin intervención manual.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-2xl border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-pretty">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
