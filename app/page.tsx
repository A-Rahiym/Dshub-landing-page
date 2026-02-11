import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { StatsBar } from '@/components/stats-bar'
import { RolesGrid } from '@/components/roles-grid'
import { WhyJoinSection } from '@/components/why-join-section'
import { ProcessSection } from '@/components/process-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { FAQSection } from '@/components/faq-section'
import { CTABanner } from '@/components/cta-banner'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="w-full min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <div className="pt-14 sm:pt-16">
        <HeroSection />
        {/* <StatsBar /> */}
        <WhyJoinSection />
        <RolesGrid />
        <ProcessSection />
        {/* <TestimonialsSection /> */}
        <CTABanner />
        <FAQSection />
        <Footer />
      </div>
    </main>
  )
}
