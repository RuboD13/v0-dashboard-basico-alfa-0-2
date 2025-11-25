import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, CheckCircle2, Zap, Users, Clock } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Social Proof Badge */}
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
              <Users className="w-4 h-4 mr-2" />
              +500 agencias ya confían en nosotros
            </Badge>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-6">
              Convierte Leads en <span className="text-primary">Contratos</span> de Forma Automática
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 text-pretty">
              RentAFlow es tu asistente IA white-label que automatiza el 80% de la gestión de alquileres. Respuesta
              instantánea 24/7, filtrado inteligente y agendado automático de visitas.
            </p>

            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>90% menos emails manuales</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span>Respuesta en segundos</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>Setup en 30 min</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                Empieza Gratis
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="group bg-transparent">
                <Play className="mr-2 w-4 h-4 group-hover:text-primary transition-colors" />
                Ver Demo
              </Button>
            </div>

            {/* Trust Text */}
            <p className="mt-6 text-xs text-muted-foreground">
              Sin tarjeta de crédito • Primer mes gratis • Cancela cuando quieras
            </p>
          </div>

          {/* Right Content - Product Preview */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl border border-border shadow-2xl p-6 transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Mock Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Panel de Control</p>
                    <p className="text-xs text-muted-foreground">RentAFlow Dashboard</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">En vivo</Badge>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-secondary/50 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-foreground">147</p>
                  <p className="text-xs text-muted-foreground">Leads este mes</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-foreground">89%</p>
                  <p className="text-xs text-muted-foreground">Tasa respuesta</p>
                </div>
                <div className="bg-secondary/50 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-primary">32</p>
                  <p className="text-xs text-muted-foreground">Visitas agendadas</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="space-y-3">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Actividad Reciente</p>
                <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <span className="text-xs font-medium text-blue-700 dark:text-blue-300">MG</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">María García</p>
                    <p className="text-xs text-muted-foreground">Documentación completada</p>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-200">
                    Completado
                  </Badge>
                </div>
                <div className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                    <span className="text-xs font-medium text-yellow-700 dark:text-yellow-300">JR</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">Juan Rodríguez</p>
                    <p className="text-xs text-muted-foreground">Visita programada: Mañana 10:00</p>
                  </div>
                  <Badge variant="outline" className="text-yellow-600 border-yellow-200">
                    Pendiente
                  </Badge>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-card rounded-xl border border-border shadow-lg p-3 animate-pulse">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs font-medium text-foreground">Nuevo lead detectado</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl border border-border shadow-lg p-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-xs font-medium text-foreground">IA validó documentos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
