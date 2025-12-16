import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"

export default function TerminosPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8">Términos y Condiciones</h1>

          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground mb-6">
              Última actualización:{" "}
              {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Objeto</h2>
            <p className="text-muted-foreground mb-4">
              Estos términos regulan el uso de la plataforma RentAFlow, un servicio de automatización para la gestión de
              alquileres inmobiliarios.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Descripción del servicio</h2>
            <p className="text-muted-foreground mb-4">
              RentAFlow proporciona herramientas para automatizar la captación de leads, solicitud de documentación,
              programación de visitas y comunicación con candidatos a inquilinos.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Planes y facturación</h2>
            <p className="text-muted-foreground mb-4">
              Los planes disponibles son: Mini (49€/mes), Starter (99€/mes), Agency (249€/mes) y Profesional (499€/mes).
              La facturación es mensual y puede cancelarse en cualquier momento.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Responsabilidades del usuario</h2>
            <p className="text-muted-foreground mb-4">
              El usuario es responsable de la veracidad de los datos introducidos y de la verificación final de los
              candidatos antes de formalizar cualquier contrato de arrendamiento.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Limitación de responsabilidad</h2>
            <p className="text-muted-foreground mb-4">
              RentAFlow facilita la automatización de procesos pero no se responsabiliza de las decisiones finales de
              arrendamiento tomadas por los usuarios.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Modificaciones</h2>
            <p className="text-muted-foreground mb-4">
              Nos reservamos el derecho de modificar estos términos notificando a los usuarios con antelación razonable.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
