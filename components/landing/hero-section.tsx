import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Play, Mail, Calendar, MessageSquare, FileCheck, Users, Home, CheckCircle2 } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-chalk via-porcelain to-chalk">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-water/50 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <Badge variant="secondary" className="mb-6 bg-primary-light text-primary border-0 px-4 py-1.5">
              <Users className="w-3.5 h-3.5 mr-1.5" />
              +500 agencias activas
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary leading-tight text-balance">
              Automatiza la Gestión de <span className="text-primary">Alquileres</span> con IA
            </h1>

            <p className="mt-6 text-lg text-secondary/60 leading-relaxed max-w-xl mx-auto lg:mx-0 text-pretty">
              Transforma leads en contratos automáticamente. Respuestas instantáneas, validación inteligente,
              agendamiento de visitas y documentación centralizada.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary-hover text-white px-8 h-12" asChild>
                <Link href="#precios">
                  Prueba Gratis 14 días
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-base hover:bg-porcelain h-12 bg-transparent"
                asChild
              >
                <Link href="#demo">
                  <Play className="w-4 h-4 mr-2" />
                  Ver Demo
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap items-center gap-6 justify-center lg:justify-start text-sm text-secondary/50">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Sin tarjeta de crédito
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Setup en 5 minutos
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Soporte en español
              </div>
            </div>
          </div>

          {/* Right Content - Workflow Visualization */}
          <div className="relative">
            {/* Main workflow card */}
            <div className="relative bg-white rounded-2xl shadow-xl border border-base p-6 lg:p-8">
              {/* Central hub */}
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                    <Home className="w-10 h-10 text-white" />
                  </div>
                  {/* Pulse effect */}
                  <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                </div>
              </div>

              {/* Workflow steps */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Mail, label: "Lead", color: "bg-blue-50 text-blue-600" },
                  { icon: Users, label: "Validación", color: "bg-amber-50 text-amber-600" },
                  { icon: Calendar, label: "Visita", color: "bg-green-50 text-green-600" },
                  { icon: MessageSquare, label: "Feedback", color: "bg-purple-50 text-purple-600" },
                  { icon: FileCheck, label: "Documentos", color: "bg-pink-50 text-pink-600" },
                  { icon: CheckCircle2, label: "Contrato", color: "bg-emerald-50 text-emerald-600" },
                ].map((step, index) => (
                  <div
                    key={step.label}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-porcelain hover:bg-silk transition-colors"
                  >
                    <div className={`w-10 h-10 rounded-lg ${step.color} flex items-center justify-center`}>
                      <step.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-medium text-secondary/70">{step.label}</span>
                  </div>
                ))}
              </div>

              {/* Connection lines decoration */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4F6BF5" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#6C63FF" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Floating app icons */}
            <div
              className="absolute -left-4 top-1/4 w-12 h-12 bg-white rounded-xl shadow-lg border border-base flex items-center justify-center animate-bounce"
              style={{ animationDelay: "0s", animationDuration: "3s" }}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-red-500">
                <path
                  fill="currentColor"
                  d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                />
              </svg>
            </div>
            <div
              className="absolute -right-4 top-1/3 w-12 h-12 bg-white rounded-xl shadow-lg border border-base flex items-center justify-center animate-bounce"
              style={{ animationDelay: "0.5s", animationDuration: "3s" }}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-green-500">
                <path
                  fill="currentColor"
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                />
              </svg>
            </div>
            <div
              className="absolute left-1/4 -bottom-4 w-12 h-12 bg-white rounded-xl shadow-lg border border-base flex items-center justify-center animate-bounce"
              style={{ animationDelay: "1s", animationDuration: "3s" }}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-500">
                <path
                  fill="currentColor"
                  d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
