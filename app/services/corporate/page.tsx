import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Building2, Shield, Users, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Corporate Insurance | ProCare Insurance Brokers",
  description: "Corporate insurance services with details and quote request options.",
}

const corporateServices = [
  {
    id: "business-insurance",
    title: "Business Insurance",
    icon: Building2,
    image: "/images/service-business-insurance.jpg",
    intro: "Protect assets, operations, and liabilities with tailored coverage.",
    description: [
      "Business insurance helps protect your property, people, and day-to-day operations from unexpected risks.",
      "We build coverage based on your industry and risk profile — not one-size-fits-all packages.",
      "Our team supports you during claims and renewal to keep your business protected as it grows."
    ],
    benefits: [
      "Property cover for buildings, equipment & stock",
      "Public / product liability options",
      "Business interruption cover options",
      "Industry-specific extensions available",
      "Advisor support for claims & renewals"
    ],
    suitableFor: "SMEs, corporates, startups, retail, hospitality, manufacturing and service providers."
  },
  {
    id: "group-medical",
    title: "Group Medical Insurance",
    icon: Users,
    image: "/images/hero-health.jpg",
    intro: "Flexible employee medical plans that support retention and wellbeing.",
    description: [
      "Group medical insurance helps companies support staff with reliable healthcare access.",
      "We help design benefits, limits, and network options based on your budget and workforce needs.",
      "Plans can be customized with add-ons such as OPD/diagnostics where available."
    ],
    benefits: [
      "Employee and dependent coverage options",
      "Flexible limits and plan design",
      "Network access to private hospitals",
      "Optional OPD/diagnostics where applicable",
      "Renewal support and plan optimization"
    ],
    suitableFor: "Companies of all sizes looking to offer employee health benefits."
  },
  {
    id: "liability-coverage",
    title: "Liability Insurance",
    icon: Shield,
    image: "/images/hero-business.jpg",
    intro: "Reduce exposure to third-party claims and legal costs.",
    description: [
      "Liability cover helps protect your business against third-party claims, damage, and legal expenses.",
      "We recommend the right policy type based on your operations (public, product, professional, etc.).",
      "Our advisors help you align coverage with contracts and compliance requirements."
    ],
    benefits: [
      "Protection against third-party claims",
      "Cover options for legal defense costs",
      "Supports contract requirements",
      "Industry-specific liability options",
      "Guidance on limits and exclusions"
    ],
    suitableFor: "Businesses that interact with the public, clients, or provide professional services."
  }
]

export default function CorporateInsurancePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative bg-[#263238] text-white py-16 lg:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/download.webp" // Replace with your image path
            alt="Corporate Insurance Background"
            fill
            className="object-cover opacity-99" // Adjust opacity as needed
            priority
          />
          {/* Optional: Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#263238]/90 via-[#263238]/70 to-[#263238]/90"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <span className="text-secondary font-medium text-sm uppercase tracking-widest">
            Corporate Insurance
          </span>
          <h1 className="text-3xl lg:text-4xl font-bold mt-4 mb-3">
            Insurance for Businesses & Teams
          </h1>
          <p className="text-white/80 max-w-3xl">
            Browse corporate services below. Expand to see full details and request a quote.
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateServices.map((s) => {
              const Icon = s.icon
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="rounded-xl border bg-card p-5 shadow-sm hover:shadow-md transition cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <p className="font-semibold">{s.title}</p>

                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Details accordions */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Accordion type="multiple" defaultValue={corporateServices.map(s => s.id)} className="space-y-4">
              {corporateServices.map((s) => {
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