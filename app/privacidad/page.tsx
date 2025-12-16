import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8">Política de Privacidad</h1>

          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground mb-6">
              Última actualización:{" "}
              {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Responsable del tratamiento</h2>
            <p className="text-muted-foreground mb-4">
              RentAFlow es el responsable del tratamiento de los datos personales recogidos a través de esta plataforma.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Datos que recopilamos</h2>
            <p className="text-muted-foreground mb-4">
              Recopilamos los datos necesarios para prestar nuestros servicios de automatización de gestión de
              alquileres:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>Datos de identificación (nombre, email, teléfono)</li>
              <li>Datos económicos (ingresos declarados)</li>
              <li>Documentos de identidad y justificantes</li>
              <li>Historial de comunicaciones</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Finalidad del tratamiento</h2>
            <p className="text-muted-foreground mb-4">
              Los datos se utilizan exclusivamente para facilitar el proceso de alquiler entre propietarios/agencias e
              inquilinos potenciales.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Base legal</h2>
            <p className="text-muted-foreground mb-4">
              El tratamiento de datos se basa en el consentimiento del interesado y en la ejecución de un contrato.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Derechos del usuario</h2>
            <p className="text-muted-foreground mb-4">
              Puede ejercer sus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición
              contactando con nosotros.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Almacenamiento de datos</h2>
            <p className="text-muted-foreground mb-4">
              Los datos se almacenan en servidores ubicados dentro de la Unión Europea con las máximas medidas de
              seguridad.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
