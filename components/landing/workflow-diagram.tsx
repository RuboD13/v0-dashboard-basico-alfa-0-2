import { ArrowRight } from "lucide-react"

export function WorkflowDiagram() {
  const workflow = [
    { label: "Lead", color: "bg-blue-500" },
    { label: "Validación IA", color: "bg-purple-500" },
    { label: "Visita", color: "bg-green-500" },
    { label: "Documentos", color: "bg-orange-500" },
    { label: "Contrato", color: "bg-primary" },
  ]

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">El Flujo de Trabajo Completo</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Desde el primer contacto hasta la firma del contrato, todo automatizado
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {workflow.map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center text-white font-bold shadow-lg`}
                  >
                    {index + 1}
                  </div>
                  <span className="mt-3 text-sm font-medium text-center">{step.label}</span>
                </div>
                {index < workflow.length - 1 && (
                  <ArrowRight className="hidden md:block text-muted-foreground mt-[-24px]" size={24} />
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-border bg-card">
              <h4 className="font-semibold mb-3">Automatización Inteligente</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Captura automática desde portales</li>
                <li>• Filtrado por requisitos con IA</li>
                <li>• Agendamiento inteligente de visitas</li>
                <li>• Recordatorios automáticos</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card">
              <h4 className="font-semibold mb-3">Gestión Documental</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Solicitud automática de documentos</li>
                <li>• Verificación de nóminas y garantías</li>
                <li>• Generación de contratos</li>
                <li>• Almacenamiento seguro en la nube</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
