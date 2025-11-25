import "../landing/styles/landing.css"
import { Navbar } from "./components/navbar"
import { Hero } from "./components/hero"
import { Partners } from "./components/partners"
import { Benefits } from "./components/benefits"
import { HowItWorks } from "./components/how-it-works"
import { ProductPreview } from "./components/product-preview"
import { Pricing } from "./components/pricing"
import { Testimonials } from "./components/testimonials"
import { FAQ } from "./components/faq"
import { CTASection } from "./components/cta-section"
import { Footer } from "./components/footer"

export const metadata = {
  title: "RentAFlow | Automatiza la Gestión de Alquileres",
  description:
    "Plataforma SaaS B2B para automatizar la gestión completa de alquileres: captura de leads, validación de inquilinos, programación de visitas y gestión documental con IA.",
}

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <Benefits />
        <HowItWorks />
        <ProductPreview />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
