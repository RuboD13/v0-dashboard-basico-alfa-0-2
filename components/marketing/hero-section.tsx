import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Clock, Database } from "lucide-react"
import Image from "next/image"

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

          {/* Right Column - Real Dashboard Screenshots */}
          <div className="relative">
            <div className="relative bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
              <Image
                src="/images/image.png"
                alt="RentAFlow Dashboard - Análisis de Aval y gestión de candidatos"
                width={800}
                height={500}
                className="w-full h-auto"
                priority
              />
            </div>

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
