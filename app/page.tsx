import "./styles/landing.css"
import Navbar from "./landing/navbar"
import Hero from "./landing/hero"
import Partners from "./landing/partners"
import Benefits from "./landing/benefits"
import HowItWorks from "./landing/how-it-works"
import ProductPreview from "./landing/product-preview"
import Pricing from "./landing/pricing"
import Testimonials from "./landing/testimonials"
import FAQ from "./landing/faq"
import CTASection from "./landing/cta-section"
import Footer from "./landing/footer"

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
