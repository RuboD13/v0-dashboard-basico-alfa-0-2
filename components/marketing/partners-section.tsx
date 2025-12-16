import { Badge } from "@/components/ui/badge"

export function PartnersSection() {
  const mainPortal = { name: "Idealista", description: "Optimizado" }
  const otherPortals = [
    { name: "Pisos.com" },
    { name: "Fotocasa" },
    { name: "Habitaclia" },
    { name: "Formularios Web" },
  ]

  const integrations = [{ name: "Google Calendar" }, { name: "Outlook" }, { name: "WhatsApp" }, { name: "Email/CRM" }]

  return (
    <section className="py-12 lg:py-16 border-y border-border bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Portales Section */}
          <div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6 text-center md:text-left">
              Captación de leads desde portales
            </p>

            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
              <div className="relative flex items-center justify-center px-6 py-3 rounded-xl bg-primary/10 border-2 border-primary/30">
                <span className="text-lg font-bold text-primary">Idealista</span>
                <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px]">
                  Optimizado
                </Badge>
              </div>

              {otherPortals.map((portal) => (
                <div
                  key={portal.name}
                  className="flex items-center justify-center px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <span className="text-sm font-medium text-muted-foreground">{portal.name}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center md:text-left">
              + Compatible con cualquier portal que envíe leads por email
            </p>
          </div>

          {/* Integraciones Section */}
          <div>
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6 text-center md:text-left">
              Se integra con tus herramientas
            </p>

            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
              {integrations.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center justify-center px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <span className="text-sm font-medium text-muted-foreground">{tool.name}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center md:text-left">
              Envía datos a cualquier CRM que acepte leads por correo
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
