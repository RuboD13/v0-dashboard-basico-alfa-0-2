import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Clock, Database, CheckCircle2, Mail, MessageSquare } from "lucide-react"

function HeroMockup() {
  return (
    <div className="bg-card rounded-xl border border-border shadow-lg overflow-hidden">
      {/* Mock sidebar */}
      <div className="flex">
        <div className="w-48 bg-secondary/30 border-r border-border p-4 hidden lg:block">
          <div className="font-semibold text-sm text-foreground mb-4">RentAFlow</div>
          <div className="space-y-2">
            {["Dashboard", "Anuncios", "Leads", "Configuración"].map((item, i) => (
              <div
                key={item}
                className={`text-xs px-3 py-2 rounded-lg ${i === 2 ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Main content - Lead card mockup */}
        <div className="flex-1 p-4 lg:p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold text-foreground">María García</h3>
              <p className="text-xs text-muted-foreground">Piso Centro, 3 | ID: 1892</p>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="text-xs h-7 bg-transparent">
                <MessageSquare className="w-3 h-3 mr-1" />
                WhatsApp
              </Button>
              <Button size="sm" variant="outline" className="text-xs h-7 bg-transparent">
                <Mail className="w-3 h-3 mr-1" />
                Correo
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Info personal */}
            <div className="bg-secondary/30 rounded-lg p-3">
              <p className="text-xs font-medium text-muted-foreground mb-2">Información Personal</p>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email</span>
                  <span className="text-foreground">maria@email.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ingresos</span>
                  <span className="text-success font-medium">2.800,00 EUR</span>
                </div>
              </div>
            </div>

            {/* Análisis */}
            <div className="bg-success/10 rounded-lg p-3 border border-success/20">
              <p className="text-xs font-medium text-success mb-2 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                NO REQUIERE AVAL
              </p>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ingresos mín.</span>
                  <span className="text-foreground">2.250,00 EUR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tasa esfuerzo</span>
                  <span className="text-success font-medium">32.1%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Status badges */}
          <div className="flex gap-2 mt-4">
            <div className="bg-success/10 text-success text-xs px-3 py-1.5 rounded-lg font-medium">Datos Completos</div>
            <div className="bg-secondary text-foreground text-xs px-3 py-1.5 rounded-lg">SCORE: 100%</div>
            <div className="bg-secondary text-muted-foreground text-xs px-3 py-1.5 rounded-lg">
              Visita: 20 dic 10:00
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

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
              <Clock className="w-3.5 h-3.5 mr-1.5 text-primary" />
              Ahorra +40 horas al mes en gestiones
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance leading-tight">
              Centraliza y <span className="text-primary">Automatiza</span> tu Gestión de Alquileres
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty leading-relaxed">
              Solicita datos automáticamente a cada lead, programa visitas sin esfuerzo y recopila documentación. La
              verificación final siempre es tuya.
            </p>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-foreground">34.5%</p>
                <p className="text-sm text-muted-foreground">Tasa de conversión</p>
              </div>
              <div className="w-px bg-border hidden sm:block" />
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-foreground">00:49h</p>
                <p className="text-sm text-muted-foreground">Tiempo ahorrado/anuncio</p>
              </div>
              <div className="w-px bg-border hidden sm:block" />
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">Respuesta automática</p>
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

          {/* Right Column - React Mockup */}
          <div className="relative">
            <HeroMockup />

            {/* Floating badges with key value props */}
            <div className="absolute -left-4 top-1/4 bg-card rounded-xl p-3 shadow-lg border border-border">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-xs font-medium text-foreground">Ahorro de tiempo</span>
              </div>
            </div>
            <div className="absolute -right-4 bottom-1/4 bg-card rounded-xl p-3 shadow-lg border border-border">
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-primary" />
                <span className="text-xs font-medium text-foreground">Datos centralizados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
