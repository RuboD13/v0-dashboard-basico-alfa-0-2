import { Navbar } from "@/components/rentaflow/navbar"
import { Hero } from "@/components/rentaflow/hero"
import { Partners } from "@/components/rentaflow/partners"
import { Benefits } from "@/components/rentaflow/benefits"
import { HowItWorks } from "@/components/rentaflow/how-it-works"
import { ApiPreview } from "@/components/rentaflow/api-preview"
import { Pricing } from "@/components/rentaflow/pricing"
import { Testimonials } from "@/components/rentaflow/testimonials"
import { FAQ } from "@/components/rentaflow/faq"
import { CTASection } from "@/components/rentaflow/cta-section"
import { Footer } from "@/components/rentaflow/footer"
import "@/styles/rentaflow.css"

export default function RentAFlowLanding() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Partners />
      <Benefits />
      <HowItWorks />
      <ApiPreview />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  )
}
