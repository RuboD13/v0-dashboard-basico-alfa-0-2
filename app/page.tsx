import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Partners } from "@/components/landing/partners"
import { Benefits } from "@/components/landing/benefits"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Pricing } from "@/components/landing/pricing"
import { Testimonials } from "@/components/landing/testimonials"
import { FAQ } from "@/components/landing/faq"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"
import { DashboardPreview } from "@/components/landing/dashboard-preview"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Partners />
      <Benefits />
      <HowItWorks />
      <DashboardPreview />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  )
}
