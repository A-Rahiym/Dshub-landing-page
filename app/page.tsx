import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { StatsBar } from '@/components/stats-bar'
import { RolesGrid } from '@/components/roles-grid'
import { ProcessSection } from '@/components/process-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { FAQSection } from '@/components/faq-section'
import { CTABanner } from '@/components/cta-banner'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <StatsBar />
      <RolesGrid />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABanner />
      <Footer />
    </main>
  )
}
