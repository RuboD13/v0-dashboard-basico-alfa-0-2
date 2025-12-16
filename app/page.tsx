import { Navbar } from "@/components/marketing/navbar"
import { HeroSection } from "@/components/marketing/hero-section"
import { PartnersSection } from "@/components/marketing/partners-section"
import { BenefitsGrid } from "@/components/marketing/benefits-grid"
import { HowItWorks } from "@/components/marketing/how-it-works"
import { DashboardPreview } from "@/components/marketing/dashboard-preview"
import { PricingCards } from "@/components/marketing/pricing-cards"
import { Testimonials } from "@/components/marketing/testimonials"
import { FAQSection } from "@/components/marketing/faq-section"
import { CTASection } from "@/components/marketing/cta-section"
import { Footer } from "@/components/marketing/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <BenefitsGrid />
      <HowItWorks />
      <DashboardPreview />
      <PricingCards />
      <Testimonials />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
