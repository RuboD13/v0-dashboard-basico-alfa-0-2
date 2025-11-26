import { Navbar } from "./landing/navbar"
import { Hero } from "./landing/hero"
import { Partners } from "./landing/partners"
import { Benefits } from "./landing/benefits"
import { HowItWorks } from "./landing/how-it-works"
import { ProductPreview } from "./landing/product-preview"
import { ApiShowcase } from "./landing/api-showcase"
import { Pricing } from "./landing/pricing"
import { Testimonials } from "./landing/testimonials"
import { FAQ } from "./landing/faq"
import { CTASection } from "./landing/cta-section"
import { Footer } from "./landing/footer"
import "./landing/landing.css"

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
        <ApiShowcase />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
