import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Brain, Calendar, Bell, FileText, ArrowRight } from "lucide-react"
import StepVisual from "./StepVisual" // Declare the StepVisual component before using it

const steps = [
  {
    step: 1,
    icon: Mail,
    title: "Captura Automática",
    description:
      "RentAFlow detecta cada lead que llega por email, Idealista, Fotocasa o formularios web y extrae automáticamente los datos clave.",
    visual: "lead-capture",
  },
  {
    step: 2,
    icon: Brain,
    title: "Filtro IA Inteligente",
    description:
      "Nuestra IA solicita y verifica DNI, ingresos y requisitos definidos por inmueble. Solo los leads cualificados pasan al siguiente paso.",
    visual: "ai-filter",
  },
  {
    step: 3,
    icon: Calendar,
    title: "Agenda Visitas",
    description:
      "Consulta el calendario del agente y propone fechas disponibles al inquilino. Sin intercambio de emails, sin llamadas.",
    visual: "calendar",
  },
  {
    step: 4,
    icon: Bell,
    title: "Recordatorios y Feedback",
    description:
      "Envía avisos automáticos antes y después de la visita. Recoge feedback tanto del inquilino como del agente.",
    visual: "notifications",
  },
  {
    step: 5,
    icon: FileText,
    title: "Documentación Final",
    description:
      "Solicita los documentos formales necesarios y los organiza para tu equipo legal. Listo para firmar contrato.",
    visual: "documents",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Cómo Funciona
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            De lead a contrato en 5 pasos automáticos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Todo el ciclo de vida del alquiler automatizado. Tú solo intervienes para la validación final.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <Card key={index} className="overflow-hidden border-border/50 hover:border-primary/30 transition-colors">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Left: Content */}
                  <div className="p-6 lg:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                        {step.step}
                      </div>
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:flex items-center mt-4 text-sm text-muted-foreground">
                        <span>Siguiente paso</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    )}
                  </div>

                  {/* Right: Visual */}
                  <div className="bg-secondary/50 p-6 lg:p-8 flex items-center justify-center min-h-[200px]">
                    <StepVisual step={step.visual} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
