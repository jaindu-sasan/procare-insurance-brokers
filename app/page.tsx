import HeroSlider from "@/components/home/hero-slider"
import IntroSection from "@/components/home/intro-section"
import ServicesPreview from "@/components/home/services-preview"
import Testimonials from "@/components/home/testimonials"
import FAQSection from "@/components/home/faq-section"
import CTASection from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <IntroSection />
      <ServicesPreview />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </>
  )
}
