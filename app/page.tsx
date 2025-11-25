import "@/app/styles/landing.css"
import Navbar from "@/app/landing/navbar"
import Hero from "@/app/landing/hero"
import Partners from "@/app/landing/partners"
import Benefits from "@/app/landing/benefits"
import HowItWorks from "@/app/landing/how-it-works"
import ProductPreview from "@/app/landing/product-preview"
import Pricing from "@/app/landing/pricing"
import Testimonials from "@/app/landing/testimonials"
import FAQ from "@/app/landing/faq"
import CTASection from "@/app/landing/cta-section"
import Footer from "@/app/landing/footer"

export default function LandingPage() {
  return (
    <div className="landing-page">
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
    </div>
  )
}
