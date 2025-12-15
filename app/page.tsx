import { Navbar } from "@/components/landing/navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { PartnersSection } from "@/components/landing/partners-section"
import { BenefitsSection } from "@/components/landing/benefits-section"
import { HowItWorks } from "@/components/landing/how-it-works"
import { WorkflowDiagram } from "@/components/landing/workflow-diagram"
import { PlatformPreview } from "@/components/landing/platform-preview"
import { PricingSection } from "@/components/landing/pricing-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { FAQSection } from "@/components/landing/faq-section"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <BenefitsSection />
      <HowItWorks />
      <WorkflowDiagram />
      <PlatformPreview />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
