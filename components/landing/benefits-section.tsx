import { Card, CardContent } from "@/components/ui/card"
import { Zap, Clock, BarChart3, Paintbrush, Calendar, FolderCheck } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: Zap,
      title: "90% Menos Emails Manuales",
      description: "Respuestas automáticas a cada lead con validación por IA antes de contacto humano.",
      highlight: true,
    },
    {
      icon: Clock,
      title: "Respuesta Instantánea 24/7",
      description: "Tu asistente de IA responde a inquilinos potenciales en cualquier momento del día.",
      highlight: false,
    },
    {
      icon: BarChart3,
      title: "Panel de Métricas en Tiempo Real",
      description: "Visualiza conversiones, tiempos de respuesta y cierre de contratos al instante.",
      highlight: false,
    },
    {
      icon: Paintbrush,
      title: "White-Label con Tu Marca",
      description: "Personaliza completamente la plataforma con los colores y logo de tu agencia.",
      highlight: false,
    },
    {
      icon: Calendar,
      title: "Sincronización de Calendario",
      description: "Programación automática de visitas con recordatorios para agentes e inquilinos.",
      highlight: false,
    },
    {
      icon: FolderCheck,
      title: "Documentación Centralizada",
      description: "Recopila contratos, nóminas y garantías en un solo lugar seguro y organizado.",
      highlight: false,
    },
  ]

  return (
    <section id="beneficios" className="py-20 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Enfócate en Cómo Ayuda, No en las Funcionalidades
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Reduce el trabajo manual y cierra más contratos con automatización inteligente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all hover:shadow-lg ${
                benefit.highlight ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
