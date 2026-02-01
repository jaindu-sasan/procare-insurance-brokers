import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Activity, Car, Building2, Plane, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services | ProCare Insurance Brokers",
  description: "Comprehensive insurance solutions including Life, Health, Vehicle, Business, and Travel Insurance. Expert advice and personalized coverage for individuals and businesses.",
}

const services = [
  {
    id: "life-insurance",
    title: "Life Insurance",
    icon: Heart,
    image: "/images/service-life-insurance.jpg",
    description: [
      "Life insurance is one of the most important financial decisions you can make for your family. It provides a safety net that ensures your loved ones are financially protected in the event of your passing, helping them maintain their standard of living and meet future financial obligations.",
      "At ProCare, we work with leading insurers to offer a range of life insurance products tailored to your unique circumstances. Whether you're looking for term life coverage, whole life policies, or investment-linked plans, our advisors will help you find the right balance of protection and affordability.",
      "We understand that every family's needs are different. Our consultants take the time to understand your financial goals, existing commitments, and future plans to recommend coverage that truly fits your life stage."
    ],
    benefits: [
      "Financial security for your dependents and beneficiaries",
      "Coverage for education expenses and future milestones",
      "Retirement planning and wealth accumulation options",
      "Flexible premium payment terms to suit your budget",
      "Tax advantages on premiums and payouts"
    ],
    suitableFor: "Families, breadwinners, parents planning for children's education, and individuals seeking long-term financial security."
  },
  {
    id: "health-insurance",
    title: "Health Insurance",
    icon: Activity,
    image: "/images/service-health-insurance.jpg",
    description: [
      "Quality healthcare should be accessible to everyone. Health insurance provides the financial protection you need to access the best medical care without the burden of unexpected expenses. From routine check-ups to major surgeries, the right health plan ensures you and your family receive timely treatment.",
      "ProCare partners with reputable health insurers to offer comprehensive medical coverage that includes hospitalization, outpatient care, critical illness protection, and access to extensive healthcare networks across Sri Lanka and internationally.",
      "Our health insurance solutions are designed to give you peace of mind. We help you navigate the complexities of medical coverage, ensuring you understand your benefits and can make informed decisions about your healthcare."
    ],
    benefits: [
      "Comprehensive hospitalization and surgical coverage",
      "Critical illness protection with lump-sum payouts",
      "Access to private hospitals and specialist care",
      "Outpatient and diagnostic coverage options",
      "Family floater plans for cost-effective coverage"
    ],
    suitableFor: "Individuals, families, senior citizens, and anyone seeking quality healthcare access and financial protection against medical emergencies."
  },
  {
    id: "vehicle-insurance",
    title: "Vehicle Insurance",
    icon: Car,
    image: "/images/service-vehicle-insurance.jpg",
    description: [
      "Your vehicle is more than just transportation—it's an essential part of your daily life and a significant investment. Vehicle insurance protects you from financial losses arising from accidents, theft, natural disasters, and third-party liabilities, ensuring you can get back on the road quickly.",
      "ProCare offers a complete range of motor insurance solutions, from basic third-party coverage required by law to comprehensive policies that cover damage to your own vehicle. We work with multiple insurers to find you the best rates without compromising on coverage quality.",
      "Our claims assistance team is here to support you when you need it most. We guide you through the claims process, liaise with insurers on your behalf, and work to ensure fair and timely settlements."
    ],
    benefits: [
      "Comprehensive coverage for accidents, theft, and natural perils",
      "Third-party liability protection as required by law",
      "Coverage for private cars, motorcycles, and commercial vehicles",
      "Fast and hassle-free claims processing",
      "Additional benefits like roadside assistance and towing"
    ],
    suitableFor: "Private vehicle owners, fleet operators, commercial transport businesses, and anyone who wants reliable protection for their vehicles."
  },
  {
    id: "business-insurance",
    title: "Business Insurance",
    icon: Building2,
    image: "/images/service-business-insurance.jpg",
    description: [
      "Running a business comes with inherent risks—from property damage and liability claims to employee-related issues and business interruption. Business insurance provides the comprehensive protection your enterprise needs to operate with confidence and resilience.",
      "ProCare specializes in creating customized insurance packages for businesses of all sizes, from small enterprises to large corporations. We assess your unique risk profile and recommend coverage that protects your assets, employees, and operations against a wide range of potential threats.",
      "Our team understands that every industry has specific challenges. Whether you're in manufacturing, retail, hospitality, or professional services, we have the expertise to design insurance solutions that address your sector's particular requirements."
    ],
    benefits: [
      "Property insurance for buildings, equipment, and inventory",
      "Public and product liability coverage",
      "Professional indemnity for service-based businesses",
      "Employee benefits including group health and life insurance",
      "Business interruption coverage for income protection"
    ],
    suitableFor: "Small and medium enterprises, large corporations, startups, retail businesses, manufacturers, and professional service providers."
  },
  {
    id: "travel-insurance",
    title: "Travel Insurance",
    icon: Plane,
    image: "/images/service-travel-insurance.jpg",
    description: [
      "Whether you're traveling for business or leisure, unexpected events can disrupt your plans and lead to significant expenses. Travel insurance provides essential protection against medical emergencies abroad, trip cancellations, lost luggage, and other travel-related risks.",
      "ProCare offers comprehensive travel insurance plans that cover you from the moment you leave home until you return. Our policies include emergency medical coverage, evacuation services, trip cancellation protection, and 24/7 assistance anywhere in the world.",
      "We understand that every trip is different. Whether you're a frequent business traveler, a family going on holiday, or a student studying abroad, we have travel insurance solutions designed to meet your specific needs and travel patterns."
    ],
    benefits: [
      "Overseas medical and hospitalization coverage",
      "Emergency evacuation and repatriation services",
      "Trip cancellation and interruption protection",
      "Lost, stolen, or delayed baggage compensation",
      "24/7 worldwide emergency assistance hotline"
    ],
    suitableFor: "Holiday travelers, business travelers, students studying abroad, frequent flyers, and anyone planning international or domestic trips."
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-[#263238] text-white py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-secondary font-medium text-sm uppercase tracking-widest">Our Services</span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
              Comprehensive Insurance Solutions
            </h1>
            <p className="text-lg lg:text-xl text-white/80 leading-relaxed">
              ProCare Insurance Brokers offers a complete range of insurance solutions 
              designed to protect what matters most to you. Our experienced advisors work 
              with leading insurers to find the coverage that best fits your needs and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => {
        const Icon = service.icon
        const isEven = index % 2 === 0
        
        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-16 lg:py-24 ${isEven ? "bg-background" : "bg-muted/50"}`}
          >
            <div className="container mx-auto px-4 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
                {/* Image */}
                <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-secondary" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                      {service.title}
                    </h2>
                  </div>

                  <div className="space-y-4 mb-8">
                    {service.description.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
                      Key Benefits
                    </h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, bIndex) => (
                        <li key={bIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8 p-4 bg-secondary/5 rounded-lg border border-secondary/10">
                    <p className="text-sm">
                      <span className="font-semibold text-foreground">Suitable for: </span>
                      <span className="text-muted-foreground">{service.suitableFor}</span>
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Link href="/contact">Request a Quote</Link>
                    </Button>
                    <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 bg-transparent">
                      <Link href="/contact">Talk to an Expert</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-[#263238] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-secondary font-medium text-sm uppercase tracking-widest">Why Choose Us</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4 mb-4">
              The ProCare Advantage
            </h2>
            <p className="text-white/80 text-lg">
              With over 15 years of experience, we've built lasting relationships with 
              our clients by delivering personalized service and expert guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Independent Advice",
                description: "We work with multiple insurers to find you the best coverage and rates, not just one company's products."
              },
              {
                title: "Claims Support",
                description: "Our dedicated team assists you throughout the claims process for faster, fairer settlements."
              },
              {
                title: "Tailored Solutions",
                description: "Every recommendation is customized to your specific needs, circumstances, and budget."
              },
              {
                title: "Trusted Partners",
                description: "We partner with Sri Lanka's leading insurance companies to offer you quality coverage."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="h-14 w-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Ready to Get Protected?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Contact our team today for a free consultation. We'll help you find the 
              right insurance coverage for your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-8 bg-transparent">
                <Link href="tel:+94112345678">Call +94 11 234 5678</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
