import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Mail, Calendar, FileText, Users, Zap, Bot } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm font-medium">
              <Zap className="w-3.5 h-3.5 mr-1.5 text-primary" />
              +500 agencias ya automatizan con IA
            </Badge>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance leading-tight">
              Convierte Leads en <span className="text-primary">Contratos</span> Automáticamente
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty leading-relaxed">
              Automatiza respuestas, validación de inquilinos, programación de visitas y recopilación de documentos con
              inteligencia artificial.
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-foreground">90%</p>
                <p className="text-sm text-muted-foreground">Menos emails manuales</p>
              </div>
              <div className="w-px bg-border hidden sm:block" />
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">Respuesta automática</p>
              </div>
              <div className="w-px bg-border hidden sm:block" />
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-foreground">+35%</p>
                <p className="text-sm text-muted-foreground">Tasa de conversión</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild className="text-base px-8">
                <Link href="#contacto">
                  Reservar Demo Gratuita
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8 bg-transparent">
                <Link href="#como-funciona">Ver Cómo Funciona</Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            {/* Main Dashboard Preview */}
            <div className="relative bg-card rounded-2xl shadow-2xl border border-border p-6 transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Dashboard Header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-chart-4/60" />
                <div className="w-3 h-3 rounded-full bg-success/60" />
                <span className="ml-2 text-xs text-muted-foreground">RentAFlow Dashboard</span>
              </div>

              {/* Pipeline Preview */}
              <div className="grid grid-cols-4 gap-2 mb-4">
                {["Nuevo", "Validado", "Visita", "Firmado"].map((stage, i) => (
                  <div key={stage} className="text-center p-2 rounded-lg bg-secondary/50">
                    <p className="text-xs font-medium text-muted-foreground">{stage}</p>
                    <p className="text-lg font-bold text-foreground">{[12, 8, 5, 3][i]}</p>
                  </div>
                ))}
              </div>

              {/* Lead Card Example */}
              <div className="bg-secondary/30 rounded-lg p-3 mb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">María García</p>
                      <p className="text-xs text-muted-foreground">Piso 3B - Centro</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs bg-success/10 text-success">
                    Verificado
                  </Badge>
                </div>
                <div className="flex gap-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> Visita: Mañana 10:00
                  </span>
                </div>
              </div>

              {/* AI Response Preview */}
              <div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
                <div className="flex items-center gap-2 mb-2">
                  <Bot className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium text-primary">IA Respondiendo...</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  &quot;Hola María, gracias por tu interés. He verificado tu perfil y cumples los requisitos. ¿Te viene
                  bien mañana a las 10:00 para la visita?&quot;
                </p>
              </div>
            </div>

            {/* Floating Integration Icons */}
            <div className="absolute -left-4 top-1/4 bg-card rounded-xl p-3 shadow-lg border border-border animate-pulse">
              <Mail className="w-6 h-6 text-muted-foreground" />
            </div>
            <div className="absolute -right-4 top-1/3 bg-card rounded-xl p-3 shadow-lg border border-border">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <div className="absolute -left-2 bottom-1/4 bg-card rounded-xl p-3 shadow-lg border border-border">
              <FileText className="w-6 h-6 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
