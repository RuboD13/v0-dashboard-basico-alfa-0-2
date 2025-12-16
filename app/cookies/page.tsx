import { Navbar } from "@/components/marketing/navbar"
import { Footer } from "@/components/marketing/footer"

export default function CookiesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8">Política de Cookies</h1>

          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground mb-6">
              Última actualización:{" "}
              {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. ¿Qué son las cookies?</h2>
            <p className="text-muted-foreground mb-4">
              Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Cookies que utilizamos</h2>
            <ul className="list-disc pl-6 text-muted-foreground mb-4 space-y-2">
              <li>
                <strong>Cookies técnicas:</strong> Necesarias para el funcionamiento de la plataforma
              </li>
              <li>
                <strong>Cookies de sesión:</strong> Mantienen su sesión iniciada
              </li>
              <li>
                <strong>Cookies analíticas:</strong> Nos ayudan a entender cómo usa la plataforma
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Gestión de cookies</h2>
            <p className="text-muted-foreground mb-4">
              Puede configurar su navegador para rechazar cookies, aunque esto puede afectar a la funcionalidad del
              servicio.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Cookies de terceros</h2>
            <p className="text-muted-foreground mb-4">
              Utilizamos servicios de terceros que pueden establecer sus propias cookies para análisis y mejora del
              servicio.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
