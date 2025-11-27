import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  ArrowRight,
  Users,
  Calendar,
  FileCheck,
  Zap,
  Clock,
  TrendingUp,
  Mail,
  Phone,
  Building2,
  Shield,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <span className="font-mono text-sm font-bold text-primary-foreground">RF</span>
            </div>
            <span className="text-xl font-bold tracking-tight">RentAFlow</span>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="#servicios"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Servicios
            </Link>
            <Link
              href="#como-funciona"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Cómo Funciona
            </Link>
            <Link
              href="#testimonios"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Testimonios
            </Link>
            <Link
              href="#precios"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Precios
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              FAQ
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
              Iniciar Sesión
            </Button>
            <Button size="sm" className="group">
              Solicitar Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        <div className="container mx-auto px-4 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-5xl text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm">
              <Zap className="mr-2 h-3.5 w-3.5" />
              Automatización IA para Agencias Inmobiliarias
            </Badge>

            <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight lg:text-7xl">
              Convierte Tareas Manuales en{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Automatizaciones Inteligentes
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg text-muted-foreground lg:text-xl">
              Automatiza todo el ciclo de gestión de alquileres—desde la captura del lead hasta la firma del
              contrato—con IA. Respuesta 24/7, validación automática y tu propia marca blanca.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="group h-12 px-8 text-base">
                Prueba Gratis 30 Días
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-transparent">
                Ver Caso de Estudio
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Sin tarjeta de crédito • Configuración en 30 minutos • Soporte en español
            </p>
          </div>

          {/* Workflow Visual */}
          <div className="relative mx-auto mt-16 max-w-6xl">
            <div className="rounded-2xl border bg-card p-8 shadow-2xl">
              <div className="grid gap-6 lg:grid-cols-4">
                <WorkflowStep
                  icon={<Mail className="h-6 w-6" />}
                  title="Lead entra"
                  description="Captura desde email, web, Idealista, Fotocasa"
                  number="1"
                />
                <WorkflowStep
                  icon={<Shield className="h-6 w-6" />}
                  title="Validación IA"
                  description="Verifica DNI, ingresos y requisitos"
                  number="2"
                />
                <WorkflowStep
                  icon={<Calendar className="h-6 w-6" />}
                  title="Agenda Visita"
                  description="Sincroniza calendarios automáticamente"
                  number="3"
                />
                <WorkflowStep
                  icon={<FileCheck className="h-6 w-6" />}
                  title="Documentación"
                  description="Recopila docs y cierra contrato"
                  number="4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="border-b py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Confiado por empresas líderes
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
            {[
              "Inmobiliaria Alpha",
              "PropTech Solutions",
              "Urban Rentals",
              "Smart Homes",
              "City Properties",
              "Elite Estates",
            ].map((company) => (
              <div key={company} className="flex items-center justify-center">
                <div className="rounded-lg border bg-card px-6 py-4 text-center">
                  <p className="text-sm font-semibold text-muted-foreground">{company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="servicios" className="border-b py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight lg:text-5xl">
              Por qué las agencias eligen RentAFlow
            </h2>
            <p className="text-pretty text-lg text-muted-foreground">
              No vendemos características. Te ayudamos a cerrar más contratos, ahorrar tiempo y escalar sin ampliar
              plantilla.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <BenefitCard
              icon={<Clock className="h-8 w-8" />}
              title="90% menos emails manuales"
              description="Respuesta instantánea 24/7 a cada lead de alquiler. La IA gestiona preguntas frecuentes, agenda visitas y solicita documentación."
              metric="+15%"
              metricLabel="conversión de leads"
            />
            <BenefitCard
              icon={<TrendingUp className="h-8 w-8" />}
              title="Cierra más contratos"
              description="Respuesta inmediata mejora la experiencia del inquilino y aumenta tu tasa de conversión hasta un 15% en datos completados."
              metric="4 horas"
              metricLabel="ahorradas por cada 50 leads"
            />
            <BenefitCard
              icon={<Users className="h-8 w-8" />}
              title="White-label completo"
              description="Tu logo, tu dominio, tu relación con el cliente. RentAFlow opera con tu marca, sin que tus clientes sepan que hay IA detrás."
              metric="100%"
              metricLabel="personalizable"
            />
            <BenefitCard
              icon={<Shield className="h-8 w-8" />}
              title="Seguridad & RGPD"
              description="Datos cifrados en tránsito y reposo, almacenados en la UE. Cumplimiento total con normativa española de protección de datos."
              metric="EU"
              metricLabel="servidores en Europa"
            />
            <BenefitCard
              icon={<Zap className="h-8 w-8" />}
              title="Panel de control en tiempo real"
              description="Métricas accionables: ratio de visita, tiempo medio de respuesta, conversiones por fase. Visibilidad total del funnel."
              metric="Real-time"
              metricLabel="analytics"
            />
            <BenefitCard
              icon={<Building2 className="h-8 w-8" />}
              title="Sin curva técnica"
              description="Configurado en 30 minutos, sin código, sin instalación local. Onboarding guiado paso a paso en español."
              metric="30 min"
              metricLabel="setup completo"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="como-funciona" className="border-b bg-muted/30 py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight lg:text-5xl">
              Cómo empezar con RentAFlow
            </h2>
            <p className="text-pretty text-lg text-muted-foreground">
              3 simples pasos para automatizar tu gestión de alquileres
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-12 lg:grid-cols-3">
              <ProcessStep
                number="01"
                title="Conecta tus canales"
                description="Integra tu email, formularios web, Idealista y Fotocasa. RentAFlow captura automáticamente cada nuevo lead de alquiler."
                features={["Email forwarding", "API integración", "Portales inmobiliarios"]}
              />
              <ProcessStep
                number="02"
                title="Configura tus reglas"
                description="Define requisitos por inmueble: ingresos mínimos, tipo de contrato, documentos necesarios. La IA filtra automáticamente."
                features={["Filtros personalizados", "Validación DNI/NIE", "Score crediticio"]}
              />
              <ProcessStep
                number="03"
                title="Deja que fluya"
                description="RentAFlow responde, valida, agenda y recopila documentos. Tú solo intervienes en la visita y la firma final."
                features={["Respuesta 24/7", "Auto-programación", "Notificaciones WhatsApp"]}
              />
            </div>
          </div>

          {/* API Example Schematic */}
          <div className="mx-auto mt-16 max-w-4xl">
            <Card className="overflow-hidden">
              <CardHeader className="bg-muted/50">
                <CardTitle className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10">
                    <span className="font-mono text-xs font-bold text-primary">API</span>
                  </div>
                  Vista Interior: Flujo de Automatización
                </CardTitle>
                <CardDescription>Ejemplo esquemático de cómo RentAFlow procesa un lead en tiempo real</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 font-mono text-sm">
                  <div className="rounded-lg border bg-card p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="font-semibold text-green-600">POST /api/leads/capture</span>
                    </div>
                    <pre className="text-xs text-muted-foreground">{`{
  "source": "idealista",
  "property_id": "MAD-2847",
  "lead": {
    "name": "María García",
    "email": "maria@email.com",
    "phone": "+34 600 123 456",
    "message": "Interesada en visita"
  }
}`}</pre>
                  </div>

                  <div className="flex items-center justify-center">
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>

                  <div className="rounded-lg border bg-card p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                      <span className="font-semibold text-blue-600">AI Validation Engine</span>
                    </div>
                    <pre className="text-xs text-muted-foreground">{`{
  "validation_status": "pending_documents",
  "required_docs": ["DNI", "proof_of_income"],
  "risk_score": 78,
  "auto_response_sent": true,
  "next_action": "request_documents"
}`}</pre>
                  </div>

                  <div className="flex items-center justify-center">
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </div>

                  <div className="rounded-lg border bg-card p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                      <span className="font-semibold text-purple-600">Calendar Integration</span>
                    </div>
                    <pre className="text-xs text-muted-foreground">{`{
  "agent": "Carlos López",
  "available_slots": [
    "2025-01-15 10:00",
    "2025-01-15 15:00",
    "2025-01-16 11:00"
  ],
  "notification_sent": true,
  "calendar_link": "cal.rentaflow.app/..."
}`}</pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="border-b py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight lg:text-5xl">
              Precios transparentes que escalan contigo
            </h2>
            <p className="text-pretty text-lg text-muted-foreground">
              Sin costes ocultos. Sin tarifas de instalación. Cancela cuando quieras.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
            <PricingCard
              name="Starter"
              price="99"
              description="Para agencias que gestionan hasta 50 leads mensuales"
              features={[
                "Hasta 50 leads/mes",
                "Respuesta automática 24/7",
                "Integración email",
                "Panel de métricas básico",
                "Soporte email",
                "1 usuario",
              ]}
              cta="Empezar Gratis"
              popular={false}
            />
            <PricingCard
              name="Professional"
              price="249"
              description="El más popular para agencias en crecimiento"
              features={[
                "Hasta 200 leads/mes",
                "Todo en Starter +",
                "Validación IA avanzada",
                "Integración calendarios",
                "Notificaciones WhatsApp",
                "White-label completo",
                "Hasta 5 usuarios",
                "Soporte prioritario",
              ]}
              cta="Prueba 30 Días Gratis"
              popular={true}
            />
            <PricingCard
              name="Enterprise"
              price="Personalizado"
              description="Para redes con alto volumen de operaciones"
              features={[
                "Leads ilimitados",
                "Todo en Professional +",
                "API personalizada",
                "Firma electrónica integrada",
                "Scoring crediticio automático",
                "Onboarding dedicado",
                "Usuarios ilimitados",
                "Soporte 24/7 + Account Manager",
              ]}
              cta="Contactar Ventas"
              popular={false}
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Todos los planes incluyen: cifrado de datos, almacenamiento en UE, cumplimiento RGPD
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="border-b bg-muted/30 py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight lg:text-5xl">
              Amado por agencias en toda España
            </h2>
            <p className="text-pretty text-lg text-muted-foreground">
              Descubre cómo otras agencias están transformando su gestión de alquileres
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="RentAFlow nos ahorró 15 horas semanales en gestión de leads. La respuesta automática 24/7 mejoró nuestra conversión un 20%."
              author="Laura Martínez"
              role="Directora de Operaciones"
              company="PropMadrid"
              rating={5}
            />
            <TestimonialCard
              quote="Implementación súper rápida. En menos de una hora teníamos todo funcionando. El white-label es perfecto para mantener nuestra imagen."
              author="Carlos Rodríguez"
              role="CEO"
              company="Barcelona Rentals"
              rating={5}
            />
            <TestimonialCard
              quote="El panel de métricas nos dio visibilidad total del funnel. Ahora sabemos exactamente dónde optimizar nuestro proceso."
              author="Ana Silva"
              role="Responsable de Alquileres"
              company="Valencia Properties"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="border-b py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight lg:text-5xl">Preguntas Frecuentes</h2>
            <p className="text-pretty text-lg text-muted-foreground">
              ¿Necesitas más información? Consulta nuestras respuestas
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-4">
            <FAQItem
              question="¿Cuánto tiempo tarda la implementación?"
              answer="El onboarding completo se realiza en aproximadamente 30 minutos. Nuestro equipo te guía paso a paso en la configuración de tus canales, definición de reglas y personalización de marca. No requiere conocimientos técnicos."
            />
            <FAQItem
              question="¿Mis clientes sabrán que uso IA?"
              answer="No. RentAFlow opera con tu marca blanca: tu logo, tu dominio de email, tu identidad corporativa. Los inquilinos recibirán comunicaciones que parecen provenir directamente de tu agencia."
            />
            <FAQItem
              question="¿Cómo garantizan la seguridad de los datos?"
              answer="Todos los datos se cifran en tránsito (TLS 1.3) y en reposo (AES-256). Los servidores están ubicados en la UE y cumplimos estrictamente con RGPD. Realizamos auditorías de seguridad trimestrales."
            />
            <FAQItem
              question="¿Puedo cancelar en cualquier momento?"
              answer="Sí, absolutamente. Nuestros planes son de pago mensual sin permanencia. Puedes cancelar desde el panel de control con un solo clic, sin penalizaciones ni preguntas."
            />
            <FAQItem
              question="¿Qué pasa si supero el límite de leads de mi plan?"
              answer="Te notificaremos cuando estés cerca del límite. Puedes actualizar a un plan superior en cualquier momento. Si prefieres no hacerlo, los leads adicionales se procesarán a 2€/lead extra."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-24 text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight lg:text-5xl">
              ¿Listo para transformar tu gestión de alquileres?
            </h2>
            <p className="mb-8 text-pretty text-lg text-primary-foreground/90">
              Únete a cientos de agencias que ya están automatizando con IA. Primer mes gratis, sin tarjeta de crédito,
              cancela cuando quieras.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" className="h-12 px-8 text-base">
                <Phone className="mr-2 h-5 w-5" />
                Reservar Demo Personalizada
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 border-primary-foreground/20 bg-transparent px-8 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                Ver Documentación
              </Button>
            </div>
            <p className="mt-6 text-sm text-primary-foreground/80">
              ¿Preguntas? Escríbenos a{" "}
              <a href="mailto:hola@rentaflow.com" className="underline">
                hola@rentaflow.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <span className="font-mono text-sm font-bold text-primary-foreground">RF</span>
                </div>
                <span className="text-xl font-bold">RentAFlow</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Automatización IA white-label para gestión de alquileres. Responde, valida, agenda y cierra contratos
                automáticamente.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold">Producto</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Características
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Integraciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Casos de Estudio
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold">Empresa</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Carreras
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold">Legal</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Términos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    RGPD
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-muted-foreground">© 2025 RentAFlow. Todos los derechos reservados.</p>
              <div className="flex gap-6">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Helper Components
function WorkflowStep({
  icon,
  title,
  description,
  number,
}: { icon: React.ReactNode; title: string; description: string; number: string }) {
  return (
    <div className="relative">
      <div className="mb-4 flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          {icon}
        </div>
        <div className="absolute -top-2 right-0 font-mono text-5xl font-bold text-muted/10">{number}</div>
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

function BenefitCard({
  icon,
  title,
  description,
  metric,
  metricLabel,
}: { icon: React.ReactNode; title: string; description: string; metric: string; metricLabel: string }) {
  return (
    <Card className="relative overflow-hidden transition-shadow hover:shadow-lg">
      <CardHeader>
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-primary">{metric}</span>
          <span className="text-sm text-muted-foreground">{metricLabel}</span>
        </div>
      </CardContent>
    </Card>
  )
}

function ProcessStep({
  number,
  title,
  description,
  features,
}: { number: string; title: string; description: string; features: string[] }) {
  return (
    <div className="relative">
      <div className="mb-6">
        <span className="mb-4 inline-block font-mono text-5xl font-bold text-primary/20">{number}</span>
        <h3 className="mb-3 text-2xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <ul className="space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm">
            <Check className="h-4 w-4 shrink-0 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function PricingCard({
  name,
  price,
  description,
  features,
  cta,
  popular,
}: { name: string; price: string; description: string; features: string[]; cta: string; popular: boolean }) {
  return (
    <Card className={`relative ${popular ? "border-primary shadow-xl" : ""}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge className="bg-primary px-4 py-1 text-primary-foreground">Más Popular</Badge>
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl">{name}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
        <div className="mt-4">
          {price === "Personalizado" ? (
            <span className="text-4xl font-bold">{price}</span>
          ) : (
            <>
              <span className="text-5xl font-bold">{price}€</span>
              <span className="text-muted-foreground">/mes</span>
            </>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <Button className="mb-6 w-full" variant={popular ? "default" : "outline"}>
          {cta}
        </Button>
        <ul className="space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function TestimonialCard({
  quote,
  author,
  role,
  company,
  rating,
}: { quote: string; author: string; role: string; company: string; rating: number }) {
  return (
    <Card className="transition-shadow hover:shadow-lg">
      <CardContent className="pt-6">
        <div className="mb-4 flex gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <svg key={i} className="h-5 w-5 fill-primary" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="mb-6 text-pretty text-muted-foreground">"{quote}"</p>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">
            {role} • {company}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{question}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{answer}</p>
      </CardContent>
    </Card>
  )
}
