import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Heart, Activity, Car, Plane, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Personal Insurance | ProCare Insurance Brokers",
  description: "Personal insurance services with details and quote request options.",
}

const personalServices = [
  {
    id: "life-insurance",
    title: "Life Insurance",
    icon: Heart,
    image: "/images/service-life-insurance.jpg",
    intro: "Protect your family’s future with flexible coverage and affordable options.",
    description: [
      "Life insurance provides a safety net that helps your loved ones stay financially secure if something happens to you.",
      "We compare plans from leading insurers and guide you to the best balance of protection and affordability.",
      "Our advisors recommend coverage based on your income, responsibilities, and future goals."
    ],
    benefits: [
      "Financial security for dependents",
      "Support for education & milestones",
      "Long-term protection options",
      "Flexible premium payment terms",
      "Policy options to suit your budget"
    ],
    suitableFor:
      "Families, breadwinners, parents planning for children’s education, and anyone wanting long-term protection."
  },
  {
    id: "health-insurance",
    title: "Health Insurance",
    icon: Activity,
    image: "/images/service-health-insurance.jpg",
    intro: "Access quality care with strong medical protection and clear benefits.",
    description: [
      "Health insurance helps you manage unexpected medical costs — from minor care to major hospital bills.",
      "We help you choose coverage that matches your needs: hospitalization, outpatient options, and critical illness benefits.",
      "Our team explains what’s covered so you can make confident decisions."
    ],
    benefits: [
      "Hospitalization & surgical coverage",
      "Critical illness protection options",
      "Access to private hospitals",
      "Outpatient/diagnostics add-ons",
      "Family plans available"
    ],
    suitableFor:
      "Individuals, families, senior citizens, and anyone who wants reliable healthcare access with financial protection."
  },
  {
    id: "vehicle-insurance",
    title: "Vehicle Insurance",
    icon: Car,
    image: "/images/service-vehicle-insurance.jpg",
    intro: "Cover accidents, theft, liabilities and get help when you need it most.",
    description: [
      "Vehicle insurance protects you from unexpected costs from accidents, theft, and third-party liabilities.",
      "We compare multiple insurers to find strong coverage with competitive pricing.",
      "Our claims support helps you through the process for faster, fairer settlement."
    ],
    benefits: [
      "Accident, theft & natural perils cover",
      "Third-party liability protection",
      "Private & commercial vehicle options",
      "Claims support guidance",
      "Optional add-ons (towing/assistance)"
    ],
    suitableFor:
      "Private vehicle owners, fleet operators, and anyone who wants dependable motor protection."
  },
  {
    id: "travel-insurance",
    title: "Travel Insurance",
    icon: Plane,
    image: "/images/service-travel-insurance.jpg",
    intro: "Travel with confidence — medical cover, cancellations, baggage and 24/7 help.",
    description: [
      "Travel insurance helps protect you from disruptions like medical emergencies abroad, cancellations, and lost luggage.",
      "We offer plans that cover you from departure to return — with emergency assistance options.",
      "Choose cover based on your trip type: leisure, business, frequent travel, or student travel."
    ],
    benefits: [
      "Overseas medical coverage",
      "Emergency evacuation support",
      "Trip cancellation/interruption cover",
      "Lost/delayed baggage compensation",
      "24/7 assistance options"
    ],
    suitableFor:
      "Holiday travelers, business travelers, students, frequent flyers, and families planning trips."
  }
]

export default function PersonalInsurancePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-[#263238] text-white py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <span className="text-secondary font-medium text-sm uppercase tracking-widest">
            Personal Insurance
          </span>
          <h1 className="text-3xl lg:text-4xl font-bold mt-4 mb-3">
            Insurance for You & Your Family
          </h1>
          <p className="text-white/80 max-w-3xl">
            Browse services below. Expand a service to see full details and request a quote.
          </p>

          <div className="mt-6 flex gap-3 flex-wrap">
            <Button asChild variant="outline" className="bg-transparent text-white border-white/30 hover:bg-white/10">
              <Link href="/services">Back to Categories</Link>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick cards */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalServices.map((s) => {
              const Icon = s.icon
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="rounded-xl border bg-card p-5 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold">{s.title}</p>
                      <p className="text-sm text-muted-foreground line-clamp-1">{s.intro}</p>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Details accordions (same page) */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {personalServices.map((s) => {
                const Icon = s.icon
                return (
                  <AccordionItem key={s.id} value={s.id} className="rounded-xl border bg-card" id={s.id}>
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-secondary" />
                        </div>
                        <div className="text-left">
                          <p className="font-semibold">{s.title}</p>
                          <p className="text-sm text-muted-foreground">{s.intro}</p>
                        </div>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="px-6 pb-6">
                      <div className="grid lg:grid-cols-2 gap-8 items-start">
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden border">
                          <Image src={s.image || "/placeholder.svg"} alt={s.title} fill className="object-cover" />
                        </div>

                        <div>
                          <div className="space-y-3 mb-6">
                            {s.description.map((p, i) => (
                              <p key={i} className="text-muted-foreground leading-relaxed">
                                {p}
                              </p>
                            ))}
                          </div>

                          <h3 className="text-sm font-semibold uppercase tracking-wide mb-3">Key Benefits</h3>
                          <ul className="space-y-2 mb-6">
                            {s.benefits.map((b, i) => (
                              <li key={i} className="flex gap-3 items-start">
                                <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5" />
                                <span className="text-muted-foreground">{b}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="p-4 rounded-lg border bg-secondary/5 mb-6">
                            <p className="text-sm">
                              <span className="font-semibold">Suitable for: </span>
                              <span className="text-muted-foreground">{s.suitableFor}</span>
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-3">
                            <Button asChild className="bg-primary hover:bg-primary/90">
                              <Link href={`/contact?service=${s.id}`}>Request This Insurance</Link>
                            </Button>
                            <Button asChild variant="outline" className="bg-transparent">
                              <Link href="/contact">Talk to an Expert</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}
