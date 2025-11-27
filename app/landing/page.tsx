import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Partners from "./components/partners"
import Benefits from "./components/benefits"
import HowItWorks from "./components/how-it-works"
import ProductShowcase from "./components/product-showcase"
import Pricing from "./components/pricing"
import Testimonials from "./components/testimonials"
import FAQ from "./components/faq"
import CTASection from "./components/cta-section"
import Footer from "./components/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-chalk">
      <Navbar />
      <Hero />
      <Partners />
      <Benefits />
      <HowItWorks />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  )
}
